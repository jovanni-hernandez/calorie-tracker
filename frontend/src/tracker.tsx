import React, { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BrowserMultiFormatReader, IScannerControls } from "@zxing/browser";

export interface HomeAssistant {
  callApi<T>(method: string, path: string, data?: unknown): Promise<T>;
  config?: { time_zone?: string };
}

interface Product {
  id: number;
  upc: string | null;
  name: string;
  brand: string | null;
  source: string;
  lookup_status: string;
  serving_size: string | null;
  serving_weight_g: number | null;
  calories: number | null;
  protein_g: number | null;
  carbs_g: number | null;
  fat_g: number | null;
}

interface Profile {
  id: number;
  display_name: string;
  calorie_target: number;
  protein_target_g: number;
  carbs_target_g: number;
  fat_target_g: number;
}

interface Meal {
  id: number;
  consumed_at: string;
  amount_mode: "servings" | "grams" | "ounces";
  amount: number;
  calories: number;
  protein_g: number;
  carbs_g: number;
  fat_g: number;
  product: Product;
}

interface Totals {
  date: string;
  calories: number;
  protein_g: number;
  carbs_g: number;
  fat_g: number;
  profile: Profile;
}

interface TrackerProps {
  hass: HomeAssistant;
}

function toggleHomeAssistantMenu(event: React.MouseEvent<HTMLButtonElement>): void {
  event.currentTarget.dispatchEvent(
    new CustomEvent("hass-toggle-menu", { bubbles: true, composed: true }),
  );
}

const zonedParts = (value: Date, timeZone?: string): Record<string, string> => {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    ...(timeZone ? { timeZone } : {}),
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  return Object.fromEntries(
    formatter.formatToParts(value).map(({ type, value: part }) => [type, part]),
  );
};

const todayLocal = (timeZone?: string): string => {
  const parts = zonedParts(new Date(), timeZone);
  return `${parts.year}-${parts.month}-${parts.day}`;
};

const localDateTime = (value = new Date(), timeZone?: string): string => {
  const parts = zonedParts(value, timeZone);
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
};

const localDateTimeToIso = (value: string, timeZone?: string): string => {
  if (!timeZone) return new Date(value).toISOString();
  const [datePart, timePart] = value.split("T");
  const [year, month, day] = (datePart ?? "").split("-").map(Number);
  const [hour, minute] = (timePart ?? "").split(":").map(Number);
  const expected = Date.UTC(
    year ?? 0,
    (month ?? 1) - 1,
    day ?? 1,
    hour ?? 0,
    minute ?? 0,
  );
  let guess = expected;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const parts = zonedParts(new Date(guess), timeZone);
    const observed = Date.UTC(
      Number(parts.year),
      Number(parts.month) - 1,
      Number(parts.day),
      Number(parts.hour),
      Number(parts.minute),
    );
    guess += expected - observed;
  }
  return new Date(guess).toISOString();
};

const api = <T,>(
  hass: HomeAssistant,
  method: string,
  path: string,
  data?: unknown,
): Promise<T> => hass.callApi<T>(method, `calorie_tracker/api/v1/${path}`, data);

const metric = (value: number): string => Math.round(value).toLocaleString();

function NutritionLine({ product }: { product: Product }): React.ReactElement {
  const value = (fact: number | null): string => (fact === null ? "—" : metric(fact));
  return (
    <p className="nutrition-line">
      {value(product.calories)} kcal · P {value(product.protein_g)}g · C{" "}
      {value(product.carbs_g)}g · F {value(product.fat_g)}g
    </p>
  );
}

export function CalorieTrackerApp({ hass }: TrackerProps): React.ReactElement {
  const [date, setDate] = useState(() => todayLocal(hass.config?.time_zone));
  const [profile, setProfile] = useState<Profile | null>(null);
  const [totals, setTotals] = useState<Totals | null>(null);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);
  const [editingProduct, setEditingProduct] = useState(false);
  const [query, setQuery] = useState("");
  const [amountMode, setAmountMode] = useState<"servings" | "grams" | "ounces">("servings");
  const [amount, setAmount] = useState("1");
  const [consumedAt, setConsumedAt] = useState(() =>
    localDateTime(new Date(), hass.config?.time_zone),
  );
  const [upc, setUpc] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [scannerOpen, setScannerOpen] = useState(false);
  const [labelOpen, setLabelOpen] = useState(false);
  const [targetsOpen, setTargetsOpen] = useState(false);

  const reload = useCallback(async () => {
    try {
      const [currentProfile, dayTotals, dayMeals, catalog] = await Promise.all([
        api<Profile>(hass, "GET", "me"),
        api<Totals>(hass, "GET", `totals?date=${date}`),
        api<Meal[]>(hass, "GET", `meals?date=${date}`),
        api<Product[]>(hass, "GET", `products?q=${encodeURIComponent(query)}`),
      ]);
      setProfile(currentProfile);
      setTotals(dayTotals);
      setMeals(dayMeals);
      setProducts(catalog);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not load tracker data.");
    }
  }, [date, hass, query]);

  useEffect(() => {
    void reload();
  }, [reload]);

  const lookup = useCallback(
    async (barcode: string, refresh = false) => {
      setBusy(true);
      setMessage("Looking up product…");
      try {
        const result = await api<Product | null>(
          hass,
          "GET",
          `products/lookup?upc=${encodeURIComponent(barcode)}${refresh ? "&refresh=true" : ""}`,
        );
        if (!result) {
          setSelected(null);
          setEditingProduct(false);
          setUpc(barcode);
          setMessage("No nutrition match. Scan the nutrition label to add this product.");
        } else {
          setSelected(result);
          setEditingProduct(false);
          setUpc(barcode);
          setAmount("1");
          setAmountMode("servings");
          setMessage(`Found via ${result.source.replaceAll("_", " ")}. Review before logging.`);
        }
      } catch (error) {
        setMessage(error instanceof Error ? error.message : "Product lookup failed.");
      } finally {
        setBusy(false);
        setScannerOpen(false);
      }
    },
    [hass],
  );

  const submitUpc = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (/^\d{8,14}$/.test(upc.trim())) void lookup(upc.trim());
    else setMessage("Enter a UPC with 8–14 digits.");
  };

  const onBarcodeScan = useCallback(
    (code: string) => {
      void lookup(code);
    },
    [lookup],
  );

  const addMeal = async (): Promise<void> => {
    if (!selected) return;
    setBusy(true);
    try {
      await api<Meal>(hass, "POST", "meals", {
        product_id: selected.id,
        consumed_at: localDateTimeToIso(consumedAt, hass.config?.time_zone),
        amount_mode: amountMode,
        amount: Number(amount),
      });
      setSelected(null);
      setUpc("");
      setMessage("Meal logged.");
      await reload();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not log meal.");
    } finally {
      setBusy(false);
    }
  };

  const saveOcrProduct = async (facts: OcrFacts): Promise<void> => {
    try {
      const product = await api<Product>(hass, "POST", "products", {
        upc: upc || null,
        name: facts.name || `Scanned food ${new Date().toLocaleDateString()}`,
        source: "label",
        serving_size: facts.servingSize || null,
        serving_weight_g: facts.servingWeightG,
        calories: facts.calories,
        protein_g: facts.protein,
        carbs_g: facts.carbs,
        fat_g: facts.fat,
      });
      setSelected(product);
      setEditingProduct(false);
      setLabelOpen(false);
      setMessage("Label facts extracted locally. Review and confirm the product.");
      await reload();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not save label facts.");
    }
  };

  const saveTargets = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const updated = await api<Profile>(hass, "PUT", "me/targets", {
        calorie_target: Number(data.get("calories")),
        protein_target_g: Number(data.get("protein")),
        carbs_target_g: Number(data.get("carbs")),
        fat_target_g: Number(data.get("fat")),
      });
      setProfile(updated);
      setTargetsOpen(false);
      await reload();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not save targets.");
    }
  };

  const saveProductFacts = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (!selected) return;
    const data = new FormData(event.currentTarget);
    const optionalNumber = (key: string): number | null => {
      const value = String(data.get(key) ?? "").trim();
      return value ? Number(value) : null;
    };
    try {
      const updated = await api<Product>(hass, "PATCH", `products/${selected.id}`, {
        name: String(data.get("product_name") ?? selected.name).trim(),
        brand: String(data.get("brand") ?? "").trim() || null,
        serving_size: String(data.get("serving_size") ?? "").trim() || null,
        serving_weight_g: optionalNumber("serving_weight_g"),
        calories: optionalNumber("calories"),
        protein_g: optionalNumber("protein_g"),
        carbs_g: optionalNumber("carbs_g"),
        fat_g: optionalNumber("fat_g"),
      });
      setSelected(updated);
      setEditingProduct(false);
      setMessage("Product facts saved to your catalog.");
      await reload();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not update product facts.");
    }
  };

  const selectProduct = (product: Product): void => {
    setSelected(product);
    setEditingProduct(false);
    setUpc(product.upc ?? "");
    setAmount("1");
    setAmountMode("servings");
    setConsumedAt(localDateTime(new Date(), hass.config?.time_zone));
  };

  const editMeal = async (meal: Meal): Promise<void> => {
    const nextAmount = window.prompt("Amount consumed:", String(meal.amount));
    if (nextAmount === null || !Number.isFinite(Number(nextAmount)) || Number(nextAmount) <= 0) return;
    const nextTime = window.prompt(
      "Local date and time (YYYY-MM-DDTHH:mm):",
      localDateTime(new Date(meal.consumed_at), hass.config?.time_zone),
    );
    if (nextTime === null) return;
    await api(hass, "PATCH", `meals/${meal.id}`, {
      amount: Number(nextAmount),
      consumed_at: localDateTimeToIso(nextTime, hass.config?.time_zone),
    });
    await reload();
  };

  const deleteMeal = async (meal: Meal): Promise<void> => {
    if (!window.confirm(`Delete ${meal.product.name} from this day?`)) return;
    await api(hass, "DELETE", `meals/${meal.id}`);
    await reload();
  };

  const progress = useMemo(() => {
    if (!totals || !profile) return [0, 0, 0, 0];
    return [
      (totals.calories / profile.calorie_target) * 100,
      (totals.protein_g / profile.protein_target_g) * 100,
      (totals.carbs_g / profile.carbs_target_g) * 100,
      (totals.fat_g / profile.fat_target_g) * 100,
    ].map((value) => Math.min(100, Math.max(0, value)));
  }, [profile, totals]);
  const caloriesRemaining = Math.max(
    0,
    (profile?.calorie_target ?? 0) - (totals?.calories ?? 0),
  );
  const nutritionComplete =
    selected !== null &&
    selected.calories !== null &&
    selected.protein_g !== null &&
    selected.carbs_g !== null &&
    selected.fat_g !== null;

  return (
    <main className="tracker">
      <header className="topbar">
        <div className="topbar-left">
          <button className="icon-button ha-menu-button" onClick={toggleHomeAssistantMenu} aria-label="Open Home Assistant menu">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div className="brand-lockup">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M19.8 4.2C12.9 4.4 7.4 5.8 5 9.7c-1.5 2.5-.6 5.7 1.8 6.7 2.3 1 4.8-.4 5.8-2.6.9-1.9 2.5-4.7 7.2-8.4ZM5.2 20c2.4-4.8 5.7-8.2 10.1-10.6" /></svg>
            </span>
            <span className="brand-name">NOURISH</span>
          </div>
        </div>
        <button className="icon-button" onClick={() => setTargetsOpen(true)} aria-label="Edit daily targets">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" /><path d="m19.4 13.5 1.1.8-1.1 1.9-1.3-.5a7.8 7.8 0 0 1-1.5.9l-.2 1.4h-2.2l-.3-1.4a7.8 7.8 0 0 1-1.7 0l-.8 1.2-1.9-1.1.5-1.3a7.8 7.8 0 0 1-.9-1.5l-1.4-.2v-2.2l1.4-.3a7.8 7.8 0 0 1 0-1.7L6 8.7l1.1-1.9 1.3.5a7.8 7.8 0 0 1 1.5-.9l.2-1.4h2.2l.3 1.4a7.8 7.8 0 0 1 1.7 0l.8-1.2L17 6.3l-.5 1.3a7.8 7.8 0 0 1 .9 1.5l1.4.2v2.2l-1.4.3a7.8 7.8 0 0 1 0 1.7Z" /></svg>
        </button>
      </header>

      <section className="page-intro">
        <p className="eyebrow">YOUR DAILY CHECK-IN</p>
        <h1>Today</h1>
        <p className="intro-copy">A little awareness goes a long way, {profile?.display_name ?? "there"}.</p>
      </section>

      <section className="summary-card" aria-label="Daily nutrition summary">
        <div className="summary-heading">
          <div>
            <p className="summary-kicker">DAILY INTAKE</p>
            <h2>Calories</h2>
          </div>
          <label className="date-control">
            <span className="visually-hidden">Choose log date</span>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </label>
        </div>
        <div className="calorie-total">
          <strong>{metric(totals?.calories ?? 0)}<span>kcal</span></strong>
          <span className="goal-copy">of {metric(profile?.calorie_target ?? 0)} kcal goal</span>
        </div>
        <Progress label="Calories" current={totals?.calories ?? 0} target={profile?.calorie_target ?? 0} percent={progress[0] ?? 0} />
        <div className="macro-grid">
          <Progress label="Protein" current={totals?.protein_g ?? 0} target={profile?.protein_target_g ?? 0} percent={progress[1] ?? 0} unit="g" />
          <Progress label="Carbs" current={totals?.carbs_g ?? 0} target={profile?.carbs_target_g ?? 0} percent={progress[2] ?? 0} unit="g" />
          <Progress label="Fat" current={totals?.fat_g ?? 0} target={profile?.fat_target_g ?? 0} percent={progress[3] ?? 0} unit="g" />
        </div>
        <p className="remaining-copy">{metric(caloriesRemaining)} kcal remaining today</p>
      </section>

      <section className="scan-card">
        <p className="eyebrow">QUICK ADD</p>
        <h2>Add food to your day</h2>
        <p className="muted">Scan a barcode or choose something you’ve logged before.</p>
        <button className="primary-button" onClick={() => setScannerOpen(true)} disabled={busy}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5v14M7 5v14m3-14v14m5-14v14m2-14v14m3-14v14" /><path d="M2 8h2m16 0h2M2 16h2m16 0h2" /></svg>
          Scan a barcode
        </button>
        <div className="manual-divider"><span>or enter the barcode</span></div>
        <form className="manual-upc" onSubmit={submitUpc}>
          <input
            inputMode="numeric"
            pattern="[0-9]*"
            value={upc}
            onChange={(event) => setUpc(event.target.value)}
            placeholder="UPC number"
            aria-label="Enter UPC barcode"
          />
          <button type="submit" disabled={busy}>Look up</button>
        </form>
        <button className="text-button label-scan-button" onClick={() => setLabelOpen(true)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
          Add from nutrition label
        </button>
        {!selected && /^\d{8,14}$/.test(upc) && (
          <button
            className="text-button"
            onClick={() => void lookup(upc, true)}
            disabled={busy}
          >
            Retry UPC lookup
          </button>
        )}
        {message && <p className="status-message" role="status">{message}</p>}
      </section>

      {selected && (
        <section className="product-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">REVIEW PRODUCT · {selected.source.replaceAll("_", " ")}</p>
              <h2>{selected.name}</h2>
              <p className="muted">{selected.brand || "Brand not listed"} · {selected.serving_size || "Serving size unavailable"}</p>
            </div>
            <button className="close-button" onClick={() => setSelected(null)} aria-label="Close">×</button>
          </div>
          <NutritionLine product={selected} />
          {!nutritionComplete && (
            <p className="error-message">
              Fill in all four nutrition values before logging this product.
            </p>
          )}
          <div className="product-actions">
            <button className="text-button inline-button" onClick={() => setEditingProduct((value) => !value)}>
              {editingProduct ? "Cancel fact edits" : "Edit product facts"}
            </button>
            {selected.upc && (
              <button
                className="text-button inline-button"
                onClick={() => void lookup(selected.upc ?? "", true)}
                disabled={busy}
              >
                Refresh lookup
              </button>
            )}
          </div>
          {editingProduct && (
            <form className="product-edit-form" onSubmit={(event) => void saveProductFacts(event)}>
              <label>Product name<input name="product_name" defaultValue={selected.name} required /></label>
              <label>Brand<input name="brand" defaultValue={selected.brand ?? ""} /></label>
              <label>Serving size<input name="serving_size" defaultValue={selected.serving_size ?? ""} /></label>
              <label>Serving weight (g)<input name="serving_weight_g" type="number" min="0.1" step="0.1" defaultValue={selected.serving_weight_g ?? ""} /></label>
              <label>Calories<input name="calories" type="number" min="0" step="0.1" defaultValue={selected.calories ?? ""} /></label>
              <label>Protein (g)<input name="protein_g" type="number" min="0" step="0.1" defaultValue={selected.protein_g ?? ""} /></label>
              <label>Carbs (g)<input name="carbs_g" type="number" min="0" step="0.1" defaultValue={selected.carbs_g ?? ""} /></label>
              <label>Fat (g)<input name="fat_g" type="number" min="0" step="0.1" defaultValue={selected.fat_g ?? ""} /></label>
              <button className="secondary-button wide-field" type="submit">Save product facts</button>
            </form>
          )}
          <div className="form-grid">
            <label>
              Amount
              <input type="number" min="0.1" step="0.1" value={amount} onChange={(event) => setAmount(event.target.value)} />
            </label>
            <label>
              Measure
              <select value={amountMode} onChange={(event) => setAmountMode(event.target.value as "servings" | "grams" | "ounces")}>
                <option value="servings">Servings</option>
                <option value="grams" disabled={!selected.serving_weight_g}>Grams</option>
                <option value="ounces" disabled={!selected.serving_weight_g}>Ounces</option>
              </select>
            </label>
            <label className="wide-field">
              Date and time
              <input type="datetime-local" value={consumedAt} onChange={(event) => setConsumedAt(event.target.value)} />
            </label>
          </div>
          {amountMode !== "servings" && selected.serving_weight_g && (
            <p className="muted">Serving weight: {selected.serving_weight_g} g</p>
          )}
          <button
            className="primary-button"
            onClick={() => void addMeal()}
            disabled={busy || !nutritionComplete}
          >
            Add to daily log
          </button>
        </section>
      )}

      <section className="catalog-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR FOOD LIBRARY</p>
            <h2>Recently scanned</h2>
            <p className="muted">Tap a food to add it to today’s log.</p>
          </div>
        </div>
        <input
          className="search-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search your product catalog"
          aria-label="Search catalog"
        />
        <div className="product-list">
          {products.map((product) => (
            <button className="product-row" key={product.id} onClick={() => selectProduct(product)}>
              <span><strong>{product.name}</strong><small>{product.serving_size || "Serving details unavailable"}</small></span>
              <NutritionLine product={product} />
              <span aria-hidden="true">›</span>
            </button>
          ))}
          {products.length === 0 && <p className="empty-state">Scanned products will appear here.</p>}
        </div>
      </section>

      <section className="history-card">
        <div className="section-heading log-heading">
          <div><p className="eyebrow">WHAT YOU’VE HAD</p><h2>Today’s log</h2></div>
          <span className="meal-count">{meals.length} {meals.length === 1 ? "item" : "items"}</span>
        </div>
        {meals.length === 0 ? (
          <p className="empty-state">Nothing logged for this day yet.</p>
        ) : (
          meals.map((meal) => (
            <article className="meal-row" key={meal.id}>
              <div className="meal-main">
                <strong>{meal.product.name}</strong>
                <small>
                  {new Intl.DateTimeFormat(undefined, {
                    hour: "numeric",
                    minute: "2-digit",
                    ...(hass.config?.time_zone ? { timeZone: hass.config.time_zone } : {}),
                  }).format(new Date(meal.consumed_at))} · {meal.amount} {meal.amount_mode}
                </small>
              </div>
              <div className="meal-nutrition">
                <strong>{metric(meal.calories)} kcal</strong>
                <small>P {metric(meal.protein_g)} · C {metric(meal.carbs_g)} · F {metric(meal.fat_g)}g</small>
              </div>
              <button className="small-button" onClick={() => void editMeal(meal)} aria-label={`Edit ${meal.product.name}`}>Edit</button>
              <button className="small-button danger" onClick={() => void deleteMeal(meal)} aria-label={`Delete ${meal.product.name}`}>×</button>
            </article>
          ))
        )}
      </section>

      {scannerOpen && <BarcodeScanner onClose={() => setScannerOpen(false)} onScan={onBarcodeScan} />}
      {labelOpen && (
        <LabelScanner
          onClose={() => setLabelOpen(false)}
          onExtract={(facts) => void saveOcrProduct(facts)}
        />
      )}
      {targetsOpen && profile && (
        <div className="modal-backdrop">
          <form className="modal-card" onSubmit={(event) => void saveTargets(event)}>
            <h2>Daily targets</h2>
            <TargetField label="Calories" name="calories" unit="kcal" value={profile.calorie_target} />
            <TargetField label="Protein" name="protein" unit="g" value={profile.protein_target_g} />
            <TargetField label="Carbs" name="carbs" unit="g" value={profile.carbs_target_g} />
            <TargetField label="Fat" name="fat" unit="g" value={profile.fat_target_g} />
            <div className="modal-actions">
              <button type="button" className="secondary-button" onClick={() => setTargetsOpen(false)}>Cancel</button>
              <button className="primary-button" type="submit">Save targets</button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}

function Progress({
  label,
  current,
  target,
  percent,
  unit = "",
}: {
  label: string;
  current: number;
  target: number;
  percent: number;
  unit?: string;
}): React.ReactElement {
  return (
    <div className="progress-block">
      <div className="progress-label"><span>{label}</span><strong>{metric(current)}{unit} / {metric(target)}{unit}</strong></div>
      <div className="progress-track"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
    </div>
  );
}

function TargetField({
  label,
  name,
  unit,
  value,
}: {
  label: string;
  name: string;
  unit: string;
  value: number;
}): React.ReactElement {
  return <label className="target-field">{label} ({unit})<input name={name} type="number" min="1" step="1" defaultValue={value} required /></label>;
}

function cameraErrorName(error: unknown): string {
  if (error instanceof DOMException || error instanceof Error) return error.name;
  return "";
}

function cameraErrorMessage(error: unknown): string {
  if (!window.isSecureContext) {
    return "Camera access needs a secure Home Assistant connection (HTTPS). You can still enter the barcode below.";
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    return "This Home Assistant app/browser does not provide camera access to this page. Enter the barcode manually instead.";
  }
  switch (cameraErrorName(error)) {
    case "NotAllowedError":
    case "SecurityError":
      return "Camera access was blocked by the app or browser. Check both the Home Assistant app permission and this site’s camera permission, then reopen the scanner.";
    case "NotFoundError":
    case "DevicesNotFoundError":
      return "No camera was found. Enter the barcode manually instead.";
    case "NotReadableError":
    case "TrackStartError":
      return "The camera could not start. Close other apps using the camera and try again.";
    case "OverconstrainedError":
      return "This device could not select a camera. Try again or enter the barcode manually.";
    case "AbortError":
      return "Camera startup was interrupted. Try opening the scanner again.";
    default:
      return "The camera could not start. Check the app and site permissions, or enter the barcode manually.";
  }
}

function canRetryDefaultCamera(error: unknown): boolean {
  return ["OverconstrainedError", "NotFoundError", "DevicesNotFoundError"].includes(
    cameraErrorName(error),
  );
}

function BarcodeScanner({
  onScan,
  onClose,
}: {
  onScan: (code: string) => void;
  onClose: () => void;
}): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsRef = useRef<IScannerControls | null>(null);
  const onScanRef = useRef(onScan);
  const hasScannedRef = useRef(false);
  const [error, setError] = useState("");
  const [torchSupported, setTorchSupported] = useState(false);
  const [torchOn, setTorchOn] = useState(false);
  const [torchBusy, setTorchBusy] = useState(false);

  useEffect(() => {
    onScanRef.current = onScan;
  }, [onScan]);

  useEffect(() => {
    const reader = new BrowserMultiFormatReader();
    let active = true;
    let scannerControls: IScannerControls | null = null;
    const video = videoRef.current;
    if (!video) return;
    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
      setError(cameraErrorMessage(new Error("Camera API unavailable")));
      return () => {
        active = false;
        controlsRef.current?.stop();
      };
    }
    const scan = async (): Promise<void> => {
      const constraints: MediaStreamConstraints[] = [
        { video: { facingMode: { ideal: "environment" } }, audio: false },
        { video: true, audio: false },
      ];
      for (const [index, constraint] of constraints.entries()) {
        try {
          const startedControls = await reader.decodeFromConstraints(
            constraint,
            video,
            (result, _error, callbackControls) => {
              controlsRef.current = callbackControls;
              if (active && result && !hasScannedRef.current) {
                hasScannedRef.current = true;
                active = false;
                callbackControls.stop();
                onScanRef.current(result.getText());
              }
            },
          );
          scannerControls = startedControls;
          if (!active) startedControls.stop();
          else {
            controlsRef.current = startedControls;
            const stream = video.srcObject;
            if (stream instanceof MediaStream) {
              const track = stream.getVideoTracks()[0];
              const capabilities = track?.getCapabilities() as
                | (MediaTrackCapabilities & { torch?: boolean })
                | undefined;
              setTorchSupported(Boolean(capabilities?.torch));
            }
          }
          return;
        } catch (error) {
          if (index === 0 && canRetryDefaultCamera(error)) continue;
          throw error;
        }
      }
    };
    void scan().catch((error: unknown) => {
      if (active) setError(cameraErrorMessage(error));
    });
    return () => {
      active = false;
      scannerControls?.stop();
      controlsRef.current = null;
    };
  }, []);

  const toggleTorch = async (): Promise<void> => {
    const stream = videoRef.current?.srcObject;
    const track = stream instanceof MediaStream ? stream.getVideoTracks()[0] : undefined;
    if (!track || !torchSupported || torchBusy) return;

    const nextTorchState = !torchOn;
    setTorchBusy(true);
    try {
      await track.applyConstraints({
        advanced: [{ torch: nextTorchState } as MediaTrackConstraintSet],
      });
      setTorchOn(nextTorchState);
      setError("");
    } catch {
      setError("This camera could not change its flash setting. You can continue scanning without it.");
    } finally {
      setTorchBusy(false);
    }
  };

  return (
      <div className="modal-backdrop">
        <section className="camera-modal">
        <div className="section-heading"><div><p className="eyebrow">ADD TO YOUR DAY</p><h2>Scan barcode</h2></div><button className="close-button" onClick={onClose} aria-label="Close scanner">×</button></div>
        <div className="camera-frame">
          <video ref={videoRef} muted playsInline aria-label="Barcode camera preview" />
          <div className="barcode-guide" />
          {torchSupported && (
            <button
              className={`torch-button${torchOn ? " torch-button-on" : ""}`}
              onClick={() => void toggleTorch()}
              disabled={torchBusy}
              aria-label={torchOn ? "Turn flash off" : "Turn flash on"}
              aria-pressed={torchOn}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4.5 13h6l-.5 9 9-12h-6l.5-8Z" /></svg>
              {torchBusy ? "Changing…" : torchOn ? "Flash on" : "Flash"}
            </button>
          )}
        </div>
        <p className="muted camera-tip">Hold the barcode steady inside the frame.</p>
        {error && <p role="alert" className="error-message">{error}</p>}
        <button className="secondary-button full-button" onClick={onClose}>Enter barcode manually</button>
        </section>
      </div>
  );
}

interface OcrFacts {
  name: string;
  servingSize: string;
  servingWeightG: number | null;
  calories: number | null;
  protein: number | null;
  carbs: number | null;
  fat: number | null;
}

function readNutritionText(text: string): OcrFacts {
  const value = (pattern: RegExp): number | null => {
    const match = text.match(pattern);
    if (!match?.[1]) return null;
    const parsed = Number(match[1].replace(",", "."));
    return Number.isFinite(parsed) ? parsed : null;
  };
  const serving = text.match(/serving size\s*[:\-]?\s*([^\n]+)/i)?.[1]?.trim() ?? "";
  const grams = serving.match(/([\d.]+)\s*g\b/i)?.[1];
  return {
    name: "",
    servingSize: serving,
    servingWeightG: grams ? Number(grams) : null,
    calories: value(/calories\s*[:\-]?\s*(\d+(?:[.,]\d+)?)/i),
    protein: value(/protein\s*[:\-]?\s*(\d+(?:[.,]\d+)?)/i),
    carbs: value(/total carbohydrates?\s*[:\-]?\s*(\d+(?:[.,]\d+)?)/i),
    fat: value(/total fat\s*[:\-]?\s*(\d+(?:[.,]\d+)?)/i),
  };
}

function clarityScore(video: HTMLVideoElement, canvas: HTMLCanvasElement): number {
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context || !video.videoWidth) return 0;
  const width = 160;
  const height = Math.max(1, Math.round((video.videoHeight / video.videoWidth) * width));
  canvas.width = width;
  canvas.height = height;
  context.drawImage(video, 0, 0, width, height);
  const { data } = context.getImageData(0, 0, width, height);
  let sum = 0;
  let sumSquares = 0;
  let count = 0;
  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const index = (y * width + x) * 4;
      const center = data[index] ?? 0;
      const up = data[((y - 1) * width + x) * 4] ?? 0;
      const down = data[((y + 1) * width + x) * 4] ?? 0;
      const left = data[(y * width + x - 1) * 4] ?? 0;
      const right = data[(y * width + x + 1) * 4] ?? 0;
      const laplacian = 4 * center - up - down - left - right;
      sum += laplacian;
      sumSquares += laplacian * laplacian;
      count += 1;
    }
  }
  const variance = count ? sumSquares / count - (sum / count) ** 2 : 0;
  return Math.max(0, Math.min(100, Math.round(variance / 18)));
}

function LabelScanner({
  onExtract,
  onClose,
}: {
  onExtract: (facts: OcrFacts) => void;
  onClose: () => void;
}): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [clarity, setClarity] = useState(0);
  const [captured, setCaptured] = useState("");
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (captured) return;
    let interval = 0;
    let active = true;
    const openCamera = async (): Promise<MediaStream> => {
      if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
        throw new Error("Camera API unavailable");
      }
      try {
        return await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: "environment" } },
          audio: false,
        });
      } catch (error) {
        if (!canRetryDefaultCamera(error)) throw error;
        return navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      }
    };
    void openCamera()
      .then(async (stream) => {
        if (!active) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
        interval = window.setInterval(() => {
          if (videoRef.current && canvasRef.current) setClarity(clarityScore(videoRef.current, canvasRef.current));
        }, 400);
      })
      .catch((error: unknown) => {
        streamRef.current?.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        if (active) setError(cameraErrorMessage(error));
      });
    return () => {
      active = false;
      window.clearInterval(interval);
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    };
  }, [captured]);

  const capture = async (): Promise<void> => {
    if (!videoRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawImage(videoRef.current, 0, 0);
    setCaptured(canvas.toDataURL("image/jpeg", 0.92));
    setBusy(true);
    setError("");
    try {
      const { createWorker } = await import("tesseract.js");
      const worker = await createWorker("eng");
      try {
        const result = await worker.recognize(canvas);
        setText(result.data.text);
      } finally {
        await worker.terminate();
      }
    } catch {
      setError("Local OCR could not read the image. Try again with the label steady and closer.");
    } finally {
      setBusy(false);
    }
  };

  const confirm = (): void => onExtract(readNutritionText(text));
  const canCapture = clarity >= 35 && !busy;

  return (
    <div className="modal-backdrop">
      <section className="camera-modal label-modal">
        <div className="section-heading"><div><h2>Scan nutrition label</h2><p className="muted">Image stays on this phone.</p></div><button className="close-button" onClick={onClose}>×</button></div>
        {!captured ? (
          <>
            <div className="camera-frame label-frame"><video ref={videoRef} muted playsInline /><div className="label-guide" /></div>
            <p className={canCapture ? "clarity-ready" : "muted"}>{canCapture ? "Looks clear enough · ready to capture" : `Hold steady and focus the label · clarity ${clarity}%`}</p>
            <button className="primary-button full-button" onClick={() => void capture()} disabled={!canCapture}>Capture label</button>
          </>
        ) : (
          <>
            <img className="captured-image" src={captured} alt="Captured nutrition label, processed locally" />
            {busy ? <p>Reading label locally…</p> : (
              <>
                <label className="ocr-text-label">Recognized text (edit if needed)<textarea rows={8} value={text} onChange={(event) => setText(event.target.value)} /></label>
                <div className="modal-actions">
                  <button className="secondary-button" onClick={() => { setCaptured(""); setText(""); }}>Retake</button>
                  <button className="primary-button" onClick={confirm}>Extract facts</button>
                </div>
              </>
            )}
          </>
        )}
        {error && <p className="error-message" role="alert">{error}</p>}
        <canvas ref={canvasRef} className="hidden-canvas" />
      </section>
    </div>
  );
}
