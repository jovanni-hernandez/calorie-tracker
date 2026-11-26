import { o as e, t } from "./rolldown-runtime-DsPmjQRF.js";
// node_modules/react/cjs/react.production.min.js
var n = /* @__PURE__ */ t(((e) => {
	var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.iterator;
	function p(e) {
		return typeof e != "object" || !e ? null : (e = f && e[f] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var m = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, h = Object.assign, g = {};
	function _(e, t, n) {
		this.props = e, this.context = t, this.refs = g, this.updater = n || m;
	}
	_.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, _.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function v() {}
	v.prototype = _.prototype;
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = g, this.updater = n || m;
	}
	var b = y.prototype = new v();
	b.constructor = y, h(b, _.prototype), b.isPureReactComponent = !0;
	var x = Array.isArray, S = Object.prototype.hasOwnProperty, C = { current: null }, w = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function T(e, n, r) {
		var i, a = {}, o = null, s = null;
		if (n != null) for (i in n.ref !== void 0 && (s = n.ref), n.key !== void 0 && (o = "" + n.key), n) S.call(n, i) && !w.hasOwnProperty(i) && (a[i] = n[i]);
		var c = arguments.length - 2;
		if (c === 1) a.children = r;
		else if (1 < c) {
			for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
			a.children = l;
		}
		if (e && e.defaultProps) for (i in c = e.defaultProps, c) a[i] === void 0 && (a[i] = c[i]);
		return {
			$$typeof: t,
			type: e,
			key: o,
			ref: s,
			props: a,
			_owner: C.current
		};
	}
	function E(e, n) {
		return {
			$$typeof: t,
			type: e.type,
			key: n,
			ref: e.ref,
			props: e.props,
			_owner: e._owner
		};
	}
	function D(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function ee(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var O = /\/+/g;
	function te(e, t) {
		return typeof e == "object" && e && e.key != null ? ee("" + e.key) : t.toString(36);
	}
	function k(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n: c = !0;
			}
		}
		if (c) return c = e, o = o(c), e = a === "" ? "." + te(c, 0) : a, x(o) ? (i = "", e != null && (i = e.replace(O, "$&/") + "/"), k(o, r, i, "", function(e) {
			return e;
		})) : o != null && (D(o) && (o = E(o, i + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(O, "$&/") + "/") + e)), r.push(o)), 1;
		if (c = 0, a = a === "" ? "." : a + ":", x(e)) for (var l = 0; l < e.length; l++) {
			s = e[l];
			var u = a + te(s, l);
			c += k(s, r, i, u, o);
		}
		else if (u = p(e), typeof u == "function") for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = a + te(s, l++), c += k(s, r, i, u, o);
		else if (s === "object") throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		return c;
	}
	function A(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return k(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function ne(e) {
		if (e._status === -1) {
			var t = e._result;
			t = t(), t.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
			}), e._status === -1 && (e._status = 0, e._result = t);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var re = { current: null }, j = { transition: null }, ie = {
		ReactCurrentDispatcher: re,
		ReactCurrentBatchConfig: j,
		ReactCurrentOwner: C
	};
	function M() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	e.Children = {
		map: A,
		forEach: function(e, t, n) {
			A(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return A(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return A(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!D(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	}, e.Component = _, e.Fragment = r, e.Profiler = a, e.PureComponent = y, e.StrictMode = i, e.Suspense = l, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie, e.act = M, e.cloneElement = function(e, n, r) {
		if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
		var i = h({}, e.props), a = e.key, o = e.ref, s = e._owner;
		if (n != null) {
			if (n.ref !== void 0 && (o = n.ref, s = C.current), n.key !== void 0 && (a = "" + n.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
			for (l in n) S.call(n, l) && !w.hasOwnProperty(l) && (i[l] = n[l] === void 0 && c !== void 0 ? c[l] : n[l]);
		}
		var l = arguments.length - 2;
		if (l === 1) i.children = r;
		else if (1 < l) {
			c = Array(l);
			for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
			i.children = c;
		}
		return {
			$$typeof: t,
			type: e.type,
			key: a,
			ref: o,
			props: i,
			_owner: s
		};
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		}, e.Provider = {
			$$typeof: o,
			_context: e
		}, e.Consumer = e;
	}, e.createElement = T, e.createFactory = function(e) {
		var t = T.bind(null, e);
		return t.type = e, t;
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = D, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: ne
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = j.transition;
		j.transition = {};
		try {
			e();
		} finally {
			j.transition = t;
		}
	}, e.unstable_act = M, e.useCallback = function(e, t) {
		return re.current.useCallback(e, t);
	}, e.useContext = function(e) {
		return re.current.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e) {
		return re.current.useDeferredValue(e);
	}, e.useEffect = function(e, t) {
		return re.current.useEffect(e, t);
	}, e.useId = function() {
		return re.current.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return re.current.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return re.current.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return re.current.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return re.current.useMemo(e, t);
	}, e.useReducer = function(e, t, n) {
		return re.current.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return re.current.useRef(e);
	}, e.useState = function(e) {
		return re.current.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return re.current.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return re.current.useTransition();
	}, e.version = "18.3.1";
})), r = /* @__PURE__ */ t(((e, t) => {
	t.exports = n();
})), i = /* @__PURE__ */ t(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function y(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function b(e) {
		if (h = !1, y(e), !m) {
			if (n(c) !== null) m = !0, A(x);
			else {
				var t = n(l);
				t !== null && ne(b, t.startTime - e);
			}
		}
	}
	function x(t, i) {
		m = !1, h && (h = !1, _(w), w = -1), p = !0;
		var a = f;
		try {
			for (y(i), d = n(c); d !== null && (!(d.expirationTime > i) || t && !D());) {
				var o = d.callback;
				if (typeof o == "function") {
					d.callback = null, f = d.priorityLevel;
					var s = o(d.expirationTime <= i);
					i = e.unstable_now(), typeof s == "function" ? d.callback = s : d === n(c) && r(c), y(i);
				} else r(c);
				d = n(c);
			}
			if (d !== null) var u = !0;
			else {
				var g = n(l);
				g !== null && ne(b, g.startTime - i), u = !1;
			}
			return u;
		} finally {
			d = null, f = a, p = !1;
		}
	}
	var S = !1, C = null, w = -1, T = 5, E = -1;
	function D() {
		return !(e.unstable_now() - E < T);
	}
	function ee() {
		if (C !== null) {
			var t = e.unstable_now();
			E = t;
			var n = !0;
			try {
				n = C(!0, t);
			} finally {
				n ? O() : (S = !1, C = null);
			}
		} else S = !1;
	}
	var O;
	if (typeof v == "function") O = function() {
		v(ee);
	};
	else if (typeof MessageChannel < "u") {
		var te = new MessageChannel(), k = te.port2;
		te.port1.onmessage = ee, O = function() {
			k.postMessage(null);
		};
	} else O = function() {
		g(ee, 0);
	};
	function A(e) {
		C = e, S || (S = !0, O());
	}
	function ne(t, n) {
		w = g(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_continueExecution = function() {
		m || p || (m = !0, A(x));
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_getFirstCallbackNode = function() {
		return n(c);
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (_(w), w = -1) : h = !0, ne(b, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, A(x))), r;
	}, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), a = /* @__PURE__ */ t(((e, t) => {
	t.exports = i();
})), o = /* @__PURE__ */ t(((e) => {
	var t = r(), n = a();
	function i(e) {
		for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var o = /* @__PURE__ */ new Set(), s = {};
	function c(e, t) {
		l(e, t), l(e + "Capture", t);
	}
	function l(e, t) {
		for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
	}
	var u = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, d = Object.prototype.hasOwnProperty, f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, m = {};
	function h(e) {
		return d.call(m, e) ? !0 : d.call(p, e) ? !1 : f.test(e) ? m[e] = !0 : (p[e] = !0, !1);
	}
	function g(e, t, n, r) {
		if (n !== null && n.type === 0) return !1;
		switch (typeof t) {
			case "function":
			case "symbol": return !0;
			case "boolean": return r ? !1 : n === null ? (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-") : !n.acceptsBooleans;
			default: return !1;
		}
	}
	function _(e, t, n, r) {
		if (t == null || g(e, t, n, r)) return !0;
		if (r) return !1;
		if (n !== null) switch (n.type) {
			case 3: return !t;
			case 4: return !1 === t;
			case 5: return isNaN(t);
			case 6: return isNaN(t) || 1 > t;
		}
		return !1;
	}
	function v(e, t, n, r, i, a, o) {
		this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
	}
	var y = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
		y[e] = new v(e, 0, !1, e, null, !1, !1);
	}), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(e) {
		var t = e[0];
		y[t] = new v(t, 1, !1, e[1], null, !1, !1);
	}), [
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach(function(e) {
		y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach(function(e) {
		y[e] = new v(e, 2, !1, e, null, !1, !1);
	}), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
		y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach(function(e) {
		y[e] = new v(e, 3, !0, e, null, !1, !1);
	}), ["capture", "download"].forEach(function(e) {
		y[e] = new v(e, 4, !1, e, null, !1, !1);
	}), [
		"cols",
		"rows",
		"size",
		"span"
	].forEach(function(e) {
		y[e] = new v(e, 6, !1, e, null, !1, !1);
	}), ["rowSpan", "start"].forEach(function(e) {
		y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
	});
	var b = /[\-:]([a-z])/g;
	function x(e) {
		return e[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
		var t = e.replace(b, x);
		y[t] = new v(t, 1, !1, e, null, !1, !1);
	}), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
		var t = e.replace(b, x);
		y[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	}), [
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach(function(e) {
		var t = e.replace(b, x);
		y[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
	}), ["tabIndex", "crossOrigin"].forEach(function(e) {
		y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
	}), y.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), [
		"src",
		"href",
		"action",
		"formAction"
	].forEach(function(e) {
		y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
	});
	function S(e, t, n, r) {
		var i = y.hasOwnProperty(t) ? y[t] : null;
		(i === null ? r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N" : i.type !== 0) && (_(t, n, i, r) && (n = null), r || i === null ? h(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type !== 3 && "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
	}
	var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = Symbol.for("react.element"), T = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), te = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), M = Symbol.iterator;
	function ae(e) {
		return typeof e != "object" || !e ? null : (e = M && e[M] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var N = Object.assign, oe;
	function se(e) {
		if (oe === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			oe = t && t[1] || "";
		}
		return "\n" + oe + e;
	}
	var ce = !1;
	function le(e, t) {
		if (!e || ce) return "";
		ce = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (t) {
				if (t = function() {
					throw Error();
				}, Object.defineProperty(t.prototype, "props", { set: function() {
					throw Error();
				} }), typeof Reflect == "object" && Reflect.construct) {
					try {
						Reflect.construct(t, []);
					} catch (e) {
						var r = e;
					}
					Reflect.construct(e, [], t);
				} else {
					try {
						t.call();
					} catch (e) {
						r = e;
					}
					e.call(t.prototype);
				}
			} else {
				try {
					throw Error();
				} catch (e) {
					r = e;
				}
				e();
			}
		} catch (t) {
			if (t && r && typeof t.stack == "string") {
				for (var i = t.stack.split("\n"), a = r.stack.split("\n"), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s];) s--;
				for (; 1 <= o && 0 <= s; o--, s--) if (i[o] !== a[s]) {
					if (o !== 1 || s !== 1) do
						if (o--, s--, 0 > s || i[o] !== a[s]) {
							var c = "\n" + i[o].replace(" at new ", " at ");
							return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
						}
					while (1 <= o && 0 <= s);
					break;
				}
			}
		} finally {
			ce = !1, Error.prepareStackTrace = n;
		}
		return (e = e ? e.displayName || e.name : "") ? se(e) : "";
	}
	function P(e) {
		switch (e.tag) {
			case 5: return se(e.type);
			case 16: return se("Lazy");
			case 13: return se("Suspense");
			case 19: return se("SuspenseList");
			case 0:
			case 2:
			case 15: return e = le(e.type, !1), e;
			case 11: return e = le(e.type.render, !1), e;
			case 1: return e = le(e.type, !0), e;
			default: return "";
		}
	}
	function F(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case E: return "Fragment";
			case T: return "Portal";
			case ee: return "Profiler";
			case D: return "StrictMode";
			case A: return "Suspense";
			case ne: return "SuspenseList";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case te: return (e.displayName || "Context") + ".Consumer";
			case O: return (e._context.displayName || "Context") + ".Provider";
			case k:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case re: return t = e.displayName || null, t === null ? F(e.type) || "Memo" : t;
			case j:
				t = e._payload, e = e._init;
				try {
					return F(e(t));
				} catch {}
		}
		return null;
	}
	function ue(e) {
		var t = e.type;
		switch (e.tag) {
			case 24: return "Cache";
			case 9: return (t.displayName || "Context") + ".Consumer";
			case 10: return (t._context.displayName || "Context") + ".Provider";
			case 18: return "DehydratedFragment";
			case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e === "" ? "ForwardRef" : "ForwardRef(" + e + ")");
			case 7: return "Fragment";
			case 5: return t;
			case 4: return "Portal";
			case 3: return "Root";
			case 6: return "Text";
			case 16: return F(t);
			case 8: return t === D ? "StrictMode" : "Mode";
			case 22: return "Offscreen";
			case 12: return "Profiler";
			case 21: return "Scope";
			case 13: return "Suspense";
			case 19: return "SuspenseList";
			case 25: return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if (typeof t == "function") return t.displayName || t.name || null;
				if (typeof t == "string") return t;
		}
		return null;
	}
	function de(e) {
		switch (typeof e) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function I(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function fe(e) {
		var t = I(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
		if (!e.hasOwnProperty(t) && n !== void 0 && typeof n.get == "function" && typeof n.set == "function") {
			var i = n.get, a = n.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					r = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: n.enumerable }), {
				getValue: function() {
					return r;
				},
				setValue: function(e) {
					r = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function pe(e) {
		e._valueTracker ||= fe(e);
	}
	function me(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = I(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	function he(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function ge(e, t) {
		var n = t.checked;
		return N({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: n ?? e._wrapperState.initialChecked
		});
	}
	function _e(e, t) {
		var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked == null ? t.defaultChecked : t.checked;
		n = de(t.value == null ? n : t.value), e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
		};
	}
	function ve(e, t) {
		t = t.checked, t != null && S(e, "checked", t, !1);
	}
	function ye(e, t) {
		ve(e, t);
		var n = de(t.value), r = t.type;
		if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
		else if (r === "submit" || r === "reset") {
			e.removeAttribute("value");
			return;
		}
		t.hasOwnProperty("value") ? xe(e, t.type, n) : t.hasOwnProperty("defaultValue") && xe(e, t.type, de(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
	}
	function be(e, t, n) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var r = t.type;
			if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
			t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
		}
		n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
	}
	function xe(e, t, n) {
		(t !== "number" || he(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
	}
	var Se = Array.isArray;
	function Ce(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + de(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function we(e, t) {
		if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
		return N({}, t, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue
		});
	}
	function Te(e, t) {
		var n = t.value;
		if (n == null) {
			if (n = t.children, t = t.defaultValue, n != null) {
				if (t != null) throw Error(i(92));
				if (Se(n)) {
					if (1 < n.length) throw Error(i(93));
					n = n[0];
				}
				t = n;
			}
			t ??= "", n = t;
		}
		e._wrapperState = { initialValue: de(n) };
	}
	function Ee(e, t) {
		var n = de(t.value), r = de(t.defaultValue);
		n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
	}
	function De(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
	}
	function L(e) {
		switch (e) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function Oe(e, t) {
		return e == null || e === "http://www.w3.org/1999/xhtml" ? L(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
	}
	var ke, Ae = function(e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
			MSApp.execUnsafeLocalFunction(function() {
				return e(t, n, r, i);
			});
		} : e;
	}(function(e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
		else {
			for (ke ||= document.createElement("div"), ke.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ke.firstChild; e.firstChild;) e.removeChild(e.firstChild);
			for (; t.firstChild;) e.appendChild(t.firstChild);
		}
	});
	function je(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Me = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	}, Ne = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(Me).forEach(function(e) {
		Ne.forEach(function(t) {
			t = t + e.charAt(0).toUpperCase() + e.substring(1), Me[t] = Me[e];
		});
	});
	function Pe(e, t, n) {
		return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Me.hasOwnProperty(e) && Me[e] ? ("" + t).trim() : t + "px";
	}
	function Fe(e, t) {
		for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0, i = Pe(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
		}
	}
	var Ie = N({ menuitem: !0 }, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});
	function Le(e, t) {
		if (t) {
			if (Ie[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
			if (t.dangerouslySetInnerHTML != null) {
				if (t.children != null) throw Error(i(60));
				if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
			}
			if (t.style != null && typeof t.style != "object") throw Error(i(62));
		}
	}
	function Re(e, t) {
		if (e.indexOf("-") === -1) return typeof t.is == "string";
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var ze = null;
	function Be(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Ve = null, He = null, Ue = null;
	function R(e) {
		if (e = Fi(e)) {
			if (typeof Ve != "function") throw Error(i(280));
			var t = e.stateNode;
			t && (t = Li(t), Ve(e.stateNode, e.type, t));
		}
	}
	function We(e) {
		He ? Ue ? Ue.push(e) : Ue = [e] : He = e;
	}
	function z() {
		if (He) {
			var e = He, t = Ue;
			if (Ue = He = null, R(e), t) for (e = 0; e < t.length; e++) R(t[e]);
		}
	}
	function Ge(e, t) {
		return e(t);
	}
	function Ke() {}
	var qe = !1;
	function Je(e, t, n) {
		if (qe) return e(t, n);
		qe = !0;
		try {
			return Ge(e, t, n);
		} finally {
			qe = !1, (He !== null || Ue !== null) && (Ke(), z());
		}
	}
	function Ye(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = Li(n);
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var Xe = !1;
	if (u) try {
		var Ze = {};
		Object.defineProperty(Ze, "passive", { get: function() {
			Xe = !0;
		} }), window.addEventListener("test", Ze, Ze), window.removeEventListener("test", Ze, Ze);
	} catch {
		Xe = !1;
	}
	function Qe(e, t, n, r, i, a, o, s, c) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, l);
		} catch (e) {
			this.onError(e);
		}
	}
	var $e = !1, et = null, tt = !1, nt = null, rt = { onError: function(e) {
		$e = !0, et = e;
	} };
	function it(e, t, n, r, i, a, o, s, c) {
		$e = !1, et = null, Qe.apply(rt, arguments);
	}
	function at(e, t, n, r, a, o, s, c, l) {
		if (it.apply(this, arguments), $e) {
			if ($e) {
				var u = et;
				$e = !1, et = null;
			} else throw Error(i(198));
			tt || (tt = !0, nt = u);
		}
	}
	function ot(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function st(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function ct(e) {
		if (ot(e) !== e) throw Error(i(188));
	}
	function lt(e) {
		var t = e.alternate;
		if (!t) {
			if (t = ot(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var o = a.alternate;
			if (o === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === o.child) {
				for (o = a.child; o;) {
					if (o === n) return ct(a), e;
					if (o === r) return ct(a), t;
					o = o.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = o;
			else {
				for (var s = !1, c = a.child; c;) {
					if (c === n) {
						s = !0, n = a, r = o;
						break;
					}
					if (c === r) {
						s = !0, r = a, n = o;
						break;
					}
					c = c.sibling;
				}
				if (!s) {
					for (c = o.child; c;) {
						if (c === n) {
							s = !0, n = o, r = a;
							break;
						}
						if (c === r) {
							s = !0, r = o, n = a;
							break;
						}
						c = c.sibling;
					}
					if (!s) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function ut(e) {
		return e = lt(e), e === null ? null : dt(e);
	}
	function dt(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null;) {
			var t = dt(e);
			if (t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var ft = n.unstable_scheduleCallback, pt = n.unstable_cancelCallback, mt = n.unstable_shouldYield, ht = n.unstable_requestPaint, gt = n.unstable_now, _t = n.unstable_getCurrentPriorityLevel, vt = n.unstable_ImmediatePriority, yt = n.unstable_UserBlockingPriority, bt = n.unstable_NormalPriority, xt = n.unstable_LowPriority, St = n.unstable_IdlePriority, Ct = null, wt = null;
	function Tt(e) {
		if (wt && typeof wt.onCommitFiberRoot == "function") try {
			wt.onCommitFiberRoot(Ct, e, void 0, (e.current.flags & 128) == 128);
		} catch {}
	}
	var Et = Math.clz32 ? Math.clz32 : kt, Dt = Math.log, Ot = Math.LN2;
	function kt(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Dt(e) / Ot | 0) | 0;
	}
	var At = 64, jt = 4194304;
	function Mt(e) {
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return e & 130023424;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 1073741824;
			default: return e;
		}
	}
	function Nt(e, t) {
		var n = e.pendingLanes;
		if (n === 0) return 0;
		var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
		if (o !== 0) {
			var s = o & ~i;
			s === 0 ? (a &= o, a !== 0 && (r = Mt(a))) : r = Mt(s);
		} else o = n & ~i, o === 0 ? a !== 0 && (r = Mt(a)) : r = Mt(o);
		if (r === 0) return 0;
		if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, a = t & -t, i >= a || i === 16 && a & 4194240)) return t;
		if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Et(t), i = 1 << n, r |= e[n], t &= ~i;
		return r;
	}
	function Pt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4: return t + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function Ft(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
			var o = 31 - Et(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Pt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
	}
	function It(e) {
		return e = e.pendingLanes & -1073741825, e === 0 ? e & 1073741824 ? 1073741824 : 0 : e;
	}
	function Lt() {
		var e = At;
		return At <<= 1, !(At & 4194240) && (At = 64), e;
	}
	function Rt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function zt(e, t, n) {
		e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Et(t), e[t] = n;
	}
	function Bt(e, t) {
		var n = e.pendingLanes & ~t;
		e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
		var r = e.eventTimes;
		for (e = e.expirationTimes; 0 < n;) {
			var i = 31 - Et(n), a = 1 << i;
			t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
		}
	}
	function Vt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Et(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	var B = 0;
	function Ht(e) {
		return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
	}
	var Ut, Wt, Gt, Kt, qt, Jt = !1, Yt = [], Xt = null, Zt = null, Qt = null, $t = /* @__PURE__ */ new Map(), en = /* @__PURE__ */ new Map(), tn = [], nn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function rn(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Xt = null;
				break;
			case "dragenter":
			case "dragleave":
				Zt = null;
				break;
			case "mouseover":
			case "mouseout":
				Qt = null;
				break;
			case "pointerover":
			case "pointerout":
				$t.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": en.delete(t.pointerId);
		}
	}
	function an(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Fi(t), t !== null && Wt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function on(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Xt = an(Xt, e, t, n, r, i), !0;
			case "dragenter": return Zt = an(Zt, e, t, n, r, i), !0;
			case "mouseover": return Qt = an(Qt, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return $t.set(a, an($t.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, en.set(a, an(en.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function sn(e) {
		var t = Pi(e.target);
		if (t !== null) {
			var n = ot(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = st(n), t !== null) {
						e.blockedOn = t, qt(e.priority, function() {
							Gt(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function cn(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = yn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				ze = r, n.target.dispatchEvent(r), ze = null;
			} else return t = Fi(n), t !== null && Wt(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function ln(e, t, n) {
		cn(e) && n.delete(t);
	}
	function un() {
		Jt = !1, Xt !== null && cn(Xt) && (Xt = null), Zt !== null && cn(Zt) && (Zt = null), Qt !== null && cn(Qt) && (Qt = null), $t.forEach(ln), en.forEach(ln);
	}
	function dn(e, t) {
		e.blockedOn === t && (e.blockedOn = null, Jt || (Jt = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, un)));
	}
	function fn(e) {
		function t(t) {
			return dn(t, e);
		}
		if (0 < Yt.length) {
			dn(Yt[0], e);
			for (var n = 1; n < Yt.length; n++) {
				var r = Yt[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for (Xt !== null && dn(Xt, e), Zt !== null && dn(Zt, e), Qt !== null && dn(Qt, e), $t.forEach(t), en.forEach(t), n = 0; n < tn.length; n++) r = tn[n], r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < tn.length && (n = tn[0], n.blockedOn === null);) sn(n), n.blockedOn === null && tn.shift();
	}
	var pn = C.ReactCurrentBatchConfig, mn = !0;
	function hn(e, t, n, r) {
		var i = B, a = pn.transition;
		pn.transition = null;
		try {
			B = 1, _n(e, t, n, r);
		} finally {
			B = i, pn.transition = a;
		}
	}
	function gn(e, t, n, r) {
		var i = B, a = pn.transition;
		pn.transition = null;
		try {
			B = 4, _n(e, t, n, r);
		} finally {
			B = i, pn.transition = a;
		}
	}
	function _n(e, t, n, r) {
		if (mn) {
			var i = yn(e, t, n, r);
			if (i === null) ci(e, t, r, vn, n), rn(e, r);
			else if (on(i, e, t, n, r)) r.stopPropagation();
			else if (rn(e, r), t & 4 && -1 < nn.indexOf(e)) {
				for (; i !== null;) {
					var a = Fi(i);
					if (a !== null && Ut(a), a = yn(e, t, n, r), a === null && ci(e, t, r, vn, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else ci(e, t, r, null, n);
		}
	}
	var vn = null;
	function yn(e, t, n, r) {
		if (vn = null, e = Be(r), e = Pi(e), e !== null) {
			if (t = ot(e), t === null) e = null;
			else if (n = t.tag, n === 13) {
				if (e = st(t), e !== null) return e;
				e = null;
			} else if (n === 3) {
				if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
				e = null;
			} else t !== e && (e = null);
		}
		return vn = e, null;
	}
	function bn(e) {
		switch (e) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 4;
			case "message": switch (_t()) {
				case vt: return 1;
				case yt: return 4;
				case bt:
				case xt: return 16;
				case St: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var xn = null, Sn = null, Cn = null;
	function wn() {
		if (Cn) return Cn;
		var e, t = Sn, n = t.length, r, i = "value" in xn ? xn.value : xn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Cn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Tn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function En() {
		return !0;
	}
	function Dn() {
		return !1;
	}
	function On(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? En : Dn, this.isPropagationStopped = Dn, this;
		}
		return N(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = En);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = En);
			},
			persist: function() {},
			isPersistent: En
		}), t;
	}
	var kn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, An = On(kn), jn = N({}, kn, {
		view: 0,
		detail: 0
	}), Mn = On(jn), Nn, Pn, Fn, In = N({}, jn, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Gn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Fn && (Fn && e.type === "mousemove" ? (Nn = e.screenX - Fn.screenX, Pn = e.screenY - Fn.screenY) : Pn = Nn = 0, Fn = e), Nn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Pn;
		}
	}), Ln = On(In), Rn = On(N({}, In, { dataTransfer: 0 })), zn = On(N({}, jn, { relatedTarget: 0 })), Bn = On(N({}, kn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Vn = On(N({}, kn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), V = On(N({}, kn, { data: 0 })), H = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Hn = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Un = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Wn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Un[e]) ? !!t[e] : !1;
	}
	function Gn() {
		return Wn;
	}
	var Kn = On(N({}, jn, {
		key: function(e) {
			if (e.key) {
				var t = H[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Tn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Gn,
		charCode: function(e) {
			return e.type === "keypress" ? Tn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Tn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), qn = On(N({}, In, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Jn = On(N({}, jn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Gn
	})), Yn = On(N({}, kn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Xn = On(N({}, In, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Zn = [
		9,
		13,
		27,
		32
	], Qn = u && "CompositionEvent" in window, $n = null;
	u && "documentMode" in document && ($n = document.documentMode);
	var er = u && "TextEvent" in window && !$n, tr = u && (!Qn || $n && 8 < $n && 11 >= $n), nr = " ", rr = !1;
	function ir(e, t) {
		switch (e) {
			case "keyup": return Zn.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function U(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var W = !1;
	function ar(e, t) {
		switch (e) {
			case "compositionend": return U(t);
			case "keypress": return t.which === 32 ? (rr = !0, nr) : null;
			case "textInput": return e = t.data, e === nr && rr ? null : e;
			default: return null;
		}
	}
	function or(e, t) {
		if (W) return e === "compositionend" || !Qn && ir(e, t) ? (e = wn(), Cn = Sn = xn = null, W = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return tr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var sr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function cr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!sr[e.type] : t === "textarea";
	}
	function lr(e, t, n, r) {
		We(r), t = K(t, "onChange"), 0 < t.length && (n = new An("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var ur = null, dr = null;
	function fr(e) {
		ni(e, 0);
	}
	function pr(e) {
		if (me(Ii(e))) return e;
	}
	function mr(e, t) {
		if (e === "change") return t;
	}
	var hr = !1;
	if (u) {
		var gr;
		if (u) {
			var _r = "oninput" in document;
			if (!_r) {
				var vr = document.createElement("div");
				vr.setAttribute("oninput", "return;"), _r = typeof vr.oninput == "function";
			}
			gr = _r;
		} else gr = !1;
		hr = gr && (!document.documentMode || 9 < document.documentMode);
	}
	function yr() {
		ur && (ur.detachEvent("onpropertychange", br), dr = ur = null);
	}
	function br(e) {
		if (e.propertyName === "value" && pr(dr)) {
			var t = [];
			lr(t, dr, e, Be(e)), Je(fr, t);
		}
	}
	function xr(e, t, n) {
		e === "focusin" ? (yr(), ur = t, dr = n, ur.attachEvent("onpropertychange", br)) : e === "focusout" && yr();
	}
	function Sr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return pr(dr);
	}
	function Cr(e, t) {
		if (e === "click") return pr(t);
	}
	function wr(e, t) {
		if (e === "input" || e === "change") return pr(t);
	}
	function Tr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Er = typeof Object.is == "function" ? Object.is : Tr;
	function Dr(e, t) {
		if (Er(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!d.call(t, i) || !Er(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Or(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function kr(e, t) {
		var n = Or(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Or(n);
		}
	}
	function G(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? G(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Ar() {
		for (var e = window, t = he(); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = he(e.document);
		}
		return t;
	}
	function jr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	function Mr(e) {
		var t = Ar(), n = e.focusedElem, r = e.selectionRange;
		if (t !== n && n && n.ownerDocument && G(n.ownerDocument.documentElement, n)) {
			if (r !== null && jr(n)) {
				if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
				else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
					e = e.getSelection();
					var i = n.textContent.length, a = Math.min(r.start, i);
					r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = kr(n, a);
					var o = kr(n, r);
					i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
				}
			}
			for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
				element: e,
				left: e.scrollLeft,
				top: e.scrollTop
			});
			for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
		}
	}
	var Nr = u && "documentMode" in document && 11 >= document.documentMode, Pr = null, Fr = null, Ir = null, Lr = !1;
	function Rr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Lr || Pr == null || Pr !== he(r) || (r = Pr, "selectionStart" in r && jr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Ir && Dr(Ir, r) || (Ir = r, r = K(Fr, "onSelect"), 0 < r.length && (t = new An("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Pr)));
	}
	function zr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Br = {
		animationend: zr("Animation", "AnimationEnd"),
		animationiteration: zr("Animation", "AnimationIteration"),
		animationstart: zr("Animation", "AnimationStart"),
		transitionend: zr("Transition", "TransitionEnd")
	}, Vr = {}, Hr = {};
	u && (Hr = document.createElement("div").style, "AnimationEvent" in window || (delete Br.animationend.animation, delete Br.animationiteration.animation, delete Br.animationstart.animation), "TransitionEvent" in window || delete Br.transitionend.transition);
	function Ur(e) {
		if (Vr[e]) return Vr[e];
		if (!Br[e]) return e;
		var t = Br[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Hr) return Vr[e] = t[n];
		return e;
	}
	var Wr = Ur("animationend"), Gr = Ur("animationiteration"), Kr = Ur("animationstart"), qr = Ur("transitionend"), Jr = /* @__PURE__ */ new Map(), Yr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function Xr(e, t) {
		Jr.set(e, t), c(t, [e]);
	}
	for (var Zr = 0; Zr < Yr.length; Zr++) {
		var Qr = Yr[Zr];
		Xr(Qr.toLowerCase(), "on" + (Qr[0].toUpperCase() + Qr.slice(1)));
	}
	Xr(Wr, "onAnimationEnd"), Xr(Gr, "onAnimationIteration"), Xr(Kr, "onAnimationStart"), Xr("dblclick", "onDoubleClick"), Xr("focusin", "onFocus"), Xr("focusout", "onBlur"), Xr(qr, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var $r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ei = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
	function ti(e, t, n) {
		var r = e.type || "unknown-event";
		e.currentTarget = n, at(r, t, void 0, e), e.currentTarget = null;
	}
	function ni(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					ti(i, s, l), a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					ti(i, s, l), a = c;
				}
			}
		}
		if (tt) throw e = nt, tt = !1, nt = null, e;
	}
	function ri(e, t) {
		var n = t[ji];
		n === void 0 && (n = t[ji] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (si(t, e, 2, !1), n.add(r));
	}
	function ii(e, t, n) {
		var r = 0;
		t && (r |= 4), si(n, e, r, t);
	}
	var ai = "_reactListening" + Math.random().toString(36).slice(2);
	function oi(e) {
		if (!e[ai]) {
			e[ai] = !0, o.forEach(function(t) {
				t !== "selectionchange" && (ei.has(t) || ii(t, !1, e), ii(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[ai] || (t[ai] = !0, ii("selectionchange", !1, t));
		}
	}
	function si(e, t, n, r) {
		switch (bn(t)) {
			case 1:
				var i = hn;
				break;
			case 4:
				i = gn;
				break;
			default: i = _n;
		}
		n = i.bind(null, t, n, e), i = void 0, !Xe || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function ci(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var s = r.stateNode.containerInfo;
				if (s === i || s.nodeType === 8 && s.parentNode === i) break;
				if (o === 4) for (o = r.return; o !== null;) {
					var c = o.tag;
					if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === i || c.nodeType === 8 && c.parentNode === i)) return;
					o = o.return;
				}
				for (; s !== null;) {
					if (o = Pi(s), o === null) return;
					if (c = o.tag, c === 5 || c === 6) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		Je(function() {
			var r = a, i = Be(n), o = [];
			a: {
				var s = Jr.get(e);
				if (s !== void 0) {
					var c = An, l = e;
					switch (e) {
						case "keypress": if (Tn(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = Kn;
							break;
						case "focusin":
							l = "focus", c = zn;
							break;
						case "focusout":
							l = "blur", c = zn;
							break;
						case "beforeblur":
						case "afterblur":
							c = zn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							c = Ln;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = Rn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = Jn;
							break;
						case Wr:
						case Gr:
						case Kr:
							c = Bn;
							break;
						case qr:
							c = Yn;
							break;
						case "scroll":
							c = Mn;
							break;
						case "wheel":
							c = Xn;
							break;
						case "copy":
						case "cut":
						case "paste":
							c = Vn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": c = qn;
					}
					var u = !!(t & 4), d = !u && e === "scroll", f = u ? s === null ? null : s + "Capture" : s;
					u = [];
					for (var p = r, m; p !== null;) {
						m = p;
						var h = m.stateNode;
						if (m.tag === 5 && h !== null && (m = h, f !== null && (h = Ye(p, f), h != null && u.push(li(p, h, m)))), d) break;
						p = p.return;
					}
					0 < u.length && (s = new c(s, l, null, n, i), o.push({
						event: s,
						listeners: u
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== ze && (l = n.relatedTarget || n.fromElement) && (Pi(l) || l[Ai])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Pi(l) : null, l !== null && (d = ot(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
						if (u = Ln, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = qn, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : Ii(c), m = l == null ? s : Ii(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, Pi(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
							for (u = c, f = l, p = 0, m = u; m; m = ui(m)) p++;
							for (m = 0, h = f; h; h = ui(h)) m++;
							for (; 0 < p - m;) u = ui(u), p--;
							for (; 0 < m - p;) f = ui(f), m--;
							for (; p--;) {
								if (u === f || f !== null && u === f.alternate) break b;
								u = ui(u), f = ui(f);
							}
							u = null;
						}
						else u = null;
						c !== null && di(o, s, c, u, !1), l !== null && d !== null && di(o, d, l, u, !0);
					}
				}
				a: {
					if (s = r ? Ii(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var g = mr;
					else if (cr(s)) {
						if (hr) g = wr;
						else {
							g = Sr;
							var _ = xr;
						}
					} else (c = s.nodeName) && c.toLowerCase() === "input" && (s.type === "checkbox" || s.type === "radio") && (g = Cr);
					if (g &&= g(e, r)) {
						lr(o, g, n, i);
						break a;
					}
					_ && _(e, s, r), e === "focusout" && (_ = s._wrapperState) && _.controlled && s.type === "number" && xe(s, "number", s.value);
				}
				switch (_ = r ? Ii(r) : window, e) {
					case "focusin":
						(cr(_) || _.contentEditable === "true") && (Pr = _, Fr = r, Ir = null);
						break;
					case "focusout":
						Ir = Fr = Pr = null;
						break;
					case "mousedown":
						Lr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Lr = !1, Rr(o, n, i);
						break;
					case "selectionchange": if (Nr) break;
					case "keydown":
					case "keyup": Rr(o, n, i);
				}
				var v;
				if (Qn) b: {
					switch (e) {
						case "compositionstart":
							var y = "onCompositionStart";
							break b;
						case "compositionend":
							y = "onCompositionEnd";
							break b;
						case "compositionupdate":
							y = "onCompositionUpdate";
							break b;
					}
					y = void 0;
				}
				else W ? ir(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
				y && (tr && n.locale !== "ko" && (W || y !== "onCompositionStart" ? y === "onCompositionEnd" && W && (v = wn()) : (xn = i, Sn = "value" in xn ? xn.value : xn.textContent, W = !0)), _ = K(r, y), 0 < _.length && (y = new V(y, e, null, n, i), o.push({
					event: y,
					listeners: _
				}), v ? y.data = v : (v = U(n), v !== null && (y.data = v)))), (v = er ? ar(e, n) : or(e, n)) && (r = K(r, "onBeforeInput"), 0 < r.length && (i = new V("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: i,
					listeners: r
				}), i.data = v));
			}
			ni(o, t);
		});
	}
	function li(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function K(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			i.tag === 5 && a !== null && (i = a, a = Ye(e, n), a != null && r.unshift(li(e, a, i)), a = Ye(e, t), a != null && r.push(li(e, a, i))), e = e.return;
		}
		return r;
	}
	function ui(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function di(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (c !== null && c === r) break;
			s.tag === 5 && l !== null && (s = l, i ? (c = Ye(n, a), c != null && o.unshift(li(n, c, s))) : i || (c = Ye(n, a), c != null && o.push(li(n, c, s)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var fi = /\r\n?/g, pi = /\u0000|\uFFFD/g;
	function mi(e) {
		return (typeof e == "string" ? e : "" + e).replace(fi, "\n").replace(pi, "");
	}
	function hi(e, t, n) {
		if (t = mi(t), mi(e) !== t && n) throw Error(i(425));
	}
	function gi() {}
	var _i = null, vi = null;
	function yi(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var bi = typeof setTimeout == "function" ? setTimeout : void 0, xi = typeof clearTimeout == "function" ? clearTimeout : void 0, Si = typeof Promise == "function" ? Promise : void 0, Ci = typeof queueMicrotask == "function" ? queueMicrotask : Si === void 0 ? bi : function(e) {
		return Si.resolve(null).then(e).catch(wi);
	};
	function wi(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Ti(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$") {
					if (r === 0) {
						e.removeChild(i), fn(t);
						return;
					}
					r--;
				} else n !== "$" && n !== "$?" && n !== "$!" || r++;
			}
			n = i;
		} while (n);
		fn(t);
	}
	function Ei(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
				if (t === "/$") return null;
			}
		}
		return e;
	}
	function q(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?") {
					if (t === 0) return e;
					t--;
				} else n === "/$" && t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	var Di = Math.random().toString(36).slice(2), Oi = "__reactFiber$" + Di, ki = "__reactProps$" + Di, Ai = "__reactContainer$" + Di, ji = "__reactEvents$" + Di, Mi = "__reactListeners$" + Di, Ni = "__reactHandles$" + Di;
	function Pi(e) {
		var t = e[Oi];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Ai] || n[Oi]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = q(e); e !== null;) {
					if (n = e[Oi]) return n;
					e = q(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Fi(e) {
		return e = e[Oi] || e[Ai], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
	}
	function Ii(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Li(e) {
		return e[ki] || null;
	}
	var Ri = [], zi = -1;
	function Bi(e) {
		return { current: e };
	}
	function Vi(e) {
		0 > zi || (e.current = Ri[zi], Ri[zi] = null, zi--);
	}
	function Hi(e, t) {
		zi++, Ri[zi] = e.current, e.current = t;
	}
	var Ui = {}, Wi = Bi(Ui), Gi = Bi(!1), Ki = Ui;
	function qi(e, t) {
		var n = e.type.contextTypes;
		if (!n) return Ui;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i = {}, a;
		for (a in n) i[a] = t[a];
		return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
	}
	function Ji(e) {
		return e = e.childContextTypes, e != null;
	}
	function Yi() {
		Vi(Gi), Vi(Wi);
	}
	function Xi(e, t, n) {
		if (Wi.current !== Ui) throw Error(i(168));
		Hi(Wi, t), Hi(Gi, n);
	}
	function Zi(e, t, n) {
		var r = e.stateNode;
		if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
		for (var a in r = r.getChildContext(), r) if (!(a in t)) throw Error(i(108, ue(e) || "Unknown", a));
		return N({}, n, r);
	}
	function Qi(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ui, Ki = Wi.current, Hi(Wi, e), Hi(Gi, Gi.current), !0;
	}
	function $i(e, t, n) {
		var r = e.stateNode;
		if (!r) throw Error(i(169));
		n ? (e = Zi(e, t, Ki), r.__reactInternalMemoizedMergedChildContext = e, Vi(Gi), Vi(Wi), Hi(Wi, e)) : Vi(Gi), Hi(Gi, n);
	}
	var ea = null, ta = !1, na = !1;
	function ra(e) {
		ea === null ? ea = [e] : ea.push(e);
	}
	function ia(e) {
		ta = !0, ra(e);
	}
	function aa() {
		if (!na && ea !== null) {
			na = !0;
			var e = 0, t = B;
			try {
				var n = ea;
				for (B = 1; e < n.length; e++) {
					var r = n[e];
					do
						r = r(!0);
					while (r !== null);
				}
				ea = null, ta = !1;
			} catch (t) {
				throw ea !== null && (ea = ea.slice(e + 1)), ft(vt, aa), t;
			} finally {
				B = t, na = !1;
			}
		}
		return null;
	}
	var J = [], oa = 0, sa = null, ca = 0, la = [], ua = 0, da = null, fa = 1, Y = "";
	function pa(e, t) {
		J[oa++] = ca, J[oa++] = sa, sa = e, ca = t;
	}
	function ma(e, t, n) {
		la[ua++] = fa, la[ua++] = Y, la[ua++] = da, da = e;
		var r = fa;
		e = Y;
		var i = 32 - Et(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Et(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, fa = 1 << 32 - Et(t) + i | n << i | r, Y = a + e;
		} else fa = 1 << a | n << i | r, Y = e;
	}
	function ha(e) {
		e.return !== null && (pa(e, 1), ma(e, 1, 0));
	}
	function ga(e) {
		for (; e === sa;) sa = J[--oa], J[oa] = null, ca = J[--oa], J[oa] = null;
		for (; e === da;) da = la[--ua], la[ua] = null, Y = la[--ua], la[ua] = null, fa = la[--ua], la[ua] = null;
	}
	var _a = null, va = null, ya = !1, ba = null;
	function xa(e, t) {
		var n = Kl(5, null, null, 0);
		n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
	}
	function Sa(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null && (e.stateNode = t, _a = e, va = Ei(t.firstChild), !0);
			case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null && (e.stateNode = t, _a = e, va = null, !0);
			case 13: return t = t.nodeType === 8 ? t : null, t !== null && (n = da === null ? null : {
				id: fa,
				overflow: Y
			}, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = Kl(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _a = e, va = null, !0);
			default: return !1;
		}
	}
	function X(e) {
		return !!(e.mode & 1) && !(e.flags & 128);
	}
	function Ca(e) {
		if (ya) {
			var t = va;
			if (t) {
				var n = t;
				if (!Sa(e, t)) {
					if (X(e)) throw Error(i(418));
					t = Ei(n.nextSibling);
					var r = _a;
					t && Sa(e, t) ? xa(r, n) : (e.flags = e.flags & -4097 | 2, ya = !1, _a = e);
				}
			} else {
				if (X(e)) throw Error(i(418));
				e.flags = e.flags & -4097 | 2, ya = !1, _a = e;
			}
		}
	}
	function wa(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
		_a = e;
	}
	function Ta(e) {
		if (e !== _a) return !1;
		if (!ya) return wa(e), ya = !0, !1;
		var t;
		if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps)), t &&= va) {
			if (X(e)) throw Ea(), Error(i(418));
			for (; t;) xa(e, t), t = Ei(t.nextSibling);
		}
		if (wa(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								va = Ei(e.nextSibling);
								break a;
							}
							t--;
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					}
					e = e.nextSibling;
				}
				va = null;
			}
		} else va = _a ? Ei(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Ea() {
		for (var e = va; e;) e = Ei(e.nextSibling);
	}
	function Da() {
		va = _a = null, ya = !1;
	}
	function Oa(e) {
		ba === null ? ba = [e] : ba.push(e);
	}
	var ka = C.ReactCurrentBatchConfig;
	function Aa(e, t, n) {
		if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
			if (n._owner) {
				if (n = n._owner, n) {
					if (n.tag !== 1) throw Error(i(309));
					var r = n.stateNode;
				}
				if (!r) throw Error(i(147, e));
				var a = r, o = "" + e;
				return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(e) {
					var t = a.refs;
					e === null ? delete t[o] : t[o] = e;
				}, t._stringRef = o, t);
			}
			if (typeof e != "string") throw Error(i(284));
			if (!n._owner) throw Error(i(290, e));
		}
		return e;
	}
	function ja(e, t) {
		throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
	}
	function Ma(e) {
		var t = e._init;
		return t(e._payload);
	}
	function Na(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e, t) {
			for (e = /* @__PURE__ */ new Map(); t !== null;) t.key === null ? e.set(t.index, t) : e.set(t.key, t), t = t.sibling;
			return e;
		}
		function a(e, t) {
			return e = Yl(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 2, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 2), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = $l(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === E ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === j && Ma(i) === t.type) ? (r = a(t, n.props), r.ref = Aa(e, t, n), r.return = e, r) : (r = Xl(n.type, n.key, n.props, null, e.mode, r), r.ref = Aa(e, t, n), r.return = e, r);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = eu(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Zl(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number") return t = $l("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case w: return n = Xl(t.type, t.key, t.props, null, e.mode, n), n.ref = Aa(e, null, t), n.return = e, n;
					case T: return t = eu(t, e.mode, n), t.return = e, t;
					case j:
						var r = t._init;
						return f(e, r(t._payload), n);
				}
				if (Se(t) || ae(t)) return t = Zl(t, e.mode, n, null), t.return = e, t;
				ja(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case w: return n.key === i ? l(e, t, n, r) : null;
					case T: return n.key === i ? u(e, t, n, r) : null;
					case j: return i = n._init, p(e, t, i(n._payload), r);
				}
				if (Se(n) || ae(n)) return i === null ? d(e, t, n, r, null) : null;
				ja(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case w: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case T: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case j:
						var a = r._init;
						return m(e, t, n, a(r._payload), i);
				}
				if (Se(r) || ae(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				ja(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), ya && pa(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return ya && pa(i, h), l;
			}
			for (d = r(i, d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), ya && pa(i, h), l;
		}
		function g(a, s, c, l) {
			var u = ae(c);
			if (typeof u != "function") throw Error(i(150));
			if (c = u.call(c), c == null) throw Error(i(151));
			for (var d = u = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), ya && pa(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return ya && pa(a, g), u;
			}
			for (h = r(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), ya && pa(a, g), u;
		}
		function _(e, r, i, o) {
			if (typeof i == "object" && i && i.type === E && i.key === null && (i = i.props.children), typeof i == "object" && i) {
				switch (i.$$typeof) {
					case w:
						a: {
							for (var c = i.key, l = r; l !== null;) {
								if (l.key === c) {
									if (c = i.type, c === E) {
										if (l.tag === 7) {
											n(e, l.sibling), r = a(l, i.props.children), r.return = e, e = r;
											break a;
										}
									} else if (l.elementType === c || typeof c == "object" && c && c.$$typeof === j && Ma(c) === l.type) {
										n(e, l.sibling), r = a(l, i.props), r.ref = Aa(e, l, i), r.return = e, e = r;
										break a;
									}
									n(e, l);
									break;
								}
								t(e, l), l = l.sibling;
							}
							i.type === E ? (r = Zl(i.props.children, e.mode, o, i.key), r.return = e, e = r) : (o = Xl(i.type, i.key, i.props, null, e.mode, o), o.ref = Aa(e, r, i), o.return = e, e = o);
						}
						return s(e);
					case T:
						a: {
							for (l = i.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
										n(e, r.sibling), r = a(r, i.children || []), r.return = e, e = r;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							r = eu(i, e.mode, o), r.return = e, e = r;
						}
						return s(e);
					case j: return l = i._init, _(e, r, l(i._payload), o);
				}
				if (Se(i)) return h(e, r, i, o);
				if (ae(i)) return g(e, r, i, o);
				ja(e, i);
			}
			return typeof i == "string" && i !== "" || typeof i == "number" ? (i = "" + i, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, i), r.return = e, e = r) : (n(e, r), r = $l(i, e.mode, o), r.return = e, e = r), s(e)) : n(e, r);
		}
		return _;
	}
	var Pa = Na(!0), Fa = Na(!1), Ia = Bi(null), La = null, Ra = null, za = null;
	function Ba() {
		za = Ra = La = null;
	}
	function Va(e) {
		var t = Ia.current;
		Vi(Ia), e._currentValue = t;
	}
	function Ha(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Ua(e, t) {
		La = e, za = Ra = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ms = !0), e.firstContext = null);
	}
	function Wa(e) {
		var t = e._currentValue;
		if (za !== e) {
			if (e = {
				context: e,
				memoizedValue: t,
				next: null
			}, Ra === null) {
				if (La === null) throw Error(i(308));
				Ra = e, La.dependencies = {
					lanes: 0,
					firstContext: e
				};
			} else Ra = Ra.next = e;
		}
		return t;
	}
	var Ga = null;
	function Ka(e) {
		Ga === null ? Ga = [e] : Ga.push(e);
	}
	function qa(e, t, n, r) {
		var i = t.interleaved;
		return i === null ? (n.next = n, Ka(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Ja(e, r);
	}
	function Ja(e, t) {
		e.lanes |= t;
		var n = e.alternate;
		for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
		return n.tag === 3 ? n.stateNode : null;
	}
	var Ya = !1;
	function Xa(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		};
	}
	function Za(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			effects: e.effects
		});
	}
	function Qa(e, t) {
		return {
			eventTime: e,
			lane: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function $a(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, $ & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Ja(e, n);
		}
		return i = r.interleaved, i === null ? (t.next = t, Ka(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Ja(e, n);
	}
	function eo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194240)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Vt(e, n);
		}
	}
	function to(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						eventTime: n.eventTime,
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: n.callback,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				effects: r.effects
			}, e.updateQueue = n;
		} else e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	function no(e, t, n, r) {
		var i = e.updateQueue;
		Ya = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane, p = s.eventTime;
				if ((r & f) === f) {
					u !== null && (u = u.next = {
						eventTime: p,
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: s.callback,
						next: null
					});
					a: {
						var m = e, h = s;
						switch (f = t, p = n, h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(p, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(p, d, f) : m, f == null) break a;
								d = N({}, d, f);
								break a;
							case 2: Ya = !0;
						}
					}
					s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [s] : f.push(s));
				} else p = {
					eventTime: p,
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					f = s, s = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
				}
			} while (1);
			if (u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, t = i.shared.interleaved, t !== null) {
				i = t;
				do
					o |= i.lane, i = i.next;
				while (i !== t);
			} else a === null && (i.shared.lanes = 0);
			Jc |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function ro(e, t, n) {
		if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
			var r = e[t], a = r.callback;
			if (a !== null) {
				if (r.callback = null, r = n, typeof a != "function") throw Error(i(191, a));
				a.call(r);
			}
		}
	}
	var io = {}, ao = Bi(io), oo = Bi(io), so = Bi(io);
	function co(e) {
		if (e === io) throw Error(i(174));
		return e;
	}
	function lo(e, t) {
		switch (Hi(so, t), Hi(oo, e), Hi(ao, io), e = t.nodeType, e) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : Oe(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Oe(t, e);
		}
		Vi(ao), Hi(ao, t);
	}
	function uo() {
		Vi(ao), Vi(oo), Vi(so);
	}
	function fo(e) {
		co(so.current);
		var t = co(ao.current), n = Oe(t, e.type);
		t !== n && (Hi(oo, e), Hi(ao, n));
	}
	function po(e) {
		oo.current === e && (Vi(ao), Vi(oo));
	}
	var mo = Bi(0);
	function ho(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var go = [];
	function _o() {
		for (var e = 0; e < go.length; e++) go[e]._workInProgressVersionPrimary = null;
		go.length = 0;
	}
	var vo = C.ReactCurrentDispatcher, Z = C.ReactCurrentBatchConfig, yo = 0, bo = null, xo = null, So = null, Co = !1, wo = !1, To = 0, Eo = 0;
	function Do() {
		throw Error(i(321));
	}
	function Oo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Er(e[n], t[n])) return !1;
		return !0;
	}
	function ko(e, t, n, r, a, o) {
		if (yo = o, bo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, vo.current = e === null || e.memoizedState === null ? fs : ps, e = n(r, a), wo) {
			o = 0;
			do {
				if (wo = !1, To = 0, 25 <= o) throw Error(i(301));
				o += 1, So = xo = null, t.updateQueue = null, vo.current = ms, e = n(r, a);
			} while (wo);
		}
		if (vo.current = ds, t = xo !== null && xo.next !== null, yo = 0, So = xo = bo = null, Co = !1, t) throw Error(i(300));
		return e;
	}
	function Ao() {
		var e = To !== 0;
		return To = 0, e;
	}
	function jo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return So === null ? bo.memoizedState = So = e : So = So.next = e, So;
	}
	function Mo() {
		if (xo === null) {
			var e = bo.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = xo.next;
		var t = So === null ? bo.memoizedState : So.next;
		if (t !== null) So = t, xo = e;
		else {
			if (e === null) throw Error(i(310));
			xo = e, e = {
				memoizedState: xo.memoizedState,
				baseState: xo.baseState,
				baseQueue: xo.baseQueue,
				queue: xo.queue,
				next: null
			}, So === null ? bo.memoizedState = So = e : So = So.next = e;
		}
		return So;
	}
	function No(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Po(e) {
		var t = Mo(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = xo, a = r.baseQueue, o = n.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			r.baseQueue = a = o, n.pending = null;
		}
		if (a !== null) {
			o = a.next, r = r.baseState;
			var c = s = null, l = null, u = o;
			do {
				var d = u.lane;
				if ((yo & d) === d) l !== null && (l = l.next = {
					lane: 0,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}), r = u.hasEagerState ? u.eagerState : e(r, u.action);
				else {
					var f = {
						lane: d,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					};
					l === null ? (c = l = f, s = r) : l = l.next = f, bo.lanes |= d, Jc |= d;
				}
				u = u.next;
			} while (u !== null && u !== o);
			l === null ? s = r : l.next = c, Er(r, t.memoizedState) || (Ms = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
		}
		if (e = n.interleaved, e !== null) {
			a = e;
			do
				o = a.lane, bo.lanes |= o, Jc |= o, a = a.next;
			while (a !== e);
		} else a === null && (n.lanes = 0);
		return [t.memoizedState, n.dispatch];
	}
	function Fo(e) {
		var t = Mo(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Er(o, t.memoizedState) || (Ms = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function Io() {}
	function Lo(e, t) {
		var n = bo, r = Mo(), a = t(), o = !Er(r.memoizedState, a);
		if (o && (r.memoizedState = a, Ms = !0), r = r.queue, Yo(Bo.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || So !== null && So.memoizedState.tag & 1) {
			if (n.flags |= 2048, Wo(9, zo.bind(null, n, r, a, t), void 0, null), Vc === null) throw Error(i(349));
			yo & 30 || Ro(n, t, a);
		}
		return a;
	}
	function Ro(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = bo.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, bo.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function zo(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Vo(t) && Ho(e);
	}
	function Bo(e, t, n) {
		return n(function() {
			Vo(t) && Ho(e);
		});
	}
	function Vo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Er(e, n);
		} catch {
			return !0;
		}
	}
	function Ho(e) {
		var t = Ja(e, 1);
		t !== null && ml(t, e, 1, -1);
	}
	function Uo(e) {
		var t = jo();
		return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: No,
			lastRenderedState: e
		}, t.queue = e, e = e.dispatch = ss.bind(null, bo, e), [t.memoizedState, e];
	}
	function Wo(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, t = bo.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, bo.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
	}
	function Go() {
		return Mo().memoizedState;
	}
	function Ko(e, t, n, r) {
		var i = jo();
		bo.flags |= e, i.memoizedState = Wo(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function qo(e, t, n, r) {
		var i = Mo();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (xo !== null) {
			var o = xo.memoizedState;
			if (a = o.destroy, r !== null && Oo(r, o.deps)) {
				i.memoizedState = Wo(t, n, a, r);
				return;
			}
		}
		bo.flags |= e, i.memoizedState = Wo(1 | t, n, a, r);
	}
	function Jo(e, t) {
		return Ko(8390656, 8, e, t);
	}
	function Yo(e, t) {
		return qo(2048, 8, e, t);
	}
	function Xo(e, t) {
		return qo(4, 2, e, t);
	}
	function Zo(e, t) {
		return qo(4, 4, e, t);
	}
	function Qo(e, t) {
		if (typeof t == "function") return e = e(), t(e), function() {
			t(null);
		};
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function $o(e, t, n) {
		return n = n == null ? null : n.concat([e]), qo(4, 4, Qo.bind(null, t, e), n);
	}
	function es() {}
	function ts(e, t) {
		var n = Mo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Oo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function ns(e, t) {
		var n = Mo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Oo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
	}
	function rs(e, t, n) {
		return yo & 21 ? (Er(n, t) || (n = Lt(), bo.lanes |= n, Jc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ms = !0), e.memoizedState = n);
	}
	function is(e, t) {
		var n = B;
		B = n !== 0 && 4 > n ? n : 4, e(!0);
		var r = Z.transition;
		Z.transition = {};
		try {
			e(!1), t();
		} finally {
			B = n, Z.transition = r;
		}
	}
	function as() {
		return Mo().memoizedState;
	}
	function os(e, t, n) {
		var r = pl(e);
		if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, cs(e)) ls(t, n);
		else if (n = qa(e, t, n, r), n !== null) {
			var i = fl();
			ml(n, e, r, i), us(n, t, r);
		}
	}
	function ss(e, t, n) {
		var r = pl(e), i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (cs(e)) ls(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Er(s, o)) {
					var c = t.interleaved;
					c === null ? (i.next = i, Ka(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
					return;
				}
			} catch {}
			n = qa(e, t, i, r), n !== null && (i = fl(), ml(n, e, r, i), us(n, t, r));
		}
	}
	function cs(e) {
		var t = e.alternate;
		return e === bo || t !== null && t === bo;
	}
	function ls(e, t) {
		wo = Co = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function us(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Vt(e, n);
		}
	}
	var ds = {
		readContext: Wa,
		useCallback: Do,
		useContext: Do,
		useEffect: Do,
		useImperativeHandle: Do,
		useInsertionEffect: Do,
		useLayoutEffect: Do,
		useMemo: Do,
		useReducer: Do,
		useRef: Do,
		useState: Do,
		useDebugValue: Do,
		useDeferredValue: Do,
		useTransition: Do,
		useMutableSource: Do,
		useSyncExternalStore: Do,
		useId: Do,
		unstable_isNewReconciler: !1
	}, fs = {
		readContext: Wa,
		useCallback: function(e, t) {
			return jo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Wa,
		useEffect: Jo,
		useImperativeHandle: function(e, t, n) {
			return n = n == null ? null : n.concat([e]), Ko(4194308, 4, Qo.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Ko(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			return Ko(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = jo();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
		},
		useReducer: function(e, t, n) {
			var r = jo();
			return t = n === void 0 ? t : n(t), r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = os.bind(null, bo, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = jo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: Uo,
		useDebugValue: es,
		useDeferredValue: function(e) {
			return jo().memoizedState = e;
		},
		useTransition: function() {
			var e = Uo(!1), t = e[0];
			return e = is.bind(null, e[1]), jo().memoizedState = e, [t, e];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var r = bo, a = jo();
			if (ya) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Vc === null) throw Error(i(349));
				yo & 30 || Ro(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Jo(Bo.bind(null, r, o, e), [e]), r.flags |= 2048, Wo(9, zo.bind(null, r, o, n, t), void 0, null), n;
		},
		useId: function() {
			var e = jo(), t = Vc.identifierPrefix;
			if (ya) {
				var n = Y, r = fa;
				n = (r & ~(1 << 32 - Et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = To++, 0 < n && (t += "H" + n.toString(32)), t += ":";
			} else n = Eo++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t;
		},
		unstable_isNewReconciler: !1
	}, ps = {
		readContext: Wa,
		useCallback: ts,
		useContext: Wa,
		useEffect: Yo,
		useImperativeHandle: $o,
		useInsertionEffect: Xo,
		useLayoutEffect: Zo,
		useMemo: ns,
		useReducer: Po,
		useRef: Go,
		useState: function() {
			return Po(No);
		},
		useDebugValue: es,
		useDeferredValue: function(e) {
			return rs(Mo(), xo.memoizedState, e);
		},
		useTransition: function() {
			return [Po(No)[0], Mo().memoizedState];
		},
		useMutableSource: Io,
		useSyncExternalStore: Lo,
		useId: as,
		unstable_isNewReconciler: !1
	}, ms = {
		readContext: Wa,
		useCallback: ts,
		useContext: Wa,
		useEffect: Yo,
		useImperativeHandle: $o,
		useInsertionEffect: Xo,
		useLayoutEffect: Zo,
		useMemo: ns,
		useReducer: Fo,
		useRef: Go,
		useState: function() {
			return Fo(No);
		},
		useDebugValue: es,
		useDeferredValue: function(e) {
			var t = Mo();
			return xo === null ? t.memoizedState = e : rs(t, xo.memoizedState, e);
		},
		useTransition: function() {
			return [Fo(No)[0], Mo().memoizedState];
		},
		useMutableSource: Io,
		useSyncExternalStore: Lo,
		useId: as,
		unstable_isNewReconciler: !1
	};
	function hs(e, t) {
		if (e && e.defaultProps) {
			for (var n in t = N({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	function gs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : N({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var _s = {
		isMounted: function(e) {
			return (e = e._reactInternals) ? ot(e) === e : !1;
		},
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = fl(), i = pl(e), a = Qa(r, i);
			a.payload = t, n != null && (a.callback = n), t = $a(e, a, i), t !== null && (ml(t, e, i, r), eo(t, e, i));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = fl(), i = pl(e), a = Qa(r, i);
			a.tag = 1, a.payload = t, n != null && (a.callback = n), t = $a(e, a, i), t !== null && (ml(t, e, i, r), eo(t, e, i));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = fl(), r = pl(e), i = Qa(n, r);
			i.tag = 2, t != null && (i.callback = t), t = $a(e, i, r), t !== null && (ml(t, e, r, n), eo(t, e, r));
		}
	};
	function vs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Dr(n, r) || !Dr(i, a) : !0;
	}
	function ys(e, t, n) {
		var r = !1, i = Ui, a = t.contextType;
		return typeof a == "object" && a ? a = Wa(a) : (i = Ji(t) ? Ki : Wi.current, r = t.contextTypes, a = (r = r != null) ? qi(e, i) : Ui), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _s, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function bs(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _s.enqueueReplaceState(t, t.state, null);
	}
	function xs(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = {}, Xa(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = Wa(a) : (a = Ji(t) ? Ki : Wi.current, i.context = qi(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (gs(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && _s.enqueueReplaceState(i, i.state, null), no(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function Ss(e, t) {
		try {
			var n = "", r = t;
			do
				n += P(r), r = r.return;
			while (r);
			var i = n;
		} catch (e) {
			i = "\nError generating stack: " + e.message + "\n" + e.stack;
		}
		return {
			value: e,
			source: t,
			stack: i,
			digest: null
		};
	}
	function Cs(e, t, n) {
		return {
			value: e,
			source: null,
			stack: n ?? null,
			digest: t ?? null
		};
	}
	function ws(e, t) {
		try {
			console.error(t.value);
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	var Ts = typeof WeakMap == "function" ? WeakMap : Map;
	function Es(e, t, n) {
		n = Qa(-1, n), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			nl || (nl = !0, rl = r), ws(e, t);
		}, n;
	}
	function Ds(e, t, n) {
		n = Qa(-1, n), n.tag = 3;
		var r = e.type.getDerivedStateFromError;
		if (typeof r == "function") {
			var i = t.value;
			n.payload = function() {
				return r(i);
			}, n.callback = function() {
				ws(e, t);
			};
		}
		var a = e.stateNode;
		return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
			ws(e, t), typeof r != "function" && (il === null ? il = /* @__PURE__ */ new Set([this]) : il.add(this));
			var n = t.stack;
			this.componentDidCatch(t.value, { componentStack: n === null ? "" : n });
		}), n;
	}
	function Os(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Ts();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (i.add(n), e = zl.bind(null, e, t, n), t.then(e, e));
	}
	function ks(e) {
		do {
			var t;
			if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null || t.dehydrated !== null), t) return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function As(e, t, n, r, i) {
		return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qa(-1, 1), t.tag = 2, $a(n, t, 1))), n.lanes |= 1), e);
	}
	var js = C.ReactCurrentOwner, Ms = !1;
	function Ns(e, t, n, r) {
		t.child = e === null ? Fa(t, null, n, r) : Pa(t, e.child, n, r);
	}
	function Ps(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return Ua(t, i), r = ko(e, t, n, r, a, i), n = Ao(), e !== null && !Ms ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ec(e, t, i)) : (ya && n && ha(t), t.flags |= 1, Ns(e, t, r, i), t.child);
	}
	function Fs(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !ql(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Is(e, t, a, r, i)) : (e = Xl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, (e.lanes & i) === 0) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Dr : n, n(o, r) && e.ref === t.ref) return ec(e, t, i);
		}
		return t.flags |= 1, e = Yl(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Is(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Dr(a, r) && e.ref === t.ref) {
				if (Ms = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Ms = !0);
				else return t.lanes = e.lanes, ec(e, t, i);
			}
		}
		return zs(e, t, n, r, i);
	}
	function Ls(e, t, n) {
		var r = t.pendingProps, i = r.children, a = e === null ? null : e.memoizedState;
		if (r.mode === "hidden") {
			if (!(t.mode & 1)) t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, Hi(Gc, Wc), Wc |= n;
			else {
				if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
					baseLanes: e,
					cachePool: null,
					transitions: null
				}, t.updateQueue = null, Hi(Gc, Wc), Wc |= e, null;
				t.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null
				}, r = a === null ? n : a.baseLanes, Hi(Gc, Wc), Wc |= r;
			}
		} else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), Hi(Gc, Wc), Wc |= r;
		return Ns(e, t, i, n), t.child;
	}
	function Rs(e, t) {
		var n = t.ref;
		(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
	}
	function zs(e, t, n, r, i) {
		var a = Ji(n) ? Ki : Wi.current;
		return a = qi(t, a), Ua(t, i), n = ko(e, t, n, r, a, i), r = Ao(), e !== null && !Ms ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ec(e, t, i)) : (ya && r && ha(t), t.flags |= 1, Ns(e, t, n, i), t.child);
	}
	function Bs(e, t, n, r, i) {
		if (Ji(n)) {
			var a = !0;
			Qi(t);
		} else a = !1;
		if (Ua(t, i), t.stateNode === null) $s(e, t), ys(t, n, r), xs(t, n, r, i), r = !0;
		else if (e === null) {
			var o = t.stateNode, s = t.memoizedProps;
			o.props = s;
			var c = o.context, l = n.contextType;
			typeof l == "object" && l ? l = Wa(l) : (l = Ji(n) ? Ki : Wi.current, l = qi(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && bs(t, o, r, l), Ya = !1;
			var f = t.memoizedState;
			o.state = f, no(t, r, o, i), c = t.memoizedState, s !== r || f !== c || Gi.current || Ya ? (typeof u == "function" && (gs(t, n, u, r), c = t.memoizedState), (s = Ya || vs(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			o = t.stateNode, Za(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : hs(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == "object" && c ? c = Wa(c) : (c = Ji(n) ? Ki : Wi.current, c = qi(t, c));
			var p = n.getDerivedStateFromProps;
			(u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== c) && bs(t, o, r, c), Ya = !1, f = t.memoizedState, o.state = f, no(t, r, o, i);
			var m = t.memoizedState;
			s !== d || f !== m || Gi.current || Ya ? (typeof p == "function" && (gs(t, n, p, r), m = t.memoizedState), (l = Ya || vs(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return Vs(e, t, n, r, a, i);
	}
	function Vs(e, t, n, r, i, a) {
		Rs(e, t);
		var o = !!(t.flags & 128);
		if (!r && !o) return i && $i(t, n, !1), ec(e, t, a);
		r = t.stateNode, js.current = t;
		var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
		return t.flags |= 1, e !== null && o ? (t.child = Pa(t, e.child, null, a), t.child = Pa(t, null, s, a)) : Ns(e, t, s, a), t.memoizedState = r.state, i && $i(t, n, !0), t.child;
	}
	function Hs(e) {
		var t = e.stateNode;
		t.pendingContext ? Xi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xi(e, t.context, !1), lo(e, t.containerInfo);
	}
	function Us(e, t, n, r, i) {
		return Da(), Oa(i), t.flags |= 256, Ns(e, t, n, r), t.child;
	}
	var Ws = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function Gs(e) {
		return {
			baseLanes: e,
			cachePool: null,
			transitions: null
		};
	}
	function Ks(e, t, n) {
		var r = t.pendingProps, i = mo.current, a = !1, o = !!(t.flags & 128), s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(i & 2)), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Hi(mo, i & 1), e === null) return Ca(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.lanes = t.mode & 1 ? e.data === "$!" ? 8 : 1073741824 : 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
			mode: "hidden",
			children: o
		}, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Ql(o, r, 0, null), e = Zl(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Gs(n), t.memoizedState = Ws, e) : qs(t, o));
		if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Ys(e, t, o, r, s, i, n);
		if (a) {
			a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
			var c = {
				mode: "hidden",
				children: r.children
			};
			return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Yl(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), s === null ? (a = Zl(a, o, n, null), a.flags |= 2) : a = Yl(s, a), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Gs(n) : {
				baseLanes: o.baseLanes | n,
				cachePool: null,
				transitions: o.transitions
			}, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ws, r;
		}
		return a = e.child, e = a.sibling, r = Yl(a, {
			mode: "visible",
			children: r.children
		}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
	}
	function qs(e, t) {
		return t = Ql({
			mode: "visible",
			children: t
		}, e.mode, 0, null), t.return = e, e.child = t;
	}
	function Js(e, t, n, r) {
		return r !== null && Oa(r), Pa(t, e.child, null, n), e = qs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Ys(e, t, n, r, a, o, s) {
		if (n) return t.flags & 256 ? (t.flags &= -257, r = Cs(Error(i(422))), Js(e, t, s, r)) : t.memoizedState === null ? (o = r.fallback, a = t.mode, r = Ql({
			mode: "visible",
			children: r.children
		}, a, 0, null), o = Zl(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Pa(t, e.child, null, s), t.child.memoizedState = Gs(s), t.memoizedState = Ws, o) : (t.child = e.child, t.flags |= 128, null);
		if (!(t.mode & 1)) return Js(e, t, s, null);
		if (a.data === "$!") {
			if (r = a.nextSibling && a.nextSibling.dataset, r) var c = r.dgst;
			return r = c, o = Error(i(419)), r = Cs(o, r, void 0), Js(e, t, s, r);
		}
		if (c = (s & e.childLanes) !== 0, Ms || c) {
			if (r = Vc, r !== null) {
				switch (s & -s) {
					case 4:
						a = 2;
						break;
					case 16:
						a = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						a = 32;
						break;
					case 536870912:
						a = 268435456;
						break;
					default: a = 0;
				}
				a = (a & (r.suspendedLanes | s)) === 0 ? a : 0, a !== 0 && a !== o.retryLane && (o.retryLane = a, Ja(e, a), ml(r, e, a, -1));
			}
			return Ol(), r = Cs(Error(i(421))), Js(e, t, s, r);
		}
		return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vl.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, va = Ei(a.nextSibling), _a = t, ya = !0, ba = null, e !== null && (la[ua++] = fa, la[ua++] = Y, la[ua++] = da, fa = e.id, Y = e.overflow, da = t), t = qs(t, r.children), t.flags |= 4096, t);
	}
	function Xs(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Ha(e.return, t, n);
	}
	function Zs(e, t, n, r, i) {
		var a = e.memoizedState;
		a === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i
		} : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
	}
	function Qs(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		if (Ns(e, t, r.children, n), r = mo.current, r & 2) r = r & 1 | 2, t.flags |= 128;
		else {
			if (e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
				if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
				else if (e.tag === 19) Xs(e, n, t);
				else if (e.child !== null) {
					e.child.return = e, e = e.child;
					continue;
				}
				if (e === t) break a;
				for (; e.sibling === null;) {
					if (e.return === null || e.return === t) break a;
					e = e.return;
				}
				e.sibling.return = e.return, e = e.sibling;
			}
			r &= 1;
		}
		if (Hi(mo, r), !(t.mode & 1)) t.memoizedState = null;
		else switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && ho(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Zs(t, !1, i, n, a);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && ho(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				Zs(t, !0, n, null, a);
				break;
			case "together":
				Zs(t, !1, null, null, void 0);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function $s(e, t) {
		!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
	}
	function ec(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Jc |= t.lanes, (n & t.childLanes) === 0) return null;
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Yl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Yl(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function tc(e, t, n) {
		switch (t.tag) {
			case 3:
				Hs(t), Da();
				break;
			case 5:
				fo(t);
				break;
			case 1:
				Ji(t.type) && Qi(t);
				break;
			case 4:
				lo(t, t.stateNode.containerInfo);
				break;
			case 10:
				var r = t.type._context, i = t.memoizedProps.value;
				Hi(Ia, r._currentValue), r._currentValue = i;
				break;
			case 13:
				if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (Hi(mo, mo.current & 1), e = ec(e, t, n), e === null ? null : e.sibling) : Ks(e, t, n) : (Hi(mo, mo.current & 1), t.flags |= 128, null);
				Hi(mo, mo.current & 1);
				break;
			case 19:
				if (r = (n & t.childLanes) !== 0, e.flags & 128) {
					if (r) return Qs(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Hi(mo, mo.current), r) break;
				return null;
			case 22:
			case 23: return t.lanes = 0, Ls(e, t, n);
		}
		return ec(e, t, n);
	}
	var nc = function(e, t) {
		for (var n = t.child; n !== null;) {
			if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
			else if (n.tag !== 4 && n.child !== null) {
				n.child.return = n, n = n.child;
				continue;
			}
			if (n === t) break;
			for (; n.sibling === null;) {
				if (n.return === null || n.return === t) return;
				n = n.return;
			}
			n.sibling.return = n.return, n = n.sibling;
		}
	}, rc = function(e, t, n, r) {
		var i = e.memoizedProps;
		if (i !== r) {
			e = t.stateNode, co(ao.current);
			var a = null;
			switch (n) {
				case "input":
					i = ge(e, i), r = ge(e, r), a = [];
					break;
				case "select":
					i = N({}, i, { value: void 0 }), r = N({}, r, { value: void 0 }), a = [];
					break;
				case "textarea":
					i = we(e, i), r = we(e, r), a = [];
					break;
				default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = gi);
			}
			Le(n, r);
			var o;
			for (u in n = null, i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) {
				if (u === "style") {
					var c = i[u];
					for (o in c) c.hasOwnProperty(o) && (n ||= {}, n[o] = "");
				} else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (s.hasOwnProperty(u) ? a ||= [] : (a ||= []).push(u, null));
			}
			for (u in r) {
				var l = r[u];
				if (c = i?.[u], r.hasOwnProperty(u) && l !== c && (l != null || c != null)) {
					if (u === "style") {
						if (c) {
							for (o in c) !c.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n ||= {}, n[o] = "");
							for (o in l) l.hasOwnProperty(o) && c[o] !== l[o] && (n ||= {}, n[o] = l[o]);
						} else n || (a ||= [], a.push(u, n)), n = l;
					} else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (a ||= []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a ||= []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (s.hasOwnProperty(u) ? (l != null && u === "onScroll" && ri("scroll", e), a || c === l || (a = [])) : (a ||= []).push(u, l));
				}
			}
			n && (a ||= []).push("style", n);
			var u = a;
			(t.updateQueue = u) && (t.flags |= 4);
		}
	}, ic = function(e, t, n, r) {
		n !== r && (t.flags |= 4);
	};
	function ac(e, t) {
		if (!ya) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function oc(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function sc(e, t, n) {
		var r = t.pendingProps;
		switch (ga(t), t.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return oc(t), null;
			case 1: return Ji(t.type) && Yi(), oc(t), null;
			case 3: return r = t.stateNode, uo(), Vi(Gi), Vi(Wi), _o(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ta(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ba !== null && (vl(ba), ba = null))), oc(t), null;
			case 5:
				po(t);
				var a = co(so.current);
				if (n = t.type, e !== null && t.stateNode != null) rc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return oc(t), null;
					}
					if (e = co(ao.current), Ta(t)) {
						r = t.stateNode, n = t.type;
						var o = t.memoizedProps;
						switch (r[Oi] = t, r[ki] = o, e = !!(t.mode & 1), n) {
							case "dialog":
								ri("cancel", r), ri("close", r);
								break;
							case "iframe":
							case "object":
							case "embed":
								ri("load", r);
								break;
							case "video":
							case "audio":
								for (a = 0; a < $r.length; a++) ri($r[a], r);
								break;
							case "source":
								ri("error", r);
								break;
							case "img":
							case "image":
							case "link":
								ri("error", r), ri("load", r);
								break;
							case "details":
								ri("toggle", r);
								break;
							case "input":
								_e(r, o), ri("invalid", r);
								break;
							case "select":
								r._wrapperState = { wasMultiple: !!o.multiple }, ri("invalid", r);
								break;
							case "textarea": Te(r, o), ri("invalid", r);
						}
						for (var c in Le(n, o), a = null, o) if (o.hasOwnProperty(c)) {
							var l = o[c];
							c === "children" ? typeof l == "string" ? r.textContent !== l && (!0 !== o.suppressHydrationWarning && hi(r.textContent, l, e), a = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (!0 !== o.suppressHydrationWarning && hi(r.textContent, l, e), a = ["children", "" + l]) : s.hasOwnProperty(c) && l != null && c === "onScroll" && ri("scroll", r);
						}
						switch (n) {
							case "input":
								pe(r), be(r, o, !0);
								break;
							case "textarea":
								pe(r), De(r);
								break;
							case "select":
							case "option": break;
							default: typeof o.onClick == "function" && (r.onclick = gi);
						}
						r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
					} else {
						c = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = L(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(n, { is: r.is }) : (e = c.createElement(n), n === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Oi] = t, e[ki] = r, nc(e, t, !1, !1), t.stateNode = e;
						a: {
							switch (c = Re(n, r), n) {
								case "dialog":
									ri("cancel", e), ri("close", e), a = r;
									break;
								case "iframe":
								case "object":
								case "embed":
									ri("load", e), a = r;
									break;
								case "video":
								case "audio":
									for (a = 0; a < $r.length; a++) ri($r[a], e);
									a = r;
									break;
								case "source":
									ri("error", e), a = r;
									break;
								case "img":
								case "image":
								case "link":
									ri("error", e), ri("load", e), a = r;
									break;
								case "details":
									ri("toggle", e), a = r;
									break;
								case "input":
									_e(e, r), a = ge(e, r), ri("invalid", e);
									break;
								case "option":
									a = r;
									break;
								case "select":
									e._wrapperState = { wasMultiple: !!r.multiple }, a = N({}, r, { value: void 0 }), ri("invalid", e);
									break;
								case "textarea":
									Te(e, r), a = we(e, r), ri("invalid", e);
									break;
								default: a = r;
							}
							for (o in Le(n, a), l = a, l) if (l.hasOwnProperty(o)) {
								var u = l[o];
								o === "style" ? Fe(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ae(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && je(e, u) : typeof u == "number" && je(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (s.hasOwnProperty(o) ? u != null && o === "onScroll" && ri("scroll", e) : u != null && S(e, o, u, c));
							}
							switch (n) {
								case "input":
									pe(e), be(e, r, !1);
									break;
								case "textarea":
									pe(e), De(e);
									break;
								case "option":
									r.value != null && e.setAttribute("value", "" + de(r.value));
									break;
								case "select":
									e.multiple = !!r.multiple, o = r.value, o == null ? r.defaultValue != null && Ce(e, !!r.multiple, r.defaultValue, !0) : Ce(e, !!r.multiple, o, !1);
									break;
								default: typeof a.onClick == "function" && (e.onclick = gi);
							}
							switch (n) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									r = !!r.autoFocus;
									break a;
								case "img":
									r = !0;
									break a;
								default: r = !1;
							}
						}
						r && (t.flags |= 4);
					}
					t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
				}
				return oc(t), null;
			case 6:
				if (e && t.stateNode != null) ic(e, t, e.memoizedProps, r);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (n = co(so.current), co(ao.current), Ta(t)) {
						if (r = t.stateNode, n = t.memoizedProps, r[Oi] = t, (o = r.nodeValue !== n) && (e = _a, e !== null)) switch (e.tag) {
							case 3:
								hi(r.nodeValue, n, !!(e.mode & 1));
								break;
							case 5: !0 !== e.memoizedProps.suppressHydrationWarning && hi(r.nodeValue, n, !!(e.mode & 1));
						}
						o && (t.flags |= 4);
					} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Oi] = t, t.stateNode = r;
				}
				return oc(t), null;
			case 13:
				if (Vi(mo), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (ya && va !== null && t.mode & 1 && !(t.flags & 128)) Ea(), Da(), t.flags |= 98560, o = !1;
					else if (o = Ta(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!o) throw Error(i(318));
							if (o = t.memoizedState, o = o === null ? null : o.dehydrated, !o) throw Error(i(317));
							o[Oi] = t;
						} else Da(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						oc(t), o = !1;
					} else ba !== null && (vl(ba), ba = null), o = !0;
					if (!o) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || mo.current & 1 ? Kc === 0 && (Kc = 3) : Ol())), t.updateQueue !== null && (t.flags |= 4), oc(t), null);
			case 4: return uo(), e === null && oi(t.stateNode.containerInfo), oc(t), null;
			case 10: return Va(t.type._context), oc(t), null;
			case 17: return Ji(t.type) && Yi(), oc(t), null;
			case 19:
				if (Vi(mo), o = t.memoizedState, o === null) return oc(t), null;
				if (r = !!(t.flags & 128), c = o.rendering, c === null) {
					if (r) ac(o, !1);
					else {
						if (Kc !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (c = ho(e), c !== null) {
								for (t.flags |= 128, ac(o, !1), r = c.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, c = o.alternate, c === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = c.childLanes, o.lanes = c.lanes, o.child = c.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = c.memoizedProps, o.memoizedState = c.memoizedState, o.updateQueue = c.updateQueue, o.type = c.type, e = c.dependencies, o.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return Hi(mo, mo.current & 1 | 2), t.child;
							}
							e = e.sibling;
						}
						o.tail !== null && gt() > el && (t.flags |= 128, r = !0, ac(o, !1), t.lanes = 4194304);
					}
				} else {
					if (!r) {
						if (e = ho(c), e !== null) {
							if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ac(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !ya) return oc(t), null;
						} else 2 * gt() - o.renderingStartTime > el && n !== 1073741824 && (t.flags |= 128, r = !0, ac(o, !1), t.lanes = 4194304);
					}
					o.isBackwards ? (c.sibling = t.child, t.child = c) : (n = o.last, n === null ? t.child = c : n.sibling = c, o.last = c);
				}
				return o.tail === null ? (oc(t), null) : (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = gt(), t.sibling = null, n = mo.current, Hi(mo, r ? n & 1 | 2 : n & 1), t);
			case 22:
			case 23: return wl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Wc & 1073741824 && (oc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : oc(t), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(i(156, t.tag));
	}
	function cc(e, t) {
		switch (ga(t), t.tag) {
			case 1: return Ji(t.type) && Yi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return uo(), Vi(Gi), Vi(Wi), _o(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 5: return po(t), null;
			case 13:
				if (Vi(mo), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					Da();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Vi(mo), null;
			case 4: return uo(), null;
			case 10: return Va(t.type._context), null;
			case 22:
			case 23: return wl(), null;
			case 24: return null;
			default: return null;
		}
	}
	var lc = !1, uc = !1, dc = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
	function fc(e, t) {
		var n = e.ref;
		if (n !== null) {
			if (typeof n == "function") try {
				n(null);
			} catch (n) {
				Rl(e, t, n);
			}
			else n.current = null;
		}
	}
	function pc(e, t, n) {
		try {
			n();
		} catch (n) {
			Rl(e, t, n);
		}
	}
	var mc = !1;
	function hc(e, t) {
		if (_i = mn, e = Ar(), jr(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var a = r.anchorOffset, o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === a && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (vi = {
			focusedElem: e,
			selectionRange: n
		}, mn = !1, Q = t; Q !== null;) if (t = Q, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, Q = e;
		else for (; Q !== null;) {
			t = Q;
			try {
				var h = t.alternate;
				if (t.flags & 1024) switch (t.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (h !== null) {
							var g = h.memoizedProps, _ = h.memoizedState, v = t.stateNode;
							v.__reactInternalSnapshotBeforeUpdate = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : hs(t.type, g), _);
						}
						break;
					case 3:
						var y = t.stateNode.containerInfo;
						y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
						break;
					case 5:
					case 6:
					case 4:
					case 17: break;
					default: throw Error(i(163));
				}
			} catch (e) {
				Rl(t, t.return, e);
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, Q = e;
				break;
			}
			Q = t.return;
		}
		return h = mc, mc = !1, h;
	}
	function gc(e, t, n) {
		var r = t.updateQueue;
		if (r = r === null ? null : r.lastEffect, r !== null) {
			var i = r = r.next;
			do {
				if ((i.tag & e) === e) {
					var a = i.destroy;
					i.destroy = void 0, a !== void 0 && pc(t, n, a);
				}
				i = i.next;
			} while (i !== r);
		}
	}
	function _c(e, t) {
		if (t = t.updateQueue, t = t === null ? null : t.lastEffect, t !== null) {
			var n = t = t.next;
			do {
				if ((n.tag & e) === e) {
					var r = n.create;
					n.destroy = r();
				}
				n = n.next;
			} while (n !== t);
		}
	}
	function vc(e) {
		var t = e.ref;
		if (t !== null) {
			var n = e.stateNode;
			switch (e.tag) {
				case 5:
					e = n;
					break;
				default: e = n;
			}
			typeof t == "function" ? t(e) : t.current = e;
		}
	}
	function yc(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, yc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Oi], delete t[ki], delete t[ji], delete t[Mi], delete t[Ni])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	function bc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 4;
	}
	function xc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || bc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Sc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gi));
		else if (r !== 4 && (e = e.child, e !== null)) for (Sc(e, t, n), e = e.sibling; e !== null;) Sc(e, t, n), e = e.sibling;
	}
	function Cc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (e = e.child, e !== null)) for (Cc(e, t, n), e = e.sibling; e !== null;) Cc(e, t, n), e = e.sibling;
	}
	var wc = null, Tc = !1;
	function Ec(e, t, n) {
		for (n = n.child; n !== null;) Dc(e, t, n), n = n.sibling;
	}
	function Dc(e, t, n) {
		if (wt && typeof wt.onCommitFiberUnmount == "function") try {
			wt.onCommitFiberUnmount(Ct, n);
		} catch {}
		switch (n.tag) {
			case 5: uc || fc(n, t);
			case 6:
				var r = wc, i = Tc;
				wc = null, Ec(e, t, n), wc = r, Tc = i, wc !== null && (Tc ? (e = wc, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : wc.removeChild(n.stateNode));
				break;
			case 18:
				wc !== null && (Tc ? (e = wc, n = n.stateNode, e.nodeType === 8 ? Ti(e.parentNode, n) : e.nodeType === 1 && Ti(e, n), fn(e)) : Ti(wc, n.stateNode));
				break;
			case 4:
				r = wc, i = Tc, wc = n.stateNode.containerInfo, Tc = !0, Ec(e, t, n), wc = r, Tc = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!uc && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
					i = r = r.next;
					do {
						var a = i, o = a.destroy;
						a = a.tag, o !== void 0 && (a & 2 || a & 4) && pc(n, t, o), i = i.next;
					} while (i !== r);
				}
				Ec(e, t, n);
				break;
			case 1:
				if (!uc && (fc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
					r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
				} catch (e) {
					Rl(n, t, e);
				}
				Ec(e, t, n);
				break;
			case 21:
				Ec(e, t, n);
				break;
			case 22:
				n.mode & 1 ? (uc = (r = uc) || n.memoizedState !== null, Ec(e, t, n), uc = r) : Ec(e, t, n);
				break;
			default: Ec(e, t, n);
		}
	}
	function Oc(e) {
		var t = e.updateQueue;
		if (t !== null) {
			e.updateQueue = null;
			var n = e.stateNode;
			n === null && (n = e.stateNode = new dc()), t.forEach(function(t) {
				var r = Hl.bind(null, e, t);
				n.has(t) || (n.add(t), t.then(r, r));
			});
		}
	}
	function kc(e, t) {
		var n = t.deletions;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var a = n[r];
			try {
				var o = e, s = t, c = s;
				a: for (; c !== null;) {
					switch (c.tag) {
						case 5:
							wc = c.stateNode, Tc = !1;
							break a;
						case 3:
							wc = c.stateNode.containerInfo, Tc = !0;
							break a;
						case 4:
							wc = c.stateNode.containerInfo, Tc = !0;
							break a;
					}
					c = c.return;
				}
				if (wc === null) throw Error(i(160));
				Dc(o, s, a), wc = null, Tc = !1;
				var l = a.alternate;
				l !== null && (l.return = null), a.return = null;
			} catch (e) {
				Rl(a, t, e);
			}
		}
		if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Ac(t, e), t = t.sibling;
	}
	function Ac(e, t) {
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (kc(t, e), jc(e), r & 4) {
					try {
						gc(3, e, e.return), _c(3, e);
					} catch (t) {
						Rl(e, e.return, t);
					}
					try {
						gc(5, e, e.return);
					} catch (t) {
						Rl(e, e.return, t);
					}
				}
				break;
			case 1:
				kc(t, e), jc(e), r & 512 && n !== null && fc(n, n.return);
				break;
			case 5:
				if (kc(t, e), jc(e), r & 512 && n !== null && fc(n, n.return), e.flags & 32) {
					var a = e.stateNode;
					try {
						je(a, "");
					} catch (t) {
						Rl(e, e.return, t);
					}
				}
				if (r & 4 && (a = e.stateNode, a != null)) {
					var o = e.memoizedProps, s = n === null ? o : n.memoizedProps, c = e.type, l = e.updateQueue;
					if (e.updateQueue = null, l !== null) try {
						c === "input" && o.type === "radio" && o.name != null && ve(a, o), Re(c, s);
						var u = Re(c, o);
						for (s = 0; s < l.length; s += 2) {
							var d = l[s], f = l[s + 1];
							d === "style" ? Fe(a, f) : d === "dangerouslySetInnerHTML" ? Ae(a, f) : d === "children" ? je(a, f) : S(a, d, f, u);
						}
						switch (c) {
							case "input":
								ye(a, o);
								break;
							case "textarea":
								Ee(a, o);
								break;
							case "select":
								var p = a._wrapperState.wasMultiple;
								a._wrapperState.wasMultiple = !!o.multiple;
								var m = o.value;
								m == null ? p !== !!o.multiple && (o.defaultValue == null ? Ce(a, !!o.multiple, o.multiple ? [] : "", !1) : Ce(a, !!o.multiple, o.defaultValue, !0)) : Ce(a, !!o.multiple, m, !1);
						}
						a[ki] = o;
					} catch (t) {
						Rl(e, e.return, t);
					}
				}
				break;
			case 6:
				if (kc(t, e), jc(e), r & 4) {
					if (e.stateNode === null) throw Error(i(162));
					a = e.stateNode, o = e.memoizedProps;
					try {
						a.nodeValue = o;
					} catch (t) {
						Rl(e, e.return, t);
					}
				}
				break;
			case 3:
				if (kc(t, e), jc(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					fn(t.containerInfo);
				} catch (t) {
					Rl(e, e.return, t);
				}
				break;
			case 4:
				kc(t, e), jc(e);
				break;
			case 13:
				kc(t, e), jc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || ($c = gt())), r & 4 && Oc(e);
				break;
			case 22:
				if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (uc = (u = uc) || d, kc(t, e), uc = u) : kc(t, e), jc(e), r & 8192) {
					if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (Q = e, d = e.child; d !== null;) {
						for (f = Q = d; Q !== null;) {
							switch (p = Q, m = p.child, p.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									gc(4, p, p.return);
									break;
								case 1:
									fc(p, p.return);
									var h = p.stateNode;
									if (typeof h.componentWillUnmount == "function") {
										r = p, n = p.return;
										try {
											t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
										} catch (e) {
											Rl(r, n, e);
										}
									}
									break;
								case 5:
									fc(p, p.return);
									break;
								case 22: if (p.memoizedState !== null) {
									Fc(f);
									continue;
								}
							}
							m === null ? Fc(f) : (m.return = p, Q = m);
						}
						d = d.sibling;
					}
					a: for (d = null, f = e;;) {
						if (f.tag === 5) {
							if (d === null) {
								d = f;
								try {
									a = f.stateNode, u ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = Pe("display", s));
								} catch (t) {
									Rl(e, e.return, t);
								}
							}
						} else if (f.tag === 6) {
							if (d === null) try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (t) {
								Rl(e, e.return, t);
							}
						} else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
							f.child.return = f, f = f.child;
							continue;
						}
						if (f === e) break a;
						for (; f.sibling === null;) {
							if (f.return === null || f.return === e) break a;
							d === f && (d = null), f = f.return;
						}
						d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
					}
				}
				break;
			case 19:
				kc(t, e), jc(e), r & 4 && Oc(e);
				break;
			case 21: break;
			default: kc(t, e), jc(e);
		}
	}
	function jc(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				a: {
					for (var n = e.return; n !== null;) {
						if (bc(n)) {
							var r = n;
							break a;
						}
						n = n.return;
					}
					throw Error(i(160));
				}
				switch (r.tag) {
					case 5:
						var a = r.stateNode;
						r.flags & 32 && (je(a, ""), r.flags &= -33), Cc(e, xc(e), a);
						break;
					case 3:
					case 4:
						var o = r.stateNode.containerInfo;
						Sc(e, xc(e), o);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				Rl(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Mc(e, t, n) {
		Q = e, Nc(e, t, n);
	}
	function Nc(e, t, n) {
		for (var r = !!(e.mode & 1); Q !== null;) {
			var i = Q, a = i.child;
			if (i.tag === 22 && r) {
				var o = i.memoizedState !== null || lc;
				if (!o) {
					var s = i.alternate, c = s !== null && s.memoizedState !== null || uc;
					s = lc;
					var l = uc;
					if (lc = o, (uc = c) && !l) for (Q = i; Q !== null;) o = Q, c = o.child, o.tag === 22 && o.memoizedState !== null || c === null ? Ic(i) : (c.return = o, Q = c);
					for (; a !== null;) Q = a, Nc(a, t, n), a = a.sibling;
					Q = i, lc = s, uc = l;
				}
				Pc(e, t, n);
			} else i.subtreeFlags & 8772 && a !== null ? (a.return = i, Q = a) : Pc(e, t, n);
		}
	}
	function Pc(e) {
		for (; Q !== null;) {
			var t = Q;
			if (t.flags & 8772) {
				var n = t.alternate;
				try {
					if (t.flags & 8772) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							uc || _c(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !uc) {
								if (n === null) r.componentDidMount();
								else {
									var a = t.elementType === t.type ? n.memoizedProps : hs(t.type, n.memoizedProps);
									r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
								}
							}
							var o = t.updateQueue;
							o !== null && ro(t, o, r);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (n = null, t.child !== null) switch (t.child.tag) {
									case 5:
										n = t.child.stateNode;
										break;
									case 1: n = t.child.stateNode;
								}
								ro(t, s, n);
							}
							break;
						case 5:
							var c = t.stateNode;
							if (n === null && t.flags & 4) {
								n = c;
								var l = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										l.autoFocus && n.focus();
										break;
									case "img": l.src && (n.src = l.src);
								}
							}
							break;
						case 6: break;
						case 4: break;
						case 12: break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var d = u.memoizedState;
									if (d !== null) {
										var f = d.dehydrated;
										f !== null && fn(f);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25: break;
						default: throw Error(i(163));
					}
					uc || t.flags & 512 && vc(t);
				} catch (e) {
					Rl(t, t.return, e);
				}
			}
			if (t === e) {
				Q = null;
				break;
			}
			if (n = t.sibling, n !== null) {
				n.return = t.return, Q = n;
				break;
			}
			Q = t.return;
		}
	}
	function Fc(e) {
		for (; Q !== null;) {
			var t = Q;
			if (t === e) {
				Q = null;
				break;
			}
			var n = t.sibling;
			if (n !== null) {
				n.return = t.return, Q = n;
				break;
			}
			Q = t.return;
		}
	}
	function Ic(e) {
		for (; Q !== null;) {
			var t = Q;
			try {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						var n = t.return;
						try {
							_c(4, t);
						} catch (e) {
							Rl(t, n, e);
						}
						break;
					case 1:
						var r = t.stateNode;
						if (typeof r.componentDidMount == "function") {
							var i = t.return;
							try {
								r.componentDidMount();
							} catch (e) {
								Rl(t, i, e);
							}
						}
						var a = t.return;
						try {
							vc(t);
						} catch (e) {
							Rl(t, a, e);
						}
						break;
					case 5:
						var o = t.return;
						try {
							vc(t);
						} catch (e) {
							Rl(t, o, e);
						}
				}
			} catch (e) {
				Rl(t, t.return, e);
			}
			if (t === e) {
				Q = null;
				break;
			}
			var s = t.sibling;
			if (s !== null) {
				s.return = t.return, Q = s;
				break;
			}
			Q = t.return;
		}
	}
	var Lc = Math.ceil, Rc = C.ReactCurrentDispatcher, zc = C.ReactCurrentOwner, Bc = C.ReactCurrentBatchConfig, $ = 0, Vc = null, Hc = null, Uc = 0, Wc = 0, Gc = Bi(0), Kc = 0, qc = null, Jc = 0, Yc = 0, Xc = 0, Zc = null, Qc = null, $c = 0, el = Infinity, tl = null, nl = !1, rl = null, il = null, al = !1, ol = null, sl = 0, cl = 0, ll = null, ul = -1, dl = 0;
	function fl() {
		return $ & 6 ? gt() : ul === -1 ? ul = gt() : ul;
	}
	function pl(e) {
		return e.mode & 1 ? $ & 2 && Uc !== 0 ? Uc & -Uc : ka.transition === null ? (e = B, e === 0 && (e = window.event, e = e === void 0 ? 16 : bn(e.type)), e) : (dl === 0 && (dl = Lt()), dl) : 1;
	}
	function ml(e, t, n, r) {
		if (50 < cl) throw cl = 0, ll = null, Error(i(185));
		zt(e, n, r), $ & 2 && e === Vc || (e === Vc && (!($ & 2) && (Yc |= n), Kc === 4 && bl(e, Uc)), hl(e, r), n === 1 && $ === 0 && !(t.mode & 1) && (el = gt() + 500, ta && aa()));
	}
	function hl(e, t) {
		var n = e.callbackNode;
		Ft(e, t);
		var r = Nt(e, e === Vc ? Uc : 0);
		if (r === 0) n !== null && pt(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (n != null && pt(n), t === 1) e.tag === 0 ? ia(xl.bind(null, e)) : ra(xl.bind(null, e)), Ci(function() {
				!($ & 6) && aa();
			}), n = null;
			else {
				switch (Ht(r)) {
					case 1:
						n = vt;
						break;
					case 4:
						n = yt;
						break;
					case 16:
						n = bt;
						break;
					case 536870912:
						n = St;
						break;
					default: n = bt;
				}
				n = Wl(n, gl.bind(null, e));
			}
			e.callbackPriority = t, e.callbackNode = n;
		}
	}
	function gl(e, t) {
		if (ul = -1, dl = 0, $ & 6) throw Error(i(327));
		var n = e.callbackNode;
		if (Il() && e.callbackNode !== n) return null;
		var r = Nt(e, e === Vc ? Uc : 0);
		if (r === 0) return null;
		if (r & 30 || (r & e.expiredLanes) !== 0 || t) t = kl(e, r);
		else {
			t = r;
			var a = $;
			$ |= 2;
			var o = Dl();
			(Vc !== e || Uc !== t) && (tl = null, el = gt() + 500, Tl(e, t));
			do
				try {
					jl();
					break;
				} catch (t) {
					El(e, t);
				}
			while (1);
			Ba(), Rc.current = o, $ = a, Hc === null ? (Vc = null, Uc = 0, t = Kc) : t = 0;
		}
		if (t !== 0) {
			if (t === 2 && (a = It(e), a !== 0 && (r = a, t = _l(e, a))), t === 1) throw n = qc, Tl(e, 0), bl(e, r), hl(e, gt()), n;
			if (t === 6) bl(e, r);
			else {
				if (a = e.current.alternate, !(r & 30) && !yl(a) && (t = kl(e, r), t === 2 && (o = It(e), o !== 0 && (r = o, t = _l(e, o))), t === 1)) throw n = qc, Tl(e, 0), bl(e, r), hl(e, gt()), n;
				switch (e.finishedWork = a, e.finishedLanes = r, t) {
					case 0:
					case 1: throw Error(i(345));
					case 2:
						Pl(e, Qc, tl);
						break;
					case 3:
						if (bl(e, r), (r & 130023424) === r && (t = $c + 500 - gt(), 10 < t)) {
							if (Nt(e, 0) !== 0) break;
							if (a = e.suspendedLanes, (a & r) !== r) {
								fl(), e.pingedLanes |= e.suspendedLanes & a;
								break;
							}
							e.timeoutHandle = bi(Pl.bind(null, e, Qc, tl), t);
							break;
						}
						Pl(e, Qc, tl);
						break;
					case 4:
						if (bl(e, r), (r & 4194240) === r) break;
						for (t = e.eventTimes, a = -1; 0 < r;) {
							var s = 31 - Et(r);
							o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
						}
						if (r = a, r = gt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Lc(r / 1960)) - r, 10 < r) {
							e.timeoutHandle = bi(Pl.bind(null, e, Qc, tl), r);
							break;
						}
						Pl(e, Qc, tl);
						break;
					case 5:
						Pl(e, Qc, tl);
						break;
					default: throw Error(i(329));
				}
			}
		}
		return hl(e, gt()), e.callbackNode === n ? gl.bind(null, e) : null;
	}
	function _l(e, t) {
		var n = Zc;
		return e.current.memoizedState.isDehydrated && (Tl(e, t).flags |= 256), e = kl(e, t), e !== 2 && (t = Qc, Qc = n, t !== null && vl(t)), e;
	}
	function vl(e) {
		Qc === null ? Qc = e : Qc.push.apply(Qc, e);
	}
	function yl(e) {
		for (var t = e;;) {
			if (t.flags & 16384) {
				var n = t.updateQueue;
				if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
					var i = n[r], a = i.getSnapshot;
					i = i.value;
					try {
						if (!Er(a(), i)) return !1;
					} catch {
						return !1;
					}
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function bl(e, t) {
		for (t &= ~Xc, t &= ~Yc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
			var n = 31 - Et(t), r = 1 << n;
			e[n] = -1, t &= ~r;
		}
	}
	function xl(e) {
		if ($ & 6) throw Error(i(327));
		Il();
		var t = Nt(e, 0);
		if (!(t & 1)) return hl(e, gt()), null;
		var n = kl(e, t);
		if (e.tag !== 0 && n === 2) {
			var r = It(e);
			r !== 0 && (t = r, n = _l(e, r));
		}
		if (n === 1) throw n = qc, Tl(e, 0), bl(e, t), hl(e, gt()), n;
		if (n === 6) throw Error(i(345));
		return e.finishedWork = e.current.alternate, e.finishedLanes = t, Pl(e, Qc, tl), hl(e, gt()), null;
	}
	function Sl(e, t) {
		var n = $;
		$ |= 1;
		try {
			return e(t);
		} finally {
			$ = n, $ === 0 && (el = gt() + 500, ta && aa());
		}
	}
	function Cl(e) {
		ol !== null && ol.tag === 0 && !($ & 6) && Il();
		var t = $;
		$ |= 1;
		var n = Bc.transition, r = B;
		try {
			if (Bc.transition = null, B = 1, e) return e();
		} finally {
			B = r, Bc.transition = n, $ = t, !($ & 6) && aa();
		}
	}
	function wl() {
		Wc = Gc.current, Vi(Gc);
	}
	function Tl(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, xi(n)), Hc !== null) for (n = Hc.return; n !== null;) {
			var r = n;
			switch (ga(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && Yi();
					break;
				case 3:
					uo(), Vi(Gi), Vi(Wi), _o();
					break;
				case 5:
					po(r);
					break;
				case 4:
					uo();
					break;
				case 13:
					Vi(mo);
					break;
				case 19:
					Vi(mo);
					break;
				case 10:
					Va(r.type._context);
					break;
				case 22:
				case 23: wl();
			}
			n = n.return;
		}
		if (Vc = e, Hc = e = Yl(e.current, null), Uc = Wc = t, Kc = 0, qc = null, Xc = Yc = Jc = 0, Qc = Zc = null, Ga !== null) {
			for (t = 0; t < Ga.length; t++) if (n = Ga[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next, a = n.pending;
				if (a !== null) {
					var o = a.next;
					a.next = i, r.next = o;
				}
				n.pending = r;
			}
			Ga = null;
		}
		return e;
	}
	function El(e, t) {
		do {
			var n = Hc;
			try {
				if (Ba(), vo.current = ds, Co) {
					for (var r = bo.memoizedState; r !== null;) {
						var a = r.queue;
						a !== null && (a.pending = null), r = r.next;
					}
					Co = !1;
				}
				if (yo = 0, So = xo = bo = null, wo = !1, To = 0, zc.current = null, n === null || n.return === null) {
					Kc = 1, qc = t, Hc = null;
					break;
				}
				a: {
					var o = e, s = n.return, c = n, l = t;
					if (t = Uc, c.flags |= 32768, typeof l == "object" && l && typeof l.then == "function") {
						var u = l, d = c, f = d.tag;
						if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
							var p = d.alternate;
							p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
						}
						var m = ks(s);
						if (m !== null) {
							m.flags &= -257, As(m, s, c, o, t), m.mode & 1 && Os(o, u, t), t = m, l = u;
							var h = t.updateQueue;
							if (h === null) {
								var g = /* @__PURE__ */ new Set();
								g.add(l), t.updateQueue = g;
							} else h.add(l);
							break a;
						}
						if (!(t & 1)) {
							Os(o, u, t), Ol();
							break a;
						}
						l = Error(i(426));
					} else if (ya && c.mode & 1) {
						var _ = ks(s);
						if (_ !== null) {
							!(_.flags & 65536) && (_.flags |= 256), As(_, s, c, o, t), Oa(Ss(l, c));
							break a;
						}
					}
					o = l = Ss(l, c), Kc !== 4 && (Kc = 2), Zc === null ? Zc = [o] : Zc.push(o), o = s;
					do {
						switch (o.tag) {
							case 3:
								o.flags |= 65536, t &= -t, o.lanes |= t;
								var v = Es(o, l, t);
								to(o, v);
								break a;
							case 1:
								c = l;
								var y = o.type, b = o.stateNode;
								if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (il === null || !il.has(b)))) {
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var x = Ds(o, c, t);
									to(o, x);
									break a;
								}
						}
						o = o.return;
					} while (o !== null);
				}
				Nl(n);
			} catch (e) {
				t = e, Hc === n && n !== null && (Hc = n = n.return);
				continue;
			}
			break;
		} while (1);
	}
	function Dl() {
		var e = Rc.current;
		return Rc.current = ds, e === null ? ds : e;
	}
	function Ol() {
		(Kc === 0 || Kc === 3 || Kc === 2) && (Kc = 4), Vc === null || !(Jc & 268435455) && !(Yc & 268435455) || bl(Vc, Uc);
	}
	function kl(e, t) {
		var n = $;
		$ |= 2;
		var r = Dl();
		(Vc !== e || Uc !== t) && (tl = null, Tl(e, t));
		do
			try {
				Al();
				break;
			} catch (t) {
				El(e, t);
			}
		while (1);
		if (Ba(), $ = n, Rc.current = r, Hc !== null) throw Error(i(261));
		return Vc = null, Uc = 0, Kc;
	}
	function Al() {
		for (; Hc !== null;) Ml(Hc);
	}
	function jl() {
		for (; Hc !== null && !mt();) Ml(Hc);
	}
	function Ml(e) {
		var t = Ul(e.alternate, e, Wc);
		e.memoizedProps = e.pendingProps, t === null ? Nl(e) : Hc = t, zc.current = null;
	}
	function Nl(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (e = t.return, t.flags & 32768) {
				if (n = cc(n, t), n !== null) {
					n.flags &= 32767, Hc = n;
					return;
				}
				if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
				else {
					Kc = 6, Hc = null;
					return;
				}
			} else if (n = sc(n, t, Wc), n !== null) {
				Hc = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Hc = t;
				return;
			}
			Hc = t = e;
		} while (t !== null);
		Kc === 0 && (Kc = 5);
	}
	function Pl(e, t, n) {
		var r = B, i = Bc.transition;
		try {
			Bc.transition = null, B = 1, Fl(e, t, n, r);
		} finally {
			Bc.transition = i, B = r;
		}
		return null;
	}
	function Fl(e, t, n, r) {
		do
			Il();
		while (ol !== null);
		if ($ & 6) throw Error(i(327));
		n = e.finishedWork;
		var a = e.finishedLanes;
		if (n === null) return null;
		if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
		e.callbackNode = null, e.callbackPriority = 0;
		var o = n.lanes | n.childLanes;
		if (Bt(e, o), e === Vc && (Hc = Vc = null, Uc = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || al || (al = !0, Wl(bt, function() {
			return Il(), null;
		})), o = !!(n.flags & 15990), n.subtreeFlags & 15990 || o) {
			o = Bc.transition, Bc.transition = null;
			var s = B;
			B = 1;
			var c = $;
			$ |= 4, zc.current = null, hc(e, n), Ac(n, e), Mr(vi), mn = !!_i, vi = _i = null, e.current = n, Mc(n, e, a), ht(), $ = c, B = s, Bc.transition = o;
		} else e.current = n;
		if (al && (al = !1, ol = e, sl = a), o = e.pendingLanes, o === 0 && (il = null), Tt(n.stateNode, r), hl(e, gt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
			componentStack: a.stack,
			digest: a.digest
		});
		if (nl) throw nl = !1, e = rl, rl = null, e;
		return sl & 1 && e.tag !== 0 && Il(), o = e.pendingLanes, o & 1 ? e === ll ? cl++ : (cl = 0, ll = e) : cl = 0, aa(), null;
	}
	function Il() {
		if (ol !== null) {
			var e = Ht(sl), t = Bc.transition, n = B;
			try {
				if (Bc.transition = null, B = 16 > e ? 16 : e, ol === null) var r = !1;
				else {
					if (e = ol, ol = null, sl = 0, $ & 6) throw Error(i(331));
					var a = $;
					for ($ |= 4, Q = e.current; Q !== null;) {
						var o = Q, s = o.child;
						if (Q.flags & 16) {
							var c = o.deletions;
							if (c !== null) {
								for (var l = 0; l < c.length; l++) {
									var u = c[l];
									for (Q = u; Q !== null;) {
										var d = Q;
										switch (d.tag) {
											case 0:
											case 11:
											case 15: gc(8, d, o);
										}
										var f = d.child;
										if (f !== null) f.return = d, Q = f;
										else for (; Q !== null;) {
											d = Q;
											var p = d.sibling, m = d.return;
											if (yc(d), d === u) {
												Q = null;
												break;
											}
											if (p !== null) {
												p.return = m, Q = p;
												break;
											}
											Q = m;
										}
									}
								}
								var h = o.alternate;
								if (h !== null) {
									var g = h.child;
									if (g !== null) {
										h.child = null;
										do {
											var _ = g.sibling;
											g.sibling = null, g = _;
										} while (g !== null);
									}
								}
								Q = o;
							}
						}
						if (o.subtreeFlags & 2064 && s !== null) s.return = o, Q = s;
						else b: for (; Q !== null;) {
							if (o = Q, o.flags & 2048) switch (o.tag) {
								case 0:
								case 11:
								case 15: gc(9, o, o.return);
							}
							var v = o.sibling;
							if (v !== null) {
								v.return = o.return, Q = v;
								break b;
							}
							Q = o.return;
						}
					}
					var y = e.current;
					for (Q = y; Q !== null;) {
						s = Q;
						var b = s.child;
						if (s.subtreeFlags & 2064 && b !== null) b.return = s, Q = b;
						else b: for (s = y; Q !== null;) {
							if (c = Q, c.flags & 2048) try {
								switch (c.tag) {
									case 0:
									case 11:
									case 15: _c(9, c);
								}
							} catch (e) {
								Rl(c, c.return, e);
							}
							if (c === s) {
								Q = null;
								break b;
							}
							var x = c.sibling;
							if (x !== null) {
								x.return = c.return, Q = x;
								break b;
							}
							Q = c.return;
						}
					}
					if ($ = a, aa(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
						wt.onPostCommitFiberRoot(Ct, e);
					} catch {}
					r = !0;
				}
				return r;
			} finally {
				B = n, Bc.transition = t;
			}
		}
		return !1;
	}
	function Ll(e, t, n) {
		t = Ss(n, t), t = Es(e, t, 1), e = $a(e, t, 1), t = fl(), e !== null && (zt(e, 1, t), hl(e, t));
	}
	function Rl(e, t, n) {
		if (e.tag === 3) Ll(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Ll(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (il === null || !il.has(r))) {
					e = Ss(n, e), e = Ds(t, e, 1), t = $a(t, e, 1), e = fl(), t !== null && (zt(t, 1, e), hl(t, e));
					break;
				}
			}
			t = t.return;
		}
	}
	function zl(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), t = fl(), e.pingedLanes |= e.suspendedLanes & n, Vc === e && (Uc & n) === n && (Kc === 4 || Kc === 3 && (Uc & 130023424) === Uc && 500 > gt() - $c ? Tl(e, 0) : Xc |= n), hl(e, t);
	}
	function Bl(e, t) {
		t === 0 && (e.mode & 1 ? (t = jt, jt <<= 1, !(jt & 130023424) && (jt = 4194304)) : t = 1);
		var n = fl();
		e = Ja(e, t), e !== null && (zt(e, t, n), hl(e, n));
	}
	function Vl(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), Bl(e, n);
	}
	function Hl(e, t) {
		var n = 0;
		switch (e.tag) {
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), Bl(e, n);
	}
	var Ul = function(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps || Gi.current) Ms = !0;
			else {
				if ((e.lanes & n) === 0 && !(t.flags & 128)) return Ms = !1, tc(e, t, n);
				Ms = !!(e.flags & 131072);
			}
		} else Ms = !1, ya && t.flags & 1048576 && ma(t, ca, t.index);
		switch (t.lanes = 0, t.tag) {
			case 2:
				var r = t.type;
				$s(e, t), e = t.pendingProps;
				var a = qi(t, Wi.current);
				Ua(t, n), a = ko(null, t, r, e, a, n);
				var o = Ao();
				return t.flags |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ji(r) ? (o = !0, Qi(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Xa(t), a.updater = _s, t.stateNode = a, a._reactInternals = t, xs(t, r, e, n), t = Vs(null, t, r, !0, o, n)) : (t.tag = 0, ya && o && ha(t), Ns(null, t, a, n), t = t.child), t;
			case 16:
				r = t.elementType;
				a: {
					switch ($s(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Jl(r), e = hs(r, e), a) {
						case 0:
							t = zs(null, t, r, e, n);
							break a;
						case 1:
							t = Bs(null, t, r, e, n);
							break a;
						case 11:
							t = Ps(null, t, r, e, n);
							break a;
						case 14:
							t = Fs(null, t, r, hs(r.type, e), n);
							break a;
					}
					throw Error(i(306, r, ""));
				}
				return t;
			case 0: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : hs(r, a), zs(e, t, r, a, n);
			case 1: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : hs(r, a), Bs(e, t, r, a, n);
			case 3:
				a: {
					if (Hs(t), e === null) throw Error(i(387));
					r = t.pendingProps, o = t.memoizedState, a = o.element, Za(e, t), no(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							a = Ss(Error(i(423)), t), t = Us(e, t, r, n, a);
							break a;
						}
						if (r !== a) {
							a = Ss(Error(i(424)), t), t = Us(e, t, r, n, a);
							break a;
						}
						for (va = Ei(t.stateNode.containerInfo.firstChild), _a = t, ya = !0, ba = null, n = Fa(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					} else {
						if (Da(), r === a) {
							t = ec(e, t, n);
							break a;
						}
						Ns(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 5: return fo(t), e === null && Ca(t), r = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, yi(r, a) ? s = null : o !== null && yi(r, o) && (t.flags |= 32), Rs(e, t), Ns(e, t, s, n), t.child;
			case 6: return e === null && Ca(t), null;
			case 13: return Ks(e, t, n);
			case 4: return lo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pa(t, null, r, n) : Ns(e, t, r, n), t.child;
			case 11: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : hs(r, a), Ps(e, t, r, a, n);
			case 7: return Ns(e, t, t.pendingProps, n), t.child;
			case 8: return Ns(e, t, t.pendingProps.children, n), t.child;
			case 12: return Ns(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, Hi(Ia, r._currentValue), r._currentValue = s, o !== null) {
						if (Er(o.value, s)) {
							if (o.children === a.children && !Gi.current) {
								t = ec(e, t, n);
								break a;
							}
						} else for (o = t.child, o !== null && (o.return = t); o !== null;) {
							var c = o.dependencies;
							if (c !== null) {
								s = o.child;
								for (var l = c.firstContext; l !== null;) {
									if (l.context === r) {
										if (o.tag === 1) {
											l = Qa(-1, n & -n), l.tag = 2;
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var d = u.pending;
												d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l;
											}
										}
										o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Ha(o.return, n, t), c.lanes |= n;
										break;
									}
									l = l.next;
								}
							} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (s = o.return, s === null) throw Error(i(341));
								s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Ha(s, n, t), s = o.sibling;
							} else s = o.child;
							if (s !== null) s.return = o;
							else for (s = o; s !== null;) {
								if (s === t) {
									s = null;
									break;
								}
								if (o = s.sibling, o !== null) {
									o.return = s.return, s = o;
									break;
								}
								s = s.return;
							}
							o = s;
						}
					}
					Ns(e, t, a.children, n), t = t.child;
				}
				return t;
			case 9: return a = t.type, r = t.pendingProps.children, Ua(t, n), a = Wa(a), r = r(a), t.flags |= 1, Ns(e, t, r, n), t.child;
			case 14: return r = t.type, a = hs(r, t.pendingProps), a = hs(r.type, a), Fs(e, t, r, a, n);
			case 15: return Is(e, t, t.type, t.pendingProps, n);
			case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : hs(r, a), $s(e, t), t.tag = 1, Ji(r) ? (e = !0, Qi(t)) : e = !1, Ua(t, n), ys(t, r, a), xs(t, r, a, n), Vs(null, t, r, !0, e, n);
			case 19: return Qs(e, t, n);
			case 22: return Ls(e, t, n);
		}
		throw Error(i(156, t.tag));
	};
	function Wl(e, t) {
		return ft(e, t);
	}
	function Gl(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Kl(e, t, n, r) {
		return new Gl(e, t, n, r);
	}
	function ql(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Jl(e) {
		if (typeof e == "function") return +!!ql(e);
		if (e != null) {
			if (e = e.$$typeof, e === k) return 11;
			if (e === re) return 14;
		}
		return 2;
	}
	function Yl(e, t) {
		var n = e.alternate;
		return n === null ? (n = Kl(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
	}
	function Xl(e, t, n, r, a, o) {
		var s = 2;
		if (r = e, typeof e == "function") ql(e) && (s = 1);
		else if (typeof e == "string") s = 5;
		else a: switch (e) {
			case E: return Zl(n.children, a, o, t);
			case D:
				s = 8, a |= 8;
				break;
			case ee: return e = Kl(12, n, t, a | 2), e.elementType = ee, e.lanes = o, e;
			case A: return e = Kl(13, n, t, a), e.elementType = A, e.lanes = o, e;
			case ne: return e = Kl(19, n, t, a), e.elementType = ne, e.lanes = o, e;
			case ie: return Ql(n, a, o, t);
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case O:
						s = 10;
						break a;
					case te:
						s = 9;
						break a;
					case k:
						s = 11;
						break a;
					case re:
						s = 14;
						break a;
					case j:
						s = 16, r = null;
						break a;
				}
				throw Error(i(130, e == null ? e : typeof e, ""));
		}
		return t = Kl(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Zl(e, t, n, r) {
		return e = Kl(7, e, r, t), e.lanes = n, e;
	}
	function Ql(e, t, n, r) {
		return e = Kl(22, e, r, t), e.elementType = ie, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
	}
	function $l(e, t, n) {
		return e = Kl(6, e, null, t), e.lanes = n, e;
	}
	function eu(e, t, n) {
		return t = Kl(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	function tu(e, t, n, r, i) {
		this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Rt(0), this.expirationTimes = Rt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Rt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
	}
	function nu(e, t, n, r, i, a, o, s, c) {
		return e = new tu(e, t, n, s, c), t === 1 ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Kl(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}, Xa(a), e;
	}
	function ru(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: T,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	function iu(e) {
		if (!e) return Ui;
		e = e._reactInternals;
		a: {
			if (ot(e) !== e || e.tag !== 1) throw Error(i(170));
			var t = e;
			do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break a;
					case 1: if (Ji(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break a;
					}
				}
				t = t.return;
			} while (t !== null);
			throw Error(i(171));
		}
		if (e.tag === 1) {
			var n = e.type;
			if (Ji(n)) return Zi(e, n, t);
		}
		return t;
	}
	function au(e, t, n, r, i, a, o, s, c) {
		return e = nu(n, r, !0, e, i, a, o, s, c), e.context = iu(null), n = e.current, r = fl(), i = pl(n), a = Qa(r, i), a.callback = t ?? null, $a(n, a, i), e.current.lanes = i, zt(e, i, r), hl(e, r), e;
	}
	function ou(e, t, n, r) {
		var i = t.current, a = fl(), o = pl(i);
		return n = iu(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qa(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $a(i, t, o), e !== null && (ml(e, i, o, a), eo(e, i, o)), o;
	}
	function su(e) {
		if (e = e.current, !e.child) return null;
		switch (e.child.tag) {
			case 5: return e.child.stateNode;
			default: return e.child.stateNode;
		}
	}
	function cu(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function lu(e, t) {
		cu(e, t), (e = e.alternate) && cu(e, t);
	}
	function uu() {
		return null;
	}
	var du = typeof reportError == "function" ? reportError : function(e) {
		console.error(e);
	};
	function fu(e) {
		this._internalRoot = e;
	}
	pu.prototype.render = fu.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		ou(e, t, null, null);
	}, pu.prototype.unmount = fu.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			Cl(function() {
				ou(null, e, null, null);
			}), t[Ai] = null;
		}
	};
	function pu(e) {
		this._internalRoot = e;
	}
	pu.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Kt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
			tn.splice(n, 0, e), n === 0 && sn(e);
		}
	};
	function mu(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function hu(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
	}
	function gu() {}
	function _u(e, t, n, r, i) {
		if (i) {
			if (typeof r == "function") {
				var a = r;
				r = function() {
					var e = su(o);
					a.call(e);
				};
			}
			var o = au(t, r, e, 0, null, !1, !1, "", gu);
			return e._reactRootContainer = o, e[Ai] = o.current, oi(e.nodeType === 8 ? e.parentNode : e), Cl(), o;
		}
		for (; i = e.lastChild;) e.removeChild(i);
		if (typeof r == "function") {
			var s = r;
			r = function() {
				var e = su(c);
				s.call(e);
			};
		}
		var c = nu(e, 0, !1, null, null, !1, !1, "", gu);
		return e._reactRootContainer = c, e[Ai] = c.current, oi(e.nodeType === 8 ? e.parentNode : e), Cl(function() {
			ou(t, c, n, r);
		}), c;
	}
	function vu(e, t, n, r, i) {
		var a = n._reactRootContainer;
		if (a) {
			var o = a;
			if (typeof i == "function") {
				var s = i;
				i = function() {
					var e = su(o);
					s.call(e);
				};
			}
			ou(t, o, e, i);
		} else o = _u(n, t, e, i, r);
		return su(o);
	}
	Ut = function(e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = Mt(t.pendingLanes);
					n !== 0 && (Vt(t, n | 1), hl(t, gt()), !($ & 6) && (el = gt() + 500, aa()));
				}
				break;
			case 13: Cl(function() {
				var t = Ja(e, 1);
				t !== null && ml(t, e, 1, fl());
			}), lu(e, 1);
		}
	}, Wt = function(e) {
		if (e.tag === 13) {
			var t = Ja(e, 134217728);
			t !== null && ml(t, e, 134217728, fl()), lu(e, 134217728);
		}
	}, Gt = function(e) {
		if (e.tag === 13) {
			var t = pl(e), n = Ja(e, t);
			n !== null && ml(n, e, t, fl()), lu(e, t);
		}
	}, Kt = function() {
		return B;
	}, qt = function(e, t) {
		var n = B;
		try {
			return B = e, t();
		} finally {
			B = n;
		}
	}, Ve = function(e, t, n) {
		switch (t) {
			case "input":
				if (ye(e, n), t = n.name, n.type === "radio" && t != null) {
					for (n = e; n.parentNode;) n = n.parentNode;
					for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]"), t = 0; t < n.length; t++) {
						var r = n[t];
						if (r !== e && r.form === e.form) {
							var a = Li(r);
							if (!a) throw Error(i(90));
							me(r), ye(r, a);
						}
					}
				}
				break;
			case "textarea":
				Ee(e, n);
				break;
			case "select": t = n.value, t != null && Ce(e, !!n.multiple, t, !1);
		}
	}, Ge = Sl, Ke = Cl;
	var yu = {
		usingClientEntryPoint: !1,
		Events: [
			Fi,
			Ii,
			Li,
			We,
			z,
			Sl
		]
	}, bu = {
		findFiberByHostInstance: Pi,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	}, xu = {
		bundleType: bu.bundleType,
		version: bu.version,
		rendererPackageName: bu.rendererPackageName,
		rendererConfig: bu.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: C.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = ut(e), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: bu.findFiberByHostInstance || uu,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Su.isDisabled && Su.supportsFiber) try {
			Ct = Su.inject(xu), wt = Su;
		} catch {}
	}
	e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yu, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!mu(t)) throw Error(i(200));
		return ru(e, t, null, n);
	}, e.createRoot = function(e, t) {
		if (!mu(e)) throw Error(i(299));
		var n = !1, r = "", a = du;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = nu(e, 1, !1, null, null, n, !1, r, a), e[Ai] = t.current, oi(e.nodeType === 8 ? e.parentNode : e), new fu(t);
	}, e.findDOMNode = function(e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = ut(t), e = e === null ? null : e.stateNode, e;
	}, e.flushSync = function(e) {
		return Cl(e);
	}, e.hydrate = function(e, t, n) {
		if (!hu(t)) throw Error(i(200));
		return vu(null, e, t, !0, n);
	}, e.hydrateRoot = function(e, t, n) {
		if (!mu(e)) throw Error(i(405));
		var r = n != null && n.hydratedSources || null, a = !1, o = "", s = du;
		if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = au(t, null, e, 1, n ?? null, a, !1, o, s), e[Ai] = t.current, oi(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
		return new pu(t);
	}, e.render = function(e, t, n) {
		if (!hu(t)) throw Error(i(200));
		return vu(null, e, t, !1, n);
	}, e.unmountComponentAtNode = function(e) {
		if (!hu(e)) throw Error(i(40));
		return e._reactRootContainer ? (Cl(function() {
			vu(null, null, e, !1, function() {
				e._reactRootContainer = null, e[Ai] = null;
			});
		}), !0) : !1;
	}, e.unstable_batchedUpdates = Sl, e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
		if (!hu(n)) throw Error(i(200));
		if (e == null || e._reactInternals === void 0) throw Error(i(38));
		return vu(e, t, n, !1, r);
	}, e.version = "18.3.1-next-f1338f8080-20240426";
})), s = /* @__PURE__ */ t(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = o();
})), c = /* @__PURE__ */ t(((e) => {
	var t = s();
	e.createRoot = t.createRoot, e.hydrateRoot = t.hydrateRoot;
})), l = /* @__PURE__ */ e(r(), 1), u = c();
function d(e, t) {
	var n = Object.setPrototypeOf;
	n ? n(e, t) : e.__proto__ = t;
}
function f(e, t) {
	t === void 0 && (t = e.constructor);
	var n = Error.captureStackTrace;
	n && n(e, t);
}
var p = function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
}(), m = function(e) {
	p(t, e);
	function t(t, n) {
		var r = this.constructor, i = e.call(this, t, n) || this;
		return Object.defineProperty(i, "name", {
			value: r.name,
			enumerable: !1,
			configurable: !0
		}), d(i, r.prototype), f(i), i;
	}
	return t;
}(Error), h = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), g = function(e) {
	h(t, e);
	function t(t) {
		t === void 0 && (t = void 0);
		var n = e.call(this, t) || this;
		return n.message = t, n;
	}
	return t.prototype.getKind = function() {
		return this.constructor.kind;
	}, t.kind = "Exception", t;
}(m), _ = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), v = function(e) {
	_(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.kind = "ArgumentException", t;
}(g), y = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), b = function(e) {
	y(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.kind = "IllegalArgumentException", t;
}(g), x = function() {
	function e(e) {
		if (this.binarizer = e, e === null) throw new b("Binarizer must be non-null.");
	}
	return e.prototype.getWidth = function() {
		return this.binarizer.getWidth();
	}, e.prototype.getHeight = function() {
		return this.binarizer.getHeight();
	}, e.prototype.getBlackRow = function(e, t) {
		return this.binarizer.getBlackRow(e, t);
	}, e.prototype.getBlackMatrix = function() {
		return (this.matrix === null || this.matrix === void 0) && (this.matrix = this.binarizer.getBlackMatrix()), this.matrix;
	}, e.prototype.isCropSupported = function() {
		return this.binarizer.getLuminanceSource().isCropSupported();
	}, e.prototype.crop = function(t, n, r, i) {
		var a = this.binarizer.getLuminanceSource().crop(t, n, r, i);
		return new e(this.binarizer.createBinarizer(a));
	}, e.prototype.isRotateSupported = function() {
		return this.binarizer.getLuminanceSource().isRotateSupported();
	}, e.prototype.rotateCounterClockwise = function() {
		var t = this.binarizer.getLuminanceSource().rotateCounterClockwise();
		return new e(this.binarizer.createBinarizer(t));
	}, e.prototype.rotateCounterClockwise45 = function() {
		var t = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
		return new e(this.binarizer.createBinarizer(t));
	}, e.prototype.toString = function() {
		try {
			return this.getBlackMatrix().toString();
		} catch {
			return "";
		}
	}, e;
}(), S = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), C = function(e) {
	S(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.getChecksumInstance = function() {
		return new t();
	}, t.kind = "ChecksumException", t;
}(g), w = function() {
	function e(e) {
		this.source = e;
	}
	return e.prototype.getLuminanceSource = function() {
		return this.source;
	}, e.prototype.getWidth = function() {
		return this.source.getWidth();
	}, e.prototype.getHeight = function() {
		return this.source.getHeight();
	}, e;
}(), T = function() {
	function e() {}
	return e.arraycopy = function(e, t, n, r, i) {
		for (; i--;) n[r++] = e[t++];
	}, e.currentTimeMillis = function() {
		return Date.now();
	}, e;
}(), E = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), D = function(e) {
	E(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.kind = "IndexOutOfBoundsException", t;
}(g), ee = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), O = function(e) {
	ee(t, e);
	function t(t, n) {
		t === void 0 && (t = void 0), n === void 0 && (n = void 0);
		var r = e.call(this, n) || this;
		return r.index = t, r.message = n, r;
	}
	return t.kind = "ArrayIndexOutOfBoundsException", t;
}(D), te = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, k = function() {
	function e() {}
	return e.fill = function(e, t) {
		for (var n = 0, r = e.length; n < r; n++) e[n] = t;
	}, e.fillWithin = function(t, n, r, i) {
		e.rangeCheck(t.length, n, r);
		for (var a = n; a < r; a++) t[a] = i;
	}, e.rangeCheck = function(e, t, n) {
		if (t > n) throw new b("fromIndex(" + t + ") > toIndex(" + n + ")");
		if (t < 0) throw new O(t);
		if (n > e) throw new O(n);
	}, e.asList = function() {
		return [...arguments];
	}, e.create = function(e, t, n) {
		return Array.from({ length: e }).map(function(e) {
			return Array.from({ length: t }).fill(n);
		});
	}, e.createInt32Array = function(e, t, n) {
		return Array.from({ length: e }).map(function(e) {
			return Int32Array.from({ length: t }).fill(n);
		});
	}, e.equals = function(e, t) {
		if (!e || !t || !e.length || !t.length || e.length !== t.length) return !1;
		for (var n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
		return !0;
	}, e.hashCode = function(e) {
		var t, n;
		if (e === null) return 0;
		var r = 1;
		try {
			for (var i = te(e), a = i.next(); !a.done; a = i.next()) {
				var o = a.value;
				r = 31 * r + o;
			}
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				a && !a.done && (n = i.return) && n.call(i);
			} finally {
				if (t) throw t.error;
			}
		}
		return r;
	}, e.fillUint8Array = function(e, t) {
		for (var n = 0; n !== e.length; n++) e[n] = t;
	}, e.copyOf = function(e, t) {
		return e.slice(0, t);
	}, e.copyOfUint8Array = function(e, t) {
		if (e.length <= t) {
			var n = new Uint8Array(t);
			return n.set(e), n;
		}
		return e.slice(0, t);
	}, e.copyOfRange = function(e, t, n) {
		var r = n - t, i = new Int32Array(r);
		return T.arraycopy(e, t, i, 0, r), i;
	}, e.binarySearch = function(t, n, r) {
		r === void 0 && (r = e.numberComparator);
		for (var i = 0, a = t.length - 1; i <= a;) {
			var o = a + i >> 1, s = r(n, t[o]);
			if (s > 0) i = o + 1;
			else if (s < 0) a = o - 1;
			else return o;
		}
		return -i - 1;
	}, e.numberComparator = function(e, t) {
		return e - t;
	}, e;
}(), A = function() {
	function e() {}
	return e.numberOfTrailingZeros = function(e) {
		var t;
		if (e === 0) return 32;
		var n = 31;
		return t = e << 16, t !== 0 && (n -= 16, e = t), t = e << 8, t !== 0 && (n -= 8, e = t), t = e << 4, t !== 0 && (n -= 4, e = t), t = e << 2, t !== 0 && (n -= 2, e = t), n - (e << 1 >>> 31);
	}, e.numberOfLeadingZeros = function(e) {
		if (e === 0) return 32;
		var t = 1;
		return e >>> 16 || (t += 16, e <<= 16), e >>> 24 || (t += 8, e <<= 8), e >>> 28 || (t += 4, e <<= 4), e >>> 30 || (t += 2, e <<= 2), t -= e >>> 31, t;
	}, e.toHexString = function(e) {
		return e.toString(16);
	}, e.toBinaryString = function(e) {
		return String(parseInt(String(e), 2));
	}, e.bitCount = function(e) {
		return e -= e >>> 1 & 1431655765, e = (e & 858993459) + (e >>> 2 & 858993459), e = e + (e >>> 4) & 252645135, e += e >>> 8, e += e >>> 16, e & 63;
	}, e.truncDivision = function(e, t) {
		return Math.trunc(e / t);
	}, e.parseInt = function(e, t) {
		return t === void 0 && (t = void 0), parseInt(e, t);
	}, e.MIN_VALUE_32_BITS = -2147483648, e.MAX_VALUE = 2 ** 53 - 1, e;
}(), ne = function() {
	function e(t, n) {
		t === void 0 ? (this.size = 0, this.bits = /* @__PURE__ */ new Int32Array(1)) : (this.size = t, this.bits = n ?? e.makeArray(t));
	}
	return e.prototype.getSize = function() {
		return this.size;
	}, e.prototype.getSizeInBytes = function() {
		return Math.floor((this.size + 7) / 8);
	}, e.prototype.ensureCapacity = function(t) {
		if (t > this.bits.length * 32) {
			var n = e.makeArray(t);
			T.arraycopy(this.bits, 0, n, 0, this.bits.length), this.bits = n;
		}
	}, e.prototype.get = function(e) {
		return !!(this.bits[Math.floor(e / 32)] & 1 << (e & 31));
	}, e.prototype.set = function(e) {
		this.bits[Math.floor(e / 32)] |= 1 << (e & 31);
	}, e.prototype.flip = function(e) {
		this.bits[Math.floor(e / 32)] ^= 1 << (e & 31);
	}, e.prototype.getNextSet = function(e) {
		var t = this.size;
		if (e >= t) return t;
		var n = this.bits, r = Math.floor(e / 32), i = n[r];
		i &= ~((1 << (e & 31)) - 1);
		for (var a = n.length; i === 0;) {
			if (++r === a) return t;
			i = n[r];
		}
		var o = r * 32 + A.numberOfTrailingZeros(i);
		return o > t ? t : o;
	}, e.prototype.getNextUnset = function(e) {
		var t = this.size;
		if (e >= t) return t;
		var n = this.bits, r = Math.floor(e / 32), i = ~n[r];
		i &= ~((1 << (e & 31)) - 1);
		for (var a = n.length; i === 0;) {
			if (++r === a) return t;
			i = ~n[r];
		}
		var o = r * 32 + A.numberOfTrailingZeros(i);
		return o > t ? t : o;
	}, e.prototype.setBulk = function(e, t) {
		this.bits[Math.floor(e / 32)] = t;
	}, e.prototype.setRange = function(e, t) {
		if (t < e || e < 0 || t > this.size) throw new b();
		if (t !== e) {
			t--;
			for (var n = Math.floor(e / 32), r = Math.floor(t / 32), i = this.bits, a = n; a <= r; a++) {
				var o = a > n ? 0 : e & 31, s = (2 << (a < r ? 31 : t & 31)) - (1 << o);
				i[a] |= s;
			}
		}
	}, e.prototype.clear = function() {
		for (var e = this.bits.length, t = this.bits, n = 0; n < e; n++) t[n] = 0;
	}, e.prototype.isRange = function(e, t, n) {
		if (t < e || e < 0 || t > this.size) throw new b();
		if (t === e) return !0;
		t--;
		for (var r = Math.floor(e / 32), i = Math.floor(t / 32), a = this.bits, o = r; o <= i; o++) {
			var s = o > r ? 0 : e & 31, c = (2 << (o < i ? 31 : t & 31)) - (1 << s) | 0;
			if ((a[o] & c) !== (n ? c : 0)) return !1;
		}
		return !0;
	}, e.prototype.appendBit = function(e) {
		this.ensureCapacity(this.size + 1), e && (this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 31)), this.size++;
	}, e.prototype.appendBits = function(e, t) {
		if (t < 0 || t > 32) throw new b("Num bits must be between 0 and 32");
		this.ensureCapacity(this.size + t);
		for (var n = t; n > 0; n--) this.appendBit((e >> n - 1 & 1) == 1);
	}, e.prototype.appendBitArray = function(e) {
		var t = e.size;
		this.ensureCapacity(this.size + t);
		for (var n = 0; n < t; n++) this.appendBit(e.get(n));
	}, e.prototype.xor = function(e) {
		if (this.size !== e.size) throw new b("Sizes don't match");
		for (var t = this.bits, n = 0, r = t.length; n < r; n++) t[n] ^= e.bits[n];
	}, e.prototype.toBytes = function(e, t, n, r) {
		for (var i = 0; i < r; i++) {
			for (var a = 0, o = 0; o < 8; o++) this.get(e) && (a |= 1 << 7 - o), e++;
			t[n + i] = a;
		}
	}, e.prototype.getBitArray = function() {
		return this.bits;
	}, e.prototype.reverse = function() {
		for (var e = new Int32Array(this.bits.length), t = Math.floor((this.size - 1) / 32), n = t + 1, r = this.bits, i = 0; i < n; i++) {
			var a = r[i];
			a = a >> 1 & 1431655765 | (a & 1431655765) << 1, a = a >> 2 & 858993459 | (a & 858993459) << 2, a = a >> 4 & 252645135 | (a & 252645135) << 4, a = a >> 8 & 16711935 | (a & 16711935) << 8, a = a >> 16 & 65535 | (a & 65535) << 16, e[t - i] = a;
		}
		if (this.size !== n * 32) {
			for (var o = n * 32 - this.size, s = e[0] >>> o, i = 1; i < n; i++) {
				var c = e[i];
				s |= c << 32 - o, e[i - 1] = s, s = c >>> o;
			}
			e[n - 1] = s;
		}
		this.bits = e;
	}, e.makeArray = function(e) {
		return new Int32Array(Math.floor((e + 31) / 32));
	}, e.prototype.equals = function(t) {
		if (!(t instanceof e)) return !1;
		var n = t;
		return this.size === n.size && k.equals(this.bits, n.bits);
	}, e.prototype.hashCode = function() {
		return 31 * this.size + k.hashCode(this.bits);
	}, e.prototype.toString = function() {
		for (var e = "", t = 0, n = this.size; t < n; t++) t & 7 || (e += " "), e += this.get(t) ? "X" : ".";
		return e;
	}, e.prototype.clone = function() {
		return new e(this.size, this.bits.slice());
	}, e.prototype.toArray = function() {
		for (var e = [], t = 0, n = this.size; t < n; t++) e.push(this.get(t));
		return e;
	}, e;
}(), re;
(function(e) {
	e[e.OTHER = 0] = "OTHER", e[e.PURE_BARCODE = 1] = "PURE_BARCODE", e[e.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", e[e.TRY_HARDER = 3] = "TRY_HARDER", e[e.CHARACTER_SET = 4] = "CHARACTER_SET", e[e.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", e[e.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", e[e.ENABLE_CODE_39_EXTENDED_MODE = 7] = "ENABLE_CODE_39_EXTENDED_MODE", e[e.ASSUME_GS1 = 8] = "ASSUME_GS1", e[e.RETURN_CODABAR_START_END = 9] = "RETURN_CODABAR_START_END", e[e.NEED_RESULT_POINT_CALLBACK = 10] = "NEED_RESULT_POINT_CALLBACK", e[e.ALLOWED_EAN_EXTENSIONS = 11] = "ALLOWED_EAN_EXTENSIONS";
})(re ||= {});
var j = re, ie = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), M = function(e) {
	ie(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.getFormatInstance = function() {
		return new t();
	}, t.kind = "FormatException", t;
}(g), ae = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, N;
(function(e) {
	e[e.Cp437 = 0] = "Cp437", e[e.ISO8859_1 = 1] = "ISO8859_1", e[e.ISO8859_2 = 2] = "ISO8859_2", e[e.ISO8859_3 = 3] = "ISO8859_3", e[e.ISO8859_4 = 4] = "ISO8859_4", e[e.ISO8859_5 = 5] = "ISO8859_5", e[e.ISO8859_6 = 6] = "ISO8859_6", e[e.ISO8859_7 = 7] = "ISO8859_7", e[e.ISO8859_8 = 8] = "ISO8859_8", e[e.ISO8859_9 = 9] = "ISO8859_9", e[e.ISO8859_10 = 10] = "ISO8859_10", e[e.ISO8859_11 = 11] = "ISO8859_11", e[e.ISO8859_13 = 12] = "ISO8859_13", e[e.ISO8859_14 = 13] = "ISO8859_14", e[e.ISO8859_15 = 14] = "ISO8859_15", e[e.ISO8859_16 = 15] = "ISO8859_16", e[e.SJIS = 16] = "SJIS", e[e.Cp1250 = 17] = "Cp1250", e[e.Cp1251 = 18] = "Cp1251", e[e.Cp1252 = 19] = "Cp1252", e[e.Cp1256 = 20] = "Cp1256", e[e.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", e[e.UTF8 = 22] = "UTF8", e[e.ASCII = 23] = "ASCII", e[e.Big5 = 24] = "Big5", e[e.GB18030 = 25] = "GB18030", e[e.EUC_KR = 26] = "EUC_KR";
})(N ||= {});
var oe = function() {
	function e(t, n, r) {
		var i, a, o = [...arguments].slice(3);
		this.valueIdentifier = t, this.name = r, this.values = typeof n == "number" ? Int32Array.from([n]) : n, this.otherEncodingNames = o, e.VALUE_IDENTIFIER_TO_ECI.set(t, this), e.NAME_TO_ECI.set(r, this);
		for (var s = this.values, c = 0, l = s.length; c !== l; c++) {
			var u = s[c];
			e.VALUES_TO_ECI.set(u, this);
		}
		try {
			for (var d = ae(o), f = d.next(); !f.done; f = d.next()) {
				var p = f.value;
				e.NAME_TO_ECI.set(p, this);
			}
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				f && !f.done && (a = d.return) && a.call(d);
			} finally {
				if (i) throw i.error;
			}
		}
	}
	return e.prototype.getValueIdentifier = function() {
		return this.valueIdentifier;
	}, e.prototype.getName = function() {
		return this.name;
	}, e.prototype.getValue = function() {
		return this.values[0];
	}, e.getCharacterSetECIByValue = function(t) {
		if (t < 0 || t >= 900) throw new M("incorect value");
		var n = e.VALUES_TO_ECI.get(t);
		if (n === void 0) throw new M("incorect value");
		return n;
	}, e.getCharacterSetECIByName = function(t) {
		var n = e.NAME_TO_ECI.get(t);
		if (n === void 0) throw new M("incorect value");
		return n;
	}, e.prototype.equals = function(t) {
		if (!(t instanceof e)) return !1;
		var n = t;
		return this.getName() === n.getName();
	}, e.VALUE_IDENTIFIER_TO_ECI = /* @__PURE__ */ new Map(), e.VALUES_TO_ECI = /* @__PURE__ */ new Map(), e.NAME_TO_ECI = /* @__PURE__ */ new Map(), e.Cp437 = new e(N.Cp437, Int32Array.from([0, 2]), "Cp437"), e.ISO8859_1 = new e(N.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), e.ISO8859_2 = new e(N.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), e.ISO8859_3 = new e(N.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), e.ISO8859_4 = new e(N.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), e.ISO8859_5 = new e(N.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), e.ISO8859_6 = new e(N.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), e.ISO8859_7 = new e(N.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), e.ISO8859_8 = new e(N.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), e.ISO8859_9 = new e(N.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), e.ISO8859_10 = new e(N.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), e.ISO8859_11 = new e(N.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), e.ISO8859_13 = new e(N.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), e.ISO8859_14 = new e(N.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), e.ISO8859_15 = new e(N.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), e.ISO8859_16 = new e(N.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), e.SJIS = new e(N.SJIS, 20, "SJIS", "Shift_JIS"), e.Cp1250 = new e(N.Cp1250, 21, "Cp1250", "windows-1250"), e.Cp1251 = new e(N.Cp1251, 22, "Cp1251", "windows-1251"), e.Cp1252 = new e(N.Cp1252, 23, "Cp1252", "windows-1252"), e.Cp1256 = new e(N.Cp1256, 24, "Cp1256", "windows-1256"), e.UnicodeBigUnmarked = new e(N.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), e.UTF8 = new e(N.UTF8, 26, "UTF8", "UTF-8"), e.ASCII = new e(N.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), e.Big5 = new e(N.Big5, 28, "Big5"), e.GB18030 = new e(N.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), e.EUC_KR = new e(N.EUC_KR, 30, "EUC_KR", "EUC-KR"), e;
}(), se = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), ce = function(e) {
	se(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.kind = "UnsupportedOperationException", t;
}(g), le = function() {
	function e() {}
	return e.decode = function(e, t) {
		var n = this.encodingName(t);
		return this.customDecoder ? this.customDecoder(e, n) : typeof TextDecoder > "u" || this.shouldDecodeOnFallback(n) ? this.decodeFallback(e, n) : new TextDecoder(n).decode(e);
	}, e.shouldDecodeOnFallback = function(t) {
		return !e.isBrowser() && t === "ISO-8859-1";
	}, e.encode = function(e, t) {
		var n = this.encodingName(t);
		return this.customEncoder ? this.customEncoder(e, n) : typeof TextEncoder > "u" ? this.encodeFallback(e) : new TextEncoder().encode(e);
	}, e.isBrowser = function() {
		return typeof window < "u" && {}.toString.call(window) === "[object Window]";
	}, e.encodingName = function(e) {
		return typeof e == "string" ? e : e.getName();
	}, e.encodingCharacterSet = function(e) {
		return e instanceof oe ? e : oe.getCharacterSetECIByName(e);
	}, e.decodeFallback = function(t, n) {
		var r = this.encodingCharacterSet(n);
		if (e.isDecodeFallbackSupported(r)) {
			for (var i = "", a = 0, o = t.length; a < o; a++) {
				var s = t[a].toString(16);
				s.length < 2 && (s = "0" + s), i += "%" + s;
			}
			return decodeURIComponent(i);
		}
		if (r.equals(oe.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(t.buffer));
		throw new ce("Encoding " + this.encodingName(n) + " not supported by fallback.");
	}, e.isDecodeFallbackSupported = function(e) {
		return e.equals(oe.UTF8) || e.equals(oe.ISO8859_1) || e.equals(oe.ASCII);
	}, e.encodeFallback = function(e) {
		for (var t = btoa(unescape(encodeURIComponent(e))).split(""), n = [], r = 0; r < t.length; r++) n.push(t[r].charCodeAt(0));
		return new Uint8Array(n);
	}, e;
}(), P = function() {
	function e() {}
	return e.castAsNonUtf8Char = function(e, t) {
		t === void 0 && (t = null);
		var n = t ? t.getName() : this.ISO88591;
		return le.decode(new Uint8Array([e]), n);
	}, e.guessEncoding = function(t, n) {
		if (n != null && n.get(j.CHARACTER_SET) !== void 0) return n.get(j.CHARACTER_SET).toString();
		for (var r = t.length, i = !0, a = !0, o = !0, s = 0, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = t.length > 3 && t[0] === 239 && t[1] === 187 && t[2] === 191, y = 0; y < r && (i || a || o); y++) {
			var b = t[y] & 255;
			o && (s > 0 ? b & 128 ? s-- : o = !1 : b & 128 && (b & 64 ? (s++, b & 32 ? (s++, b & 16 ? (s++, b & 8 ? o = !1 : u++) : l++) : c++) : o = !1)), i && (b > 127 && b < 160 ? i = !1 : b > 159 && (b < 192 || b === 215 || b === 247) && _++), a && (d > 0 ? b < 64 || b === 127 || b > 252 ? a = !1 : d-- : b === 128 || b === 160 || b > 239 ? a = !1 : b > 160 && b < 224 ? (f++, m = 0, p++, p > h && (h = p)) : b > 127 ? (d++, p = 0, m++, m > g && (g = m)) : (p = 0, m = 0));
		}
		return o && s > 0 && (o = !1), a && d > 0 && (a = !1), o && (v || c + l + u > 0) ? e.UTF8 : a && (e.ASSUME_SHIFT_JIS || h >= 3 || g >= 3) ? e.SHIFT_JIS : i && a ? h === 2 && f === 2 || _ * 10 >= r ? e.SHIFT_JIS : e.ISO88591 : i ? e.ISO88591 : a ? e.SHIFT_JIS : o ? e.UTF8 : e.PLATFORM_DEFAULT_ENCODING;
	}, e.format = function(e) {
		var t = [...arguments].slice(1), n = -1;
		function r(e, r, i, a, o, s) {
			if (e === "%%") return "%";
			if (t[++n] !== void 0) {
				e = a ? parseInt(a.substr(1)) : void 0;
				var c = o ? parseInt(o.substr(1)) : void 0, l;
				switch (s) {
					case "s":
						l = t[n];
						break;
					case "c":
						l = t[n][0];
						break;
					case "f":
						l = parseFloat(t[n]).toFixed(e);
						break;
					case "p":
						l = parseFloat(t[n]).toPrecision(e);
						break;
					case "e":
						l = parseFloat(t[n]).toExponential(e);
						break;
					case "x":
						l = parseInt(t[n]).toString(c || 16);
						break;
					case "d": l = parseFloat(parseInt(t[n], c || 10).toPrecision(e)).toFixed(0);
				}
				l = typeof l == "object" ? JSON.stringify(l) : (+l).toString(c);
				for (var u = parseInt(i), d = i && i[0] + "" == "0" ? "0" : " "; l.length < u;) l = r === void 0 ? d + l : l + d;
				return l;
			}
		}
		return e.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, r);
	}, e.getBytes = function(e, t) {
		return le.encode(e, t);
	}, e.getCharCode = function(e, t) {
		return t === void 0 && (t = 0), e.charCodeAt(t);
	}, e.getCharAt = function(e) {
		return String.fromCharCode(e);
	}, e.SHIFT_JIS = oe.SJIS.getName(), e.GB2312 = "GB2312", e.ISO88591 = oe.ISO8859_1.getName(), e.EUC_JP = "EUC_JP", e.UTF8 = oe.UTF8.getName(), e.PLATFORM_DEFAULT_ENCODING = e.UTF8, e.ASSUME_SHIFT_JIS = !1, e;
}(), F = function() {
	function e(e) {
		e === void 0 && (e = ""), this.value = e;
	}
	return e.prototype.enableDecoding = function(e) {
		return this.encoding = e, this;
	}, e.prototype.append = function(e) {
		return typeof e == "string" ? this.value += e.toString() : this.encoding ? this.value += P.castAsNonUtf8Char(e, this.encoding) : this.value += String.fromCharCode(e), this;
	}, e.prototype.appendChars = function(e, t, n) {
		for (var r = t; t < t + n; r++) this.append(e[r]);
		return this;
	}, e.prototype.length = function() {
		return this.value.length;
	}, e.prototype.charAt = function(e) {
		return this.value.charAt(e);
	}, e.prototype.deleteCharAt = function(e) {
		this.value = this.value.substr(0, e) + this.value.substring(e + 1);
	}, e.prototype.setCharAt = function(e, t) {
		this.value = this.value.substr(0, e) + t + this.value.substr(e + 1);
	}, e.prototype.substring = function(e, t) {
		return this.value.substring(e, t);
	}, e.prototype.setLengthToZero = function() {
		this.value = "";
	}, e.prototype.toString = function() {
		return this.value;
	}, e.prototype.insert = function(e, t) {
		this.value = this.value.substring(0, e) + t + this.value.substring(e);
	}, e;
}(), ue = function() {
	function e(e, t, n, r) {
		if (this.width = e, this.height = t, this.rowSize = n, this.bits = r, t ??= e, this.height = t, e < 1 || t < 1) throw new b("Both dimensions must be greater than 0");
		n ??= Math.floor((e + 31) / 32), this.rowSize = n, r ?? (this.bits = new Int32Array(this.rowSize * this.height));
	}
	return e.parseFromBooleanArray = function(t) {
		for (var n = t.length, r = t[0].length, i = new e(r, n), a = 0; a < n; a++) for (var o = t[a], s = 0; s < r; s++) o[s] && i.set(s, a);
		return i;
	}, e.parseFromString = function(t, n, r) {
		if (t === null) throw new b("stringRepresentation cannot be null");
		for (var i = Array(t.length), a = 0, o = 0, s = -1, c = 0, l = 0; l < t.length;) if (t.charAt(l) === "\n" || t.charAt(l) === "\r") {
			if (a > o) {
				if (s === -1) s = a - o;
				else if (a - o !== s) throw new b("row lengths do not match");
				o = a, c++;
			}
			l++;
		} else if (t.substring(l, l + n.length) === n) l += n.length, i[a] = !0, a++;
		else if (t.substring(l, l + r.length) === r) l += r.length, i[a] = !1, a++;
		else throw new b("illegal character encountered: " + t.substring(l));
		if (a > o) {
			if (s === -1) s = a - o;
			else if (a - o !== s) throw new b("row lengths do not match");
			c++;
		}
		for (var u = new e(s, c), d = 0; d < a; d++) i[d] && u.set(Math.floor(d % s), Math.floor(d / s));
		return u;
	}, e.prototype.get = function(e, t) {
		var n = t * this.rowSize + Math.floor(e / 32);
		return !!(this.bits[n] >>> (e & 31) & 1);
	}, e.prototype.set = function(e, t) {
		var n = t * this.rowSize + Math.floor(e / 32);
		this.bits[n] |= 1 << (e & 31);
	}, e.prototype.unset = function(e, t) {
		var n = t * this.rowSize + Math.floor(e / 32);
		this.bits[n] &= ~(1 << (e & 31));
	}, e.prototype.flip = function(e, t) {
		var n = t * this.rowSize + Math.floor(e / 32);
		this.bits[n] ^= 1 << (e & 31);
	}, e.prototype.xor = function(e) {
		if (this.width !== e.getWidth() || this.height !== e.getHeight() || this.rowSize !== e.getRowSize()) throw new b("input matrix dimensions do not match");
		for (var t = new ne(Math.floor(this.width / 32) + 1), n = this.rowSize, r = this.bits, i = 0, a = this.height; i < a; i++) for (var o = i * n, s = e.getRow(i, t).getBitArray(), c = 0; c < n; c++) r[o + c] ^= s[c];
	}, e.prototype.clear = function() {
		for (var e = this.bits, t = e.length, n = 0; n < t; n++) e[n] = 0;
	}, e.prototype.setRegion = function(e, t, n, r) {
		if (t < 0 || e < 0) throw new b("Left and top must be nonnegative");
		if (r < 1 || n < 1) throw new b("Height and width must be at least 1");
		var i = e + n, a = t + r;
		if (a > this.height || i > this.width) throw new b("The region must fit inside the matrix");
		for (var o = this.rowSize, s = this.bits, c = t; c < a; c++) for (var l = c * o, u = e; u < i; u++) s[l + Math.floor(u / 32)] |= 1 << (u & 31);
	}, e.prototype.getRow = function(e, t) {
		t == null || t.getSize() < this.width ? t = new ne(this.width) : t.clear();
		for (var n = this.rowSize, r = this.bits, i = e * n, a = 0; a < n; a++) t.setBulk(a * 32, r[i + a]);
		return t;
	}, e.prototype.setRow = function(e, t) {
		T.arraycopy(t.getBitArray(), 0, this.bits, e * this.rowSize, this.rowSize);
	}, e.prototype.rotate180 = function() {
		for (var e = this.getWidth(), t = this.getHeight(), n = new ne(e), r = new ne(e), i = 0, a = Math.floor((t + 1) / 2); i < a; i++) n = this.getRow(i, n), r = this.getRow(t - 1 - i, r), n.reverse(), r.reverse(), this.setRow(i, r), this.setRow(t - 1 - i, n);
	}, e.prototype.getEnclosingRectangle = function() {
		for (var e = this.width, t = this.height, n = this.rowSize, r = this.bits, i = e, a = t, o = -1, s = -1, c = 0; c < t; c++) for (var l = 0; l < n; l++) {
			var u = r[c * n + l];
			if (u !== 0) {
				if (c < a && (a = c), c > s && (s = c), l * 32 < i) {
					for (var d = 0; !(u << 31 - d);) d++;
					l * 32 + d < i && (i = l * 32 + d);
				}
				if (l * 32 + 31 > o) {
					for (var d = 31; !(u >>> d);) d--;
					l * 32 + d > o && (o = l * 32 + d);
				}
			}
		}
		return o < i || s < a ? null : Int32Array.from([
			i,
			a,
			o - i + 1,
			s - a + 1
		]);
	}, e.prototype.getTopLeftOnBit = function() {
		for (var e = this.rowSize, t = this.bits, n = 0; n < t.length && t[n] === 0;) n++;
		if (n === t.length) return null;
		for (var r = n / e, i = n % e * 32, a = t[n], o = 0; !(a << 31 - o);) o++;
		return i += o, Int32Array.from([i, r]);
	}, e.prototype.getBottomRightOnBit = function() {
		for (var e = this.rowSize, t = this.bits, n = t.length - 1; n >= 0 && t[n] === 0;) n--;
		if (n < 0) return null;
		for (var r = Math.floor(n / e), i = Math.floor(n % e) * 32, a = t[n], o = 31; !(a >>> o);) o--;
		return i += o, Int32Array.from([i, r]);
	}, e.prototype.getWidth = function() {
		return this.width;
	}, e.prototype.getHeight = function() {
		return this.height;
	}, e.prototype.getRowSize = function() {
		return this.rowSize;
	}, e.prototype.equals = function(t) {
		if (!(t instanceof e)) return !1;
		var n = t;
		return this.width === n.width && this.height === n.height && this.rowSize === n.rowSize && k.equals(this.bits, n.bits);
	}, e.prototype.hashCode = function() {
		var e = this.width;
		return e = 31 * e + this.width, e = 31 * e + this.height, e = 31 * e + this.rowSize, e = 31 * e + k.hashCode(this.bits), e;
	}, e.prototype.toString = function(e, t, n) {
		return e === void 0 && (e = "X "), t === void 0 && (t = "  "), n === void 0 && (n = "\n"), this.buildToString(e, t, n);
	}, e.prototype.buildToString = function(e, t, n) {
		for (var r = new F(), i = 0, a = this.height; i < a; i++) {
			for (var o = 0, s = this.width; o < s; o++) r.append(this.get(o, i) ? e : t);
			r.append(n);
		}
		return r.toString();
	}, e.prototype.clone = function() {
		return new e(this.width, this.height, this.rowSize, this.bits.slice());
	}, e;
}(), de = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), I = function(e) {
	de(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.getNotFoundInstance = function() {
		return new t();
	}, t.kind = "NotFoundException", t;
}(g), fe = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), pe = function(e) {
	fe(t, e);
	function t(n) {
		var r = e.call(this, n) || this;
		return r.luminances = t.EMPTY, r.buckets = new Int32Array(t.LUMINANCE_BUCKETS), r;
	}
	return t.prototype.getBlackRow = function(e, n) {
		var r = this.getLuminanceSource(), i = r.getWidth();
		n == null || n.getSize() < i ? n = new ne(i) : n.clear(), this.initArrays(i);
		for (var a = r.getRow(e, this.luminances), o = this.buckets, s = 0; s < i; s++) o[(a[s] & 255) >> t.LUMINANCE_SHIFT]++;
		var c = t.estimateBlackPoint(o);
		if (i < 3) for (var s = 0; s < i; s++) (a[s] & 255) < c && n.set(s);
		else for (var l = a[0] & 255, u = a[1] & 255, s = 1; s < i - 1; s++) {
			var d = a[s + 1] & 255;
			(u * 4 - l - d) / 2 < c && n.set(s), l = u, u = d;
		}
		return n;
	}, t.prototype.getBlackMatrix = function() {
		var e = this.getLuminanceSource(), n = e.getWidth(), r = e.getHeight(), i = new ue(n, r);
		this.initArrays(n);
		for (var a = this.buckets, o = 1; o < 5; o++) for (var s = Math.floor(r * o / 5), c = e.getRow(s, this.luminances), l = Math.floor(n * 4 / 5), u = Math.floor(n / 5); u < l; u++) {
			var d = c[u] & 255;
			a[d >> t.LUMINANCE_SHIFT]++;
		}
		for (var f = t.estimateBlackPoint(a), p = e.getMatrix(), o = 0; o < r; o++) for (var m = o * n, u = 0; u < n; u++) {
			var d = p[m + u] & 255;
			d < f && i.set(u, o);
		}
		return i;
	}, t.prototype.createBinarizer = function(e) {
		return new t(e);
	}, t.prototype.initArrays = function(e) {
		this.luminances.length < e && (this.luminances = new Uint8ClampedArray(e));
		for (var n = this.buckets, r = 0; r < t.LUMINANCE_BUCKETS; r++) n[r] = 0;
	}, t.estimateBlackPoint = function(e) {
		for (var n = e.length, r = 0, i = 0, a = 0, o = 0; o < n; o++) e[o] > a && (i = o, a = e[o]), e[o] > r && (r = e[o]);
		for (var s = 0, c = 0, o = 0; o < n; o++) {
			var l = o - i, u = e[o] * l * l;
			u > c && (s = o, c = u);
		}
		if (i > s) {
			var d = i;
			i = s, s = d;
		}
		if (s - i <= n / 16) throw new I();
		for (var f = s - 1, p = -1, o = s - 1; o > i; o--) {
			var m = o - i, u = m * m * (s - o) * (r - e[o]);
			u > p && (f = o, p = u);
		}
		return f << t.LUMINANCE_SHIFT;
	}, t.LUMINANCE_BITS = 5, t.LUMINANCE_SHIFT = 8 - t.LUMINANCE_BITS, t.LUMINANCE_BUCKETS = 1 << t.LUMINANCE_BITS, t.EMPTY = Uint8ClampedArray.from([0]), t;
}(w), me = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), he = function(e) {
	me(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.matrix = null, n;
	}
	return t.prototype.getBlackMatrix = function() {
		if (this.matrix !== null) return this.matrix;
		var n = this.getLuminanceSource(), r = n.getWidth(), i = n.getHeight();
		if (r >= t.MINIMUM_DIMENSION && i >= t.MINIMUM_DIMENSION) {
			var a = n.getMatrix(), o = r >> t.BLOCK_SIZE_POWER;
			(r & t.BLOCK_SIZE_MASK) !== 0 && o++;
			var s = i >> t.BLOCK_SIZE_POWER;
			(i & t.BLOCK_SIZE_MASK) !== 0 && s++;
			var c = t.calculateBlackPoints(a, o, s, r, i), l = new ue(r, i);
			t.calculateThresholdForBlock(a, o, s, r, i, c, l), this.matrix = l;
		} else this.matrix = e.prototype.getBlackMatrix.call(this);
		return this.matrix;
	}, t.prototype.createBinarizer = function(e) {
		return new t(e);
	}, t.calculateThresholdForBlock = function(e, n, r, i, a, o, s) {
		for (var c = a - t.BLOCK_SIZE, l = i - t.BLOCK_SIZE, u = 0; u < r; u++) {
			var d = u << t.BLOCK_SIZE_POWER;
			d > c && (d = c);
			for (var f = t.cap(u, 2, r - 3), p = 0; p < n; p++) {
				var m = p << t.BLOCK_SIZE_POWER;
				m > l && (m = l);
				for (var h = t.cap(p, 2, n - 3), g = 0, _ = -2; _ <= 2; _++) {
					var v = o[f + _];
					g += v[h - 2] + v[h - 1] + v[h] + v[h + 1] + v[h + 2];
				}
				var y = g / 25;
				t.thresholdBlock(e, m, d, y, i, s);
			}
		}
	}, t.cap = function(e, t, n) {
		return e < t ? t : e > n ? n : e;
	}, t.thresholdBlock = function(e, n, r, i, a, o) {
		for (var s = 0, c = r * a + n; s < t.BLOCK_SIZE; s++, c += a) for (var l = 0; l < t.BLOCK_SIZE; l++) (e[c + l] & 255) <= i && o.set(n + l, r + s);
	}, t.calculateBlackPoints = function(e, n, r, i, a) {
		for (var o = a - t.BLOCK_SIZE, s = i - t.BLOCK_SIZE, c = Array(r), l = 0; l < r; l++) {
			c[l] = new Int32Array(n);
			var u = l << t.BLOCK_SIZE_POWER;
			u > o && (u = o);
			for (var d = 0; d < n; d++) {
				var f = d << t.BLOCK_SIZE_POWER;
				f > s && (f = s);
				for (var p = 0, m = 255, h = 0, g = 0, _ = u * i + f; g < t.BLOCK_SIZE; g++, _ += i) {
					for (var v = 0; v < t.BLOCK_SIZE; v++) {
						var y = e[_ + v] & 255;
						p += y, y < m && (m = y), y > h && (h = y);
					}
					if (h - m > t.MIN_DYNAMIC_RANGE) for (g++, _ += i; g < t.BLOCK_SIZE; g++, _ += i) for (var v = 0; v < t.BLOCK_SIZE; v++) p += e[_ + v] & 255;
				}
				var b = p >> t.BLOCK_SIZE_POWER * 2;
				if (h - m <= t.MIN_DYNAMIC_RANGE && (b = m / 2, l > 0 && d > 0)) {
					var x = (c[l - 1][d] + 2 * c[l][d - 1] + c[l - 1][d - 1]) / 4;
					m < x && (b = x);
				}
				c[l][d] = b;
			}
		}
		return c;
	}, t.BLOCK_SIZE_POWER = 3, t.BLOCK_SIZE = 1 << t.BLOCK_SIZE_POWER, t.BLOCK_SIZE_MASK = t.BLOCK_SIZE - 1, t.MINIMUM_DIMENSION = t.BLOCK_SIZE * 5, t.MIN_DYNAMIC_RANGE = 24, t;
}(pe), ge = function() {
	function e(e, t) {
		this.width = e, this.height = t;
	}
	return e.prototype.getWidth = function() {
		return this.width;
	}, e.prototype.getHeight = function() {
		return this.height;
	}, e.prototype.isCropSupported = function() {
		return !1;
	}, e.prototype.crop = function(e, t, n, r) {
		throw new ce("This luminance source does not support cropping.");
	}, e.prototype.isRotateSupported = function() {
		return !1;
	}, e.prototype.rotateCounterClockwise = function() {
		throw new ce("This luminance source does not support rotation by 90 degrees.");
	}, e.prototype.rotateCounterClockwise45 = function() {
		throw new ce("This luminance source does not support rotation by 45 degrees.");
	}, e.prototype.toString = function() {
		for (var e = new Uint8ClampedArray(this.width), t = new F(), n = 0; n < this.height; n++) {
			for (var r = this.getRow(n, e), i = 0; i < this.width; i++) {
				var a = r[i] & 255, o = void 0;
				o = a < 64 ? "#" : a < 128 ? "+" : a < 192 ? "." : " ", t.append(o);
			}
			t.append("\n");
		}
		return t.toString();
	}, e;
}(), _e = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), ve = function(e) {
	_e(t, e);
	function t(t) {
		var n = e.call(this, t.getWidth(), t.getHeight()) || this;
		return n.delegate = t, n;
	}
	return t.prototype.getRow = function(e, t) {
		for (var n = this.delegate.getRow(e, t), r = this.getWidth(), i = 0; i < r; i++) n[i] = 255 - (n[i] & 255);
		return n;
	}, t.prototype.getMatrix = function() {
		for (var e = this.delegate.getMatrix(), t = this.getWidth() * this.getHeight(), n = new Uint8ClampedArray(t), r = 0; r < t; r++) n[r] = 255 - (e[r] & 255);
		return n;
	}, t.prototype.isCropSupported = function() {
		return this.delegate.isCropSupported();
	}, t.prototype.crop = function(e, n, r, i) {
		return new t(this.delegate.crop(e, n, r, i));
	}, t.prototype.isRotateSupported = function() {
		return this.delegate.isRotateSupported();
	}, t.prototype.invert = function() {
		return this.delegate;
	}, t.prototype.rotateCounterClockwise = function() {
		return new t(this.delegate.rotateCounterClockwise());
	}, t.prototype.rotateCounterClockwise45 = function() {
		return new t(this.delegate.rotateCounterClockwise45());
	}, t;
}(ge), ye = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), be = function(e) {
	ye(t, e);
	function t(n, r) {
		r === void 0 && (r = !1);
		var i = e.call(this, n.width, n.height) || this;
		return i.canvas = n, i.tempCanvasElement = null, i.buffer = t.makeBufferFromCanvasImageData(n, r), i;
	}
	return t.makeBufferFromCanvasImageData = function(e, n) {
		n === void 0 && (n = !1);
		var r = e.getContext("2d").getImageData(0, 0, e.width, e.height);
		return t.toGrayscaleBuffer(r.data, e.width, e.height, n);
	}, t.toGrayscaleBuffer = function(e, n, r, i) {
		i === void 0 && (i = !1);
		var a = new Uint8ClampedArray(n * r);
		if (t.FRAME_INDEX = !t.FRAME_INDEX, t.FRAME_INDEX || !i) for (var o = 0, s = 0, c = e.length; o < c; o += 4, s++) {
			var l = void 0, u = e[o + 3];
			if (u === 0) l = 255;
			else {
				var d = e[o], f = e[o + 1], p = e[o + 2];
				l = 306 * d + 601 * f + 117 * p + 512 >> 10;
			}
			a[s] = l;
		}
		else for (var o = 0, s = 0, m = e.length; o < m; o += 4, s++) {
			var l = void 0, u = e[o + 3];
			if (u === 0) l = 255;
			else {
				var d = e[o], f = e[o + 1], p = e[o + 2];
				l = 306 * d + 601 * f + 117 * p + 512 >> 10;
			}
			a[s] = 255 - l;
		}
		return a;
	}, t.prototype.getRow = function(e, t) {
		if (e < 0 || e >= this.getHeight()) throw new b("Requested row is outside the image: " + e);
		var n = this.getWidth(), r = e * n;
		return t === null ? t = this.buffer.slice(r, r + n) : (t.length < n && (t = new Uint8ClampedArray(n)), t.set(this.buffer.slice(r, r + n))), t;
	}, t.prototype.getMatrix = function() {
		return this.buffer;
	}, t.prototype.isCropSupported = function() {
		return !0;
	}, t.prototype.crop = function(t, n, r, i) {
		return e.prototype.crop.call(this, t, n, r, i), this;
	}, t.prototype.isRotateSupported = function() {
		return !0;
	}, t.prototype.rotateCounterClockwise = function() {
		return this.rotate(-90), this;
	}, t.prototype.rotateCounterClockwise45 = function() {
		return this.rotate(-45), this;
	}, t.prototype.getTempCanvasElement = function() {
		if (this.tempCanvasElement === null) {
			var e = this.canvas.ownerDocument.createElement("canvas");
			e.width = this.canvas.width, e.height = this.canvas.height, this.tempCanvasElement = e;
		}
		return this.tempCanvasElement;
	}, t.prototype.rotate = function(e) {
		var n = this.getTempCanvasElement(), r = n.getContext("2d"), i = e * t.DEGREE_TO_RADIANS, a = this.canvas.width, o = this.canvas.height, s = Math.ceil(Math.abs(Math.cos(i)) * a + Math.abs(Math.sin(i)) * o), c = Math.ceil(Math.abs(Math.sin(i)) * a + Math.abs(Math.cos(i)) * o);
		return n.width = s, n.height = c, r.translate(s / 2, c / 2), r.rotate(i), r.drawImage(this.canvas, a / -2, o / -2), this.buffer = t.makeBufferFromCanvasImageData(n), this;
	}, t.prototype.invert = function() {
		return new ve(this);
	}, t.DEGREE_TO_RADIANS = Math.PI / 180, t.FRAME_INDEX = !0, t;
}(ge), xe = function() {
	function e(e, t, n) {
		this.deviceId = e, this.label = t, this.kind = "videoinput", this.groupId = n || void 0;
	}
	return e.prototype.toJSON = function() {
		return {
			kind: this.kind,
			groupId: this.groupId,
			deviceId: this.deviceId,
			label: this.label
		};
	}, e;
}(), Se = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, Ce = function(e, t) {
	var n = {
		label: 0,
		sent: function() {
			if (a[0] & 1) throw a[1];
			return a[1];
		},
		trys: [],
		ops: []
	}, r, i, a, o = {
		next: s(0),
		throw: s(1),
		return: s(2)
	};
	return typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(e) {
		return function(t) {
			return c([e, t]);
		};
	}
	function c(o) {
		if (r) throw TypeError("Generator is already executing.");
		for (; n;) try {
			if (r = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a;
			switch (i = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
				case 0:
				case 1:
					a = o;
					break;
				case 4: return n.label++, {
					value: o[1],
					done: !1
				};
				case 5:
					n.label++, i = o[1], o = [0];
					continue;
				case 7:
					o = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (o[0] === 6 || o[0] === 2)) {
						n = 0;
						continue;
					}
					if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
						n.label = o[1];
						break;
					}
					if (o[0] === 6 && n.label < a[1]) {
						n.label = a[1], a = o;
						break;
					}
					if (a && n.label < a[2]) {
						n.label = a[2], n.ops.push(o);
						break;
					}
					a[2] && n.ops.pop(), n.trys.pop();
					continue;
			}
			o = t.call(e, n);
		} catch (e) {
			o = [6, e], i = 0;
		} finally {
			r = a = 0;
		}
		if (o[0] & 5) throw o[1];
		return {
			value: o[0] ? o[1] : void 0,
			done: !0
		};
	}
}, we = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Te = function() {
	function e(e, t, n) {
		t === void 0 && (t = 500), this.reader = e, this.timeBetweenScansMillis = t, this._hints = n, this._stopContinuousDecode = !1, this._stopAsyncDecode = !1, this._timeBetweenDecodingAttempts = 0;
	}
	return Object.defineProperty(e.prototype, "hasNavigator", {
		get: function() {
			return typeof navigator < "u";
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "isMediaDevicesSuported", {
		get: function() {
			return this.hasNavigator && !!navigator.mediaDevices;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "canEnumerateDevices", {
		get: function() {
			return !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices);
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "timeBetweenDecodingAttempts", {
		get: function() {
			return this._timeBetweenDecodingAttempts;
		},
		set: function(e) {
			this._timeBetweenDecodingAttempts = e < 0 ? 0 : e;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "hints", {
		get: function() {
			return this._hints;
		},
		set: function(e) {
			this._hints = e || null;
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype.listVideoInputDevices = function() {
		return Se(this, void 0, void 0, function() {
			var e, t, n, r, i, a, o, s, c, l, u, d;
			return Ce(this, function(f) {
				switch (f.label) {
					case 0:
						if (!this.hasNavigator) throw Error("Can't enumerate devices, navigator is not present.");
						if (!this.canEnumerateDevices) throw Error("Can't enumerate devices, method not supported.");
						return [4, navigator.mediaDevices.enumerateDevices()];
					case 1:
						e = f.sent(), t = [];
						try {
							for (n = we(e), r = n.next(); !r.done; r = n.next()) i = r.value, a = i.kind === "video" ? "videoinput" : i.kind, a === "videoinput" && (o = i.deviceId || i.id, s = i.label || "Video device " + (t.length + 1), c = i.groupId, l = {
								deviceId: o,
								label: s,
								kind: a,
								groupId: c
							}, t.push(l));
						} catch (e) {
							u = { error: e };
						} finally {
							try {
								r && !r.done && (d = n.return) && d.call(n);
							} finally {
								if (u) throw u.error;
							}
						}
						return [2, t];
				}
			});
		});
	}, e.prototype.getVideoInputDevices = function() {
		return Se(this, void 0, void 0, function() {
			var e;
			return Ce(this, function(t) {
				switch (t.label) {
					case 0: return [4, this.listVideoInputDevices()];
					case 1: return e = t.sent(), [2, e.map(function(e) {
						return new xe(e.deviceId, e.label);
					})];
				}
			});
		});
	}, e.prototype.findDeviceById = function(e) {
		return Se(this, void 0, void 0, function() {
			var t;
			return Ce(this, function(n) {
				switch (n.label) {
					case 0: return [4, this.listVideoInputDevices()];
					case 1: return t = n.sent(), t ? [2, t.find(function(t) {
						return t.deviceId === e;
					})] : [2, null];
				}
			});
		});
	}, e.prototype.decodeFromInputVideoDevice = function(e, t) {
		return Se(this, void 0, void 0, function() {
			return Ce(this, function(n) {
				switch (n.label) {
					case 0: return [4, this.decodeOnceFromVideoDevice(e, t)];
					case 1: return [2, n.sent()];
				}
			});
		});
	}, e.prototype.decodeOnceFromVideoDevice = function(e, t) {
		return Se(this, void 0, void 0, function() {
			var n, r;
			return Ce(this, function(i) {
				switch (i.label) {
					case 0: return this.reset(), n = e ? { deviceId: { exact: e } } : { facingMode: "environment" }, r = { video: n }, [4, this.decodeOnceFromConstraints(r, t)];
					case 1: return [2, i.sent()];
				}
			});
		});
	}, e.prototype.decodeOnceFromConstraints = function(e, t) {
		return Se(this, void 0, void 0, function() {
			var n;
			return Ce(this, function(r) {
				switch (r.label) {
					case 0: return [4, navigator.mediaDevices.getUserMedia(e)];
					case 1: return n = r.sent(), [4, this.decodeOnceFromStream(n, t)];
					case 2: return [2, r.sent()];
				}
			});
		});
	}, e.prototype.decodeOnceFromStream = function(e, t) {
		return Se(this, void 0, void 0, function() {
			var n, r;
			return Ce(this, function(i) {
				switch (i.label) {
					case 0: return this.reset(), [4, this.attachStreamToVideo(e, t)];
					case 1: return n = i.sent(), [4, this.decodeOnce(n)];
					case 2: return r = i.sent(), [2, r];
				}
			});
		});
	}, e.prototype.decodeFromInputVideoDeviceContinuously = function(e, t, n) {
		return Se(this, void 0, void 0, function() {
			return Ce(this, function(r) {
				switch (r.label) {
					case 0: return [4, this.decodeFromVideoDevice(e, t, n)];
					case 1: return [2, r.sent()];
				}
			});
		});
	}, e.prototype.decodeFromVideoDevice = function(e, t, n) {
		return Se(this, void 0, void 0, function() {
			var r, i;
			return Ce(this, function(a) {
				switch (a.label) {
					case 0: return r = e ? { deviceId: { exact: e } } : { facingMode: "environment" }, i = { video: r }, [4, this.decodeFromConstraints(i, t, n)];
					case 1: return [2, a.sent()];
				}
			});
		});
	}, e.prototype.decodeFromConstraints = function(e, t, n) {
		return Se(this, void 0, void 0, function() {
			var r;
			return Ce(this, function(i) {
				switch (i.label) {
					case 0: return [4, navigator.mediaDevices.getUserMedia(e)];
					case 1: return r = i.sent(), [4, this.decodeFromStream(r, t, n)];
					case 2: return [2, i.sent()];
				}
			});
		});
	}, e.prototype.decodeFromStream = function(e, t, n) {
		return Se(this, void 0, void 0, function() {
			var r;
			return Ce(this, function(i) {
				switch (i.label) {
					case 0: return this.reset(), [4, this.attachStreamToVideo(e, t)];
					case 1: return r = i.sent(), [4, this.decodeContinuously(r, n)];
					case 2: return [2, i.sent()];
				}
			});
		});
	}, e.prototype.stopAsyncDecode = function() {
		this._stopAsyncDecode = !0;
	}, e.prototype.stopContinuousDecode = function() {
		this._stopContinuousDecode = !0;
	}, e.prototype.attachStreamToVideo = function(e, t) {
		return Se(this, void 0, void 0, function() {
			var n;
			return Ce(this, function(r) {
				switch (r.label) {
					case 0: return n = this.prepareVideoElement(t), this.addVideoSource(n, e), this.videoElement = n, this.stream = e, [4, this.playVideoOnLoadAsync(n)];
					case 1: return r.sent(), [2, n];
				}
			});
		});
	}, e.prototype.playVideoOnLoadAsync = function(e) {
		var t = this;
		return new Promise(function(n, r) {
			return t.playVideoOnLoad(e, function() {
				return n();
			});
		});
	}, e.prototype.playVideoOnLoad = function(e, t) {
		var n = this;
		this.videoEndedListener = function() {
			return n.stopStreams();
		}, this.videoCanPlayListener = function() {
			return n.tryPlayVideo(e);
		}, e.addEventListener("ended", this.videoEndedListener), e.addEventListener("canplay", this.videoCanPlayListener), e.addEventListener("playing", t), this.tryPlayVideo(e);
	}, e.prototype.isVideoPlaying = function(e) {
		return e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2;
	}, e.prototype.tryPlayVideo = function(e) {
		return Se(this, void 0, void 0, function() {
			return Ce(this, function(t) {
				switch (t.label) {
					case 0:
						if (this.isVideoPlaying(e)) return console.warn("Trying to play video that is already playing."), [2];
						t.label = 1;
					case 1: return t.trys.push([
						1,
						3,
						,
						4
					]), [4, e.play()];
					case 2: return t.sent(), [3, 4];
					case 3: return t.sent(), console.warn("It was not possible to play the video."), [3, 4];
					case 4: return [2];
				}
			});
		});
	}, e.prototype.getMediaElement = function(e, t) {
		var n = document.getElementById(e);
		if (!n) throw new v("element with id '" + e + "' not found");
		if (n.nodeName.toLowerCase() !== t.toLowerCase()) throw new v("element with id '" + e + "' must be an " + t + " element");
		return n;
	}, e.prototype.decodeFromImage = function(e, t) {
		if (!e && !t) throw new v("either imageElement with a src set or an url must be provided");
		return t && !e ? this.decodeFromImageUrl(t) : this.decodeFromImageElement(e);
	}, e.prototype.decodeFromVideo = function(e, t) {
		if (!e && !t) throw new v("Either an element with a src set or an URL must be provided");
		return t && !e ? this.decodeFromVideoUrl(t) : this.decodeFromVideoElement(e);
	}, e.prototype.decodeFromVideoContinuously = function(e, t, n) {
		if (e === void 0 && t === void 0) throw new v("Either an element with a src set or an URL must be provided");
		return t && !e ? this.decodeFromVideoUrlContinuously(t, n) : this.decodeFromVideoElementContinuously(e, n);
	}, e.prototype.decodeFromImageElement = function(e) {
		if (!e) throw new v("An image element must be provided.");
		this.reset();
		var t = this.prepareImageElement(e);
		return this.imageElement = t, this.isImageLoaded(t) ? this.decodeOnce(t, !1, !0) : this._decodeOnLoadImage(t);
	}, e.prototype.decodeFromVideoElement = function(e) {
		var t = this._decodeFromVideoElementSetup(e);
		return this._decodeOnLoadVideo(t);
	}, e.prototype.decodeFromVideoElementContinuously = function(e, t) {
		var n = this._decodeFromVideoElementSetup(e);
		return this._decodeOnLoadVideoContinuously(n, t);
	}, e.prototype._decodeFromVideoElementSetup = function(e) {
		if (!e) throw new v("A video element must be provided.");
		this.reset();
		var t = this.prepareVideoElement(e);
		return this.videoElement = t, t;
	}, e.prototype.decodeFromImageUrl = function(e) {
		if (!e) throw new v("An URL must be provided.");
		this.reset();
		var t = this.prepareImageElement();
		this.imageElement = t;
		var n = this._decodeOnLoadImage(t);
		return t.src = e, n;
	}, e.prototype.decodeFromVideoUrl = function(e) {
		if (!e) throw new v("An URL must be provided.");
		this.reset();
		var t = this.prepareVideoElement(), n = this.decodeFromVideoElement(t);
		return t.src = e, n;
	}, e.prototype.decodeFromVideoUrlContinuously = function(e, t) {
		if (!e) throw new v("An URL must be provided.");
		this.reset();
		var n = this.prepareVideoElement(), r = this.decodeFromVideoElementContinuously(n, t);
		return n.src = e, r;
	}, e.prototype._decodeOnLoadImage = function(e) {
		var t = this;
		return new Promise(function(n, r) {
			t.imageLoadedListener = function() {
				return t.decodeOnce(e, !1, !0).then(n, r);
			}, e.addEventListener("load", t.imageLoadedListener);
		});
	}, e.prototype._decodeOnLoadVideo = function(e) {
		return Se(this, void 0, void 0, function() {
			return Ce(this, function(t) {
				switch (t.label) {
					case 0: return [4, this.playVideoOnLoadAsync(e)];
					case 1: return t.sent(), [4, this.decodeOnce(e)];
					case 2: return [2, t.sent()];
				}
			});
		});
	}, e.prototype._decodeOnLoadVideoContinuously = function(e, t) {
		return Se(this, void 0, void 0, function() {
			return Ce(this, function(n) {
				switch (n.label) {
					case 0: return [4, this.playVideoOnLoadAsync(e)];
					case 1: return n.sent(), this.decodeContinuously(e, t), [2];
				}
			});
		});
	}, e.prototype.isImageLoaded = function(e) {
		return !(!e.complete || e.naturalWidth === 0);
	}, e.prototype.prepareImageElement = function(e) {
		var t;
		return e === void 0 && (t = document.createElement("img"), t.width = 200, t.height = 200), typeof e == "string" && (t = this.getMediaElement(e, "img")), e instanceof HTMLImageElement && (t = e), t;
	}, e.prototype.prepareVideoElement = function(e) {
		var t;
		return !e && typeof document < "u" && (t = document.createElement("video"), t.width = 200, t.height = 200), typeof e == "string" && (t = this.getMediaElement(e, "video")), e instanceof HTMLVideoElement && (t = e), t.setAttribute("autoplay", "true"), t.setAttribute("muted", "true"), t.setAttribute("playsinline", "true"), t;
	}, e.prototype.decodeOnce = function(e, t, n) {
		var r = this;
		t === void 0 && (t = !0), n === void 0 && (n = !0), this._stopAsyncDecode = !1;
		var i = function(a, o) {
			if (r._stopAsyncDecode) o(new I("Video stream has ended before any code could be detected.")), r._stopAsyncDecode = void 0;
			else try {
				a(r.decode(e));
			} catch (e) {
				var s = t && e instanceof I, c = (e instanceof C || e instanceof M) && n;
				if (s || c) return setTimeout(i, r._timeBetweenDecodingAttempts, a, o);
				o(e);
			}
		};
		return new Promise(function(e, t) {
			return i(e, t);
		});
	}, e.prototype.decodeContinuously = function(e, t) {
		var n = this;
		this._stopContinuousDecode = !1;
		var r = function() {
			if (n._stopContinuousDecode) n._stopContinuousDecode = void 0;
			else try {
				t(n.decode(e), null), setTimeout(r, n.timeBetweenScansMillis);
			} catch (e) {
				t(null, e);
				var i = e instanceof C || e instanceof M, a = e instanceof I;
				(i || a) && setTimeout(r, n._timeBetweenDecodingAttempts);
			}
		};
		r();
	}, e.prototype.decode = function(e) {
		var t = this.createBinaryBitmap(e);
		return this.decodeBitmap(t);
	}, e.prototype.createBinaryBitmap = function(e) {
		this.getCaptureCanvasContext(e);
		var t = !1;
		return e instanceof HTMLVideoElement ? (this.drawFrameOnCanvas(e), t = !0) : this.drawImageOnCanvas(e), new x(new he(new be(this.getCaptureCanvas(e), t)));
	}, e.prototype.getCaptureCanvasContext = function(e) {
		if (!this.captureCanvasContext) {
			var t = this.getCaptureCanvas(e), n = void 0;
			try {
				n = t.getContext("2d", { willReadFrequently: !0 });
			} catch {
				n = t.getContext("2d");
			}
			this.captureCanvasContext = n;
		}
		return this.captureCanvasContext;
	}, e.prototype.getCaptureCanvas = function(e) {
		if (!this.captureCanvas) {
			var t = this.createCaptureCanvas(e);
			this.captureCanvas = t;
		}
		return this.captureCanvas;
	}, e.prototype.drawFrameOnCanvas = function(e, t, n) {
		t === void 0 && (t = {
			sx: 0,
			sy: 0,
			sWidth: e.videoWidth,
			sHeight: e.videoHeight,
			dx: 0,
			dy: 0,
			dWidth: e.videoWidth,
			dHeight: e.videoHeight
		}), n === void 0 && (n = this.captureCanvasContext), n.drawImage(e, t.sx, t.sy, t.sWidth, t.sHeight, t.dx, t.dy, t.dWidth, t.dHeight);
	}, e.prototype.drawImageOnCanvas = function(e, t, n) {
		t === void 0 && (t = {
			sx: 0,
			sy: 0,
			sWidth: e.naturalWidth,
			sHeight: e.naturalHeight,
			dx: 0,
			dy: 0,
			dWidth: e.naturalWidth,
			dHeight: e.naturalHeight
		}), n === void 0 && (n = this.captureCanvasContext), n.drawImage(e, t.sx, t.sy, t.sWidth, t.sHeight, t.dx, t.dy, t.dWidth, t.dHeight);
	}, e.prototype.decodeBitmap = function(e) {
		return this.reader.decode(e, this._hints);
	}, e.prototype.createCaptureCanvas = function(e) {
		if (typeof document > "u") return this._destroyCaptureCanvas(), null;
		var t = document.createElement("canvas"), n, r;
		return e !== void 0 && (e instanceof HTMLVideoElement ? (n = e.videoWidth, r = e.videoHeight) : e instanceof HTMLImageElement && (n = e.naturalWidth || e.width, r = e.naturalHeight || e.height)), t.style.width = n + "px", t.style.height = r + "px", t.width = n, t.height = r, t;
	}, e.prototype.stopStreams = function() {
		this.stream &&= (this.stream.getVideoTracks().forEach(function(e) {
			return e.stop();
		}), void 0), this._stopAsyncDecode === !1 && this.stopAsyncDecode(), this._stopContinuousDecode === !1 && this.stopContinuousDecode();
	}, e.prototype.reset = function() {
		this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas();
	}, e.prototype._destroyVideoElement = function() {
		this.videoElement &&= (this.videoEndedListener !== void 0 && this.videoElement.removeEventListener("ended", this.videoEndedListener), this.videoPlayingEventListener !== void 0 && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), this.videoCanPlayListener !== void 0 && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), void 0);
	}, e.prototype._destroyImageElement = function() {
		this.imageElement &&= (this.imageLoadedListener !== void 0 && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), void 0);
	}, e.prototype._destroyCaptureCanvas = function() {
		this.captureCanvasContext = void 0, this.captureCanvas = void 0;
	}, e.prototype.addVideoSource = function(e, t) {
		try {
			e.srcObject = t;
		} catch {
			e.src = URL.createObjectURL(t);
		}
	}, e.prototype.cleanVideoSource = function(e) {
		try {
			e.srcObject = null;
		} catch {
			e.src = "";
		}
		this.videoElement.removeAttribute("src");
	}, e;
}(), Ee = function() {
	function e(e, t, n, r, i, a) {
		n === void 0 && (n = t == null ? 0 : 8 * t.length), a === void 0 && (a = T.currentTimeMillis()), this.text = e, this.rawBytes = t, this.numBits = n, this.resultPoints = r, this.format = i, this.timestamp = a, this.text = e, this.rawBytes = t, this.numBits = n ?? (t == null ? 0 : 8 * t.length), this.resultPoints = r, this.format = i, this.resultMetadata = null, this.timestamp = a ?? T.currentTimeMillis();
	}
	return e.prototype.getText = function() {
		return this.text;
	}, e.prototype.getRawBytes = function() {
		return this.rawBytes;
	}, e.prototype.getNumBits = function() {
		return this.numBits;
	}, e.prototype.getResultPoints = function() {
		return this.resultPoints;
	}, e.prototype.getBarcodeFormat = function() {
		return this.format;
	}, e.prototype.getResultMetadata = function() {
		return this.resultMetadata;
	}, e.prototype.putMetadata = function(e, t) {
		this.resultMetadata === null && (this.resultMetadata = /* @__PURE__ */ new Map()), this.resultMetadata.set(e, t);
	}, e.prototype.putAllMetadata = function(e) {
		e !== null && (this.resultMetadata = this.resultMetadata === null ? e : new Map(e));
	}, e.prototype.addResultPoints = function(e) {
		var t = this.resultPoints;
		if (t === null) this.resultPoints = e;
		else if (e !== null && e.length > 0) {
			var n = Array(t.length + e.length);
			T.arraycopy(t, 0, n, 0, t.length), T.arraycopy(e, 0, n, t.length, e.length), this.resultPoints = n;
		}
	}, e.prototype.getTimestamp = function() {
		return this.timestamp;
	}, e.prototype.toString = function() {
		return this.text;
	}, e;
}(), De;
(function(e) {
	e[e.AZTEC = 0] = "AZTEC", e[e.CODABAR = 1] = "CODABAR", e[e.CODE_39 = 2] = "CODE_39", e[e.CODE_93 = 3] = "CODE_93", e[e.CODE_128 = 4] = "CODE_128", e[e.DATA_MATRIX = 5] = "DATA_MATRIX", e[e.EAN_8 = 6] = "EAN_8", e[e.EAN_13 = 7] = "EAN_13", e[e.ITF = 8] = "ITF", e[e.MAXICODE = 9] = "MAXICODE", e[e.PDF_417 = 10] = "PDF_417", e[e.QR_CODE = 11] = "QR_CODE", e[e.RSS_14 = 12] = "RSS_14", e[e.RSS_EXPANDED = 13] = "RSS_EXPANDED", e[e.UPC_A = 14] = "UPC_A", e[e.UPC_E = 15] = "UPC_E", e[e.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION";
})(De ||= {});
var L = De, Oe;
(function(e) {
	e[e.OTHER = 0] = "OTHER", e[e.ORIENTATION = 1] = "ORIENTATION", e[e.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", e[e.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", e[e.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", e[e.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", e[e.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", e[e.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", e[e.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", e[e.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", e[e.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY";
})(Oe ||= {});
var ke = Oe, Ae = function() {
	function e(e, t, n, r, i, a) {
		i === void 0 && (i = -1), a === void 0 && (a = -1), this.rawBytes = e, this.text = t, this.byteSegments = n, this.ecLevel = r, this.structuredAppendSequenceNumber = i, this.structuredAppendParity = a, this.numBits = e == null ? 0 : 8 * e.length;
	}
	return e.prototype.getRawBytes = function() {
		return this.rawBytes;
	}, e.prototype.getNumBits = function() {
		return this.numBits;
	}, e.prototype.setNumBits = function(e) {
		this.numBits = e;
	}, e.prototype.getText = function() {
		return this.text;
	}, e.prototype.getByteSegments = function() {
		return this.byteSegments;
	}, e.prototype.getECLevel = function() {
		return this.ecLevel;
	}, e.prototype.getErrorsCorrected = function() {
		return this.errorsCorrected;
	}, e.prototype.setErrorsCorrected = function(e) {
		this.errorsCorrected = e;
	}, e.prototype.getErasures = function() {
		return this.erasures;
	}, e.prototype.setErasures = function(e) {
		this.erasures = e;
	}, e.prototype.getOther = function() {
		return this.other;
	}, e.prototype.setOther = function(e) {
		this.other = e;
	}, e.prototype.hasStructuredAppend = function() {
		return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
	}, e.prototype.getStructuredAppendParity = function() {
		return this.structuredAppendParity;
	}, e.prototype.getStructuredAppendSequenceNumber = function() {
		return this.structuredAppendSequenceNumber;
	}, e;
}(), je = function() {
	function e() {}
	return e.prototype.exp = function(e) {
		return this.expTable[e];
	}, e.prototype.log = function(e) {
		if (e === 0) throw new b();
		return this.logTable[e];
	}, e.addOrSubtract = function(e, t) {
		return e ^ t;
	}, e;
}(), Me = function() {
	function e(e, t) {
		if (t.length === 0) throw new b();
		this.field = e;
		var n = t.length;
		if (n > 1 && t[0] === 0) {
			for (var r = 1; r < n && t[r] === 0;) r++;
			r === n ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(n - r), T.arraycopy(t, r, this.coefficients, 0, this.coefficients.length));
		} else this.coefficients = t;
	}
	return e.prototype.getCoefficients = function() {
		return this.coefficients;
	}, e.prototype.getDegree = function() {
		return this.coefficients.length - 1;
	}, e.prototype.isZero = function() {
		return this.coefficients[0] === 0;
	}, e.prototype.getCoefficient = function(e) {
		return this.coefficients[this.coefficients.length - 1 - e];
	}, e.prototype.evaluateAt = function(e) {
		if (e === 0) return this.getCoefficient(0);
		var t = this.coefficients, n;
		if (e === 1) {
			n = 0;
			for (var r = 0, i = t.length; r !== i; r++) {
				var a = t[r];
				n = je.addOrSubtract(n, a);
			}
			return n;
		}
		n = t[0];
		for (var o = t.length, s = this.field, r = 1; r < o; r++) n = je.addOrSubtract(s.multiply(e, n), t[r]);
		return n;
	}, e.prototype.addOrSubtract = function(t) {
		if (!this.field.equals(t.field)) throw new b("GenericGFPolys do not have same GenericGF field");
		if (this.isZero()) return t;
		if (t.isZero()) return this;
		var n = this.coefficients, r = t.coefficients;
		if (n.length > r.length) {
			var i = n;
			n = r, r = i;
		}
		var a = new Int32Array(r.length), o = r.length - n.length;
		T.arraycopy(r, 0, a, 0, o);
		for (var s = o; s < r.length; s++) a[s] = je.addOrSubtract(n[s - o], r[s]);
		return new e(this.field, a);
	}, e.prototype.multiply = function(t) {
		if (!this.field.equals(t.field)) throw new b("GenericGFPolys do not have same GenericGF field");
		if (this.isZero() || t.isZero()) return this.field.getZero();
		for (var n = this.coefficients, r = n.length, i = t.coefficients, a = i.length, o = new Int32Array(r + a - 1), s = this.field, c = 0; c < r; c++) for (var l = n[c], u = 0; u < a; u++) o[c + u] = je.addOrSubtract(o[c + u], s.multiply(l, i[u]));
		return new e(s, o);
	}, e.prototype.multiplyScalar = function(t) {
		if (t === 0) return this.field.getZero();
		if (t === 1) return this;
		for (var n = this.coefficients.length, r = this.field, i = new Int32Array(n), a = this.coefficients, o = 0; o < n; o++) i[o] = r.multiply(a[o], t);
		return new e(r, i);
	}, e.prototype.multiplyByMonomial = function(t, n) {
		if (t < 0) throw new b();
		if (n === 0) return this.field.getZero();
		for (var r = this.coefficients, i = r.length, a = new Int32Array(i + t), o = this.field, s = 0; s < i; s++) a[s] = o.multiply(r[s], n);
		return new e(o, a);
	}, e.prototype.divide = function(e) {
		if (!this.field.equals(e.field)) throw new b("GenericGFPolys do not have same GenericGF field");
		if (e.isZero()) throw new b("Divide by 0");
		for (var t = this.field, n = t.getZero(), r = this, i = e.getCoefficient(e.getDegree()), a = t.inverse(i); r.getDegree() >= e.getDegree() && !r.isZero();) {
			var o = r.getDegree() - e.getDegree(), s = t.multiply(r.getCoefficient(r.getDegree()), a), c = e.multiplyByMonomial(o, s), l = t.buildMonomial(o, s);
			n = n.addOrSubtract(l), r = r.addOrSubtract(c);
		}
		return [n, r];
	}, e.prototype.toString = function() {
		for (var e = "", t = this.getDegree(); t >= 0; t--) {
			var n = this.getCoefficient(t);
			if (n !== 0) {
				if (n < 0 ? (e += " - ", n = -n) : e.length > 0 && (e += " + "), t === 0 || n !== 1) {
					var r = this.field.log(n);
					r === 0 ? e += "1" : r === 1 ? e += "a" : (e += "a^", e += r);
				}
				t !== 0 && (t === 1 ? e += "x" : (e += "x^", e += t));
			}
		}
		return e;
	}, e;
}(), Ne = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Pe = function(e) {
	Ne(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.kind = "ArithmeticException", t;
}(g), Fe = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Ie = function(e) {
	Fe(t, e);
	function t(t, n, r) {
		var i = e.call(this) || this;
		i.primitive = t, i.size = n, i.generatorBase = r;
		for (var a = new Int32Array(n), o = 1, s = 0; s < n; s++) a[s] = o, o *= 2, o >= n && (o ^= t, o &= n - 1);
		i.expTable = a;
		for (var c = new Int32Array(n), s = 0; s < n - 1; s++) c[a[s]] = s;
		return i.logTable = c, i.zero = new Me(i, Int32Array.from([0])), i.one = new Me(i, Int32Array.from([1])), i;
	}
	return t.prototype.getZero = function() {
		return this.zero;
	}, t.prototype.getOne = function() {
		return this.one;
	}, t.prototype.buildMonomial = function(e, t) {
		if (e < 0) throw new b();
		if (t === 0) return this.zero;
		var n = new Int32Array(e + 1);
		return n[0] = t, new Me(this, n);
	}, t.prototype.inverse = function(e) {
		if (e === 0) throw new Pe();
		return this.expTable[this.size - this.logTable[e] - 1];
	}, t.prototype.multiply = function(e, t) {
		return e === 0 || t === 0 ? 0 : this.expTable[(this.logTable[e] + this.logTable[t]) % (this.size - 1)];
	}, t.prototype.getSize = function() {
		return this.size;
	}, t.prototype.getGeneratorBase = function() {
		return this.generatorBase;
	}, t.prototype.toString = function() {
		return "GF(0x" + A.toHexString(this.primitive) + "," + this.size + ")";
	}, t.prototype.equals = function(e) {
		return e === this;
	}, t.AZTEC_DATA_12 = new t(4201, 4096, 1), t.AZTEC_DATA_10 = new t(1033, 1024, 1), t.AZTEC_DATA_6 = new t(67, 64, 1), t.AZTEC_PARAM = new t(19, 16, 1), t.QR_CODE_FIELD_256 = new t(285, 256, 0), t.DATA_MATRIX_FIELD_256 = new t(301, 256, 1), t.AZTEC_DATA_8 = t.DATA_MATRIX_FIELD_256, t.MAXICODE_FIELD_64 = t.AZTEC_DATA_6, t;
}(je), Le = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Re = function(e) {
	Le(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.kind = "ReedSolomonException", t;
}(g), ze = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Be = function(e) {
	ze(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.kind = "IllegalStateException", t;
}(g), Ve = function() {
	function e(e) {
		this.field = e;
	}
	return e.prototype.decode = function(e, t) {
		for (var n = this.field, r = new Me(n, e), i = new Int32Array(t), a = !0, o = 0; o < t; o++) {
			var s = r.evaluateAt(n.exp(o + n.getGeneratorBase()));
			i[i.length - 1 - o] = s, s !== 0 && (a = !1);
		}
		if (!a) for (var c = new Me(n, i), l = this.runEuclideanAlgorithm(n.buildMonomial(t, 1), c, t), u = l[0], d = l[1], f = this.findErrorLocations(u), p = this.findErrorMagnitudes(d, f), o = 0; o < f.length; o++) {
			var m = e.length - 1 - n.log(f[o]);
			if (m < 0) throw new Re("Bad error location");
			e[m] = Ie.addOrSubtract(e[m], p[o]);
		}
	}, e.prototype.runEuclideanAlgorithm = function(e, t, n) {
		if (e.getDegree() < t.getDegree()) {
			var r = e;
			e = t, t = r;
		}
		for (var i = this.field, a = e, o = t, s = i.getZero(), c = i.getOne(); o.getDegree() >= (n / 2 | 0);) {
			var l = a, u = s;
			if (a = o, s = c, a.isZero()) throw new Re("r_{i-1} was zero");
			o = l;
			for (var d = i.getZero(), f = a.getCoefficient(a.getDegree()), p = i.inverse(f); o.getDegree() >= a.getDegree() && !o.isZero();) {
				var m = o.getDegree() - a.getDegree(), h = i.multiply(o.getCoefficient(o.getDegree()), p);
				d = d.addOrSubtract(i.buildMonomial(m, h)), o = o.addOrSubtract(a.multiplyByMonomial(m, h));
			}
			if (c = d.multiply(s).addOrSubtract(u), o.getDegree() >= a.getDegree()) throw new Be("Division algorithm failed to reduce polynomial?");
		}
		var g = c.getCoefficient(0);
		if (g === 0) throw new Re("sigmaTilde(0) was zero");
		var _ = i.inverse(g);
		return [c.multiplyScalar(_), o.multiplyScalar(_)];
	}, e.prototype.findErrorLocations = function(e) {
		var t = e.getDegree();
		if (t === 1) return Int32Array.from([e.getCoefficient(1)]);
		for (var n = new Int32Array(t), r = 0, i = this.field, a = 1; a < i.getSize() && r < t; a++) e.evaluateAt(a) === 0 && (n[r] = i.inverse(a), r++);
		if (r !== t) throw new Re("Error locator degree does not match number of roots");
		return n;
	}, e.prototype.findErrorMagnitudes = function(e, t) {
		for (var n = t.length, r = new Int32Array(n), i = this.field, a = 0; a < n; a++) {
			for (var o = i.inverse(t[a]), s = 1, c = 0; c < n; c++) if (a !== c) {
				var l = i.multiply(t[c], o), u = l & 1 ? l & -2 : l | 1;
				s = i.multiply(s, u);
			}
			r[a] = i.multiply(e.evaluateAt(o), i.inverse(s)), i.getGeneratorBase() !== 0 && (r[a] = i.multiply(r[a], o));
		}
		return r;
	}, e;
}(), He;
(function(e) {
	e[e.UPPER = 0] = "UPPER", e[e.LOWER = 1] = "LOWER", e[e.MIXED = 2] = "MIXED", e[e.DIGIT = 3] = "DIGIT", e[e.PUNCT = 4] = "PUNCT", e[e.BINARY = 5] = "BINARY";
})(He ||= {});
var Ue = function() {
	function e() {}
	return e.prototype.decode = function(t) {
		this.ddata = t;
		var n = t.getBits(), r = this.extractBits(n), i = this.correctBits(r), a = new Ae(e.convertBoolArrayToByteArray(i), e.getEncodedData(i), null, null);
		return a.setNumBits(i.length), a;
	}, e.highLevelDecode = function(e) {
		return this.getEncodedData(e);
	}, e.getEncodedData = function(t) {
		for (var n = t.length, r = He.UPPER, i = He.UPPER, a = "", o = 0; o < n;) if (i === He.BINARY) {
			if (n - o < 5) break;
			var s = e.readCode(t, o, 5);
			if (o += 5, s === 0) {
				if (n - o < 11) break;
				s = e.readCode(t, o, 11) + 31, o += 11;
			}
			for (var c = 0; c < s; c++) {
				if (n - o < 8) {
					o = n;
					break;
				}
				var l = e.readCode(t, o, 8);
				a += P.castAsNonUtf8Char(l), o += 8;
			}
			i = r;
		} else {
			var u = i === He.DIGIT ? 4 : 5;
			if (n - o < u) break;
			var l = e.readCode(t, o, u);
			o += u;
			var d = e.getCharacter(i, l);
			d.startsWith("CTRL_") ? (r = i, i = e.getTable(d.charAt(5)), d.charAt(6) === "L" && (r = i)) : (a += d, i = r);
		}
		return a;
	}, e.getTable = function(e) {
		switch (e) {
			case "L": return He.LOWER;
			case "P": return He.PUNCT;
			case "M": return He.MIXED;
			case "D": return He.DIGIT;
			case "B": return He.BINARY;
			default: return He.UPPER;
		}
	}, e.getCharacter = function(t, n) {
		switch (t) {
			case He.UPPER: return e.UPPER_TABLE[n];
			case He.LOWER: return e.LOWER_TABLE[n];
			case He.MIXED: return e.MIXED_TABLE[n];
			case He.PUNCT: return e.PUNCT_TABLE[n];
			case He.DIGIT: return e.DIGIT_TABLE[n];
			default: throw new Be("Bad table");
		}
	}, e.prototype.correctBits = function(t) {
		var n, r;
		this.ddata.getNbLayers() <= 2 ? (r = 6, n = Ie.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (r = 8, n = Ie.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (r = 10, n = Ie.AZTEC_DATA_10) : (r = 12, n = Ie.AZTEC_DATA_12);
		var i = this.ddata.getNbDatablocks(), a = t.length / r;
		if (a < i) throw new M();
		for (var o = t.length % r, s = new Int32Array(a), c = 0; c < a; c++, o += r) s[c] = e.readCode(t, o, r);
		try {
			new Ve(n).decode(s, a - i);
		} catch (e) {
			throw new M(e);
		}
		for (var l = (1 << r) - 1, u = 0, c = 0; c < i; c++) {
			var d = s[c];
			if (d === 0 || d === l) throw new M();
			(d === 1 || d === l - 1) && u++;
		}
		for (var f = Array(i * r - u), p = 0, c = 0; c < i; c++) {
			var d = s[c];
			if (d === 1 || d === l - 1) f.fill(d > 1, p, p + r - 1), p += r - 1;
			else for (var m = r - 1; m >= 0; --m) f[p++] = !!(d & 1 << m);
		}
		return f;
	}, e.prototype.extractBits = function(e) {
		var t = this.ddata.isCompact(), n = this.ddata.getNbLayers(), r = (t ? 11 : 14) + n * 4, i = new Int32Array(r), a = Array(this.totalBitsInLayer(n, t));
		if (t) for (var o = 0; o < i.length; o++) i[o] = o;
		else for (var s = r + 1 + 2 * A.truncDivision(A.truncDivision(r, 2) - 1, 15), c = r / 2, l = A.truncDivision(s, 2), o = 0; o < c; o++) {
			var u = o + A.truncDivision(o, 15);
			i[c - o - 1] = l - u - 1, i[c + o] = l + u + 1;
		}
		for (var o = 0, d = 0; o < n; o++) {
			for (var f = (n - o) * 4 + (t ? 9 : 12), p = o * 2, m = r - 1 - p, h = 0; h < f; h++) for (var g = h * 2, _ = 0; _ < 2; _++) a[d + g + _] = e.get(i[p + _], i[p + h]), a[d + 2 * f + g + _] = e.get(i[p + h], i[m - _]), a[d + 4 * f + g + _] = e.get(i[m - _], i[m - h]), a[d + 6 * f + g + _] = e.get(i[m - h], i[p + _]);
			d += f * 8;
		}
		return a;
	}, e.readCode = function(e, t, n) {
		for (var r = 0, i = t; i < t + n; i++) r <<= 1, e[i] && (r |= 1);
		return r;
	}, e.readByte = function(t, n) {
		var r = t.length - n;
		return r >= 8 ? e.readCode(t, n, 8) : e.readCode(t, n, r) << 8 - r;
	}, e.convertBoolArrayToByteArray = function(t) {
		for (var n = new Uint8Array((t.length + 7) / 8), r = 0; r < n.length; r++) n[r] = e.readByte(t, 8 * r);
		return n;
	}, e.prototype.totalBitsInLayer = function(e, t) {
		return ((t ? 88 : 112) + 16 * e) * e;
	}, e.UPPER_TABLE = /* @__PURE__ */ "CTRL_PS. .A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.CTRL_LL.CTRL_ML.CTRL_DL.CTRL_BS".split("."), e.LOWER_TABLE = /* @__PURE__ */ "CTRL_PS. .a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.CTRL_US.CTRL_ML.CTRL_DL.CTRL_BS".split("."), e.MIXED_TABLE = /* @__PURE__ */ "CTRL_PS. .......\x07.\b.	.\n.\v.\f.\r.\x1B.....@.\\.^._.`.|.~..CTRL_LL.CTRL_UL.CTRL_PL.CTRL_BS".split("."), e.PUNCT_TABLE = [
		"",
		"\r",
		"\r\n",
		". ",
		", ",
		": ",
		"!",
		"\"",
		"#",
		"$",
		"%",
		"&",
		"'",
		"(",
		")",
		"*",
		"+",
		",",
		"-",
		".",
		"/",
		":",
		";",
		"<",
		"=",
		">",
		"?",
		"[",
		"]",
		"{",
		"}",
		"CTRL_UL"
	], e.DIGIT_TABLE = [
		"CTRL_PS",
		" ",
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		",",
		".",
		"CTRL_UL",
		"CTRL_US"
	], e;
}(), R = function() {
	function e() {}
	return e.round = function(e) {
		return isNaN(e) ? 0 : e <= -(2 ** 53 - 1) ? -(2 ** 53 - 1) : e >= 2 ** 53 - 1 ? 2 ** 53 - 1 : e + (e < 0 ? -.5 : .5) | 0;
	}, e.distance = function(e, t, n, r) {
		var i = e - n, a = t - r;
		return Math.sqrt(i * i + a * a);
	}, e.sum = function(e) {
		for (var t = 0, n = 0, r = e.length; n !== r; n++) {
			var i = e[n];
			t += i;
		}
		return t;
	}, e;
}(), We = function() {
	function e() {}
	return e.floatToIntBits = function(e) {
		return e;
	}, e.MAX_VALUE = 2 ** 53 - 1, e;
}(), z = function() {
	function e(e, t) {
		this.x = e, this.y = t;
	}
	return e.prototype.getX = function() {
		return this.x;
	}, e.prototype.getY = function() {
		return this.y;
	}, e.prototype.equals = function(t) {
		if (t instanceof e) {
			var n = t;
			return this.x === n.x && this.y === n.y;
		}
		return !1;
	}, e.prototype.hashCode = function() {
		return 31 * We.floatToIntBits(this.x) + We.floatToIntBits(this.y);
	}, e.prototype.toString = function() {
		return "(" + this.x + "," + this.y + ")";
	}, e.orderBestPatterns = function(e) {
		var t = this.distance(e[0], e[1]), n = this.distance(e[1], e[2]), r = this.distance(e[0], e[2]), i, a, o;
		if (n >= t && n >= r ? (a = e[0], i = e[1], o = e[2]) : r >= n && r >= t ? (a = e[1], i = e[0], o = e[2]) : (a = e[2], i = e[0], o = e[1]), this.crossProductZ(i, a, o) < 0) {
			var s = i;
			i = o, o = s;
		}
		e[0] = i, e[1] = a, e[2] = o;
	}, e.distance = function(e, t) {
		return R.distance(e.x, e.y, t.x, t.y);
	}, e.crossProductZ = function(e, t, n) {
		var r = t.x, i = t.y;
		return (n.x - r) * (e.y - i) - (n.y - i) * (e.x - r);
	}, e;
}(), Ge = function() {
	function e(e, t) {
		this.bits = e, this.points = t;
	}
	return e.prototype.getBits = function() {
		return this.bits;
	}, e.prototype.getPoints = function() {
		return this.points;
	}, e;
}(), Ke = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), qe = function(e) {
	Ke(t, e);
	function t(t, n, r, i, a) {
		var o = e.call(this, t, n) || this;
		return o.compact = r, o.nbDatablocks = i, o.nbLayers = a, o;
	}
	return t.prototype.getNbLayers = function() {
		return this.nbLayers;
	}, t.prototype.getNbDatablocks = function() {
		return this.nbDatablocks;
	}, t.prototype.isCompact = function() {
		return this.compact;
	}, t;
}(Ge), Je = function() {
	function e(t, n, r, i) {
		this.image = t, this.height = t.getHeight(), this.width = t.getWidth(), n ??= e.INIT_SIZE, r ??= t.getWidth() / 2 | 0, i ??= t.getHeight() / 2 | 0;
		var a = n / 2 | 0;
		if (this.leftInit = r - a, this.rightInit = r + a, this.upInit = i - a, this.downInit = i + a, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) throw new I();
	}
	return e.prototype.detect = function() {
		for (var e = this.leftInit, t = this.rightInit, n = this.upInit, r = this.downInit, i = !1, a = !0, o = !1, s = !1, c = !1, l = !1, u = !1, d = this.width, f = this.height; a;) {
			a = !1;
			for (var p = !0; (p || !s) && t < d;) p = this.containsBlackPoint(n, r, t, !1), p ? (t++, a = !0, s = !0) : s || t++;
			if (t >= d) {
				i = !0;
				break;
			}
			for (var m = !0; (m || !c) && r < f;) m = this.containsBlackPoint(e, t, r, !0), m ? (r++, a = !0, c = !0) : c || r++;
			if (r >= f) {
				i = !0;
				break;
			}
			for (var h = !0; (h || !l) && e >= 0;) h = this.containsBlackPoint(n, r, e, !1), h ? (e--, a = !0, l = !0) : l || e--;
			if (e < 0) {
				i = !0;
				break;
			}
			for (var g = !0; (g || !u) && n >= 0;) g = this.containsBlackPoint(e, t, n, !0), g ? (n--, a = !0, u = !0) : u || n--;
			if (n < 0) {
				i = !0;
				break;
			}
			a && (o = !0);
		}
		if (!i && o) {
			for (var _ = t - e, v = null, y = 1; v === null && y < _; y++) v = this.getBlackPointOnSegment(e, r - y, e + y, r);
			if (v == null) throw new I();
			for (var b = null, y = 1; b === null && y < _; y++) b = this.getBlackPointOnSegment(e, n + y, e + y, n);
			if (b == null) throw new I();
			for (var x = null, y = 1; x === null && y < _; y++) x = this.getBlackPointOnSegment(t, n + y, t - y, n);
			if (x == null) throw new I();
			for (var S = null, y = 1; S === null && y < _; y++) S = this.getBlackPointOnSegment(t, r - y, t - y, r);
			if (S == null) throw new I();
			return this.centerEdges(S, v, x, b);
		}
		throw new I();
	}, e.prototype.getBlackPointOnSegment = function(e, t, n, r) {
		for (var i = R.round(R.distance(e, t, n, r)), a = (n - e) / i, o = (r - t) / i, s = this.image, c = 0; c < i; c++) {
			var l = R.round(e + c * a), u = R.round(t + c * o);
			if (s.get(l, u)) return new z(l, u);
		}
		return null;
	}, e.prototype.centerEdges = function(t, n, r, i) {
		var a = t.getX(), o = t.getY(), s = n.getX(), c = n.getY(), l = r.getX(), u = r.getY(), d = i.getX(), f = i.getY(), p = e.CORR;
		return a < this.width / 2 ? [
			new z(d - p, f + p),
			new z(s + p, c + p),
			new z(l - p, u - p),
			new z(a + p, o - p)
		] : [
			new z(d + p, f + p),
			new z(s + p, c - p),
			new z(l - p, u + p),
			new z(a - p, o - p)
		];
	}, e.prototype.containsBlackPoint = function(e, t, n, r) {
		var i = this.image;
		if (r) {
			for (var a = e; a <= t; a++) if (i.get(a, n)) return !0;
		} else for (var o = e; o <= t; o++) if (i.get(n, o)) return !0;
		return !1;
	}, e.INIT_SIZE = 10, e.CORR = 1, e;
}(), Ye = function() {
	function e() {}
	return e.checkAndNudgePoints = function(e, t) {
		for (var n = e.getWidth(), r = e.getHeight(), i = !0, a = 0; a < t.length && i; a += 2) {
			var o = Math.floor(t[a]), s = Math.floor(t[a + 1]);
			if (o < -1 || o > n || s < -1 || s > r) throw new I();
			i = !1, o === -1 ? (t[a] = 0, i = !0) : o === n && (t[a] = n - 1, i = !0), s === -1 ? (t[a + 1] = 0, i = !0) : s === r && (t[a + 1] = r - 1, i = !0);
		}
		i = !0;
		for (var a = t.length - 2; a >= 0 && i; a -= 2) {
			var o = Math.floor(t[a]), s = Math.floor(t[a + 1]);
			if (o < -1 || o > n || s < -1 || s > r) throw new I();
			i = !1, o === -1 ? (t[a] = 0, i = !0) : o === n && (t[a] = n - 1, i = !0), s === -1 ? (t[a + 1] = 0, i = !0) : s === r && (t[a + 1] = r - 1, i = !0);
		}
	}, e;
}(), Xe = function() {
	function e(e, t, n, r, i, a, o, s, c) {
		this.a11 = e, this.a21 = t, this.a31 = n, this.a12 = r, this.a22 = i, this.a32 = a, this.a13 = o, this.a23 = s, this.a33 = c;
	}
	return e.quadrilateralToQuadrilateral = function(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
		var _ = e.quadrilateralToSquare(t, n, r, i, a, o, s, c);
		return e.squareToQuadrilateral(l, u, d, f, p, m, h, g).times(_);
	}, e.prototype.transformPoints = function(e) {
		for (var t = e.length, n = this.a11, r = this.a12, i = this.a13, a = this.a21, o = this.a22, s = this.a23, c = this.a31, l = this.a32, u = this.a33, d = 0; d < t; d += 2) {
			var f = e[d], p = e[d + 1], m = i * f + s * p + u;
			e[d] = (n * f + a * p + c) / m, e[d + 1] = (r * f + o * p + l) / m;
		}
	}, e.prototype.transformPointsWithValues = function(e, t) {
		for (var n = this.a11, r = this.a12, i = this.a13, a = this.a21, o = this.a22, s = this.a23, c = this.a31, l = this.a32, u = this.a33, d = e.length, f = 0; f < d; f++) {
			var p = e[f], m = t[f], h = i * p + s * m + u;
			e[f] = (n * p + a * m + c) / h, t[f] = (r * p + o * m + l) / h;
		}
	}, e.squareToQuadrilateral = function(t, n, r, i, a, o, s, c) {
		var l = t - r + a - s, u = n - i + o - c;
		if (l === 0 && u === 0) return new e(r - t, a - r, t, i - n, o - i, n, 0, 0, 1);
		var d = r - a, f = s - a, p = i - o, m = c - o, h = d * m - f * p, g = (l * m - f * u) / h, _ = (d * u - l * p) / h;
		return new e(r - t + g * r, s - t + _ * s, t, i - n + g * i, c - n + _ * c, n, g, _, 1);
	}, e.quadrilateralToSquare = function(t, n, r, i, a, o, s, c) {
		return e.squareToQuadrilateral(t, n, r, i, a, o, s, c).buildAdjoint();
	}, e.prototype.buildAdjoint = function() {
		return new e(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
	}, e.prototype.times = function(t) {
		return new e(this.a11 * t.a11 + this.a21 * t.a12 + this.a31 * t.a13, this.a11 * t.a21 + this.a21 * t.a22 + this.a31 * t.a23, this.a11 * t.a31 + this.a21 * t.a32 + this.a31 * t.a33, this.a12 * t.a11 + this.a22 * t.a12 + this.a32 * t.a13, this.a12 * t.a21 + this.a22 * t.a22 + this.a32 * t.a23, this.a12 * t.a31 + this.a22 * t.a32 + this.a32 * t.a33, this.a13 * t.a11 + this.a23 * t.a12 + this.a33 * t.a13, this.a13 * t.a21 + this.a23 * t.a22 + this.a33 * t.a23, this.a13 * t.a31 + this.a23 * t.a32 + this.a33 * t.a33);
	}, e;
}(), Ze = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Qe = function(e) {
	Ze(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.sampleGrid = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
		var y = Xe.quadrilateralToQuadrilateral(r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v);
		return this.sampleGridWithTransform(e, t, n, y);
	}, t.prototype.sampleGridWithTransform = function(e, t, n, r) {
		if (t <= 0 || n <= 0) throw new I();
		for (var i = new ue(t, n), a = new Float32Array(2 * t), o = 0; o < n; o++) {
			for (var s = a.length, c = o + .5, l = 0; l < s; l += 2) a[l] = l / 2 + .5, a[l + 1] = c;
			r.transformPoints(a), Ye.checkAndNudgePoints(e, a);
			try {
				for (var l = 0; l < s; l += 2) e.get(Math.floor(a[l]), Math.floor(a[l + 1])) && i.set(l / 2, o);
			} catch {
				throw new I();
			}
		}
		return i;
	}, t;
}(Ye), $e = function() {
	function e() {}
	return e.setGridSampler = function(t) {
		e.gridSampler = t;
	}, e.getInstance = function() {
		return e.gridSampler;
	}, e.gridSampler = new Qe(), e;
}(), et = function() {
	function e(e, t) {
		this.x = e, this.y = t;
	}
	return e.prototype.toResultPoint = function() {
		return new z(this.getX(), this.getY());
	}, e.prototype.getX = function() {
		return this.x;
	}, e.prototype.getY = function() {
		return this.y;
	}, e;
}(), tt = function() {
	function e(e) {
		this.EXPECTED_CORNER_BITS = new Int32Array([
			3808,
			476,
			2107,
			1799
		]), this.image = e;
	}
	return e.prototype.detect = function() {
		return this.detectMirror(!1);
	}, e.prototype.detectMirror = function(e) {
		var t = this.getMatrixCenter(), n = this.getBullsEyeCorners(t);
		if (e) {
			var r = n[0];
			n[0] = n[2], n[2] = r;
		}
		return this.extractParameters(n), new qe(this.sampleGrid(this.image, n[this.shift % 4], n[(this.shift + 1) % 4], n[(this.shift + 2) % 4], n[(this.shift + 3) % 4]), this.getMatrixCornerPoints(n), this.compact, this.nbDataBlocks, this.nbLayers);
	}, e.prototype.extractParameters = function(e) {
		if (!this.isValidPoint(e[0]) || !this.isValidPoint(e[1]) || !this.isValidPoint(e[2]) || !this.isValidPoint(e[3])) throw new I();
		var t = 2 * this.nbCenterLayers, n = new Int32Array([
			this.sampleLine(e[0], e[1], t),
			this.sampleLine(e[1], e[2], t),
			this.sampleLine(e[2], e[3], t),
			this.sampleLine(e[3], e[0], t)
		]);
		this.shift = this.getRotation(n, t);
		for (var r = 0, i = 0; i < 4; i++) {
			var a = n[(this.shift + i) % 4];
			this.compact ? (r <<= 7, r += a >> 1 & 127) : (r <<= 10, r += (a >> 2 & 992) + (a >> 1 & 31));
		}
		var o = this.getCorrectedParameterData(r, this.compact);
		this.compact ? (this.nbLayers = (o >> 6) + 1, this.nbDataBlocks = (o & 63) + 1) : (this.nbLayers = (o >> 11) + 1, this.nbDataBlocks = (o & 2047) + 1);
	}, e.prototype.getRotation = function(e, t) {
		var n = 0;
		e.forEach(function(e, r, i) {
			var a = (e >> t - 2 << 1) + (e & 1);
			n = (n << 3) + a;
		}), n = ((n & 1) << 11) + (n >> 1);
		for (var r = 0; r < 4; r++) if (A.bitCount(n ^ this.EXPECTED_CORNER_BITS[r]) <= 2) return r;
		throw new I();
	}, e.prototype.getCorrectedParameterData = function(e, t) {
		var n, r;
		t ? (n = 7, r = 2) : (n = 10, r = 4);
		for (var i = n - r, a = new Int32Array(n), o = n - 1; o >= 0; --o) a[o] = e & 15, e >>= 4;
		try {
			new Ve(Ie.AZTEC_PARAM).decode(a, i);
		} catch {
			throw new I();
		}
		for (var s = 0, o = 0; o < r; o++) s = (s << 4) + a[o];
		return s;
	}, e.prototype.getBullsEyeCorners = function(e) {
		var t = e, n = e, r = e, i = e, a = !0;
		for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
			var o = this.getFirstDifferent(t, a, 1, -1), s = this.getFirstDifferent(n, a, 1, 1), c = this.getFirstDifferent(r, a, -1, 1), l = this.getFirstDifferent(i, a, -1, -1);
			if (this.nbCenterLayers > 2) {
				var u = this.distancePoint(l, o) * this.nbCenterLayers / (this.distancePoint(i, t) * (this.nbCenterLayers + 2));
				if (u < .75 || u > 1.25 || !this.isWhiteOrBlackRectangle(o, s, c, l)) break;
			}
			t = o, n = s, r = c, i = l, a = !a;
		}
		if (this.nbCenterLayers !== 5 && this.nbCenterLayers !== 7) throw new I();
		this.compact = this.nbCenterLayers === 5;
		var d = new z(t.getX() + .5, t.getY() - .5), f = new z(n.getX() + .5, n.getY() + .5), p = new z(r.getX() - .5, r.getY() + .5), m = new z(i.getX() - .5, i.getY() - .5);
		return this.expandSquare([
			d,
			f,
			p,
			m
		], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
	}, e.prototype.getMatrixCenter = function() {
		var e, t, n, r;
		try {
			var i = new Je(this.image).detect();
			e = i[0], t = i[1], n = i[2], r = i[3];
		} catch {
			var a = this.image.getWidth() / 2, o = this.image.getHeight() / 2;
			e = this.getFirstDifferent(new et(a + 7, o - 7), !1, 1, -1).toResultPoint(), t = this.getFirstDifferent(new et(a + 7, o + 7), !1, 1, 1).toResultPoint(), n = this.getFirstDifferent(new et(a - 7, o + 7), !1, -1, 1).toResultPoint(), r = this.getFirstDifferent(new et(a - 7, o - 7), !1, -1, -1).toResultPoint();
		}
		var s = R.round((e.getX() + r.getX() + t.getX() + n.getX()) / 4), c = R.round((e.getY() + r.getY() + t.getY() + n.getY()) / 4);
		try {
			var i = new Je(this.image, 15, s, c).detect();
			e = i[0], t = i[1], n = i[2], r = i[3];
		} catch {
			e = this.getFirstDifferent(new et(s + 7, c - 7), !1, 1, -1).toResultPoint(), t = this.getFirstDifferent(new et(s + 7, c + 7), !1, 1, 1).toResultPoint(), n = this.getFirstDifferent(new et(s - 7, c + 7), !1, -1, 1).toResultPoint(), r = this.getFirstDifferent(new et(s - 7, c - 7), !1, -1, -1).toResultPoint();
		}
		return s = R.round((e.getX() + r.getX() + t.getX() + n.getX()) / 4), c = R.round((e.getY() + r.getY() + t.getY() + n.getY()) / 4), new et(s, c);
	}, e.prototype.getMatrixCornerPoints = function(e) {
		return this.expandSquare(e, 2 * this.nbCenterLayers, this.getDimension());
	}, e.prototype.sampleGrid = function(e, t, n, r, i) {
		var a = $e.getInstance(), o = this.getDimension(), s = o / 2 - this.nbCenterLayers, c = o / 2 + this.nbCenterLayers;
		return a.sampleGrid(e, o, o, s, s, c, s, c, c, s, c, t.getX(), t.getY(), n.getX(), n.getY(), r.getX(), r.getY(), i.getX(), i.getY());
	}, e.prototype.sampleLine = function(e, t, n) {
		for (var r = 0, i = this.distanceResultPoint(e, t), a = i / n, o = e.getX(), s = e.getY(), c = a * (t.getX() - e.getX()) / i, l = a * (t.getY() - e.getY()) / i, u = 0; u < n; u++) this.image.get(R.round(o + u * c), R.round(s + u * l)) && (r |= 1 << n - u - 1);
		return r;
	}, e.prototype.isWhiteOrBlackRectangle = function(e, t, n, r) {
		var i = 3;
		e = new et(e.getX() - i, e.getY() + i), t = new et(t.getX() - i, t.getY() - i), n = new et(n.getX() + i, n.getY() - i), r = new et(r.getX() + i, r.getY() + i);
		var a = this.getColor(r, e);
		if (a === 0) return !1;
		var o = this.getColor(e, t);
		return o !== a || (o = this.getColor(t, n), o !== a) ? !1 : (o = this.getColor(n, r), o === a);
	}, e.prototype.getColor = function(e, t) {
		for (var n = this.distancePoint(e, t), r = (t.getX() - e.getX()) / n, i = (t.getY() - e.getY()) / n, a = 0, o = e.getX(), s = e.getY(), c = this.image.get(e.getX(), e.getY()), l = Math.ceil(n), u = 0; u < l; u++) o += r, s += i, this.image.get(R.round(o), R.round(s)) !== c && a++;
		var d = a / n;
		return d > .1 && d < .9 ? 0 : d <= .1 === c ? 1 : -1;
	}, e.prototype.getFirstDifferent = function(e, t, n, r) {
		for (var i = e.getX() + n, a = e.getY() + r; this.isValid(i, a) && this.image.get(i, a) === t;) i += n, a += r;
		for (i -= n, a -= r; this.isValid(i, a) && this.image.get(i, a) === t;) i += n;
		for (i -= n; this.isValid(i, a) && this.image.get(i, a) === t;) a += r;
		return a -= r, new et(i, a);
	}, e.prototype.expandSquare = function(e, t, n) {
		var r = n / (2 * t), i = e[0].getX() - e[2].getX(), a = e[0].getY() - e[2].getY(), o = (e[0].getX() + e[2].getX()) / 2, s = (e[0].getY() + e[2].getY()) / 2, c = new z(o + r * i, s + r * a), l = new z(o - r * i, s - r * a);
		return i = e[1].getX() - e[3].getX(), a = e[1].getY() - e[3].getY(), o = (e[1].getX() + e[3].getX()) / 2, s = (e[1].getY() + e[3].getY()) / 2, [
			c,
			new z(o + r * i, s + r * a),
			l,
			new z(o - r * i, s - r * a)
		];
	}, e.prototype.isValid = function(e, t) {
		return e >= 0 && e < this.image.getWidth() && t > 0 && t < this.image.getHeight();
	}, e.prototype.isValidPoint = function(e) {
		var t = R.round(e.getX()), n = R.round(e.getY());
		return this.isValid(t, n);
	}, e.prototype.distancePoint = function(e, t) {
		return R.distance(e.getX(), e.getY(), t.getX(), t.getY());
	}, e.prototype.distanceResultPoint = function(e, t) {
		return R.distance(e.getX(), e.getY(), t.getX(), t.getY());
	}, e.prototype.getDimension = function() {
		return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (A.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
	}, e;
}(), nt = function() {
	function e() {}
	return e.prototype.decode = function(e, t) {
		t === void 0 && (t = null);
		var n = null, r = new tt(e.getBlackMatrix()), i = null, a = null;
		try {
			var o = r.detectMirror(!1);
			i = o.getPoints(), this.reportFoundResultPoints(t, i), a = new Ue().decode(o);
		} catch (e) {
			n = e;
		}
		if (a == null) try {
			var o = r.detectMirror(!0);
			i = o.getPoints(), this.reportFoundResultPoints(t, i), a = new Ue().decode(o);
		} catch (e) {
			throw n ?? e;
		}
		var s = new Ee(a.getText(), a.getRawBytes(), a.getNumBits(), i, L.AZTEC, T.currentTimeMillis()), c = a.getByteSegments();
		c != null && s.putMetadata(ke.BYTE_SEGMENTS, c);
		var l = a.getECLevel();
		return l != null && s.putMetadata(ke.ERROR_CORRECTION_LEVEL, l), s;
	}, e.prototype.reportFoundResultPoints = function(e, t) {
		if (e != null) {
			var n = e.get(j.NEED_RESULT_POINT_CALLBACK);
			n != null && t.forEach(function(e, t, r) {
				n.foundPossibleResultPoint(e);
			});
		}
	}, e.prototype.reset = function() {}, e;
}(), rt = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	rt(t, e);
	function t(t) {
		return t === void 0 && (t = 500), e.call(this, new nt(), t) || this;
	}
	return t;
})(Te);
// node_modules/@zxing/library/esm/core/oned/OneDReader.js
var it = function() {
	function e() {}
	return e.prototype.decode = function(e, t) {
		try {
			return this.doDecode(e, t);
		} catch {
			if (t && t.get(j.TRY_HARDER) === !0 && e.isRotateSupported()) {
				var n = e.rotateCounterClockwise(), r = this.doDecode(n, t), i = r.getResultMetadata(), a = 270;
				i !== null && i.get(ke.ORIENTATION) === !0 && (a += i.get(ke.ORIENTATION) % 360), r.putMetadata(ke.ORIENTATION, a);
				var o = r.getResultPoints();
				if (o !== null) for (var s = n.getHeight(), c = 0; c < o.length; c++) o[c] = new z(s - o[c].getY() - 1, o[c].getX());
				return r;
			}
			throw new I();
		}
	}, e.prototype.reset = function() {}, e.prototype.doDecode = function(e, t) {
		for (var n = e.getWidth(), r = e.getHeight(), i = new ne(n), a = t && t.get(j.TRY_HARDER) === !0, o = Math.max(1, r >> (a ? 8 : 5)), s = a ? r : 15, c = Math.trunc(r / 2), l = 0; l < s; l++) {
			var u = Math.trunc((l + 1) / 2), d = c + o * (l & 1 ? -u : u);
			if (d < 0 || d >= r) break;
			try {
				i = e.getBlackRow(d, i);
			} catch {
				continue;
			}
			for (var f = function(e) {
				if (e === 1 && (i.reverse(), t && t.get(j.NEED_RESULT_POINT_CALLBACK) === !0)) {
					var r = /* @__PURE__ */ new Map();
					t.forEach(function(e, t) {
						return r.set(t, e);
					}), r.delete(j.NEED_RESULT_POINT_CALLBACK), t = r;
				}
				try {
					var a = p.decodeRow(d, i, t);
					if (e === 1) {
						a.putMetadata(ke.ORIENTATION, 180);
						var o = a.getResultPoints();
						o !== null && (o[0] = new z(n - o[0].getX() - 1, o[0].getY()), o[1] = new z(n - o[1].getX() - 1, o[1].getY()));
					}
					return { value: a };
				} catch {}
			}, p = this, m = 0; m < 2; m++) {
				var h = f(m);
				if (typeof h == "object") return h.value;
			}
		}
		throw new I();
	}, e.recordPattern = function(e, t, n) {
		for (var r = n.length, i = 0; i < r; i++) n[i] = 0;
		var a = e.getSize();
		if (t >= a) throw new I();
		for (var o = !e.get(t), s = 0, c = t; c < a;) {
			if (e.get(c) !== o) n[s]++;
			else if (++s === r) break;
			else n[s] = 1, o = !o;
			c++;
		}
		if (!(s === r || s === r - 1 && c === a)) throw new I();
	}, e.recordPatternInReverse = function(t, n, r) {
		for (var i = r.length, a = t.get(n); n > 0 && i >= 0;) t.get(--n) !== a && (i--, a = !a);
		if (i >= 0) throw new I();
		e.recordPattern(t, n + 1, r);
	}, e.patternMatchVariance = function(e, t, n) {
		for (var r = e.length, i = 0, a = 0, o = 0; o < r; o++) i += e[o], a += t[o];
		if (i < a) return Infinity;
		var s = i / a;
		n *= s;
		for (var c = 0, l = 0; l < r; l++) {
			var u = e[l], d = t[l] * s, f = u > d ? u - d : d - u;
			if (f > n) return Infinity;
			c += f;
		}
		return c / i;
	}, e;
}(), at = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), ot = function(e) {
	at(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.findStartPattern = function(e) {
		for (var n = e.getSize(), r = e.getNextSet(0), i = 0, a = Int32Array.from([
			0,
			0,
			0,
			0,
			0,
			0
		]), o = r, s = !1, c = 6, l = r; l < n; l++) if (e.get(l) !== s) a[i]++;
		else {
			if (i === c - 1) {
				for (var u = t.MAX_AVG_VARIANCE, d = -1, f = t.CODE_START_A; f <= t.CODE_START_C; f++) {
					var p = it.patternMatchVariance(a, t.CODE_PATTERNS[f], t.MAX_INDIVIDUAL_VARIANCE);
					p < u && (u = p, d = f);
				}
				if (d >= 0 && e.isRange(Math.max(0, o - (l - o) / 2), o, !1)) return Int32Array.from([
					o,
					l,
					d
				]);
				o += a[0] + a[1], a = a.slice(2, a.length), a[i - 1] = 0, a[i] = 0, i--;
			} else i++;
			a[i] = 1, s = !s;
		}
		throw new I();
	}, t.decodeCode = function(e, n, r) {
		it.recordPattern(e, r, n);
		for (var i = t.MAX_AVG_VARIANCE, a = -1, o = 0; o < t.CODE_PATTERNS.length; o++) {
			var s = t.CODE_PATTERNS[o], c = this.patternMatchVariance(n, s, t.MAX_INDIVIDUAL_VARIANCE);
			c < i && (i = c, a = o);
		}
		if (a >= 0) return a;
		throw new I();
	}, t.prototype.decodeRow = function(e, n, r) {
		var i = r && r.get(j.ASSUME_GS1) === !0, a = t.findStartPattern(n), o = a[2], s = 0, c = /* @__PURE__ */ new Uint8Array(20);
		c[s++] = o;
		var l;
		switch (o) {
			case t.CODE_START_A:
				l = t.CODE_CODE_A;
				break;
			case t.CODE_START_B:
				l = t.CODE_CODE_B;
				break;
			case t.CODE_START_C:
				l = t.CODE_CODE_C;
				break;
			default: throw new M();
		}
		for (var u = !1, d = !1, f = "", p = a[0], m = a[1], h = Int32Array.from([
			0,
			0,
			0,
			0,
			0,
			0
		]), g = 0, _ = 0, v = o, y = 0, b = !0, x = !1, S = !1; !u;) {
			var w = d;
			switch (d = !1, g = _, _ = t.decodeCode(n, h, m), c[s++] = _, _ !== t.CODE_STOP && (b = !0), _ !== t.CODE_STOP && (y++, v += y * _), p = m, m += h.reduce(function(e, t) {
				return e + t;
			}, 0), _) {
				case t.CODE_START_A:
				case t.CODE_START_B:
				case t.CODE_START_C: throw new M();
			}
			switch (l) {
				case t.CODE_CODE_A:
					if (_ < 64) f += S === x ? String.fromCharCode(32 + _) : String.fromCharCode(32 + _ + 128), S = !1;
					else if (_ < 96) f += S === x ? String.fromCharCode(_ - 64) : String.fromCharCode(_ + 64), S = !1;
					else switch (_ !== t.CODE_STOP && (b = !1), _) {
						case t.CODE_FNC_1:
							i && (f.length === 0 ? f += "]C1" : f += "");
							break;
						case t.CODE_FNC_2:
						case t.CODE_FNC_3: break;
						case t.CODE_FNC_4_A:
							!x && S ? (x = !0, S = !1) : x && S ? (x = !1, S = !1) : S = !0;
							break;
						case t.CODE_SHIFT:
							d = !0, l = t.CODE_CODE_B;
							break;
						case t.CODE_CODE_B:
							l = t.CODE_CODE_B;
							break;
						case t.CODE_CODE_C:
							l = t.CODE_CODE_C;
							break;
						case t.CODE_STOP: u = !0;
					}
					break;
				case t.CODE_CODE_B:
					if (_ < 96) f += S === x ? String.fromCharCode(32 + _) : String.fromCharCode(32 + _ + 128), S = !1;
					else switch (_ !== t.CODE_STOP && (b = !1), _) {
						case t.CODE_FNC_1:
							i && (f.length === 0 ? f += "]C1" : f += "");
							break;
						case t.CODE_FNC_2:
						case t.CODE_FNC_3: break;
						case t.CODE_FNC_4_B:
							!x && S ? (x = !0, S = !1) : x && S ? (x = !1, S = !1) : S = !0;
							break;
						case t.CODE_SHIFT:
							d = !0, l = t.CODE_CODE_A;
							break;
						case t.CODE_CODE_A:
							l = t.CODE_CODE_A;
							break;
						case t.CODE_CODE_C:
							l = t.CODE_CODE_C;
							break;
						case t.CODE_STOP: u = !0;
					}
					break;
				case t.CODE_CODE_C: if (_ < 100) _ < 10 && (f += "0"), f += _;
				else switch (_ !== t.CODE_STOP && (b = !1), _) {
					case t.CODE_FNC_1:
						i && (f.length === 0 ? f += "]C1" : f += "");
						break;
					case t.CODE_CODE_A:
						l = t.CODE_CODE_A;
						break;
					case t.CODE_CODE_B:
						l = t.CODE_CODE_B;
						break;
					case t.CODE_STOP: u = !0;
				}
			}
			w && (l = l === t.CODE_CODE_A ? t.CODE_CODE_B : t.CODE_CODE_A);
		}
		var T = m - p;
		if (m = n.getNextUnset(m), !n.isRange(m, Math.min(n.getSize(), m + (m - p) / 2), !1)) throw new I();
		if (v -= y * g, v % 103 !== g) throw new C();
		var E = f.length;
		if (E === 0) throw new I();
		E > 0 && b && (f = l === t.CODE_CODE_C ? f.substring(0, E - 2) : f.substring(0, E - 1));
		for (var D = (a[1] + a[0]) / 2, ee = p + T / 2, O = c.length, te = new Uint8Array(O), k = 0; k < O; k++) te[k] = c[k];
		var A = [new z(D, e), new z(ee, e)];
		return new Ee(f, te, 0, A, L.CODE_128, (/* @__PURE__ */ new Date()).getTime());
	}, t.CODE_PATTERNS = [
		Int32Array.from([
			2,
			1,
			2,
			2,
			2,
			2
		]),
		Int32Array.from([
			2,
			2,
			2,
			1,
			2,
			2
		]),
		Int32Array.from([
			2,
			2,
			2,
			2,
			2,
			1
		]),
		Int32Array.from([
			1,
			2,
			1,
			2,
			2,
			3
		]),
		Int32Array.from([
			1,
			2,
			1,
			3,
			2,
			2
		]),
		Int32Array.from([
			1,
			3,
			1,
			2,
			2,
			2
		]),
		Int32Array.from([
			1,
			2,
			2,
			2,
			1,
			3
		]),
		Int32Array.from([
			1,
			2,
			2,
			3,
			1,
			2
		]),
		Int32Array.from([
			1,
			3,
			2,
			2,
			1,
			2
		]),
		Int32Array.from([
			2,
			2,
			1,
			2,
			1,
			3
		]),
		Int32Array.from([
			2,
			2,
			1,
			3,
			1,
			2
		]),
		Int32Array.from([
			2,
			3,
			1,
			2,
			1,
			2
		]),
		Int32Array.from([
			1,
			1,
			2,
			2,
			3,
			2
		]),
		Int32Array.from([
			1,
			2,
			2,
			1,
			3,
			2
		]),
		Int32Array.from([
			1,
			2,
			2,
			2,
			3,
			1
		]),
		Int32Array.from([
			1,
			1,
			3,
			2,
			2,
			2
		]),
		Int32Array.from([
			1,
			2,
			3,
			1,
			2,
			2
		]),
		Int32Array.from([
			1,
			2,
			3,
			2,
			2,
			1
		]),
		Int32Array.from([
			2,
			2,
			3,
			2,
			1,
			1
		]),
		Int32Array.from([
			2,
			2,
			1,
			1,
			3,
			2
		]),
		Int32Array.from([
			2,
			2,
			1,
			2,
			3,
			1
		]),
		Int32Array.from([
			2,
			1,
			3,
			2,
			1,
			2
		]),
		Int32Array.from([
			2,
			2,
			3,
			1,
			1,
			2
		]),
		Int32Array.from([
			3,
			1,
			2,
			1,
			3,
			1
		]),
		Int32Array.from([
			3,
			1,
			1,
			2,
			2,
			2
		]),
		Int32Array.from([
			3,
			2,
			1,
			1,
			2,
			2
		]),
		Int32Array.from([
			3,
			2,
			1,
			2,
			2,
			1
		]),
		Int32Array.from([
			3,
			1,
			2,
			2,
			1,
			2
		]),
		Int32Array.from([
			3,
			2,
			2,
			1,
			1,
			2
		]),
		Int32Array.from([
			3,
			2,
			2,
			2,
			1,
			1
		]),
		Int32Array.from([
			2,
			1,
			2,
			1,
			2,
			3
		]),
		Int32Array.from([
			2,
			1,
			2,
			3,
			2,
			1
		]),
		Int32Array.from([
			2,
			3,
			2,
			1,
			2,
			1
		]),
		Int32Array.from([
			1,
			1,
			1,
			3,
			2,
			3
		]),
		Int32Array.from([
			1,
			3,
			1,
			1,
			2,
			3
		]),
		Int32Array.from([
			1,
			3,
			1,
			3,
			2,
			1
		]),
		Int32Array.from([
			1,
			1,
			2,
			3,
			1,
			3
		]),
		Int32Array.from([
			1,
			3,
			2,
			1,
			1,
			3
		]),
		Int32Array.from([
			1,
			3,
			2,
			3,
			1,
			1
		]),
		Int32Array.from([
			2,
			1,
			1,
			3,
			1,
			3
		]),
		Int32Array.from([
			2,
			3,
			1,
			1,
			1,
			3
		]),
		Int32Array.from([
			2,
			3,
			1,
			3,
			1,
			1
		]),
		Int32Array.from([
			1,
			1,
			2,
			1,
			3,
			3
		]),
		Int32Array.from([
			1,
			1,
			2,
			3,
			3,
			1
		]),
		Int32Array.from([
			1,
			3,
			2,
			1,
			3,
			1
		]),
		Int32Array.from([
			1,
			1,
			3,
			1,
			2,
			3
		]),
		Int32Array.from([
			1,
			1,
			3,
			3,
			2,
			1
		]),
		Int32Array.from([
			1,
			3,
			3,
			1,
			2,
			1
		]),
		Int32Array.from([
			3,
			1,
			3,
			1,
			2,
			1
		]),
		Int32Array.from([
			2,
			1,
			1,
			3,
			3,
			1
		]),
		Int32Array.from([
			2,
			3,
			1,
			1,
			3,
			1
		]),
		Int32Array.from([
			2,
			1,
			3,
			1,
			1,
			3
		]),
		Int32Array.from([
			2,
			1,
			3,
			3,
			1,
			1
		]),
		Int32Array.from([
			2,
			1,
			3,
			1,
			3,
			1
		]),
		Int32Array.from([
			3,
			1,
			1,
			1,
			2,
			3
		]),
		Int32Array.from([
			3,
			1,
			1,
			3,
			2,
			1
		]),
		Int32Array.from([
			3,
			3,
			1,
			1,
			2,
			1
		]),
		Int32Array.from([
			3,
			1,
			2,
			1,
			1,
			3
		]),
		Int32Array.from([
			3,
			1,
			2,
			3,
			1,
			1
		]),
		Int32Array.from([
			3,
			3,
			2,
			1,
			1,
			1
		]),
		Int32Array.from([
			3,
			1,
			4,
			1,
			1,
			1
		]),
		Int32Array.from([
			2,
			2,
			1,
			4,
			1,
			1
		]),
		Int32Array.from([
			4,
			3,
			1,
			1,
			1,
			1
		]),
		Int32Array.from([
			1,
			1,
			1,
			2,
			2,
			4
		]),
		Int32Array.from([
			1,
			1,
			1,
			4,
			2,
			2
		]),
		Int32Array.from([
			1,
			2,
			1,
			1,
			2,
			4
		]),
		Int32Array.from([
			1,
			2,
			1,
			4,
			2,
			1
		]),
		Int32Array.from([
			1,
			4,
			1,
			1,
			2,
			2
		]),
		Int32Array.from([
			1,
			4,
			1,
			2,
			2,
			1
		]),
		Int32Array.from([
			1,
			1,
			2,
			2,
			1,
			4
		]),
		Int32Array.from([
			1,
			1,
			2,
			4,
			1,
			2
		]),
		Int32Array.from([
			1,
			2,
			2,
			1,
			1,
			4
		]),
		Int32Array.from([
			1,
			2,
			2,
			4,
			1,
			1
		]),
		Int32Array.from([
			1,
			4,
			2,
			1,
			1,
			2
		]),
		Int32Array.from([
			1,
			4,
			2,
			2,
			1,
			1
		]),
		Int32Array.from([
			2,
			4,
			1,
			2,
			1,
			1
		]),
		Int32Array.from([
			2,
			2,
			1,
			1,
			1,
			4
		]),
		Int32Array.from([
			4,
			1,
			3,
			1,
			1,
			1
		]),
		Int32Array.from([
			2,
			4,
			1,
			1,
			1,
			2
		]),
		Int32Array.from([
			1,
			3,
			4,
			1,
			1,
			1
		]),
		Int32Array.from([
			1,
			1,
			1,
			2,
			4,
			2
		]),
		Int32Array.from([
			1,
			2,
			1,
			1,
			4,
			2
		]),
		Int32Array.from([
			1,
			2,
			1,
			2,
			4,
			1
		]),
		Int32Array.from([
			1,
			1,
			4,
			2,
			1,
			2
		]),
		Int32Array.from([
			1,
			2,
			4,
			1,
			1,
			2
		]),
		Int32Array.from([
			1,
			2,
			4,
			2,
			1,
			1
		]),
		Int32Array.from([
			4,
			1,
			1,
			2,
			1,
			2
		]),
		Int32Array.from([
			4,
			2,
			1,
			1,
			1,
			2
		]),
		Int32Array.from([
			4,
			2,
			1,
			2,
			1,
			1
		]),
		Int32Array.from([
			2,
			1,
			2,
			1,
			4,
			1
		]),
		Int32Array.from([
			2,
			1,
			4,
			1,
			2,
			1
		]),
		Int32Array.from([
			4,
			1,
			2,
			1,
			2,
			1
		]),
		Int32Array.from([
			1,
			1,
			1,
			1,
			4,
			3
		]),
		Int32Array.from([
			1,
			1,
			1,
			3,
			4,
			1
		]),
		Int32Array.from([
			1,
			3,
			1,
			1,
			4,
			1
		]),
		Int32Array.from([
			1,
			1,
			4,
			1,
			1,
			3
		]),
		Int32Array.from([
			1,
			1,
			4,
			3,
			1,
			1
		]),
		Int32Array.from([
			4,
			1,
			1,
			1,
			1,
			3
		]),
		Int32Array.from([
			4,
			1,
			1,
			3,
			1,
			1
		]),
		Int32Array.from([
			1,
			1,
			3,
			1,
			4,
			1
		]),
		Int32Array.from([
			1,
			1,
			4,
			1,
			3,
			1
		]),
		Int32Array.from([
			3,
			1,
			1,
			1,
			4,
			1
		]),
		Int32Array.from([
			4,
			1,
			1,
			1,
			3,
			1
		]),
		Int32Array.from([
			2,
			1,
			1,
			4,
			1,
			2
		]),
		Int32Array.from([
			2,
			1,
			1,
			2,
			1,
			4
		]),
		Int32Array.from([
			2,
			1,
			1,
			2,
			3,
			2
		]),
		Int32Array.from([
			2,
			3,
			3,
			1,
			1,
			1,
			2
		])
	], t.MAX_AVG_VARIANCE = .25, t.MAX_INDIVIDUAL_VARIANCE = .7, t.CODE_SHIFT = 98, t.CODE_CODE_C = 99, t.CODE_CODE_B = 100, t.CODE_CODE_A = 101, t.CODE_FNC_1 = 102, t.CODE_FNC_2 = 97, t.CODE_FNC_3 = 96, t.CODE_FNC_4_A = 101, t.CODE_FNC_4_B = 100, t.CODE_START_A = 103, t.CODE_START_B = 104, t.CODE_START_C = 105, t.CODE_STOP = 106, t;
}(it), st = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), ct = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, lt = function(e) {
	st(t, e);
	function t(t, n) {
		t === void 0 && (t = !1), n === void 0 && (n = !1);
		var r = e.call(this) || this;
		return r.usingCheckDigit = t, r.extendedMode = n, r.decodeRowResult = "", r.counters = /* @__PURE__ */ new Int32Array(9), r;
	}
	return t.prototype.decodeRow = function(e, n, r) {
		var i, a, o, s, c = this.counters;
		c.fill(0), this.decodeRowResult = "";
		var l = t.findAsteriskPattern(n, c), u = n.getNextSet(l[1]), d = n.getSize(), f, p;
		do {
			t.recordPattern(n, u, c);
			var m = t.toNarrowWidePattern(c);
			if (m < 0) throw new I();
			f = t.patternToChar(m), this.decodeRowResult += f, p = u;
			try {
				for (var h = (i = void 0, ct(c)), g = h.next(); !g.done; g = h.next()) {
					var _ = g.value;
					u += _;
				}
			} catch (e) {
				i = { error: e };
			} finally {
				try {
					g && !g.done && (a = h.return) && a.call(h);
				} finally {
					if (i) throw i.error;
				}
			}
			u = n.getNextSet(u);
		} while (f !== "*");
		this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
		var v = 0;
		try {
			for (var y = ct(c), b = y.next(); !b.done; b = y.next()) {
				var _ = b.value;
				v += _;
			}
		} catch (e) {
			o = { error: e };
		} finally {
			try {
				b && !b.done && (s = y.return) && s.call(y);
			} finally {
				if (o) throw o.error;
			}
		}
		var x = u - p - v;
		if (u !== d && x * 2 < v) throw new I();
		if (this.usingCheckDigit) {
			for (var S = this.decodeRowResult.length - 1, w = 0, T = 0; T < S; T++) w += t.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(T));
			if (this.decodeRowResult.charAt(S) !== t.ALPHABET_STRING.charAt(w % 43)) throw new C();
			this.decodeRowResult = this.decodeRowResult.substring(0, S);
		}
		if (this.decodeRowResult.length === 0) throw new I();
		var E = this.extendedMode ? t.decodeExtended(this.decodeRowResult) : this.decodeRowResult, D = (l[1] + l[0]) / 2, ee = p + v / 2;
		return new Ee(E, null, 0, [new z(D, e), new z(ee, e)], L.CODE_39, (/* @__PURE__ */ new Date()).getTime());
	}, t.findAsteriskPattern = function(e, n) {
		for (var r = e.getSize(), i = e.getNextSet(0), a = 0, o = i, s = !1, c = n.length, l = i; l < r; l++) if (e.get(l) !== s) n[a]++;
		else {
			if (a === c - 1) {
				if (this.toNarrowWidePattern(n) === t.ASTERISK_ENCODING && e.isRange(Math.max(0, o - Math.floor((l - o) / 2)), o, !1)) return [o, l];
				o += n[0] + n[1], n.copyWithin(0, 2, 2 + a - 1), n[a - 1] = 0, n[a] = 0, a--;
			} else a++;
			n[a] = 1, s = !s;
		}
		throw new I();
	}, t.toNarrowWidePattern = function(e) {
		var t, n, r = e.length, i = 0, a;
		do {
			var o = 2147483647;
			try {
				for (var s = (t = void 0, ct(e)), c = s.next(); !c.done; c = s.next()) {
					var l = c.value;
					l < o && l > i && (o = l);
				}
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					c && !c.done && (n = s.return) && n.call(s);
				} finally {
					if (t) throw t.error;
				}
			}
			i = o, a = 0;
			for (var u = 0, d = 0, f = 0; f < r; f++) {
				var l = e[f];
				l > i && (d |= 1 << r - 1 - f, a++, u += l);
			}
			if (a === 3) {
				for (var f = 0; f < r && a > 0; f++) {
					var l = e[f];
					if (l > i && (a--, l * 2 >= u)) return -1;
				}
				return d;
			}
		} while (a > 3);
		return -1;
	}, t.patternToChar = function(e) {
		for (var n = 0; n < t.CHARACTER_ENCODINGS.length; n++) if (t.CHARACTER_ENCODINGS[n] === e) return t.ALPHABET_STRING.charAt(n);
		if (e === t.ASTERISK_ENCODING) return "*";
		throw new I();
	}, t.decodeExtended = function(e) {
		for (var t = e.length, n = "", r = 0; r < t; r++) {
			var i = e.charAt(r);
			if (i === "+" || i === "$" || i === "%" || i === "/") {
				var a = e.charAt(r + 1), o = "\0";
				switch (i) {
					case "+":
						if (a >= "A" && a <= "Z") o = String.fromCharCode(a.charCodeAt(0) + 32);
						else throw new M();
						break;
					case "$":
						if (a >= "A" && a <= "Z") o = String.fromCharCode(a.charCodeAt(0) - 64);
						else throw new M();
						break;
					case "%":
						if (a >= "A" && a <= "E") o = String.fromCharCode(a.charCodeAt(0) - 38);
						else if (a >= "F" && a <= "J") o = String.fromCharCode(a.charCodeAt(0) - 11);
						else if (a >= "K" && a <= "O") o = String.fromCharCode(a.charCodeAt(0) + 16);
						else if (a >= "P" && a <= "T") o = String.fromCharCode(a.charCodeAt(0) + 43);
						else if (a === "U") o = "\0";
						else if (a === "V") o = "@";
						else if (a === "W") o = "`";
						else if (a === "X" || a === "Y" || a === "Z") o = "";
						else throw new M();
						break;
					case "/": if (a >= "A" && a <= "O") o = String.fromCharCode(a.charCodeAt(0) - 32);
					else if (a === "Z") o = ":";
					else throw new M();
				}
				n += o, r++;
			} else n += i;
		}
		return n;
	}, t.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", t.CHARACTER_ENCODINGS = [
		52,
		289,
		97,
		352,
		49,
		304,
		112,
		37,
		292,
		100,
		265,
		73,
		328,
		25,
		280,
		88,
		13,
		268,
		76,
		28,
		259,
		67,
		322,
		19,
		274,
		82,
		7,
		262,
		70,
		22,
		385,
		193,
		448,
		145,
		400,
		208,
		133,
		388,
		196,
		168,
		162,
		138,
		42
	], t.ASTERISK_ENCODING = 148, t;
}(it), ut = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), dt = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ft = function(e) {
	ut(t, e);
	function t() {
		var t = e.call(this) || this;
		return t.decodeRowResult = "", t.counters = /* @__PURE__ */ new Int32Array(6), t;
	}
	return t.prototype.decodeRow = function(e, n, r) {
		var i, a, o, s, c = this.findAsteriskPattern(n), l = n.getNextSet(c[1]), u = n.getSize(), d = this.counters;
		d.fill(0), this.decodeRowResult = "";
		var f, p;
		do {
			t.recordPattern(n, l, d);
			var m = this.toPattern(d);
			if (m < 0) throw new I();
			f = this.patternToChar(m), this.decodeRowResult += f, p = l;
			try {
				for (var h = (i = void 0, dt(d)), g = h.next(); !g.done; g = h.next()) {
					var _ = g.value;
					l += _;
				}
			} catch (e) {
				i = { error: e };
			} finally {
				try {
					g && !g.done && (a = h.return) && a.call(h);
				} finally {
					if (i) throw i.error;
				}
			}
			l = n.getNextSet(l);
		} while (f !== "*");
		this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
		var v = 0;
		try {
			for (var y = dt(d), b = y.next(); !b.done; b = y.next()) {
				var _ = b.value;
				v += _;
			}
		} catch (e) {
			o = { error: e };
		} finally {
			try {
				b && !b.done && (s = y.return) && s.call(y);
			} finally {
				if (o) throw o.error;
			}
		}
		if (l === u || !n.get(l) || this.decodeRowResult.length < 2) throw new I();
		this.checkChecksums(this.decodeRowResult), this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 2);
		var x = this.decodeExtended(this.decodeRowResult), S = (c[1] + c[0]) / 2, C = p + v / 2;
		return new Ee(x, null, 0, [new z(S, e), new z(C, e)], L.CODE_93, (/* @__PURE__ */ new Date()).getTime());
	}, t.prototype.findAsteriskPattern = function(e) {
		var n = e.getSize(), r = e.getNextSet(0);
		this.counters.fill(0);
		for (var i = this.counters, a = r, o = !1, s = i.length, c = 0, l = r; l < n; l++) if (e.get(l) !== o) i[c]++;
		else {
			if (c === s - 1) {
				if (this.toPattern(i) === t.ASTERISK_ENCODING) return new Int32Array([a, l]);
				a += i[0] + i[1], i.copyWithin(0, 2, 2 + c - 1), i[c - 1] = 0, i[c] = 0, c--;
			} else c++;
			i[c] = 1, o = !o;
		}
		throw new I();
	}, t.prototype.toPattern = function(e) {
		var t, n, r = 0;
		try {
			for (var i = dt(e), a = i.next(); !a.done; a = i.next()) {
				var o = a.value;
				r += o;
			}
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				a && !a.done && (n = i.return) && n.call(i);
			} finally {
				if (t) throw t.error;
			}
		}
		for (var s = 0, c = e.length, l = 0; l < c; l++) {
			var u = Math.round(e[l] * 9 / r);
			if (u < 1 || u > 4) return -1;
			if (l & 1) s <<= u;
			else for (var d = 0; d < u; d++) s = s << 1 | 1;
		}
		return s;
	}, t.prototype.patternToChar = function(e) {
		for (var n = 0; n < t.CHARACTER_ENCODINGS.length; n++) if (t.CHARACTER_ENCODINGS[n] === e) return t.ALPHABET_STRING.charAt(n);
		throw new I();
	}, t.prototype.decodeExtended = function(e) {
		for (var t = e.length, n = "", r = 0; r < t; r++) {
			var i = e.charAt(r);
			if (i >= "a" && i <= "d") {
				if (r >= t - 1) throw new M();
				var a = e.charAt(r + 1), o = "\0";
				switch (i) {
					case "d":
						if (a >= "A" && a <= "Z") o = String.fromCharCode(a.charCodeAt(0) + 32);
						else throw new M();
						break;
					case "a":
						if (a >= "A" && a <= "Z") o = String.fromCharCode(a.charCodeAt(0) - 64);
						else throw new M();
						break;
					case "b":
						if (a >= "A" && a <= "E") o = String.fromCharCode(a.charCodeAt(0) - 38);
						else if (a >= "F" && a <= "J") o = String.fromCharCode(a.charCodeAt(0) - 11);
						else if (a >= "K" && a <= "O") o = String.fromCharCode(a.charCodeAt(0) + 16);
						else if (a >= "P" && a <= "T") o = String.fromCharCode(a.charCodeAt(0) + 43);
						else if (a === "U") o = "\0";
						else if (a === "V") o = "@";
						else if (a === "W") o = "`";
						else if (a >= "X" && a <= "Z") o = "";
						else throw new M();
						break;
					case "c": if (a >= "A" && a <= "O") o = String.fromCharCode(a.charCodeAt(0) - 32);
					else if (a === "Z") o = ":";
					else throw new M();
				}
				n += o, r++;
			} else n += i;
		}
		return n;
	}, t.prototype.checkChecksums = function(e) {
		var t = e.length;
		this.checkOneChecksum(e, t - 2, 20), this.checkOneChecksum(e, t - 1, 15);
	}, t.prototype.checkOneChecksum = function(e, n, r) {
		for (var i = 1, a = 0, o = n - 1; o >= 0; o--) a += i * t.ALPHABET_STRING.indexOf(e.charAt(o)), ++i > r && (i = 1);
		if (e.charAt(n) !== t.ALPHABET_STRING[a % 47]) throw new C();
	}, t.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*", t.CHARACTER_ENCODINGS = [
		276,
		328,
		324,
		322,
		296,
		292,
		290,
		336,
		274,
		266,
		424,
		420,
		418,
		404,
		402,
		394,
		360,
		356,
		354,
		308,
		282,
		344,
		332,
		326,
		300,
		278,
		436,
		434,
		428,
		422,
		406,
		410,
		364,
		358,
		310,
		314,
		302,
		468,
		466,
		458,
		366,
		374,
		430,
		294,
		474,
		470,
		306,
		350
	], t.ASTERISK_ENCODING = t.CHARACTER_ENCODINGS[47], t;
}(it), pt = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), mt = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ht = function(e) {
	pt(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.narrowLineWidth = -1, t;
	}
	return t.prototype.decodeRow = function(e, n, r) {
		var i, a, o = this.decodeStart(n), s = this.decodeEnd(n), c = new F();
		t.decodeMiddle(n, o[1], s[0], c);
		var l = c.toString(), u = null;
		r != null && (u = r.get(j.ALLOWED_LENGTHS)), u ??= t.DEFAULT_ALLOWED_LENGTHS;
		var d = l.length, f = !1, p = 0;
		try {
			for (var m = mt(u), h = m.next(); !h.done; h = m.next()) {
				var g = h.value;
				if (d === g) {
					f = !0;
					break;
				}
				g > p && (p = g);
			}
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				h && !h.done && (a = m.return) && a.call(m);
			} finally {
				if (i) throw i.error;
			}
		}
		if (!f && d > p && (f = !0), !f) throw new M();
		return new Ee(l, null, 0, [new z(o[1], e), new z(s[0], e)], L.ITF, (/* @__PURE__ */ new Date()).getTime());
	}, t.decodeMiddle = function(e, n, r, i) {
		var a = /* @__PURE__ */ new Int32Array(10), o = /* @__PURE__ */ new Int32Array(5), s = /* @__PURE__ */ new Int32Array(5);
		for (a.fill(0), o.fill(0), s.fill(0); n < r;) {
			it.recordPattern(e, n, a);
			for (var c = 0; c < 5; c++) {
				var l = 2 * c;
				o[c] = a[l], s[c] = a[l + 1];
			}
			var u = t.decodeDigit(o);
			i.append(u.toString()), u = this.decodeDigit(s), i.append(u.toString()), a.forEach(function(e) {
				n += e;
			});
		}
	}, t.prototype.decodeStart = function(e) {
		var n = t.skipWhiteSpace(e), r = t.findGuardPattern(e, n, t.START_PATTERN);
		return this.narrowLineWidth = (r[1] - r[0]) / 4, this.validateQuietZone(e, r[0]), r;
	}, t.prototype.validateQuietZone = function(e, t) {
		var n = this.narrowLineWidth * 10;
		n = n < t ? n : t;
		for (var r = t - 1; n > 0 && r >= 0 && !e.get(r); r--) n--;
		if (n !== 0) throw new I();
	}, t.skipWhiteSpace = function(e) {
		var t = e.getSize(), n = e.getNextSet(0);
		if (n === t) throw new I();
		return n;
	}, t.prototype.decodeEnd = function(e) {
		e.reverse();
		try {
			var n = t.skipWhiteSpace(e), r = void 0;
			try {
				r = t.findGuardPattern(e, n, t.END_PATTERN_REVERSED[0]);
			} catch (i) {
				i instanceof I && (r = t.findGuardPattern(e, n, t.END_PATTERN_REVERSED[1]));
			}
			this.validateQuietZone(e, r[0]);
			var i = r[0];
			return r[0] = e.getSize() - r[1], r[1] = e.getSize() - i, r;
		} finally {
			e.reverse();
		}
	}, t.findGuardPattern = function(e, n, r) {
		var i = r.length, a = new Int32Array(i), o = e.getSize(), s = !1, c = 0, l = n;
		a.fill(0);
		for (var u = n; u < o; u++) if (e.get(u) !== s) a[c]++;
		else {
			if (c === i - 1) {
				if (it.patternMatchVariance(a, r, t.MAX_INDIVIDUAL_VARIANCE) < t.MAX_AVG_VARIANCE) return [l, u];
				l += a[0] + a[1], T.arraycopy(a, 2, a, 0, c - 1), a[c - 1] = 0, a[c] = 0, c--;
			} else c++;
			a[c] = 1, s = !s;
		}
		throw new I();
	}, t.decodeDigit = function(e) {
		for (var n = t.MAX_AVG_VARIANCE, r = -1, i = t.PATTERNS.length, a = 0; a < i; a++) {
			var o = t.PATTERNS[a], s = it.patternMatchVariance(e, o, t.MAX_INDIVIDUAL_VARIANCE);
			s < n ? (n = s, r = a) : s === n && (r = -1);
		}
		if (r >= 0) return r % 10;
		throw new I();
	}, t.PATTERNS = [
		Int32Array.from([
			1,
			1,
			2,
			2,
			1
		]),
		Int32Array.from([
			2,
			1,
			1,
			1,
			2
		]),
		Int32Array.from([
			1,
			2,
			1,
			1,
			2
		]),
		Int32Array.from([
			2,
			2,
			1,
			1,
			1
		]),
		Int32Array.from([
			1,
			1,
			2,
			1,
			2
		]),
		Int32Array.from([
			2,
			1,
			2,
			1,
			1
		]),
		Int32Array.from([
			1,
			2,
			2,
			1,
			1
		]),
		Int32Array.from([
			1,
			1,
			1,
			2,
			2
		]),
		Int32Array.from([
			2,
			1,
			1,
			2,
			1
		]),
		Int32Array.from([
			1,
			2,
			1,
			2,
			1
		]),
		Int32Array.from([
			1,
			1,
			3,
			3,
			1
		]),
		Int32Array.from([
			3,
			1,
			1,
			1,
			3
		]),
		Int32Array.from([
			1,
			3,
			1,
			1,
			3
		]),
		Int32Array.from([
			3,
			3,
			1,
			1,
			1
		]),
		Int32Array.from([
			1,
			1,
			3,
			1,
			3
		]),
		Int32Array.from([
			3,
			1,
			3,
			1,
			1
		]),
		Int32Array.from([
			1,
			3,
			3,
			1,
			1
		]),
		Int32Array.from([
			1,
			1,
			1,
			3,
			3
		]),
		Int32Array.from([
			3,
			1,
			1,
			3,
			1
		]),
		Int32Array.from([
			1,
			3,
			1,
			3,
			1
		])
	], t.MAX_AVG_VARIANCE = .38, t.MAX_INDIVIDUAL_VARIANCE = .5, t.DEFAULT_ALLOWED_LENGTHS = [
		6,
		8,
		10,
		12,
		14
	], t.START_PATTERN = Int32Array.from([
		1,
		1,
		1,
		1
	]), t.END_PATTERN_REVERSED = [Int32Array.from([
		1,
		1,
		2
	]), Int32Array.from([
		1,
		1,
		3
	])], t;
}(it), gt = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), _t = function(e) {
	gt(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.decodeRowStringBuffer = "", t;
	}
	return t.findStartGuardPattern = function(e) {
		for (var n = !1, r, i = 0, a = Int32Array.from([
			0,
			0,
			0
		]); !n;) {
			a = Int32Array.from([
				0,
				0,
				0
			]), r = t.findGuardPattern(e, i, !1, this.START_END_PATTERN, a);
			var o = r[0];
			i = r[1];
			var s = o - (i - o);
			s >= 0 && (n = e.isRange(s, o, !1));
		}
		return r;
	}, t.checkChecksum = function(e) {
		return t.checkStandardUPCEANChecksum(e);
	}, t.checkStandardUPCEANChecksum = function(e) {
		var n = e.length;
		if (n === 0) return !1;
		var r = parseInt(e.charAt(n - 1), 10);
		return t.getStandardUPCEANChecksum(e.substring(0, n - 1)) === r;
	}, t.getStandardUPCEANChecksum = function(e) {
		for (var t = e.length, n = 0, r = t - 1; r >= 0; r -= 2) {
			var i = e.charAt(r).charCodeAt(0) - 48;
			if (i < 0 || i > 9) throw new M();
			n += i;
		}
		n *= 3;
		for (var r = t - 2; r >= 0; r -= 2) {
			var i = e.charAt(r).charCodeAt(0) - 48;
			if (i < 0 || i > 9) throw new M();
			n += i;
		}
		return (1e3 - n) % 10;
	}, t.decodeEnd = function(e, n) {
		return t.findGuardPattern(e, n, !1, t.START_END_PATTERN, new Int32Array(t.START_END_PATTERN.length).fill(0));
	}, t.findGuardPatternWithoutCounters = function(e, t, n, r) {
		return this.findGuardPattern(e, t, n, r, new Int32Array(r.length));
	}, t.findGuardPattern = function(e, n, r, i, a) {
		var o = e.getSize();
		n = r ? e.getNextUnset(n) : e.getNextSet(n);
		for (var s = 0, c = n, l = i.length, u = r, d = n; d < o; d++) if (e.get(d) !== u) a[s]++;
		else {
			if (s === l - 1) {
				if (it.patternMatchVariance(a, i, t.MAX_INDIVIDUAL_VARIANCE) < t.MAX_AVG_VARIANCE) return Int32Array.from([c, d]);
				c += a[0] + a[1];
				for (var f = a.slice(2, a.length), p = 0; p < s - 1; p++) a[p] = f[p];
				a[s - 1] = 0, a[s] = 0, s--;
			} else s++;
			a[s] = 1, u = !u;
		}
		throw new I();
	}, t.decodeDigit = function(e, n, r, i) {
		this.recordPattern(e, r, n);
		for (var a = this.MAX_AVG_VARIANCE, o = -1, s = i.length, c = 0; c < s; c++) {
			var l = i[c], u = it.patternMatchVariance(n, l, t.MAX_INDIVIDUAL_VARIANCE);
			u < a && (a = u, o = c);
		}
		if (o >= 0) return o;
		throw new I();
	}, t.MAX_AVG_VARIANCE = .48, t.MAX_INDIVIDUAL_VARIANCE = .7, t.START_END_PATTERN = Int32Array.from([
		1,
		1,
		1
	]), t.MIDDLE_PATTERN = Int32Array.from([
		1,
		1,
		1,
		1,
		1
	]), t.END_PATTERN = Int32Array.from([
		1,
		1,
		1,
		1,
		1,
		1
	]), t.L_PATTERNS = [
		Int32Array.from([
			3,
			2,
			1,
			1
		]),
		Int32Array.from([
			2,
			2,
			2,
			1
		]),
		Int32Array.from([
			2,
			1,
			2,
			2
		]),
		Int32Array.from([
			1,
			4,
			1,
			1
		]),
		Int32Array.from([
			1,
			1,
			3,
			2
		]),
		Int32Array.from([
			1,
			2,
			3,
			1
		]),
		Int32Array.from([
			1,
			1,
			1,
			4
		]),
		Int32Array.from([
			1,
			3,
			1,
			2
		]),
		Int32Array.from([
			1,
			2,
			1,
			3
		]),
		Int32Array.from([
			3,
			1,
			1,
			2
		])
	], t;
}(it), vt = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, yt = function() {
	function e() {
		this.CHECK_DIGIT_ENCODINGS = [
			24,
			20,
			18,
			17,
			12,
			6,
			3,
			10,
			9,
			5
		], this.decodeMiddleCounters = Int32Array.from([
			0,
			0,
			0,
			0
		]), this.decodeRowStringBuffer = "";
	}
	return e.prototype.decodeRow = function(t, n, r) {
		var i = this.decodeRowStringBuffer, a = this.decodeMiddle(n, r, i), o = i.toString(), s = e.parseExtensionString(o), c = new Ee(o, null, 0, [new z((r[0] + r[1]) / 2, t), new z(a, t)], L.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
		return s != null && c.putAllMetadata(s), c;
	}, e.prototype.decodeMiddle = function(t, n, r) {
		var i, a, o = this.decodeMiddleCounters;
		o[0] = 0, o[1] = 0, o[2] = 0, o[3] = 0;
		for (var s = t.getSize(), c = n[1], l = 0, u = 0; u < 5 && c < s; u++) {
			var d = _t.decodeDigit(t, o, c, _t.L_AND_G_PATTERNS);
			r += String.fromCharCode(48 + d % 10);
			try {
				for (var f = (i = void 0, vt(o)), p = f.next(); !p.done; p = f.next()) {
					var m = p.value;
					c += m;
				}
			} catch (e) {
				i = { error: e };
			} finally {
				try {
					p && !p.done && (a = f.return) && a.call(f);
				} finally {
					if (i) throw i.error;
				}
			}
			d >= 10 && (l |= 1 << 4 - u), u !== 4 && (c = t.getNextSet(c), c = t.getNextUnset(c));
		}
		if (r.length !== 5) throw new I();
		var h = this.determineCheckDigit(l);
		if (e.extensionChecksum(r.toString()) !== h) throw new I();
		return c;
	}, e.extensionChecksum = function(e) {
		for (var t = e.length, n = 0, r = t - 2; r >= 0; r -= 2) n += e.charAt(r).charCodeAt(0) - 48;
		n *= 3;
		for (var r = t - 1; r >= 0; r -= 2) n += e.charAt(r).charCodeAt(0) - 48;
		return n *= 3, n % 10;
	}, e.prototype.determineCheckDigit = function(e) {
		for (var t = 0; t < 10; t++) if (e === this.CHECK_DIGIT_ENCODINGS[t]) return t;
		throw new I();
	}, e.parseExtensionString = function(t) {
		if (t.length !== 5) return null;
		var n = e.parseExtension5String(t);
		return n == null ? null : /* @__PURE__ */ new Map([[ke.SUGGESTED_PRICE, n]]);
	}, e.parseExtension5String = function(e) {
		var t;
		switch (e.charAt(0)) {
			case "0":
				t = "£";
				break;
			case "5":
				t = "$";
				break;
			case "9":
				switch (e) {
					case "90000": return null;
					case "99991": return "0.00";
					case "99990": return "Used";
				}
				t = "";
				break;
			default: t = "";
		}
		var n = parseInt(e.substring(1)), r = (n / 100).toString(), i = n % 100, a = i < 10 ? "0" + i : i.toString();
		return t + r + "." + a;
	}, e;
}(), bt = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, xt = function() {
	function e() {
		this.decodeMiddleCounters = Int32Array.from([
			0,
			0,
			0,
			0
		]), this.decodeRowStringBuffer = "";
	}
	return e.prototype.decodeRow = function(t, n, r) {
		var i = this.decodeRowStringBuffer, a = this.decodeMiddle(n, r, i), o = i.toString(), s = e.parseExtensionString(o), c = new Ee(o, null, 0, [new z((r[0] + r[1]) / 2, t), new z(a, t)], L.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
		return s != null && c.putAllMetadata(s), c;
	}, e.prototype.decodeMiddle = function(e, t, n) {
		var r, i, a = this.decodeMiddleCounters;
		a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0;
		for (var o = e.getSize(), s = t[1], c = 0, l = 0; l < 2 && s < o; l++) {
			var u = _t.decodeDigit(e, a, s, _t.L_AND_G_PATTERNS);
			n += String.fromCharCode(48 + u % 10);
			try {
				for (var d = (r = void 0, bt(a)), f = d.next(); !f.done; f = d.next()) {
					var p = f.value;
					s += p;
				}
			} catch (e) {
				r = { error: e };
			} finally {
				try {
					f && !f.done && (i = d.return) && i.call(d);
				} finally {
					if (r) throw r.error;
				}
			}
			u >= 10 && (c |= 1 << 1 - l), l !== 1 && (s = e.getNextSet(s), s = e.getNextUnset(s));
		}
		if (n.length !== 2 || parseInt(n.toString()) % 4 !== c) throw new I();
		return s;
	}, e.parseExtensionString = function(e) {
		return e.length === 2 ? /* @__PURE__ */ new Map([[ke.ISSUE_NUMBER, parseInt(e)]]) : null;
	}, e;
}(), St = function() {
	function e() {}
	return e.decodeRow = function(e, t, n) {
		var r = _t.findGuardPattern(t, n, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
		try {
			return new yt().decodeRow(e, t, r);
		} catch {
			return new xt().decodeRow(e, t, r);
		}
	}, e.EXTENSION_START_PATTERN = Int32Array.from([
		1,
		1,
		2
	]), e;
}(), Ct = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), wt = function(e) {
	Ct(t, e);
	function t() {
		var n = e.call(this) || this;
		n.decodeRowStringBuffer = "", t.L_AND_G_PATTERNS = t.L_PATTERNS.map(function(e) {
			return Int32Array.from(e);
		});
		for (var r = 10; r < 20; r++) {
			for (var i = t.L_PATTERNS[r - 10], a = new Int32Array(i.length), o = 0; o < i.length; o++) a[o] = i[i.length - o - 1];
			t.L_AND_G_PATTERNS[r] = a;
		}
		return n;
	}
	return t.prototype.decodeRow = function(e, n, r) {
		var i = t.findStartGuardPattern(n), a = r == null ? null : r.get(j.NEED_RESULT_POINT_CALLBACK);
		if (a != null) {
			var o = new z((i[0] + i[1]) / 2, e);
			a.foundPossibleResultPoint(o);
		}
		var s = this.decodeMiddle(n, i, this.decodeRowStringBuffer), c = s.rowOffset, l = s.resultString;
		if (a != null) {
			var u = new z(c, e);
			a.foundPossibleResultPoint(u);
		}
		var d = t.decodeEnd(n, c);
		if (a != null) {
			var f = new z((d[0] + d[1]) / 2, e);
			a.foundPossibleResultPoint(f);
		}
		var p = d[1], m = p + (p - d[0]);
		if (m >= n.getSize() || !n.isRange(p, m, !1)) throw new I();
		var h = l.toString();
		if (h.length < 8) throw new M();
		if (!t.checkChecksum(h)) throw new C();
		var g = (i[1] + i[0]) / 2, _ = (d[1] + d[0]) / 2, v = this.getBarcodeFormat(), y = new Ee(h, null, 0, [new z(g, e), new z(_, e)], v, (/* @__PURE__ */ new Date()).getTime()), b = 0;
		try {
			var x = St.decodeRow(e, n, d[1]);
			y.putMetadata(ke.UPC_EAN_EXTENSION, x.getText()), y.putAllMetadata(x.getResultMetadata()), y.addResultPoints(x.getResultPoints()), b = x.getText().length;
		} catch {}
		var S = r == null ? null : r.get(j.ALLOWED_EAN_EXTENSIONS);
		if (S != null) {
			var w = !1;
			for (var T in S) if (b.toString() === T) {
				w = !0;
				break;
			}
			if (!w) throw new I();
		}
		return v === L.EAN_13 || L.UPC_A, y;
	}, t.checkChecksum = function(e) {
		return t.checkStandardUPCEANChecksum(e);
	}, t.checkStandardUPCEANChecksum = function(e) {
		var n = e.length;
		if (n === 0) return !1;
		var r = parseInt(e.charAt(n - 1), 10);
		return t.getStandardUPCEANChecksum(e.substring(0, n - 1)) === r;
	}, t.getStandardUPCEANChecksum = function(e) {
		for (var t = e.length, n = 0, r = t - 1; r >= 0; r -= 2) {
			var i = e.charAt(r).charCodeAt(0) - 48;
			if (i < 0 || i > 9) throw new M();
			n += i;
		}
		n *= 3;
		for (var r = t - 2; r >= 0; r -= 2) {
			var i = e.charAt(r).charCodeAt(0) - 48;
			if (i < 0 || i > 9) throw new M();
			n += i;
		}
		return (1e3 - n) % 10;
	}, t.decodeEnd = function(e, n) {
		return t.findGuardPattern(e, n, !1, t.START_END_PATTERN, new Int32Array(t.START_END_PATTERN.length).fill(0));
	}, t;
}(_t), Tt = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Et = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Dt = function(e) {
	Tt(t, e);
	function t() {
		var t = e.call(this) || this;
		return t.decodeMiddleCounters = Int32Array.from([
			0,
			0,
			0,
			0
		]), t;
	}
	return t.prototype.decodeMiddle = function(e, n, r) {
		var i, a, o, s, c = this.decodeMiddleCounters;
		c[0] = 0, c[1] = 0, c[2] = 0, c[3] = 0;
		for (var l = e.getSize(), u = n[1], d = 0, f = 0; f < 6 && u < l; f++) {
			var p = wt.decodeDigit(e, c, u, wt.L_AND_G_PATTERNS);
			r += String.fromCharCode(48 + p % 10);
			try {
				for (var m = (i = void 0, Et(c)), h = m.next(); !h.done; h = m.next()) {
					var g = h.value;
					u += g;
				}
			} catch (e) {
				i = { error: e };
			} finally {
				try {
					h && !h.done && (a = m.return) && a.call(m);
				} finally {
					if (i) throw i.error;
				}
			}
			p >= 10 && (d |= 1 << 5 - f);
		}
		r = t.determineFirstDigit(r, d), u = wt.findGuardPattern(e, u, !0, wt.MIDDLE_PATTERN, new Int32Array(wt.MIDDLE_PATTERN.length).fill(0))[1];
		for (var f = 0; f < 6 && u < l; f++) {
			var p = wt.decodeDigit(e, c, u, wt.L_PATTERNS);
			r += String.fromCharCode(48 + p);
			try {
				for (var _ = (o = void 0, Et(c)), v = _.next(); !v.done; v = _.next()) {
					var g = v.value;
					u += g;
				}
			} catch (e) {
				o = { error: e };
			} finally {
				try {
					v && !v.done && (s = _.return) && s.call(_);
				} finally {
					if (o) throw o.error;
				}
			}
		}
		return {
			rowOffset: u,
			resultString: r
		};
	}, t.prototype.getBarcodeFormat = function() {
		return L.EAN_13;
	}, t.determineFirstDigit = function(e, t) {
		for (var n = 0; n < 10; n++) if (t === this.FIRST_DIGIT_ENCODINGS[n]) return e = String.fromCharCode(48 + n) + e, e;
		throw new I();
	}, t.FIRST_DIGIT_ENCODINGS = [
		0,
		11,
		13,
		14,
		19,
		25,
		28,
		21,
		22,
		26
	], t;
}(wt), Ot = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), kt = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, At = function(e) {
	Ot(t, e);
	function t() {
		var t = e.call(this) || this;
		return t.decodeMiddleCounters = Int32Array.from([
			0,
			0,
			0,
			0
		]), t;
	}
	return t.prototype.decodeMiddle = function(e, t, n) {
		var r, i, a, o, s = this.decodeMiddleCounters;
		s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0;
		for (var c = e.getSize(), l = t[1], u = 0; u < 4 && l < c; u++) {
			var d = wt.decodeDigit(e, s, l, wt.L_PATTERNS);
			n += String.fromCharCode(48 + d);
			try {
				for (var f = (r = void 0, kt(s)), p = f.next(); !p.done; p = f.next()) {
					var m = p.value;
					l += m;
				}
			} catch (e) {
				r = { error: e };
			} finally {
				try {
					p && !p.done && (i = f.return) && i.call(f);
				} finally {
					if (r) throw r.error;
				}
			}
		}
		l = wt.findGuardPattern(e, l, !0, wt.MIDDLE_PATTERN, new Int32Array(wt.MIDDLE_PATTERN.length).fill(0))[1];
		for (var u = 0; u < 4 && l < c; u++) {
			var d = wt.decodeDigit(e, s, l, wt.L_PATTERNS);
			n += String.fromCharCode(48 + d);
			try {
				for (var h = (a = void 0, kt(s)), g = h.next(); !g.done; g = h.next()) {
					var m = g.value;
					l += m;
				}
			} catch (e) {
				a = { error: e };
			} finally {
				try {
					g && !g.done && (o = h.return) && o.call(h);
				} finally {
					if (a) throw a.error;
				}
			}
		}
		return {
			rowOffset: l,
			resultString: n
		};
	}, t.prototype.getBarcodeFormat = function() {
		return L.EAN_8;
	}, t;
}(wt), jt = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Mt = function(e) {
	jt(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.ean13Reader = new Dt(), t;
	}
	return t.prototype.getBarcodeFormat = function() {
		return L.UPC_A;
	}, t.prototype.decode = function(e, t) {
		return this.maybeReturnResult(this.ean13Reader.decode(e));
	}, t.prototype.decodeRow = function(e, t, n) {
		return this.maybeReturnResult(this.ean13Reader.decodeRow(e, t, n));
	}, t.prototype.decodeMiddle = function(e, t, n) {
		return this.ean13Reader.decodeMiddle(e, t, n);
	}, t.prototype.maybeReturnResult = function(e) {
		var t = e.getText();
		if (t.charAt(0) === "0") {
			var n = new Ee(t.substring(1), null, null, e.getResultPoints(), L.UPC_A);
			return e.getResultMetadata() != null && n.putAllMetadata(e.getResultMetadata()), n;
		}
		throw new I();
	}, t.prototype.reset = function() {
		this.ean13Reader.reset();
	}, t;
}(wt), Nt = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Pt = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ft = function(e) {
	Nt(t, e);
	function t() {
		var t = e.call(this) || this;
		return t.decodeMiddleCounters = /* @__PURE__ */ new Int32Array(4), t;
	}
	return t.prototype.decodeMiddle = function(e, n, r) {
		var i, a, o = this.decodeMiddleCounters.map(function(e) {
			return e;
		});
		o[0] = 0, o[1] = 0, o[2] = 0, o[3] = 0;
		for (var s = e.getSize(), c = n[1], l = 0, u = 0; u < 6 && c < s; u++) {
			var d = t.decodeDigit(e, o, c, t.L_AND_G_PATTERNS);
			r += String.fromCharCode(48 + d % 10);
			try {
				for (var f = (i = void 0, Pt(o)), p = f.next(); !p.done; p = f.next()) {
					var m = p.value;
					c += m;
				}
			} catch (e) {
				i = { error: e };
			} finally {
				try {
					p && !p.done && (a = f.return) && a.call(f);
				} finally {
					if (i) throw i.error;
				}
			}
			d >= 10 && (l |= 1 << 5 - u);
		}
		return t.determineNumSysAndCheckDigit(new F(r), l), c;
	}, t.prototype.decodeEnd = function(e, n) {
		return t.findGuardPatternWithoutCounters(e, n, !0, t.MIDDLE_END_PATTERN);
	}, t.prototype.checkChecksum = function(e) {
		return wt.checkChecksum(t.convertUPCEtoUPCA(e));
	}, t.determineNumSysAndCheckDigit = function(e, t) {
		for (var n = 0; n <= 1; n++) for (var r = 0; r < 10; r++) if (t === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[n][r]) {
			e.insert(0, "0" + n), e.append("0" + r);
			return;
		}
		throw I.getNotFoundInstance();
	}, t.prototype.getBarcodeFormat = function() {
		return L.UPC_E;
	}, t.convertUPCEtoUPCA = function(e) {
		var t = e.slice(1, 7).split("").map(function(e) {
			return e.charCodeAt(0);
		}), n = new F();
		n.append(e.charAt(0));
		var r = t[5];
		switch (r) {
			case 0:
			case 1:
			case 2:
				n.appendChars(t, 0, 2), n.append(r), n.append("0000"), n.appendChars(t, 2, 3);
				break;
			case 3:
				n.appendChars(t, 0, 3), n.append("00000"), n.appendChars(t, 3, 2);
				break;
			case 4:
				n.appendChars(t, 0, 4), n.append("00000"), n.append(t[4]);
				break;
			default: n.appendChars(t, 0, 5), n.append("0000"), n.append(r);
		}
		return e.length >= 8 && n.append(e.charAt(7)), n.toString();
	}, t.MIDDLE_END_PATTERN = Int32Array.from([
		1,
		1,
		1,
		1,
		1,
		1
	]), t.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([
		56,
		52,
		50,
		49,
		44,
		38,
		35,
		42,
		41,
		37
	]), Int32Array.from([
		7,
		11,
		13,
		14,
		19,
		25,
		28,
		21,
		22,
		1
	])], t;
}(wt), It = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Lt = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Rt = function(e) {
	It(t, e);
	function t(t) {
		var n = e.call(this) || this, r = t == null ? null : t.get(j.POSSIBLE_FORMATS), i = [];
		return r != null && (r.indexOf(L.EAN_13) > -1 && i.push(new Dt()), r.indexOf(L.UPC_A) > -1 && i.push(new Mt()), r.indexOf(L.EAN_8) > -1 && i.push(new At()), r.indexOf(L.UPC_E) > -1 && i.push(new Ft())), i.length === 0 && (i.push(new Dt()), i.push(new Mt()), i.push(new At()), i.push(new Ft())), n.readers = i, n;
	}
	return t.prototype.decodeRow = function(e, t, n) {
		var r, i;
		try {
			for (var a = Lt(this.readers), o = a.next(); !o.done; o = a.next()) {
				var s = o.value;
				try {
					var c = s.decodeRow(e, t, n), l = c.getBarcodeFormat() === L.EAN_13 && c.getText().charAt(0) === "0", u = n == null ? null : n.get(j.POSSIBLE_FORMATS), d = u == null || u.includes(L.UPC_A);
					if (l && d) {
						var f = c.getRawBytes(), p = new Ee(c.getText().substring(1), f, f ? f.length : null, c.getResultPoints(), L.UPC_A);
						return p.putAllMetadata(c.getResultMetadata()), p;
					}
					return c;
				} catch {}
			}
		} catch (e) {
			r = { error: e };
		} finally {
			try {
				o && !o.done && (i = a.return) && i.call(a);
			} finally {
				if (r) throw r.error;
			}
		}
		throw new I();
	}, t.prototype.reset = function() {
		var e, t;
		try {
			for (var n = Lt(this.readers), r = n.next(); !r.done; r = n.next()) r.value.reset();
		} catch (t) {
			e = { error: t };
		} finally {
			try {
				r && !r.done && (t = n.return) && t.call(n);
			} finally {
				if (e) throw e.error;
			}
		}
	}, t;
}(it), zt = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Bt = function(e) {
	zt(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.CODA_BAR_CHAR_SET = {
			nnnnnww: "0",
			nnnnwwn: "1",
			nnnwnnw: "2",
			wwnnnnn: "3",
			nnwnnwn: "4",
			wnnnnwn: "5",
			nwnnnnw: "6",
			nwnnwnn: "7",
			nwwnnnn: "8",
			wnnwnnn: "9",
			nnnwwnn: "-",
			nnwwnnn: "$",
			wnnnwnw: ":",
			wnwnnnw: "/",
			wnwnwnn: ".",
			nnwwwww: "+",
			nnwwnwn: "A",
			nwnwnnw: "B",
			nnnwnww: "C",
			nnnwwwn: "D"
		}, t;
	}
	return t.prototype.decodeRow = function(e, t, n) {
		var r = this.getValidRowData(t);
		if (!r) throw new I();
		var i = this.codaBarDecodeRow(r.row);
		if (!i) throw new I();
		return new Ee(i, null, 0, [new z(r.left, e), new z(r.right, e)], L.CODABAR, (/* @__PURE__ */ new Date()).getTime());
	}, t.prototype.getValidRowData = function(e) {
		var t = e.toArray(), n = t.indexOf(!0);
		if (n === -1) return null;
		var r = t.lastIndexOf(!0);
		if (r <= n) return null;
		t = t.slice(n, r + 1);
		for (var i = [], a = t[0], o = 1, s = 1; s < t.length; s++) t[s] === a ? o++ : (a = t[s], i.push(o), o = 1);
		return i.push(o), i.length < 23 && (i.length + 1) % 8 != 0 ? null : {
			row: i,
			left: n,
			right: r
		};
	}, t.prototype.codaBarDecodeRow = function(e) {
		for (var t = [], n = Math.ceil(e.reduce(function(e, t) {
			return (e + t) / 2;
		}, 0)); e.length > 0;) {
			var r = e.splice(0, 8).splice(0, 7).map(function(e) {
				return e < n ? "n" : "w";
			}).join("");
			if (this.CODA_BAR_CHAR_SET[r] === void 0) return null;
			t.push(this.CODA_BAR_CHAR_SET[r]);
		}
		var i = t.join("");
		return this.validCodaBarString(i) ? i : null;
	}, t.prototype.validCodaBarString = function(e) {
		return /^[A-D].{1,}[A-D]$/.test(e);
	}, t;
}(it), Vt = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), B = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ht = function(e) {
	Vt(t, e);
	function t() {
		var t = e.call(this) || this;
		return t.decodeFinderCounters = /* @__PURE__ */ new Int32Array(4), t.dataCharacterCounters = /* @__PURE__ */ new Int32Array(8), t.oddRoundingErrors = [
			,
			,
			,
			,
		], t.evenRoundingErrors = [
			,
			,
			,
			,
		], t.oddCounts = Array(t.dataCharacterCounters.length / 2), t.evenCounts = Array(t.dataCharacterCounters.length / 2), t;
	}
	return t.prototype.getDecodeFinderCounters = function() {
		return this.decodeFinderCounters;
	}, t.prototype.getDataCharacterCounters = function() {
		return this.dataCharacterCounters;
	}, t.prototype.getOddRoundingErrors = function() {
		return this.oddRoundingErrors;
	}, t.prototype.getEvenRoundingErrors = function() {
		return this.evenRoundingErrors;
	}, t.prototype.getOddCounts = function() {
		return this.oddCounts;
	}, t.prototype.getEvenCounts = function() {
		return this.evenCounts;
	}, t.prototype.parseFinderValue = function(e, n) {
		for (var r = 0; r < n.length; r++) if (it.patternMatchVariance(e, n[r], t.MAX_INDIVIDUAL_VARIANCE) < t.MAX_AVG_VARIANCE) return r;
		throw new I();
	}, t.count = function(e) {
		return R.sum(new Int32Array(e));
	}, t.increment = function(e, t) {
		for (var n = 0, r = t[0], i = 1; i < e.length; i++) t[i] > r && (r = t[i], n = i);
		e[n]++;
	}, t.decrement = function(e, t) {
		for (var n = 0, r = t[0], i = 1; i < e.length; i++) t[i] < r && (r = t[i], n = i);
		e[n]--;
	}, t.isFinderPattern = function(e) {
		var n, r, i = e[0] + e[1], a = i / (i + e[2] + e[3]);
		if (a >= t.MIN_FINDER_PATTERN_RATIO && a <= t.MAX_FINDER_PATTERN_RATIO) {
			var o = 2 ** 53 - 1, s = -(2 ** 53 - 1);
			try {
				for (var c = B(e), l = c.next(); !l.done; l = c.next()) {
					var u = l.value;
					u > s && (s = u), u < o && (o = u);
				}
			} catch (e) {
				n = { error: e };
			} finally {
				try {
					l && !l.done && (r = c.return) && r.call(c);
				} finally {
					if (n) throw n.error;
				}
			}
			return s < 10 * o;
		}
		return !1;
	}, t.MAX_AVG_VARIANCE = .2, t.MAX_INDIVIDUAL_VARIANCE = .45, t.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, t.MAX_FINDER_PATTERN_RATIO = 12.5 / 14, t;
}(it), Ut = function() {
	function e(e, t) {
		this.value = e, this.checksumPortion = t;
	}
	return e.prototype.getValue = function() {
		return this.value;
	}, e.prototype.getChecksumPortion = function() {
		return this.checksumPortion;
	}, e.prototype.toString = function() {
		return this.value + "(" + this.checksumPortion + ")";
	}, e.prototype.equals = function(t) {
		if (!(t instanceof e)) return !1;
		var n = t;
		return this.value === n.value && this.checksumPortion === n.checksumPortion;
	}, e.prototype.hashCode = function() {
		return this.value ^ this.checksumPortion;
	}, e;
}(), Wt = function() {
	function e(e, t, n, r, i) {
		this.value = e, this.startEnd = t, this.value = e, this.startEnd = t, this.resultPoints = [], this.resultPoints.push(new z(n, i)), this.resultPoints.push(new z(r, i));
	}
	return e.prototype.getValue = function() {
		return this.value;
	}, e.prototype.getStartEnd = function() {
		return this.startEnd;
	}, e.prototype.getResultPoints = function() {
		return this.resultPoints;
	}, e.prototype.equals = function(t) {
		if (!(t instanceof e)) return !1;
		var n = t;
		return this.value === n.value;
	}, e.prototype.hashCode = function() {
		return this.value;
	}, e;
}(), Gt = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Kt = function() {
	function e() {}
	return e.getRSSvalue = function(t, n, r) {
		var i, a, o = 0;
		try {
			for (var s = Gt(t), c = s.next(); !c.done; c = s.next()) {
				var l = c.value;
				o += l;
			}
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				c && !c.done && (a = s.return) && a.call(s);
			} finally {
				if (i) throw i.error;
			}
		}
		for (var u = 0, d = 0, f = t.length, p = 0; p < f - 1; p++) {
			var m = void 0;
			for (m = 1, d |= 1 << p; m < t[p]; m++, d &= ~(1 << p)) {
				var h = e.combins(o - m - 1, f - p - 2);
				if (r && d === 0 && o - m - (f - p - 1) >= f - p - 1 && (h -= e.combins(o - m - (f - p), f - p - 2)), f - p - 1 > 1) {
					for (var g = 0, _ = o - m - (f - p - 2); _ > n; _--) g += e.combins(o - m - _ - 1, f - p - 3);
					h -= g * (f - 1 - p);
				} else o - m > n && h--;
				u += h;
			}
			o -= m;
		}
		return u;
	}, e.combins = function(e, t) {
		var n, r;
		e - t > t ? (r = t, n = e - t) : (r = e - t, n = t);
		for (var i = 1, a = 1, o = e; o > n; o--) i *= o, a <= r && (i /= a, a++);
		for (; a <= r;) i /= a, a++;
		return i;
	}, e;
}(), qt = function() {
	function e() {}
	return e.buildBitArray = function(e) {
		var t = e.length * 2 - 1;
		e[e.length - 1].getRightChar() ?? --t;
		for (var n = new ne(12 * t), r = 0, i = e[0].getRightChar().getValue(), a = 11; a >= 0; --a) i & 1 << a && n.set(r), r++;
		for (var a = 1; a < e.length; ++a) {
			for (var o = e[a], s = o.getLeftChar().getValue(), c = 11; c >= 0; --c) s & 1 << c && n.set(r), r++;
			if (o.getRightChar() !== null) for (var l = o.getRightChar().getValue(), c = 11; c >= 0; --c) l & 1 << c && n.set(r), r++;
		}
		return n;
	}, e;
}(), Jt = function() {
	function e(e, t) {
		t ? this.decodedInformation = null : (this.finished = e, this.decodedInformation = t);
	}
	return e.prototype.getDecodedInformation = function() {
		return this.decodedInformation;
	}, e.prototype.isFinished = function() {
		return this.finished;
	}, e;
}(), Yt = function() {
	function e(e) {
		this.newPosition = e;
	}
	return e.prototype.getNewPosition = function() {
		return this.newPosition;
	}, e;
}(), Xt = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Zt = function(e) {
	Xt(t, e);
	function t(t, n) {
		var r = e.call(this, t) || this;
		return r.value = n, r;
	}
	return t.prototype.getValue = function() {
		return this.value;
	}, t.prototype.isFNC1 = function() {
		return this.value === t.FNC1;
	}, t.FNC1 = "$", t;
}(Yt), Qt = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), $t = function(e) {
	Qt(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return r ? (i.remaining = !0, i.remainingValue = i.remainingValue) : (i.remaining = !1, i.remainingValue = 0), i.newString = n, i;
	}
	return t.prototype.getNewString = function() {
		return this.newString;
	}, t.prototype.isRemaining = function() {
		return this.remaining;
	}, t.prototype.getRemainingValue = function() {
		return this.remainingValue;
	}, t;
}(Yt), en = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), tn = function(e) {
	en(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		if (n < 0 || n > 10 || r < 0 || r > 10) throw new M();
		return i.firstDigit = n, i.secondDigit = r, i;
	}
	return t.prototype.getFirstDigit = function() {
		return this.firstDigit;
	}, t.prototype.getSecondDigit = function() {
		return this.secondDigit;
	}, t.prototype.getValue = function() {
		return this.firstDigit * 10 + this.secondDigit;
	}, t.prototype.isFirstDigitFNC1 = function() {
		return this.firstDigit === t.FNC1;
	}, t.prototype.isSecondDigitFNC1 = function() {
		return this.secondDigit === t.FNC1;
	}, t.prototype.isAnyFNC1 = function() {
		return this.firstDigit === t.FNC1 || this.secondDigit === t.FNC1;
	}, t.FNC1 = 10, t;
}(Yt), nn = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, rn = function() {
	function e() {}
	return e.parseFieldsInGeneralPurpose = function(t) {
		var n, r, i, a, o, s, c, l;
		if (!t) return null;
		if (t.length < 2) throw new I();
		var u = t.substring(0, 2);
		try {
			for (var d = nn(e.TWO_DIGIT_DATA_LENGTH), f = d.next(); !f.done; f = d.next()) {
				var p = f.value;
				if (p[0] === u) return p[1] === e.VARIABLE_LENGTH ? e.processVariableAI(2, p[2], t) : e.processFixedAI(2, p[1], t);
			}
		} catch (e) {
			n = { error: e };
		} finally {
			try {
				f && !f.done && (r = d.return) && r.call(d);
			} finally {
				if (n) throw n.error;
			}
		}
		if (t.length < 3) throw new I();
		var m = t.substring(0, 3);
		try {
			for (var h = nn(e.THREE_DIGIT_DATA_LENGTH), g = h.next(); !g.done; g = h.next()) {
				var p = g.value;
				if (p[0] === m) return p[1] === e.VARIABLE_LENGTH ? e.processVariableAI(3, p[2], t) : e.processFixedAI(3, p[1], t);
			}
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				g && !g.done && (a = h.return) && a.call(h);
			} finally {
				if (i) throw i.error;
			}
		}
		try {
			for (var _ = nn(e.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), v = _.next(); !v.done; v = _.next()) {
				var p = v.value;
				if (p[0] === m) return p[1] === e.VARIABLE_LENGTH ? e.processVariableAI(4, p[2], t) : e.processFixedAI(4, p[1], t);
			}
		} catch (e) {
			o = { error: e };
		} finally {
			try {
				v && !v.done && (s = _.return) && s.call(_);
			} finally {
				if (o) throw o.error;
			}
		}
		if (t.length < 4) throw new I();
		var y = t.substring(0, 4);
		try {
			for (var b = nn(e.FOUR_DIGIT_DATA_LENGTH), x = b.next(); !x.done; x = b.next()) {
				var p = x.value;
				if (p[0] === y) return p[1] === e.VARIABLE_LENGTH ? e.processVariableAI(4, p[2], t) : e.processFixedAI(4, p[1], t);
			}
		} catch (e) {
			c = { error: e };
		} finally {
			try {
				x && !x.done && (l = b.return) && l.call(b);
			} finally {
				if (c) throw c.error;
			}
		}
		throw new I();
	}, e.processFixedAI = function(t, n, r) {
		if (r.length < t) throw new I();
		var i = r.substring(0, t);
		if (r.length < t + n) throw new I();
		var a = r.substring(t, t + n), o = r.substring(t + n), s = "(" + i + ")" + a, c = e.parseFieldsInGeneralPurpose(o);
		return c == null ? s : s + c;
	}, e.processVariableAI = function(t, n, r) {
		var i = r.substring(0, t), a = r.length < t + n ? r.length : t + n, o = r.substring(t, a), s = r.substring(a), c = "(" + i + ")" + o, l = e.parseFieldsInGeneralPurpose(s);
		return l == null ? c : c + l;
	}, e.VARIABLE_LENGTH = [], e.TWO_DIGIT_DATA_LENGTH = [
		["00", 18],
		["01", 14],
		["02", 14],
		[
			"10",
			e.VARIABLE_LENGTH,
			20
		],
		["11", 6],
		["12", 6],
		["13", 6],
		["15", 6],
		["17", 6],
		["20", 2],
		[
			"21",
			e.VARIABLE_LENGTH,
			20
		],
		[
			"22",
			e.VARIABLE_LENGTH,
			29
		],
		[
			"30",
			e.VARIABLE_LENGTH,
			8
		],
		[
			"37",
			e.VARIABLE_LENGTH,
			8
		],
		[
			"90",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"91",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"92",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"93",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"94",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"95",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"96",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"97",
			e.VARIABLE_LENGTH,
			3
		],
		[
			"98",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"99",
			e.VARIABLE_LENGTH,
			30
		]
	], e.THREE_DIGIT_DATA_LENGTH = [
		[
			"240",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"241",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"242",
			e.VARIABLE_LENGTH,
			6
		],
		[
			"250",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"251",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"253",
			e.VARIABLE_LENGTH,
			17
		],
		[
			"254",
			e.VARIABLE_LENGTH,
			20
		],
		[
			"400",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"401",
			e.VARIABLE_LENGTH,
			30
		],
		["402", 17],
		[
			"403",
			e.VARIABLE_LENGTH,
			30
		],
		["410", 13],
		["411", 13],
		["412", 13],
		["413", 13],
		["414", 13],
		[
			"420",
			e.VARIABLE_LENGTH,
			20
		],
		[
			"421",
			e.VARIABLE_LENGTH,
			15
		],
		["422", 3],
		[
			"423",
			e.VARIABLE_LENGTH,
			15
		],
		["424", 3],
		["425", 3],
		["426", 3]
	], e.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
		["310", 6],
		["311", 6],
		["312", 6],
		["313", 6],
		["314", 6],
		["315", 6],
		["316", 6],
		["320", 6],
		["321", 6],
		["322", 6],
		["323", 6],
		["324", 6],
		["325", 6],
		["326", 6],
		["327", 6],
		["328", 6],
		["329", 6],
		["330", 6],
		["331", 6],
		["332", 6],
		["333", 6],
		["334", 6],
		["335", 6],
		["336", 6],
		["340", 6],
		["341", 6],
		["342", 6],
		["343", 6],
		["344", 6],
		["345", 6],
		["346", 6],
		["347", 6],
		["348", 6],
		["349", 6],
		["350", 6],
		["351", 6],
		["352", 6],
		["353", 6],
		["354", 6],
		["355", 6],
		["356", 6],
		["357", 6],
		["360", 6],
		["361", 6],
		["362", 6],
		["363", 6],
		["364", 6],
		["365", 6],
		["366", 6],
		["367", 6],
		["368", 6],
		["369", 6],
		[
			"390",
			e.VARIABLE_LENGTH,
			15
		],
		[
			"391",
			e.VARIABLE_LENGTH,
			18
		],
		[
			"392",
			e.VARIABLE_LENGTH,
			15
		],
		[
			"393",
			e.VARIABLE_LENGTH,
			18
		],
		[
			"703",
			e.VARIABLE_LENGTH,
			30
		]
	], e.FOUR_DIGIT_DATA_LENGTH = [
		["7001", 13],
		[
			"7002",
			e.VARIABLE_LENGTH,
			30
		],
		["7003", 10],
		["8001", 14],
		[
			"8002",
			e.VARIABLE_LENGTH,
			20
		],
		[
			"8003",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"8004",
			e.VARIABLE_LENGTH,
			30
		],
		["8005", 6],
		["8006", 18],
		[
			"8007",
			e.VARIABLE_LENGTH,
			30
		],
		[
			"8008",
			e.VARIABLE_LENGTH,
			12
		],
		["8018", 18],
		[
			"8020",
			e.VARIABLE_LENGTH,
			25
		],
		["8100", 6],
		["8101", 10],
		["8102", 2],
		[
			"8110",
			e.VARIABLE_LENGTH,
			70
		],
		[
			"8200",
			e.VARIABLE_LENGTH,
			70
		]
	], e;
}(), an = function() {
	function e(e) {
		this.buffer = new F(), this.information = e;
	}
	return e.prototype.decodeAllCodes = function(e, t) {
		var n = t, r = null;
		do {
			var i = this.decodeGeneralPurposeField(n, r), a = rn.parseFieldsInGeneralPurpose(i.getNewString());
			if (a != null && e.append(a), r = i.isRemaining() ? "" + i.getRemainingValue() : null, n === i.getNewPosition()) break;
			n = i.getNewPosition();
		} while (1);
		return e.toString();
	}, e.prototype.isStillNumeric = function(e) {
		if (e + 7 > this.information.getSize()) return e + 4 <= this.information.getSize();
		for (var t = e; t < e + 3; ++t) if (this.information.get(t)) return !0;
		return this.information.get(e + 3);
	}, e.prototype.decodeNumeric = function(e) {
		if (e + 7 > this.information.getSize()) {
			var t = this.extractNumericValueFromBitArray(e, 4);
			return t === 0 ? new tn(this.information.getSize(), tn.FNC1, tn.FNC1) : new tn(this.information.getSize(), t - 1, tn.FNC1);
		}
		var n = this.extractNumericValueFromBitArray(e, 7), r = (n - 8) / 11, i = (n - 8) % 11;
		return new tn(e + 7, r, i);
	}, e.prototype.extractNumericValueFromBitArray = function(t, n) {
		return e.extractNumericValueFromBitArray(this.information, t, n);
	}, e.extractNumericValueFromBitArray = function(e, t, n) {
		for (var r = 0, i = 0; i < n; ++i) e.get(t + i) && (r |= 1 << n - i - 1);
		return r;
	}, e.prototype.decodeGeneralPurposeField = function(e, t) {
		this.buffer.setLengthToZero(), t != null && this.buffer.append(t), this.current.setPosition(e);
		var n = this.parseBlocks();
		return n != null && n.isRemaining() ? new $t(this.current.getPosition(), this.buffer.toString(), n.getRemainingValue()) : new $t(this.current.getPosition(), this.buffer.toString());
	}, e.prototype.parseBlocks = function() {
		var e, t;
		do {
			var n = this.current.getPosition();
			if (this.current.isAlpha() ? (t = this.parseAlphaBlock(), e = t.isFinished()) : this.current.isIsoIec646() ? (t = this.parseIsoIec646Block(), e = t.isFinished()) : (t = this.parseNumericBlock(), e = t.isFinished()), n === this.current.getPosition() && !e) break;
		} while (!e);
		return t.getDecodedInformation();
	}, e.prototype.parseNumericBlock = function() {
		for (; this.isStillNumeric(this.current.getPosition());) {
			var e = this.decodeNumeric(this.current.getPosition());
			if (this.current.setPosition(e.getNewPosition()), e.isFirstDigitFNC1()) {
				var t = void 0;
				return t = e.isSecondDigitFNC1() ? new $t(this.current.getPosition(), this.buffer.toString()) : new $t(this.current.getPosition(), this.buffer.toString(), e.getSecondDigit()), new Jt(!0, t);
			}
			if (this.buffer.append(e.getFirstDigit()), e.isSecondDigitFNC1()) {
				var t = new $t(this.current.getPosition(), this.buffer.toString());
				return new Jt(!0, t);
			}
			this.buffer.append(e.getSecondDigit());
		}
		return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new Jt(!1);
	}, e.prototype.parseIsoIec646Block = function() {
		for (; this.isStillIsoIec646(this.current.getPosition());) {
			var e = this.decodeIsoIec646(this.current.getPosition());
			if (this.current.setPosition(e.getNewPosition()), e.isFNC1()) return new Jt(!0, new $t(this.current.getPosition(), this.buffer.toString()));
			this.buffer.append(e.getValue());
		}
		return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new Jt(!1);
	}, e.prototype.parseAlphaBlock = function() {
		for (; this.isStillAlpha(this.current.getPosition());) {
			var e = this.decodeAlphanumeric(this.current.getPosition());
			if (this.current.setPosition(e.getNewPosition()), e.isFNC1()) return new Jt(!0, new $t(this.current.getPosition(), this.buffer.toString()));
			this.buffer.append(e.getValue());
		}
		return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new Jt(!1);
	}, e.prototype.isStillIsoIec646 = function(e) {
		if (e + 5 > this.information.getSize()) return !1;
		var t = this.extractNumericValueFromBitArray(e, 5);
		if (t >= 5 && t < 16) return !0;
		if (e + 7 > this.information.getSize()) return !1;
		var n = this.extractNumericValueFromBitArray(e, 7);
		if (n >= 64 && n < 116) return !0;
		if (e + 8 > this.information.getSize()) return !1;
		var r = this.extractNumericValueFromBitArray(e, 8);
		return r >= 232 && r < 253;
	}, e.prototype.decodeIsoIec646 = function(e) {
		var t = this.extractNumericValueFromBitArray(e, 5);
		if (t === 15) return new Zt(e + 5, Zt.FNC1);
		if (t >= 5 && t < 15) return new Zt(e + 5, "0" + (t - 5));
		var n = this.extractNumericValueFromBitArray(e, 7);
		if (n >= 64 && n < 90) return new Zt(e + 7, "" + (n + 1));
		if (n >= 90 && n < 116) return new Zt(e + 7, "" + (n + 7));
		var r = this.extractNumericValueFromBitArray(e, 8), i;
		switch (r) {
			case 232:
				i = "!";
				break;
			case 233:
				i = "\"";
				break;
			case 234:
				i = "%";
				break;
			case 235:
				i = "&";
				break;
			case 236:
				i = "'";
				break;
			case 237:
				i = "(";
				break;
			case 238:
				i = ")";
				break;
			case 239:
				i = "*";
				break;
			case 240:
				i = "+";
				break;
			case 241:
				i = ",";
				break;
			case 242:
				i = "-";
				break;
			case 243:
				i = ".";
				break;
			case 244:
				i = "/";
				break;
			case 245:
				i = ":";
				break;
			case 246:
				i = ";";
				break;
			case 247:
				i = "<";
				break;
			case 248:
				i = "=";
				break;
			case 249:
				i = ">";
				break;
			case 250:
				i = "?";
				break;
			case 251:
				i = "_";
				break;
			case 252:
				i = " ";
				break;
			default: throw new M();
		}
		return new Zt(e + 8, i);
	}, e.prototype.isStillAlpha = function(e) {
		if (e + 5 > this.information.getSize()) return !1;
		var t = this.extractNumericValueFromBitArray(e, 5);
		if (t >= 5 && t < 16) return !0;
		if (e + 6 > this.information.getSize()) return !1;
		var n = this.extractNumericValueFromBitArray(e, 6);
		return n >= 16 && n < 63;
	}, e.prototype.decodeAlphanumeric = function(e) {
		var t = this.extractNumericValueFromBitArray(e, 5);
		if (t === 15) return new Zt(e + 5, Zt.FNC1);
		if (t >= 5 && t < 15) return new Zt(e + 5, "0" + (t - 5));
		var n = this.extractNumericValueFromBitArray(e, 6);
		if (n >= 32 && n < 58) return new Zt(e + 6, "" + (n + 33));
		var r;
		switch (n) {
			case 58:
				r = "*";
				break;
			case 59:
				r = ",";
				break;
			case 60:
				r = "-";
				break;
			case 61:
				r = ".";
				break;
			case 62:
				r = "/";
				break;
			default: throw new Be("Decoding invalid alphanumeric value: " + n);
		}
		return new Zt(e + 6, r);
	}, e.prototype.isAlphaTo646ToAlphaLatch = function(e) {
		if (e + 1 > this.information.getSize()) return !1;
		for (var t = 0; t < 5 && t + e < this.information.getSize(); ++t) if (t === 2) {
			if (!this.information.get(e + 2)) return !1;
		} else if (this.information.get(e + t)) return !1;
		return !0;
	}, e.prototype.isAlphaOr646ToNumericLatch = function(e) {
		if (e + 3 > this.information.getSize()) return !1;
		for (var t = e; t < e + 3; ++t) if (this.information.get(t)) return !1;
		return !0;
	}, e.prototype.isNumericToAlphaNumericLatch = function(e) {
		if (e + 1 > this.information.getSize()) return !1;
		for (var t = 0; t < 4 && t + e < this.information.getSize(); ++t) if (this.information.get(e + t)) return !1;
		return !0;
	}, e;
}(), on = function() {
	function e(e) {
		this.information = e, this.generalDecoder = new an(e);
	}
	return e.prototype.getInformation = function() {
		return this.information;
	}, e.prototype.getGeneralDecoder = function() {
		return this.generalDecoder;
	}, e;
}(), sn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), cn = function(e) {
	sn(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.encodeCompressedGtin = function(e, t) {
		e.append("(01)");
		var n = e.length();
		e.append("9"), this.encodeCompressedGtinWithoutAI(e, t, n);
	}, t.prototype.encodeCompressedGtinWithoutAI = function(e, n, r) {
		for (var i = 0; i < 4; ++i) {
			var a = this.getGeneralDecoder().extractNumericValueFromBitArray(n + 10 * i, 10);
			a / 100 == 0 && e.append("0"), a / 10 == 0 && e.append("0"), e.append(a);
		}
		t.appendCheckDigit(e, r);
	}, t.appendCheckDigit = function(e, t) {
		for (var n = 0, r = 0; r < 13; r++) {
			var i = e.charAt(r + t).charCodeAt(0) - 48;
			n += r & 1 ? i : 3 * i;
		}
		n = 10 - n % 10, n === 10 && (n = 0), e.append(n);
	}, t.GTIN_SIZE = 40, t;
}(on), ln = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), un = function(e) {
	ln(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.parseInformation = function() {
		var e = new F();
		e.append("(01)");
		var n = e.length(), r = this.getGeneralDecoder().extractNumericValueFromBitArray(t.HEADER_SIZE, 4);
		return e.append(r), this.encodeCompressedGtinWithoutAI(e, t.HEADER_SIZE + 4, n), this.getGeneralDecoder().decodeAllCodes(e, t.HEADER_SIZE + 44);
	}, t.HEADER_SIZE = 4, t;
}(cn), dn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), fn = function(e) {
	dn(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.parseInformation = function() {
		var e = new F();
		return this.getGeneralDecoder().decodeAllCodes(e, t.HEADER_SIZE);
	}, t.HEADER_SIZE = 5, t;
}(on), pn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), mn = function(e) {
	pn(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.encodeCompressedWeight = function(e, t, n) {
		var r = this.getGeneralDecoder().extractNumericValueFromBitArray(t, n);
		this.addWeightCode(e, r);
		for (var i = this.checkWeight(r), a = 1e5, o = 0; o < 5; ++o) i / a === 0 && e.append("0"), a /= 10;
		e.append(i);
	}, t;
}(cn), hn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), gn = function(e) {
	hn(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.parseInformation = function() {
		if (this.getInformation().getSize() !== t.HEADER_SIZE + mn.GTIN_SIZE + t.WEIGHT_SIZE) throw new I();
		var e = new F();
		return this.encodeCompressedGtin(e, t.HEADER_SIZE), this.encodeCompressedWeight(e, t.HEADER_SIZE + mn.GTIN_SIZE, t.WEIGHT_SIZE), e.toString();
	}, t.HEADER_SIZE = 5, t.WEIGHT_SIZE = 15, t;
}(mn), _n = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), vn = function(e) {
	_n(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.addWeightCode = function(e, t) {
		e.append("(3103)");
	}, t.prototype.checkWeight = function(e) {
		return e;
	}, t;
}(gn), yn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), bn = function(e) {
	yn(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.addWeightCode = function(e, t) {
		t < 1e4 ? e.append("(3202)") : e.append("(3203)");
	}, t.prototype.checkWeight = function(e) {
		return e < 1e4 ? e : e - 1e4;
	}, t;
}(gn), xn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Sn = function(e) {
	xn(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.parseInformation = function() {
		if (this.getInformation().getSize() < t.HEADER_SIZE + cn.GTIN_SIZE) throw new I();
		var e = new F();
		this.encodeCompressedGtin(e, t.HEADER_SIZE);
		var n = this.getGeneralDecoder().extractNumericValueFromBitArray(t.HEADER_SIZE + cn.GTIN_SIZE, t.LAST_DIGIT_SIZE);
		e.append("(392"), e.append(n), e.append(")");
		var r = this.getGeneralDecoder().decodeGeneralPurposeField(t.HEADER_SIZE + cn.GTIN_SIZE + t.LAST_DIGIT_SIZE, null);
		return e.append(r.getNewString()), e.toString();
	}, t.HEADER_SIZE = 8, t.LAST_DIGIT_SIZE = 2, t;
}(cn), Cn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), wn = function(e) {
	Cn(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.parseInformation = function() {
		if (this.getInformation().getSize() < t.HEADER_SIZE + cn.GTIN_SIZE) throw new I();
		var e = new F();
		this.encodeCompressedGtin(e, t.HEADER_SIZE);
		var n = this.getGeneralDecoder().extractNumericValueFromBitArray(t.HEADER_SIZE + cn.GTIN_SIZE, t.LAST_DIGIT_SIZE);
		e.append("(393"), e.append(n), e.append(")");
		var r = this.getGeneralDecoder().extractNumericValueFromBitArray(t.HEADER_SIZE + cn.GTIN_SIZE + t.LAST_DIGIT_SIZE, t.FIRST_THREE_DIGITS_SIZE);
		r / 100 == 0 && e.append("0"), r / 10 == 0 && e.append("0"), e.append(r);
		var i = this.getGeneralDecoder().decodeGeneralPurposeField(t.HEADER_SIZE + cn.GTIN_SIZE + t.LAST_DIGIT_SIZE + t.FIRST_THREE_DIGITS_SIZE, null);
		return e.append(i.getNewString()), e.toString();
	}, t.HEADER_SIZE = 8, t.LAST_DIGIT_SIZE = 2, t.FIRST_THREE_DIGITS_SIZE = 10, t;
}(cn), Tn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), En = function(e) {
	Tn(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.dateCode = r, i.firstAIdigits = n, i;
	}
	return t.prototype.parseInformation = function() {
		if (this.getInformation().getSize() !== t.HEADER_SIZE + t.GTIN_SIZE + t.WEIGHT_SIZE + t.DATE_SIZE) throw new I();
		var e = new F();
		return this.encodeCompressedGtin(e, t.HEADER_SIZE), this.encodeCompressedWeight(e, t.HEADER_SIZE + t.GTIN_SIZE, t.WEIGHT_SIZE), this.encodeCompressedDate(e, t.HEADER_SIZE + t.GTIN_SIZE + t.WEIGHT_SIZE), e.toString();
	}, t.prototype.encodeCompressedDate = function(e, n) {
		var r = this.getGeneralDecoder().extractNumericValueFromBitArray(n, t.DATE_SIZE);
		if (r !== 38400) {
			e.append("("), e.append(this.dateCode), e.append(")");
			var i = r % 32;
			r /= 32;
			var a = r % 12 + 1;
			r /= 12;
			var o = r;
			o / 10 == 0 && e.append("0"), e.append(o), a / 10 == 0 && e.append("0"), e.append(a), i / 10 == 0 && e.append("0"), e.append(i);
		}
	}, t.prototype.addWeightCode = function(e, t) {
		e.append("("), e.append(this.firstAIdigits), e.append(t / 1e5), e.append(")");
	}, t.prototype.checkWeight = function(e) {
		return e % 1e5;
	}, t.HEADER_SIZE = 8, t.WEIGHT_SIZE = 20, t.DATE_SIZE = 16, t;
}(mn);
// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AbstractExpandedDecoderComplement.js
function Dn(e) {
	try {
		if (e.get(1)) return new un(e);
		if (!e.get(2)) return new fn(e);
		switch (an.extractNumericValueFromBitArray(e, 1, 4)) {
			case 4: return new vn(e);
			case 5: return new bn(e);
		}
		switch (an.extractNumericValueFromBitArray(e, 1, 5)) {
			case 12: return new Sn(e);
			case 13: return new wn(e);
		}
		switch (an.extractNumericValueFromBitArray(e, 1, 7)) {
			case 56: return new En(e, "310", "11");
			case 57: return new En(e, "320", "11");
			case 58: return new En(e, "310", "13");
			case 59: return new En(e, "320", "13");
			case 60: return new En(e, "310", "15");
			case 61: return new En(e, "320", "15");
			case 62: return new En(e, "310", "17");
			case 63: return new En(e, "320", "17");
		}
	} catch (t) {
		throw console.log(t), new Be("unknown decoder: " + e);
	}
}
// node_modules/@zxing/library/esm/core/oned/rss/expanded/ExpandedPair.js
var On = function() {
	function e(e, t, n, r) {
		this.leftchar = e, this.rightchar = t, this.finderpattern = n, this.maybeLast = r;
	}
	return e.prototype.mayBeLast = function() {
		return this.maybeLast;
	}, e.prototype.getLeftChar = function() {
		return this.leftchar;
	}, e.prototype.getRightChar = function() {
		return this.rightchar;
	}, e.prototype.getFinderPattern = function() {
		return this.finderpattern;
	}, e.prototype.mustBeLast = function() {
		return this.rightchar == null;
	}, e.prototype.toString = function() {
		return "[ " + this.leftchar + ", " + this.rightchar + " : " + (this.finderpattern == null ? "null" : this.finderpattern.getValue()) + " ]";
	}, e.equals = function(t, n) {
		return t instanceof e && e.equalsOrNull(t.leftchar, n.leftchar) && e.equalsOrNull(t.rightchar, n.rightchar) && e.equalsOrNull(t.finderpattern, n.finderpattern);
	}, e.equalsOrNull = function(t, n) {
		return t === null ? n === null : e.equals(t, n);
	}, e.prototype.hashCode = function() {
		return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
	}, e;
}(), kn = function() {
	function e(e, t, n) {
		this.pairs = e, this.rowNumber = t, this.wasReversed = n;
	}
	return e.prototype.getPairs = function() {
		return this.pairs;
	}, e.prototype.getRowNumber = function() {
		return this.rowNumber;
	}, e.prototype.isReversed = function() {
		return this.wasReversed;
	}, e.prototype.isEquivalent = function(e) {
		return this.checkEqualitity(this, e);
	}, e.prototype.toString = function() {
		return "{ " + this.pairs + " }";
	}, e.prototype.equals = function(t, n) {
		return t instanceof e && this.checkEqualitity(t, n) && t.wasReversed === n.wasReversed;
	}, e.prototype.checkEqualitity = function(e, t) {
		if (e && t) {
			var n;
			return e.forEach(function(e, r) {
				t.forEach(function(t) {
					e.getLeftChar().getValue() === t.getLeftChar().getValue() && e.getRightChar().getValue() === t.getRightChar().getValue() && e.getFinderPatter().getValue() === t.getFinderPatter().getValue() && (n = !0);
				});
			}), n;
		}
	}, e;
}(), An = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), jn = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Mn = function(e) {
	An(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.pairs = Array(t.MAX_PAIRS), n.rows = [], n.startEnd = [2], n;
	}
	return t.prototype.decodeRow = function(e, n, r) {
		this.pairs.length = 0, this.startFromEven = !1;
		try {
			return t.constructResult(this.decodeRow2pairs(e, n));
		} catch {}
		return this.pairs.length = 0, this.startFromEven = !0, t.constructResult(this.decodeRow2pairs(e, n));
	}, t.prototype.reset = function() {
		this.pairs.length = 0, this.rows.length = 0;
	}, t.prototype.decodeRow2pairs = function(e, t) {
		for (var n = !1; !n;) try {
			this.pairs.push(this.retrieveNextPair(t, this.pairs, e));
		} catch (e) {
			if (e instanceof I) {
				if (!this.pairs.length) throw new I();
				n = !0;
			}
		}
		if (this.checkChecksum()) return this.pairs;
		var r = !!this.rows.length;
		if (this.storeRow(e, !1), r) {
			var i = this.checkRowsBoolean(!1);
			if (i != null || (i = this.checkRowsBoolean(!0), i != null)) return i;
		}
		throw new I();
	}, t.prototype.checkRowsBoolean = function(e) {
		if (this.rows.length > 25) return this.rows.length = 0, null;
		this.pairs.length = 0, e && (this.rows = this.rows.reverse());
		var t = null;
		try {
			t = this.checkRows([], 0);
		} catch (e) {
			console.log(e);
		}
		return e && (this.rows = this.rows.reverse()), t;
	}, t.prototype.checkRows = function(e, n) {
		for (var r, i, a = n; a < this.rows.length; a++) {
			var o = this.rows[a];
			this.pairs.length = 0;
			try {
				for (var s = (r = void 0, jn(e)), c = s.next(); !c.done; c = s.next()) {
					var l = c.value;
					this.pairs.push(l.getPairs());
				}
			} catch (e) {
				r = { error: e };
			} finally {
				try {
					c && !c.done && (i = s.return) && i.call(s);
				} finally {
					if (r) throw r.error;
				}
			}
			if (this.pairs.push(o.getPairs()), t.isValidSequence(this.pairs)) {
				if (this.checkChecksum()) return this.pairs;
				var u = Array(e);
				u.push(o);
				try {
					return this.checkRows(u, a + 1);
				} catch (e) {
					console.log(e);
				}
			}
		}
		throw new I();
	}, t.isValidSequence = function(e) {
		var n, r;
		try {
			for (var i = jn(t.FINDER_PATTERN_SEQUENCES), a = i.next(); !a.done; a = i.next()) {
				var o = a.value;
				if (!(e.length > o.length)) {
					for (var s = !0, c = 0; c < e.length; c++) if (e[c].getFinderPattern().getValue() !== o[c]) {
						s = !1;
						break;
					}
					if (s) return !0;
				}
			}
		} catch (e) {
			n = { error: e };
		} finally {
			try {
				a && !a.done && (r = i.return) && r.call(i);
			} finally {
				if (n) throw n.error;
			}
		}
		return !1;
	}, t.prototype.storeRow = function(e, n) {
		for (var r = 0, i = !1, a = !1; r < this.rows.length;) {
			var o = this.rows[r];
			if (o.getRowNumber() > e) {
				a = o.isEquivalent(this.pairs);
				break;
			}
			i = o.isEquivalent(this.pairs), r++;
		}
		a || i || t.isPartialRow(this.pairs, this.rows) || (this.rows.push(r, new kn(this.pairs, e, n)), this.removePartialRows(this.pairs, this.rows));
	}, t.prototype.removePartialRows = function(e, t) {
		var n, r, i, a, o, s;
		try {
			for (var c = jn(t), l = c.next(); !l.done; l = c.next()) {
				var u = l.value;
				if (u.getPairs().length !== e.length) try {
					for (var d = (i = void 0, jn(u.getPairs())), f = d.next(); !f.done; f = d.next()) {
						var p = f.value;
						try {
							for (var m = (o = void 0, jn(e)), h = m.next(); !h.done; h = m.next()) {
								var g = h.value;
								if (On.equals(p, g)) break;
							}
						} catch (e) {
							o = { error: e };
						} finally {
							try {
								h && !h.done && (s = m.return) && s.call(m);
							} finally {
								if (o) throw o.error;
							}
						}
					}
				} catch (e) {
					i = { error: e };
				} finally {
					try {
						f && !f.done && (a = d.return) && a.call(d);
					} finally {
						if (i) throw i.error;
					}
				}
			}
		} catch (e) {
			n = { error: e };
		} finally {
			try {
				l && !l.done && (r = c.return) && r.call(c);
			} finally {
				if (n) throw n.error;
			}
		}
	}, t.isPartialRow = function(e, t) {
		var n, r, i, a, o, s;
		try {
			for (var c = jn(t), l = c.next(); !l.done; l = c.next()) {
				var u = l.value, d = !0;
				try {
					for (var f = (i = void 0, jn(e)), p = f.next(); !p.done; p = f.next()) {
						var m = p.value, h = !1;
						try {
							for (var g = (o = void 0, jn(u.getPairs())), _ = g.next(); !_.done; _ = g.next()) {
								var v = _.value;
								if (m.equals(v)) {
									h = !0;
									break;
								}
							}
						} catch (e) {
							o = { error: e };
						} finally {
							try {
								_ && !_.done && (s = g.return) && s.call(g);
							} finally {
								if (o) throw o.error;
							}
						}
						if (!h) {
							d = !1;
							break;
						}
					}
				} catch (e) {
					i = { error: e };
				} finally {
					try {
						p && !p.done && (a = f.return) && a.call(f);
					} finally {
						if (i) throw i.error;
					}
				}
				if (d) return !0;
			}
		} catch (e) {
			n = { error: e };
		} finally {
			try {
				l && !l.done && (r = c.return) && r.call(c);
			} finally {
				if (n) throw n.error;
			}
		}
		return !1;
	}, t.prototype.getRows = function() {
		return this.rows;
	}, t.constructResult = function(e) {
		var t = Dn(qt.buildBitArray(e)).parseInformation(), n = e[0].getFinderPattern().getResultPoints(), r = e[e.length - 1].getFinderPattern().getResultPoints();
		return new Ee(t, null, null, [
			n[0],
			n[1],
			r[0],
			r[1]
		], L.RSS_EXPANDED, null);
	}, t.prototype.checkChecksum = function() {
		var e = this.pairs.get(0), t = e.getLeftChar(), n = e.getRightChar();
		if (n === null) return !1;
		for (var r = n.getChecksumPortion(), i = 2, a = 1; a < this.pairs.size(); ++a) {
			var o = this.pairs.get(a);
			r += o.getLeftChar().getChecksumPortion(), i++;
			var s = o.getRightChar();
			s != null && (r += s.getChecksumPortion(), i++);
		}
		return r %= 211, 211 * (i - 4) + r === t.getValue();
	}, t.getNextSecondBar = function(e, t) {
		var n;
		return e.get(t) ? (n = e.getNextUnset(t), n = e.getNextSet(n)) : (n = e.getNextSet(t), n = e.getNextUnset(n)), n;
	}, t.prototype.retrieveNextPair = function(e, n, r) {
		var i = n.length % 2 == 0;
		this.startFromEven && (i = !i);
		var a, o = !0, s = -1;
		do
			this.findNextPair(e, n, s), a = this.parseFoundFinderPattern(e, r, i), a === null ? s = t.getNextSecondBar(e, this.startEnd[0]) : o = !1;
		while (o);
		var c = this.decodeDataCharacter(e, a, i, !0);
		if (!this.isEmptyPair(n) && n[n.length - 1].mustBeLast()) throw new I();
		var l;
		try {
			l = this.decodeDataCharacter(e, a, i, !1);
		} catch (e) {
			l = null, console.log(e);
		}
		return new On(c, l, a, !0);
	}, t.prototype.isEmptyPair = function(e) {
		return e.length === 0;
	}, t.prototype.findNextPair = function(e, n, r) {
		var i = this.getDecodeFinderCounters();
		i[0] = 0, i[1] = 0, i[2] = 0, i[3] = 0;
		var a = e.getSize(), o = r >= 0 ? r : this.isEmptyPair(n) ? 0 : n[n.length - 1].getFinderPattern().getStartEnd()[1], s = n.length % 2 != 0;
		this.startFromEven && (s = !s);
		for (var c = !1; o < a && (c = !e.get(o), c);) o++;
		for (var l = 0, u = o, d = o; d < a; d++) if (e.get(d) !== c) i[l]++;
		else {
			if (l === 3) {
				if (s && t.reverseCounters(i), t.isFinderPattern(i)) {
					this.startEnd[0] = u, this.startEnd[1] = d;
					return;
				}
				s && t.reverseCounters(i), u += i[0] + i[1], i[0] = i[2], i[1] = i[3], i[2] = 0, i[3] = 0, l--;
			} else l++;
			i[l] = 1, c = !c;
		}
		throw new I();
	}, t.reverseCounters = function(e) {
		for (var t = e.length, n = 0; n < t / 2; ++n) {
			var r = e[n];
			e[n] = e[t - n - 1], e[t - n - 1] = r;
		}
	}, t.prototype.parseFoundFinderPattern = function(e, n, r) {
		var i, a, o;
		if (r) {
			for (var s = this.startEnd[0] - 1; s >= 0 && !e.get(s);) s--;
			s++, i = this.startEnd[0] - s, a = s, o = this.startEnd[1];
		} else a = this.startEnd[0], o = e.getNextUnset(this.startEnd[1] + 1), i = o - this.startEnd[1];
		var c = this.getDecodeFinderCounters();
		T.arraycopy(c, 0, c, 1, c.length - 1), c[0] = i;
		var l;
		try {
			l = this.parseFinderValue(c, t.FINDER_PATTERNS);
		} catch {
			return null;
		}
		return new Wt(l, [a, o], a, o, n);
	}, t.prototype.decodeDataCharacter = function(e, n, r, i) {
		for (var a = this.getDataCharacterCounters(), o = 0; o < a.length; o++) a[o] = 0;
		if (i) t.recordPatternInReverse(e, n.getStartEnd()[0], a);
		else {
			t.recordPattern(e, n.getStartEnd()[1], a);
			for (var s = 0, c = a.length - 1; s < c; s++, c--) {
				var l = a[s];
				a[s] = a[c], a[c] = l;
			}
		}
		var u = 17, d = R.sum(new Int32Array(a)) / u, f = (n.getStartEnd()[1] - n.getStartEnd()[0]) / 15;
		if (Math.abs(d - f) / f > .3) throw new I();
		for (var p = this.getOddCounts(), m = this.getEvenCounts(), h = this.getOddRoundingErrors(), g = this.getEvenRoundingErrors(), s = 0; s < a.length; s++) {
			var _ = 1 * a[s] / d, v = _ + .5;
			if (v < 1) {
				if (_ < .3) throw new I();
				v = 1;
			} else if (v > 8) {
				if (_ > 8.7) throw new I();
				v = 8;
			}
			var y = s / 2;
			s & 1 ? (m[y] = v, g[y] = _ - v) : (p[y] = v, h[y] = _ - v);
		}
		this.adjustOddEvenCounts(u);
		for (var b = 4 * n.getValue() + (r ? 0 : 2) + +!i - 1, x = 0, S = 0, s = p.length - 1; s >= 0; s--) {
			if (t.isNotA1left(n, r, i)) {
				var C = t.WEIGHTS[b][2 * s];
				S += p[s] * C;
			}
			x += p[s];
		}
		for (var w = 0, s = m.length - 1; s >= 0; s--) if (t.isNotA1left(n, r, i)) {
			var C = t.WEIGHTS[b][2 * s + 1];
			w += m[s] * C;
		}
		var T = S + w;
		if (x & 1 || x > 13 || x < 4) throw new I();
		var E = (13 - x) / 2, D = t.SYMBOL_WIDEST[E], ee = 9 - D, O = Kt.getRSSvalue(p, D, !0), te = Kt.getRSSvalue(m, ee, !1), k = t.EVEN_TOTAL_SUBSET[E], A = t.GSUM[E];
		return new Ut(O * k + te + A, T);
	}, t.isNotA1left = function(e, t, n) {
		return !(e.getValue() === 0 && t && n);
	}, t.prototype.adjustOddEvenCounts = function(e) {
		var n = R.sum(new Int32Array(this.getOddCounts())), r = R.sum(new Int32Array(this.getEvenCounts())), i = !1, a = !1;
		n > 13 ? a = !0 : n < 4 && (i = !0);
		var o = !1, s = !1;
		r > 13 ? s = !0 : r < 4 && (o = !0);
		var c = n + r - e, l = (n & 1) == 1, u = !(r & 1);
		if (c === 1) {
			if (l) {
				if (u) throw new I();
				a = !0;
			} else {
				if (!u) throw new I();
				s = !0;
			}
		} else if (c === -1) {
			if (l) {
				if (u) throw new I();
				i = !0;
			} else {
				if (!u) throw new I();
				o = !0;
			}
		} else if (c === 0) {
			if (l) {
				if (!u) throw new I();
				n < r ? (i = !0, s = !0) : (a = !0, o = !0);
			} else if (u) throw new I();
		} else throw new I();
		if (i) {
			if (a) throw new I();
			t.increment(this.getOddCounts(), this.getOddRoundingErrors());
		}
		if (a && t.decrement(this.getOddCounts(), this.getOddRoundingErrors()), o) {
			if (s) throw new I();
			t.increment(this.getEvenCounts(), this.getOddRoundingErrors());
		}
		s && t.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
	}, t.SYMBOL_WIDEST = [
		7,
		5,
		4,
		3,
		1
	], t.EVEN_TOTAL_SUBSET = [
		4,
		20,
		52,
		104,
		204
	], t.GSUM = [
		0,
		348,
		1388,
		2948,
		3988
	], t.FINDER_PATTERNS = [
		Int32Array.from([
			1,
			8,
			4,
			1
		]),
		Int32Array.from([
			3,
			6,
			4,
			1
		]),
		Int32Array.from([
			3,
			4,
			6,
			1
		]),
		Int32Array.from([
			3,
			2,
			8,
			1
		]),
		Int32Array.from([
			2,
			6,
			5,
			1
		]),
		Int32Array.from([
			2,
			2,
			9,
			1
		])
	], t.WEIGHTS = [
		[
			1,
			3,
			9,
			27,
			81,
			32,
			96,
			77
		],
		[
			20,
			60,
			180,
			118,
			143,
			7,
			21,
			63
		],
		[
			189,
			145,
			13,
			39,
			117,
			140,
			209,
			205
		],
		[
			193,
			157,
			49,
			147,
			19,
			57,
			171,
			91
		],
		[
			62,
			186,
			136,
			197,
			169,
			85,
			44,
			132
		],
		[
			185,
			133,
			188,
			142,
			4,
			12,
			36,
			108
		],
		[
			113,
			128,
			173,
			97,
			80,
			29,
			87,
			50
		],
		[
			150,
			28,
			84,
			41,
			123,
			158,
			52,
			156
		],
		[
			46,
			138,
			203,
			187,
			139,
			206,
			196,
			166
		],
		[
			76,
			17,
			51,
			153,
			37,
			111,
			122,
			155
		],
		[
			43,
			129,
			176,
			106,
			107,
			110,
			119,
			146
		],
		[
			16,
			48,
			144,
			10,
			30,
			90,
			59,
			177
		],
		[
			109,
			116,
			137,
			200,
			178,
			112,
			125,
			164
		],
		[
			70,
			210,
			208,
			202,
			184,
			130,
			179,
			115
		],
		[
			134,
			191,
			151,
			31,
			93,
			68,
			204,
			190
		],
		[
			148,
			22,
			66,
			198,
			172,
			94,
			71,
			2
		],
		[
			6,
			18,
			54,
			162,
			64,
			192,
			154,
			40
		],
		[
			120,
			149,
			25,
			75,
			14,
			42,
			126,
			167
		],
		[
			79,
			26,
			78,
			23,
			69,
			207,
			199,
			175
		],
		[
			103,
			98,
			83,
			38,
			114,
			131,
			182,
			124
		],
		[
			161,
			61,
			183,
			127,
			170,
			88,
			53,
			159
		],
		[
			55,
			165,
			73,
			8,
			24,
			72,
			5,
			15
		],
		[
			45,
			135,
			194,
			160,
			58,
			174,
			100,
			89
		]
	], t.FINDER_PAT_A = 0, t.FINDER_PAT_B = 1, t.FINDER_PAT_C = 2, t.FINDER_PAT_D = 3, t.FINDER_PAT_E = 4, t.FINDER_PAT_F = 5, t.FINDER_PATTERN_SEQUENCES = [
		[t.FINDER_PAT_A, t.FINDER_PAT_A],
		[
			t.FINDER_PAT_A,
			t.FINDER_PAT_B,
			t.FINDER_PAT_B
		],
		[
			t.FINDER_PAT_A,
			t.FINDER_PAT_C,
			t.FINDER_PAT_B,
			t.FINDER_PAT_D
		],
		[
			t.FINDER_PAT_A,
			t.FINDER_PAT_E,
			t.FINDER_PAT_B,
			t.FINDER_PAT_D,
			t.FINDER_PAT_C
		],
		[
			t.FINDER_PAT_A,
			t.FINDER_PAT_E,
			t.FINDER_PAT_B,
			t.FINDER_PAT_D,
			t.FINDER_PAT_D,
			t.FINDER_PAT_F
		],
		[
			t.FINDER_PAT_A,
			t.FINDER_PAT_E,
			t.FINDER_PAT_B,
			t.FINDER_PAT_D,
			t.FINDER_PAT_E,
			t.FINDER_PAT_F,
			t.FINDER_PAT_F
		],
		[
			t.FINDER_PAT_A,
			t.FINDER_PAT_A,
			t.FINDER_PAT_B,
			t.FINDER_PAT_B,
			t.FINDER_PAT_C,
			t.FINDER_PAT_C,
			t.FINDER_PAT_D,
			t.FINDER_PAT_D
		],
		[
			t.FINDER_PAT_A,
			t.FINDER_PAT_A,
			t.FINDER_PAT_B,
			t.FINDER_PAT_B,
			t.FINDER_PAT_C,
			t.FINDER_PAT_C,
			t.FINDER_PAT_D,
			t.FINDER_PAT_E,
			t.FINDER_PAT_E
		],
		[
			t.FINDER_PAT_A,
			t.FINDER_PAT_A,
			t.FINDER_PAT_B,
			t.FINDER_PAT_B,
			t.FINDER_PAT_C,
			t.FINDER_PAT_C,
			t.FINDER_PAT_D,
			t.FINDER_PAT_E,
			t.FINDER_PAT_F,
			t.FINDER_PAT_F
		],
		[
			t.FINDER_PAT_A,
			t.FINDER_PAT_A,
			t.FINDER_PAT_B,
			t.FINDER_PAT_B,
			t.FINDER_PAT_C,
			t.FINDER_PAT_D,
			t.FINDER_PAT_D,
			t.FINDER_PAT_E,
			t.FINDER_PAT_E,
			t.FINDER_PAT_F,
			t.FINDER_PAT_F
		]
	], t.MAX_PAIRS = 11, t;
}(Ht), Nn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Pn = function(e) {
	Nn(t, e);
	function t(t, n, r) {
		var i = e.call(this, t, n) || this;
		return i.count = 0, i.finderPattern = r, i;
	}
	return t.prototype.getFinderPattern = function() {
		return this.finderPattern;
	}, t.prototype.getCount = function() {
		return this.count;
	}, t.prototype.incrementCount = function() {
		this.count++;
	}, t;
}(Ut), Fn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), In = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ln = function(e) {
	Fn(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.possibleLeftPairs = [], t.possibleRightPairs = [], t;
	}
	return t.prototype.decodeRow = function(e, n, r) {
		var i, a, o, s, c = this.decodePair(n, !1, e, r);
		t.addOrTally(this.possibleLeftPairs, c), n.reverse();
		var l = this.decodePair(n, !0, e, r);
		t.addOrTally(this.possibleRightPairs, l), n.reverse();
		try {
			for (var u = In(this.possibleLeftPairs), d = u.next(); !d.done; d = u.next()) {
				var f = d.value;
				if (f.getCount() > 1) try {
					for (var p = (o = void 0, In(this.possibleRightPairs)), m = p.next(); !m.done; m = p.next()) {
						var h = m.value;
						if (h.getCount() > 1 && t.checkChecksum(f, h)) return t.constructResult(f, h);
					}
				} catch (e) {
					o = { error: e };
				} finally {
					try {
						m && !m.done && (s = p.return) && s.call(p);
					} finally {
						if (o) throw o.error;
					}
				}
			}
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				d && !d.done && (a = u.return) && a.call(u);
			} finally {
				if (i) throw i.error;
			}
		}
		throw new I();
	}, t.addOrTally = function(e, t) {
		var n, r;
		if (t != null) {
			var i = !1;
			try {
				for (var a = In(e), o = a.next(); !o.done; o = a.next()) {
					var s = o.value;
					if (s.getValue() === t.getValue()) {
						s.incrementCount(), i = !0;
						break;
					}
				}
			} catch (e) {
				n = { error: e };
			} finally {
				try {
					o && !o.done && (r = a.return) && r.call(a);
				} finally {
					if (n) throw n.error;
				}
			}
			i || e.push(t);
		}
	}, t.prototype.reset = function() {
		this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0;
	}, t.constructResult = function(e, t) {
		for (var n = 4537077 * e.getValue() + t.getValue(), r = new String(n).toString(), i = new F(), a = 13 - r.length; a > 0; a--) i.append("0");
		i.append(r);
		for (var o = 0, a = 0; a < 13; a++) {
			var s = i.charAt(a).charCodeAt(0) - 48;
			o += a & 1 ? s : 3 * s;
		}
		o = 10 - o % 10, o === 10 && (o = 0), i.append(o.toString());
		var c = e.getFinderPattern().getResultPoints(), l = t.getFinderPattern().getResultPoints();
		return new Ee(i.toString(), null, 0, [
			c[0],
			c[1],
			l[0],
			l[1]
		], L.RSS_14, (/* @__PURE__ */ new Date()).getTime());
	}, t.checkChecksum = function(e, t) {
		var n = (e.getChecksumPortion() + 16 * t.getChecksumPortion()) % 79, r = 9 * e.getFinderPattern().getValue() + t.getFinderPattern().getValue();
		return r > 72 && r--, r > 8 && r--, n === r;
	}, t.prototype.decodePair = function(e, t, n, r) {
		try {
			var i = this.findFinderPattern(e, t), a = this.parseFoundFinderPattern(e, n, t, i), o = r == null ? null : r.get(j.NEED_RESULT_POINT_CALLBACK);
			if (o != null) {
				var s = (i[0] + i[1]) / 2;
				t && (s = e.getSize() - 1 - s), o.foundPossibleResultPoint(new z(s, n));
			}
			var c = this.decodeDataCharacter(e, a, !0), l = this.decodeDataCharacter(e, a, !1);
			return new Pn(1597 * c.getValue() + l.getValue(), c.getChecksumPortion() + 4 * l.getChecksumPortion(), a);
		} catch {
			return null;
		}
	}, t.prototype.decodeDataCharacter = function(e, n, r) {
		for (var i = this.getDataCharacterCounters(), a = 0; a < i.length; a++) i[a] = 0;
		if (r) it.recordPatternInReverse(e, n.getStartEnd()[0], i);
		else {
			it.recordPattern(e, n.getStartEnd()[1] + 1, i);
			for (var o = 0, s = i.length - 1; o < s; o++, s--) {
				var c = i[o];
				i[o] = i[s], i[s] = c;
			}
		}
		for (var l = r ? 16 : 15, u = R.sum(new Int32Array(i)) / l, d = this.getOddCounts(), f = this.getEvenCounts(), p = this.getOddRoundingErrors(), m = this.getEvenRoundingErrors(), o = 0; o < i.length; o++) {
			var h = i[o] / u, g = Math.floor(h + .5);
			g < 1 ? g = 1 : g > 8 && (g = 8);
			var _ = Math.floor(o / 2);
			o & 1 ? (f[_] = g, m[_] = h - g) : (d[_] = g, p[_] = h - g);
		}
		this.adjustOddEvenCounts(r, l);
		for (var v = 0, y = 0, o = d.length - 1; o >= 0; o--) y *= 9, y += d[o], v += d[o];
		for (var b = 0, x = 0, o = f.length - 1; o >= 0; o--) b *= 9, b += f[o], x += f[o];
		var S = y + 3 * b;
		if (r) {
			if (v & 1 || v > 12 || v < 4) throw new I();
			var C = (12 - v) / 2, w = t.OUTSIDE_ODD_WIDEST[C], T = 9 - w, E = Kt.getRSSvalue(d, w, !1), D = Kt.getRSSvalue(f, T, !0), ee = t.OUTSIDE_EVEN_TOTAL_SUBSET[C], O = t.OUTSIDE_GSUM[C];
			return new Ut(E * ee + D + O, S);
		}
		if (x & 1 || x > 10 || x < 4) throw new I();
		var C = (10 - x) / 2, w = t.INSIDE_ODD_WIDEST[C], T = 9 - w, E = Kt.getRSSvalue(d, w, !0), D = Kt.getRSSvalue(f, T, !1), te = t.INSIDE_ODD_TOTAL_SUBSET[C], O = t.INSIDE_GSUM[C];
		return new Ut(D * te + E + O, S);
	}, t.prototype.findFinderPattern = function(e, t) {
		var n = this.getDecodeFinderCounters();
		n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
		for (var r = e.getSize(), i = !1, a = 0; a < r && (i = !e.get(a), t !== i);) a++;
		for (var o = 0, s = a, c = a; c < r; c++) if (e.get(c) !== i) n[o]++;
		else {
			if (o === 3) {
				if (Ht.isFinderPattern(n)) return [s, c];
				s += n[0] + n[1], n[0] = n[2], n[1] = n[3], n[2] = 0, n[3] = 0, o--;
			} else o++;
			n[o] = 1, i = !i;
		}
		throw new I();
	}, t.prototype.parseFoundFinderPattern = function(e, n, r, i) {
		for (var a = e.get(i[0]), o = i[0] - 1; o >= 0 && a !== e.get(o);) o--;
		o++;
		var s = i[0] - o, c = this.getDecodeFinderCounters(), l = new Int32Array(c.length);
		T.arraycopy(c, 0, l, 1, c.length - 1), l[0] = s;
		var u = this.parseFinderValue(l, t.FINDER_PATTERNS), d = o, f = i[1];
		return r && (d = e.getSize() - 1 - d, f = e.getSize() - 1 - f), new Wt(u, [o, i[1]], d, f, n);
	}, t.prototype.adjustOddEvenCounts = function(e, t) {
		var n = R.sum(new Int32Array(this.getOddCounts())), r = R.sum(new Int32Array(this.getEvenCounts())), i = !1, a = !1, o = !1, s = !1;
		e ? (n > 12 ? a = !0 : n < 4 && (i = !0), r > 12 ? s = !0 : r < 4 && (o = !0)) : (n > 11 ? a = !0 : n < 5 && (i = !0), r > 10 ? s = !0 : r < 4 && (o = !0));
		var c = n + r - t, l = (n & 1) == +!!e, u = (r & 1) == 1;
		if (c === 1) {
			if (l) {
				if (u) throw new I();
				a = !0;
			} else {
				if (!u) throw new I();
				s = !0;
			}
		} else if (c === -1) {
			if (l) {
				if (u) throw new I();
				i = !0;
			} else {
				if (!u) throw new I();
				o = !0;
			}
		} else if (c === 0) {
			if (l) {
				if (!u) throw new I();
				n < r ? (i = !0, s = !0) : (a = !0, o = !0);
			} else if (u) throw new I();
		} else throw new I();
		if (i) {
			if (a) throw new I();
			Ht.increment(this.getOddCounts(), this.getOddRoundingErrors());
		}
		if (a && Ht.decrement(this.getOddCounts(), this.getOddRoundingErrors()), o) {
			if (s) throw new I();
			Ht.increment(this.getEvenCounts(), this.getOddRoundingErrors());
		}
		s && Ht.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
	}, t.OUTSIDE_EVEN_TOTAL_SUBSET = [
		1,
		10,
		34,
		70,
		126
	], t.INSIDE_ODD_TOTAL_SUBSET = [
		4,
		20,
		48,
		81
	], t.OUTSIDE_GSUM = [
		0,
		161,
		961,
		2015,
		2715
	], t.INSIDE_GSUM = [
		0,
		336,
		1036,
		1516
	], t.OUTSIDE_ODD_WIDEST = [
		8,
		6,
		4,
		3,
		1
	], t.INSIDE_ODD_WIDEST = [
		2,
		4,
		6,
		8
	], t.FINDER_PATTERNS = [
		Int32Array.from([
			3,
			8,
			2,
			1
		]),
		Int32Array.from([
			3,
			5,
			5,
			1
		]),
		Int32Array.from([
			3,
			3,
			7,
			1
		]),
		Int32Array.from([
			3,
			1,
			9,
			1
		]),
		Int32Array.from([
			2,
			7,
			4,
			1
		]),
		Int32Array.from([
			2,
			5,
			6,
			1
		]),
		Int32Array.from([
			2,
			3,
			8,
			1
		]),
		Int32Array.from([
			1,
			5,
			7,
			1
		]),
		Int32Array.from([
			1,
			3,
			9,
			1
		])
	], t;
}(Ht), Rn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), zn = function(e) {
	Rn(t, e);
	function t(t) {
		var n = e.call(this) || this;
		n.readers = [];
		var r = t ? t.get(j.POSSIBLE_FORMATS) : null, i = t && t.get(j.ASSUME_CODE_39_CHECK_DIGIT) !== void 0, a = t && t.get(j.ENABLE_CODE_39_EXTENDED_MODE) !== void 0;
		return r && ((r.includes(L.EAN_13) || r.includes(L.UPC_A) || r.includes(L.EAN_8) || r.includes(L.UPC_E)) && n.readers.push(new Rt(t)), r.includes(L.CODE_39) && n.readers.push(new lt(i, a)), r.includes(L.CODE_93) && n.readers.push(new ft()), r.includes(L.CODE_128) && n.readers.push(new ot()), r.includes(L.ITF) && n.readers.push(new ht()), r.includes(L.CODABAR) && n.readers.push(new Bt()), r.includes(L.RSS_14) && n.readers.push(new Ln()), r.includes(L.RSS_EXPANDED) && (console.warn("RSS Expanded reader IS NOT ready for production yet! use at your own risk."), n.readers.push(new Mn()))), n.readers.length === 0 && (n.readers.push(new Rt(t)), n.readers.push(new lt()), n.readers.push(new ft()), n.readers.push(new Rt(t)), n.readers.push(new ot()), n.readers.push(new ht()), n.readers.push(new Ln())), n;
	}
	return t.prototype.decodeRow = function(e, t, n) {
		for (var r = 0; r < this.readers.length; r++) try {
			return this.readers[r].decodeRow(e, t, n);
		} catch {}
		throw new I();
	}, t.prototype.reset = function() {
		this.readers.forEach(function(e) {
			return e.reset();
		});
	}, t;
}(it), Bn = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	Bn(t, e);
	function t(t, n) {
		return t === void 0 && (t = 500), e.call(this, new zn(n), t, n) || this;
	}
	return t;
})(Te);
// node_modules/@zxing/library/esm/core/datamatrix/decoder/Version.js
var Vn = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, V = function() {
	function e(e, t, n) {
		this.ecCodewords = e, this.ecBlocks = [t], n && this.ecBlocks.push(n);
	}
	return e.prototype.getECCodewords = function() {
		return this.ecCodewords;
	}, e.prototype.getECBlocks = function() {
		return this.ecBlocks;
	}, e;
}(), H = function() {
	function e(e, t) {
		this.count = e, this.dataCodewords = t;
	}
	return e.prototype.getCount = function() {
		return this.count;
	}, e.prototype.getDataCodewords = function() {
		return this.dataCodewords;
	}, e;
}(), Hn = function() {
	function e(e, t, n, r, i, a) {
		var o, s;
		this.versionNumber = e, this.symbolSizeRows = t, this.symbolSizeColumns = n, this.dataRegionSizeRows = r, this.dataRegionSizeColumns = i, this.ecBlocks = a;
		var c = 0, l = a.getECCodewords(), u = a.getECBlocks();
		try {
			for (var d = Vn(u), f = d.next(); !f.done; f = d.next()) {
				var p = f.value;
				c += p.getCount() * (p.getDataCodewords() + l);
			}
		} catch (e) {
			o = { error: e };
		} finally {
			try {
				f && !f.done && (s = d.return) && s.call(d);
			} finally {
				if (o) throw o.error;
			}
		}
		this.totalCodewords = c;
	}
	return e.prototype.getVersionNumber = function() {
		return this.versionNumber;
	}, e.prototype.getSymbolSizeRows = function() {
		return this.symbolSizeRows;
	}, e.prototype.getSymbolSizeColumns = function() {
		return this.symbolSizeColumns;
	}, e.prototype.getDataRegionSizeRows = function() {
		return this.dataRegionSizeRows;
	}, e.prototype.getDataRegionSizeColumns = function() {
		return this.dataRegionSizeColumns;
	}, e.prototype.getTotalCodewords = function() {
		return this.totalCodewords;
	}, e.prototype.getECBlocks = function() {
		return this.ecBlocks;
	}, e.getVersionForDimensions = function(t, n) {
		var r, i;
		if (t & 1 || n & 1) throw new M();
		try {
			for (var a = Vn(e.VERSIONS), o = a.next(); !o.done; o = a.next()) {
				var s = o.value;
				if (s.symbolSizeRows === t && s.symbolSizeColumns === n) return s;
			}
		} catch (e) {
			r = { error: e };
		} finally {
			try {
				o && !o.done && (i = a.return) && i.call(a);
			} finally {
				if (r) throw r.error;
			}
		}
		throw new M();
	}, e.prototype.toString = function() {
		return "" + this.versionNumber;
	}, e.buildVersions = function() {
		return [
			new e(1, 10, 10, 8, 8, new V(5, new H(1, 3))),
			new e(2, 12, 12, 10, 10, new V(7, new H(1, 5))),
			new e(3, 14, 14, 12, 12, new V(10, new H(1, 8))),
			new e(4, 16, 16, 14, 14, new V(12, new H(1, 12))),
			new e(5, 18, 18, 16, 16, new V(14, new H(1, 18))),
			new e(6, 20, 20, 18, 18, new V(18, new H(1, 22))),
			new e(7, 22, 22, 20, 20, new V(20, new H(1, 30))),
			new e(8, 24, 24, 22, 22, new V(24, new H(1, 36))),
			new e(9, 26, 26, 24, 24, new V(28, new H(1, 44))),
			new e(10, 32, 32, 14, 14, new V(36, new H(1, 62))),
			new e(11, 36, 36, 16, 16, new V(42, new H(1, 86))),
			new e(12, 40, 40, 18, 18, new V(48, new H(1, 114))),
			new e(13, 44, 44, 20, 20, new V(56, new H(1, 144))),
			new e(14, 48, 48, 22, 22, new V(68, new H(1, 174))),
			new e(15, 52, 52, 24, 24, new V(42, new H(2, 102))),
			new e(16, 64, 64, 14, 14, new V(56, new H(2, 140))),
			new e(17, 72, 72, 16, 16, new V(36, new H(4, 92))),
			new e(18, 80, 80, 18, 18, new V(48, new H(4, 114))),
			new e(19, 88, 88, 20, 20, new V(56, new H(4, 144))),
			new e(20, 96, 96, 22, 22, new V(68, new H(4, 174))),
			new e(21, 104, 104, 24, 24, new V(56, new H(6, 136))),
			new e(22, 120, 120, 18, 18, new V(68, new H(6, 175))),
			new e(23, 132, 132, 20, 20, new V(62, new H(8, 163))),
			new e(24, 144, 144, 22, 22, new V(62, new H(8, 156), new H(2, 155))),
			new e(25, 8, 18, 6, 16, new V(7, new H(1, 5))),
			new e(26, 8, 32, 6, 14, new V(11, new H(1, 10))),
			new e(27, 12, 26, 10, 24, new V(14, new H(1, 16))),
			new e(28, 12, 36, 10, 16, new V(18, new H(1, 22))),
			new e(29, 16, 36, 14, 16, new V(24, new H(1, 32))),
			new e(30, 16, 48, 14, 22, new V(28, new H(1, 49)))
		];
	}, e.VERSIONS = e.buildVersions(), e;
}(), Un = function() {
	function e(t) {
		var n = t.getHeight();
		if (n < 8 || n > 144 || n & 1) throw new M();
		this.version = e.readVersion(t), this.mappingBitMatrix = this.extractDataRegion(t), this.readMappingMatrix = new ue(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
	}
	return e.prototype.getVersion = function() {
		return this.version;
	}, e.readVersion = function(e) {
		var t = e.getHeight(), n = e.getWidth();
		return Hn.getVersionForDimensions(t, n);
	}, e.prototype.readCodewords = function() {
		var e = new Int8Array(this.version.getTotalCodewords()), t = 0, n = 4, r = 0, i = this.mappingBitMatrix.getHeight(), a = this.mappingBitMatrix.getWidth(), o = !1, s = !1, c = !1, l = !1;
		do
			if (n === i && r === 0 && !o) e[t++] = this.readCorner1(i, a) & 255, n -= 2, r += 2, o = !0;
			else if (n === i - 2 && r === 0 && a & 3 && !s) e[t++] = this.readCorner2(i, a) & 255, n -= 2, r += 2, s = !0;
			else if (n === i + 4 && r === 2 && !(a & 7) && !c) e[t++] = this.readCorner3(i, a) & 255, n -= 2, r += 2, c = !0;
			else if (n === i - 2 && r === 0 && (a & 7) == 4 && !l) e[t++] = this.readCorner4(i, a) & 255, n -= 2, r += 2, l = !0;
			else {
				do
					n < i && r >= 0 && !this.readMappingMatrix.get(r, n) && (e[t++] = this.readUtah(n, r, i, a) & 255), n -= 2, r += 2;
				while (n >= 0 && r < a);
				n += 1, r += 3;
				do
					n >= 0 && r < a && !this.readMappingMatrix.get(r, n) && (e[t++] = this.readUtah(n, r, i, a) & 255), n += 2, r -= 2;
				while (n < i && r >= 0);
				n += 3, r += 1;
			}
		while (n < i || r < a);
		if (t !== this.version.getTotalCodewords()) throw new M();
		return e;
	}, e.prototype.readModule = function(e, t, n, r) {
		return e < 0 && (e += n, t += 4 - (n + 4 & 7)), t < 0 && (t += r, e += 4 - (r + 4 & 7)), this.readMappingMatrix.set(t, e), this.mappingBitMatrix.get(t, e);
	}, e.prototype.readUtah = function(e, t, n, r) {
		var i = 0;
		return this.readModule(e - 2, t - 2, n, r) && (i |= 1), i <<= 1, this.readModule(e - 2, t - 1, n, r) && (i |= 1), i <<= 1, this.readModule(e - 1, t - 2, n, r) && (i |= 1), i <<= 1, this.readModule(e - 1, t - 1, n, r) && (i |= 1), i <<= 1, this.readModule(e - 1, t, n, r) && (i |= 1), i <<= 1, this.readModule(e, t - 2, n, r) && (i |= 1), i <<= 1, this.readModule(e, t - 1, n, r) && (i |= 1), i <<= 1, this.readModule(e, t, n, r) && (i |= 1), i;
	}, e.prototype.readCorner1 = function(e, t) {
		var n = 0;
		return this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 1, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(2, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(3, t - 1, e, t) && (n |= 1), n;
	}, e.prototype.readCorner2 = function(e, t) {
		var n = 0;
		return this.readModule(e - 3, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 2, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 4, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 3, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n;
	}, e.prototype.readCorner3 = function(e, t) {
		var n = 0;
		return this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 3, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 3, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n;
	}, e.prototype.readCorner4 = function(e, t) {
		var n = 0;
		return this.readModule(e - 3, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 2, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(2, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(3, t - 1, e, t) && (n |= 1), n;
	}, e.prototype.extractDataRegion = function(e) {
		var t = this.version.getSymbolSizeRows(), n = this.version.getSymbolSizeColumns();
		if (e.getHeight() !== t) throw new b("Dimension of bitMatrix must match the version size");
		for (var r = this.version.getDataRegionSizeRows(), i = this.version.getDataRegionSizeColumns(), a = t / r | 0, o = n / i | 0, s = a * r, c = new ue(o * i, s), l = 0; l < a; ++l) for (var u = l * r, d = 0; d < o; ++d) for (var f = d * i, p = 0; p < r; ++p) for (var m = l * (r + 2) + 1 + p, h = u + p, g = 0; g < i; ++g) {
			var _ = d * (i + 2) + 1 + g;
			if (e.get(_, m)) {
				var v = f + g;
				c.set(v, h);
			}
		}
		return c;
	}, e;
}(), Wn = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Gn = function() {
	function e(e, t) {
		this.numDataCodewords = e, this.codewords = t;
	}
	return e.getDataBlocks = function(t, n) {
		var r, i, a, o, s = n.getECBlocks(), c = 0, l = s.getECBlocks();
		try {
			for (var u = Wn(l), d = u.next(); !d.done; d = u.next()) {
				var f = d.value;
				c += f.getCount();
			}
		} catch (e) {
			r = { error: e };
		} finally {
			try {
				d && !d.done && (i = u.return) && i.call(u);
			} finally {
				if (r) throw r.error;
			}
		}
		var p = Array(c), m = 0;
		try {
			for (var h = Wn(l), g = h.next(); !g.done; g = h.next()) for (var f = g.value, _ = 0; _ < f.getCount(); _++) {
				var v = f.getDataCodewords(), y = s.getECCodewords() + v;
				p[m++] = new e(v, new Uint8Array(y));
			}
		} catch (e) {
			a = { error: e };
		} finally {
			try {
				g && !g.done && (o = h.return) && o.call(h);
			} finally {
				if (a) throw a.error;
			}
		}
		for (var x = p[0].codewords.length - s.getECCodewords(), S = x - 1, C = 0, _ = 0; _ < S; _++) for (var w = 0; w < m; w++) p[w].codewords[_] = t[C++];
		for (var T = n.getVersionNumber() === 24, E = T ? 8 : m, w = 0; w < E; w++) p[w].codewords[x - 1] = t[C++];
		for (var D = p[0].codewords.length, _ = x; _ < D; _++) for (var w = 0; w < m; w++) {
			var ee = T ? (w + 8) % m : w, O = T && ee > 7 ? _ - 1 : _;
			p[ee].codewords[O] = t[C++];
		}
		if (C !== t.length) throw new b();
		return p;
	}, e.prototype.getNumDataCodewords = function() {
		return this.numDataCodewords;
	}, e.prototype.getCodewords = function() {
		return this.codewords;
	}, e;
}(), Kn = function() {
	function e(e) {
		this.bytes = e, this.byteOffset = 0, this.bitOffset = 0;
	}
	return e.prototype.getBitOffset = function() {
		return this.bitOffset;
	}, e.prototype.getByteOffset = function() {
		return this.byteOffset;
	}, e.prototype.readBits = function(e) {
		if (e < 1 || e > 32 || e > this.available()) throw new b("" + e);
		var t = 0, n = this.bitOffset, r = this.byteOffset, i = this.bytes;
		if (n > 0) {
			var a = 8 - n, o = e < a ? e : a, s = a - o, c = 255 >> 8 - o << s;
			t = (i[r] & c) >> s, e -= o, n += o, n === 8 && (n = 0, r++);
		}
		if (e > 0) {
			for (; e >= 8;) t = t << 8 | i[r] & 255, r++, e -= 8;
			if (e > 0) {
				var s = 8 - e, c = 255 >> s << s;
				t = t << e | (i[r] & c) >> s, n += e;
			}
		}
		return this.bitOffset = n, this.byteOffset = r, t;
	}, e.prototype.available = function() {
		return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
	}, e;
}(), qn;
(function(e) {
	e[e.PAD_ENCODE = 0] = "PAD_ENCODE", e[e.ASCII_ENCODE = 1] = "ASCII_ENCODE", e[e.C40_ENCODE = 2] = "C40_ENCODE", e[e.TEXT_ENCODE = 3] = "TEXT_ENCODE", e[e.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", e[e.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", e[e.BASE256_ENCODE = 6] = "BASE256_ENCODE";
})(qn ||= {});
var Jn = function() {
	function e() {}
	return e.decode = function(e) {
		var t = new Kn(e), n = new F(), r = new F(), i = [], a = qn.ASCII_ENCODE;
		do
			if (a === qn.ASCII_ENCODE) a = this.decodeAsciiSegment(t, n, r);
			else {
				switch (a) {
					case qn.C40_ENCODE:
						this.decodeC40Segment(t, n);
						break;
					case qn.TEXT_ENCODE:
						this.decodeTextSegment(t, n);
						break;
					case qn.ANSIX12_ENCODE:
						this.decodeAnsiX12Segment(t, n);
						break;
					case qn.EDIFACT_ENCODE:
						this.decodeEdifactSegment(t, n);
						break;
					case qn.BASE256_ENCODE:
						this.decodeBase256Segment(t, n, i);
						break;
					default: throw new M();
				}
				a = qn.ASCII_ENCODE;
			}
		while (a !== qn.PAD_ENCODE && t.available() > 0);
		return r.length() > 0 && n.append(r.toString()), new Ae(e, n.toString(), i.length === 0 ? null : i, null);
	}, e.decodeAsciiSegment = function(e, t, n) {
		var r = !1;
		do {
			var i = e.readBits(8);
			if (i === 0) throw new M();
			if (i <= 128) return r && (i += 128), t.append(String.fromCharCode(i - 1)), qn.ASCII_ENCODE;
			if (i === 129) return qn.PAD_ENCODE;
			if (i <= 229) {
				var a = i - 130;
				a < 10 && t.append("0"), t.append("" + a);
			} else switch (i) {
				case 230: return qn.C40_ENCODE;
				case 231: return qn.BASE256_ENCODE;
				case 232:
					t.append("");
					break;
				case 233:
				case 234: break;
				case 235:
					r = !0;
					break;
				case 236:
					t.append("[)>05"), n.insert(0, "");
					break;
				case 237:
					t.append("[)>06"), n.insert(0, "");
					break;
				case 238: return qn.ANSIX12_ENCODE;
				case 239: return qn.TEXT_ENCODE;
				case 240: return qn.EDIFACT_ENCODE;
				case 241: break;
				default: if (i !== 254 || e.available() !== 0) throw new M();
			}
		} while (e.available() > 0);
		return qn.ASCII_ENCODE;
	}, e.decodeC40Segment = function(e, t) {
		var n = !1, r = [], i = 0;
		do {
			if (e.available() === 8) return;
			var a = e.readBits(8);
			if (a === 254) return;
			this.parseTwoBytes(a, e.readBits(8), r);
			for (var o = 0; o < 3; o++) {
				var s = r[o];
				switch (i) {
					case 0:
						if (s < 3) i = s + 1;
						else if (s < this.C40_BASIC_SET_CHARS.length) {
							var c = this.C40_BASIC_SET_CHARS[s];
							n ? (t.append(String.fromCharCode(c.charCodeAt(0) + 128)), n = !1) : t.append(c);
						} else throw new M();
						break;
					case 1:
						n ? (t.append(String.fromCharCode(s + 128)), n = !1) : t.append(String.fromCharCode(s)), i = 0;
						break;
					case 2:
						if (s < this.C40_SHIFT2_SET_CHARS.length) {
							var c = this.C40_SHIFT2_SET_CHARS[s];
							n ? (t.append(String.fromCharCode(c.charCodeAt(0) + 128)), n = !1) : t.append(c);
						} else switch (s) {
							case 27:
								t.append("");
								break;
							case 30:
								n = !0;
								break;
							default: throw new M();
						}
						i = 0;
						break;
					case 3:
						n ? (t.append(String.fromCharCode(s + 224)), n = !1) : t.append(String.fromCharCode(s + 96)), i = 0;
						break;
					default: throw new M();
				}
			}
		} while (e.available() > 0);
	}, e.decodeTextSegment = function(e, t) {
		var n = !1, r = [], i = 0;
		do {
			if (e.available() === 8) return;
			var a = e.readBits(8);
			if (a === 254) return;
			this.parseTwoBytes(a, e.readBits(8), r);
			for (var o = 0; o < 3; o++) {
				var s = r[o];
				switch (i) {
					case 0:
						if (s < 3) i = s + 1;
						else if (s < this.TEXT_BASIC_SET_CHARS.length) {
							var c = this.TEXT_BASIC_SET_CHARS[s];
							n ? (t.append(String.fromCharCode(c.charCodeAt(0) + 128)), n = !1) : t.append(c);
						} else throw new M();
						break;
					case 1:
						n ? (t.append(String.fromCharCode(s + 128)), n = !1) : t.append(String.fromCharCode(s)), i = 0;
						break;
					case 2:
						if (s < this.TEXT_SHIFT2_SET_CHARS.length) {
							var c = this.TEXT_SHIFT2_SET_CHARS[s];
							n ? (t.append(String.fromCharCode(c.charCodeAt(0) + 128)), n = !1) : t.append(c);
						} else switch (s) {
							case 27:
								t.append("");
								break;
							case 30:
								n = !0;
								break;
							default: throw new M();
						}
						i = 0;
						break;
					case 3:
						if (s < this.TEXT_SHIFT3_SET_CHARS.length) {
							var c = this.TEXT_SHIFT3_SET_CHARS[s];
							n ? (t.append(String.fromCharCode(c.charCodeAt(0) + 128)), n = !1) : t.append(c), i = 0;
						} else throw new M();
						break;
					default: throw new M();
				}
			}
		} while (e.available() > 0);
	}, e.decodeAnsiX12Segment = function(e, t) {
		var n = [];
		do {
			if (e.available() === 8) return;
			var r = e.readBits(8);
			if (r === 254) return;
			this.parseTwoBytes(r, e.readBits(8), n);
			for (var i = 0; i < 3; i++) {
				var a = n[i];
				switch (a) {
					case 0:
						t.append("\r");
						break;
					case 1:
						t.append("*");
						break;
					case 2:
						t.append(">");
						break;
					case 3:
						t.append(" ");
						break;
					default: if (a < 14) t.append(String.fromCharCode(a + 44));
					else if (a < 40) t.append(String.fromCharCode(a + 51));
					else throw new M();
				}
			}
		} while (e.available() > 0);
	}, e.parseTwoBytes = function(e, t, n) {
		var r = (e << 8) + t - 1, i = Math.floor(r / 1600);
		n[0] = i, r -= i * 1600, i = Math.floor(r / 40), n[1] = i, n[2] = r - i * 40;
	}, e.decodeEdifactSegment = function(e, t) {
		do {
			if (e.available() <= 16) return;
			for (var n = 0; n < 4; n++) {
				var r = e.readBits(6);
				if (r === 31) {
					var i = 8 - e.getBitOffset();
					i !== 8 && e.readBits(i);
					return;
				}
				r & 32 || (r |= 64), t.append(String.fromCharCode(r));
			}
		} while (e.available() > 0);
	}, e.decodeBase256Segment = function(e, t, n) {
		var r = 1 + e.getByteOffset(), i = this.unrandomize255State(e.readBits(8), r++), a = i === 0 ? e.available() / 8 | 0 : i < 250 ? i : 250 * (i - 249) + this.unrandomize255State(e.readBits(8), r++);
		if (a < 0) throw new M();
		for (var o = new Uint8Array(a), s = 0; s < a; s++) {
			if (e.available() < 8) throw new M();
			o[s] = this.unrandomize255State(e.readBits(8), r++);
		}
		n.push(o);
		try {
			t.append(le.decode(o, P.ISO88591));
		} catch (e) {
			throw new Be("Platform does not support required encoding: " + e.message);
		}
	}, e.unrandomize255State = function(e, t) {
		var n = e - (149 * t % 255 + 1);
		return n >= 0 ? n : n + 256;
	}, e.C40_BASIC_SET_CHARS = /* @__PURE__ */ "*** 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), e.C40_SHIFT2_SET_CHARS = /* @__PURE__ */ "!\"#$%&'()*+,-./:;<=>?@[\\]^_".split(""), e.TEXT_BASIC_SET_CHARS = /* @__PURE__ */ "*** 0123456789abcdefghijklmnopqrstuvwxyz".split(""), e.TEXT_SHIFT2_SET_CHARS = e.C40_SHIFT2_SET_CHARS, e.TEXT_SHIFT3_SET_CHARS = /* @__PURE__ */ "`ABCDEFGHIJKLMNOPQRSTUVWXYZ{|}~".split(""), e;
}(), Yn = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Xn = function() {
	function e() {
		this.rsDecoder = new Ve(Ie.DATA_MATRIX_FIELD_256);
	}
	return e.prototype.decode = function(e) {
		var t, n, r = new Un(e), i = r.getVersion(), a = r.readCodewords(), o = Gn.getDataBlocks(a, i), s = 0;
		try {
			for (var c = Yn(o), l = c.next(); !l.done; l = c.next()) {
				var u = l.value;
				s += u.getNumDataCodewords();
			}
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				l && !l.done && (n = c.return) && n.call(c);
			} finally {
				if (t) throw t.error;
			}
		}
		for (var d = new Uint8Array(s), f = o.length, p = 0; p < f; p++) {
			var m = o[p], h = m.getCodewords(), g = m.getNumDataCodewords();
			this.correctErrors(h, g);
			for (var _ = 0; _ < g; _++) d[_ * f + p] = h[_];
		}
		return Jn.decode(d);
	}, e.prototype.correctErrors = function(e, t) {
		var n = new Int32Array(e);
		try {
			this.rsDecoder.decode(n, e.length - t);
		} catch {
			throw new C();
		}
		for (var r = 0; r < t; r++) e[r] = n[r];
	}, e;
}(), Zn = function() {
	function e(e) {
		this.image = e, this.rectangleDetector = new Je(this.image);
	}
	return e.prototype.detect = function() {
		var t = this.rectangleDetector.detect(), n = this.detectSolid1(t);
		if (n = this.detectSolid2(n), n[3] = this.correctTopRight(n), !n[3]) throw new I();
		n = this.shiftToModuleCenter(n);
		var r = n[0], i = n[1], a = n[2], o = n[3], s = this.transitionsBetween(r, o) + 1, c = this.transitionsBetween(a, o) + 1;
		return (s & 1) == 1 && (s += 1), (c & 1) == 1 && (c += 1), 4 * s < 7 * c && 4 * c < 7 * s && (s = c = Math.max(s, c)), new Ge(e.sampleGrid(this.image, r, i, a, o, s, c), [
			r,
			i,
			a,
			o
		]);
	}, e.shiftPoint = function(e, t, n) {
		var r = (t.getX() - e.getX()) / (n + 1), i = (t.getY() - e.getY()) / (n + 1);
		return new z(e.getX() + r, e.getY() + i);
	}, e.moveAway = function(e, t, n) {
		var r = e.getX(), i = e.getY();
		return r < t ? --r : r += 1, i < n ? --i : i += 1, new z(r, i);
	}, e.prototype.detectSolid1 = function(e) {
		var t = e[0], n = e[1], r = e[3], i = e[2], a = this.transitionsBetween(t, n), o = this.transitionsBetween(n, r), s = this.transitionsBetween(r, i), c = this.transitionsBetween(i, t), l = a, u = [
			i,
			t,
			n,
			r
		];
		return l > o && (l = o, u[0] = t, u[1] = n, u[2] = r, u[3] = i), l > s && (l = s, u[0] = n, u[1] = r, u[2] = i, u[3] = t), l > c && (u[0] = r, u[1] = i, u[2] = t, u[3] = n), u;
	}, e.prototype.detectSolid2 = function(t) {
		var n = t[0], r = t[1], i = t[2], a = t[3], o = this.transitionsBetween(n, a), s = e.shiftPoint(r, i, (o + 1) * 4), c = e.shiftPoint(i, r, (o + 1) * 4);
		return this.transitionsBetween(s, n) < this.transitionsBetween(c, a) ? (t[0] = n, t[1] = r, t[2] = i, t[3] = a) : (t[0] = r, t[1] = i, t[2] = a, t[3] = n), t;
	}, e.prototype.correctTopRight = function(t) {
		var n = t[0], r = t[1], i = t[2], a = t[3], o = this.transitionsBetween(n, a), s = this.transitionsBetween(r, a), c = e.shiftPoint(n, r, (s + 1) * 4), l = e.shiftPoint(i, r, (o + 1) * 4);
		o = this.transitionsBetween(c, a), s = this.transitionsBetween(l, a);
		var u = new z(a.getX() + (i.getX() - r.getX()) / (o + 1), a.getY() + (i.getY() - r.getY()) / (o + 1)), d = new z(a.getX() + (n.getX() - r.getX()) / (s + 1), a.getY() + (n.getY() - r.getY()) / (s + 1));
		return this.isValid(u) ? !this.isValid(d) || this.transitionsBetween(c, u) + this.transitionsBetween(l, u) > this.transitionsBetween(c, d) + this.transitionsBetween(l, d) ? u : d : this.isValid(d) ? d : null;
	}, e.prototype.shiftToModuleCenter = function(t) {
		var n = t[0], r = t[1], i = t[2], a = t[3], o = this.transitionsBetween(n, a) + 1, s = this.transitionsBetween(i, a) + 1, c = e.shiftPoint(n, r, s * 4), l = e.shiftPoint(i, r, o * 4);
		o = this.transitionsBetween(c, a) + 1, s = this.transitionsBetween(l, a) + 1, (o & 1) == 1 && (o += 1), (s & 1) == 1 && (s += 1);
		var u = (n.getX() + r.getX() + i.getX() + a.getX()) / 4, d = (n.getY() + r.getY() + i.getY() + a.getY()) / 4;
		n = e.moveAway(n, u, d), r = e.moveAway(r, u, d), i = e.moveAway(i, u, d), a = e.moveAway(a, u, d);
		var f, p;
		return c = e.shiftPoint(n, r, s * 4), c = e.shiftPoint(c, a, o * 4), f = e.shiftPoint(r, n, s * 4), f = e.shiftPoint(f, i, o * 4), l = e.shiftPoint(i, a, s * 4), l = e.shiftPoint(l, r, o * 4), p = e.shiftPoint(a, i, s * 4), p = e.shiftPoint(p, n, o * 4), [
			c,
			f,
			l,
			p
		];
	}, e.prototype.isValid = function(e) {
		return e.getX() >= 0 && e.getX() < this.image.getWidth() && e.getY() > 0 && e.getY() < this.image.getHeight();
	}, e.sampleGrid = function(e, t, n, r, i, a, o) {
		return $e.getInstance().sampleGrid(e, a, o, .5, .5, a - .5, .5, a - .5, o - .5, .5, o - .5, t.getX(), t.getY(), i.getX(), i.getY(), r.getX(), r.getY(), n.getX(), n.getY());
	}, e.prototype.transitionsBetween = function(e, t) {
		var n = Math.trunc(e.getX()), r = Math.trunc(e.getY()), i = Math.trunc(t.getX()), a = Math.trunc(t.getY()), o = Math.abs(a - r) > Math.abs(i - n);
		if (o) {
			var s = n;
			n = r, r = s, s = i, i = a, a = s;
		}
		for (var c = Math.abs(i - n), l = Math.abs(a - r), u = -c / 2, d = r < a ? 1 : -1, f = n < i ? 1 : -1, p = 0, m = this.image.get(o ? r : n, o ? n : r), h = n, g = r; h !== i; h += f) {
			var _ = this.image.get(o ? g : h, o ? h : g);
			if (_ !== m && (p++, m = _), u += l, u > 0) {
				if (g === a) break;
				g += d, u -= c;
			}
		}
		return p;
	}, e;
}(), Qn = function() {
	function e() {
		this.decoder = new Xn();
	}
	return e.prototype.decode = function(t, n) {
		n === void 0 && (n = null);
		var r, i;
		if (n != null && n.has(j.PURE_BARCODE)) {
			var a = e.extractPureBits(t.getBlackMatrix());
			r = this.decoder.decode(a), i = e.NO_POINTS;
		} else {
			var o = new Zn(t.getBlackMatrix()).detect();
			r = this.decoder.decode(o.getBits()), i = o.getPoints();
		}
		var s = r.getRawBytes(), c = new Ee(r.getText(), s, 8 * s.length, i, L.DATA_MATRIX, T.currentTimeMillis()), l = r.getByteSegments();
		l != null && c.putMetadata(ke.BYTE_SEGMENTS, l);
		var u = r.getECLevel();
		return u != null && c.putMetadata(ke.ERROR_CORRECTION_LEVEL, u), c;
	}, e.prototype.reset = function() {}, e.extractPureBits = function(e) {
		var t = e.getTopLeftOnBit(), n = e.getBottomRightOnBit();
		if (t == null || n == null) throw new I();
		var r = this.moduleSize(t, e), i = t[1], a = n[1], o = t[0], s = (n[0] - o + 1) / r, c = (a - i + 1) / r;
		if (s <= 0 || c <= 0) throw new I();
		var l = r / 2;
		i += l, o += l;
		for (var u = new ue(s, c), d = 0; d < c; d++) for (var f = i + d * r, p = 0; p < s; p++) e.get(o + p * r, f) && u.set(p, d);
		return u;
	}, e.moduleSize = function(e, t) {
		for (var n = t.getWidth(), r = e[0], i = e[1]; r < n && t.get(r, i);) r++;
		if (r === n) throw new I();
		var a = r - e[0];
		if (a === 0) throw new I();
		return a;
	}, e.NO_POINTS = [], e;
}(), $n = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	$n(t, e);
	function t(t) {
		return t === void 0 && (t = 500), e.call(this, new Qn(), t) || this;
	}
	return t;
})(Te);
// node_modules/@zxing/library/esm/core/qrcode/decoder/ErrorCorrectionLevel.js
var er;
(function(e) {
	e[e.L = 0] = "L", e[e.M = 1] = "M", e[e.Q = 2] = "Q", e[e.H = 3] = "H";
})(er ||= {});
var tr = function() {
	function e(t, n, r) {
		this.value = t, this.stringValue = n, this.bits = r, e.FOR_BITS.set(r, this), e.FOR_VALUE.set(t, this);
	}
	return e.prototype.getValue = function() {
		return this.value;
	}, e.prototype.getBits = function() {
		return this.bits;
	}, e.fromString = function(t) {
		switch (t) {
			case "L": return e.L;
			case "M": return e.M;
			case "Q": return e.Q;
			case "H": return e.H;
			default: throw new v(t + "not available");
		}
	}, e.prototype.toString = function() {
		return this.stringValue;
	}, e.prototype.equals = function(t) {
		if (!(t instanceof e)) return !1;
		var n = t;
		return this.value === n.value;
	}, e.forBits = function(t) {
		if (t < 0 || t >= e.FOR_BITS.size) throw new b();
		return e.FOR_BITS.get(t);
	}, e.FOR_BITS = /* @__PURE__ */ new Map(), e.FOR_VALUE = /* @__PURE__ */ new Map(), e.L = new e(er.L, "L", 1), e.M = new e(er.M, "M", 0), e.Q = new e(er.Q, "Q", 3), e.H = new e(er.H, "H", 2), e;
}(), nr = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, rr = function() {
	function e(e) {
		this.errorCorrectionLevel = tr.forBits(e >> 3 & 3), this.dataMask = e & 7;
	}
	return e.numBitsDiffering = function(e, t) {
		return A.bitCount(e ^ t);
	}, e.decodeFormatInformation = function(t, n) {
		var r = e.doDecodeFormatInformation(t, n);
		return r === null ? e.doDecodeFormatInformation(t ^ e.FORMAT_INFO_MASK_QR, n ^ e.FORMAT_INFO_MASK_QR) : r;
	}, e.doDecodeFormatInformation = function(t, n) {
		var r, i, a = 2 ** 53 - 1, o = 0;
		try {
			for (var s = nr(e.FORMAT_INFO_DECODE_LOOKUP), c = s.next(); !c.done; c = s.next()) {
				var l = c.value, u = l[0];
				if (u === t || u === n) return new e(l[1]);
				var d = e.numBitsDiffering(t, u);
				d < a && (o = l[1], a = d), t !== n && (d = e.numBitsDiffering(n, u), d < a && (o = l[1], a = d));
			}
		} catch (e) {
			r = { error: e };
		} finally {
			try {
				c && !c.done && (i = s.return) && i.call(s);
			} finally {
				if (r) throw r.error;
			}
		}
		return a <= 3 ? new e(o) : null;
	}, e.prototype.getErrorCorrectionLevel = function() {
		return this.errorCorrectionLevel;
	}, e.prototype.getDataMask = function() {
		return this.dataMask;
	}, e.prototype.hashCode = function() {
		return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
	}, e.prototype.equals = function(t) {
		if (!(t instanceof e)) return !1;
		var n = t;
		return this.errorCorrectionLevel === n.errorCorrectionLevel && this.dataMask === n.dataMask;
	}, e.FORMAT_INFO_MASK_QR = 21522, e.FORMAT_INFO_DECODE_LOOKUP = [
		Int32Array.from([21522, 0]),
		Int32Array.from([20773, 1]),
		Int32Array.from([24188, 2]),
		Int32Array.from([23371, 3]),
		Int32Array.from([17913, 4]),
		Int32Array.from([16590, 5]),
		Int32Array.from([20375, 6]),
		Int32Array.from([19104, 7]),
		Int32Array.from([30660, 8]),
		Int32Array.from([29427, 9]),
		Int32Array.from([32170, 10]),
		Int32Array.from([30877, 11]),
		Int32Array.from([26159, 12]),
		Int32Array.from([25368, 13]),
		Int32Array.from([27713, 14]),
		Int32Array.from([26998, 15]),
		Int32Array.from([5769, 16]),
		Int32Array.from([5054, 17]),
		Int32Array.from([7399, 18]),
		Int32Array.from([6608, 19]),
		Int32Array.from([1890, 20]),
		Int32Array.from([597, 21]),
		Int32Array.from([3340, 22]),
		Int32Array.from([2107, 23]),
		Int32Array.from([13663, 24]),
		Int32Array.from([12392, 25]),
		Int32Array.from([16177, 26]),
		Int32Array.from([14854, 27]),
		Int32Array.from([9396, 28]),
		Int32Array.from([8579, 29]),
		Int32Array.from([11994, 30]),
		Int32Array.from([11245, 31])
	], e;
}(), ir = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, U = function() {
	function e(e) {
		var t = [...arguments].slice(1);
		this.ecCodewordsPerBlock = e, this.ecBlocks = t;
	}
	return e.prototype.getECCodewordsPerBlock = function() {
		return this.ecCodewordsPerBlock;
	}, e.prototype.getNumBlocks = function() {
		var e, t, n = 0, r = this.ecBlocks;
		try {
			for (var i = ir(r), a = i.next(); !a.done; a = i.next()) {
				var o = a.value;
				n += o.getCount();
			}
		} catch (t) {
			e = { error: t };
		} finally {
			try {
				a && !a.done && (t = i.return) && t.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return n;
	}, e.prototype.getTotalECCodewords = function() {
		return this.ecCodewordsPerBlock * this.getNumBlocks();
	}, e.prototype.getECBlocks = function() {
		return this.ecBlocks;
	}, e;
}(), W = function() {
	function e(e, t) {
		this.count = e, this.dataCodewords = t;
	}
	return e.prototype.getCount = function() {
		return this.count;
	}, e.prototype.getDataCodewords = function() {
		return this.dataCodewords;
	}, e;
}(), ar = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, or = function() {
	function e(e, t) {
		var n, r, i = [...arguments].slice(2);
		this.versionNumber = e, this.alignmentPatternCenters = t, this.ecBlocks = i;
		var a = 0, o = i[0].getECCodewordsPerBlock(), s = i[0].getECBlocks();
		try {
			for (var c = ar(s), l = c.next(); !l.done; l = c.next()) {
				var u = l.value;
				a += u.getCount() * (u.getDataCodewords() + o);
			}
		} catch (e) {
			n = { error: e };
		} finally {
			try {
				l && !l.done && (r = c.return) && r.call(c);
			} finally {
				if (n) throw n.error;
			}
		}
		this.totalCodewords = a;
	}
	return e.prototype.getVersionNumber = function() {
		return this.versionNumber;
	}, e.prototype.getAlignmentPatternCenters = function() {
		return this.alignmentPatternCenters;
	}, e.prototype.getTotalCodewords = function() {
		return this.totalCodewords;
	}, e.prototype.getDimensionForVersion = function() {
		return 17 + 4 * this.versionNumber;
	}, e.prototype.getECBlocksForLevel = function(e) {
		return this.ecBlocks[e.getValue()];
	}, e.getProvisionalVersionForDimension = function(e) {
		if (e % 4 != 1) throw new M();
		try {
			return this.getVersionForNumber((e - 17) / 4);
		} catch {
			throw new M();
		}
	}, e.getVersionForNumber = function(t) {
		if (t < 1 || t > 40) throw new b();
		return e.VERSIONS[t - 1];
	}, e.decodeVersionInformation = function(t) {
		for (var n = 2 ** 53 - 1, r = 0, i = 0; i < e.VERSION_DECODE_INFO.length; i++) {
			var a = e.VERSION_DECODE_INFO[i];
			if (a === t) return e.getVersionForNumber(i + 7);
			var o = rr.numBitsDiffering(t, a);
			o < n && (r = i + 7, n = o);
		}
		return n <= 3 ? e.getVersionForNumber(r) : null;
	}, e.prototype.buildFunctionPattern = function() {
		var e = this.getDimensionForVersion(), t = new ue(e);
		t.setRegion(0, 0, 9, 9), t.setRegion(e - 8, 0, 8, 9), t.setRegion(0, e - 8, 9, 8);
		for (var n = this.alignmentPatternCenters.length, r = 0; r < n; r++) for (var i = this.alignmentPatternCenters[r] - 2, a = 0; a < n; a++) r === 0 && (a === 0 || a === n - 1) || r === n - 1 && a === 0 || t.setRegion(this.alignmentPatternCenters[a] - 2, i, 5, 5);
		return t.setRegion(6, 9, 1, e - 17), t.setRegion(9, 6, e - 17, 1), this.versionNumber > 6 && (t.setRegion(e - 11, 0, 3, 6), t.setRegion(0, e - 11, 6, 3)), t;
	}, e.prototype.toString = function() {
		return "" + this.versionNumber;
	}, e.VERSION_DECODE_INFO = Int32Array.from([
		31892,
		34236,
		39577,
		42195,
		48118,
		51042,
		55367,
		58893,
		63784,
		68472,
		70749,
		76311,
		79154,
		84390,
		87683,
		92361,
		96236,
		102084,
		102881,
		110507,
		110734,
		117786,
		119615,
		126325,
		127568,
		133589,
		136944,
		141498,
		145311,
		150283,
		152622,
		158308,
		161089,
		167017
	]), e.VERSIONS = [
		new e(1, /* @__PURE__ */ new Int32Array(), new U(7, new W(1, 19)), new U(10, new W(1, 16)), new U(13, new W(1, 13)), new U(17, new W(1, 9))),
		new e(2, Int32Array.from([6, 18]), new U(10, new W(1, 34)), new U(16, new W(1, 28)), new U(22, new W(1, 22)), new U(28, new W(1, 16))),
		new e(3, Int32Array.from([6, 22]), new U(15, new W(1, 55)), new U(26, new W(1, 44)), new U(18, new W(2, 17)), new U(22, new W(2, 13))),
		new e(4, Int32Array.from([6, 26]), new U(20, new W(1, 80)), new U(18, new W(2, 32)), new U(26, new W(2, 24)), new U(16, new W(4, 9))),
		new e(5, Int32Array.from([6, 30]), new U(26, new W(1, 108)), new U(24, new W(2, 43)), new U(18, new W(2, 15), new W(2, 16)), new U(22, new W(2, 11), new W(2, 12))),
		new e(6, Int32Array.from([6, 34]), new U(18, new W(2, 68)), new U(16, new W(4, 27)), new U(24, new W(4, 19)), new U(28, new W(4, 15))),
		new e(7, Int32Array.from([
			6,
			22,
			38
		]), new U(20, new W(2, 78)), new U(18, new W(4, 31)), new U(18, new W(2, 14), new W(4, 15)), new U(26, new W(4, 13), new W(1, 14))),
		new e(8, Int32Array.from([
			6,
			24,
			42
		]), new U(24, new W(2, 97)), new U(22, new W(2, 38), new W(2, 39)), new U(22, new W(4, 18), new W(2, 19)), new U(26, new W(4, 14), new W(2, 15))),
		new e(9, Int32Array.from([
			6,
			26,
			46
		]), new U(30, new W(2, 116)), new U(22, new W(3, 36), new W(2, 37)), new U(20, new W(4, 16), new W(4, 17)), new U(24, new W(4, 12), new W(4, 13))),
		new e(10, Int32Array.from([
			6,
			28,
			50
		]), new U(18, new W(2, 68), new W(2, 69)), new U(26, new W(4, 43), new W(1, 44)), new U(24, new W(6, 19), new W(2, 20)), new U(28, new W(6, 15), new W(2, 16))),
		new e(11, Int32Array.from([
			6,
			30,
			54
		]), new U(20, new W(4, 81)), new U(30, new W(1, 50), new W(4, 51)), new U(28, new W(4, 22), new W(4, 23)), new U(24, new W(3, 12), new W(8, 13))),
		new e(12, Int32Array.from([
			6,
			32,
			58
		]), new U(24, new W(2, 92), new W(2, 93)), new U(22, new W(6, 36), new W(2, 37)), new U(26, new W(4, 20), new W(6, 21)), new U(28, new W(7, 14), new W(4, 15))),
		new e(13, Int32Array.from([
			6,
			34,
			62
		]), new U(26, new W(4, 107)), new U(22, new W(8, 37), new W(1, 38)), new U(24, new W(8, 20), new W(4, 21)), new U(22, new W(12, 11), new W(4, 12))),
		new e(14, Int32Array.from([
			6,
			26,
			46,
			66
		]), new U(30, new W(3, 115), new W(1, 116)), new U(24, new W(4, 40), new W(5, 41)), new U(20, new W(11, 16), new W(5, 17)), new U(24, new W(11, 12), new W(5, 13))),
		new e(15, Int32Array.from([
			6,
			26,
			48,
			70
		]), new U(22, new W(5, 87), new W(1, 88)), new U(24, new W(5, 41), new W(5, 42)), new U(30, new W(5, 24), new W(7, 25)), new U(24, new W(11, 12), new W(7, 13))),
		new e(16, Int32Array.from([
			6,
			26,
			50,
			74
		]), new U(24, new W(5, 98), new W(1, 99)), new U(28, new W(7, 45), new W(3, 46)), new U(24, new W(15, 19), new W(2, 20)), new U(30, new W(3, 15), new W(13, 16))),
		new e(17, Int32Array.from([
			6,
			30,
			54,
			78
		]), new U(28, new W(1, 107), new W(5, 108)), new U(28, new W(10, 46), new W(1, 47)), new U(28, new W(1, 22), new W(15, 23)), new U(28, new W(2, 14), new W(17, 15))),
		new e(18, Int32Array.from([
			6,
			30,
			56,
			82
		]), new U(30, new W(5, 120), new W(1, 121)), new U(26, new W(9, 43), new W(4, 44)), new U(28, new W(17, 22), new W(1, 23)), new U(28, new W(2, 14), new W(19, 15))),
		new e(19, Int32Array.from([
			6,
			30,
			58,
			86
		]), new U(28, new W(3, 113), new W(4, 114)), new U(26, new W(3, 44), new W(11, 45)), new U(26, new W(17, 21), new W(4, 22)), new U(26, new W(9, 13), new W(16, 14))),
		new e(20, Int32Array.from([
			6,
			34,
			62,
			90
		]), new U(28, new W(3, 107), new W(5, 108)), new U(26, new W(3, 41), new W(13, 42)), new U(30, new W(15, 24), new W(5, 25)), new U(28, new W(15, 15), new W(10, 16))),
		new e(21, Int32Array.from([
			6,
			28,
			50,
			72,
			94
		]), new U(28, new W(4, 116), new W(4, 117)), new U(26, new W(17, 42)), new U(28, new W(17, 22), new W(6, 23)), new U(30, new W(19, 16), new W(6, 17))),
		new e(22, Int32Array.from([
			6,
			26,
			50,
			74,
			98
		]), new U(28, new W(2, 111), new W(7, 112)), new U(28, new W(17, 46)), new U(30, new W(7, 24), new W(16, 25)), new U(24, new W(34, 13))),
		new e(23, Int32Array.from([
			6,
			30,
			54,
			78,
			102
		]), new U(30, new W(4, 121), new W(5, 122)), new U(28, new W(4, 47), new W(14, 48)), new U(30, new W(11, 24), new W(14, 25)), new U(30, new W(16, 15), new W(14, 16))),
		new e(24, Int32Array.from([
			6,
			28,
			54,
			80,
			106
		]), new U(30, new W(6, 117), new W(4, 118)), new U(28, new W(6, 45), new W(14, 46)), new U(30, new W(11, 24), new W(16, 25)), new U(30, new W(30, 16), new W(2, 17))),
		new e(25, Int32Array.from([
			6,
			32,
			58,
			84,
			110
		]), new U(26, new W(8, 106), new W(4, 107)), new U(28, new W(8, 47), new W(13, 48)), new U(30, new W(7, 24), new W(22, 25)), new U(30, new W(22, 15), new W(13, 16))),
		new e(26, Int32Array.from([
			6,
			30,
			58,
			86,
			114
		]), new U(28, new W(10, 114), new W(2, 115)), new U(28, new W(19, 46), new W(4, 47)), new U(28, new W(28, 22), new W(6, 23)), new U(30, new W(33, 16), new W(4, 17))),
		new e(27, Int32Array.from([
			6,
			34,
			62,
			90,
			118
		]), new U(30, new W(8, 122), new W(4, 123)), new U(28, new W(22, 45), new W(3, 46)), new U(30, new W(8, 23), new W(26, 24)), new U(30, new W(12, 15), new W(28, 16))),
		new e(28, Int32Array.from([
			6,
			26,
			50,
			74,
			98,
			122
		]), new U(30, new W(3, 117), new W(10, 118)), new U(28, new W(3, 45), new W(23, 46)), new U(30, new W(4, 24), new W(31, 25)), new U(30, new W(11, 15), new W(31, 16))),
		new e(29, Int32Array.from([
			6,
			30,
			54,
			78,
			102,
			126
		]), new U(30, new W(7, 116), new W(7, 117)), new U(28, new W(21, 45), new W(7, 46)), new U(30, new W(1, 23), new W(37, 24)), new U(30, new W(19, 15), new W(26, 16))),
		new e(30, Int32Array.from([
			6,
			26,
			52,
			78,
			104,
			130
		]), new U(30, new W(5, 115), new W(10, 116)), new U(28, new W(19, 47), new W(10, 48)), new U(30, new W(15, 24), new W(25, 25)), new U(30, new W(23, 15), new W(25, 16))),
		new e(31, Int32Array.from([
			6,
			30,
			56,
			82,
			108,
			134
		]), new U(30, new W(13, 115), new W(3, 116)), new U(28, new W(2, 46), new W(29, 47)), new U(30, new W(42, 24), new W(1, 25)), new U(30, new W(23, 15), new W(28, 16))),
		new e(32, Int32Array.from([
			6,
			34,
			60,
			86,
			112,
			138
		]), new U(30, new W(17, 115)), new U(28, new W(10, 46), new W(23, 47)), new U(30, new W(10, 24), new W(35, 25)), new U(30, new W(19, 15), new W(35, 16))),
		new e(33, Int32Array.from([
			6,
			30,
			58,
			86,
			114,
			142
		]), new U(30, new W(17, 115), new W(1, 116)), new U(28, new W(14, 46), new W(21, 47)), new U(30, new W(29, 24), new W(19, 25)), new U(30, new W(11, 15), new W(46, 16))),
		new e(34, Int32Array.from([
			6,
			34,
			62,
			90,
			118,
			146
		]), new U(30, new W(13, 115), new W(6, 116)), new U(28, new W(14, 46), new W(23, 47)), new U(30, new W(44, 24), new W(7, 25)), new U(30, new W(59, 16), new W(1, 17))),
		new e(35, Int32Array.from([
			6,
			30,
			54,
			78,
			102,
			126,
			150
		]), new U(30, new W(12, 121), new W(7, 122)), new U(28, new W(12, 47), new W(26, 48)), new U(30, new W(39, 24), new W(14, 25)), new U(30, new W(22, 15), new W(41, 16))),
		new e(36, Int32Array.from([
			6,
			24,
			50,
			76,
			102,
			128,
			154
		]), new U(30, new W(6, 121), new W(14, 122)), new U(28, new W(6, 47), new W(34, 48)), new U(30, new W(46, 24), new W(10, 25)), new U(30, new W(2, 15), new W(64, 16))),
		new e(37, Int32Array.from([
			6,
			28,
			54,
			80,
			106,
			132,
			158
		]), new U(30, new W(17, 122), new W(4, 123)), new U(28, new W(29, 46), new W(14, 47)), new U(30, new W(49, 24), new W(10, 25)), new U(30, new W(24, 15), new W(46, 16))),
		new e(38, Int32Array.from([
			6,
			32,
			58,
			84,
			110,
			136,
			162
		]), new U(30, new W(4, 122), new W(18, 123)), new U(28, new W(13, 46), new W(32, 47)), new U(30, new W(48, 24), new W(14, 25)), new U(30, new W(42, 15), new W(32, 16))),
		new e(39, Int32Array.from([
			6,
			26,
			54,
			82,
			110,
			138,
			166
		]), new U(30, new W(20, 117), new W(4, 118)), new U(28, new W(40, 47), new W(7, 48)), new U(30, new W(43, 24), new W(22, 25)), new U(30, new W(10, 15), new W(67, 16))),
		new e(40, Int32Array.from([
			6,
			30,
			58,
			86,
			114,
			142,
			170
		]), new U(30, new W(19, 118), new W(6, 119)), new U(28, new W(18, 47), new W(31, 48)), new U(30, new W(34, 24), new W(34, 25)), new U(30, new W(20, 15), new W(61, 16)))
	], e;
}(), sr;
(function(e) {
	e[e.DATA_MASK_000 = 0] = "DATA_MASK_000", e[e.DATA_MASK_001 = 1] = "DATA_MASK_001", e[e.DATA_MASK_010 = 2] = "DATA_MASK_010", e[e.DATA_MASK_011 = 3] = "DATA_MASK_011", e[e.DATA_MASK_100 = 4] = "DATA_MASK_100", e[e.DATA_MASK_101 = 5] = "DATA_MASK_101", e[e.DATA_MASK_110 = 6] = "DATA_MASK_110", e[e.DATA_MASK_111 = 7] = "DATA_MASK_111";
})(sr ||= {});
var cr = function() {
	function e(e, t) {
		this.value = e, this.isMasked = t;
	}
	return e.prototype.unmaskBitMatrix = function(e, t) {
		for (var n = 0; n < t; n++) for (var r = 0; r < t; r++) this.isMasked(n, r) && e.flip(r, n);
	}, e.values = /* @__PURE__ */ new Map([
		[sr.DATA_MASK_000, new e(sr.DATA_MASK_000, function(e, t) {
			return !(e + t & 1);
		})],
		[sr.DATA_MASK_001, new e(sr.DATA_MASK_001, function(e, t) {
			return !(e & 1);
		})],
		[sr.DATA_MASK_010, new e(sr.DATA_MASK_010, function(e, t) {
			return t % 3 == 0;
		})],
		[sr.DATA_MASK_011, new e(sr.DATA_MASK_011, function(e, t) {
			return (e + t) % 3 == 0;
		})],
		[sr.DATA_MASK_100, new e(sr.DATA_MASK_100, function(e, t) {
			return !(Math.floor(e / 2) + Math.floor(t / 3) & 1);
		})],
		[sr.DATA_MASK_101, new e(sr.DATA_MASK_101, function(e, t) {
			return e * t % 6 == 0;
		})],
		[sr.DATA_MASK_110, new e(sr.DATA_MASK_110, function(e, t) {
			return e * t % 6 < 3;
		})],
		[sr.DATA_MASK_111, new e(sr.DATA_MASK_111, function(e, t) {
			return !(e + t + e * t % 3 & 1);
		})]
	]), e;
}(), lr = function() {
	function e(e) {
		var t = e.getHeight();
		if (t < 21 || (t & 3) != 1) throw new M();
		this.bitMatrix = e;
	}
	return e.prototype.readFormatInformation = function() {
		if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== void 0) return this.parsedFormatInfo;
		for (var e = 0, t = 0; t < 6; t++) e = this.copyBit(t, 8, e);
		e = this.copyBit(7, 8, e), e = this.copyBit(8, 8, e), e = this.copyBit(8, 7, e);
		for (var n = 5; n >= 0; n--) e = this.copyBit(8, n, e);
		for (var r = this.bitMatrix.getHeight(), i = 0, a = r - 7, n = r - 1; n >= a; n--) i = this.copyBit(8, n, i);
		for (var t = r - 8; t < r; t++) i = this.copyBit(t, 8, i);
		if (this.parsedFormatInfo = rr.decodeFormatInformation(e, i), this.parsedFormatInfo !== null) return this.parsedFormatInfo;
		throw new M();
	}, e.prototype.readVersion = function() {
		if (this.parsedVersion !== null && this.parsedVersion !== void 0) return this.parsedVersion;
		var e = this.bitMatrix.getHeight(), t = Math.floor((e - 17) / 4);
		if (t <= 6) return or.getVersionForNumber(t);
		for (var n = 0, r = e - 11, i = 5; i >= 0; i--) for (var a = e - 9; a >= r; a--) n = this.copyBit(a, i, n);
		var o = or.decodeVersionInformation(n);
		if (o !== null && o.getDimensionForVersion() === e) return this.parsedVersion = o, o;
		n = 0;
		for (var a = 5; a >= 0; a--) for (var i = e - 9; i >= r; i--) n = this.copyBit(a, i, n);
		if (o = or.decodeVersionInformation(n), o !== null && o.getDimensionForVersion() === e) return this.parsedVersion = o, o;
		throw new M();
	}, e.prototype.copyBit = function(e, t, n) {
		return (this.isMirror ? this.bitMatrix.get(t, e) : this.bitMatrix.get(e, t)) ? n << 1 | 1 : n << 1;
	}, e.prototype.readCodewords = function() {
		var e = this.readFormatInformation(), t = this.readVersion(), n = cr.values.get(e.getDataMask()), r = this.bitMatrix.getHeight();
		n.unmaskBitMatrix(this.bitMatrix, r);
		for (var i = t.buildFunctionPattern(), a = !0, o = new Uint8Array(t.getTotalCodewords()), s = 0, c = 0, l = 0, u = r - 1; u > 0; u -= 2) {
			u === 6 && u--;
			for (var d = 0; d < r; d++) for (var f = a ? r - 1 - d : d, p = 0; p < 2; p++) i.get(u - p, f) || (l++, c <<= 1, this.bitMatrix.get(u - p, f) && (c |= 1), l === 8 && (o[s++] = c, l = 0, c = 0));
			a = !a;
		}
		if (s !== t.getTotalCodewords()) throw new M();
		return o;
	}, e.prototype.remask = function() {
		if (this.parsedFormatInfo !== null) {
			var e = cr.values.get(this.parsedFormatInfo.getDataMask()), t = this.bitMatrix.getHeight();
			e.unmaskBitMatrix(this.bitMatrix, t);
		}
	}, e.prototype.setMirror = function(e) {
		this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = e;
	}, e.prototype.mirror = function() {
		for (var e = this.bitMatrix, t = 0, n = e.getWidth(); t < n; t++) for (var r = t + 1, i = e.getHeight(); r < i; r++) e.get(t, r) !== e.get(r, t) && (e.flip(r, t), e.flip(t, r));
	}, e;
}(), ur = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, dr = function() {
	function e(e, t) {
		this.numDataCodewords = e, this.codewords = t;
	}
	return e.getDataBlocks = function(t, n, r) {
		var i, a, o, s;
		if (t.length !== n.getTotalCodewords()) throw new b();
		var c = n.getECBlocksForLevel(r), l = 0, u = c.getECBlocks();
		try {
			for (var d = ur(u), f = d.next(); !f.done; f = d.next()) {
				var p = f.value;
				l += p.getCount();
			}
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				f && !f.done && (a = d.return) && a.call(d);
			} finally {
				if (i) throw i.error;
			}
		}
		var m = Array(l), h = 0;
		try {
			for (var g = ur(u), _ = g.next(); !_.done; _ = g.next()) for (var p = _.value, v = 0; v < p.getCount(); v++) {
				var y = p.getDataCodewords(), x = c.getECCodewordsPerBlock() + y;
				m[h++] = new e(y, new Uint8Array(x));
			}
		} catch (e) {
			o = { error: e };
		} finally {
			try {
				_ && !_.done && (s = g.return) && s.call(g);
			} finally {
				if (o) throw o.error;
			}
		}
		for (var S = m[0].codewords.length, C = m.length - 1; C >= 0 && m[C].codewords.length !== S;) C--;
		C++;
		for (var w = S - c.getECCodewordsPerBlock(), T = 0, v = 0; v < w; v++) for (var E = 0; E < h; E++) m[E].codewords[v] = t[T++];
		for (var E = C; E < h; E++) m[E].codewords[w] = t[T++];
		for (var D = m[0].codewords.length, v = w; v < D; v++) for (var E = 0; E < h; E++) {
			var ee = E < C ? v : v + 1;
			m[E].codewords[ee] = t[T++];
		}
		return m;
	}, e.prototype.getNumDataCodewords = function() {
		return this.numDataCodewords;
	}, e.prototype.getCodewords = function() {
		return this.codewords;
	}, e;
}(), fr;
(function(e) {
	e[e.TERMINATOR = 0] = "TERMINATOR", e[e.NUMERIC = 1] = "NUMERIC", e[e.ALPHANUMERIC = 2] = "ALPHANUMERIC", e[e.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", e[e.BYTE = 4] = "BYTE", e[e.ECI = 5] = "ECI", e[e.KANJI = 6] = "KANJI", e[e.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", e[e.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", e[e.HANZI = 9] = "HANZI";
})(fr ||= {});
var pr = function() {
	function e(t, n, r, i) {
		this.value = t, this.stringValue = n, this.characterCountBitsForVersions = r, this.bits = i, e.FOR_BITS.set(i, this), e.FOR_VALUE.set(t, this);
	}
	return e.forBits = function(t) {
		var n = e.FOR_BITS.get(t);
		if (n === void 0) throw new b();
		return n;
	}, e.prototype.getCharacterCountBits = function(e) {
		var t = e.getVersionNumber(), n = t <= 9 ? 0 : t <= 26 ? 1 : 2;
		return this.characterCountBitsForVersions[n];
	}, e.prototype.getValue = function() {
		return this.value;
	}, e.prototype.getBits = function() {
		return this.bits;
	}, e.prototype.equals = function(t) {
		if (!(t instanceof e)) return !1;
		var n = t;
		return this.value === n.value;
	}, e.prototype.toString = function() {
		return this.stringValue;
	}, e.FOR_BITS = /* @__PURE__ */ new Map(), e.FOR_VALUE = /* @__PURE__ */ new Map(), e.TERMINATOR = new e(fr.TERMINATOR, "TERMINATOR", Int32Array.from([
		0,
		0,
		0
	]), 0), e.NUMERIC = new e(fr.NUMERIC, "NUMERIC", Int32Array.from([
		10,
		12,
		14
	]), 1), e.ALPHANUMERIC = new e(fr.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([
		9,
		11,
		13
	]), 2), e.STRUCTURED_APPEND = new e(fr.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([
		0,
		0,
		0
	]), 3), e.BYTE = new e(fr.BYTE, "BYTE", Int32Array.from([
		8,
		16,
		16
	]), 4), e.ECI = new e(fr.ECI, "ECI", Int32Array.from([
		0,
		0,
		0
	]), 7), e.KANJI = new e(fr.KANJI, "KANJI", Int32Array.from([
		8,
		10,
		12
	]), 8), e.FNC1_FIRST_POSITION = new e(fr.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([
		0,
		0,
		0
	]), 5), e.FNC1_SECOND_POSITION = new e(fr.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([
		0,
		0,
		0
	]), 9), e.HANZI = new e(fr.HANZI, "HANZI", Int32Array.from([
		8,
		10,
		12
	]), 13), e;
}(), mr = function() {
	function e() {}
	return e.decode = function(t, n, r, i) {
		var a = new Kn(t), o = new F(), s = [], c = -1, l = -1;
		try {
			var u = null, d = !1, f = void 0;
			do {
				if (a.available() < 4) f = pr.TERMINATOR;
				else {
					var p = a.readBits(4);
					f = pr.forBits(p);
				}
				switch (f) {
					case pr.TERMINATOR: break;
					case pr.FNC1_FIRST_POSITION:
					case pr.FNC1_SECOND_POSITION:
						d = !0;
						break;
					case pr.STRUCTURED_APPEND:
						if (a.available() < 16) throw new M();
						c = a.readBits(8), l = a.readBits(8);
						break;
					case pr.ECI:
						var m = e.parseECIValue(a);
						if (u = oe.getCharacterSetECIByValue(m), u === null) throw new M();
						break;
					case pr.HANZI:
						var h = a.readBits(4), g = a.readBits(f.getCharacterCountBits(n));
						h === e.GB2312_SUBSET && e.decodeHanziSegment(a, o, g);
						break;
					default:
						var _ = a.readBits(f.getCharacterCountBits(n));
						switch (f) {
							case pr.NUMERIC:
								e.decodeNumericSegment(a, o, _);
								break;
							case pr.ALPHANUMERIC:
								e.decodeAlphanumericSegment(a, o, _, d);
								break;
							case pr.BYTE:
								e.decodeByteSegment(a, o, _, u, s, i);
								break;
							case pr.KANJI:
								e.decodeKanjiSegment(a, o, _);
								break;
							default: throw new M();
						}
				}
			} while (f !== pr.TERMINATOR);
		} catch {
			throw new M();
		}
		return new Ae(t, o.toString(), s.length === 0 ? null : s, r === null ? null : r.toString(), c, l);
	}, e.decodeHanziSegment = function(e, t, n) {
		if (n * 13 > e.available()) throw new M();
		for (var r = new Uint8Array(2 * n), i = 0; n > 0;) {
			var a = e.readBits(13), o = a / 96 << 8 | a % 96;
			o += o < 959 ? 41377 : 42657, r[i] = o >> 8 & 255, r[i + 1] = o & 255, i += 2, n--;
		}
		try {
			t.append(le.decode(r, P.GB2312));
		} catch (e) {
			throw new M(e);
		}
	}, e.decodeKanjiSegment = function(e, t, n) {
		if (n * 13 > e.available()) throw new M();
		for (var r = new Uint8Array(2 * n), i = 0; n > 0;) {
			var a = e.readBits(13), o = a / 192 << 8 | a % 192;
			o += o < 7936 ? 33088 : 49472, r[i] = o >> 8, r[i + 1] = o, i += 2, n--;
		}
		try {
			t.append(le.decode(r, P.SHIFT_JIS));
		} catch (e) {
			throw new M(e);
		}
	}, e.decodeByteSegment = function(e, t, n, r, i, a) {
		if (8 * n > e.available()) throw new M();
		for (var o = new Uint8Array(n), s = 0; s < n; s++) o[s] = e.readBits(8);
		var c = r === null ? P.guessEncoding(o, a) : r.getName();
		try {
			t.append(le.decode(o, c));
		} catch (e) {
			throw new M(e);
		}
		i.push(o);
	}, e.toAlphaNumericChar = function(t) {
		if (t >= e.ALPHANUMERIC_CHARS.length) throw new M();
		return e.ALPHANUMERIC_CHARS[t];
	}, e.decodeAlphanumericSegment = function(t, n, r, i) {
		for (var a = n.length(); r > 1;) {
			if (t.available() < 11) throw new M();
			var o = t.readBits(11);
			n.append(e.toAlphaNumericChar(Math.floor(o / 45))), n.append(e.toAlphaNumericChar(o % 45)), r -= 2;
		}
		if (r === 1) {
			if (t.available() < 6) throw new M();
			n.append(e.toAlphaNumericChar(t.readBits(6)));
		}
		if (i) for (var s = a; s < n.length(); s++) n.charAt(s) === "%" && (s < n.length() - 1 && n.charAt(s + 1) === "%" ? n.deleteCharAt(s + 1) : n.setCharAt(s, ""));
	}, e.decodeNumericSegment = function(t, n, r) {
		for (; r >= 3;) {
			if (t.available() < 10) throw new M();
			var i = t.readBits(10);
			if (i >= 1e3) throw new M();
			n.append(e.toAlphaNumericChar(Math.floor(i / 100))), n.append(e.toAlphaNumericChar(Math.floor(i / 10) % 10)), n.append(e.toAlphaNumericChar(i % 10)), r -= 3;
		}
		if (r === 2) {
			if (t.available() < 7) throw new M();
			var a = t.readBits(7);
			if (a >= 100) throw new M();
			n.append(e.toAlphaNumericChar(Math.floor(a / 10))), n.append(e.toAlphaNumericChar(a % 10));
		} else if (r === 1) {
			if (t.available() < 4) throw new M();
			var o = t.readBits(4);
			if (o >= 10) throw new M();
			n.append(e.toAlphaNumericChar(o));
		}
	}, e.parseECIValue = function(e) {
		var t = e.readBits(8);
		if (!(t & 128)) return t & 127;
		if ((t & 192) == 128) {
			var n = e.readBits(8);
			return (t & 63) << 8 | n;
		}
		if ((t & 224) == 192) {
			var r = e.readBits(16);
			return (t & 31) << 16 | r;
		}
		throw new M();
	}, e.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", e.GB2312_SUBSET = 1, e;
}(), hr = function() {
	function e(e) {
		this.mirrored = e;
	}
	return e.prototype.isMirrored = function() {
		return this.mirrored;
	}, e.prototype.applyMirroredCorrection = function(e) {
		if (!(!this.mirrored || e === null || e.length < 3)) {
			var t = e[0];
			e[0] = e[2], e[2] = t;
		}
	}, e;
}(), gr = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, _r = function() {
	function e() {
		this.rsDecoder = new Ve(Ie.QR_CODE_FIELD_256);
	}
	return e.prototype.decodeBooleanArray = function(e, t) {
		return this.decodeBitMatrix(ue.parseFromBooleanArray(e), t);
	}, e.prototype.decodeBitMatrix = function(e, t) {
		var n = new lr(e), r = null;
		try {
			return this.decodeBitMatrixParser(n, t);
		} catch (e) {
			r = e;
		}
		try {
			n.remask(), n.setMirror(!0), n.readVersion(), n.readFormatInformation(), n.mirror();
			var i = this.decodeBitMatrixParser(n, t);
			return i.setOther(new hr(!0)), i;
		} catch (e) {
			throw r === null ? e : r;
		}
	}, e.prototype.decodeBitMatrixParser = function(e, t) {
		var n, r, i, a, o = e.readVersion(), s = e.readFormatInformation().getErrorCorrectionLevel(), c = e.readCodewords(), l = dr.getDataBlocks(c, o, s), u = 0;
		try {
			for (var d = gr(l), f = d.next(); !f.done; f = d.next()) {
				var p = f.value;
				u += p.getNumDataCodewords();
			}
		} catch (e) {
			n = { error: e };
		} finally {
			try {
				f && !f.done && (r = d.return) && r.call(d);
			} finally {
				if (n) throw n.error;
			}
		}
		var m = new Uint8Array(u), h = 0;
		try {
			for (var g = gr(l), _ = g.next(); !_.done; _ = g.next()) {
				var p = _.value, v = p.getCodewords(), y = p.getNumDataCodewords();
				this.correctErrors(v, y);
				for (var b = 0; b < y; b++) m[h++] = v[b];
			}
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				_ && !_.done && (a = g.return) && a.call(g);
			} finally {
				if (i) throw i.error;
			}
		}
		return mr.decode(m, o, s, t);
	}, e.prototype.correctErrors = function(e, t) {
		var n = new Int32Array(e);
		try {
			this.rsDecoder.decode(n, e.length - t);
		} catch {
			throw new C();
		}
		for (var r = 0; r < t; r++) e[r] = n[r];
	}, e;
}(), vr = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), yr = function(e) {
	vr(t, e);
	function t(t, n, r) {
		var i = e.call(this, t, n) || this;
		return i.estimatedModuleSize = r, i;
	}
	return t.prototype.aboutEquals = function(e, t, n) {
		if (Math.abs(t - this.getY()) <= e && Math.abs(n - this.getX()) <= e) {
			var r = Math.abs(e - this.estimatedModuleSize);
			return r <= 1 || r <= this.estimatedModuleSize;
		}
		return !1;
	}, t.prototype.combineEstimate = function(e, n, r) {
		return new t((this.getX() + n) / 2, (this.getY() + e) / 2, (this.estimatedModuleSize + r) / 2);
	}, t;
}(z), br = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, xr = function() {
	function e(e, t, n, r, i, a, o) {
		this.image = e, this.startX = t, this.startY = n, this.width = r, this.height = i, this.moduleSize = a, this.resultPointCallback = o, this.possibleCenters = [], this.crossCheckStateCount = /* @__PURE__ */ new Int32Array(3);
	}
	return e.prototype.find = function() {
		for (var e = this.startX, t = this.height, n = e + this.width, r = this.startY + t / 2, i = /* @__PURE__ */ new Int32Array(3), a = this.image, o = 0; o < t; o++) {
			var s = r + (o & 1 ? -Math.floor((o + 1) / 2) : Math.floor((o + 1) / 2));
			i[0] = 0, i[1] = 0, i[2] = 0;
			for (var c = e; c < n && !a.get(c, s);) c++;
			for (var l = 0; c < n;) {
				if (a.get(c, s)) {
					if (l === 1) i[1]++;
					else if (l === 2) {
						if (this.foundPatternCross(i)) {
							var u = this.handlePossibleCenter(i, s, c);
							if (u !== null) return u;
						}
						i[0] = i[2], i[1] = 1, i[2] = 0, l = 1;
					} else i[++l]++;
				} else l === 1 && l++, i[l]++;
				c++;
			}
			if (this.foundPatternCross(i)) {
				var u = this.handlePossibleCenter(i, s, n);
				if (u !== null) return u;
			}
		}
		if (this.possibleCenters.length !== 0) return this.possibleCenters[0];
		throw new I();
	}, e.centerFromEnd = function(e, t) {
		return t - e[2] - e[1] / 2;
	}, e.prototype.foundPatternCross = function(e) {
		for (var t = this.moduleSize, n = t / 2, r = 0; r < 3; r++) if (Math.abs(t - e[r]) >= n) return !1;
		return !0;
	}, e.prototype.crossCheckVertical = function(t, n, r, i) {
		var a = this.image, o = a.getHeight(), s = this.crossCheckStateCount;
		s[0] = 0, s[1] = 0, s[2] = 0;
		for (var c = t; c >= 0 && a.get(n, c) && s[1] <= r;) s[1]++, c--;
		if (c < 0 || s[1] > r) return NaN;
		for (; c >= 0 && !a.get(n, c) && s[0] <= r;) s[0]++, c--;
		if (s[0] > r) return NaN;
		for (c = t + 1; c < o && a.get(n, c) && s[1] <= r;) s[1]++, c++;
		if (c === o || s[1] > r) return NaN;
		for (; c < o && !a.get(n, c) && s[2] <= r;) s[2]++, c++;
		if (s[2] > r) return NaN;
		var l = s[0] + s[1] + s[2];
		return 5 * Math.abs(l - i) >= 2 * i ? NaN : this.foundPatternCross(s) ? e.centerFromEnd(s, c) : NaN;
	}, e.prototype.handlePossibleCenter = function(t, n, r) {
		var i, a, o = t[0] + t[1] + t[2], s = e.centerFromEnd(t, r), c = this.crossCheckVertical(n, s, 2 * t[1], o);
		if (!isNaN(c)) {
			var l = (t[0] + t[1] + t[2]) / 3;
			try {
				for (var u = br(this.possibleCenters), d = u.next(); !d.done; d = u.next()) {
					var f = d.value;
					if (f.aboutEquals(l, c, s)) return f.combineEstimate(c, s, l);
				}
			} catch (e) {
				i = { error: e };
			} finally {
				try {
					d && !d.done && (a = u.return) && a.call(u);
				} finally {
					if (i) throw i.error;
				}
			}
			var p = new yr(s, c, l);
			this.possibleCenters.push(p), this.resultPointCallback !== null && this.resultPointCallback !== void 0 && this.resultPointCallback.foundPossibleResultPoint(p);
		}
		return null;
	}, e;
}(), Sr = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Cr = function(e) {
	Sr(t, e);
	function t(t, n, r, i) {
		var a = e.call(this, t, n) || this;
		return a.estimatedModuleSize = r, a.count = i, i === void 0 && (a.count = 1), a;
	}
	return t.prototype.getEstimatedModuleSize = function() {
		return this.estimatedModuleSize;
	}, t.prototype.getCount = function() {
		return this.count;
	}, t.prototype.aboutEquals = function(e, t, n) {
		if (Math.abs(t - this.getY()) <= e && Math.abs(n - this.getX()) <= e) {
			var r = Math.abs(e - this.estimatedModuleSize);
			return r <= 1 || r <= this.estimatedModuleSize;
		}
		return !1;
	}, t.prototype.combineEstimate = function(e, n, r) {
		var i = this.count + 1;
		return new t((this.count * this.getX() + n) / i, (this.count * this.getY() + e) / i, (this.count * this.estimatedModuleSize + r) / i, i);
	}, t;
}(z), wr = function() {
	function e(e) {
		this.bottomLeft = e[0], this.topLeft = e[1], this.topRight = e[2];
	}
	return e.prototype.getBottomLeft = function() {
		return this.bottomLeft;
	}, e.prototype.getTopLeft = function() {
		return this.topLeft;
	}, e.prototype.getTopRight = function() {
		return this.topRight;
	}, e;
}(), Tr = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Er = function() {
	function e(e, t) {
		this.image = e, this.resultPointCallback = t, this.possibleCenters = [], this.crossCheckStateCount = /* @__PURE__ */ new Int32Array(5), this.resultPointCallback = t;
	}
	return e.prototype.getImage = function() {
		return this.image;
	}, e.prototype.getPossibleCenters = function() {
		return this.possibleCenters;
	}, e.prototype.find = function(t) {
		var n = t != null && t.get(j.TRY_HARDER) !== void 0, r = t != null && t.get(j.PURE_BARCODE) !== void 0, i = this.image, a = i.getHeight(), o = i.getWidth(), s = Math.floor(3 * a / (4 * e.MAX_MODULES));
		(s < e.MIN_SKIP || n) && (s = e.MIN_SKIP);
		for (var c = !1, l = /* @__PURE__ */ new Int32Array(5), u = s - 1; u < a && !c; u += s) {
			l[0] = 0, l[1] = 0, l[2] = 0, l[3] = 0, l[4] = 0;
			for (var d = 0, f = 0; f < o; f++) if (i.get(f, u)) (d & 1) == 1 && d++, l[d]++;
			else if (d & 1) l[d]++;
			else if (d === 4) {
				if (e.foundPatternCross(l)) {
					var p = this.handlePossibleCenter(l, u, f, r);
					if (p === !0) {
						if (s = 2, this.hasSkipped === !0) c = this.haveMultiplyConfirmedCenters();
						else {
							var m = this.findRowSkip();
							m > l[2] && (u += m - l[2] - s, f = o - 1);
						}
					} else {
						l[0] = l[2], l[1] = l[3], l[2] = l[4], l[3] = 1, l[4] = 0, d = 3;
						continue;
					}
					d = 0, l[0] = 0, l[1] = 0, l[2] = 0, l[3] = 0, l[4] = 0;
				} else l[0] = l[2], l[1] = l[3], l[2] = l[4], l[3] = 1, l[4] = 0, d = 3;
			} else l[++d]++;
			if (e.foundPatternCross(l)) {
				var p = this.handlePossibleCenter(l, u, o, r);
				p === !0 && (s = l[0], this.hasSkipped && (c = this.haveMultiplyConfirmedCenters()));
			}
		}
		var h = this.selectBestPatterns();
		return z.orderBestPatterns(h), new wr(h);
	}, e.centerFromEnd = function(e, t) {
		return t - e[4] - e[3] - e[2] / 2;
	}, e.foundPatternCross = function(e) {
		for (var t = 0, n = 0; n < 5; n++) {
			var r = e[n];
			if (r === 0) return !1;
			t += r;
		}
		if (t < 7) return !1;
		var i = t / 7, a = i / 2;
		return Math.abs(i - e[0]) < a && Math.abs(i - e[1]) < a && Math.abs(3 * i - e[2]) < 3 * a && Math.abs(i - e[3]) < a && Math.abs(i - e[4]) < a;
	}, e.prototype.getCrossCheckStateCount = function() {
		var e = this.crossCheckStateCount;
		return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e;
	}, e.prototype.crossCheckDiagonal = function(t, n, r, i) {
		for (var a = this.getCrossCheckStateCount(), o = 0, s = this.image; t >= o && n >= o && s.get(n - o, t - o);) a[2]++, o++;
		if (t < o || n < o) return !1;
		for (; t >= o && n >= o && !s.get(n - o, t - o) && a[1] <= r;) a[1]++, o++;
		if (t < o || n < o || a[1] > r) return !1;
		for (; t >= o && n >= o && s.get(n - o, t - o) && a[0] <= r;) a[0]++, o++;
		if (a[0] > r) return !1;
		var c = s.getHeight(), l = s.getWidth();
		for (o = 1; t + o < c && n + o < l && s.get(n + o, t + o);) a[2]++, o++;
		if (t + o >= c || n + o >= l) return !1;
		for (; t + o < c && n + o < l && !s.get(n + o, t + o) && a[3] < r;) a[3]++, o++;
		if (t + o >= c || n + o >= l || a[3] >= r) return !1;
		for (; t + o < c && n + o < l && s.get(n + o, t + o) && a[4] < r;) a[4]++, o++;
		if (a[4] >= r) return !1;
		var u = a[0] + a[1] + a[2] + a[3] + a[4];
		return Math.abs(u - i) < 2 * i && e.foundPatternCross(a);
	}, e.prototype.crossCheckVertical = function(t, n, r, i) {
		for (var a = this.image, o = a.getHeight(), s = this.getCrossCheckStateCount(), c = t; c >= 0 && a.get(n, c);) s[2]++, c--;
		if (c < 0) return NaN;
		for (; c >= 0 && !a.get(n, c) && s[1] <= r;) s[1]++, c--;
		if (c < 0 || s[1] > r) return NaN;
		for (; c >= 0 && a.get(n, c) && s[0] <= r;) s[0]++, c--;
		if (s[0] > r) return NaN;
		for (c = t + 1; c < o && a.get(n, c);) s[2]++, c++;
		if (c === o) return NaN;
		for (; c < o && !a.get(n, c) && s[3] < r;) s[3]++, c++;
		if (c === o || s[3] >= r) return NaN;
		for (; c < o && a.get(n, c) && s[4] < r;) s[4]++, c++;
		if (s[4] >= r) return NaN;
		var l = s[0] + s[1] + s[2] + s[3] + s[4];
		return 5 * Math.abs(l - i) >= 2 * i ? NaN : e.foundPatternCross(s) ? e.centerFromEnd(s, c) : NaN;
	}, e.prototype.crossCheckHorizontal = function(t, n, r, i) {
		for (var a = this.image, o = a.getWidth(), s = this.getCrossCheckStateCount(), c = t; c >= 0 && a.get(c, n);) s[2]++, c--;
		if (c < 0) return NaN;
		for (; c >= 0 && !a.get(c, n) && s[1] <= r;) s[1]++, c--;
		if (c < 0 || s[1] > r) return NaN;
		for (; c >= 0 && a.get(c, n) && s[0] <= r;) s[0]++, c--;
		if (s[0] > r) return NaN;
		for (c = t + 1; c < o && a.get(c, n);) s[2]++, c++;
		if (c === o) return NaN;
		for (; c < o && !a.get(c, n) && s[3] < r;) s[3]++, c++;
		if (c === o || s[3] >= r) return NaN;
		for (; c < o && a.get(c, n) && s[4] < r;) s[4]++, c++;
		if (s[4] >= r) return NaN;
		var l = s[0] + s[1] + s[2] + s[3] + s[4];
		return 5 * Math.abs(l - i) >= i ? NaN : e.foundPatternCross(s) ? e.centerFromEnd(s, c) : NaN;
	}, e.prototype.handlePossibleCenter = function(t, n, r, i) {
		var a = t[0] + t[1] + t[2] + t[3] + t[4], o = e.centerFromEnd(t, r), s = this.crossCheckVertical(n, Math.floor(o), t[2], a);
		if (!isNaN(s) && (o = this.crossCheckHorizontal(Math.floor(o), Math.floor(s), t[2], a), !isNaN(o) && (!i || this.crossCheckDiagonal(Math.floor(s), Math.floor(o), t[2], a)))) {
			for (var c = a / 7, l = !1, u = this.possibleCenters, d = 0, f = u.length; d < f; d++) {
				var p = u[d];
				if (p.aboutEquals(c, s, o)) {
					u[d] = p.combineEstimate(s, o, c), l = !0;
					break;
				}
			}
			if (!l) {
				var m = new Cr(o, s, c);
				u.push(m), this.resultPointCallback !== null && this.resultPointCallback !== void 0 && this.resultPointCallback.foundPossibleResultPoint(m);
			}
			return !0;
		}
		return !1;
	}, e.prototype.findRowSkip = function() {
		var t, n;
		if (this.possibleCenters.length <= 1) return 0;
		var r = null;
		try {
			for (var i = Tr(this.possibleCenters), a = i.next(); !a.done; a = i.next()) {
				var o = a.value;
				if (o.getCount() >= e.CENTER_QUORUM) {
					if (r == null) r = o;
					else return this.hasSkipped = !0, Math.floor((Math.abs(r.getX() - o.getX()) - Math.abs(r.getY() - o.getY())) / 2);
				}
			}
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				a && !a.done && (n = i.return) && n.call(i);
			} finally {
				if (t) throw t.error;
			}
		}
		return 0;
	}, e.prototype.haveMultiplyConfirmedCenters = function() {
		var t, n, r, i, a = 0, o = 0, s = this.possibleCenters.length;
		try {
			for (var c = Tr(this.possibleCenters), l = c.next(); !l.done; l = c.next()) {
				var u = l.value;
				u.getCount() >= e.CENTER_QUORUM && (a++, o += u.getEstimatedModuleSize());
			}
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				l && !l.done && (n = c.return) && n.call(c);
			} finally {
				if (t) throw t.error;
			}
		}
		if (a < 3) return !1;
		var d = o / s, f = 0;
		try {
			for (var p = Tr(this.possibleCenters), m = p.next(); !m.done; m = p.next()) {
				var u = m.value;
				f += Math.abs(u.getEstimatedModuleSize() - d);
			}
		} catch (e) {
			r = { error: e };
		} finally {
			try {
				m && !m.done && (i = p.return) && i.call(p);
			} finally {
				if (r) throw r.error;
			}
		}
		return f <= .05 * o;
	}, e.prototype.selectBestPatterns = function() {
		var e, t, n, r, i = this.possibleCenters.length;
		if (i < 3) throw new I();
		var a = this.possibleCenters, o;
		if (i > 3) {
			var s = 0, c = 0;
			try {
				for (var l = Tr(this.possibleCenters), u = l.next(); !u.done; u = l.next()) {
					var d = u.value.getEstimatedModuleSize();
					s += d, c += d * d;
				}
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					u && !u.done && (t = l.return) && t.call(l);
				} finally {
					if (e) throw e.error;
				}
			}
			o = s / i;
			var f = Math.sqrt(c / i - o * o);
			a.sort(function(e, t) {
				var n = Math.abs(t.getEstimatedModuleSize() - o), r = Math.abs(e.getEstimatedModuleSize() - o);
				return n < r ? -1 : +(n > r);
			});
			for (var p = Math.max(.2 * o, f), m = 0; m < a.length && a.length > 3; m++) {
				var h = a[m];
				Math.abs(h.getEstimatedModuleSize() - o) > p && (a.splice(m, 1), m--);
			}
		}
		if (a.length > 3) {
			var s = 0;
			try {
				for (var g = Tr(a), _ = g.next(); !_.done; _ = g.next()) {
					var v = _.value;
					s += v.getEstimatedModuleSize();
				}
			} catch (e) {
				n = { error: e };
			} finally {
				try {
					_ && !_.done && (r = g.return) && r.call(g);
				} finally {
					if (n) throw n.error;
				}
			}
			o = s / a.length, a.sort(function(e, t) {
				if (t.getCount() === e.getCount()) {
					var n = Math.abs(t.getEstimatedModuleSize() - o), r = Math.abs(e.getEstimatedModuleSize() - o);
					return n < r ? 1 : n > r ? -1 : 0;
				}
				return t.getCount() - e.getCount();
			}), a.splice(3);
		}
		return [
			a[0],
			a[1],
			a[2]
		];
	}, e.CENTER_QUORUM = 2, e.MIN_SKIP = 3, e.MAX_MODULES = 57, e;
}(), Dr = function() {
	function e(e) {
		this.image = e;
	}
	return e.prototype.getImage = function() {
		return this.image;
	}, e.prototype.getResultPointCallback = function() {
		return this.resultPointCallback;
	}, e.prototype.detect = function(e) {
		this.resultPointCallback = e == null ? null : e.get(j.NEED_RESULT_POINT_CALLBACK);
		var t = new Er(this.image, this.resultPointCallback).find(e);
		return this.processFinderPatternInfo(t);
	}, e.prototype.processFinderPatternInfo = function(t) {
		var n = t.getTopLeft(), r = t.getTopRight(), i = t.getBottomLeft(), a = this.calculateModuleSize(n, r, i);
		if (a < 1) throw new I("No pattern found in proccess finder.");
		var o = e.computeDimension(n, r, i, a), s = or.getProvisionalVersionForDimension(o), c = s.getDimensionForVersion() - 7, l = null;
		if (s.getAlignmentPatternCenters().length > 0) for (var u = r.getX() - n.getX() + i.getX(), d = r.getY() - n.getY() + i.getY(), f = 1 - 3 / c, p = Math.floor(n.getX() + f * (u - n.getX())), m = Math.floor(n.getY() + f * (d - n.getY())), h = 4; h <= 16; h <<= 1) try {
			l = this.findAlignmentInRegion(a, p, m, h);
			break;
		} catch (e) {
			if (!(e instanceof I)) throw e;
		}
		var g = e.createTransform(n, r, i, l, o);
		return new Ge(e.sampleGrid(this.image, g, o), l === null ? [
			i,
			n,
			r
		] : [
			i,
			n,
			r,
			l
		]);
	}, e.createTransform = function(e, t, n, r, i) {
		var a = i - 3.5, o, s, c, l;
		return r === null ? (o = t.getX() - e.getX() + n.getX(), s = t.getY() - e.getY() + n.getY(), c = a, l = a) : (o = r.getX(), s = r.getY(), c = a - 3, l = c), Xe.quadrilateralToQuadrilateral(3.5, 3.5, a, 3.5, c, l, 3.5, a, e.getX(), e.getY(), t.getX(), t.getY(), o, s, n.getX(), n.getY());
	}, e.sampleGrid = function(e, t, n) {
		return $e.getInstance().sampleGridWithTransform(e, n, n, t);
	}, e.computeDimension = function(e, t, n, r) {
		var i = R.round(z.distance(e, t) / r), a = R.round(z.distance(e, n) / r), o = Math.floor((i + a) / 2) + 7;
		switch (o & 3) {
			case 0:
				o++;
				break;
			case 2:
				o--;
				break;
			case 3: throw new I("Dimensions could be not found.");
		}
		return o;
	}, e.prototype.calculateModuleSize = function(e, t, n) {
		return (this.calculateModuleSizeOneWay(e, t) + this.calculateModuleSizeOneWay(e, n)) / 2;
	}, e.prototype.calculateModuleSizeOneWay = function(e, t) {
		var n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()), Math.floor(t.getX()), Math.floor(t.getY())), r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(e.getX()), Math.floor(e.getY()));
		return isNaN(n) ? r / 7 : isNaN(r) ? n / 7 : (n + r) / 14;
	}, e.prototype.sizeOfBlackWhiteBlackRunBothWays = function(e, t, n, r) {
		var i = this.sizeOfBlackWhiteBlackRun(e, t, n, r), a = 1, o = e - (n - e);
		o < 0 ? (a = e / (e - o), o = 0) : o >= this.image.getWidth() && (a = (this.image.getWidth() - 1 - e) / (o - e), o = this.image.getWidth() - 1);
		var s = Math.floor(t - (r - t) * a);
		return a = 1, s < 0 ? (a = t / (t - s), s = 0) : s >= this.image.getHeight() && (a = (this.image.getHeight() - 1 - t) / (s - t), s = this.image.getHeight() - 1), o = Math.floor(e + (o - e) * a), i += this.sizeOfBlackWhiteBlackRun(e, t, o, s), i - 1;
	}, e.prototype.sizeOfBlackWhiteBlackRun = function(e, t, n, r) {
		var i = Math.abs(r - t) > Math.abs(n - e);
		if (i) {
			var a = e;
			e = t, t = a, a = n, n = r, r = a;
		}
		for (var o = Math.abs(n - e), s = Math.abs(r - t), c = -o / 2, l = e < n ? 1 : -1, u = t < r ? 1 : -1, d = 0, f = n + l, p = e, m = t; p !== f; p += l) {
			var h = i ? m : p, g = i ? p : m;
			if (d === 1 === this.image.get(h, g)) {
				if (d === 2) return R.distance(p, m, e, t);
				d++;
			}
			if (c += s, c > 0) {
				if (m === r) break;
				m += u, c -= o;
			}
		}
		return d === 2 ? R.distance(n + l, r, e, t) : NaN;
	}, e.prototype.findAlignmentInRegion = function(e, t, n, r) {
		var i = Math.floor(r * e), a = Math.max(0, t - i), o = Math.min(this.image.getWidth() - 1, t + i);
		if (o - a < e * 3) throw new I("Alignment top exceeds estimated module size.");
		var s = Math.max(0, n - i), c = Math.min(this.image.getHeight() - 1, n + i);
		if (c - s < e * 3) throw new I("Alignment bottom exceeds estimated module size.");
		return new xr(this.image, a, s, o - a, c - s, e, this.resultPointCallback).find();
	}, e;
}(), Or = function() {
	function e() {
		this.decoder = new _r();
	}
	return e.prototype.getDecoder = function() {
		return this.decoder;
	}, e.prototype.decode = function(t, n) {
		var r, i;
		if (n != null && n.get(j.PURE_BARCODE) !== void 0) {
			var a = e.extractPureBits(t.getBlackMatrix());
			r = this.decoder.decodeBitMatrix(a, n), i = e.NO_POINTS;
		} else {
			var o = new Dr(t.getBlackMatrix()).detect(n);
			r = this.decoder.decodeBitMatrix(o.getBits(), n), i = o.getPoints();
		}
		r.getOther() instanceof hr && r.getOther().applyMirroredCorrection(i);
		var s = new Ee(r.getText(), r.getRawBytes(), void 0, i, L.QR_CODE, void 0), c = r.getByteSegments();
		c !== null && s.putMetadata(ke.BYTE_SEGMENTS, c);
		var l = r.getECLevel();
		return l !== null && s.putMetadata(ke.ERROR_CORRECTION_LEVEL, l), r.hasStructuredAppend() && (s.putMetadata(ke.STRUCTURED_APPEND_SEQUENCE, r.getStructuredAppendSequenceNumber()), s.putMetadata(ke.STRUCTURED_APPEND_PARITY, r.getStructuredAppendParity())), s;
	}, e.prototype.reset = function() {}, e.extractPureBits = function(e) {
		var t = e.getTopLeftOnBit(), n = e.getBottomRightOnBit();
		if (t === null || n === null) throw new I();
		var r = this.moduleSize(t, e), i = t[1], a = n[1], o = t[0], s = n[0];
		if (o >= s || i >= a || a - i !== s - o && (s = o + (a - i), s >= e.getWidth())) throw new I();
		var c = Math.round((s - o + 1) / r), l = Math.round((a - i + 1) / r);
		if (c <= 0 || l <= 0 || l !== c) throw new I();
		var u = Math.floor(r / 2);
		i += u, o += u;
		var d = o + Math.floor((c - 1) * r) - s;
		if (d > 0) {
			if (d > u) throw new I();
			o -= d;
		}
		var f = i + Math.floor((l - 1) * r) - a;
		if (f > 0) {
			if (f > u) throw new I();
			i -= f;
		}
		for (var p = new ue(c, l), m = 0; m < l; m++) for (var h = i + Math.floor(m * r), g = 0; g < c; g++) e.get(o + Math.floor(g * r), h) && p.set(g, m);
		return p;
	}, e.moduleSize = function(e, t) {
		for (var n = t.getHeight(), r = t.getWidth(), i = e[0], a = e[1], o = !0, s = 0; i < r && a < n;) {
			if (o !== t.get(i, a)) {
				if (++s === 5) break;
				o = !o;
			}
			i++, a++;
		}
		if (i === r || a === n) throw new I();
		return (i - e[0]) / 7;
	}, e.NO_POINTS = [], e;
}(), kr = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, G = function() {
	function e() {}
	return e.prototype.PDF417Common = function() {}, e.getBitCountSum = function(e) {
		return R.sum(e);
	}, e.toIntArray = function(t) {
		var n, r;
		if (t == null || !t.length) return e.EMPTY_INT_ARRAY;
		var i = new Int32Array(t.length), a = 0;
		try {
			for (var o = kr(t), s = o.next(); !s.done; s = o.next()) {
				var c = s.value;
				i[a++] = c;
			}
		} catch (e) {
			n = { error: e };
		} finally {
			try {
				s && !s.done && (r = o.return) && r.call(o);
			} finally {
				if (n) throw n.error;
			}
		}
		return i;
	}, e.getCodeword = function(t) {
		var n = k.binarySearch(e.SYMBOL_TABLE, t & 262143);
		return n < 0 ? -1 : (e.CODEWORD_TABLE[n] - 1) % e.NUMBER_OF_CODEWORDS;
	}, e.NUMBER_OF_CODEWORDS = 929, e.MAX_CODEWORDS_IN_BARCODE = e.NUMBER_OF_CODEWORDS - 1, e.MIN_ROWS_IN_BARCODE = 3, e.MAX_ROWS_IN_BARCODE = 90, e.MODULES_IN_CODEWORD = 17, e.MODULES_IN_STOP_PATTERN = 18, e.BARS_IN_MODULE = 8, e.EMPTY_INT_ARRAY = new Int32Array([]), e.SYMBOL_TABLE = Int32Array.from([
		66142,
		66170,
		66206,
		66236,
		66290,
		66292,
		66350,
		66382,
		66396,
		66454,
		66470,
		66476,
		66594,
		66600,
		66614,
		66626,
		66628,
		66632,
		66640,
		66654,
		66662,
		66668,
		66682,
		66690,
		66718,
		66720,
		66748,
		66758,
		66776,
		66798,
		66802,
		66804,
		66820,
		66824,
		66832,
		66846,
		66848,
		66876,
		66880,
		66936,
		66950,
		66956,
		66968,
		66992,
		67006,
		67022,
		67036,
		67042,
		67044,
		67048,
		67062,
		67118,
		67150,
		67164,
		67214,
		67228,
		67256,
		67294,
		67322,
		67350,
		67366,
		67372,
		67398,
		67404,
		67416,
		67438,
		67474,
		67476,
		67490,
		67492,
		67496,
		67510,
		67618,
		67624,
		67650,
		67656,
		67664,
		67678,
		67686,
		67692,
		67706,
		67714,
		67716,
		67728,
		67742,
		67744,
		67772,
		67782,
		67788,
		67800,
		67822,
		67826,
		67828,
		67842,
		67848,
		67870,
		67872,
		67900,
		67904,
		67960,
		67974,
		67992,
		68016,
		68030,
		68046,
		68060,
		68066,
		68068,
		68072,
		68086,
		68104,
		68112,
		68126,
		68128,
		68156,
		68160,
		68216,
		68336,
		68358,
		68364,
		68376,
		68400,
		68414,
		68448,
		68476,
		68494,
		68508,
		68536,
		68546,
		68548,
		68552,
		68560,
		68574,
		68582,
		68588,
		68654,
		68686,
		68700,
		68706,
		68708,
		68712,
		68726,
		68750,
		68764,
		68792,
		68802,
		68804,
		68808,
		68816,
		68830,
		68838,
		68844,
		68858,
		68878,
		68892,
		68920,
		68976,
		68990,
		68994,
		68996,
		69e3,
		69008,
		69022,
		69024,
		69052,
		69062,
		69068,
		69080,
		69102,
		69106,
		69108,
		69142,
		69158,
		69164,
		69190,
		69208,
		69230,
		69254,
		69260,
		69272,
		69296,
		69310,
		69326,
		69340,
		69386,
		69394,
		69396,
		69410,
		69416,
		69430,
		69442,
		69444,
		69448,
		69456,
		69470,
		69478,
		69484,
		69554,
		69556,
		69666,
		69672,
		69698,
		69704,
		69712,
		69726,
		69754,
		69762,
		69764,
		69776,
		69790,
		69792,
		69820,
		69830,
		69836,
		69848,
		69870,
		69874,
		69876,
		69890,
		69918,
		69920,
		69948,
		69952,
		70008,
		70022,
		70040,
		70064,
		70078,
		70094,
		70108,
		70114,
		70116,
		70120,
		70134,
		70152,
		70174,
		70176,
		70264,
		70384,
		70412,
		70448,
		70462,
		70496,
		70524,
		70542,
		70556,
		70584,
		70594,
		70600,
		70608,
		70622,
		70630,
		70636,
		70664,
		70672,
		70686,
		70688,
		70716,
		70720,
		70776,
		70896,
		71136,
		71180,
		71192,
		71216,
		71230,
		71264,
		71292,
		71360,
		71416,
		71452,
		71480,
		71536,
		71550,
		71554,
		71556,
		71560,
		71568,
		71582,
		71584,
		71612,
		71622,
		71628,
		71640,
		71662,
		71726,
		71732,
		71758,
		71772,
		71778,
		71780,
		71784,
		71798,
		71822,
		71836,
		71864,
		71874,
		71880,
		71888,
		71902,
		71910,
		71916,
		71930,
		71950,
		71964,
		71992,
		72048,
		72062,
		72066,
		72068,
		72080,
		72094,
		72096,
		72124,
		72134,
		72140,
		72152,
		72174,
		72178,
		72180,
		72206,
		72220,
		72248,
		72304,
		72318,
		72416,
		72444,
		72456,
		72464,
		72478,
		72480,
		72508,
		72512,
		72568,
		72588,
		72600,
		72624,
		72638,
		72654,
		72668,
		72674,
		72676,
		72680,
		72694,
		72726,
		72742,
		72748,
		72774,
		72780,
		72792,
		72814,
		72838,
		72856,
		72880,
		72894,
		72910,
		72924,
		72930,
		72932,
		72936,
		72950,
		72966,
		72972,
		72984,
		73008,
		73022,
		73056,
		73084,
		73102,
		73116,
		73144,
		73156,
		73160,
		73168,
		73182,
		73190,
		73196,
		73210,
		73226,
		73234,
		73236,
		73250,
		73252,
		73256,
		73270,
		73282,
		73284,
		73296,
		73310,
		73318,
		73324,
		73346,
		73348,
		73352,
		73360,
		73374,
		73376,
		73404,
		73414,
		73420,
		73432,
		73454,
		73498,
		73518,
		73522,
		73524,
		73550,
		73564,
		73570,
		73572,
		73576,
		73590,
		73800,
		73822,
		73858,
		73860,
		73872,
		73886,
		73888,
		73916,
		73944,
		73970,
		73972,
		73992,
		74014,
		74016,
		74044,
		74048,
		74104,
		74118,
		74136,
		74160,
		74174,
		74210,
		74212,
		74216,
		74230,
		74244,
		74256,
		74270,
		74272,
		74360,
		74480,
		74502,
		74508,
		74544,
		74558,
		74592,
		74620,
		74638,
		74652,
		74680,
		74690,
		74696,
		74704,
		74726,
		74732,
		74782,
		74784,
		74812,
		74992,
		75232,
		75288,
		75326,
		75360,
		75388,
		75456,
		75512,
		75576,
		75632,
		75646,
		75650,
		75652,
		75664,
		75678,
		75680,
		75708,
		75718,
		75724,
		75736,
		75758,
		75808,
		75836,
		75840,
		75896,
		76016,
		76256,
		76736,
		76824,
		76848,
		76862,
		76896,
		76924,
		76992,
		77048,
		77296,
		77340,
		77368,
		77424,
		77438,
		77536,
		77564,
		77572,
		77576,
		77584,
		77600,
		77628,
		77632,
		77688,
		77702,
		77708,
		77720,
		77744,
		77758,
		77774,
		77788,
		77870,
		77902,
		77916,
		77922,
		77928,
		77966,
		77980,
		78008,
		78018,
		78024,
		78032,
		78046,
		78060,
		78074,
		78094,
		78136,
		78192,
		78206,
		78210,
		78212,
		78224,
		78238,
		78240,
		78268,
		78278,
		78284,
		78296,
		78322,
		78324,
		78350,
		78364,
		78448,
		78462,
		78560,
		78588,
		78600,
		78622,
		78624,
		78652,
		78656,
		78712,
		78726,
		78744,
		78768,
		78782,
		78798,
		78812,
		78818,
		78820,
		78824,
		78838,
		78862,
		78876,
		78904,
		78960,
		78974,
		79072,
		79100,
		79296,
		79352,
		79368,
		79376,
		79390,
		79392,
		79420,
		79424,
		79480,
		79600,
		79628,
		79640,
		79664,
		79678,
		79712,
		79740,
		79772,
		79800,
		79810,
		79812,
		79816,
		79824,
		79838,
		79846,
		79852,
		79894,
		79910,
		79916,
		79942,
		79948,
		79960,
		79982,
		79988,
		80006,
		80024,
		80048,
		80062,
		80078,
		80092,
		80098,
		80100,
		80104,
		80134,
		80140,
		80176,
		80190,
		80224,
		80252,
		80270,
		80284,
		80312,
		80328,
		80336,
		80350,
		80358,
		80364,
		80378,
		80390,
		80396,
		80408,
		80432,
		80446,
		80480,
		80508,
		80576,
		80632,
		80654,
		80668,
		80696,
		80752,
		80766,
		80776,
		80784,
		80798,
		80800,
		80828,
		80844,
		80856,
		80878,
		80882,
		80884,
		80914,
		80916,
		80930,
		80932,
		80936,
		80950,
		80962,
		80968,
		80976,
		80990,
		80998,
		81004,
		81026,
		81028,
		81040,
		81054,
		81056,
		81084,
		81094,
		81100,
		81112,
		81134,
		81154,
		81156,
		81160,
		81168,
		81182,
		81184,
		81212,
		81216,
		81272,
		81286,
		81292,
		81304,
		81328,
		81342,
		81358,
		81372,
		81380,
		81384,
		81398,
		81434,
		81454,
		81458,
		81460,
		81486,
		81500,
		81506,
		81508,
		81512,
		81526,
		81550,
		81564,
		81592,
		81602,
		81604,
		81608,
		81616,
		81630,
		81638,
		81644,
		81702,
		81708,
		81722,
		81734,
		81740,
		81752,
		81774,
		81778,
		81780,
		82050,
		82078,
		82080,
		82108,
		82180,
		82184,
		82192,
		82206,
		82208,
		82236,
		82240,
		82296,
		82316,
		82328,
		82352,
		82366,
		82402,
		82404,
		82408,
		82440,
		82448,
		82462,
		82464,
		82492,
		82496,
		82552,
		82672,
		82694,
		82700,
		82712,
		82736,
		82750,
		82784,
		82812,
		82830,
		82882,
		82884,
		82888,
		82896,
		82918,
		82924,
		82952,
		82960,
		82974,
		82976,
		83004,
		83008,
		83064,
		83184,
		83424,
		83468,
		83480,
		83504,
		83518,
		83552,
		83580,
		83648,
		83704,
		83740,
		83768,
		83824,
		83838,
		83842,
		83844,
		83848,
		83856,
		83872,
		83900,
		83910,
		83916,
		83928,
		83950,
		83984,
		84e3,
		84028,
		84032,
		84088,
		84208,
		84448,
		84928,
		85040,
		85054,
		85088,
		85116,
		85184,
		85240,
		85488,
		85560,
		85616,
		85630,
		85728,
		85756,
		85764,
		85768,
		85776,
		85790,
		85792,
		85820,
		85824,
		85880,
		85894,
		85900,
		85912,
		85936,
		85966,
		85980,
		86048,
		86080,
		86136,
		86256,
		86496,
		86976,
		88160,
		88188,
		88256,
		88312,
		88560,
		89056,
		89200,
		89214,
		89312,
		89340,
		89536,
		89592,
		89608,
		89616,
		89632,
		89664,
		89720,
		89840,
		89868,
		89880,
		89904,
		89952,
		89980,
		89998,
		90012,
		90040,
		90190,
		90204,
		90254,
		90268,
		90296,
		90306,
		90308,
		90312,
		90334,
		90382,
		90396,
		90424,
		90480,
		90494,
		90500,
		90504,
		90512,
		90526,
		90528,
		90556,
		90566,
		90572,
		90584,
		90610,
		90612,
		90638,
		90652,
		90680,
		90736,
		90750,
		90848,
		90876,
		90884,
		90888,
		90896,
		90910,
		90912,
		90940,
		90944,
		91e3,
		91014,
		91020,
		91032,
		91056,
		91070,
		91086,
		91100,
		91106,
		91108,
		91112,
		91126,
		91150,
		91164,
		91192,
		91248,
		91262,
		91360,
		91388,
		91584,
		91640,
		91664,
		91678,
		91680,
		91708,
		91712,
		91768,
		91888,
		91928,
		91952,
		91966,
		92e3,
		92028,
		92046,
		92060,
		92088,
		92098,
		92100,
		92104,
		92112,
		92126,
		92134,
		92140,
		92188,
		92216,
		92272,
		92384,
		92412,
		92608,
		92664,
		93168,
		93200,
		93214,
		93216,
		93244,
		93248,
		93304,
		93424,
		93664,
		93720,
		93744,
		93758,
		93792,
		93820,
		93888,
		93944,
		93980,
		94008,
		94064,
		94078,
		94084,
		94088,
		94096,
		94110,
		94112,
		94140,
		94150,
		94156,
		94168,
		94246,
		94252,
		94278,
		94284,
		94296,
		94318,
		94342,
		94348,
		94360,
		94384,
		94398,
		94414,
		94428,
		94440,
		94470,
		94476,
		94488,
		94512,
		94526,
		94560,
		94588,
		94606,
		94620,
		94648,
		94658,
		94660,
		94664,
		94672,
		94686,
		94694,
		94700,
		94714,
		94726,
		94732,
		94744,
		94768,
		94782,
		94816,
		94844,
		94912,
		94968,
		94990,
		95004,
		95032,
		95088,
		95102,
		95112,
		95120,
		95134,
		95136,
		95164,
		95180,
		95192,
		95214,
		95218,
		95220,
		95244,
		95256,
		95280,
		95294,
		95328,
		95356,
		95424,
		95480,
		95728,
		95758,
		95772,
		95800,
		95856,
		95870,
		95968,
		95996,
		96008,
		96016,
		96030,
		96032,
		96060,
		96064,
		96120,
		96152,
		96176,
		96190,
		96220,
		96226,
		96228,
		96232,
		96290,
		96292,
		96296,
		96310,
		96322,
		96324,
		96328,
		96336,
		96350,
		96358,
		96364,
		96386,
		96388,
		96392,
		96400,
		96414,
		96416,
		96444,
		96454,
		96460,
		96472,
		96494,
		96498,
		96500,
		96514,
		96516,
		96520,
		96528,
		96542,
		96544,
		96572,
		96576,
		96632,
		96646,
		96652,
		96664,
		96688,
		96702,
		96718,
		96732,
		96738,
		96740,
		96744,
		96758,
		96772,
		96776,
		96784,
		96798,
		96800,
		96828,
		96832,
		96888,
		97008,
		97030,
		97036,
		97048,
		97072,
		97086,
		97120,
		97148,
		97166,
		97180,
		97208,
		97220,
		97224,
		97232,
		97246,
		97254,
		97260,
		97326,
		97330,
		97332,
		97358,
		97372,
		97378,
		97380,
		97384,
		97398,
		97422,
		97436,
		97464,
		97474,
		97476,
		97480,
		97488,
		97502,
		97510,
		97516,
		97550,
		97564,
		97592,
		97648,
		97666,
		97668,
		97672,
		97680,
		97694,
		97696,
		97724,
		97734,
		97740,
		97752,
		97774,
		97830,
		97836,
		97850,
		97862,
		97868,
		97880,
		97902,
		97906,
		97908,
		97926,
		97932,
		97944,
		97968,
		97998,
		98012,
		98018,
		98020,
		98024,
		98038,
		98618,
		98674,
		98676,
		98838,
		98854,
		98874,
		98892,
		98904,
		98926,
		98930,
		98932,
		98968,
		99006,
		99042,
		99044,
		99048,
		99062,
		99166,
		99194,
		99246,
		99286,
		99350,
		99366,
		99372,
		99386,
		99398,
		99416,
		99438,
		99442,
		99444,
		99462,
		99504,
		99518,
		99534,
		99548,
		99554,
		99556,
		99560,
		99574,
		99590,
		99596,
		99608,
		99632,
		99646,
		99680,
		99708,
		99726,
		99740,
		99768,
		99778,
		99780,
		99784,
		99792,
		99806,
		99814,
		99820,
		99834,
		99858,
		99860,
		99874,
		99880,
		99894,
		99906,
		99920,
		99934,
		99962,
		99970,
		99972,
		99976,
		99984,
		99998,
		1e5,
		100028,
		100038,
		100044,
		100056,
		100078,
		100082,
		100084,
		100142,
		100174,
		100188,
		100246,
		100262,
		100268,
		100306,
		100308,
		100390,
		100396,
		100410,
		100422,
		100428,
		100440,
		100462,
		100466,
		100468,
		100486,
		100504,
		100528,
		100542,
		100558,
		100572,
		100578,
		100580,
		100584,
		100598,
		100620,
		100656,
		100670,
		100704,
		100732,
		100750,
		100792,
		100802,
		100808,
		100816,
		100830,
		100838,
		100844,
		100858,
		100888,
		100912,
		100926,
		100960,
		100988,
		101056,
		101112,
		101148,
		101176,
		101232,
		101246,
		101250,
		101252,
		101256,
		101264,
		101278,
		101280,
		101308,
		101318,
		101324,
		101336,
		101358,
		101362,
		101364,
		101410,
		101412,
		101416,
		101430,
		101442,
		101448,
		101456,
		101470,
		101478,
		101498,
		101506,
		101508,
		101520,
		101534,
		101536,
		101564,
		101580,
		101618,
		101620,
		101636,
		101640,
		101648,
		101662,
		101664,
		101692,
		101696,
		101752,
		101766,
		101784,
		101838,
		101858,
		101860,
		101864,
		101934,
		101938,
		101940,
		101966,
		101980,
		101986,
		101988,
		101992,
		102030,
		102044,
		102072,
		102082,
		102084,
		102088,
		102096,
		102138,
		102166,
		102182,
		102188,
		102214,
		102220,
		102232,
		102254,
		102282,
		102290,
		102292,
		102306,
		102308,
		102312,
		102326,
		102444,
		102458,
		102470,
		102476,
		102488,
		102514,
		102516,
		102534,
		102552,
		102576,
		102590,
		102606,
		102620,
		102626,
		102632,
		102646,
		102662,
		102668,
		102704,
		102718,
		102752,
		102780,
		102798,
		102812,
		102840,
		102850,
		102856,
		102864,
		102878,
		102886,
		102892,
		102906,
		102936,
		102974,
		103008,
		103036,
		103104,
		103160,
		103224,
		103280,
		103294,
		103298,
		103300,
		103312,
		103326,
		103328,
		103356,
		103366,
		103372,
		103384,
		103406,
		103410,
		103412,
		103472,
		103486,
		103520,
		103548,
		103616,
		103672,
		103920,
		103992,
		104048,
		104062,
		104160,
		104188,
		104194,
		104196,
		104200,
		104208,
		104224,
		104252,
		104256,
		104312,
		104326,
		104332,
		104344,
		104368,
		104382,
		104398,
		104412,
		104418,
		104420,
		104424,
		104482,
		104484,
		104514,
		104520,
		104528,
		104542,
		104550,
		104570,
		104578,
		104580,
		104592,
		104606,
		104608,
		104636,
		104652,
		104690,
		104692,
		104706,
		104712,
		104734,
		104736,
		104764,
		104768,
		104824,
		104838,
		104856,
		104910,
		104930,
		104932,
		104936,
		104968,
		104976,
		104990,
		104992,
		105020,
		105024,
		105080,
		105200,
		105240,
		105278,
		105312,
		105372,
		105410,
		105412,
		105416,
		105424,
		105446,
		105518,
		105524,
		105550,
		105564,
		105570,
		105572,
		105576,
		105614,
		105628,
		105656,
		105666,
		105672,
		105680,
		105702,
		105722,
		105742,
		105756,
		105784,
		105840,
		105854,
		105858,
		105860,
		105864,
		105872,
		105888,
		105932,
		105970,
		105972,
		106006,
		106022,
		106028,
		106054,
		106060,
		106072,
		106100,
		106118,
		106124,
		106136,
		106160,
		106174,
		106190,
		106210,
		106212,
		106216,
		106250,
		106258,
		106260,
		106274,
		106276,
		106280,
		106306,
		106308,
		106312,
		106320,
		106334,
		106348,
		106394,
		106414,
		106418,
		106420,
		106566,
		106572,
		106610,
		106612,
		106630,
		106636,
		106648,
		106672,
		106686,
		106722,
		106724,
		106728,
		106742,
		106758,
		106764,
		106776,
		106800,
		106814,
		106848,
		106876,
		106894,
		106908,
		106936,
		106946,
		106948,
		106952,
		106960,
		106974,
		106982,
		106988,
		107032,
		107056,
		107070,
		107104,
		107132,
		107200,
		107256,
		107292,
		107320,
		107376,
		107390,
		107394,
		107396,
		107400,
		107408,
		107422,
		107424,
		107452,
		107462,
		107468,
		107480,
		107502,
		107506,
		107508,
		107544,
		107568,
		107582,
		107616,
		107644,
		107712,
		107768,
		108016,
		108060,
		108088,
		108144,
		108158,
		108256,
		108284,
		108290,
		108292,
		108296,
		108304,
		108318,
		108320,
		108348,
		108352,
		108408,
		108422,
		108428,
		108440,
		108464,
		108478,
		108494,
		108508,
		108514,
		108516,
		108520,
		108592,
		108640,
		108668,
		108736,
		108792,
		109040,
		109536,
		109680,
		109694,
		109792,
		109820,
		110016,
		110072,
		110084,
		110088,
		110096,
		110112,
		110140,
		110144,
		110200,
		110320,
		110342,
		110348,
		110360,
		110384,
		110398,
		110432,
		110460,
		110478,
		110492,
		110520,
		110532,
		110536,
		110544,
		110558,
		110658,
		110686,
		110714,
		110722,
		110724,
		110728,
		110736,
		110750,
		110752,
		110780,
		110796,
		110834,
		110836,
		110850,
		110852,
		110856,
		110864,
		110878,
		110880,
		110908,
		110912,
		110968,
		110982,
		111e3,
		111054,
		111074,
		111076,
		111080,
		111108,
		111112,
		111120,
		111134,
		111136,
		111164,
		111168,
		111224,
		111344,
		111372,
		111422,
		111456,
		111516,
		111554,
		111556,
		111560,
		111568,
		111590,
		111632,
		111646,
		111648,
		111676,
		111680,
		111736,
		111856,
		112096,
		112152,
		112224,
		112252,
		112320,
		112440,
		112514,
		112516,
		112520,
		112528,
		112542,
		112544,
		112588,
		112686,
		112718,
		112732,
		112782,
		112796,
		112824,
		112834,
		112836,
		112840,
		112848,
		112870,
		112890,
		112910,
		112924,
		112952,
		113008,
		113022,
		113026,
		113028,
		113032,
		113040,
		113054,
		113056,
		113100,
		113138,
		113140,
		113166,
		113180,
		113208,
		113264,
		113278,
		113376,
		113404,
		113416,
		113424,
		113440,
		113468,
		113472,
		113560,
		113614,
		113634,
		113636,
		113640,
		113686,
		113702,
		113708,
		113734,
		113740,
		113752,
		113778,
		113780,
		113798,
		113804,
		113816,
		113840,
		113854,
		113870,
		113890,
		113892,
		113896,
		113926,
		113932,
		113944,
		113968,
		113982,
		114016,
		114044,
		114076,
		114114,
		114116,
		114120,
		114128,
		114150,
		114170,
		114194,
		114196,
		114210,
		114212,
		114216,
		114242,
		114244,
		114248,
		114256,
		114270,
		114278,
		114306,
		114308,
		114312,
		114320,
		114334,
		114336,
		114364,
		114380,
		114420,
		114458,
		114478,
		114482,
		114484,
		114510,
		114524,
		114530,
		114532,
		114536,
		114842,
		114866,
		114868,
		114970,
		114994,
		114996,
		115042,
		115044,
		115048,
		115062,
		115130,
		115226,
		115250,
		115252,
		115278,
		115292,
		115298,
		115300,
		115304,
		115318,
		115342,
		115394,
		115396,
		115400,
		115408,
		115422,
		115430,
		115436,
		115450,
		115478,
		115494,
		115514,
		115526,
		115532,
		115570,
		115572,
		115738,
		115758,
		115762,
		115764,
		115790,
		115804,
		115810,
		115812,
		115816,
		115830,
		115854,
		115868,
		115896,
		115906,
		115912,
		115920,
		115934,
		115942,
		115948,
		115962,
		115996,
		116024,
		116080,
		116094,
		116098,
		116100,
		116104,
		116112,
		116126,
		116128,
		116156,
		116166,
		116172,
		116184,
		116206,
		116210,
		116212,
		116246,
		116262,
		116268,
		116282,
		116294,
		116300,
		116312,
		116334,
		116338,
		116340,
		116358,
		116364,
		116376,
		116400,
		116414,
		116430,
		116444,
		116450,
		116452,
		116456,
		116498,
		116500,
		116514,
		116520,
		116534,
		116546,
		116548,
		116552,
		116560,
		116574,
		116582,
		116588,
		116602,
		116654,
		116694,
		116714,
		116762,
		116782,
		116786,
		116788,
		116814,
		116828,
		116834,
		116836,
		116840,
		116854,
		116878,
		116892,
		116920,
		116930,
		116936,
		116944,
		116958,
		116966,
		116972,
		116986,
		117006,
		117048,
		117104,
		117118,
		117122,
		117124,
		117136,
		117150,
		117152,
		117180,
		117190,
		117196,
		117208,
		117230,
		117234,
		117236,
		117304,
		117360,
		117374,
		117472,
		117500,
		117506,
		117508,
		117512,
		117520,
		117536,
		117564,
		117568,
		117624,
		117638,
		117644,
		117656,
		117680,
		117694,
		117710,
		117724,
		117730,
		117732,
		117736,
		117750,
		117782,
		117798,
		117804,
		117818,
		117830,
		117848,
		117874,
		117876,
		117894,
		117936,
		117950,
		117966,
		117986,
		117988,
		117992,
		118022,
		118028,
		118040,
		118064,
		118078,
		118112,
		118140,
		118172,
		118210,
		118212,
		118216,
		118224,
		118238,
		118246,
		118266,
		118306,
		118312,
		118338,
		118352,
		118366,
		118374,
		118394,
		118402,
		118404,
		118408,
		118416,
		118430,
		118432,
		118460,
		118476,
		118514,
		118516,
		118574,
		118578,
		118580,
		118606,
		118620,
		118626,
		118628,
		118632,
		118678,
		118694,
		118700,
		118730,
		118738,
		118740,
		118830,
		118834,
		118836,
		118862,
		118876,
		118882,
		118884,
		118888,
		118902,
		118926,
		118940,
		118968,
		118978,
		118980,
		118984,
		118992,
		119006,
		119014,
		119020,
		119034,
		119068,
		119096,
		119152,
		119166,
		119170,
		119172,
		119176,
		119184,
		119198,
		119200,
		119228,
		119238,
		119244,
		119256,
		119278,
		119282,
		119284,
		119324,
		119352,
		119408,
		119422,
		119520,
		119548,
		119554,
		119556,
		119560,
		119568,
		119582,
		119584,
		119612,
		119616,
		119672,
		119686,
		119692,
		119704,
		119728,
		119742,
		119758,
		119772,
		119778,
		119780,
		119784,
		119798,
		119920,
		119934,
		120032,
		120060,
		120256,
		120312,
		120324,
		120328,
		120336,
		120352,
		120384,
		120440,
		120560,
		120582,
		120588,
		120600,
		120624,
		120638,
		120672,
		120700,
		120718,
		120732,
		120760,
		120770,
		120772,
		120776,
		120784,
		120798,
		120806,
		120812,
		120870,
		120876,
		120890,
		120902,
		120908,
		120920,
		120946,
		120948,
		120966,
		120972,
		120984,
		121008,
		121022,
		121038,
		121058,
		121060,
		121064,
		121078,
		121100,
		121112,
		121136,
		121150,
		121184,
		121212,
		121244,
		121282,
		121284,
		121288,
		121296,
		121318,
		121338,
		121356,
		121368,
		121392,
		121406,
		121440,
		121468,
		121536,
		121592,
		121656,
		121730,
		121732,
		121736,
		121744,
		121758,
		121760,
		121804,
		121842,
		121844,
		121890,
		121922,
		121924,
		121928,
		121936,
		121950,
		121958,
		121978,
		121986,
		121988,
		121992,
		122e3,
		122014,
		122016,
		122044,
		122060,
		122098,
		122100,
		122116,
		122120,
		122128,
		122142,
		122144,
		122172,
		122176,
		122232,
		122246,
		122264,
		122318,
		122338,
		122340,
		122344,
		122414,
		122418,
		122420,
		122446,
		122460,
		122466,
		122468,
		122472,
		122510,
		122524,
		122552,
		122562,
		122564,
		122568,
		122576,
		122598,
		122618,
		122646,
		122662,
		122668,
		122694,
		122700,
		122712,
		122738,
		122740,
		122762,
		122770,
		122772,
		122786,
		122788,
		122792,
		123018,
		123026,
		123028,
		123042,
		123044,
		123048,
		123062,
		123098,
		123146,
		123154,
		123156,
		123170,
		123172,
		123176,
		123190,
		123202,
		123204,
		123208,
		123216,
		123238,
		123244,
		123258,
		123290,
		123314,
		123316,
		123402,
		123410,
		123412,
		123426,
		123428,
		123432,
		123446,
		123458,
		123464,
		123472,
		123486,
		123494,
		123500,
		123514,
		123522,
		123524,
		123528,
		123536,
		123552,
		123580,
		123590,
		123596,
		123608,
		123630,
		123634,
		123636,
		123674,
		123698,
		123700,
		123740,
		123746,
		123748,
		123752,
		123834,
		123914,
		123922,
		123924,
		123938,
		123944,
		123958,
		123970,
		123976,
		123984,
		123998,
		124006,
		124012,
		124026,
		124034,
		124036,
		124048,
		124062,
		124064,
		124092,
		124102,
		124108,
		124120,
		124142,
		124146,
		124148,
		124162,
		124164,
		124168,
		124176,
		124190,
		124192,
		124220,
		124224,
		124280,
		124294,
		124300,
		124312,
		124336,
		124350,
		124366,
		124380,
		124386,
		124388,
		124392,
		124406,
		124442,
		124462,
		124466,
		124468,
		124494,
		124508,
		124514,
		124520,
		124558,
		124572,
		124600,
		124610,
		124612,
		124616,
		124624,
		124646,
		124666,
		124694,
		124710,
		124716,
		124730,
		124742,
		124748,
		124760,
		124786,
		124788,
		124818,
		124820,
		124834,
		124836,
		124840,
		124854,
		124946,
		124948,
		124962,
		124964,
		124968,
		124982,
		124994,
		124996,
		125e3,
		125008,
		125022,
		125030,
		125036,
		125050,
		125058,
		125060,
		125064,
		125072,
		125086,
		125088,
		125116,
		125126,
		125132,
		125144,
		125166,
		125170,
		125172,
		125186,
		125188,
		125192,
		125200,
		125216,
		125244,
		125248,
		125304,
		125318,
		125324,
		125336,
		125360,
		125374,
		125390,
		125404,
		125410,
		125412,
		125416,
		125430,
		125444,
		125448,
		125456,
		125472,
		125504,
		125560,
		125680,
		125702,
		125708,
		125720,
		125744,
		125758,
		125792,
		125820,
		125838,
		125852,
		125880,
		125890,
		125892,
		125896,
		125904,
		125918,
		125926,
		125932,
		125978,
		125998,
		126002,
		126004,
		126030,
		126044,
		126050,
		126052,
		126056,
		126094,
		126108,
		126136,
		126146,
		126148,
		126152,
		126160,
		126182,
		126202,
		126222,
		126236,
		126264,
		126320,
		126334,
		126338,
		126340,
		126344,
		126352,
		126366,
		126368,
		126412,
		126450,
		126452,
		126486,
		126502,
		126508,
		126522,
		126534,
		126540,
		126552,
		126574,
		126578,
		126580,
		126598,
		126604,
		126616,
		126640,
		126654,
		126670,
		126684,
		126690,
		126692,
		126696,
		126738,
		126754,
		126756,
		126760,
		126774,
		126786,
		126788,
		126792,
		126800,
		126814,
		126822,
		126828,
		126842,
		126894,
		126898,
		126900,
		126934,
		127126,
		127142,
		127148,
		127162,
		127178,
		127186,
		127188,
		127254,
		127270,
		127276,
		127290,
		127302,
		127308,
		127320,
		127342,
		127346,
		127348,
		127370,
		127378,
		127380,
		127394,
		127396,
		127400,
		127450,
		127510,
		127526,
		127532,
		127546,
		127558,
		127576,
		127598,
		127602,
		127604,
		127622,
		127628,
		127640,
		127664,
		127678,
		127694,
		127708,
		127714,
		127716,
		127720,
		127734,
		127754,
		127762,
		127764,
		127778,
		127784,
		127810,
		127812,
		127816,
		127824,
		127838,
		127846,
		127866,
		127898,
		127918,
		127922,
		127924,
		128022,
		128038,
		128044,
		128058,
		128070,
		128076,
		128088,
		128110,
		128114,
		128116,
		128134,
		128140,
		128152,
		128176,
		128190,
		128206,
		128220,
		128226,
		128228,
		128232,
		128246,
		128262,
		128268,
		128280,
		128304,
		128318,
		128352,
		128380,
		128398,
		128412,
		128440,
		128450,
		128452,
		128456,
		128464,
		128478,
		128486,
		128492,
		128506,
		128522,
		128530,
		128532,
		128546,
		128548,
		128552,
		128566,
		128578,
		128580,
		128584,
		128592,
		128606,
		128614,
		128634,
		128642,
		128644,
		128648,
		128656,
		128670,
		128672,
		128700,
		128716,
		128754,
		128756,
		128794,
		128814,
		128818,
		128820,
		128846,
		128860,
		128866,
		128868,
		128872,
		128886,
		128918,
		128934,
		128940,
		128954,
		128978,
		128980,
		129178,
		129198,
		129202,
		129204,
		129238,
		129258,
		129306,
		129326,
		129330,
		129332,
		129358,
		129372,
		129378,
		129380,
		129384,
		129398,
		129430,
		129446,
		129452,
		129466,
		129482,
		129490,
		129492,
		129562,
		129582,
		129586,
		129588,
		129614,
		129628,
		129634,
		129636,
		129640,
		129654,
		129678,
		129692,
		129720,
		129730,
		129732,
		129736,
		129744,
		129758,
		129766,
		129772,
		129814,
		129830,
		129836,
		129850,
		129862,
		129868,
		129880,
		129902,
		129906,
		129908,
		129930,
		129938,
		129940,
		129954,
		129956,
		129960,
		129974,
		130010
	]), e.CODEWORD_TABLE = Int32Array.from([
		2627,
		1819,
		2622,
		2621,
		1813,
		1812,
		2729,
		2724,
		2723,
		2779,
		2774,
		2773,
		902,
		896,
		908,
		868,
		865,
		861,
		859,
		2511,
		873,
		871,
		1780,
		835,
		2493,
		825,
		2491,
		842,
		837,
		844,
		1764,
		1762,
		811,
		810,
		809,
		2483,
		807,
		2482,
		806,
		2480,
		815,
		814,
		813,
		812,
		2484,
		817,
		816,
		1745,
		1744,
		1742,
		1746,
		2655,
		2637,
		2635,
		2626,
		2625,
		2623,
		2628,
		1820,
		2752,
		2739,
		2737,
		2728,
		2727,
		2725,
		2730,
		2785,
		2783,
		2778,
		2777,
		2775,
		2780,
		787,
		781,
		747,
		739,
		736,
		2413,
		754,
		752,
		1719,
		692,
		689,
		681,
		2371,
		678,
		2369,
		700,
		697,
		694,
		703,
		1688,
		1686,
		642,
		638,
		2343,
		631,
		2341,
		627,
		2338,
		651,
		646,
		643,
		2345,
		654,
		652,
		1652,
		1650,
		1647,
		1654,
		601,
		599,
		2322,
		596,
		2321,
		594,
		2319,
		2317,
		611,
		610,
		608,
		606,
		2324,
		603,
		2323,
		615,
		614,
		612,
		1617,
		1616,
		1614,
		1612,
		616,
		1619,
		1618,
		2575,
		2538,
		2536,
		905,
		901,
		898,
		909,
		2509,
		2507,
		2504,
		870,
		867,
		864,
		860,
		2512,
		875,
		872,
		1781,
		2490,
		2489,
		2487,
		2485,
		1748,
		836,
		834,
		832,
		830,
		2494,
		827,
		2492,
		843,
		841,
		839,
		845,
		1765,
		1763,
		2701,
		2676,
		2674,
		2653,
		2648,
		2656,
		2634,
		2633,
		2631,
		2629,
		1821,
		2638,
		2636,
		2770,
		2763,
		2761,
		2750,
		2745,
		2753,
		2736,
		2735,
		2733,
		2731,
		1848,
		2740,
		2738,
		2786,
		2784,
		591,
		588,
		576,
		569,
		566,
		2296,
		1590,
		537,
		534,
		526,
		2276,
		522,
		2274,
		545,
		542,
		539,
		548,
		1572,
		1570,
		481,
		2245,
		466,
		2242,
		462,
		2239,
		492,
		485,
		482,
		2249,
		496,
		494,
		1534,
		1531,
		1528,
		1538,
		413,
		2196,
		406,
		2191,
		2188,
		425,
		419,
		2202,
		415,
		2199,
		432,
		430,
		427,
		1472,
		1467,
		1464,
		433,
		1476,
		1474,
		368,
		367,
		2160,
		365,
		2159,
		362,
		2157,
		2155,
		2152,
		378,
		377,
		375,
		2166,
		372,
		2165,
		369,
		2162,
		383,
		381,
		379,
		2168,
		1419,
		1418,
		1416,
		1414,
		385,
		1411,
		384,
		1423,
		1422,
		1420,
		1424,
		2461,
		802,
		2441,
		2439,
		790,
		786,
		783,
		794,
		2409,
		2406,
		2403,
		750,
		742,
		738,
		2414,
		756,
		753,
		1720,
		2367,
		2365,
		2362,
		2359,
		1663,
		693,
		691,
		684,
		2373,
		680,
		2370,
		702,
		699,
		696,
		704,
		1690,
		1687,
		2337,
		2336,
		2334,
		2332,
		1624,
		2329,
		1622,
		640,
		637,
		2344,
		634,
		2342,
		630,
		2340,
		650,
		648,
		645,
		2346,
		655,
		653,
		1653,
		1651,
		1649,
		1655,
		2612,
		2597,
		2595,
		2571,
		2568,
		2565,
		2576,
		2534,
		2529,
		2526,
		1787,
		2540,
		2537,
		907,
		904,
		900,
		910,
		2503,
		2502,
		2500,
		2498,
		1768,
		2495,
		1767,
		2510,
		2508,
		2506,
		869,
		866,
		863,
		2513,
		876,
		874,
		1782,
		2720,
		2713,
		2711,
		2697,
		2694,
		2691,
		2702,
		2672,
		2670,
		2664,
		1828,
		2678,
		2675,
		2647,
		2646,
		2644,
		2642,
		1823,
		2639,
		1822,
		2654,
		2652,
		2650,
		2657,
		2771,
		1855,
		2765,
		2762,
		1850,
		1849,
		2751,
		2749,
		2747,
		2754,
		353,
		2148,
		344,
		342,
		336,
		2142,
		332,
		2140,
		345,
		1375,
		1373,
		306,
		2130,
		299,
		2128,
		295,
		2125,
		319,
		314,
		311,
		2132,
		1354,
		1352,
		1349,
		1356,
		262,
		257,
		2101,
		253,
		2096,
		2093,
		274,
		273,
		267,
		2107,
		263,
		2104,
		280,
		278,
		275,
		1316,
		1311,
		1308,
		1320,
		1318,
		2052,
		202,
		2050,
		2044,
		2040,
		219,
		2063,
		212,
		2060,
		208,
		2055,
		224,
		221,
		2066,
		1260,
		1258,
		1252,
		231,
		1248,
		229,
		1266,
		1264,
		1261,
		1268,
		155,
		1998,
		153,
		1996,
		1994,
		1991,
		1988,
		165,
		164,
		2007,
		162,
		2006,
		159,
		2003,
		2e3,
		172,
		171,
		169,
		2012,
		166,
		2010,
		1186,
		1184,
		1182,
		1179,
		175,
		1176,
		173,
		1192,
		1191,
		1189,
		1187,
		176,
		1194,
		1193,
		2313,
		2307,
		2305,
		592,
		589,
		2294,
		2292,
		2289,
		578,
		572,
		568,
		2297,
		580,
		1591,
		2272,
		2267,
		2264,
		1547,
		538,
		536,
		529,
		2278,
		525,
		2275,
		547,
		544,
		541,
		1574,
		1571,
		2237,
		2235,
		2229,
		1493,
		2225,
		1489,
		478,
		2247,
		470,
		2244,
		465,
		2241,
		493,
		488,
		484,
		2250,
		498,
		495,
		1536,
		1533,
		1530,
		1539,
		2187,
		2186,
		2184,
		2182,
		1432,
		2179,
		1430,
		2176,
		1427,
		414,
		412,
		2197,
		409,
		2195,
		405,
		2193,
		2190,
		426,
		424,
		421,
		2203,
		418,
		2201,
		431,
		429,
		1473,
		1471,
		1469,
		1466,
		434,
		1477,
		1475,
		2478,
		2472,
		2470,
		2459,
		2457,
		2454,
		2462,
		803,
		2437,
		2432,
		2429,
		1726,
		2443,
		2440,
		792,
		789,
		785,
		2401,
		2399,
		2393,
		1702,
		2389,
		1699,
		2411,
		2408,
		2405,
		745,
		741,
		2415,
		758,
		755,
		1721,
		2358,
		2357,
		2355,
		2353,
		1661,
		2350,
		1660,
		2347,
		1657,
		2368,
		2366,
		2364,
		2361,
		1666,
		690,
		687,
		2374,
		683,
		2372,
		701,
		698,
		705,
		1691,
		1689,
		2619,
		2617,
		2610,
		2608,
		2605,
		2613,
		2593,
		2588,
		2585,
		1803,
		2599,
		2596,
		2563,
		2561,
		2555,
		1797,
		2551,
		1795,
		2573,
		2570,
		2567,
		2577,
		2525,
		2524,
		2522,
		2520,
		1786,
		2517,
		1785,
		2514,
		1783,
		2535,
		2533,
		2531,
		2528,
		1788,
		2541,
		2539,
		906,
		903,
		911,
		2721,
		1844,
		2715,
		2712,
		1838,
		1836,
		2699,
		2696,
		2693,
		2703,
		1827,
		1826,
		1824,
		2673,
		2671,
		2669,
		2666,
		1829,
		2679,
		2677,
		1858,
		1857,
		2772,
		1854,
		1853,
		1851,
		1856,
		2766,
		2764,
		143,
		1987,
		139,
		1986,
		135,
		133,
		131,
		1984,
		128,
		1983,
		125,
		1981,
		138,
		137,
		136,
		1985,
		1133,
		1132,
		1130,
		112,
		110,
		1974,
		107,
		1973,
		104,
		1971,
		1969,
		122,
		121,
		119,
		117,
		1977,
		114,
		1976,
		124,
		1115,
		1114,
		1112,
		1110,
		1117,
		1116,
		84,
		83,
		1953,
		81,
		1952,
		78,
		1950,
		1948,
		1945,
		94,
		93,
		91,
		1959,
		88,
		1958,
		85,
		1955,
		99,
		97,
		95,
		1961,
		1086,
		1085,
		1083,
		1081,
		1078,
		100,
		1090,
		1089,
		1087,
		1091,
		49,
		47,
		1917,
		44,
		1915,
		1913,
		1910,
		1907,
		59,
		1926,
		56,
		1925,
		53,
		1922,
		1919,
		66,
		64,
		1931,
		61,
		1929,
		1042,
		1040,
		1038,
		71,
		1035,
		70,
		1032,
		68,
		1048,
		1047,
		1045,
		1043,
		1050,
		1049,
		12,
		10,
		1869,
		1867,
		1864,
		1861,
		21,
		1880,
		19,
		1877,
		1874,
		1871,
		28,
		1888,
		25,
		1886,
		22,
		1883,
		982,
		980,
		977,
		974,
		32,
		30,
		991,
		989,
		987,
		984,
		34,
		995,
		994,
		992,
		2151,
		2150,
		2147,
		2146,
		2144,
		356,
		355,
		354,
		2149,
		2139,
		2138,
		2136,
		2134,
		1359,
		343,
		341,
		338,
		2143,
		335,
		2141,
		348,
		347,
		346,
		1376,
		1374,
		2124,
		2123,
		2121,
		2119,
		1326,
		2116,
		1324,
		310,
		308,
		305,
		2131,
		302,
		2129,
		298,
		2127,
		320,
		318,
		316,
		313,
		2133,
		322,
		321,
		1355,
		1353,
		1351,
		1357,
		2092,
		2091,
		2089,
		2087,
		1276,
		2084,
		1274,
		2081,
		1271,
		259,
		2102,
		256,
		2100,
		252,
		2098,
		2095,
		272,
		269,
		2108,
		266,
		2106,
		281,
		279,
		277,
		1317,
		1315,
		1313,
		1310,
		282,
		1321,
		1319,
		2039,
		2037,
		2035,
		2032,
		1203,
		2029,
		1200,
		1197,
		207,
		2053,
		205,
		2051,
		201,
		2049,
		2046,
		2043,
		220,
		218,
		2064,
		215,
		2062,
		211,
		2059,
		228,
		226,
		223,
		2069,
		1259,
		1257,
		1254,
		232,
		1251,
		230,
		1267,
		1265,
		1263,
		2316,
		2315,
		2312,
		2311,
		2309,
		2314,
		2304,
		2303,
		2301,
		2299,
		1593,
		2308,
		2306,
		590,
		2288,
		2287,
		2285,
		2283,
		1578,
		2280,
		1577,
		2295,
		2293,
		2291,
		579,
		577,
		574,
		571,
		2298,
		582,
		581,
		1592,
		2263,
		2262,
		2260,
		2258,
		1545,
		2255,
		1544,
		2252,
		1541,
		2273,
		2271,
		2269,
		2266,
		1550,
		535,
		532,
		2279,
		528,
		2277,
		546,
		543,
		549,
		1575,
		1573,
		2224,
		2222,
		2220,
		1486,
		2217,
		1485,
		2214,
		1482,
		1479,
		2238,
		2236,
		2234,
		2231,
		1496,
		2228,
		1492,
		480,
		477,
		2248,
		473,
		2246,
		469,
		2243,
		490,
		487,
		2251,
		497,
		1537,
		1535,
		1532,
		2477,
		2476,
		2474,
		2479,
		2469,
		2468,
		2466,
		2464,
		1730,
		2473,
		2471,
		2453,
		2452,
		2450,
		2448,
		1729,
		2445,
		1728,
		2460,
		2458,
		2456,
		2463,
		805,
		804,
		2428,
		2427,
		2425,
		2423,
		1725,
		2420,
		1724,
		2417,
		1722,
		2438,
		2436,
		2434,
		2431,
		1727,
		2444,
		2442,
		793,
		791,
		788,
		795,
		2388,
		2386,
		2384,
		1697,
		2381,
		1696,
		2378,
		1694,
		1692,
		2402,
		2400,
		2398,
		2395,
		1703,
		2392,
		1701,
		2412,
		2410,
		2407,
		751,
		748,
		744,
		2416,
		759,
		757,
		1807,
		2620,
		2618,
		1806,
		1805,
		2611,
		2609,
		2607,
		2614,
		1802,
		1801,
		1799,
		2594,
		2592,
		2590,
		2587,
		1804,
		2600,
		2598,
		1794,
		1793,
		1791,
		1789,
		2564,
		2562,
		2560,
		2557,
		1798,
		2554,
		1796,
		2574,
		2572,
		2569,
		2578,
		1847,
		1846,
		2722,
		1843,
		1842,
		1840,
		1845,
		2716,
		2714,
		1835,
		1834,
		1832,
		1830,
		1839,
		1837,
		2700,
		2698,
		2695,
		2704,
		1817,
		1811,
		1810,
		897,
		862,
		1777,
		829,
		826,
		838,
		1760,
		1758,
		808,
		2481,
		1741,
		1740,
		1738,
		1743,
		2624,
		1818,
		2726,
		2776,
		782,
		740,
		737,
		1715,
		686,
		679,
		695,
		1682,
		1680,
		639,
		628,
		2339,
		647,
		644,
		1645,
		1643,
		1640,
		1648,
		602,
		600,
		597,
		595,
		2320,
		593,
		2318,
		609,
		607,
		604,
		1611,
		1610,
		1608,
		1606,
		613,
		1615,
		1613,
		2328,
		926,
		924,
		892,
		886,
		899,
		857,
		850,
		2505,
		1778,
		824,
		823,
		821,
		819,
		2488,
		818,
		2486,
		833,
		831,
		828,
		840,
		1761,
		1759,
		2649,
		2632,
		2630,
		2746,
		2734,
		2732,
		2782,
		2781,
		570,
		567,
		1587,
		531,
		527,
		523,
		540,
		1566,
		1564,
		476,
		467,
		463,
		2240,
		486,
		483,
		1524,
		1521,
		1518,
		1529,
		411,
		403,
		2192,
		399,
		2189,
		423,
		416,
		1462,
		1457,
		1454,
		428,
		1468,
		1465,
		2210,
		366,
		363,
		2158,
		360,
		2156,
		357,
		2153,
		376,
		373,
		370,
		2163,
		1410,
		1409,
		1407,
		1405,
		382,
		1402,
		380,
		1417,
		1415,
		1412,
		1421,
		2175,
		2174,
		777,
		774,
		771,
		784,
		732,
		725,
		722,
		2404,
		743,
		1716,
		676,
		674,
		668,
		2363,
		665,
		2360,
		685,
		1684,
		1681,
		626,
		624,
		622,
		2335,
		620,
		2333,
		617,
		2330,
		641,
		635,
		649,
		1646,
		1644,
		1642,
		2566,
		928,
		925,
		2530,
		2527,
		894,
		891,
		888,
		2501,
		2499,
		2496,
		858,
		856,
		854,
		851,
		1779,
		2692,
		2668,
		2665,
		2645,
		2643,
		2640,
		2651,
		2768,
		2759,
		2757,
		2744,
		2743,
		2741,
		2748,
		352,
		1382,
		340,
		337,
		333,
		1371,
		1369,
		307,
		300,
		296,
		2126,
		315,
		312,
		1347,
		1342,
		1350,
		261,
		258,
		250,
		2097,
		246,
		2094,
		271,
		268,
		264,
		1306,
		1301,
		1298,
		276,
		1312,
		1309,
		2115,
		203,
		2048,
		195,
		2045,
		191,
		2041,
		213,
		209,
		2056,
		1246,
		1244,
		1238,
		225,
		1234,
		222,
		1256,
		1253,
		1249,
		1262,
		2080,
		2079,
		154,
		1997,
		150,
		1995,
		147,
		1992,
		1989,
		163,
		160,
		2004,
		156,
		2001,
		1175,
		1174,
		1172,
		1170,
		1167,
		170,
		1164,
		167,
		1185,
		1183,
		1180,
		1177,
		174,
		1190,
		1188,
		2025,
		2024,
		2022,
		587,
		586,
		564,
		559,
		556,
		2290,
		573,
		1588,
		520,
		518,
		512,
		2268,
		508,
		2265,
		530,
		1568,
		1565,
		461,
		457,
		2233,
		450,
		2230,
		446,
		2226,
		479,
		471,
		489,
		1526,
		1523,
		1520,
		397,
		395,
		2185,
		392,
		2183,
		389,
		2180,
		2177,
		410,
		2194,
		402,
		422,
		1463,
		1461,
		1459,
		1456,
		1470,
		2455,
		799,
		2433,
		2430,
		779,
		776,
		773,
		2397,
		2394,
		2390,
		734,
		728,
		724,
		746,
		1717,
		2356,
		2354,
		2351,
		2348,
		1658,
		677,
		675,
		673,
		670,
		667,
		688,
		1685,
		1683,
		2606,
		2589,
		2586,
		2559,
		2556,
		2552,
		927,
		2523,
		2521,
		2518,
		2515,
		1784,
		2532,
		895,
		893,
		890,
		2718,
		2709,
		2707,
		2689,
		2687,
		2684,
		2663,
		2662,
		2660,
		2658,
		1825,
		2667,
		2769,
		1852,
		2760,
		2758,
		142,
		141,
		1139,
		1138,
		134,
		132,
		129,
		126,
		1982,
		1129,
		1128,
		1126,
		1131,
		113,
		111,
		108,
		105,
		1972,
		101,
		1970,
		120,
		118,
		115,
		1109,
		1108,
		1106,
		1104,
		123,
		1113,
		1111,
		82,
		79,
		1951,
		75,
		1949,
		72,
		1946,
		92,
		89,
		86,
		1956,
		1077,
		1076,
		1074,
		1072,
		98,
		1069,
		96,
		1084,
		1082,
		1079,
		1088,
		1968,
		1967,
		48,
		45,
		1916,
		42,
		1914,
		39,
		1911,
		1908,
		60,
		57,
		54,
		1923,
		50,
		1920,
		1031,
		1030,
		1028,
		1026,
		67,
		1023,
		65,
		1020,
		62,
		1041,
		1039,
		1036,
		1033,
		69,
		1046,
		1044,
		1944,
		1943,
		1941,
		11,
		9,
		1868,
		7,
		1865,
		1862,
		1859,
		20,
		1878,
		16,
		1875,
		13,
		1872,
		970,
		968,
		966,
		963,
		29,
		960,
		26,
		23,
		983,
		981,
		978,
		975,
		33,
		971,
		31,
		990,
		988,
		985,
		1906,
		1904,
		1902,
		993,
		351,
		2145,
		1383,
		331,
		330,
		328,
		326,
		2137,
		323,
		2135,
		339,
		1372,
		1370,
		294,
		293,
		291,
		289,
		2122,
		286,
		2120,
		283,
		2117,
		309,
		303,
		317,
		1348,
		1346,
		1344,
		245,
		244,
		242,
		2090,
		239,
		2088,
		236,
		2085,
		2082,
		260,
		2099,
		249,
		270,
		1307,
		1305,
		1303,
		1300,
		1314,
		189,
		2038,
		186,
		2036,
		183,
		2033,
		2030,
		2026,
		206,
		198,
		2047,
		194,
		216,
		1247,
		1245,
		1243,
		1240,
		227,
		1237,
		1255,
		2310,
		2302,
		2300,
		2286,
		2284,
		2281,
		565,
		563,
		561,
		558,
		575,
		1589,
		2261,
		2259,
		2256,
		2253,
		1542,
		521,
		519,
		517,
		514,
		2270,
		511,
		533,
		1569,
		1567,
		2223,
		2221,
		2218,
		2215,
		1483,
		2211,
		1480,
		459,
		456,
		453,
		2232,
		449,
		474,
		491,
		1527,
		1525,
		1522,
		2475,
		2467,
		2465,
		2451,
		2449,
		2446,
		801,
		800,
		2426,
		2424,
		2421,
		2418,
		1723,
		2435,
		780,
		778,
		775,
		2387,
		2385,
		2382,
		2379,
		1695,
		2375,
		1693,
		2396,
		735,
		733,
		730,
		727,
		749,
		1718,
		2616,
		2615,
		2604,
		2603,
		2601,
		2584,
		2583,
		2581,
		2579,
		1800,
		2591,
		2550,
		2549,
		2547,
		2545,
		1792,
		2542,
		1790,
		2558,
		929,
		2719,
		1841,
		2710,
		2708,
		1833,
		1831,
		2690,
		2688,
		2686,
		1815,
		1809,
		1808,
		1774,
		1756,
		1754,
		1737,
		1736,
		1734,
		1739,
		1816,
		1711,
		1676,
		1674,
		633,
		629,
		1638,
		1636,
		1633,
		1641,
		598,
		1605,
		1604,
		1602,
		1600,
		605,
		1609,
		1607,
		2327,
		887,
		853,
		1775,
		822,
		820,
		1757,
		1755,
		1584,
		524,
		1560,
		1558,
		468,
		464,
		1514,
		1511,
		1508,
		1519,
		408,
		404,
		400,
		1452,
		1447,
		1444,
		417,
		1458,
		1455,
		2208,
		364,
		361,
		358,
		2154,
		1401,
		1400,
		1398,
		1396,
		374,
		1393,
		371,
		1408,
		1406,
		1403,
		1413,
		2173,
		2172,
		772,
		726,
		723,
		1712,
		672,
		669,
		666,
		682,
		1678,
		1675,
		625,
		623,
		621,
		618,
		2331,
		636,
		632,
		1639,
		1637,
		1635,
		920,
		918,
		884,
		880,
		889,
		849,
		848,
		847,
		846,
		2497,
		855,
		852,
		1776,
		2641,
		2742,
		2787,
		1380,
		334,
		1367,
		1365,
		301,
		297,
		1340,
		1338,
		1335,
		1343,
		255,
		251,
		247,
		1296,
		1291,
		1288,
		265,
		1302,
		1299,
		2113,
		204,
		196,
		192,
		2042,
		1232,
		1230,
		1224,
		214,
		1220,
		210,
		1242,
		1239,
		1235,
		1250,
		2077,
		2075,
		151,
		148,
		1993,
		144,
		1990,
		1163,
		1162,
		1160,
		1158,
		1155,
		161,
		1152,
		157,
		1173,
		1171,
		1168,
		1165,
		168,
		1181,
		1178,
		2021,
		2020,
		2018,
		2023,
		585,
		560,
		557,
		1585,
		516,
		509,
		1562,
		1559,
		458,
		447,
		2227,
		472,
		1516,
		1513,
		1510,
		398,
		396,
		393,
		390,
		2181,
		386,
		2178,
		407,
		1453,
		1451,
		1449,
		1446,
		420,
		1460,
		2209,
		769,
		764,
		720,
		712,
		2391,
		729,
		1713,
		664,
		663,
		661,
		659,
		2352,
		656,
		2349,
		671,
		1679,
		1677,
		2553,
		922,
		919,
		2519,
		2516,
		885,
		883,
		881,
		2685,
		2661,
		2659,
		2767,
		2756,
		2755,
		140,
		1137,
		1136,
		130,
		127,
		1125,
		1124,
		1122,
		1127,
		109,
		106,
		102,
		1103,
		1102,
		1100,
		1098,
		116,
		1107,
		1105,
		1980,
		80,
		76,
		73,
		1947,
		1068,
		1067,
		1065,
		1063,
		90,
		1060,
		87,
		1075,
		1073,
		1070,
		1080,
		1966,
		1965,
		46,
		43,
		40,
		1912,
		36,
		1909,
		1019,
		1018,
		1016,
		1014,
		58,
		1011,
		55,
		1008,
		51,
		1029,
		1027,
		1024,
		1021,
		63,
		1037,
		1034,
		1940,
		1939,
		1937,
		1942,
		8,
		1866,
		4,
		1863,
		1,
		1860,
		956,
		954,
		952,
		949,
		946,
		17,
		14,
		969,
		967,
		964,
		961,
		27,
		957,
		24,
		979,
		976,
		972,
		1901,
		1900,
		1898,
		1896,
		986,
		1905,
		1903,
		350,
		349,
		1381,
		329,
		327,
		324,
		1368,
		1366,
		292,
		290,
		287,
		284,
		2118,
		304,
		1341,
		1339,
		1337,
		1345,
		243,
		240,
		237,
		2086,
		233,
		2083,
		254,
		1297,
		1295,
		1293,
		1290,
		1304,
		2114,
		190,
		187,
		184,
		2034,
		180,
		2031,
		177,
		2027,
		199,
		1233,
		1231,
		1229,
		1226,
		217,
		1223,
		1241,
		2078,
		2076,
		584,
		555,
		554,
		552,
		550,
		2282,
		562,
		1586,
		507,
		506,
		504,
		502,
		2257,
		499,
		2254,
		515,
		1563,
		1561,
		445,
		443,
		441,
		2219,
		438,
		2216,
		435,
		2212,
		460,
		454,
		475,
		1517,
		1515,
		1512,
		2447,
		798,
		797,
		2422,
		2419,
		770,
		768,
		766,
		2383,
		2380,
		2376,
		721,
		719,
		717,
		714,
		731,
		1714,
		2602,
		2582,
		2580,
		2548,
		2546,
		2543,
		923,
		921,
		2717,
		2706,
		2705,
		2683,
		2682,
		2680,
		1771,
		1752,
		1750,
		1733,
		1732,
		1731,
		1735,
		1814,
		1707,
		1670,
		1668,
		1631,
		1629,
		1626,
		1634,
		1599,
		1598,
		1596,
		1594,
		1603,
		1601,
		2326,
		1772,
		1753,
		1751,
		1581,
		1554,
		1552,
		1504,
		1501,
		1498,
		1509,
		1442,
		1437,
		1434,
		401,
		1448,
		1445,
		2206,
		1392,
		1391,
		1389,
		1387,
		1384,
		359,
		1399,
		1397,
		1394,
		1404,
		2171,
		2170,
		1708,
		1672,
		1669,
		619,
		1632,
		1630,
		1628,
		1773,
		1378,
		1363,
		1361,
		1333,
		1328,
		1336,
		1286,
		1281,
		1278,
		248,
		1292,
		1289,
		2111,
		1218,
		1216,
		1210,
		197,
		1206,
		193,
		1228,
		1225,
		1221,
		1236,
		2073,
		2071,
		1151,
		1150,
		1148,
		1146,
		152,
		1143,
		149,
		1140,
		145,
		1161,
		1159,
		1156,
		1153,
		158,
		1169,
		1166,
		2017,
		2016,
		2014,
		2019,
		1582,
		510,
		1556,
		1553,
		452,
		448,
		1506,
		1500,
		394,
		391,
		387,
		1443,
		1441,
		1439,
		1436,
		1450,
		2207,
		765,
		716,
		713,
		1709,
		662,
		660,
		657,
		1673,
		1671,
		916,
		914,
		879,
		878,
		877,
		882,
		1135,
		1134,
		1121,
		1120,
		1118,
		1123,
		1097,
		1096,
		1094,
		1092,
		103,
		1101,
		1099,
		1979,
		1059,
		1058,
		1056,
		1054,
		77,
		1051,
		74,
		1066,
		1064,
		1061,
		1071,
		1964,
		1963,
		1007,
		1006,
		1004,
		1002,
		999,
		41,
		996,
		37,
		1017,
		1015,
		1012,
		1009,
		52,
		1025,
		1022,
		1936,
		1935,
		1933,
		1938,
		942,
		940,
		938,
		935,
		932,
		5,
		2,
		955,
		953,
		950,
		947,
		18,
		943,
		15,
		965,
		962,
		958,
		1895,
		1894,
		1892,
		1890,
		973,
		1899,
		1897,
		1379,
		325,
		1364,
		1362,
		288,
		285,
		1334,
		1332,
		1330,
		241,
		238,
		234,
		1287,
		1285,
		1283,
		1280,
		1294,
		2112,
		188,
		185,
		181,
		178,
		2028,
		1219,
		1217,
		1215,
		1212,
		200,
		1209,
		1227,
		2074,
		2072,
		583,
		553,
		551,
		1583,
		505,
		503,
		500,
		513,
		1557,
		1555,
		444,
		442,
		439,
		436,
		2213,
		455,
		451,
		1507,
		1505,
		1502,
		796,
		763,
		762,
		760,
		767,
		711,
		710,
		708,
		706,
		2377,
		718,
		715,
		1710,
		2544,
		917,
		915,
		2681,
		1627,
		1597,
		1595,
		2325,
		1769,
		1749,
		1747,
		1499,
		1438,
		1435,
		2204,
		1390,
		1388,
		1385,
		1395,
		2169,
		2167,
		1704,
		1665,
		1662,
		1625,
		1623,
		1620,
		1770,
		1329,
		1282,
		1279,
		2109,
		1214,
		1207,
		1222,
		2068,
		2065,
		1149,
		1147,
		1144,
		1141,
		146,
		1157,
		1154,
		2013,
		2011,
		2008,
		2015,
		1579,
		1549,
		1546,
		1495,
		1487,
		1433,
		1431,
		1428,
		1425,
		388,
		1440,
		2205,
		1705,
		658,
		1667,
		1664,
		1119,
		1095,
		1093,
		1978,
		1057,
		1055,
		1052,
		1062,
		1962,
		1960,
		1005,
		1003,
		1e3,
		997,
		38,
		1013,
		1010,
		1932,
		1930,
		1927,
		1934,
		941,
		939,
		936,
		933,
		6,
		930,
		3,
		951,
		948,
		944,
		1889,
		1887,
		1884,
		1881,
		959,
		1893,
		1891,
		35,
		1377,
		1360,
		1358,
		1327,
		1325,
		1322,
		1331,
		1277,
		1275,
		1272,
		1269,
		235,
		1284,
		2110,
		1205,
		1204,
		1201,
		1198,
		182,
		1195,
		179,
		1213,
		2070,
		2067,
		1580,
		501,
		1551,
		1548,
		440,
		437,
		1497,
		1494,
		1490,
		1503,
		761,
		709,
		707,
		1706,
		913,
		912,
		2198,
		1386,
		2164,
		2161,
		1621,
		1766,
		2103,
		1208,
		2058,
		2054,
		1145,
		1142,
		2005,
		2002,
		1999,
		2009,
		1488,
		1429,
		1426,
		2200,
		1698,
		1659,
		1656,
		1975,
		1053,
		1957,
		1954,
		1001,
		998,
		1924,
		1921,
		1918,
		1928,
		937,
		934,
		931,
		1879,
		1876,
		1873,
		1870,
		945,
		1885,
		1882,
		1323,
		1273,
		1270,
		2105,
		1202,
		1199,
		1196,
		1211,
		2061,
		2057,
		1576,
		1543,
		1540,
		1484,
		1481,
		1478,
		1491,
		1700
	]), e;
}(), Ar = function() {
	function e(e, t) {
		this.bits = e, this.points = t;
	}
	return e.prototype.getBits = function() {
		return this.bits;
	}, e.prototype.getPoints = function() {
		return this.points;
	}, e;
}(), jr = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Mr = function() {
	function e() {}
	return e.detectMultiple = function(t, n, r) {
		var i = t.getBlackMatrix(), a = e.detect(r, i);
		return a.length || (i = i.clone(), i.rotate180(), a = e.detect(r, i)), new Ar(i, a);
	}, e.detect = function(t, n) {
		for (var r, i, a = [], o = 0, s = 0, c = !1; o < n.getHeight();) {
			var l = e.findVertices(n, o, s);
			if (l[0] == null && l[3] == null) {
				if (!c) break;
				c = !1, s = 0;
				try {
					for (var u = (r = void 0, jr(a)), d = u.next(); !d.done; d = u.next()) {
						var f = d.value;
						f[1] != null && (o = Math.trunc(Math.max(o, f[1].getY()))), f[3] != null && (o = Math.max(o, Math.trunc(f[3].getY())));
					}
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						d && !d.done && (i = u.return) && i.call(u);
					} finally {
						if (r) throw r.error;
					}
				}
				o += e.ROW_STEP;
			} else {
				if (c = !0, a.push(l), !t) break;
				l[2] == null ? (s = Math.trunc(l[4].getX()), o = Math.trunc(l[4].getY())) : (s = Math.trunc(l[2].getX()), o = Math.trunc(l[2].getY()));
			}
		}
		return a;
	}, e.findVertices = function(t, n, r) {
		var i = t.getHeight(), a = t.getWidth(), o = Array(8);
		return e.copyToResult(o, e.findRowsWithPattern(t, i, a, n, r, e.START_PATTERN), e.INDEXES_START_PATTERN), o[4] != null && (r = Math.trunc(o[4].getX()), n = Math.trunc(o[4].getY())), e.copyToResult(o, e.findRowsWithPattern(t, i, a, n, r, e.STOP_PATTERN), e.INDEXES_STOP_PATTERN), o;
	}, e.copyToResult = function(e, t, n) {
		for (var r = 0; r < n.length; r++) e[n[r]] = t[r];
	}, e.findRowsWithPattern = function(t, n, r, i, a, o) {
		for (var s = [
			,
			,
			,
			,
		], c = !1, l = new Int32Array(o.length); i < n; i += e.ROW_STEP) {
			var u = e.findGuardPattern(t, a, i, r, !1, o, l);
			if (u != null) {
				for (; i > 0;) {
					var d = e.findGuardPattern(t, a, --i, r, !1, o, l);
					if (d != null) u = d;
					else {
						i++;
						break;
					}
				}
				s[0] = new z(u[0], i), s[1] = new z(u[1], i), c = !0;
				break;
			}
		}
		var f = i + 1;
		if (c) {
			for (var p = 0, d = Int32Array.from([Math.trunc(s[0].getX()), Math.trunc(s[1].getX())]); f < n; f++) {
				var u = e.findGuardPattern(t, d[0], f, r, !1, o, l);
				if (u != null && Math.abs(d[0] - u[0]) < e.MAX_PATTERN_DRIFT && Math.abs(d[1] - u[1]) < e.MAX_PATTERN_DRIFT) d = u, p = 0;
				else if (p > e.SKIPPED_ROW_COUNT_MAX) break;
				else p++;
			}
			f -= p + 1, s[2] = new z(d[0], f), s[3] = new z(d[1], f);
		}
		return f - i < e.BARCODE_MIN_HEIGHT && k.fill(s, null), s;
	}, e.findGuardPattern = function(t, n, r, i, a, o, s) {
		k.fillWithin(s, 0, s.length, 0);
		for (var c = n, l = 0; t.get(c, r) && c > 0 && l++ < e.MAX_PIXEL_DRIFT;) c--;
		for (var u = c, d = 0, f = o.length, p = a; u < i; u++) if (t.get(u, r) !== p) s[d]++;
		else {
			if (d === f - 1) {
				if (e.patternMatchVariance(s, o, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE) return new Int32Array([c, u]);
				c += s[0] + s[1], T.arraycopy(s, 2, s, 0, d - 1), s[d - 1] = 0, s[d] = 0, d--;
			} else d++;
			s[d] = 1, p = !p;
		}
		return d === f - 1 && e.patternMatchVariance(s, o, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE ? new Int32Array([c, u - 1]) : null;
	}, e.patternMatchVariance = function(e, t, n) {
		for (var r = e.length, i = 0, a = 0, o = 0; o < r; o++) i += e[o], a += t[o];
		if (i < a) return Infinity;
		var s = i / a;
		n *= s;
		for (var c = 0, l = 0; l < r; l++) {
			var u = e[l], d = t[l] * s, f = u > d ? u - d : d - u;
			if (f > n) return Infinity;
			c += f;
		}
		return c / i;
	}, e.INDEXES_START_PATTERN = Int32Array.from([
		0,
		4,
		1,
		5
	]), e.INDEXES_STOP_PATTERN = Int32Array.from([
		6,
		2,
		7,
		3
	]), e.MAX_AVG_VARIANCE = .42, e.MAX_INDIVIDUAL_VARIANCE = .8, e.START_PATTERN = Int32Array.from([
		8,
		1,
		1,
		1,
		1,
		1,
		1,
		3
	]), e.STOP_PATTERN = Int32Array.from([
		7,
		1,
		1,
		3,
		1,
		1,
		1,
		2,
		1
	]), e.MAX_PIXEL_DRIFT = 3, e.MAX_PATTERN_DRIFT = 5, e.SKIPPED_ROW_COUNT_MAX = 25, e.ROW_STEP = 5, e.BARCODE_MIN_HEIGHT = 10, e;
}(), Nr = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Pr = function() {
	function e(e, t) {
		if (t.length === 0) throw new b();
		this.field = e;
		var n = t.length;
		if (n > 1 && t[0] === 0) {
			for (var r = 1; r < n && t[r] === 0;) r++;
			r === n ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(n - r), T.arraycopy(t, r, this.coefficients, 0, this.coefficients.length));
		} else this.coefficients = t;
	}
	return e.prototype.getCoefficients = function() {
		return this.coefficients;
	}, e.prototype.getDegree = function() {
		return this.coefficients.length - 1;
	}, e.prototype.isZero = function() {
		return this.coefficients[0] === 0;
	}, e.prototype.getCoefficient = function(e) {
		return this.coefficients[this.coefficients.length - 1 - e];
	}, e.prototype.evaluateAt = function(e) {
		var t, n;
		if (e === 0) return this.getCoefficient(0);
		if (e === 1) {
			var r = 0;
			try {
				for (var i = Nr(this.coefficients), a = i.next(); !a.done; a = i.next()) {
					var o = a.value;
					r = this.field.add(r, o);
				}
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					a && !a.done && (n = i.return) && n.call(i);
				} finally {
					if (t) throw t.error;
				}
			}
			return r;
		}
		for (var s = this.coefficients[0], c = this.coefficients.length, l = 1; l < c; l++) s = this.field.add(this.field.multiply(e, s), this.coefficients[l]);
		return s;
	}, e.prototype.add = function(t) {
		if (!this.field.equals(t.field)) throw new b("ModulusPolys do not have same ModulusGF field");
		if (this.isZero()) return t;
		if (t.isZero()) return this;
		var n = this.coefficients, r = t.coefficients;
		if (n.length > r.length) {
			var i = n;
			n = r, r = i;
		}
		var a = new Int32Array(r.length), o = r.length - n.length;
		T.arraycopy(r, 0, a, 0, o);
		for (var s = o; s < r.length; s++) a[s] = this.field.add(n[s - o], r[s]);
		return new e(this.field, a);
	}, e.prototype.subtract = function(e) {
		if (!this.field.equals(e.field)) throw new b("ModulusPolys do not have same ModulusGF field");
		return e.isZero() ? this : this.add(e.negative());
	}, e.prototype.multiply = function(t) {
		return t instanceof e ? this.multiplyOther(t) : this.multiplyScalar(t);
	}, e.prototype.multiplyOther = function(t) {
		if (!this.field.equals(t.field)) throw new b("ModulusPolys do not have same ModulusGF field");
		if (this.isZero() || t.isZero()) return new e(this.field, new Int32Array([0]));
		for (var n = this.coefficients, r = n.length, i = t.coefficients, a = i.length, o = new Int32Array(r + a - 1), s = 0; s < r; s++) for (var c = n[s], l = 0; l < a; l++) o[s + l] = this.field.add(o[s + l], this.field.multiply(c, i[l]));
		return new e(this.field, o);
	}, e.prototype.negative = function() {
		for (var t = this.coefficients.length, n = new Int32Array(t), r = 0; r < t; r++) n[r] = this.field.subtract(0, this.coefficients[r]);
		return new e(this.field, n);
	}, e.prototype.multiplyScalar = function(t) {
		if (t === 0) return new e(this.field, new Int32Array([0]));
		if (t === 1) return this;
		for (var n = this.coefficients.length, r = new Int32Array(n), i = 0; i < n; i++) r[i] = this.field.multiply(this.coefficients[i], t);
		return new e(this.field, r);
	}, e.prototype.multiplyByMonomial = function(t, n) {
		if (t < 0) throw new b();
		if (n === 0) return new e(this.field, new Int32Array([0]));
		for (var r = this.coefficients.length, i = new Int32Array(r + t), a = 0; a < r; a++) i[a] = this.field.multiply(this.coefficients[a], n);
		return new e(this.field, i);
	}, e.prototype.toString = function() {
		for (var e = new F(), t = this.getDegree(); t >= 0; t--) {
			var n = this.getCoefficient(t);
			n !== 0 && (n < 0 ? (e.append(" - "), n = -n) : e.length() > 0 && e.append(" + "), (t === 0 || n !== 1) && e.append(n), t !== 0 && (t === 1 ? e.append("x") : (e.append("x^"), e.append(t))));
		}
		return e.toString();
	}, e;
}(), Fr = function() {
	function e() {}
	return e.prototype.add = function(e, t) {
		return (e + t) % this.modulus;
	}, e.prototype.subtract = function(e, t) {
		return (this.modulus + e - t) % this.modulus;
	}, e.prototype.exp = function(e) {
		return this.expTable[e];
	}, e.prototype.log = function(e) {
		if (e === 0) throw new b();
		return this.logTable[e];
	}, e.prototype.inverse = function(e) {
		if (e === 0) throw new Pe();
		return this.expTable[this.modulus - this.logTable[e] - 1];
	}, e.prototype.multiply = function(e, t) {
		return e === 0 || t === 0 ? 0 : this.expTable[(this.logTable[e] + this.logTable[t]) % (this.modulus - 1)];
	}, e.prototype.getSize = function() {
		return this.modulus;
	}, e.prototype.equals = function(e) {
		return e === this;
	}, e;
}(), Ir = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Lr = function(e) {
	Ir(t, e);
	function t(t, n) {
		var r = e.call(this) || this;
		r.modulus = t, r.expTable = new Int32Array(t), r.logTable = new Int32Array(t);
		for (var i = 1, a = 0; a < t; a++) r.expTable[a] = i, i = i * n % t;
		for (var a = 0; a < t - 1; a++) r.logTable[r.expTable[a]] = a;
		return r.zero = new Pr(r, new Int32Array([0])), r.one = new Pr(r, new Int32Array([1])), r;
	}
	return t.prototype.getZero = function() {
		return this.zero;
	}, t.prototype.getOne = function() {
		return this.one;
	}, t.prototype.buildMonomial = function(e, t) {
		if (e < 0) throw new b();
		if (t === 0) return this.zero;
		var n = new Int32Array(e + 1);
		return n[0] = t, new Pr(this, n);
	}, t.PDF417_GF = new t(G.NUMBER_OF_CODEWORDS, 3), t;
}(Fr), Rr = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, zr = function() {
	function e() {
		this.field = Lr.PDF417_GF;
	}
	return e.prototype.decode = function(e, t, n) {
		for (var r, i, a = new Pr(this.field, e), o = new Int32Array(t), s = !1, c = t; c > 0; c--) {
			var l = a.evaluateAt(this.field.exp(c));
			o[t - c] = l, l !== 0 && (s = !0);
		}
		if (!s) return 0;
		var u = this.field.getOne();
		if (n != null) try {
			for (var d = Rr(n), f = d.next(); !f.done; f = d.next()) {
				var p = f.value, m = this.field.exp(e.length - 1 - p), h = new Pr(this.field, new Int32Array([this.field.subtract(0, m), 1]));
				u = u.multiply(h);
			}
		} catch (e) {
			r = { error: e };
		} finally {
			try {
				f && !f.done && (i = d.return) && i.call(d);
			} finally {
				if (r) throw r.error;
			}
		}
		for (var g = new Pr(this.field, o), _ = this.runEuclideanAlgorithm(this.field.buildMonomial(t, 1), g, t), v = _[0], y = _[1], b = this.findErrorLocations(v), x = this.findErrorMagnitudes(y, v, b), c = 0; c < b.length; c++) {
			var S = e.length - 1 - this.field.log(b[c]);
			if (S < 0) throw C.getChecksumInstance();
			e[S] = this.field.subtract(e[S], x[c]);
		}
		return b.length;
	}, e.prototype.runEuclideanAlgorithm = function(e, t, n) {
		if (e.getDegree() < t.getDegree()) {
			var r = e;
			e = t, t = r;
		}
		for (var i = e, a = t, o = this.field.getZero(), s = this.field.getOne(); a.getDegree() >= Math.round(n / 2);) {
			var c = i, l = o;
			if (i = a, o = s, i.isZero()) throw C.getChecksumInstance();
			a = c;
			for (var u = this.field.getZero(), d = i.getCoefficient(i.getDegree()), f = this.field.inverse(d); a.getDegree() >= i.getDegree() && !a.isZero();) {
				var p = a.getDegree() - i.getDegree(), m = this.field.multiply(a.getCoefficient(a.getDegree()), f);
				u = u.add(this.field.buildMonomial(p, m)), a = a.subtract(i.multiplyByMonomial(p, m));
			}
			s = u.multiply(o).subtract(l).negative();
		}
		var h = s.getCoefficient(0);
		if (h === 0) throw C.getChecksumInstance();
		var g = this.field.inverse(h);
		return [s.multiply(g), a.multiply(g)];
	}, e.prototype.findErrorLocations = function(e) {
		for (var t = e.getDegree(), n = new Int32Array(t), r = 0, i = 1; i < this.field.getSize() && r < t; i++) e.evaluateAt(i) === 0 && (n[r] = this.field.inverse(i), r++);
		if (r !== t) throw C.getChecksumInstance();
		return n;
	}, e.prototype.findErrorMagnitudes = function(e, t, n) {
		for (var r = t.getDegree(), i = new Int32Array(r), a = 1; a <= r; a++) i[r - a] = this.field.multiply(a, t.getCoefficient(a));
		for (var o = new Pr(this.field, i), s = n.length, c = new Int32Array(s), a = 0; a < s; a++) {
			var l = this.field.inverse(n[a]), u = this.field.subtract(0, e.evaluateAt(l)), d = this.field.inverse(o.evaluateAt(l));
			c[a] = this.field.multiply(u, d);
		}
		return c;
	}, e;
}(), Br = function() {
	function e(t, n, r, i, a) {
		t instanceof e ? this.constructor_2(t) : this.constructor_1(t, n, r, i, a);
	}
	return e.prototype.constructor_1 = function(e, t, n, r, i) {
		var a = t == null || n == null, o = r == null || i == null;
		if (a && o) throw new I();
		a ? (t = new z(0, r.getY()), n = new z(0, i.getY())) : o && (r = new z(e.getWidth() - 1, t.getY()), i = new z(e.getWidth() - 1, n.getY())), this.image = e, this.topLeft = t, this.bottomLeft = n, this.topRight = r, this.bottomRight = i, this.minX = Math.trunc(Math.min(t.getX(), n.getX())), this.maxX = Math.trunc(Math.max(r.getX(), i.getX())), this.minY = Math.trunc(Math.min(t.getY(), r.getY())), this.maxY = Math.trunc(Math.max(n.getY(), i.getY()));
	}, e.prototype.constructor_2 = function(e) {
		this.image = e.image, this.topLeft = e.getTopLeft(), this.bottomLeft = e.getBottomLeft(), this.topRight = e.getTopRight(), this.bottomRight = e.getBottomRight(), this.minX = e.getMinX(), this.maxX = e.getMaxX(), this.minY = e.getMinY(), this.maxY = e.getMaxY();
	}, e.merge = function(t, n) {
		return t == null ? n : n == null ? t : new e(t.image, t.topLeft, t.bottomLeft, n.topRight, n.bottomRight);
	}, e.prototype.addMissingRows = function(t, n, r) {
		var i = this.topLeft, a = this.bottomLeft, o = this.topRight, s = this.bottomRight;
		if (t > 0) {
			var c = r ? this.topLeft : this.topRight, l = Math.trunc(c.getY() - t);
			l < 0 && (l = 0);
			var u = new z(c.getX(), l);
			r ? i = u : o = u;
		}
		if (n > 0) {
			var d = r ? this.bottomLeft : this.bottomRight, f = Math.trunc(d.getY() + n);
			f >= this.image.getHeight() && (f = this.image.getHeight() - 1);
			var p = new z(d.getX(), f);
			r ? a = p : s = p;
		}
		return new e(this.image, i, a, o, s);
	}, e.prototype.getMinX = function() {
		return this.minX;
	}, e.prototype.getMaxX = function() {
		return this.maxX;
	}, e.prototype.getMinY = function() {
		return this.minY;
	}, e.prototype.getMaxY = function() {
		return this.maxY;
	}, e.prototype.getTopLeft = function() {
		return this.topLeft;
	}, e.prototype.getTopRight = function() {
		return this.topRight;
	}, e.prototype.getBottomLeft = function() {
		return this.bottomLeft;
	}, e.prototype.getBottomRight = function() {
		return this.bottomRight;
	}, e;
}(), Vr = function() {
	function e(e, t, n, r) {
		this.columnCount = e, this.errorCorrectionLevel = r, this.rowCountUpperPart = t, this.rowCountLowerPart = n, this.rowCount = t + n;
	}
	return e.prototype.getColumnCount = function() {
		return this.columnCount;
	}, e.prototype.getErrorCorrectionLevel = function() {
		return this.errorCorrectionLevel;
	}, e.prototype.getRowCount = function() {
		return this.rowCount;
	}, e.prototype.getRowCountUpperPart = function() {
		return this.rowCountUpperPart;
	}, e.prototype.getRowCountLowerPart = function() {
		return this.rowCountLowerPart;
	}, e;
}(), Hr = function() {
	function e() {
		this.buffer = "";
	}
	return e.form = function(e, t) {
		var n = -1;
		function r(e, r, i, a, o, s) {
			if (e === "%%") return "%";
			if (t[++n] !== void 0) {
				e = a ? parseInt(a.substr(1)) : void 0;
				var c = o ? parseInt(o.substr(1)) : void 0, l;
				switch (s) {
					case "s":
						l = t[n];
						break;
					case "c":
						l = t[n][0];
						break;
					case "f":
						l = parseFloat(t[n]).toFixed(e);
						break;
					case "p":
						l = parseFloat(t[n]).toPrecision(e);
						break;
					case "e":
						l = parseFloat(t[n]).toExponential(e);
						break;
					case "x":
						l = parseInt(t[n]).toString(c || 16);
						break;
					case "d": l = parseFloat(parseInt(t[n], c || 10).toPrecision(e)).toFixed(0);
				}
				l = typeof l == "object" ? JSON.stringify(l) : (+l).toString(c);
				for (var u = parseInt(i), d = i && i[0] + "" == "0" ? "0" : " "; l.length < u;) l = r === void 0 ? d + l : l + d;
				return l;
			}
		}
		return e.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, r);
	}, e.prototype.format = function(t) {
		var n = [...arguments].slice(1);
		this.buffer += e.form(t, n);
	}, e.prototype.toString = function() {
		return this.buffer;
	}, e;
}(), Ur = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Wr = function() {
	function e(e) {
		this.boundingBox = new Br(e), this.codewords = Array(e.getMaxY() - e.getMinY() + 1);
	}
	return e.prototype.getCodewordNearby = function(t) {
		var n = this.getCodeword(t);
		if (n != null) return n;
		for (var r = 1; r < e.MAX_NEARBY_DISTANCE; r++) {
			var i = this.imageRowToCodewordIndex(t) - r;
			if (i >= 0 && (n = this.codewords[i], n != null) || (i = this.imageRowToCodewordIndex(t) + r, i < this.codewords.length && (n = this.codewords[i], n != null))) return n;
		}
		return null;
	}, e.prototype.imageRowToCodewordIndex = function(e) {
		return e - this.boundingBox.getMinY();
	}, e.prototype.setCodeword = function(e, t) {
		this.codewords[this.imageRowToCodewordIndex(e)] = t;
	}, e.prototype.getCodeword = function(e) {
		return this.codewords[this.imageRowToCodewordIndex(e)];
	}, e.prototype.getBoundingBox = function() {
		return this.boundingBox;
	}, e.prototype.getCodewords = function() {
		return this.codewords;
	}, e.prototype.toString = function() {
		var e, t, n = new Hr(), r = 0;
		try {
			for (var i = Ur(this.codewords), a = i.next(); !a.done; a = i.next()) {
				var o = a.value;
				o == null ? n.format("%3d:    |   %n", r++) : n.format("%3d: %3d|%3d%n", r++, o.getRowNumber(), o.getValue());
			}
		} catch (t) {
			e = { error: t };
		} finally {
			try {
				a && !a.done && (t = i.return) && t.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return n.toString();
	}, e.MAX_NEARBY_DISTANCE = 5, e;
}(), Gr = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Kr = function(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r = n.call(e), i, a = [], o;
	try {
		for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;) a.push(i.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			i && !i.done && (n = r.return) && n.call(r);
		} finally {
			if (o) throw o.error;
		}
	}
	return a;
}, qr = function() {
	function e() {
		this.values = /* @__PURE__ */ new Map();
	}
	return e.prototype.setValue = function(e) {
		e = Math.trunc(e);
		var t = this.values.get(e);
		t ??= 0, t++, this.values.set(e, t);
	}, e.prototype.getValue = function() {
		var e, t, n = -1, r = [], i = function(e, t) {
			var i = {
				getKey: function() {
					return e;
				},
				getValue: function() {
					return t;
				}
			};
			i.getValue() > n ? (n = i.getValue(), r = [], r.push(i.getKey())) : i.getValue() === n && r.push(i.getKey());
		};
		try {
			for (var a = Gr(this.values.entries()), o = a.next(); !o.done; o = a.next()) {
				var s = Kr(o.value, 2), c = s[0], l = s[1];
				i(c, l);
			}
		} catch (t) {
			e = { error: t };
		} finally {
			try {
				o && !o.done && (t = a.return) && t.call(a);
			} finally {
				if (e) throw e.error;
			}
		}
		return G.toIntArray(r);
	}, e.prototype.getConfidence = function(e) {
		return this.values.get(e);
	}, e;
}(), Jr = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Yr = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Xr = function(e) {
	Jr(t, e);
	function t(t, n) {
		var r = e.call(this, t) || this;
		return r._isLeft = n, r;
	}
	return t.prototype.setRowNumbers = function() {
		var e, t;
		try {
			for (var n = Yr(this.getCodewords()), r = n.next(); !r.done; r = n.next()) r.value?.setRowNumberAsRowIndicatorColumn();
		} catch (t) {
			e = { error: t };
		} finally {
			try {
				r && !r.done && (t = n.return) && t.call(n);
			} finally {
				if (e) throw e.error;
			}
		}
	}, t.prototype.adjustCompleteIndicatorColumnRowNumbers = function(e) {
		var t = this.getCodewords();
		this.setRowNumbers(), this.removeIncorrectCodewords(t, e);
		for (var n = this.getBoundingBox(), r = this._isLeft ? n.getTopLeft() : n.getTopRight(), i = this._isLeft ? n.getBottomLeft() : n.getBottomRight(), a = this.imageRowToCodewordIndex(Math.trunc(r.getY())), o = this.imageRowToCodewordIndex(Math.trunc(i.getY())), s = -1, c = 1, l = 0, u = a; u < o; u++) if (t[u] != null) {
			var d = t[u], f = d.getRowNumber() - s;
			if (f === 0) l++;
			else if (f === 1) c = Math.max(c, l), l = 1, s = d.getRowNumber();
			else if (f < 0 || d.getRowNumber() >= e.getRowCount() || f > u) t[u] = null;
			else {
				var p = void 0;
				p = c > 2 ? (c - 2) * f : f;
				for (var m = p >= u, h = 1; h <= p && !m; h++) m = t[u - h] != null;
				m ? t[u] = null : (s = d.getRowNumber(), l = 1);
			}
		}
	}, t.prototype.getRowHeights = function() {
		var e, t, n = this.getBarcodeMetadata();
		if (n == null) return null;
		this.adjustIncompleteIndicatorColumnRowNumbers(n);
		var r = new Int32Array(n.getRowCount());
		try {
			for (var i = Yr(this.getCodewords()), a = i.next(); !a.done; a = i.next()) {
				var o = a.value;
				if (o != null) {
					var s = o.getRowNumber();
					if (s >= r.length) continue;
					r[s]++;
				}
			}
		} catch (t) {
			e = { error: t };
		} finally {
			try {
				a && !a.done && (t = i.return) && t.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return r;
	}, t.prototype.adjustIncompleteIndicatorColumnRowNumbers = function(e) {
		for (var t = this.getBoundingBox(), n = this._isLeft ? t.getTopLeft() : t.getTopRight(), r = this._isLeft ? t.getBottomLeft() : t.getBottomRight(), i = this.imageRowToCodewordIndex(Math.trunc(n.getY())), a = this.imageRowToCodewordIndex(Math.trunc(r.getY())), o = this.getCodewords(), s = -1, c = 1, l = 0, u = i; u < a; u++) if (o[u] != null) {
			var d = o[u];
			d.setRowNumberAsRowIndicatorColumn();
			var f = d.getRowNumber() - s;
			f === 0 ? l++ : f === 1 ? (c = Math.max(c, l), l = 1, s = d.getRowNumber()) : d.getRowNumber() >= e.getRowCount() ? o[u] = null : (s = d.getRowNumber(), l = 1);
		}
	}, t.prototype.getBarcodeMetadata = function() {
		var e, t, n = this.getCodewords(), r = new qr(), i = new qr(), a = new qr(), o = new qr();
		try {
			for (var s = Yr(n), c = s.next(); !c.done; c = s.next()) {
				var l = c.value;
				if (l != null) {
					l.setRowNumberAsRowIndicatorColumn();
					var u = l.getValue() % 30, d = l.getRowNumber();
					switch (this._isLeft || (d += 2), d % 3) {
						case 0:
							i.setValue(u * 3 + 1);
							break;
						case 1:
							o.setValue(u / 3), a.setValue(u % 3);
							break;
						case 2: r.setValue(u + 1);
					}
				}
			}
		} catch (t) {
			e = { error: t };
		} finally {
			try {
				c && !c.done && (t = s.return) && t.call(s);
			} finally {
				if (e) throw e.error;
			}
		}
		if (r.getValue().length === 0 || i.getValue().length === 0 || a.getValue().length === 0 || o.getValue().length === 0 || r.getValue()[0] < 1 || i.getValue()[0] + a.getValue()[0] < G.MIN_ROWS_IN_BARCODE || i.getValue()[0] + a.getValue()[0] > G.MAX_ROWS_IN_BARCODE) return null;
		var f = new Vr(r.getValue()[0], i.getValue()[0], a.getValue()[0], o.getValue()[0]);
		return this.removeIncorrectCodewords(n, f), f;
	}, t.prototype.removeIncorrectCodewords = function(e, t) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			if (e[n] != null) {
				var i = r.getValue() % 30, a = r.getRowNumber();
				if (a > t.getRowCount()) e[n] = null;
				else switch (this._isLeft || (a += 2), a % 3) {
					case 0:
						i * 3 + 1 !== t.getRowCountUpperPart() && (e[n] = null);
						break;
					case 1:
						(Math.trunc(i / 3) !== t.getErrorCorrectionLevel() || i % 3 !== t.getRowCountLowerPart()) && (e[n] = null);
						break;
					case 2: i + 1 !== t.getColumnCount() && (e[n] = null);
				}
			}
		}
	}, t.prototype.isLeft = function() {
		return this._isLeft;
	}, t.prototype.toString = function() {
		return "IsLeft: " + this._isLeft + "\n" + e.prototype.toString.call(this);
	}, t;
}(Wr), Zr = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Qr = function() {
	function e(e, t) {
		this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = e, this.barcodeColumnCount = e.getColumnCount(), this.boundingBox = t, this.detectionResultColumns = Array(this.barcodeColumnCount + 2);
	}
	return e.prototype.getDetectionResultColumns = function() {
		this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
		var e = G.MAX_CODEWORDS_IN_BARCODE, t;
		do
			t = e, e = this.adjustRowNumbersAndGetCount();
		while (e > 0 && e < t);
		return this.detectionResultColumns;
	}, e.prototype.adjustIndicatorColumnRowNumbers = function(e) {
		e?.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
	}, e.prototype.adjustRowNumbersAndGetCount = function() {
		var e = this.adjustRowNumbersByRow();
		if (e === 0) return 0;
		for (var t = 1; t < this.barcodeColumnCount + 1; t++) for (var n = this.detectionResultColumns[t].getCodewords(), r = 0; r < n.length; r++) n[r] != null && (n[r].hasValidRowNumber() || this.adjustRowNumbers(t, r, n));
		return e;
	}, e.prototype.adjustRowNumbersByRow = function() {
		return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI();
	}, e.prototype.adjustRowNumbersFromBothRI = function() {
		if (this.detectionResultColumns[0] != null && this.detectionResultColumns[this.barcodeColumnCount + 1] != null) {
			for (var e = this.detectionResultColumns[0].getCodewords(), t = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), n = 0; n < e.length; n++) if (e[n] != null && t[n] != null && e[n].getRowNumber() === t[n].getRowNumber()) for (var r = 1; r <= this.barcodeColumnCount; r++) {
				var i = this.detectionResultColumns[r].getCodewords()[n];
				i != null && (i.setRowNumber(e[n].getRowNumber()), i.hasValidRowNumber() || (this.detectionResultColumns[r].getCodewords()[n] = null));
			}
		}
	}, e.prototype.adjustRowNumbersFromRRI = function() {
		if (this.detectionResultColumns[this.barcodeColumnCount + 1] == null) return 0;
		for (var t = 0, n = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), r = 0; r < n.length; r++) if (n[r] != null) for (var i = n[r].getRowNumber(), a = 0, o = this.barcodeColumnCount + 1; o > 0 && a < this.ADJUST_ROW_NUMBER_SKIP; o--) {
			var s = this.detectionResultColumns[o].getCodewords()[r];
			s != null && (a = e.adjustRowNumberIfValid(i, a, s), s.hasValidRowNumber() || t++);
		}
		return t;
	}, e.prototype.adjustRowNumbersFromLRI = function() {
		if (this.detectionResultColumns[0] == null) return 0;
		for (var t = 0, n = this.detectionResultColumns[0].getCodewords(), r = 0; r < n.length; r++) if (n[r] != null) for (var i = n[r].getRowNumber(), a = 0, o = 1; o < this.barcodeColumnCount + 1 && a < this.ADJUST_ROW_NUMBER_SKIP; o++) {
			var s = this.detectionResultColumns[o].getCodewords()[r];
			s != null && (a = e.adjustRowNumberIfValid(i, a, s), s.hasValidRowNumber() || t++);
		}
		return t;
	}, e.adjustRowNumberIfValid = function(e, t, n) {
		return n == null || n.hasValidRowNumber() || (n.isValidRowNumber(e) ? (n.setRowNumber(e), t = 0) : ++t), t;
	}, e.prototype.adjustRowNumbers = function(t, n, r) {
		var i, a;
		if (this.detectionResultColumns[t - 1] != null) {
			var o = r[n], s = this.detectionResultColumns[t - 1].getCodewords(), c = s;
			this.detectionResultColumns[t + 1] != null && (c = this.detectionResultColumns[t + 1].getCodewords());
			var l = Array(14);
			l[2] = s[n], l[3] = c[n], n > 0 && (l[0] = r[n - 1], l[4] = s[n - 1], l[5] = c[n - 1]), n > 1 && (l[8] = r[n - 2], l[10] = s[n - 2], l[11] = c[n - 2]), n < r.length - 1 && (l[1] = r[n + 1], l[6] = s[n + 1], l[7] = c[n + 1]), n < r.length - 2 && (l[9] = r[n + 2], l[12] = s[n + 2], l[13] = c[n + 2]);
			try {
				for (var u = Zr(l), d = u.next(); !d.done; d = u.next()) {
					var f = d.value;
					if (e.adjustRowNumber(o, f)) return;
				}
			} catch (e) {
				i = { error: e };
			} finally {
				try {
					d && !d.done && (a = u.return) && a.call(u);
				} finally {
					if (i) throw i.error;
				}
			}
		}
	}, e.adjustRowNumber = function(e, t) {
		return t == null ? !1 : t.hasValidRowNumber() && t.getBucket() === e.getBucket() ? (e.setRowNumber(t.getRowNumber()), !0) : !1;
	}, e.prototype.getBarcodeColumnCount = function() {
		return this.barcodeColumnCount;
	}, e.prototype.getBarcodeRowCount = function() {
		return this.barcodeMetadata.getRowCount();
	}, e.prototype.getBarcodeECLevel = function() {
		return this.barcodeMetadata.getErrorCorrectionLevel();
	}, e.prototype.setBoundingBox = function(e) {
		this.boundingBox = e;
	}, e.prototype.getBoundingBox = function() {
		return this.boundingBox;
	}, e.prototype.setDetectionResultColumn = function(e, t) {
		this.detectionResultColumns[e] = t;
	}, e.prototype.getDetectionResultColumn = function(e) {
		return this.detectionResultColumns[e];
	}, e.prototype.toString = function() {
		var e = this.detectionResultColumns[0];
		e ??= this.detectionResultColumns[this.barcodeColumnCount + 1];
		for (var t = new Hr(), n = 0; n < e.getCodewords().length; n++) {
			t.format("CW %3d:", n);
			for (var r = 0; r < this.barcodeColumnCount + 2; r++) if (this.detectionResultColumns[r] == null) t.format("    |   ");
			else {
				var i = this.detectionResultColumns[r].getCodewords()[n];
				i == null ? t.format("    |   ") : t.format(" %3d|%3d", i.getRowNumber(), i.getValue());
			}
			t.format("%n");
		}
		return t.toString();
	}, e;
}(), $r = function() {
	function e(t, n, r, i) {
		this.rowNumber = e.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(t), this.endX = Math.trunc(n), this.bucket = Math.trunc(r), this.value = Math.trunc(i);
	}
	return e.prototype.hasValidRowNumber = function() {
		return this.isValidRowNumber(this.rowNumber);
	}, e.prototype.isValidRowNumber = function(t) {
		return t !== e.BARCODE_ROW_UNKNOWN && this.bucket === t % 3 * 3;
	}, e.prototype.setRowNumberAsRowIndicatorColumn = function() {
		this.rowNumber = Math.trunc(Math.trunc(this.value / 30) * 3 + Math.trunc(this.bucket / 3));
	}, e.prototype.getWidth = function() {
		return this.endX - this.startX;
	}, e.prototype.getStartX = function() {
		return this.startX;
	}, e.prototype.getEndX = function() {
		return this.endX;
	}, e.prototype.getBucket = function() {
		return this.bucket;
	}, e.prototype.getValue = function() {
		return this.value;
	}, e.prototype.getRowNumber = function() {
		return this.rowNumber;
	}, e.prototype.setRowNumber = function(e) {
		this.rowNumber = e;
	}, e.prototype.toString = function() {
		return this.rowNumber + "|" + this.value;
	}, e.BARCODE_ROW_UNKNOWN = -1, e;
}(), ei = function() {
	function e() {}
	return e.initialize = function() {
		for (var t = 0; t < G.SYMBOL_TABLE.length; t++) for (var n = G.SYMBOL_TABLE[t], r = n & 1, i = 0; i < G.BARS_IN_MODULE; i++) {
			for (var a = 0; (n & 1) === r;) a += 1, n >>= 1;
			r = n & 1, e.RATIOS_TABLE[t] || (e.RATIOS_TABLE[t] = Array(G.BARS_IN_MODULE)), e.RATIOS_TABLE[t][G.BARS_IN_MODULE - i - 1] = Math.fround(a / G.MODULES_IN_CODEWORD);
		}
		this.bSymbolTableReady = !0;
	}, e.getDecodedValue = function(t) {
		var n = e.getDecodedCodewordValue(e.sampleBitCounts(t));
		return n === -1 ? e.getClosestDecodedValue(t) : n;
	}, e.sampleBitCounts = function(e) {
		for (var t = R.sum(e), n = new Int32Array(G.BARS_IN_MODULE), r = 0, i = 0, a = 0; a < G.MODULES_IN_CODEWORD; a++) {
			var o = t / (2 * G.MODULES_IN_CODEWORD) + a * t / G.MODULES_IN_CODEWORD;
			i + e[r] <= o && (i += e[r], r++), n[r]++;
		}
		return n;
	}, e.getDecodedCodewordValue = function(t) {
		var n = e.getBitValue(t);
		return G.getCodeword(n) === -1 ? -1 : n;
	}, e.getBitValue = function(e) {
		for (var t = 0, n = 0; n < e.length; n++) for (var r = 0; r < e[n]; r++) t = t << 1 | n % 2 == 0;
		return Math.trunc(t);
	}, e.getClosestDecodedValue = function(t) {
		var n = R.sum(t), r = Array(G.BARS_IN_MODULE);
		if (n > 1) for (var i = 0; i < r.length; i++) r[i] = Math.fround(t[i] / n);
		var a = We.MAX_VALUE, o = -1;
		this.bSymbolTableReady || e.initialize();
		for (var s = 0; s < e.RATIOS_TABLE.length; s++) {
			for (var c = 0, l = e.RATIOS_TABLE[s], u = 0; u < G.BARS_IN_MODULE; u++) {
				var d = Math.fround(l[u] - r[u]);
				if (c += Math.fround(d * d), c >= a) break;
			}
			c < a && (a = c, o = G.SYMBOL_TABLE[s]);
		}
		return o;
	}, e.bSymbolTableReady = !1, e.RATIOS_TABLE = Array(G.SYMBOL_TABLE.length).map(function(e) {
		return e = Array(G.BARS_IN_MODULE);
	}), e;
}(), ti = function() {
	function e() {
		this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1;
	}
	return e.prototype.getSegmentIndex = function() {
		return this.segmentIndex;
	}, e.prototype.setSegmentIndex = function(e) {
		this.segmentIndex = e;
	}, e.prototype.getFileId = function() {
		return this.fileId;
	}, e.prototype.setFileId = function(e) {
		this.fileId = e;
	}, e.prototype.getOptionalData = function() {
		return this.optionalData;
	}, e.prototype.setOptionalData = function(e) {
		this.optionalData = e;
	}, e.prototype.isLastSegment = function() {
		return this.lastSegment;
	}, e.prototype.setLastSegment = function(e) {
		this.lastSegment = e;
	}, e.prototype.getSegmentCount = function() {
		return this.segmentCount;
	}, e.prototype.setSegmentCount = function(e) {
		this.segmentCount = e;
	}, e.prototype.getSender = function() {
		return this.sender || null;
	}, e.prototype.setSender = function(e) {
		this.sender = e;
	}, e.prototype.getAddressee = function() {
		return this.addressee || null;
	}, e.prototype.setAddressee = function(e) {
		this.addressee = e;
	}, e.prototype.getFileName = function() {
		return this.fileName;
	}, e.prototype.setFileName = function(e) {
		this.fileName = e;
	}, e.prototype.getFileSize = function() {
		return this.fileSize;
	}, e.prototype.setFileSize = function(e) {
		this.fileSize = e;
	}, e.prototype.getChecksum = function() {
		return this.checksum;
	}, e.prototype.setChecksum = function(e) {
		this.checksum = e;
	}, e.prototype.getTimestamp = function() {
		return this.timestamp;
	}, e.prototype.setTimestamp = function(e) {
		this.timestamp = e;
	}, e;
}(), ni = function() {
	function e() {}
	return e.parseLong = function(e, t) {
		return t === void 0 && (t = void 0), parseInt(e, t);
	}, e;
}(), ri = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), ii = function(e) {
	ri(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.kind = "NullPointerException", t;
}(g), ai = function() {
	function e() {}
	return e.prototype.writeBytes = function(e) {
		this.writeBytesOffset(e, 0, e.length);
	}, e.prototype.writeBytesOffset = function(e, t, n) {
		if (e == null) throw new ii();
		if (t < 0 || t > e.length || n < 0 || t + n > e.length || t + n < 0) throw new D();
		if (n !== 0) for (var r = 0; r < n; r++) this.write(e[t + r]);
	}, e.prototype.flush = function() {}, e.prototype.close = function() {}, e;
}(), oi = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), si = function(e) {
	oi(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(g), ci = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), li = function(e) {
	ci(t, e);
	function t(t) {
		t === void 0 && (t = 32);
		var n = e.call(this) || this;
		if (n.count = 0, t < 0) throw new b("Negative initial size: " + t);
		return n.buf = new Uint8Array(t), n;
	}
	return t.prototype.ensureCapacity = function(e) {
		e - this.buf.length > 0 && this.grow(e);
	}, t.prototype.grow = function(e) {
		var t = this.buf.length << 1;
		if (t - e < 0 && (t = e), t < 0) {
			if (e < 0) throw new si();
			t = A.MAX_VALUE;
		}
		this.buf = k.copyOfUint8Array(this.buf, t);
	}, t.prototype.write = function(e) {
		this.ensureCapacity(this.count + 1), this.buf[this.count] = e, this.count += 1;
	}, t.prototype.writeBytesOffset = function(e, t, n) {
		if (t < 0 || t > e.length || n < 0 || t + n - e.length > 0) throw new D();
		this.ensureCapacity(this.count + n), T.arraycopy(e, t, this.buf, this.count, n), this.count += n;
	}, t.prototype.writeTo = function(e) {
		e.writeBytesOffset(this.buf, 0, this.count);
	}, t.prototype.reset = function() {
		this.count = 0;
	}, t.prototype.toByteArray = function() {
		return k.copyOfUint8Array(this.buf, this.count);
	}, t.prototype.size = function() {
		return this.count;
	}, t.prototype.toString = function(e) {
		return e ? typeof e == "string" ? this.toString_string(e) : this.toString_number(e) : this.toString_void();
	}, t.prototype.toString_void = function() {
		return new String(this.buf).toString();
	}, t.prototype.toString_string = function(e) {
		return new String(this.buf).toString();
	}, t.prototype.toString_number = function(e) {
		return new String(this.buf).toString();
	}, t.prototype.close = function() {}, t;
}(ai), K;
(function(e) {
	e[e.ALPHA = 0] = "ALPHA", e[e.LOWER = 1] = "LOWER", e[e.MIXED = 2] = "MIXED", e[e.PUNCT = 3] = "PUNCT", e[e.ALPHA_SHIFT = 4] = "ALPHA_SHIFT", e[e.PUNCT_SHIFT = 5] = "PUNCT_SHIFT";
})(K ||= {});
function ui() {
	if (typeof window < "u") return window.BigInt || null;
	if (typeof global < "u") return global.BigInt || null;
	if (typeof self < "u") return self.BigInt || null;
	throw Error("Can't search globals for BigInt!");
}
var di;
function fi(e) {
	if (di === void 0 && (di = ui()), di === null) throw Error("BigInt is not supported!");
	return di(e);
}
function pi() {
	var e = [];
	e[0] = fi(1);
	var t = fi(900);
	e[1] = t;
	for (var n = 2; n < 16; n++) e[n] = e[n - 1] * t;
	return e;
}
var mi = function() {
	function e() {}
	return e.decode = function(t, n) {
		var r = new F(""), i = oe.ISO8859_1;
		r.enableDecoding(i);
		for (var a = 1, o = t[a++], s = new ti(); a < t[0];) {
			switch (o) {
				case e.TEXT_COMPACTION_MODE_LATCH:
					a = e.textCompaction(t, a, r);
					break;
				case e.BYTE_COMPACTION_MODE_LATCH:
				case e.BYTE_COMPACTION_MODE_LATCH_6:
					a = e.byteCompaction(o, t, i, a, r);
					break;
				case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
					r.append(t[a++]);
					break;
				case e.NUMERIC_COMPACTION_MODE_LATCH:
					a = e.numericCompaction(t, a, r);
					break;
				case e.ECI_CHARSET:
					oe.getCharacterSetECIByValue(t[a++]);
					break;
				case e.ECI_GENERAL_PURPOSE:
					a += 2;
					break;
				case e.ECI_USER_DEFINED:
					a++;
					break;
				case e.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
					a = e.decodeMacroBlock(t, a, s);
					break;
				case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
				case e.MACRO_PDF417_TERMINATOR: throw new M();
				default: a--, a = e.textCompaction(t, a, r);
			}
			if (a < t.length) o = t[a++];
			else throw M.getFormatInstance();
		}
		if (r.length() === 0) throw M.getFormatInstance();
		var c = new Ae(null, r.toString(), null, n);
		return c.setOther(s), c;
	}, e.decodeMacroBlock = function(t, n, r) {
		if (n + e.NUMBER_OF_SEQUENCE_CODEWORDS > t[0]) throw M.getFormatInstance();
		for (var i = new Int32Array(e.NUMBER_OF_SEQUENCE_CODEWORDS), a = 0; a < e.NUMBER_OF_SEQUENCE_CODEWORDS; a++, n++) i[a] = t[n];
		r.setSegmentIndex(A.parseInt(e.decodeBase900toBase10(i, e.NUMBER_OF_SEQUENCE_CODEWORDS)));
		var o = new F();
		n = e.textCompaction(t, n, o), r.setFileId(o.toString());
		var s = -1;
		for (t[n] === e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (s = n + 1); n < t[0];) switch (t[n]) {
			case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
				switch (n++, t[n]) {
					case e.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
						var c = new F();
						n = e.textCompaction(t, n + 1, c), r.setFileName(c.toString());
						break;
					case e.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
						var l = new F();
						n = e.textCompaction(t, n + 1, l), r.setSender(l.toString());
						break;
					case e.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
						var u = new F();
						n = e.textCompaction(t, n + 1, u), r.setAddressee(u.toString());
						break;
					case e.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
						var d = new F();
						n = e.numericCompaction(t, n + 1, d), r.setSegmentCount(A.parseInt(d.toString()));
						break;
					case e.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
						var f = new F();
						n = e.numericCompaction(t, n + 1, f), r.setTimestamp(ni.parseLong(f.toString()));
						break;
					case e.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
						var p = new F();
						n = e.numericCompaction(t, n + 1, p), r.setChecksum(A.parseInt(p.toString()));
						break;
					case e.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
						var m = new F();
						n = e.numericCompaction(t, n + 1, m), r.setFileSize(ni.parseLong(m.toString()));
						break;
					default: throw M.getFormatInstance();
				}
				break;
			case e.MACRO_PDF417_TERMINATOR:
				n++, r.setLastSegment(!0);
				break;
			default: throw M.getFormatInstance();
		}
		if (s !== -1) {
			var h = n - s;
			r.isLastSegment() && h--, r.setOptionalData(k.copyOfRange(t, s, s + h));
		}
		return n;
	}, e.textCompaction = function(t, n, r) {
		for (var i = new Int32Array((t[0] - n) * 2), a = new Int32Array((t[0] - n) * 2), o = 0, s = !1; n < t[0] && !s;) {
			var c = t[n++];
			if (c < e.TEXT_COMPACTION_MODE_LATCH) i[o] = c / 30, i[o + 1] = c % 30, o += 2;
			else switch (c) {
				case e.TEXT_COMPACTION_MODE_LATCH:
					i[o++] = e.TEXT_COMPACTION_MODE_LATCH;
					break;
				case e.BYTE_COMPACTION_MODE_LATCH:
				case e.BYTE_COMPACTION_MODE_LATCH_6:
				case e.NUMERIC_COMPACTION_MODE_LATCH:
				case e.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
				case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
				case e.MACRO_PDF417_TERMINATOR:
					n--, s = !0;
					break;
				case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE: i[o] = e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, c = t[n++], a[o] = c, o++;
			}
		}
		return e.decodeTextCompaction(i, a, o, r), n;
	}, e.decodeTextCompaction = function(t, n, r, i) {
		for (var a = K.ALPHA, o = K.ALPHA, s = 0; s < r;) {
			var c = t[s], l = "";
			switch (a) {
				case K.ALPHA:
					if (c < 26) l = String.fromCharCode(65 + c);
					else switch (c) {
						case 26:
							l = " ";
							break;
						case e.LL:
							a = K.LOWER;
							break;
						case e.ML:
							a = K.MIXED;
							break;
						case e.PS:
							o = a, a = K.PUNCT_SHIFT;
							break;
						case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
							i.append(n[s]);
							break;
						case e.TEXT_COMPACTION_MODE_LATCH: a = K.ALPHA;
					}
					break;
				case K.LOWER:
					if (c < 26) l = String.fromCharCode(97 + c);
					else switch (c) {
						case 26:
							l = " ";
							break;
						case e.AS:
							o = a, a = K.ALPHA_SHIFT;
							break;
						case e.ML:
							a = K.MIXED;
							break;
						case e.PS:
							o = a, a = K.PUNCT_SHIFT;
							break;
						case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
							i.append(n[s]);
							break;
						case e.TEXT_COMPACTION_MODE_LATCH: a = K.ALPHA;
					}
					break;
				case K.MIXED:
					if (c < e.PL) l = e.MIXED_CHARS[c];
					else switch (c) {
						case e.PL:
							a = K.PUNCT;
							break;
						case 26:
							l = " ";
							break;
						case e.LL:
							a = K.LOWER;
							break;
						case e.AL:
							a = K.ALPHA;
							break;
						case e.PS:
							o = a, a = K.PUNCT_SHIFT;
							break;
						case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
							i.append(n[s]);
							break;
						case e.TEXT_COMPACTION_MODE_LATCH: a = K.ALPHA;
					}
					break;
				case K.PUNCT:
					if (c < e.PAL) l = e.PUNCT_CHARS[c];
					else switch (c) {
						case e.PAL:
							a = K.ALPHA;
							break;
						case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
							i.append(n[s]);
							break;
						case e.TEXT_COMPACTION_MODE_LATCH: a = K.ALPHA;
					}
					break;
				case K.ALPHA_SHIFT:
					if (a = o, c < 26) l = String.fromCharCode(65 + c);
					else switch (c) {
						case 26:
							l = " ";
							break;
						case e.TEXT_COMPACTION_MODE_LATCH: a = K.ALPHA;
					}
					break;
				case K.PUNCT_SHIFT: if (a = o, c < e.PAL) l = e.PUNCT_CHARS[c];
				else switch (c) {
					case e.PAL:
						a = K.ALPHA;
						break;
					case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
						i.append(n[s]);
						break;
					case e.TEXT_COMPACTION_MODE_LATCH: a = K.ALPHA;
				}
			}
			l !== "" && i.append(l), s++;
		}
	}, e.byteCompaction = function(t, n, r, i, a) {
		var o = new li(), s = 0, c = 0, l = !1;
		switch (t) {
			case e.BYTE_COMPACTION_MODE_LATCH:
				for (var u = /* @__PURE__ */ new Int32Array(6), d = n[i++]; i < n[0] && !l;) switch (u[s++] = d, c = 900 * c + d, d = n[i++], d) {
					case e.TEXT_COMPACTION_MODE_LATCH:
					case e.BYTE_COMPACTION_MODE_LATCH:
					case e.NUMERIC_COMPACTION_MODE_LATCH:
					case e.BYTE_COMPACTION_MODE_LATCH_6:
					case e.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
					case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
					case e.MACRO_PDF417_TERMINATOR:
						i--, l = !0;
						break;
					default: if (s % 5 == 0 && s > 0) {
						for (var f = 0; f < 6; ++f) o.write(Number(fi(c) >> fi(8 * (5 - f))));
						c = 0, s = 0;
					}
				}
				i === n[0] && d < e.TEXT_COMPACTION_MODE_LATCH && (u[s++] = d);
				for (var p = 0; p < s; p++) o.write(u[p]);
				break;
			case e.BYTE_COMPACTION_MODE_LATCH_6: for (; i < n[0] && !l;) {
				var m = n[i++];
				if (m < e.TEXT_COMPACTION_MODE_LATCH) s++, c = 900 * c + m;
				else switch (m) {
					case e.TEXT_COMPACTION_MODE_LATCH:
					case e.BYTE_COMPACTION_MODE_LATCH:
					case e.NUMERIC_COMPACTION_MODE_LATCH:
					case e.BYTE_COMPACTION_MODE_LATCH_6:
					case e.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
					case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
					case e.MACRO_PDF417_TERMINATOR: i--, l = !0;
				}
				if (s % 5 == 0 && s > 0) {
					for (var f = 0; f < 6; ++f) o.write(Number(fi(c) >> fi(8 * (5 - f))));
					c = 0, s = 0;
				}
			}
		}
		return a.append(le.decode(o.toByteArray(), r)), i;
	}, e.numericCompaction = function(t, n, r) {
		for (var i = 0, a = !1, o = new Int32Array(e.MAX_NUMERIC_CODEWORDS); n < t[0] && !a;) {
			var s = t[n++];
			if (n === t[0] && (a = !0), s < e.TEXT_COMPACTION_MODE_LATCH) o[i] = s, i++;
			else switch (s) {
				case e.TEXT_COMPACTION_MODE_LATCH:
				case e.BYTE_COMPACTION_MODE_LATCH:
				case e.BYTE_COMPACTION_MODE_LATCH_6:
				case e.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
				case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
				case e.MACRO_PDF417_TERMINATOR: n--, a = !0;
			}
			(i % e.MAX_NUMERIC_CODEWORDS === 0 || s === e.NUMERIC_COMPACTION_MODE_LATCH || a) && i > 0 && (r.append(e.decodeBase900toBase10(o, i)), i = 0);
		}
		return n;
	}, e.decodeBase900toBase10 = function(t, n) {
		for (var r = fi(0), i = 0; i < n; i++) r += e.EXP900[n - i - 1] * fi(t[i]);
		var a = r.toString();
		if (a.charAt(0) !== "1") throw new M();
		return a.substring(1);
	}, e.TEXT_COMPACTION_MODE_LATCH = 900, e.BYTE_COMPACTION_MODE_LATCH = 901, e.NUMERIC_COMPACTION_MODE_LATCH = 902, e.BYTE_COMPACTION_MODE_LATCH_6 = 924, e.ECI_USER_DEFINED = 925, e.ECI_GENERAL_PURPOSE = 926, e.ECI_CHARSET = 927, e.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, e.MACRO_PDF417_TERMINATOR = 922, e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, e.MAX_NUMERIC_CODEWORDS = 15, e.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0, e.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, e.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, e.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3, e.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, e.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, e.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6, e.PL = 25, e.LL = 27, e.AS = 27, e.ML = 28, e.AL = 28, e.PS = 29, e.PAL = 29, e.PUNCT_CHARS = ";<>@[\\]_`~!\r	,:\n-.$/\"|*()?{}'", e.MIXED_CHARS = "0123456789&\r	,:#-.$/+%*=^", e.EXP900 = ui() ? pi() : [], e.NUMBER_OF_SEQUENCE_CODEWORDS = 2, e;
}(), hi = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, gi = function() {
	function e() {}
	return e.decode = function(t, n, r, i, a, o, s) {
		for (var c = new Br(t, n, r, i, a), l = null, u = null, d, f = !0;; f = !1) {
			if (n != null && (l = e.getRowIndicatorColumn(t, c, n, !0, o, s)), i != null && (u = e.getRowIndicatorColumn(t, c, i, !1, o, s)), d = e.merge(l, u), d == null) throw I.getNotFoundInstance();
			var p = d.getBoundingBox();
			if (f && p != null && (p.getMinY() < c.getMinY() || p.getMaxY() > c.getMaxY())) c = p;
			else break;
		}
		d.setBoundingBox(c);
		var m = d.getBarcodeColumnCount() + 1;
		d.setDetectionResultColumn(0, l), d.setDetectionResultColumn(m, u);
		for (var h = l != null, g = 1; g <= m; g++) {
			var _ = h ? g : m - g;
			if (d.getDetectionResultColumn(_) === void 0) {
				var v = void 0;
				v = _ === 0 || _ === m ? new Xr(c, _ === 0) : new Wr(c), d.setDetectionResultColumn(_, v);
				for (var y = -1, b = y, x = c.getMinY(); x <= c.getMaxY(); x++) {
					if (y = e.getStartColumn(d, _, x, h), y < 0 || y > c.getMaxX()) {
						if (b === -1) continue;
						y = b;
					}
					var S = e.detectCodeword(t, c.getMinX(), c.getMaxX(), h, y, x, o, s);
					S != null && (v.setCodeword(x, S), b = y, o = Math.min(o, S.getWidth()), s = Math.max(s, S.getWidth()));
				}
			}
		}
		return e.createDecoderResult(d);
	}, e.merge = function(t, n) {
		if (t == null && n == null) return null;
		var r = e.getBarcodeMetadata(t, n);
		return r == null ? null : new Qr(r, Br.merge(e.adjustBoundingBox(t), e.adjustBoundingBox(n)));
	}, e.adjustBoundingBox = function(t) {
		var n, r;
		if (t == null) return null;
		var i = t.getRowHeights();
		if (i == null) return null;
		var a = e.getMax(i), o = 0;
		try {
			for (var s = hi(i), c = s.next(); !c.done; c = s.next()) {
				var l = c.value;
				if (o += a - l, l > 0) break;
			}
		} catch (e) {
			n = { error: e };
		} finally {
			try {
				c && !c.done && (r = s.return) && r.call(s);
			} finally {
				if (n) throw n.error;
			}
		}
		for (var u = t.getCodewords(), d = 0; o > 0 && u[d] == null; d++) o--;
		for (var f = 0, d = i.length - 1; d >= 0 && (f += a - i[d], !(i[d] > 0)); d--);
		for (var d = u.length - 1; f > 0 && u[d] == null; d--) f--;
		return t.getBoundingBox().addMissingRows(o, f, t.isLeft());
	}, e.getMax = function(e) {
		var t, n, r = -1;
		try {
			for (var i = hi(e), a = i.next(); !a.done; a = i.next()) {
				var o = a.value;
				r = Math.max(r, o);
			}
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				a && !a.done && (n = i.return) && n.call(i);
			} finally {
				if (t) throw t.error;
			}
		}
		return r;
	}, e.getBarcodeMetadata = function(e, t) {
		var n;
		if (e == null || (n = e.getBarcodeMetadata()) == null) return t == null ? null : t.getBarcodeMetadata();
		var r;
		return t == null || (r = t.getBarcodeMetadata()) == null ? n : n.getColumnCount() !== r.getColumnCount() && n.getErrorCorrectionLevel() !== r.getErrorCorrectionLevel() && n.getRowCount() !== r.getRowCount() ? null : n;
	}, e.getRowIndicatorColumn = function(t, n, r, i, a, o) {
		for (var s = new Xr(n, i), c = 0; c < 2; c++) for (var l = c === 0 ? 1 : -1, u = Math.trunc(Math.trunc(r.getX())), d = Math.trunc(Math.trunc(r.getY())); d <= n.getMaxY() && d >= n.getMinY(); d += l) {
			var f = e.detectCodeword(t, 0, t.getWidth(), i, u, d, a, o);
			f != null && (s.setCodeword(d, f), u = i ? f.getStartX() : f.getEndX());
		}
		return s;
	}, e.adjustCodewordCount = function(t, n) {
		var r = n[0][1], i = r.getValue(), a = t.getBarcodeColumnCount() * t.getBarcodeRowCount() - e.getNumberOfECCodeWords(t.getBarcodeECLevel());
		if (i.length === 0) {
			if (a < 1 || a > G.MAX_CODEWORDS_IN_BARCODE) throw I.getNotFoundInstance();
			r.setValue(a);
		} else i[0] !== a && r.setValue(a);
	}, e.createDecoderResult = function(t) {
		var n = e.createBarcodeMatrix(t);
		e.adjustCodewordCount(t, n);
		for (var r = [], i = new Int32Array(t.getBarcodeRowCount() * t.getBarcodeColumnCount()), a = [], o = [], s = 0; s < t.getBarcodeRowCount(); s++) for (var c = 0; c < t.getBarcodeColumnCount(); c++) {
			var l = n[s][c + 1].getValue(), u = s * t.getBarcodeColumnCount() + c;
			l.length === 0 ? r.push(u) : l.length === 1 ? i[u] = l[0] : (o.push(u), a.push(l));
		}
		for (var d = Array(a.length), f = 0; f < d.length; f++) d[f] = a[f];
		return e.createDecoderResultFromAmbiguousValues(t.getBarcodeECLevel(), i, G.toIntArray(r), G.toIntArray(o), d);
	}, e.createDecoderResultFromAmbiguousValues = function(t, n, r, i, a) {
		for (var o = new Int32Array(i.length), s = 100; s-- > 0;) {
			for (var c = 0; c < o.length; c++) n[i[c]] = a[c][o[c]];
			try {
				return e.decodeCodewords(n, t, r);
			} catch (e) {
				if (!(e instanceof C)) throw e;
			}
			if (o.length === 0) throw C.getChecksumInstance();
			for (var c = 0; c < o.length; c++) if (o[c] < a[c].length - 1) {
				o[c]++;
				break;
			} else if (o[c] = 0, c === o.length - 1) throw C.getChecksumInstance();
		}
		throw C.getChecksumInstance();
	}, e.createBarcodeMatrix = function(e) {
		for (var t, n, r, i, a = Array.from({ length: e.getBarcodeRowCount() }, function() {
			return Array(e.getBarcodeColumnCount() + 2);
		}), o = 0; o < a.length; o++) for (var s = 0; s < a[o].length; s++) a[o][s] = new qr();
		var c = 0;
		try {
			for (var l = hi(e.getDetectionResultColumns()), u = l.next(); !u.done; u = l.next()) {
				var d = u.value;
				if (d != null) try {
					for (var f = (r = void 0, hi(d.getCodewords())), p = f.next(); !p.done; p = f.next()) {
						var m = p.value;
						if (m != null) {
							var h = m.getRowNumber();
							if (h >= 0) {
								if (h >= a.length) continue;
								a[h][c].setValue(m.getValue());
							}
						}
					}
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						p && !p.done && (i = f.return) && i.call(f);
					} finally {
						if (r) throw r.error;
					}
				}
				c++;
			}
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				u && !u.done && (n = l.return) && n.call(l);
			} finally {
				if (t) throw t.error;
			}
		}
		return a;
	}, e.isValidBarcodeColumn = function(e, t) {
		return t >= 0 && t <= e.getBarcodeColumnCount() + 1;
	}, e.getStartColumn = function(t, n, r, i) {
		var a, o, s = i ? 1 : -1, c = null;
		if (e.isValidBarcodeColumn(t, n - s) && (c = t.getDetectionResultColumn(n - s).getCodeword(r)), c != null) return i ? c.getEndX() : c.getStartX();
		if (c = t.getDetectionResultColumn(n).getCodewordNearby(r), c != null) return i ? c.getStartX() : c.getEndX();
		if (e.isValidBarcodeColumn(t, n - s) && (c = t.getDetectionResultColumn(n - s).getCodewordNearby(r)), c != null) return i ? c.getEndX() : c.getStartX();
		for (var l = 0; e.isValidBarcodeColumn(t, n - s);) {
			n -= s;
			try {
				for (var u = (a = void 0, hi(t.getDetectionResultColumn(n).getCodewords())), d = u.next(); !d.done; d = u.next()) {
					var f = d.value;
					if (f != null) return (i ? f.getEndX() : f.getStartX()) + s * l * (f.getEndX() - f.getStartX());
				}
			} catch (e) {
				a = { error: e };
			} finally {
				try {
					d && !d.done && (o = u.return) && o.call(u);
				} finally {
					if (a) throw a.error;
				}
			}
			l++;
		}
		return i ? t.getBoundingBox().getMinX() : t.getBoundingBox().getMaxX();
	}, e.detectCodeword = function(t, n, r, i, a, o, s, c) {
		a = e.adjustCodewordStartColumn(t, n, r, i, a, o);
		var l = e.getModuleBitCount(t, n, r, i, a, o);
		if (l == null) return null;
		var u, d = R.sum(l);
		if (i) u = a + d;
		else {
			for (var f = 0; f < l.length / 2; f++) {
				var p = l[f];
				l[f] = l[l.length - 1 - f], l[l.length - 1 - f] = p;
			}
			u = a, a = u - d;
		}
		if (!e.checkCodewordSkew(d, s, c)) return null;
		var m = ei.getDecodedValue(l), h = G.getCodeword(m);
		return h === -1 ? null : new $r(a, u, e.getCodewordBucketNumber(m), h);
	}, e.getModuleBitCount = function(e, t, n, r, i, a) {
		for (var o = i, s = /* @__PURE__ */ new Int32Array(8), c = 0, l = r ? 1 : -1, u = r; (r ? o < n : o >= t) && c < s.length;) e.get(o, a) === u ? (s[c]++, o += l) : (c++, u = !u);
		return c === s.length || o === (r ? n : t) && c === s.length - 1 ? s : null;
	}, e.getNumberOfECCodeWords = function(e) {
		return 2 << e;
	}, e.adjustCodewordStartColumn = function(t, n, r, i, a, o) {
		for (var s = a, c = i ? -1 : 1, l = 0; l < 2; l++) {
			for (; (i ? s >= n : s < r) && i === t.get(s, o);) {
				if (Math.abs(a - s) > e.CODEWORD_SKEW_SIZE) return a;
				s += c;
			}
			c = -c, i = !i;
		}
		return s;
	}, e.checkCodewordSkew = function(t, n, r) {
		return n - e.CODEWORD_SKEW_SIZE <= t && t <= r + e.CODEWORD_SKEW_SIZE;
	}, e.decodeCodewords = function(t, n, r) {
		if (t.length === 0) throw M.getFormatInstance();
		var i = 1 << n + 1, a = e.correctErrors(t, r, i);
		e.verifyCodewordCount(t, i);
		var o = mi.decode(t, "" + n);
		return o.setErrorsCorrected(a), o.setErasures(r.length), o;
	}, e.correctErrors = function(t, n, r) {
		if (n != null && n.length > r / 2 + e.MAX_ERRORS || r < 0 || r > e.MAX_EC_CODEWORDS) throw C.getChecksumInstance();
		return e.errorCorrection.decode(t, r, n);
	}, e.verifyCodewordCount = function(e, t) {
		if (e.length < 4) throw M.getFormatInstance();
		var n = e[0];
		if (n > e.length) throw M.getFormatInstance();
		if (n === 0) {
			if (t < e.length) e[0] = e.length - t;
			else throw M.getFormatInstance();
		}
	}, e.getBitCountForCodeword = function(e) {
		for (var t = /* @__PURE__ */ new Int32Array(8), n = 0, r = t.length - 1; !((e & 1) !== n && (n = e & 1, r--, r < 0));) t[r]++, e >>= 1;
		return t;
	}, e.getCodewordBucketNumber = function(e) {
		return e instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(e) : this.getCodewordBucketNumber_number(e);
	}, e.getCodewordBucketNumber_number = function(t) {
		return e.getCodewordBucketNumber(e.getBitCountForCodeword(t));
	}, e.getCodewordBucketNumber_Int32Array = function(e) {
		return (e[0] - e[2] + e[4] - e[6] + 9) % 9;
	}, e.toString = function(e) {
		for (var t = new Hr(), n = 0; n < e.length; n++) {
			t.format("Row %2d: ", n);
			for (var r = 0; r < e[n].length; r++) {
				var i = e[n][r];
				i.getValue().length === 0 ? t.format("        ", null) : t.format("%4d(%2d)", i.getValue()[0], i.getConfidence(i.getValue()[0]));
			}
			t.format("%n");
		}
		return t.toString();
	}, e.CODEWORD_SKEW_SIZE = 2, e.MAX_ERRORS = 3, e.MAX_EC_CODEWORDS = 512, e.errorCorrection = new zr(), e;
}(), _i = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, vi = function() {
	function e() {}
	return e.prototype.decode = function(t, n) {
		n === void 0 && (n = null);
		var r = e.decode(t, n, !1);
		if (r == null || r.length === 0 || r[0] == null) throw I.getNotFoundInstance();
		return r[0];
	}, e.prototype.decodeMultiple = function(t, n) {
		n === void 0 && (n = null);
		try {
			return e.decode(t, n, !0);
		} catch (e) {
			throw e instanceof M || e instanceof C ? I.getNotFoundInstance() : e;
		}
	}, e.decode = function(t, n, r) {
		var i, a, o = [], s = Mr.detectMultiple(t, n, r);
		try {
			for (var c = _i(s.getPoints()), l = c.next(); !l.done; l = c.next()) {
				var u = l.value, d = gi.decode(s.getBits(), u[4], u[5], u[6], u[7], e.getMinCodewordWidth(u), e.getMaxCodewordWidth(u)), f = new Ee(d.getText(), d.getRawBytes(), void 0, u, L.PDF_417);
				f.putMetadata(ke.ERROR_CORRECTION_LEVEL, d.getECLevel());
				var p = d.getOther();
				p != null && f.putMetadata(ke.PDF417_EXTRA_METADATA, p), o.push(f);
			}
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				l && !l.done && (a = c.return) && a.call(c);
			} finally {
				if (i) throw i.error;
			}
		}
		return o.map(function(e) {
			return e;
		});
	}, e.getMaxWidth = function(e, t) {
		return e == null || t == null ? 0 : Math.trunc(Math.abs(e.getX() - t.getX()));
	}, e.getMinWidth = function(e, t) {
		return e == null || t == null ? A.MAX_VALUE : Math.trunc(Math.abs(e.getX() - t.getX()));
	}, e.getMaxCodewordWidth = function(t) {
		return Math.floor(Math.max(Math.max(e.getMaxWidth(t[0], t[4]), e.getMaxWidth(t[6], t[2]) * G.MODULES_IN_CODEWORD / G.MODULES_IN_STOP_PATTERN), Math.max(e.getMaxWidth(t[1], t[5]), e.getMaxWidth(t[7], t[3]) * G.MODULES_IN_CODEWORD / G.MODULES_IN_STOP_PATTERN)));
	}, e.getMinCodewordWidth = function(t) {
		return Math.floor(Math.min(Math.min(e.getMinWidth(t[0], t[4]), e.getMinWidth(t[6], t[2]) * G.MODULES_IN_CODEWORD / G.MODULES_IN_STOP_PATTERN), Math.min(e.getMinWidth(t[1], t[5]), e.getMinWidth(t[7], t[3]) * G.MODULES_IN_CODEWORD / G.MODULES_IN_STOP_PATTERN)));
	}, e.prototype.reset = function() {}, e;
}(), yi = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), bi = function(e) {
	yi(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.kind = "ReaderException", t;
}(g), xi = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Si = function() {
	function e() {}
	return e.prototype.decode = function(e, t) {
		return this.setHints(t), this.decodeInternal(e);
	}, e.prototype.decodeWithState = function(e) {
		return (this.readers === null || this.readers === void 0) && this.setHints(null), this.decodeInternal(e);
	}, e.prototype.setHints = function(e) {
		this.hints = e;
		var t = e != null && e.get(j.TRY_HARDER) !== void 0, n = e == null ? null : e.get(j.POSSIBLE_FORMATS), r = [];
		if (n != null) {
			var i = n.some(function(e) {
				return e === L.UPC_A || e === L.UPC_E || e === L.EAN_13 || e === L.EAN_8 || e === L.CODABAR || e === L.CODE_39 || e === L.CODE_93 || e === L.CODE_128 || e === L.ITF || e === L.RSS_14 || e === L.RSS_EXPANDED;
			});
			i && !t && r.push(new zn(e)), n.includes(L.QR_CODE) && r.push(new Or()), n.includes(L.DATA_MATRIX) && r.push(new Qn()), n.includes(L.AZTEC) && r.push(new nt()), n.includes(L.PDF_417) && r.push(new vi()), i && t && r.push(new zn(e));
		}
		r.length === 0 && (t || r.push(new zn(e)), r.push(new Or()), r.push(new Qn()), r.push(new nt()), r.push(new vi()), t && r.push(new zn(e))), this.readers = r;
	}, e.prototype.reset = function() {
		var e, t;
		if (this.readers !== null) try {
			for (var n = xi(this.readers), r = n.next(); !r.done; r = n.next()) r.value.reset();
		} catch (t) {
			e = { error: t };
		} finally {
			try {
				r && !r.done && (t = n.return) && t.call(n);
			} finally {
				if (e) throw e.error;
			}
		}
	}, e.prototype.decodeInternal = function(e) {
		var t, n;
		if (this.readers === null) throw new bi("No readers where selected, nothing can be read.");
		try {
			for (var r = xi(this.readers), i = r.next(); !i.done; i = r.next()) {
				var a = i.value;
				try {
					return a.decode(e, this.hints);
				} catch (e) {
					if (e instanceof bi) continue;
				}
			}
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				i && !i.done && (n = r.return) && n.call(r);
			} finally {
				if (t) throw t.error;
			}
		}
		throw new I("No MultiFormat Readers were able to detect the code.");
	}, e;
}(), Ci = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	Ci(t, e);
	function t(t, n) {
		t === void 0 && (t = null), n === void 0 && (n = 500);
		var r = this, i = new Si();
		return i.setHints(t), r = e.call(this, i, n) || this, r;
	}
	return t.prototype.decodeBitmap = function(e) {
		return this.reader.decodeWithState(e);
	}, t;
})(Te);
// node_modules/@zxing/library/esm/browser/BrowserPDF417Reader.js
var wi = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	wi(t, e);
	function t(t) {
		return t === void 0 && (t = 500), e.call(this, new vi(), t) || this;
	}
	return t;
})(Te);
// node_modules/@zxing/library/esm/browser/BrowserQRCodeReader.js
var Ti = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	Ti(t, e);
	function t(t) {
		return t === void 0 && (t = 500), e.call(this, new Or(), t) || this;
	}
	return t;
})(Te);
// node_modules/@zxing/library/esm/core/EncodeHintType.js
var Ei;
(function(e) {
	e[e.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", e[e.CHARACTER_SET = 1] = "CHARACTER_SET", e[e.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", e[e.DATA_MATRIX_COMPACT = 3] = "DATA_MATRIX_COMPACT", e[e.MIN_SIZE = 4] = "MIN_SIZE", e[e.MAX_SIZE = 5] = "MAX_SIZE", e[e.MARGIN = 6] = "MARGIN", e[e.PDF417_COMPACT = 7] = "PDF417_COMPACT", e[e.PDF417_COMPACTION = 8] = "PDF417_COMPACTION", e[e.PDF417_DIMENSIONS = 9] = "PDF417_DIMENSIONS", e[e.AZTEC_LAYERS = 10] = "AZTEC_LAYERS", e[e.QR_VERSION = 11] = "QR_VERSION", e[e.GS1_FORMAT = 12] = "GS1_FORMAT", e[e.FORCE_C40 = 13] = "FORCE_C40";
})(Ei ||= {});
var q = Ei, Di = function() {
	function e(e) {
		this.field = e, this.cachedGenerators = [], this.cachedGenerators.push(new Me(e, Int32Array.from([1])));
	}
	return e.prototype.buildGenerator = function(e) {
		var t = this.cachedGenerators;
		if (e >= t.length) for (var n = t[t.length - 1], r = this.field, i = t.length; i <= e; i++) {
			var a = n.multiply(new Me(r, Int32Array.from([1, r.exp(i - 1 + r.getGeneratorBase())])));
			t.push(a), n = a;
		}
		return t[e];
	}, e.prototype.encode = function(e, t) {
		if (t === 0) throw new b("No error correction bytes");
		var n = e.length - t;
		if (n <= 0) throw new b("No data bytes provided");
		var r = this.buildGenerator(t), i = new Int32Array(n);
		T.arraycopy(e, 0, i, 0, n);
		var a = new Me(this.field, i);
		a = a.multiplyByMonomial(t, 1);
		for (var o = a.divide(r)[1].getCoefficients(), s = t - o.length, c = 0; c < s; c++) e[n + c] = 0;
		T.arraycopy(o, 0, e, n + s, o.length);
	}, e;
}(), Oi = function() {
	function e() {}
	return e.applyMaskPenaltyRule1 = function(t) {
		return e.applyMaskPenaltyRule1Internal(t, !0) + e.applyMaskPenaltyRule1Internal(t, !1);
	}, e.applyMaskPenaltyRule2 = function(t) {
		for (var n = 0, r = t.getArray(), i = t.getWidth(), a = t.getHeight(), o = 0; o < a - 1; o++) for (var s = r[o], c = 0; c < i - 1; c++) {
			var l = s[c];
			l === s[c + 1] && l === r[o + 1][c] && l === r[o + 1][c + 1] && n++;
		}
		return e.N2 * n;
	}, e.applyMaskPenaltyRule3 = function(t) {
		for (var n = 0, r = t.getArray(), i = t.getWidth(), a = t.getHeight(), o = 0; o < a; o++) for (var s = 0; s < i; s++) {
			var c = r[o];
			s + 6 < i && c[s] === 1 && c[s + 1] === 0 && c[s + 2] === 1 && c[s + 3] === 1 && c[s + 4] === 1 && c[s + 5] === 0 && c[s + 6] === 1 && (e.isWhiteHorizontal(c, s - 4, s) || e.isWhiteHorizontal(c, s + 7, s + 11)) && n++, o + 6 < a && r[o][s] === 1 && r[o + 1][s] === 0 && r[o + 2][s] === 1 && r[o + 3][s] === 1 && r[o + 4][s] === 1 && r[o + 5][s] === 0 && r[o + 6][s] === 1 && (e.isWhiteVertical(r, s, o - 4, o) || e.isWhiteVertical(r, s, o + 7, o + 11)) && n++;
		}
		return n * e.N3;
	}, e.isWhiteHorizontal = function(e, t, n) {
		t = Math.max(t, 0), n = Math.min(n, e.length);
		for (var r = t; r < n; r++) if (e[r] === 1) return !1;
		return !0;
	}, e.isWhiteVertical = function(e, t, n, r) {
		n = Math.max(n, 0), r = Math.min(r, e.length);
		for (var i = n; i < r; i++) if (e[i][t] === 1) return !1;
		return !0;
	}, e.applyMaskPenaltyRule4 = function(t) {
		for (var n = 0, r = t.getArray(), i = t.getWidth(), a = t.getHeight(), o = 0; o < a; o++) for (var s = r[o], c = 0; c < i; c++) s[c] === 1 && n++;
		var l = t.getHeight() * t.getWidth();
		return Math.floor(Math.abs(n * 2 - l) * 10 / l) * e.N4;
	}, e.getDataMaskBit = function(e, t, n) {
		var r, i;
		switch (e) {
			case 0:
				r = n + t & 1;
				break;
			case 1:
				r = n & 1;
				break;
			case 2:
				r = t % 3;
				break;
			case 3:
				r = (n + t) % 3;
				break;
			case 4:
				r = Math.floor(n / 2) + Math.floor(t / 3) & 1;
				break;
			case 5:
				i = n * t, r = (i & 1) + i % 3;
				break;
			case 6:
				i = n * t, r = (i & 1) + i % 3 & 1;
				break;
			case 7:
				i = n * t, r = i % 3 + (n + t & 1) & 1;
				break;
			default: throw new b("Invalid mask pattern: " + e);
		}
		return r === 0;
	}, e.applyMaskPenaltyRule1Internal = function(t, n) {
		for (var r = 0, i = n ? t.getHeight() : t.getWidth(), a = n ? t.getWidth() : t.getHeight(), o = t.getArray(), s = 0; s < i; s++) {
			for (var c = 0, l = -1, u = 0; u < a; u++) {
				var d = n ? o[s][u] : o[u][s];
				d === l ? c++ : (c >= 5 && (r += e.N1 + (c - 5)), c = 1, l = d);
			}
			c >= 5 && (r += e.N1 + (c - 5));
		}
		return r;
	}, e.N1 = 3, e.N2 = 3, e.N3 = 40, e.N4 = 10, e;
}(), ki = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ai = function() {
	function e(e, t) {
		this.width = e, this.height = t;
		for (var n = Array(t), r = 0; r !== t; r++) n[r] = new Uint8Array(e);
		this.bytes = n;
	}
	return e.prototype.getHeight = function() {
		return this.height;
	}, e.prototype.getWidth = function() {
		return this.width;
	}, e.prototype.get = function(e, t) {
		return this.bytes[t][e];
	}, e.prototype.getArray = function() {
		return this.bytes;
	}, e.prototype.setNumber = function(e, t, n) {
		this.bytes[t][e] = n;
	}, e.prototype.setBoolean = function(e, t, n) {
		this.bytes[t][e] = +!!n;
	}, e.prototype.clear = function(e) {
		var t, n;
		try {
			for (var r = ki(this.bytes), i = r.next(); !i.done; i = r.next()) {
				var a = i.value;
				k.fill(a, e);
			}
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				i && !i.done && (n = r.return) && n.call(r);
			} finally {
				if (t) throw t.error;
			}
		}
	}, e.prototype.equals = function(t) {
		if (!(t instanceof e)) return !1;
		var n = t;
		if (this.width !== n.width || this.height !== n.height) return !1;
		for (var r = 0, i = this.height; r < i; ++r) for (var a = this.bytes[r], o = n.bytes[r], s = 0, c = this.width; s < c; ++s) if (a[s] !== o[s]) return !1;
		return !0;
	}, e.prototype.toString = function() {
		for (var e = new F(), t = 0, n = this.height; t < n; ++t) {
			for (var r = this.bytes[t], i = 0, a = this.width; i < a; ++i) switch (r[i]) {
				case 0:
					e.append(" 0");
					break;
				case 1:
					e.append(" 1");
					break;
				default: e.append("  ");
			}
			e.append("\n");
		}
		return e.toString();
	}, e;
}(), ji = function() {
	function e() {
		this.maskPattern = -1;
	}
	return e.prototype.getMode = function() {
		return this.mode;
	}, e.prototype.getECLevel = function() {
		return this.ecLevel;
	}, e.prototype.getVersion = function() {
		return this.version;
	}, e.prototype.getMaskPattern = function() {
		return this.maskPattern;
	}, e.prototype.getMatrix = function() {
		return this.matrix;
	}, e.prototype.toString = function() {
		var e = new F();
		return e.append("<<\n"), e.append(" mode: "), e.append(this.mode ? this.mode.toString() : "null"), e.append("\n ecLevel: "), e.append(this.ecLevel ? this.ecLevel.toString() : "null"), e.append("\n version: "), e.append(this.version ? this.version.toString() : "null"), e.append("\n maskPattern: "), e.append(this.maskPattern.toString()), this.matrix ? (e.append("\n matrix:\n"), e.append(this.matrix.toString())) : e.append("\n matrix: null\n"), e.append(">>\n"), e.toString();
	}, e.prototype.setMode = function(e) {
		this.mode = e;
	}, e.prototype.setECLevel = function(e) {
		this.ecLevel = e;
	}, e.prototype.setVersion = function(e) {
		this.version = e;
	}, e.prototype.setMaskPattern = function(e) {
		this.maskPattern = e;
	}, e.prototype.setMatrix = function(e) {
		this.matrix = e;
	}, e.isValidMaskPattern = function(t) {
		return t >= 0 && t < e.NUM_MASK_PATTERNS;
	}, e.NUM_MASK_PATTERNS = 8, e;
}(), Mi = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Ni = function(e) {
	Mi(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.kind = "WriterException", t;
}(g), Pi = function() {
	function e() {}
	return e.clearMatrix = function(e) {
		e.clear(255);
	}, e.buildMatrix = function(t, n, r, i, a) {
		e.clearMatrix(a), e.embedBasicPatterns(r, a), e.embedTypeInfo(n, i, a), e.maybeEmbedVersionInfo(r, a), e.embedDataBits(t, i, a);
	}, e.embedBasicPatterns = function(t, n) {
		e.embedPositionDetectionPatternsAndSeparators(n), e.embedDarkDotAtLeftBottomCorner(n), e.maybeEmbedPositionAdjustmentPatterns(t, n), e.embedTimingPatterns(n);
	}, e.embedTypeInfo = function(t, n, r) {
		var i = new ne();
		e.makeTypeInfoBits(t, n, i);
		for (var a = 0, o = i.getSize(); a < o; ++a) {
			var s = i.get(i.getSize() - 1 - a), c = e.TYPE_INFO_COORDINATES[a], l = c[0], u = c[1];
			if (r.setBoolean(l, u, s), a < 8) {
				var d = r.getWidth() - a - 1, f = 8;
				r.setBoolean(d, f, s);
			} else {
				var d = 8, f = r.getHeight() - 7 + (a - 8);
				r.setBoolean(d, f, s);
			}
		}
	}, e.maybeEmbedVersionInfo = function(t, n) {
		if (!(t.getVersionNumber() < 7)) {
			var r = new ne();
			e.makeVersionInfoBits(t, r);
			for (var i = 17, a = 0; a < 6; ++a) for (var o = 0; o < 3; ++o) {
				var s = r.get(i);
				i--, n.setBoolean(a, n.getHeight() - 11 + o, s), n.setBoolean(n.getHeight() - 11 + o, a, s);
			}
		}
	}, e.embedDataBits = function(t, n, r) {
		for (var i = 0, a = -1, o = r.getWidth() - 1, s = r.getHeight() - 1; o > 0;) {
			for (o === 6 && --o; s >= 0 && s < r.getHeight();) {
				for (var c = 0; c < 2; ++c) {
					var l = o - c;
					if (e.isEmpty(r.get(l, s))) {
						var u = void 0;
						i < t.getSize() ? (u = t.get(i), ++i) : u = !1, n !== 255 && Oi.getDataMaskBit(n, l, s) && (u = !u), r.setBoolean(l, s, u);
					}
				}
				s += a;
			}
			a = -a, s += a, o -= 2;
		}
		if (i !== t.getSize()) throw new Ni("Not all bits consumed: " + i + "/" + t.getSize());
	}, e.findMSBSet = function(e) {
		return 32 - A.numberOfLeadingZeros(e);
	}, e.calculateBCHCode = function(t, n) {
		if (n === 0) throw new b("0 polynomial");
		var r = e.findMSBSet(n);
		for (t <<= r - 1; e.findMSBSet(t) >= r;) t ^= n << e.findMSBSet(t) - r;
		return t;
	}, e.makeTypeInfoBits = function(t, n, r) {
		if (!ji.isValidMaskPattern(n)) throw new Ni("Invalid mask pattern");
		var i = t.getBits() << 3 | n;
		r.appendBits(i, 5);
		var a = e.calculateBCHCode(i, e.TYPE_INFO_POLY);
		r.appendBits(a, 10);
		var o = new ne();
		if (o.appendBits(e.TYPE_INFO_MASK_PATTERN, 15), r.xor(o), r.getSize() !== 15) throw new Ni("should not happen but we got: " + r.getSize());
	}, e.makeVersionInfoBits = function(t, n) {
		n.appendBits(t.getVersionNumber(), 6);
		var r = e.calculateBCHCode(t.getVersionNumber(), e.VERSION_INFO_POLY);
		if (n.appendBits(r, 12), n.getSize() !== 18) throw new Ni("should not happen but we got: " + n.getSize());
	}, e.isEmpty = function(e) {
		return e === 255;
	}, e.embedTimingPatterns = function(t) {
		for (var n = 8; n < t.getWidth() - 8; ++n) {
			var r = (n + 1) % 2;
			e.isEmpty(t.get(n, 6)) && t.setNumber(n, 6, r), e.isEmpty(t.get(6, n)) && t.setNumber(6, n, r);
		}
	}, e.embedDarkDotAtLeftBottomCorner = function(e) {
		if (e.get(8, e.getHeight() - 8) === 0) throw new Ni();
		e.setNumber(8, e.getHeight() - 8, 1);
	}, e.embedHorizontalSeparationPattern = function(t, n, r) {
		for (var i = 0; i < 8; ++i) {
			if (!e.isEmpty(r.get(t + i, n))) throw new Ni();
			r.setNumber(t + i, n, 0);
		}
	}, e.embedVerticalSeparationPattern = function(t, n, r) {
		for (var i = 0; i < 7; ++i) {
			if (!e.isEmpty(r.get(t, n + i))) throw new Ni();
			r.setNumber(t, n + i, 0);
		}
	}, e.embedPositionAdjustmentPattern = function(t, n, r) {
		for (var i = 0; i < 5; ++i) for (var a = e.POSITION_ADJUSTMENT_PATTERN[i], o = 0; o < 5; ++o) r.setNumber(t + o, n + i, a[o]);
	}, e.embedPositionDetectionPattern = function(t, n, r) {
		for (var i = 0; i < 7; ++i) for (var a = e.POSITION_DETECTION_PATTERN[i], o = 0; o < 7; ++o) r.setNumber(t + o, n + i, a[o]);
	}, e.embedPositionDetectionPatternsAndSeparators = function(t) {
		var n = e.POSITION_DETECTION_PATTERN[0].length;
		e.embedPositionDetectionPattern(0, 0, t), e.embedPositionDetectionPattern(t.getWidth() - n, 0, t), e.embedPositionDetectionPattern(0, t.getWidth() - n, t);
		var r = 8;
		e.embedHorizontalSeparationPattern(0, r - 1, t), e.embedHorizontalSeparationPattern(t.getWidth() - r, r - 1, t), e.embedHorizontalSeparationPattern(0, t.getWidth() - r, t);
		var i = 7;
		e.embedVerticalSeparationPattern(i, 0, t), e.embedVerticalSeparationPattern(t.getHeight() - i - 1, 0, t), e.embedVerticalSeparationPattern(i, t.getHeight() - i, t);
	}, e.maybeEmbedPositionAdjustmentPatterns = function(t, n) {
		if (!(t.getVersionNumber() < 2)) for (var r = t.getVersionNumber() - 1, i = e.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[r], a = 0, o = i.length; a !== o; a++) {
			var s = i[a];
			if (s >= 0) for (var c = 0; c !== o; c++) {
				var l = i[c];
				l >= 0 && e.isEmpty(n.get(l, s)) && e.embedPositionAdjustmentPattern(l - 2, s - 2, n);
			}
		}
	}, e.POSITION_DETECTION_PATTERN = Array.from([
		Int32Array.from([
			1,
			1,
			1,
			1,
			1,
			1,
			1
		]),
		Int32Array.from([
			1,
			0,
			0,
			0,
			0,
			0,
			1
		]),
		Int32Array.from([
			1,
			0,
			1,
			1,
			1,
			0,
			1
		]),
		Int32Array.from([
			1,
			0,
			1,
			1,
			1,
			0,
			1
		]),
		Int32Array.from([
			1,
			0,
			1,
			1,
			1,
			0,
			1
		]),
		Int32Array.from([
			1,
			0,
			0,
			0,
			0,
			0,
			1
		]),
		Int32Array.from([
			1,
			1,
			1,
			1,
			1,
			1,
			1
		])
	]), e.POSITION_ADJUSTMENT_PATTERN = Array.from([
		Int32Array.from([
			1,
			1,
			1,
			1,
			1
		]),
		Int32Array.from([
			1,
			0,
			0,
			0,
			1
		]),
		Int32Array.from([
			1,
			0,
			1,
			0,
			1
		]),
		Int32Array.from([
			1,
			0,
			0,
			0,
			1
		]),
		Int32Array.from([
			1,
			1,
			1,
			1,
			1
		])
	]), e.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
		Int32Array.from([
			-1,
			-1,
			-1,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			18,
			-1,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			22,
			-1,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			26,
			-1,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			30,
			-1,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			34,
			-1,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			22,
			38,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			24,
			42,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			26,
			46,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			28,
			50,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			30,
			54,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			32,
			58,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			34,
			62,
			-1,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			26,
			46,
			66,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			26,
			48,
			70,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			26,
			50,
			74,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			30,
			54,
			78,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			30,
			56,
			82,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			30,
			58,
			86,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			34,
			62,
			90,
			-1,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			28,
			50,
			72,
			94,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			26,
			50,
			74,
			98,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			30,
			54,
			78,
			102,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			28,
			54,
			80,
			106,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			32,
			58,
			84,
			110,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			30,
			58,
			86,
			114,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			34,
			62,
			90,
			118,
			-1,
			-1
		]),
		Int32Array.from([
			6,
			26,
			50,
			74,
			98,
			122,
			-1
		]),
		Int32Array.from([
			6,
			30,
			54,
			78,
			102,
			126,
			-1
		]),
		Int32Array.from([
			6,
			26,
			52,
			78,
			104,
			130,
			-1
		]),
		Int32Array.from([
			6,
			30,
			56,
			82,
			108,
			134,
			-1
		]),
		Int32Array.from([
			6,
			34,
			60,
			86,
			112,
			138,
			-1
		]),
		Int32Array.from([
			6,
			30,
			58,
			86,
			114,
			142,
			-1
		]),
		Int32Array.from([
			6,
			34,
			62,
			90,
			118,
			146,
			-1
		]),
		Int32Array.from([
			6,
			30,
			54,
			78,
			102,
			126,
			150
		]),
		Int32Array.from([
			6,
			24,
			50,
			76,
			102,
			128,
			154
		]),
		Int32Array.from([
			6,
			28,
			54,
			80,
			106,
			132,
			158
		]),
		Int32Array.from([
			6,
			32,
			58,
			84,
			110,
			136,
			162
		]),
		Int32Array.from([
			6,
			26,
			54,
			82,
			110,
			138,
			166
		]),
		Int32Array.from([
			6,
			30,
			58,
			86,
			114,
			142,
			170
		])
	]), e.TYPE_INFO_COORDINATES = Array.from([
		Int32Array.from([8, 0]),
		Int32Array.from([8, 1]),
		Int32Array.from([8, 2]),
		Int32Array.from([8, 3]),
		Int32Array.from([8, 4]),
		Int32Array.from([8, 5]),
		Int32Array.from([8, 7]),
		Int32Array.from([8, 8]),
		Int32Array.from([7, 8]),
		Int32Array.from([5, 8]),
		Int32Array.from([4, 8]),
		Int32Array.from([3, 8]),
		Int32Array.from([2, 8]),
		Int32Array.from([1, 8]),
		Int32Array.from([0, 8])
	]), e.VERSION_INFO_POLY = 7973, e.TYPE_INFO_POLY = 1335, e.TYPE_INFO_MASK_PATTERN = 21522, e;
}(), Fi = function() {
	function e(e, t) {
		this.dataBytes = e, this.errorCorrectionBytes = t;
	}
	return e.prototype.getDataBytes = function() {
		return this.dataBytes;
	}, e.prototype.getErrorCorrectionBytes = function() {
		return this.errorCorrectionBytes;
	}, e;
}(), Ii = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Li = function() {
	function e() {}
	return e.calculateMaskPenalty = function(e) {
		return Oi.applyMaskPenaltyRule1(e) + Oi.applyMaskPenaltyRule2(e) + Oi.applyMaskPenaltyRule3(e) + Oi.applyMaskPenaltyRule4(e);
	}, e.encode = function(t, n, r) {
		r === void 0 && (r = null);
		var i = e.DEFAULT_BYTE_MODE_ENCODING, a = r !== null && r.get(q.CHARACTER_SET) !== void 0;
		a && (i = r.get(q.CHARACTER_SET).toString());
		var o = this.chooseMode(t, i), s = new ne();
		if (o === pr.BYTE && (a || e.DEFAULT_BYTE_MODE_ENCODING !== i)) {
			var c = oe.getCharacterSetECIByName(i);
			c !== void 0 && this.appendECI(c, s);
		}
		this.appendModeInfo(o, s);
		var l = new ne();
		this.appendBytes(t, o, l, i);
		var u;
		if (r !== null && r.get(q.QR_VERSION) !== void 0) {
			var d = Number.parseInt(r.get(q.QR_VERSION).toString(), 10);
			u = or.getVersionForNumber(d);
			var f = this.calculateBitsNeeded(o, s, l, u);
			if (!this.willFit(f, u, n)) throw new Ni("Data too big for requested version");
		} else u = this.recommendVersion(n, o, s, l);
		var p = new ne();
		p.appendBitArray(s);
		var m = o === pr.BYTE ? l.getSizeInBytes() : t.length;
		this.appendLengthInfo(m, u, o, p), p.appendBitArray(l);
		var h = u.getECBlocksForLevel(n), g = u.getTotalCodewords() - h.getTotalECCodewords();
		this.terminateBits(g, p);
		var _ = this.interleaveWithECBytes(p, u.getTotalCodewords(), g, h.getNumBlocks()), v = new ji();
		v.setECLevel(n), v.setMode(o), v.setVersion(u);
		var y = u.getDimensionForVersion(), b = new Ai(y, y), x = this.chooseMaskPattern(_, n, u, b);
		return v.setMaskPattern(x), Pi.buildMatrix(_, n, u, x, b), v.setMatrix(b), v;
	}, e.recommendVersion = function(e, t, n, r) {
		var i = this.calculateBitsNeeded(t, n, r, or.getVersionForNumber(1)), a = this.chooseVersion(i, e), o = this.calculateBitsNeeded(t, n, r, a);
		return this.chooseVersion(o, e);
	}, e.calculateBitsNeeded = function(e, t, n, r) {
		return t.getSize() + e.getCharacterCountBits(r) + n.getSize();
	}, e.getAlphanumericCode = function(t) {
		return t < e.ALPHANUMERIC_TABLE.length ? e.ALPHANUMERIC_TABLE[t] : -1;
	}, e.chooseMode = function(t, n) {
		if (n === void 0 && (n = null), oe.SJIS.getName() === n && this.isOnlyDoubleByteKanji(t)) return pr.KANJI;
		for (var r = !1, i = !1, a = 0, o = t.length; a < o; ++a) {
			var s = t.charAt(a);
			if (e.isDigit(s)) r = !0;
			else if (this.getAlphanumericCode(s.charCodeAt(0)) !== -1) i = !0;
			else return pr.BYTE;
		}
		return i ? pr.ALPHANUMERIC : r ? pr.NUMERIC : pr.BYTE;
	}, e.isOnlyDoubleByteKanji = function(e) {
		var t;
		try {
			t = le.encode(e, oe.SJIS);
		} catch {
			return !1;
		}
		var n = t.length;
		if (n % 2 != 0) return !1;
		for (var r = 0; r < n; r += 2) {
			var i = t[r] & 255;
			if ((i < 129 || i > 159) && (i < 224 || i > 235)) return !1;
		}
		return !0;
	}, e.chooseMaskPattern = function(e, t, n, r) {
		for (var i = 2 ** 53 - 1, a = -1, o = 0; o < ji.NUM_MASK_PATTERNS; o++) {
			Pi.buildMatrix(e, t, n, o, r);
			var s = this.calculateMaskPenalty(r);
			s < i && (i = s, a = o);
		}
		return a;
	}, e.chooseVersion = function(t, n) {
		for (var r = 1; r <= 40; r++) {
			var i = or.getVersionForNumber(r);
			if (e.willFit(t, i, n)) return i;
		}
		throw new Ni("Data too big");
	}, e.willFit = function(e, t, n) {
		return t.getTotalCodewords() - t.getECBlocksForLevel(n).getTotalECCodewords() >= (e + 7) / 8;
	}, e.terminateBits = function(e, t) {
		var n = e * 8;
		if (t.getSize() > n) throw new Ni("data bits cannot fit in the QR Code" + t.getSize() + " > " + n);
		for (var r = 0; r < 4 && t.getSize() < n; ++r) t.appendBit(!1);
		var i = t.getSize() & 7;
		if (i > 0) for (var r = i; r < 8; r++) t.appendBit(!1);
		for (var a = e - t.getSizeInBytes(), r = 0; r < a; ++r) t.appendBits(r & 1 ? 17 : 236, 8);
		if (t.getSize() !== n) throw new Ni("Bits size does not equal capacity");
	}, e.getNumDataBytesAndNumECBytesForBlockID = function(e, t, n, r, i, a) {
		if (r >= n) throw new Ni("Block ID too large");
		var o = e % n, s = n - o, c = Math.floor(e / n), l = c + 1, u = Math.floor(t / n), d = u + 1, f = c - u, p = l - d;
		if (f !== p) throw new Ni("EC bytes mismatch");
		if (n !== s + o) throw new Ni("RS blocks mismatch");
		if (e !== (u + f) * s + (d + p) * o) throw new Ni("Total bytes mismatch");
		r < s ? (i[0] = u, a[0] = f) : (i[0] = d, a[0] = p);
	}, e.interleaveWithECBytes = function(t, n, r, i) {
		var a, o, s, c;
		if (t.getSizeInBytes() !== r) throw new Ni("Number of bits and data bytes does not match");
		for (var l = 0, u = 0, d = 0, f = [], p = 0; p < i; ++p) {
			var m = /* @__PURE__ */ new Int32Array(1), h = /* @__PURE__ */ new Int32Array(1);
			e.getNumDataBytesAndNumECBytesForBlockID(n, r, i, p, m, h);
			var g = m[0], _ = new Uint8Array(g);
			t.toBytes(8 * l, _, 0, g);
			var v = e.generateECBytes(_, h[0]);
			f.push(new Fi(_, v)), u = Math.max(u, g), d = Math.max(d, v.length), l += m[0];
		}
		if (r !== l) throw new Ni("Data bytes does not match offset");
		for (var y = new ne(), p = 0; p < u; ++p) try {
			for (var b = (a = void 0, Ii(f)), x = b.next(); !x.done; x = b.next()) {
				var S = x.value, _ = S.getDataBytes();
				p < _.length && y.appendBits(_[p], 8);
			}
		} catch (e) {
			a = { error: e };
		} finally {
			try {
				x && !x.done && (o = b.return) && o.call(b);
			} finally {
				if (a) throw a.error;
			}
		}
		for (var p = 0; p < d; ++p) try {
			for (var C = (s = void 0, Ii(f)), w = C.next(); !w.done; w = C.next()) {
				var S = w.value, v = S.getErrorCorrectionBytes();
				p < v.length && y.appendBits(v[p], 8);
			}
		} catch (e) {
			s = { error: e };
		} finally {
			try {
				w && !w.done && (c = C.return) && c.call(C);
			} finally {
				if (s) throw s.error;
			}
		}
		if (n !== y.getSizeInBytes()) throw new Ni("Interleaving error: " + n + " and " + y.getSizeInBytes() + " differ.");
		return y;
	}, e.generateECBytes = function(e, t) {
		for (var n = e.length, r = new Int32Array(n + t), i = 0; i < n; i++) r[i] = e[i] & 255;
		new Di(Ie.QR_CODE_FIELD_256).encode(r, t);
		for (var a = new Uint8Array(t), i = 0; i < t; i++) a[i] = r[n + i];
		return a;
	}, e.appendModeInfo = function(e, t) {
		t.appendBits(e.getBits(), 4);
	}, e.appendLengthInfo = function(e, t, n, r) {
		var i = n.getCharacterCountBits(t);
		if (e >= 1 << i) throw new Ni(e + " is bigger than " + ((1 << i) - 1));
		r.appendBits(e, i);
	}, e.appendBytes = function(t, n, r, i) {
		switch (n) {
			case pr.NUMERIC:
				e.appendNumericBytes(t, r);
				break;
			case pr.ALPHANUMERIC:
				e.appendAlphanumericBytes(t, r);
				break;
			case pr.BYTE:
				e.append8BitBytes(t, r, i);
				break;
			case pr.KANJI:
				e.appendKanjiBytes(t, r);
				break;
			default: throw new Ni("Invalid mode: " + n);
		}
	}, e.getDigit = function(e) {
		return e.charCodeAt(0) - 48;
	}, e.isDigit = function(t) {
		var n = e.getDigit(t);
		return n >= 0 && n <= 9;
	}, e.appendNumericBytes = function(t, n) {
		for (var r = t.length, i = 0; i < r;) {
			var a = e.getDigit(t.charAt(i));
			if (i + 2 < r) {
				var o = e.getDigit(t.charAt(i + 1)), s = e.getDigit(t.charAt(i + 2));
				n.appendBits(a * 100 + o * 10 + s, 10), i += 3;
			} else if (i + 1 < r) {
				var o = e.getDigit(t.charAt(i + 1));
				n.appendBits(a * 10 + o, 7), i += 2;
			} else n.appendBits(a, 4), i++;
		}
	}, e.appendAlphanumericBytes = function(t, n) {
		for (var r = t.length, i = 0; i < r;) {
			var a = e.getAlphanumericCode(t.charCodeAt(i));
			if (a === -1) throw new Ni();
			if (i + 1 < r) {
				var o = e.getAlphanumericCode(t.charCodeAt(i + 1));
				if (o === -1) throw new Ni();
				n.appendBits(a * 45 + o, 11), i += 2;
			} else n.appendBits(a, 6), i++;
		}
	}, e.append8BitBytes = function(e, t, n) {
		var r;
		try {
			r = le.encode(e, n);
		} catch (e) {
			throw new Ni(e);
		}
		for (var i = 0, a = r.length; i !== a; i++) {
			var o = r[i];
			t.appendBits(o, 8);
		}
	}, e.appendKanjiBytes = function(e, t) {
		var n;
		try {
			n = le.encode(e, oe.SJIS);
		} catch (e) {
			throw new Ni(e);
		}
		for (var r = n.length, i = 0; i < r; i += 2) {
			var a = n[i] & 255, o = n[i + 1] & 255, s = a << 8 | o, c = -1;
			if (s >= 33088 && s <= 40956 ? c = s - 33088 : s >= 57408 && s <= 60351 && (c = s - 49472), c === -1) throw new Ni("Invalid byte sequence");
			var l = (c >> 8) * 192 + (c & 255);
			t.appendBits(l, 13);
		}
	}, e.appendECI = function(e, t) {
		t.appendBits(pr.ECI.getBits(), 4), t.appendBits(e.getValue(), 8);
	}, e.ALPHANUMERIC_TABLE = Int32Array.from([
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		36,
		-1,
		-1,
		-1,
		37,
		38,
		-1,
		-1,
		-1,
		-1,
		39,
		40,
		-1,
		41,
		42,
		43,
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		44,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31,
		32,
		33,
		34,
		35,
		-1,
		-1,
		-1,
		-1,
		-1
	]), e.DEFAULT_BYTE_MODE_ENCODING = oe.UTF8.getName(), e;
}();
(function() {
	function e() {}
	return e.prototype.write = function(t, n, r, i) {
		if (i === void 0 && (i = null), t.length === 0) throw new b("Found empty contents");
		if (n < 0 || r < 0) throw new b("Requested dimensions are too small: " + n + "x" + r);
		var a = tr.L, o = e.QUIET_ZONE_SIZE;
		i !== null && (i.get(q.ERROR_CORRECTION) !== void 0 && (a = tr.fromString(i.get(q.ERROR_CORRECTION).toString())), i.get(q.MARGIN) !== void 0 && (o = Number.parseInt(i.get(q.MARGIN).toString(), 10)));
		var s = Li.encode(t, a, i);
		return this.renderResult(s, n, r, o);
	}, e.prototype.writeToDom = function(e, t, n, r, i) {
		i === void 0 && (i = null), typeof e == "string" && (e = document.querySelector(e));
		var a = this.write(t, n, r, i);
		e && e.appendChild(a);
	}, e.prototype.renderResult = function(e, t, n, r) {
		var i = e.getMatrix();
		if (i === null) throw new Be();
		for (var a = i.getWidth(), o = i.getHeight(), s = a + r * 2, c = o + r * 2, l = Math.max(t, s), u = Math.max(n, c), d = Math.min(Math.floor(l / s), Math.floor(u / c)), f = Math.floor((l - a * d) / 2), p = Math.floor((u - o * d) / 2), m = this.createSVGElement(l, u), h = 0, g = p; h < o; h++, g += d) for (var _ = 0, v = f; _ < a; _++, v += d) if (i.get(_, h) === 1) {
			var y = this.createSvgRectElement(v, g, d, d);
			m.appendChild(y);
		}
		return m;
	}, e.prototype.createSVGElement = function(t, n) {
		var r = document.createElementNS(e.SVG_NS, "svg");
		return r.setAttributeNS(null, "height", t.toString()), r.setAttributeNS(null, "width", n.toString()), r;
	}, e.prototype.createSvgRectElement = function(t, n, r, i) {
		var a = document.createElementNS(e.SVG_NS, "rect");
		return a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", n.toString()), a.setAttributeNS(null, "height", r.toString()), a.setAttributeNS(null, "width", i.toString()), a.setAttributeNS(null, "fill", "#000000"), a;
	}, e.QUIET_ZONE_SIZE = 4, e.SVG_NS = "http://www.w3.org/2000/svg", e;
})();
// node_modules/@zxing/library/esm/core/qrcode/QRCodeWriter.js
var Ri = function() {
	function e() {}
	return e.prototype.encode = function(t, n, r, i, a) {
		if (t.length === 0) throw new b("Found empty contents");
		if (n !== L.QR_CODE) throw new b("Can only encode QR_CODE, but got " + n);
		if (r < 0 || i < 0) throw new b("Requested dimensions are too small: " + r + "x" + i);
		var o = tr.L, s = e.QUIET_ZONE_SIZE;
		a !== null && (a.get(q.ERROR_CORRECTION) !== void 0 && (o = tr.fromString(a.get(q.ERROR_CORRECTION).toString())), a.get(q.MARGIN) !== void 0 && (s = Number.parseInt(a.get(q.MARGIN).toString(), 10)));
		var c = Li.encode(t, o, a);
		return e.renderResult(c, r, i, s);
	}, e.renderResult = function(e, t, n, r) {
		var i = e.getMatrix();
		if (i === null) throw new Be();
		for (var a = i.getWidth(), o = i.getHeight(), s = a + r * 2, c = o + r * 2, l = Math.max(t, s), u = Math.max(n, c), d = Math.min(Math.floor(l / s), Math.floor(u / c)), f = Math.floor((l - a * d) / 2), p = Math.floor((u - o * d) / 2), m = new ue(l, u), h = 0, g = p; h < o; h++, g += d) for (var _ = 0, v = f; _ < a; _++, v += d) i.get(_, h) === 1 && m.setRegion(v, g, d, d);
		return m;
	}, e.QUIET_ZONE_SIZE = 4, e;
}();
(function() {
	function e() {}
	return e.prototype.encode = function(e, t, n, r, i) {
		var a;
		switch (t) {
			case L.QR_CODE:
				a = new Ri();
				break;
			default: throw new b("No encoder available for format " + t);
		}
		return a.encode(e, t, n, r, i);
	}, e;
})();
// node_modules/@zxing/library/esm/core/PlanarYUVLuminanceSource.js
var zi = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	zi(t, e);
	function t(t, n, r, i, a, o, s, c) {
		var l = e.call(this, o, s) || this;
		if (l.yuvData = t, l.dataWidth = n, l.dataHeight = r, l.left = i, l.top = a, i + o > n || a + s > r) throw new b("Crop rectangle does not fit within image data.");
		return c && l.reverseHorizontal(o, s), l;
	}
	return t.prototype.getRow = function(e, t) {
		if (e < 0 || e >= this.getHeight()) throw new b("Requested row is outside the image: " + e);
		var n = this.getWidth();
		(t == null || t.length < n) && (t = new Uint8ClampedArray(n));
		var r = (e + this.top) * this.dataWidth + this.left;
		return T.arraycopy(this.yuvData, r, t, 0, n), t;
	}, t.prototype.getMatrix = function() {
		var e = this.getWidth(), t = this.getHeight();
		if (e === this.dataWidth && t === this.dataHeight) return this.yuvData;
		var n = e * t, r = new Uint8ClampedArray(n), i = this.top * this.dataWidth + this.left;
		if (e === this.dataWidth) return T.arraycopy(this.yuvData, i, r, 0, n), r;
		for (var a = 0; a < t; a++) {
			var o = a * e;
			T.arraycopy(this.yuvData, i, r, o, e), i += this.dataWidth;
		}
		return r;
	}, t.prototype.isCropSupported = function() {
		return !0;
	}, t.prototype.crop = function(e, n, r, i) {
		return new t(this.yuvData, this.dataWidth, this.dataHeight, this.left + e, this.top + n, r, i, !1);
	}, t.prototype.renderThumbnail = function() {
		for (var e = this.getWidth() / t.THUMBNAIL_SCALE_FACTOR, n = this.getHeight() / t.THUMBNAIL_SCALE_FACTOR, r = new Int32Array(e * n), i = this.yuvData, a = this.top * this.dataWidth + this.left, o = 0; o < n; o++) {
			for (var s = o * e, c = 0; c < e; c++) {
				var l = i[a + c * t.THUMBNAIL_SCALE_FACTOR] & 255;
				r[s + c] = 4278190080 | l * 65793;
			}
			a += this.dataWidth * t.THUMBNAIL_SCALE_FACTOR;
		}
		return r;
	}, t.prototype.getThumbnailWidth = function() {
		return this.getWidth() / t.THUMBNAIL_SCALE_FACTOR;
	}, t.prototype.getThumbnailHeight = function() {
		return this.getHeight() / t.THUMBNAIL_SCALE_FACTOR;
	}, t.prototype.reverseHorizontal = function(e, t) {
		for (var n = this.yuvData, r = 0, i = this.top * this.dataWidth + this.left; r < t; r++, i += this.dataWidth) for (var a = i + e / 2, o = i, s = i + e - 1; o < a; o++, s--) {
			var c = n[o];
			n[o] = n[s], n[s] = c;
		}
	}, t.prototype.invert = function() {
		return new ve(this);
	}, t.THUMBNAIL_SCALE_FACTOR = 2, t;
})(ge);
// node_modules/@zxing/library/esm/core/RGBLuminanceSource.js
var Bi = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	Bi(t, e);
	function t(t, n, r, i, a, o, s) {
		var c = e.call(this, n, r) || this;
		if (c.dataWidth = i, c.dataHeight = a, c.left = o, c.top = s, t.BYTES_PER_ELEMENT === 4) {
			for (var l = n * r, u = new Uint8ClampedArray(l), d = 0; d < l; d++) {
				var f = t[d], p = f >> 16 & 255, m = f >> 7 & 510, h = f & 255;
				u[d] = (p + m + h) / 4 & 255;
			}
			c.luminances = u;
		} else c.luminances = t;
		if (i === void 0 && (c.dataWidth = n), a === void 0 && (c.dataHeight = r), o === void 0 && (c.left = 0), s === void 0 && (c.top = 0), c.left + n > c.dataWidth || c.top + r > c.dataHeight) throw new b("Crop rectangle does not fit within image data.");
		return c;
	}
	return t.prototype.getRow = function(e, t) {
		if (e < 0 || e >= this.getHeight()) throw new b("Requested row is outside the image: " + e);
		var n = this.getWidth();
		(t == null || t.length < n) && (t = new Uint8ClampedArray(n));
		var r = (e + this.top) * this.dataWidth + this.left;
		return T.arraycopy(this.luminances, r, t, 0, n), t;
	}, t.prototype.getMatrix = function() {
		var e = this.getWidth(), t = this.getHeight();
		if (e === this.dataWidth && t === this.dataHeight) return this.luminances;
		var n = e * t, r = new Uint8ClampedArray(n), i = this.top * this.dataWidth + this.left;
		if (e === this.dataWidth) return T.arraycopy(this.luminances, i, r, 0, n), r;
		for (var a = 0; a < t; a++) {
			var o = a * e;
			T.arraycopy(this.luminances, i, r, o, e), i += this.dataWidth;
		}
		return r;
	}, t.prototype.isCropSupported = function() {
		return !0;
	}, t.prototype.crop = function(e, n, r, i) {
		return new t(this.luminances, r, i, this.dataWidth, this.dataHeight, this.left + e, this.top + n);
	}, t.prototype.invert = function() {
		return new ve(this);
	}, t;
})(ge);
// node_modules/@zxing/library/esm/core/util/Charset.js
var Vi = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Hi = function(e) {
	Vi(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.forName = function(e) {
		return this.getCharacterSetECIByName(e);
	}, t;
}(oe), Ui = function() {
	function e() {}
	return e.ISO_8859_1 = oe.ISO8859_1, e;
}(), Wi = function() {
	function e(e, t, n) {
		this.codewords = e, this.numcols = t, this.numrows = n, this.bits = new Uint8Array(t * n), k.fill(this.bits, 2);
	}
	return e.prototype.getNumrows = function() {
		return this.numrows;
	}, e.prototype.getNumcols = function() {
		return this.numcols;
	}, e.prototype.getBits = function() {
		return this.bits;
	}, e.prototype.getBit = function(e, t) {
		return this.bits[t * this.numcols + e] === 1;
	}, e.prototype.setBit = function(e, t, n) {
		this.bits[t * this.numcols + e] = +!!n;
	}, e.prototype.noBit = function(e, t) {
		return this.bits[t * this.numcols + e] === 2;
	}, e.prototype.place = function() {
		var e = 0, t = 4, n = 0;
		do {
			t === this.numrows && n === 0 && this.corner1(e++), t === this.numrows - 2 && n === 0 && this.numcols % 4 != 0 && this.corner2(e++), t === this.numrows - 2 && n === 0 && this.numcols % 8 == 4 && this.corner3(e++), t === this.numrows + 4 && n === 2 && this.numcols % 8 == 0 && this.corner4(e++);
			do
				t < this.numrows && n >= 0 && this.noBit(n, t) && this.utah(t, n, e++), t -= 2, n += 2;
			while (t >= 0 && n < this.numcols);
			t++, n += 3;
			do
				t >= 0 && n < this.numcols && this.noBit(n, t) && this.utah(t, n, e++), t += 2, n -= 2;
			while (t < this.numrows && n >= 0);
			t += 3, n++;
		} while (t < this.numrows || n < this.numcols);
		this.noBit(this.numcols - 1, this.numrows - 1) && (this.setBit(this.numcols - 1, this.numrows - 1, !0), this.setBit(this.numcols - 2, this.numrows - 2, !0));
	}, e.prototype.module = function(e, t, n, r) {
		e < 0 && (e += this.numrows, t += 4 - (this.numrows + 4) % 8), t < 0 && (t += this.numcols, e += 4 - (this.numcols + 4) % 8);
		var i = this.codewords.charCodeAt(n);
		i &= 1 << 8 - r, this.setBit(t, e, i !== 0);
	}, e.prototype.utah = function(e, t, n) {
		this.module(e - 2, t - 2, n, 1), this.module(e - 2, t - 1, n, 2), this.module(e - 1, t - 2, n, 3), this.module(e - 1, t - 1, n, 4), this.module(e - 1, t, n, 5), this.module(e, t - 2, n, 6), this.module(e, t - 1, n, 7), this.module(e, t, n, 8);
	}, e.prototype.corner1 = function(e) {
		this.module(this.numrows - 1, 0, e, 1), this.module(this.numrows - 1, 1, e, 2), this.module(this.numrows - 1, 2, e, 3), this.module(0, this.numcols - 2, e, 4), this.module(0, this.numcols - 1, e, 5), this.module(1, this.numcols - 1, e, 6), this.module(2, this.numcols - 1, e, 7), this.module(3, this.numcols - 1, e, 8);
	}, e.prototype.corner2 = function(e) {
		this.module(this.numrows - 3, 0, e, 1), this.module(this.numrows - 2, 0, e, 2), this.module(this.numrows - 1, 0, e, 3), this.module(0, this.numcols - 4, e, 4), this.module(0, this.numcols - 3, e, 5), this.module(0, this.numcols - 2, e, 6), this.module(0, this.numcols - 1, e, 7), this.module(1, this.numcols - 1, e, 8);
	}, e.prototype.corner3 = function(e) {
		this.module(this.numrows - 3, 0, e, 1), this.module(this.numrows - 2, 0, e, 2), this.module(this.numrows - 1, 0, e, 3), this.module(0, this.numcols - 2, e, 4), this.module(0, this.numcols - 1, e, 5), this.module(1, this.numcols - 1, e, 6), this.module(2, this.numcols - 1, e, 7), this.module(3, this.numcols - 1, e, 8);
	}, e.prototype.corner4 = function(e) {
		this.module(this.numrows - 1, 0, e, 1), this.module(this.numrows - 1, this.numcols - 1, e, 2), this.module(0, this.numcols - 3, e, 3), this.module(0, this.numcols - 2, e, 4), this.module(0, this.numcols - 1, e, 5), this.module(1, this.numcols - 3, e, 6), this.module(1, this.numcols - 2, e, 7), this.module(1, this.numcols - 1, e, 8);
	}, e;
}(), Gi, Ki = [
	5,
	7,
	10,
	11,
	12,
	14,
	18,
	20,
	24,
	28,
	36,
	42,
	48,
	56,
	62,
	68
], qi = [
	[
		228,
		48,
		15,
		111,
		62
	],
	[
		23,
		68,
		144,
		134,
		240,
		92,
		254
	],
	[
		28,
		24,
		185,
		166,
		223,
		248,
		116,
		255,
		110,
		61
	],
	[
		175,
		138,
		205,
		12,
		194,
		168,
		39,
		245,
		60,
		97,
		120
	],
	[
		41,
		153,
		158,
		91,
		61,
		42,
		142,
		213,
		97,
		178,
		100,
		242
	],
	[
		156,
		97,
		192,
		252,
		95,
		9,
		157,
		119,
		138,
		45,
		18,
		186,
		83,
		185
	],
	[
		83,
		195,
		100,
		39,
		188,
		75,
		66,
		61,
		241,
		213,
		109,
		129,
		94,
		254,
		225,
		48,
		90,
		188
	],
	[
		15,
		195,
		244,
		9,
		233,
		71,
		168,
		2,
		188,
		160,
		153,
		145,
		253,
		79,
		108,
		82,
		27,
		174,
		186,
		172
	],
	[
		52,
		190,
		88,
		205,
		109,
		39,
		176,
		21,
		155,
		197,
		251,
		223,
		155,
		21,
		5,
		172,
		254,
		124,
		12,
		181,
		184,
		96,
		50,
		193
	],
	[
		211,
		231,
		43,
		97,
		71,
		96,
		103,
		174,
		37,
		151,
		170,
		53,
		75,
		34,
		249,
		121,
		17,
		138,
		110,
		213,
		141,
		136,
		120,
		151,
		233,
		168,
		93,
		255
	],
	[
		245,
		127,
		242,
		218,
		130,
		250,
		162,
		181,
		102,
		120,
		84,
		179,
		220,
		251,
		80,
		182,
		229,
		18,
		2,
		4,
		68,
		33,
		101,
		137,
		95,
		119,
		115,
		44,
		175,
		184,
		59,
		25,
		225,
		98,
		81,
		112
	],
	[
		77,
		193,
		137,
		31,
		19,
		38,
		22,
		153,
		247,
		105,
		122,
		2,
		245,
		133,
		242,
		8,
		175,
		95,
		100,
		9,
		167,
		105,
		214,
		111,
		57,
		121,
		21,
		1,
		253,
		57,
		54,
		101,
		248,
		202,
		69,
		50,
		150,
		177,
		226,
		5,
		9,
		5
	],
	[
		245,
		132,
		172,
		223,
		96,
		32,
		117,
		22,
		238,
		133,
		238,
		231,
		205,
		188,
		237,
		87,
		191,
		106,
		16,
		147,
		118,
		23,
		37,
		90,
		170,
		205,
		131,
		88,
		120,
		100,
		66,
		138,
		186,
		240,
		82,
		44,
		176,
		87,
		187,
		147,
		160,
		175,
		69,
		213,
		92,
		253,
		225,
		19
	],
	[
		175,
		9,
		223,
		238,
		12,
		17,
		220,
		208,
		100,
		29,
		175,
		170,
		230,
		192,
		215,
		235,
		150,
		159,
		36,
		223,
		38,
		200,
		132,
		54,
		228,
		146,
		218,
		234,
		117,
		203,
		29,
		232,
		144,
		238,
		22,
		150,
		201,
		117,
		62,
		207,
		164,
		13,
		137,
		245,
		127,
		67,
		247,
		28,
		155,
		43,
		203,
		107,
		233,
		53,
		143,
		46
	],
	[
		242,
		93,
		169,
		50,
		144,
		210,
		39,
		118,
		202,
		188,
		201,
		189,
		143,
		108,
		196,
		37,
		185,
		112,
		134,
		230,
		245,
		63,
		197,
		190,
		250,
		106,
		185,
		221,
		175,
		64,
		114,
		71,
		161,
		44,
		147,
		6,
		27,
		218,
		51,
		63,
		87,
		10,
		40,
		130,
		188,
		17,
		163,
		31,
		176,
		170,
		4,
		107,
		232,
		7,
		94,
		166,
		224,
		124,
		86,
		47,
		11,
		204
	],
	[
		220,
		228,
		173,
		89,
		251,
		149,
		159,
		56,
		89,
		33,
		147,
		244,
		154,
		36,
		73,
		127,
		213,
		136,
		248,
		180,
		234,
		197,
		158,
		177,
		68,
		122,
		93,
		213,
		15,
		160,
		227,
		236,
		66,
		139,
		153,
		185,
		202,
		167,
		179,
		25,
		220,
		232,
		96,
		210,
		231,
		136,
		223,
		239,
		181,
		241,
		59,
		52,
		172,
		25,
		49,
		232,
		211,
		189,
		64,
		54,
		108,
		153,
		132,
		63,
		96,
		103,
		82,
		186
	]
], Ji = (Gi = function(e, t) {
	for (var n = 1, r = 0; r < 255; r++) t[r] = n, e[n] = r, n *= 2, n >= 256 && (n ^= 301);
	return {
		LOG: e,
		ALOG: t
	};
}([], []), Gi.LOG), Yi = Gi.ALOG, Xi;
(function(e) {
	e[e.FORCE_NONE = 0] = "FORCE_NONE", e[e.FORCE_SQUARE = 1] = "FORCE_SQUARE", e[e.FORCE_RECTANGLE = 2] = "FORCE_RECTANGLE";
})(Xi ||= {});
var Zi = "[)>05", Qi = "[)>06", $i = function() {
	function e() {}
	return e.encodeECC200 = function(e, t) {
		if (e.length !== t.getDataCapacity()) throw Error("The number of codewords does not match the selected symbol");
		var n = new F();
		n.append(e);
		var r = t.getInterleavedBlockCount();
		if (r === 1) {
			var i = this.createECCBlock(e, t.getErrorCodewords());
			n.append(i);
		} else {
			for (var a = [], o = [], s = 0; s < r; s++) a[s] = t.getDataLengthForInterleavedBlock(s + 1), o[s] = t.getErrorLengthForInterleavedBlock(s + 1);
			for (var c = 0; c < r; c++) {
				for (var l = new F(), u = c; u < t.getDataCapacity(); u += r) l.append(e.charAt(u));
				for (var i = this.createECCBlock(l.toString(), o[c]), d = 0, f = c; f < o[c] * r; f += r) n.setCharAt(t.getDataCapacity() + f, i.charAt(d++));
			}
		}
		return n.toString();
	}, e.createECCBlock = function(e, t) {
		for (var n = -1, r = 0; r < Ki.length; r++) if (Ki[r] === t) {
			n = r;
			break;
		}
		if (n < 0) throw Error("Illegal number of error correction codewords specified: " + t);
		for (var i = qi[n], a = [], r = 0; r < t; r++) a[r] = 0;
		for (var r = 0; r < e.length; r++) {
			for (var o = a[t - 1] ^ e.charAt(r).charCodeAt(0), s = t - 1; s > 0; s--) o !== 0 && i[s] !== 0 ? a[s] = a[s - 1] ^ Yi[(Ji[o] + Ji[i[s]]) % 255] : a[s] = a[s - 1];
			a[0] = o !== 0 && i[0] !== 0 ? Yi[(Ji[o] + Ji[i[0]]) % 255] : 0;
		}
		for (var c = [], r = 0; r < t; r++) c[r] = a[t - r - 1];
		return c.map(function(e) {
			return String.fromCharCode(e);
		}).join("");
	}, e;
}(), ea = function() {
	function e() {}
	return e.prototype.getEncodingMode = function() {
		return 0;
	}, e.prototype.encode = function(e) {
		if (Y.determineConsecutiveDigitCount(e.getMessage(), e.pos) >= 2) e.writeCodeword(this.encodeASCIIDigits(e.getMessage().charCodeAt(e.pos), e.getMessage().charCodeAt(e.pos + 1))), e.pos += 2;
		else {
			var t = e.getCurrentChar(), n = Y.lookAheadTest(e.getMessage(), e.pos, this.getEncodingMode());
			if (n !== this.getEncodingMode()) switch (n) {
				case 5:
					e.writeCodeword(231), e.signalEncoderChange(5);
					return;
				case 1:
					e.writeCodeword(230), e.signalEncoderChange(1);
					return;
				case 3:
					e.writeCodeword(238), e.signalEncoderChange(3);
					break;
				case 2:
					e.writeCodeword(239), e.signalEncoderChange(2);
					break;
				case 4:
					e.writeCodeword(240), e.signalEncoderChange(4);
					break;
				default: throw Error("Illegal mode: " + n);
			}
			else Y.isExtendedASCII(t) ? (e.writeCodeword(235), e.writeCodeword(t - 128 + 1), e.pos++) : (e.writeCodeword(t + 1), e.pos++);
		}
	}, e.prototype.encodeASCIIDigits = function(e, t) {
		if (Y.isDigit(e) && Y.isDigit(t)) return (e - 48) * 10 + (t - 48) + 130;
		throw Error("not digits: " + e + t);
	}, e;
}(), ta = function() {
	function e() {}
	return e.prototype.getEncodingMode = function() {
		return 5;
	}, e.prototype.encode = function(e) {
		var t = new F();
		for (t.append(0); e.hasMoreCharacters();) {
			var n = e.getCurrentChar();
			if (t.append(n), e.pos++, Y.lookAheadTest(e.getMessage(), e.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
				e.signalEncoderChange(0);
				break;
			}
		}
		var r = t.length() - 1, i = e.getCodewordCount() + r + 1;
		e.updateSymbolInfo(i);
		var a = e.getSymbolInfo().getDataCapacity() - i > 0;
		if (e.hasMoreCharacters() || a) {
			if (r <= 249) t.setCharAt(0, P.getCharAt(r));
			else if (r <= 1555) t.setCharAt(0, P.getCharAt(Math.floor(r / 250) + 249)), t.insert(1, P.getCharAt(r % 250));
			else throw Error("Message length not in valid ranges: " + r);
		}
		for (var o = 0, n = t.length(); o < n; o++) e.writeCodeword(this.randomize255State(t.charAt(o).charCodeAt(0), e.getCodewordCount() + 1));
	}, e.prototype.randomize255State = function(e, t) {
		var n = e + (149 * t % 255 + 1);
		return n <= 255 ? n : n - 256;
	}, e;
}(), na = function() {
	function e() {}
	return e.prototype.getEncodingMode = function() {
		return 1;
	}, e.prototype.encodeMaximal = function(e) {
		for (var t = new F(), n = 0, r = e.pos, i = 0; e.hasMoreCharacters();) {
			var a = e.getCurrentChar();
			e.pos++, n = this.encodeChar(a, t), t.length() % 3 == 0 && (r = e.pos, i = t.length());
		}
		if (i !== t.length()) {
			var o = Math.floor(t.length() / 3 * 2), s = Math.floor(e.getCodewordCount() + o + 1);
			e.updateSymbolInfo(s);
			var c = e.getSymbolInfo().getDataCapacity() - s, l = Math.floor(t.length() % 3);
			(l === 2 && c !== 2 || l === 1 && (n > 3 || c !== 1)) && (e.pos = r);
		}
		t.length() > 0 && e.writeCodeword(230), this.handleEOD(e, t);
	}, e.prototype.encode = function(e) {
		for (var t = new F(); e.hasMoreCharacters();) {
			var n = e.getCurrentChar();
			e.pos++;
			var r = this.encodeChar(n, t), i = Math.floor(t.length() / 3) * 2, a = e.getCodewordCount() + i;
			e.updateSymbolInfo(a);
			var o = e.getSymbolInfo().getDataCapacity() - a;
			if (!e.hasMoreCharacters()) {
				var s = new F();
				for (t.length() % 3 == 2 && o !== 2 && (r = this.backtrackOneCharacter(e, t, s, r)); t.length() % 3 == 1 && (r > 3 || o !== 1);) r = this.backtrackOneCharacter(e, t, s, r);
				break;
			}
			if (t.length() % 3 == 0 && Y.lookAheadTest(e.getMessage(), e.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
				e.signalEncoderChange(0);
				break;
			}
		}
		this.handleEOD(e, t);
	}, e.prototype.backtrackOneCharacter = function(e, t, n, r) {
		var i = t.length(), a = t.toString().substring(0, i - r);
		t.setLengthToZero(), t.append(a), e.pos--;
		var o = e.getCurrentChar();
		return r = this.encodeChar(o, n), e.resetSymbolInfo(), r;
	}, e.prototype.writeNextTriplet = function(e, t) {
		e.writeCodewords(this.encodeToCodewords(t.toString()));
		var n = t.toString().substring(3);
		t.setLengthToZero(), t.append(n);
	}, e.prototype.handleEOD = function(e, t) {
		var n = Math.floor(t.length() / 3 * 2), r = t.length() % 3, i = e.getCodewordCount() + n;
		e.updateSymbolInfo(i);
		var a = e.getSymbolInfo().getDataCapacity() - i;
		if (r === 2) {
			for (t.append("\0"); t.length() >= 3;) this.writeNextTriplet(e, t);
			e.hasMoreCharacters() && e.writeCodeword(254);
		} else if (a === 1 && r === 1) {
			for (; t.length() >= 3;) this.writeNextTriplet(e, t);
			e.hasMoreCharacters() && e.writeCodeword(254), e.pos--;
		} else if (r === 0) {
			for (; t.length() >= 3;) this.writeNextTriplet(e, t);
			(a > 0 || e.hasMoreCharacters()) && e.writeCodeword(254);
		} else throw Error("Unexpected case. Please report!");
		e.signalEncoderChange(0);
	}, e.prototype.encodeChar = function(e, t) {
		if (e === 32) return t.append(3), 1;
		if (e >= 48 && e <= 57) return t.append(e - 48 + 4), 1;
		if (e >= 65 && e <= 90) return t.append(e - 65 + 14), 1;
		if (e < 32) return t.append(0), t.append(e), 2;
		if (e <= 47) return t.append(1), t.append(e - 33), 2;
		if (e <= 64) return t.append(1), t.append(e - 58 + 15), 2;
		if (e <= 95) return t.append(1), t.append(e - 91 + 22), 2;
		if (e <= 127) return t.append(2), t.append(e - 96), 2;
		t.append("1");
		var n = 2;
		return n += this.encodeChar(e - 128, t), n;
	}, e.prototype.encodeToCodewords = function(e) {
		var t = 1600 * e.charCodeAt(0) + 40 * e.charCodeAt(1) + e.charCodeAt(2) + 1, n = t / 256, r = t % 256, i = new F();
		return i.append(n), i.append(r), i.toString();
	}, e;
}(), ra = function() {
	function e() {}
	return e.prototype.getEncodingMode = function() {
		return 4;
	}, e.prototype.encode = function(e) {
		for (var t = new F(); e.hasMoreCharacters();) {
			var n = e.getCurrentChar();
			if (this.encodeChar(n, t), e.pos++, t.length() >= 4) {
				e.writeCodewords(this.encodeToCodewords(t.toString()));
				var r = t.toString().substring(4);
				if (t.setLengthToZero(), t.append(r), Y.lookAheadTest(e.getMessage(), e.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
					e.signalEncoderChange(0);
					break;
				}
			}
		}
		t.append(P.getCharAt(31)), this.handleEOD(e, t);
	}, e.prototype.handleEOD = function(e, t) {
		try {
			var n = t.length();
			if (n === 0) return;
			if (n === 1) {
				e.updateSymbolInfo();
				var r = e.getSymbolInfo().getDataCapacity() - e.getCodewordCount(), i = e.getRemainingCharacters();
				if (i > r && (e.updateSymbolInfo(e.getCodewordCount() + 1), r = e.getSymbolInfo().getDataCapacity() - e.getCodewordCount()), i <= r && r <= 2) return;
			}
			if (n > 4) throw Error("Count must not exceed 4");
			var a = n - 1, o = this.encodeToCodewords(t.toString()), s = !e.hasMoreCharacters() && a <= 2;
			if (a <= 2) {
				e.updateSymbolInfo(e.getCodewordCount() + a);
				var r = e.getSymbolInfo().getDataCapacity() - e.getCodewordCount();
				r >= 3 && (s = !1, e.updateSymbolInfo(e.getCodewordCount() + o.length));
			}
			s ? (e.resetSymbolInfo(), e.pos -= a) : e.writeCodewords(o);
		} finally {
			e.signalEncoderChange(0);
		}
	}, e.prototype.encodeChar = function(e, t) {
		e >= 32 && e <= 63 ? t.append(e) : e >= 64 && e <= 94 ? t.append(P.getCharAt(e - 64)) : Y.illegalCharacter(P.getCharAt(e));
	}, e.prototype.encodeToCodewords = function(e) {
		var t = e.length;
		if (t === 0) throw Error("StringBuilder must not be empty");
		var n = e.charAt(0).charCodeAt(0), r = t >= 2 ? e.charAt(1).charCodeAt(0) : 0, i = t >= 3 ? e.charAt(2).charCodeAt(0) : 0, a = t >= 4 ? e.charAt(3).charCodeAt(0) : 0, o = (n << 18) + (r << 12) + (i << 6) + a, s = o >> 16 & 255, c = o >> 8 & 255, l = o & 255, u = new F();
		return u.append(s), t >= 2 && u.append(c), t >= 3 && u.append(l), u.toString();
	}, e;
}(), ia = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), aa = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, J = function() {
	function e(e, t, n, r, i, a, o, s) {
		o === void 0 && (o = 0), s === void 0 && (s = 0), this.rectangular = e, this.dataCapacity = t, this.errorCodewords = n, this.matrixWidth = r, this.matrixHeight = i, this.dataRegions = a, this.rsBlockData = o, this.rsBlockError = s;
	}
	return e.lookup = function(e, t, n, r, i) {
		var a, o;
		t === void 0 && (t = 0), n === void 0 && (n = null), r === void 0 && (r = null), i === void 0 && (i = !0);
		try {
			for (var s = aa(sa), c = s.next(); !c.done; c = s.next()) {
				var l = c.value;
				if (!(t === 1 && l.rectangular) && (t !== 2 || l.rectangular) && !(n != null && (l.getSymbolWidth() < n.getWidth() || l.getSymbolHeight() < n.getHeight())) && !(r != null && (l.getSymbolWidth() > r.getWidth() || l.getSymbolHeight() > r.getHeight())) && e <= l.dataCapacity) return l;
			}
		} catch (e) {
			a = { error: e };
		} finally {
			try {
				c && !c.done && (o = s.return) && o.call(s);
			} finally {
				if (a) throw a.error;
			}
		}
		if (i) throw Error("Can't find a symbol arrangement that matches the message. Data codewords: " + e);
		return null;
	}, e.prototype.getHorizontalDataRegions = function() {
		switch (this.dataRegions) {
			case 1: return 1;
			case 2:
			case 4: return 2;
			case 16: return 4;
			case 36: return 6;
			default: throw Error("Cannot handle this number of data regions");
		}
	}, e.prototype.getVerticalDataRegions = function() {
		switch (this.dataRegions) {
			case 1:
			case 2: return 1;
			case 4: return 2;
			case 16: return 4;
			case 36: return 6;
			default: throw Error("Cannot handle this number of data regions");
		}
	}, e.prototype.getSymbolDataWidth = function() {
		return this.getHorizontalDataRegions() * this.matrixWidth;
	}, e.prototype.getSymbolDataHeight = function() {
		return this.getVerticalDataRegions() * this.matrixHeight;
	}, e.prototype.getSymbolWidth = function() {
		return this.getSymbolDataWidth() + this.getHorizontalDataRegions() * 2;
	}, e.prototype.getSymbolHeight = function() {
		return this.getSymbolDataHeight() + this.getVerticalDataRegions() * 2;
	}, e.prototype.getCodewordCount = function() {
		return this.dataCapacity + this.errorCodewords;
	}, e.prototype.getInterleavedBlockCount = function() {
		return this.rsBlockData ? this.dataCapacity / this.rsBlockData : 1;
	}, e.prototype.getDataCapacity = function() {
		return this.dataCapacity;
	}, e.prototype.getErrorCodewords = function() {
		return this.errorCodewords;
	}, e.prototype.getDataLengthForInterleavedBlock = function(e) {
		return this.rsBlockData;
	}, e.prototype.getErrorLengthForInterleavedBlock = function(e) {
		return this.rsBlockError;
	}, e;
}(), oa = function(e) {
	ia(t, e);
	function t() {
		return e.call(this, !1, 1558, 620, 22, 22, 36, -1, 62) || this;
	}
	return t.prototype.getInterleavedBlockCount = function() {
		return 10;
	}, t.prototype.getDataLengthForInterleavedBlock = function(e) {
		return e <= 8 ? 156 : 155;
	}, t;
}(J), sa = [
	new J(!1, 3, 5, 8, 8, 1),
	new J(!1, 5, 7, 10, 10, 1),
	new J(!0, 5, 7, 16, 6, 1),
	new J(!1, 8, 10, 12, 12, 1),
	new J(!0, 10, 11, 14, 6, 2),
	new J(!1, 12, 12, 14, 14, 1),
	new J(!0, 16, 14, 24, 10, 1),
	new J(!1, 18, 14, 16, 16, 1),
	new J(!1, 22, 18, 18, 18, 1),
	new J(!0, 22, 18, 16, 10, 2),
	new J(!1, 30, 20, 20, 20, 1),
	new J(!0, 32, 24, 16, 14, 2),
	new J(!1, 36, 24, 22, 22, 1),
	new J(!1, 44, 28, 24, 24, 1),
	new J(!0, 49, 28, 22, 14, 2),
	new J(!1, 62, 36, 14, 14, 4),
	new J(!1, 86, 42, 16, 16, 4),
	new J(!1, 114, 48, 18, 18, 4),
	new J(!1, 144, 56, 20, 20, 4),
	new J(!1, 174, 68, 22, 22, 4),
	new J(!1, 204, 84, 24, 24, 4, 102, 42),
	new J(!1, 280, 112, 14, 14, 16, 140, 56),
	new J(!1, 368, 144, 16, 16, 16, 92, 36),
	new J(!1, 456, 192, 18, 18, 16, 114, 48),
	new J(!1, 576, 224, 20, 20, 16, 144, 56),
	new J(!1, 696, 272, 22, 22, 16, 174, 68),
	new J(!1, 816, 336, 24, 24, 16, 136, 56),
	new J(!1, 1050, 408, 18, 18, 36, 175, 68),
	new J(!1, 1304, 496, 20, 20, 36, 163, 62),
	new oa()
], ca = function() {
	function e(e) {
		this.msg = e, this.pos = 0, this.skipAtEnd = 0;
		for (var t = e.split("").map(function(e) {
			return e.charCodeAt(0);
		}), n = new F(), r = 0, i = t.length; r < i; r++) {
			var a = String.fromCharCode(t[r] & 255);
			if (a === "?" && e.charAt(r) !== "?") throw Error("Message contains characters outside ISO-8859-1 encoding.");
			n.append(a);
		}
		this.msg = n.toString(), this.shape = 0, this.codewords = new F(), this.newEncoding = -1;
	}
	return e.prototype.setSymbolShape = function(e) {
		this.shape = e;
	}, e.prototype.setSizeConstraints = function(e, t) {
		this.minSize = e, this.maxSize = t;
	}, e.prototype.getMessage = function() {
		return this.msg;
	}, e.prototype.setSkipAtEnd = function(e) {
		this.skipAtEnd = e;
	}, e.prototype.getCurrentChar = function() {
		return this.msg.charCodeAt(this.pos);
	}, e.prototype.getCurrent = function() {
		return this.msg.charCodeAt(this.pos);
	}, e.prototype.getCodewords = function() {
		return this.codewords;
	}, e.prototype.writeCodewords = function(e) {
		this.codewords.append(e);
	}, e.prototype.writeCodeword = function(e) {
		this.codewords.append(e);
	}, e.prototype.getCodewordCount = function() {
		return this.codewords.length();
	}, e.prototype.getNewEncoding = function() {
		return this.newEncoding;
	}, e.prototype.signalEncoderChange = function(e) {
		this.newEncoding = e;
	}, e.prototype.resetEncoderSignal = function() {
		this.newEncoding = -1;
	}, e.prototype.hasMoreCharacters = function() {
		return this.pos < this.getTotalMessageCharCount();
	}, e.prototype.getTotalMessageCharCount = function() {
		return this.msg.length - this.skipAtEnd;
	}, e.prototype.getRemainingCharacters = function() {
		return this.getTotalMessageCharCount() - this.pos;
	}, e.prototype.getSymbolInfo = function() {
		return this.symbolInfo;
	}, e.prototype.updateSymbolInfo = function(e) {
		e === void 0 && (e = this.getCodewordCount()), (this.symbolInfo == null || e > this.symbolInfo.getDataCapacity()) && (this.symbolInfo = J.lookup(e, this.shape, this.minSize, this.maxSize, !0));
	}, e.prototype.resetSymbolInfo = function() {
		this.symbolInfo = null;
	}, e;
}(), la = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), ua = function(e) {
	la(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.getEncodingMode = function() {
		return 3;
	}, t.prototype.encode = function(e) {
		for (var t = new F(); e.hasMoreCharacters();) {
			var n = e.getCurrentChar();
			if (e.pos++, this.encodeChar(n, t), t.length() % 3 == 0 && (this.writeNextTriplet(e, t), Y.lookAheadTest(e.getMessage(), e.pos, this.getEncodingMode()) !== this.getEncodingMode())) {
				e.signalEncoderChange(0);
				break;
			}
		}
		this.handleEOD(e, t);
	}, t.prototype.encodeChar = function(e, t) {
		switch (e) {
			case 13:
				t.append(0);
				break;
			case 42:
				t.append(1);
				break;
			case 62:
				t.append(2);
				break;
			case 32:
				t.append(3);
				break;
			default: e >= 48 && e <= 57 ? t.append(e - 48 + 4) : e >= 65 && e <= 90 ? t.append(e - 65 + 14) : Y.illegalCharacter(P.getCharAt(e));
		}
		return 1;
	}, t.prototype.handleEOD = function(e, t) {
		e.updateSymbolInfo();
		var n = e.getSymbolInfo().getDataCapacity() - e.getCodewordCount(), r = t.length();
		e.pos -= r, (e.getRemainingCharacters() > 1 || n > 1 || e.getRemainingCharacters() !== n) && e.writeCodeword(254), e.getNewEncoding() < 0 && e.signalEncoderChange(0);
	}, t;
}(na), da = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), fa = function(e) {
	da(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.getEncodingMode = function() {
		return 2;
	}, t.prototype.encodeChar = function(e, t) {
		if (e === 32) return t.append(3), 1;
		if (e >= 48 && e <= 57) return t.append(e - 48 + 4), 1;
		if (e >= 97 && e <= 122) return t.append(e - 97 + 14), 1;
		if (e < 32) return t.append(0), t.append(e), 2;
		if (e <= 47) return t.append(1), t.append(e - 33), 2;
		if (e <= 64) return t.append(1), t.append(e - 58 + 15), 2;
		if (e >= 91 && e <= 95) return t.append(1), t.append(e - 91 + 22), 2;
		if (e === 96) return t.append(2), t.append(0), 2;
		if (e <= 90) return t.append(2), t.append(e - 65 + 1), 2;
		if (e <= 127) return t.append(2), t.append(e - 123 + 27), 2;
		t.append("1");
		var n = 2;
		return n += this.encodeChar(e - 128, t), n;
	}, t;
}(na), Y = function() {
	function e() {}
	return e.randomize253State = function(e) {
		var t = 129 + (149 * e % 253 + 1);
		return t <= 254 ? t : t - 254;
	}, e.encodeHighLevel = function(e, t, n, r, i) {
		t === void 0 && (t = 0), n === void 0 && (n = null), r === void 0 && (r = null), i === void 0 && (i = !1);
		var a = new na(), o = [
			new ea(),
			a,
			new fa(),
			new ua(),
			new ra(),
			new ta()
		], s = new ca(e);
		s.setSymbolShape(t), s.setSizeConstraints(n, r), e.startsWith("[)>05") && e.endsWith("") ? (s.writeCodeword(236), s.setSkipAtEnd(2), s.pos += Zi.length) : e.startsWith("[)>06") && e.endsWith("") && (s.writeCodeword(237), s.setSkipAtEnd(2), s.pos += Qi.length);
		var c = 0;
		for (i && (a.encodeMaximal(s), c = s.getNewEncoding(), s.resetEncoderSignal()); s.hasMoreCharacters();) o[c].encode(s), s.getNewEncoding() >= 0 && (c = s.getNewEncoding(), s.resetEncoderSignal());
		var l = s.getCodewordCount();
		s.updateSymbolInfo();
		var u = s.getSymbolInfo().getDataCapacity();
		l < u && c !== 0 && c !== 5 && c !== 4 && s.writeCodeword("þ");
		var d = s.getCodewords();
		for (d.length() < u && d.append(129); d.length() < u;) d.append(this.randomize253State(d.length() + 1));
		return s.getCodewords().toString();
	}, e.lookAheadTest = function(e, t, n) {
		var r = this.lookAheadTestIntern(e, t, n);
		if (n === 3 && r === 3) {
			for (var i = Math.min(t + 3, e.length), a = t; a < i; a++) if (!this.isNativeX12(e.charCodeAt(a))) return 0;
		} else if (n === 4 && r === 4) {
			for (var i = Math.min(t + 4, e.length), a = t; a < i; a++) if (!this.isNativeEDIFACT(e.charCodeAt(a))) return 0;
		}
		return r;
	}, e.lookAheadTestIntern = function(e, t, n) {
		if (t >= e.length) return n;
		var r;
		n === 0 ? r = [
			0,
			1,
			1,
			1,
			1,
			1.25
		] : (r = [
			1,
			2,
			2,
			2,
			2,
			2.25
		], r[n] = 0);
		for (var i = 0, a = /* @__PURE__ */ new Uint8Array(6), o = [];;) {
			if (t + i === e.length) {
				k.fill(a, 0), k.fill(o, 0);
				var s = this.findMinimums(r, o, A.MAX_VALUE, a), c = this.getMinimumCount(a);
				if (o[0] === s) return 0;
				if (c === 1) {
					if (a[5] > 0) return 5;
					if (a[4] > 0) return 4;
					if (a[2] > 0) return 2;
					if (a[3] > 0) return 3;
				}
				return 1;
			}
			var l = e.charCodeAt(t + i);
			if (i++, this.isDigit(l) ? r[0] += .5 : this.isExtendedASCII(l) ? (r[0] = Math.ceil(r[0]), r[0] += 2) : (r[0] = Math.ceil(r[0]), r[0]++), this.isNativeC40(l) ? r[1] += 2 / 3 : this.isExtendedASCII(l) ? r[1] += 8 / 3 : r[1] += 4 / 3, this.isNativeText(l) ? r[2] += 2 / 3 : this.isExtendedASCII(l) ? r[2] += 8 / 3 : r[2] += 4 / 3, this.isNativeX12(l) ? r[3] += 2 / 3 : this.isExtendedASCII(l) ? r[3] += 13 / 3 : r[3] += 10 / 3, this.isNativeEDIFACT(l) ? r[4] += 3 / 4 : this.isExtendedASCII(l) ? r[4] += 17 / 4 : r[4] += 13 / 4, this.isSpecialB256(l) ? r[5] += 4 : r[5]++, i >= 4) {
				if (k.fill(a, 0), k.fill(o, 0), this.findMinimums(r, o, A.MAX_VALUE, a), o[0] < this.min(o[5], o[1], o[2], o[3], o[4])) return 0;
				if (o[5] < o[0] || o[5] + 1 < this.min(o[1], o[2], o[3], o[4])) return 5;
				if (o[4] + 1 < this.min(o[5], o[1], o[2], o[3], o[0])) return 4;
				if (o[2] + 1 < this.min(o[5], o[1], o[4], o[3], o[0])) return 2;
				if (o[3] + 1 < this.min(o[5], o[1], o[4], o[2], o[0])) return 3;
				if (o[1] + 1 < this.min(o[0], o[5], o[4], o[2])) {
					if (o[1] < o[3]) return 1;
					if (o[1] === o[3]) {
						for (var u = t + i + 1; u < e.length;) {
							var d = e.charCodeAt(u);
							if (this.isX12TermSep(d)) return 3;
							if (!this.isNativeX12(d)) break;
							u++;
						}
						return 1;
					}
				}
			}
		}
	}, e.min = function(e, t, n, r, i) {
		var a = Math.min(e, Math.min(t, Math.min(n, r)));
		return i === void 0 ? a : Math.min(a, i);
	}, e.findMinimums = function(e, t, n, r) {
		for (var i = 0; i < 6; i++) {
			var a = t[i] = Math.ceil(e[i]);
			n > a && (n = a, k.fill(r, 0)), n === a && (r[i] = r[i] + 1);
		}
		return n;
	}, e.getMinimumCount = function(e) {
		for (var t = 0, n = 0; n < 6; n++) t += e[n];
		return t || 0;
	}, e.isDigit = function(e) {
		return e >= 48 && e <= 57;
	}, e.isExtendedASCII = function(e) {
		return e >= 128 && e <= 255;
	}, e.isNativeC40 = function(e) {
		return e === 32 || e >= 48 && e <= 57 || e >= 65 && e <= 90;
	}, e.isNativeText = function(e) {
		return e === 32 || e >= 48 && e <= 57 || e >= 97 && e <= 122;
	}, e.isNativeX12 = function(e) {
		return this.isX12TermSep(e) || e === 32 || e >= 48 && e <= 57 || e >= 65 && e <= 90;
	}, e.isX12TermSep = function(e) {
		return e === 13 || e === 42 || e === 62;
	}, e.isNativeEDIFACT = function(e) {
		return e >= 32 && e <= 94;
	}, e.isSpecialB256 = function(e) {
		return !1;
	}, e.determineConsecutiveDigitCount = function(e, t) {
		t === void 0 && (t = 0);
		for (var n = e.length, r = t; r < n && this.isDigit(e.charCodeAt(r));) r++;
		return r - t;
	}, e.illegalCharacter = function(e) {
		var t = A.toHexString(e.charCodeAt(0));
		throw t = "0000".substring(0, 4 - t.length) + t, Error("Illegal character: " + e + " (0x" + t + ")");
	}, e;
}(), pa = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ma = function() {
	function e(e) {
		this.charset = e, this.name = e.name;
	}
	return e.prototype.canEncode = function(e) {
		try {
			return le.encode(e, this.charset) != null;
		} catch {
			return !1;
		}
	}, e;
}(), ha = function() {
	function e(e, t, n) {
		var r, i, a, o, s, c;
		this.ENCODERS = [
			"IBM437",
			"ISO-8859-2",
			"ISO-8859-3",
			"ISO-8859-4",
			"ISO-8859-5",
			"ISO-8859-6",
			"ISO-8859-7",
			"ISO-8859-8",
			"ISO-8859-9",
			"ISO-8859-10",
			"ISO-8859-11",
			"ISO-8859-13",
			"ISO-8859-14",
			"ISO-8859-15",
			"ISO-8859-16",
			"windows-1250",
			"windows-1251",
			"windows-1252",
			"windows-1256",
			"Shift_JIS"
		].map(function(e) {
			return new ma(Hi.forName(e));
		}), this.encoders = [];
		var l = [];
		l.push(new ma(Ui.ISO_8859_1));
		for (var u = t != null && t.name.startsWith("UTF"), d = 0; d < e.length; d++) {
			var f = !1;
			try {
				for (var p = (r = void 0, pa(l)), m = p.next(); !m.done; m = p.next()) {
					var h = m.value, g = e.charAt(d);
					if (g.charCodeAt(0) === n || h.canEncode(g)) {
						f = !0;
						break;
					}
				}
			} catch (e) {
				r = { error: e };
			} finally {
				try {
					m && !m.done && (i = p.return) && i.call(p);
				} finally {
					if (r) throw r.error;
				}
			}
			if (!f) try {
				for (var _ = (a = void 0, pa(this.ENCODERS)), v = _.next(); !v.done; v = _.next()) {
					var h = v.value;
					if (h.canEncode(e.charAt(d))) {
						l.push(h), f = !0;
						break;
					}
				}
			} catch (e) {
				a = { error: e };
			} finally {
				try {
					v && !v.done && (o = _.return) && o.call(_);
				} finally {
					if (a) throw a.error;
				}
			}
			f || (u = !0);
		}
		if (l.length === 1 && !u) this.encoders = [l[0]];
		else {
			this.encoders = [];
			var y = 0;
			try {
				for (var b = pa(l), x = b.next(); !x.done; x = b.next()) {
					var h = x.value;
					this.encoders[y++] = h;
				}
			} catch (e) {
				s = { error: e };
			} finally {
				try {
					x && !x.done && (c = b.return) && c.call(b);
				} finally {
					if (s) throw s.error;
				}
			}
		}
		var S = -1;
		if (t != null) {
			for (var d = 0; d < this.encoders.length; d++) if (this.encoders[d] != null && t.name === this.encoders[d].name) {
				S = d;
				break;
			}
		}
		this.priorityEncoderIndex = S;
	}
	return e.prototype.length = function() {
		return this.encoders.length;
	}, e.prototype.getCharsetName = function(e) {
		if (!(e < this.length())) throw Error("index must be less than length");
		return this.encoders[e].name;
	}, e.prototype.getCharset = function(e) {
		if (!(e < this.length())) throw Error("index must be less than length");
		return this.encoders[e].charset;
	}, e.prototype.getECIValue = function(e) {
		return this.encoders[e].charset.getValueIdentifier();
	}, e.prototype.getPriorityEncoderIndex = function() {
		return this.priorityEncoderIndex;
	}, e.prototype.canEncode = function(e, t) {
		if (!(t < this.length())) throw Error("index must be less than length");
		return !0;
	}, e.prototype.encode = function(e, t) {
		if (!(t < this.length())) throw Error("index must be less than length");
		return le.encode(P.getCharAt(e), this.encoders[t].name);
	}, e;
}(), ga = 3, _a = function() {
	function e(e, t, n) {
		this.fnc1 = n;
		var r = new ha(e, t, n);
		if (r.length() === 1) for (var i = 0; i < this.bytes.length; i++) {
			var a = e.charAt(i).charCodeAt(0);
			this.bytes[i] = a === n ? 1e3 : a;
		}
		else this.bytes = this.encodeMinimally(e, r, n);
	}
	return e.prototype.getFNC1Character = function() {
		return this.fnc1;
	}, e.prototype.length = function() {
		return this.bytes.length;
	}, e.prototype.haveNCharacters = function(e, t) {
		if (e + t - 1 >= this.bytes.length) return !1;
		for (var n = 0; n < t; n++) if (this.isECI(e + n)) return !1;
		return !0;
	}, e.prototype.charAt = function(e) {
		if (e < 0 || e >= this.length()) throw Error("" + e);
		if (this.isECI(e)) throw Error("value at " + e + " is not a character but an ECI");
		return this.isFNC1(e) ? this.fnc1 : this.bytes[e];
	}, e.prototype.subSequence = function(e, t) {
		if (e < 0 || e > t || t > this.length()) throw Error("" + e);
		for (var n = new F(), r = e; r < t; r++) {
			if (this.isECI(r)) throw Error("value at " + r + " is not a character but an ECI");
			n.append(this.charAt(r));
		}
		return n.toString();
	}, e.prototype.isECI = function(e) {
		if (e < 0 || e >= this.length()) throw Error("" + e);
		return this.bytes[e] > 255 && this.bytes[e] <= 999;
	}, e.prototype.isFNC1 = function(e) {
		if (e < 0 || e >= this.length()) throw Error("" + e);
		return this.bytes[e] === 1e3;
	}, e.prototype.getECIValue = function(e) {
		if (e < 0 || e >= this.length()) throw Error("" + e);
		if (!this.isECI(e)) throw Error("value at " + e + " is not an ECI but a character");
		return this.bytes[e] - 256;
	}, e.prototype.addEdge = function(e, t, n) {
		(e[t][n.encoderIndex] == null || e[t][n.encoderIndex].cachedTotalSize > n.cachedTotalSize) && (e[t][n.encoderIndex] = n);
	}, e.prototype.addEdges = function(e, t, n, r, i, a) {
		var o = e.charAt(r).charCodeAt(0), s = 0, c = t.length();
		t.getPriorityEncoderIndex() >= 0 && (o === a || t.canEncode(o, t.getPriorityEncoderIndex())) && (s = t.getPriorityEncoderIndex(), c = s + 1);
		for (var l = s; l < c; l++) (o === a || t.canEncode(o, l)) && this.addEdge(n, r + 1, new va(o, t, l, i, a));
	}, e.prototype.encodeMinimally = function(e, t, n) {
		var r = e.length, i = new va[r + 1][t.length()]();
		this.addEdges(e, t, i, 0, null, n);
		for (var a = 1; a <= r; a++) {
			for (var o = 0; o < t.length(); o++) i[a][o] != null && a < r && this.addEdges(e, t, i, a, i[a][o], n);
			for (var o = 0; o < t.length(); o++) i[a - 1][o] = null;
		}
		for (var s = -1, c = A.MAX_VALUE, o = 0; o < t.length(); o++) if (i[r][o] != null) {
			var l = i[r][o];
			l.cachedTotalSize < c && (c = l.cachedTotalSize, s = o);
		}
		if (s < 0) throw Error("Failed to encode \"" + e + "\"");
		for (var u = [], d = i[r][s]; d != null;) {
			if (d.isFNC1()) u.unshift(1e3);
			else for (var f = t.encode(d.c, d.encoderIndex), a = f.length - 1; a >= 0; a--) u.unshift(f[a] & 255);
			(d.previous === null ? 0 : d.previous.encoderIndex) !== d.encoderIndex && u.unshift(256 + t.getECIValue(d.encoderIndex)), d = d.previous;
		}
		for (var p = [], a = 0; a < p.length; a++) p[a] = u[a];
		return p;
	}, e;
}(), va = function() {
	function e(e, t, n, r, i) {
		this.c = e, this.encoderSet = t, this.encoderIndex = n, this.previous = r, this.fnc1 = i, this.c = e === i ? 1e3 : e;
		var a = this.isFNC1() ? 1 : t.encode(e, n).length;
		(r === null ? 0 : r.encoderIndex) !== n && (a += ga), r != null && (a += r.cachedTotalSize), this.cachedTotalSize = a;
	}
	return e.prototype.isFNC1 = function() {
		return this.c === 1e3;
	}, e;
}(), ya = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), ba = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, xa = function(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r = n.call(e), i, a = [], o;
	try {
		for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;) a.push(i.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			i && !i.done && (n = r.return) && n.call(r);
		} finally {
			if (o) throw o.error;
		}
	}
	return a;
}, Sa = function() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(xa(arguments[t]));
	return e;
}, X;
(function(e) {
	e[e.ASCII = 0] = "ASCII", e[e.C40 = 1] = "C40", e[e.TEXT = 2] = "TEXT", e[e.X12 = 3] = "X12", e[e.EDF = 4] = "EDF", e[e.B256 = 5] = "B256";
})(X ||= {});
var Ca = /* @__PURE__ */ "!\"#$%&'()*+,-./:;<=>?@[\\]^_".split(""), wa = function() {
	function e() {}
	return e.isExtendedASCII = function(e, t) {
		return e !== t && e >= 128 && e <= 255;
	}, e.isInC40Shift1Set = function(e) {
		return e <= 31;
	}, e.isInC40Shift2Set = function(e, t) {
		var n, r;
		try {
			for (var i = ba(Ca), a = i.next(); !a.done; a = i.next()) if (a.value.charCodeAt(0) === e) return !0;
		} catch (e) {
			n = { error: e };
		} finally {
			try {
				a && !a.done && (r = i.return) && r.call(i);
			} finally {
				if (n) throw n.error;
			}
		}
		return e === t;
	}, e.isInTextShift1Set = function(e) {
		return this.isInC40Shift1Set(e);
	}, e.isInTextShift2Set = function(e, t) {
		return this.isInC40Shift2Set(e, t);
	}, e.encodeHighLevel = function(e, t, n, r) {
		t === void 0 && (t = null), n === void 0 && (n = -1), r === void 0 && (r = 0);
		var i = 0;
		return e.startsWith("[)>05") && e.endsWith("") ? (i = 5, e = e.substring(Zi.length, e.length - 2)) : e.startsWith("[)>06") && e.endsWith("") && (i = 6, e = e.substring(Qi.length, e.length - 2)), decodeURIComponent(escape(String.fromCharCode.apply(String, Sa(this.encode(e, t, n, r, i)))));
	}, e.encode = function(e, t, n, r, i) {
		return this.encodeMinimally(new Da(e, t, n, r, i)).getBytes();
	}, e.addEdge = function(e, t) {
		var n = t.fromPosition + t.characterLength;
		(e[n][t.getEndMode()] === null || e[n][t.getEndMode()].cachedTotalSize > t.cachedTotalSize) && (e[n][t.getEndMode()] = t);
	}, e.getNumberOfC40Words = function(t, n, r, i) {
		for (var a = 0, o = n; o < t.length(); o++) {
			if (t.isECI(o)) return i[0] = 0, 0;
			var s = t.charAt(o);
			if (r && Y.isNativeC40(s) || !r && Y.isNativeText(s)) a++;
			else if (!e.isExtendedASCII(s, t.getFNC1Character())) a += 2;
			else {
				var c = s & 255;
				c >= 128 && (r && Y.isNativeC40(c - 128) || !r && Y.isNativeText(c - 128)) ? a += 3 : a += 4;
			}
			if (a % 3 == 0 || (a - 2) % 3 == 0 && o + 1 === t.length()) return i[0] = o - n + 1, Math.ceil(a / 3);
		}
		return i[0] = 0, 0;
	}, e.addEdges = function(t, n, r, i) {
		var a, o;
		if (t.isECI(r)) this.addEdge(n, new Ea(t, X.ASCII, r, 1, i));
		else {
			var s = t.charAt(r);
			if (i === null || i.getEndMode() !== X.EDF) {
				Y.isDigit(s) && t.haveNCharacters(r, 2) && Y.isDigit(t.charAt(r + 1)) ? this.addEdge(n, new Ea(t, X.ASCII, r, 2, i)) : this.addEdge(n, new Ea(t, X.ASCII, r, 1, i));
				var c = [X.C40, X.TEXT];
				try {
					for (var l = ba(c), u = l.next(); !u.done; u = l.next()) {
						var d = u.value, f = [];
						e.getNumberOfC40Words(t, r, d === X.C40, f) > 0 && this.addEdge(n, new Ea(t, d, r, f[0], i));
					}
				} catch (e) {
					a = { error: e };
				} finally {
					try {
						u && !u.done && (o = l.return) && o.call(l);
					} finally {
						if (a) throw a.error;
					}
				}
				t.haveNCharacters(r, 3) && Y.isNativeX12(t.charAt(r)) && Y.isNativeX12(t.charAt(r + 1)) && Y.isNativeX12(t.charAt(r + 2)) && this.addEdge(n, new Ea(t, X.X12, r, 3, i)), this.addEdge(n, new Ea(t, X.B256, r, 1, i));
			}
			for (var p = 0; p < 3; p++) {
				var m = r + p;
				if (t.haveNCharacters(m, 1) && Y.isNativeEDIFACT(t.charAt(m))) this.addEdge(n, new Ea(t, X.EDF, r, p + 1, i));
				else break;
			}
			p === 3 && t.haveNCharacters(r, 4) && Y.isNativeEDIFACT(t.charAt(r + 3)) && this.addEdge(n, new Ea(t, X.EDF, r, 4, i));
		}
	}, e.encodeMinimally = function(e) {
		var t = e.length(), n = Array(t + 1).fill(null).map(function() {
			return [
				,
				,
				,
				,
				,
				,
			].fill(0);
		});
		this.addEdges(e, n, 0, null);
		for (var r = 1; r <= t; r++) {
			for (var i = 0; i < 6; i++) n[r][i] !== null && r < t && this.addEdges(e, n, r, n[r][i]);
			for (var i = 0; i < 6; i++) n[r - 1][i] = null;
		}
		for (var a = -1, o = A.MAX_VALUE, i = 0; i < 6; i++) if (n[t][i] !== null) {
			var s = n[t][i], c = i >= 1 && i <= 3 ? s.cachedTotalSize + 1 : s.cachedTotalSize;
			c < o && (o = c, a = i);
		}
		if (a < 0) throw Error("Failed to encode \"" + e + "\"");
		return new Ta(n[t][a]);
	}, e;
}(), Ta = function() {
	function e(e) {
		var t = e.input, n = 0, r = [], i = [], a = [];
		(e.mode === X.C40 || e.mode === X.TEXT || e.mode === X.X12) && e.getEndMode() !== X.ASCII && (n += this.prepend(Ea.getBytes(254), r));
		for (var o = e; o !== null;) n += this.prepend(o.getDataBytes(), r), (o.previous === null || o.getPreviousStartMode() !== o.getMode()) && (o.getMode() === X.B256 && (n <= 249 ? (r.unshift(n), n++) : (r.unshift(n % 250), r.unshift(n / 250 + 249), n += 2), i.push(r.length), a.push(n)), this.prepend(o.getLatchBytes(), r), n = 0), o = o.previous;
		t.getMacroId() === 5 ? n += this.prepend(Ea.getBytes(236), r) : t.getMacroId() === 6 && (n += this.prepend(Ea.getBytes(237), r)), t.getFNC1Character() > 0 && (n += this.prepend(Ea.getBytes(232), r));
		for (var s = 0; s < i.length; s++) this.applyRandomPattern(r, r.length - i[s], a[s]);
		var c = e.getMinSymbolSize(r.length);
		for (r.length < c && r.push(129); r.length < c;) r.push(this.randomize253State(r.length + 1));
		this.bytes = new Uint8Array(r.length);
		for (var s = 0; s < this.bytes.length; s++) this.bytes[s] = r[s];
	}
	return e.prototype.prepend = function(e, t) {
		for (var n = e.length - 1; n >= 0; n--) t.unshift(e[n]);
		return e.length;
	}, e.prototype.randomize253State = function(e) {
		var t = 129 + (149 * e % 253 + 1);
		return t <= 254 ? t : t - 254;
	}, e.prototype.applyRandomPattern = function(e, t, n) {
		for (var r = 0; r < n; r++) {
			var i = t + r, a = (e[i] & 255) + (149 * (i + 1) % 255 + 1);
			e[i] = a <= 255 ? a : a - 256;
		}
	}, e.prototype.getBytes = function() {
		return this.bytes;
	}, e;
}(), Ea = function() {
	function e(e, t, n, r, i) {
		if (this.input = e, this.mode = t, this.fromPosition = n, this.characterLength = r, this.previous = i, this.allCodewordCapacities = [
			3,
			5,
			8,
			10,
			12,
			16,
			18,
			22,
			30,
			32,
			36,
			44,
			49,
			62,
			86,
			114,
			144,
			174,
			204,
			280,
			368,
			456,
			576,
			696,
			816,
			1050,
			1304,
			1558
		], this.squareCodewordCapacities = [
			3,
			5,
			8,
			12,
			18,
			22,
			30,
			36,
			44,
			62,
			86,
			114,
			144,
			174,
			204,
			280,
			368,
			456,
			576,
			696,
			816,
			1050,
			1304,
			1558
		], this.rectangularCodewordCapacities = [
			5,
			10,
			16,
			33,
			32,
			49
		], !(n + r <= e.length())) throw Error("Invalid edge");
		var a = i === null ? 0 : i.cachedTotalSize, o = this.getPreviousMode();
		switch (t) {
			case X.ASCII:
				a++, (e.isECI(n) || wa.isExtendedASCII(e.charAt(n), e.getFNC1Character())) && a++, (o === X.C40 || o === X.TEXT || o === X.X12) && a++;
				break;
			case X.B256:
				a++, o === X.B256 ? this.getB256Size() === 250 && a++ : a++, o === X.ASCII ? a++ : (o === X.C40 || o === X.TEXT || o === X.X12) && (a += 2);
				break;
			case X.C40:
			case X.TEXT:
			case X.X12:
				t === X.X12 ? a += 2 : a += wa.getNumberOfC40Words(e, n, t === X.C40, []) * 2, o === X.ASCII || o === X.B256 ? a++ : o !== t && (o === X.C40 || o === X.TEXT || o === X.X12) && (a += 2);
				break;
			case X.EDF: a += 3, o === X.ASCII || o === X.B256 ? a++ : (o === X.C40 || o === X.TEXT || o === X.X12) && (a += 2);
		}
		this.cachedTotalSize = a;
	}
	return e.prototype.getB256Size = function() {
		for (var e = 0, t = this; t !== null && t.mode === X.B256 && e <= 250;) e++, t = t.previous;
		return e;
	}, e.prototype.getPreviousStartMode = function() {
		return this.previous === null ? X.ASCII : this.previous.mode;
	}, e.prototype.getPreviousMode = function() {
		return this.previous === null ? X.ASCII : this.previous.getEndMode();
	}, e.prototype.getEndMode = function() {
		if (this.mode === X.EDF) {
			if (this.characterLength < 4) return X.ASCII;
			var e = this.getLastASCII();
			if (e > 0 && this.getCodewordsRemaining(this.cachedTotalSize + e) <= 2 - e) return X.ASCII;
		}
		if (this.mode === X.C40 || this.mode === X.TEXT || this.mode === X.X12) {
			if (this.fromPosition + this.characterLength >= this.input.length() && this.getCodewordsRemaining(this.cachedTotalSize) === 0) return X.ASCII;
			var e = this.getLastASCII();
			if (e === 1 && this.getCodewordsRemaining(this.cachedTotalSize + 1) === 0) return X.ASCII;
		}
		return this.mode;
	}, e.prototype.getMode = function() {
		return this.mode;
	}, e.prototype.getLastASCII = function() {
		var e = this.input.length(), t = this.fromPosition + this.characterLength;
		return e - t > 4 || t >= e ? 0 : e - t === 1 ? +!wa.isExtendedASCII(this.input.charAt(t), this.input.getFNC1Character()) : e - t === 2 ? wa.isExtendedASCII(this.input.charAt(t), this.input.getFNC1Character()) || wa.isExtendedASCII(this.input.charAt(t + 1), this.input.getFNC1Character()) ? 0 : Y.isDigit(this.input.charAt(t)) && Y.isDigit(this.input.charAt(t + 1)) ? 1 : 2 : e - t === 3 ? Y.isDigit(this.input.charAt(t)) && Y.isDigit(this.input.charAt(t + 1)) && !wa.isExtendedASCII(this.input.charAt(t + 2), this.input.getFNC1Character()) || Y.isDigit(this.input.charAt(t + 1)) && Y.isDigit(this.input.charAt(t + 2)) && !wa.isExtendedASCII(this.input.charAt(t), this.input.getFNC1Character()) ? 2 : 0 : Y.isDigit(this.input.charAt(t)) && Y.isDigit(this.input.charAt(t + 1)) && Y.isDigit(this.input.charAt(t + 2)) && Y.isDigit(this.input.charAt(t + 3)) ? 2 : 0;
	}, e.prototype.getMinSymbolSize = function(e) {
		var t, n, r, i, a, o;
		switch (this.input.getShapeHint()) {
			case 1:
				try {
					for (var s = ba(this.squareCodewordCapacities), c = s.next(); !c.done; c = s.next()) {
						var l = c.value;
						if (l >= e) return l;
					}
				} catch (e) {
					t = { error: e };
				} finally {
					try {
						c && !c.done && (n = s.return) && n.call(s);
					} finally {
						if (t) throw t.error;
					}
				}
				break;
			case 2: try {
				for (var u = ba(this.rectangularCodewordCapacities), d = u.next(); !d.done; d = u.next()) {
					var l = d.value;
					if (l >= e) return l;
				}
			} catch (e) {
				r = { error: e };
			} finally {
				try {
					d && !d.done && (i = u.return) && i.call(u);
				} finally {
					if (r) throw r.error;
				}
			}
		}
		try {
			for (var f = ba(this.allCodewordCapacities), p = f.next(); !p.done; p = f.next()) {
				var l = p.value;
				if (l >= e) return l;
			}
		} catch (e) {
			a = { error: e };
		} finally {
			try {
				p && !p.done && (o = f.return) && o.call(f);
			} finally {
				if (a) throw a.error;
			}
		}
		return this.allCodewordCapacities[this.allCodewordCapacities.length - 1];
	}, e.prototype.getCodewordsRemaining = function(e) {
		return this.getMinSymbolSize(e) - e;
	}, e.getBytes = function(e, t) {
		var n = new Uint8Array(t ? 2 : 1);
		return n[0] = e, t && (n[1] = t), n;
	}, e.prototype.setC40Word = function(e, t, n, r, i) {
		var a = 1600 * (n & 255) + 40 * (r & 255) + (i & 255) + 1;
		e[t] = a / 256, e[t + 1] = a % 256;
	}, e.prototype.getX12Value = function(e) {
		return e === 13 ? 0 : e === 42 ? 1 : e === 62 ? 2 : e === 32 ? 3 : e >= 48 && e <= 57 ? e - 44 : e >= 65 && e <= 90 ? e - 51 : e;
	}, e.prototype.getX12Words = function() {
		if (this.characterLength % 3 != 0) throw Error("X12 words must be a multiple of 3");
		for (var e = new Uint8Array(this.characterLength / 3 * 2), t = 0; t < e.length; t += 2) this.setC40Word(e, t, this.getX12Value(this.input.charAt(this.fromPosition + t / 2 * 3)), this.getX12Value(this.input.charAt(this.fromPosition + t / 2 * 3 + 1)), this.getX12Value(this.input.charAt(this.fromPosition + t / 2 * 3 + 2)));
		return e;
	}, e.prototype.getShiftValue = function(e, t, n) {
		return t && wa.isInC40Shift1Set(e) || !t && wa.isInTextShift1Set(e) ? 0 : t && wa.isInC40Shift2Set(e, n) || !t && wa.isInTextShift2Set(e, n) ? 1 : 2;
	}, e.prototype.getC40Value = function(e, t, n, r) {
		if (n === r) {
			if (t !== 2) throw Error("FNC1 cannot be used in C40 shift 2");
			return 27;
		}
		return e ? n <= 31 ? n : n === 32 ? 3 : n <= 47 ? n - 33 : n <= 57 ? n - 44 : n <= 64 ? n - 43 : n <= 90 ? n - 51 : n <= 95 ? n - 69 : n <= 127 ? n - 96 : n : n === 0 ? 0 : t === 0 && n <= 3 ? n - 1 : t === 1 && n <= 31 ? n : n === 32 ? 3 : n >= 33 && n <= 47 ? n - 33 : n >= 48 && n <= 57 ? n - 44 : n >= 58 && n <= 64 ? n - 43 : n >= 65 && n <= 90 ? n - 64 : n >= 91 && n <= 95 ? n - 69 : n === 96 ? 0 : n >= 97 && n <= 122 ? n - 83 : n >= 123 && n <= 127 ? n - 96 : n;
	}, e.prototype.getC40Words = function(e, t) {
		for (var n = [], r = 0; r < this.characterLength; r++) {
			var i = this.input.charAt(this.fromPosition + r);
			if (e && Y.isNativeC40(i) || !e && Y.isNativeText(i)) n.push(this.getC40Value(e, 0, i, t));
			else if (wa.isExtendedASCII(i, t)) {
				var a = (i & 255) - 128;
				if (e && Y.isNativeC40(a) || !e && Y.isNativeText(a)) n.push(1), n.push(30), n.push(this.getC40Value(e, 0, a, t));
				else {
					n.push(1), n.push(30);
					var o = this.getShiftValue(a, e, t);
					n.push(o), n.push(this.getC40Value(e, o, a, t));
				}
			} else {
				var o = this.getShiftValue(i, e, t);
				n.push(o), n.push(this.getC40Value(e, o, i, t));
			}
		}
		if (n.length % 3 != 0) {
			if ((n.length - 2) % 3 != 0 || this.fromPosition + this.characterLength !== this.input.length()) throw Error("C40 words must be a multiple of 3");
			n.push(0);
		}
		for (var s = new Uint8Array(n.length / 3 * 2), c = 0, r = 0; r < n.length; r += 3) this.setC40Word(s, c, n[r] & 255, n[r + 1] & 255, n[r + 2] & 255), c += 2;
		return s;
	}, e.prototype.getEDFBytes = function() {
		for (var e = Math.ceil(this.characterLength / 4), t = new Uint8Array(e * 3), n = this.fromPosition, r = Math.min(this.fromPosition + this.characterLength - 1, this.input.length() - 1), i = 0; i < e; i += 3) {
			for (var a = [], o = 0; o < 4; o++) n <= r ? a[o] = this.input.charAt(n++) & 63 : a[o] = n === r + 1 ? 31 : 0;
			var s = a[0] << 18;
			s |= a[1] << 12, s |= a[2] << 6, s |= a[3], t[i] = s >> 16 & 255, t[i + 1] = s >> 8 & 255, t[i + 2] = s & 255;
		}
		return t;
	}, e.prototype.getLatchBytes = function() {
		switch (this.getPreviousMode()) {
			case X.ASCII:
			case X.B256:
				switch (this.mode) {
					case X.B256: return e.getBytes(231);
					case X.C40: return e.getBytes(230);
					case X.TEXT: return e.getBytes(239);
					case X.X12: return e.getBytes(238);
					case X.EDF: return e.getBytes(240);
				}
				break;
			case X.C40:
			case X.TEXT:
			case X.X12:
				if (this.mode !== this.getPreviousMode()) switch (this.mode) {
					case X.ASCII: return e.getBytes(254);
					case X.B256: return e.getBytes(254, 231);
					case X.C40: return e.getBytes(254, 230);
					case X.TEXT: return e.getBytes(254, 239);
					case X.X12: return e.getBytes(254, 238);
					case X.EDF: return e.getBytes(254, 240);
				}
				break;
			case X.EDF: if (this.mode !== X.EDF) throw Error("Cannot switch from EDF to " + this.mode);
		}
		return /* @__PURE__ */ new Uint8Array();
	}, e.prototype.getDataBytes = function() {
		switch (this.mode) {
			case X.ASCII: return this.input.isECI(this.fromPosition) ? e.getBytes(241, this.input.getECIValue(this.fromPosition) + 1) : wa.isExtendedASCII(this.input.charAt(this.fromPosition), this.input.getFNC1Character()) ? e.getBytes(235, this.input.charAt(this.fromPosition) - 127) : this.characterLength === 2 ? e.getBytes(this.input.charAt(this.fromPosition) * 10 + this.input.charAt(this.fromPosition + 1) + 130) : this.input.isFNC1(this.fromPosition) ? e.getBytes(232) : e.getBytes(this.input.charAt(this.fromPosition) + 1);
			case X.B256: return e.getBytes(this.input.charAt(this.fromPosition));
			case X.C40: return this.getC40Words(!0, this.input.getFNC1Character());
			case X.TEXT: return this.getC40Words(!1, this.input.getFNC1Character());
			case X.X12: return this.getX12Words();
			case X.EDF: return this.getEDFBytes();
		}
	}, e;
}(), Da = function(e) {
	ya(t, e);
	function t(t, n, r, i, a) {
		var o = e.call(this, t, n, r) || this;
		return o.shape = i, o.macroId = a, o;
	}
	return t.prototype.getMacroId = function() {
		return this.macroId;
	}, t.prototype.getShapeHint = function() {
		return this.shape;
	}, t;
}(_a);
(function() {
	function e() {}
	return e.prototype.encode = function(e, t, n, r, i) {
		if (i === void 0 && (i = null), e.trim() === "") throw Error("Found empty contents");
		if (t !== L.DATA_MATRIX) throw Error("Can only encode DATA_MATRIX, but got " + t);
		if (n < 0 || r < 0) throw Error("Requested dimensions can't be negative: " + n + "x" + r);
		var a = 0, o = null, s = null;
		if (i != null) {
			var c = i.get(q.DATA_MATRIX_SHAPE);
			c != null && (a = c);
			var l = i.get(q.MIN_SIZE);
			l != null && (o = l);
			var u = i.get(q.MAX_SIZE);
			u != null && (s = u);
		}
		var d;
		if (i != null && i.has(q.DATA_MATRIX_COMPACT) && i.get(q.DATA_MATRIX_COMPACT).toString()) {
			var f = i.has(q.GS1_FORMAT) && !!i.get(q.GS1_FORMAT).toString(), p = null;
			i.has(q.CHARACTER_SET) && (p = Hi.forName(i.get(q.CHARACTER_SET).toString())), d = wa.encodeHighLevel(e, p, f ? 29 : -1, a);
		} else {
			var m = i != null && i.has(q.FORCE_C40) && !!i.get(q.FORCE_C40).toString();
			d = Y.encodeHighLevel(e, a, o, s, m);
		}
		var h = J.lookup(d.length, a, o, s, !0), g = new Wi($i.encodeECC200(d, h), h.getSymbolDataWidth(), h.getSymbolDataHeight());
		return g.place(), this.encodeLowLevel(g, h, n, r);
	}, e.prototype.encodeLowLevel = function(e, t, n, r) {
		for (var i = t.getSymbolDataWidth(), a = t.getSymbolDataHeight(), o = new Ai(t.getSymbolWidth(), t.getSymbolHeight()), s = 0, c = 0; c < a; c++) {
			var l = void 0;
			if (c % t.matrixHeight === 0) {
				l = 0;
				for (var u = 0; u < t.getSymbolWidth(); u++) o.setBoolean(l, s, u % 2 == 0), l++;
				s++;
			}
			l = 0;
			for (var u = 0; u < i; u++) u % t.matrixWidth === 0 && (o.setBoolean(l, s, !0), l++), o.setBoolean(l, s, e.getBit(u, c)), l++, u % t.matrixWidth === t.matrixWidth - 1 && (o.setBoolean(l, s, c % 2 == 0), l++);
			if (s++, c % t.matrixHeight === t.matrixHeight - 1) {
				l = 0;
				for (var u = 0; u < t.getSymbolWidth(); u++) o.setBoolean(l, s, !0), l++;
				s++;
			}
		}
		return this.convertByteMatrixToBitMatrix(o, n, r);
	}, e.prototype.convertByteMatrixToBitMatrix = function(e, t, n) {
		var r = e.getWidth(), i = e.getHeight(), a = Math.max(t, r), o = Math.max(n, i), s = Math.min(a / r, o / i), c = (a - r * s) / 2, l = (o - i * s) / 2, u;
		n < i || t < r ? (c = 0, l = 0, u = new ue(r, i)) : u = new ue(t, n), u.clear();
		for (var d = 0, f = l; d < i; d++, f += s) for (var p = 0, m = c; p < r; p++, m += s) e.get(p, d) === 1 && u.setRegion(m, f, s, s);
		return u;
	}, e;
})();
// node_modules/@zxing/library/esm/core/aztec/encoder/AztecCode.js
var Oa = function() {
	function e() {}
	return e.prototype.isCompact = function() {
		return this.compact;
	}, e.prototype.setCompact = function(e) {
		this.compact = e;
	}, e.prototype.getSize = function() {
		return this.size;
	}, e.prototype.setSize = function(e) {
		this.size = e;
	}, e.prototype.getLayers = function() {
		return this.layers;
	}, e.prototype.setLayers = function(e) {
		this.layers = e;
	}, e.prototype.getCodeWords = function() {
		return this.codeWords;
	}, e.prototype.setCodeWords = function(e) {
		this.codeWords = e;
	}, e.prototype.getMatrix = function() {
		return this.matrix;
	}, e.prototype.setMatrix = function(e) {
		this.matrix = e;
	}, e;
}(), ka = function() {
	function e() {}
	return e.singletonList = function(e) {
		return [e];
	}, e.min = function(e, t) {
		return e.sort(t)[0];
	}, e;
}(), Aa = function() {
	function e(e) {
		this.previous = e;
	}
	return e.prototype.getPrevious = function() {
		return this.previous;
	}, e;
}(), ja = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Ma = function(e) {
	ja(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.value = n, i.bitCount = r, i;
	}
	return t.prototype.appendTo = function(e, t) {
		e.appendBits(this.value, this.bitCount);
	}, t.prototype.add = function(e, n) {
		return new t(this, e, n);
	}, t.prototype.addBinaryShift = function(e, n) {
		return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"), new t(this, e, n);
	}, t.prototype.toString = function() {
		var e = this.value & (1 << this.bitCount) - 1;
		return e |= 1 << this.bitCount, "<" + A.toBinaryString(e | 1 << this.bitCount).substring(1) + ">";
	}, t;
}(Aa), Na = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Pa = function(e) {
	Na(t, e);
	function t(t, n, r) {
		var i = e.call(this, t, 0, 0) || this;
		return i.binaryShiftStart = n, i.binaryShiftByteCount = r, i;
	}
	return t.prototype.appendTo = function(e, t) {
		for (var n = 0; n < this.binaryShiftByteCount; n++) (n === 0 || n === 31 && this.binaryShiftByteCount <= 62) && (e.appendBits(31, 5), this.binaryShiftByteCount > 62 ? e.appendBits(this.binaryShiftByteCount - 31, 16) : n === 0 ? e.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : e.appendBits(this.binaryShiftByteCount - 31, 5)), e.appendBits(t[this.binaryShiftStart + n], 8);
	}, t.prototype.addBinaryShift = function(e, n) {
		return new t(this, e, n);
	}, t.prototype.toString = function() {
		return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
	}, t;
}(Ma);
// node_modules/@zxing/library/esm/core/aztec/encoder/TokenHelpers.js
function Fa(e, t, n) {
	return new Pa(e, t, n);
}
function Ia(e, t, n) {
	return new Ma(e, t, n);
}
// node_modules/@zxing/library/esm/core/aztec/encoder/EncoderConstants.js
var La = [
	"UPPER",
	"LOWER",
	"DIGIT",
	"MIXED",
	"PUNCT"
], Ra = new Ma(null, 0, 0), za = [
	Int32Array.from([
		0,
		327708,
		327710,
		327709,
		656318
	]),
	Int32Array.from([
		590318,
		0,
		327710,
		327709,
		656318
	]),
	Int32Array.from([
		262158,
		590300,
		0,
		590301,
		932798
	]),
	Int32Array.from([
		327709,
		327708,
		656318,
		0,
		327710
	]),
	Int32Array.from([
		327711,
		656380,
		656382,
		656381,
		0
	])
], Ba = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function Va(e) {
	var t, n;
	try {
		for (var r = Ba(e), i = r.next(); !i.done; i = r.next()) {
			var a = i.value;
			k.fill(a, -1);
		}
	} catch (e) {
		t = { error: e };
	} finally {
		try {
			i && !i.done && (n = r.return) && n.call(r);
		} finally {
			if (t) throw t.error;
		}
	}
	return e[0][4] = 0, e[1][4] = 0, e[1][0] = 28, e[3][4] = 0, e[2][4] = 0, e[2][0] = 15, e;
}
var Ha = Va(k.createInt32Array(6, 6)), Ua = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Wa = function() {
	function e(e, t, n, r) {
		this.token = e, this.mode = t, this.binaryShiftByteCount = n, this.bitCount = r;
	}
	return e.prototype.getMode = function() {
		return this.mode;
	}, e.prototype.getToken = function() {
		return this.token;
	}, e.prototype.getBinaryShiftByteCount = function() {
		return this.binaryShiftByteCount;
	}, e.prototype.getBitCount = function() {
		return this.bitCount;
	}, e.prototype.latchAndAppend = function(t, n) {
		var r = this.bitCount, i = this.token;
		if (t !== this.mode) {
			var a = za[this.mode][t];
			i = Ia(i, a & 65535, a >> 16), r += a >> 16;
		}
		var o = t === 2 ? 4 : 5;
		return i = Ia(i, n, o), new e(i, t, 0, r + o);
	}, e.prototype.shiftAndAppend = function(t, n) {
		var r = this.token, i = this.mode === 2 ? 4 : 5;
		return r = Ia(r, Ha[this.mode][t], i), r = Ia(r, n, 5), new e(r, this.mode, 0, this.bitCount + i + 5);
	}, e.prototype.addBinaryShiftChar = function(t) {
		var n = this.token, r = this.mode, i = this.bitCount;
		if (this.mode === 4 || this.mode === 2) {
			var a = za[r][0];
			n = Ia(n, a & 65535, a >> 16), i += a >> 16, r = 0;
		}
		var o = this.binaryShiftByteCount === 0 || this.binaryShiftByteCount === 31 ? 18 : this.binaryShiftByteCount === 62 ? 9 : 8, s = new e(n, r, this.binaryShiftByteCount + 1, i + o);
		return s.binaryShiftByteCount === 2078 && (s = s.endBinaryShift(t + 1)), s;
	}, e.prototype.endBinaryShift = function(t) {
		if (this.binaryShiftByteCount === 0) return this;
		var n = this.token;
		return n = Fa(n, t - this.binaryShiftByteCount, this.binaryShiftByteCount), new e(n, this.mode, 0, this.bitCount);
	}, e.prototype.isBetterThanOrEqualTo = function(t) {
		var n = this.bitCount + (za[this.mode][t.mode] >> 16);
		return this.binaryShiftByteCount < t.binaryShiftByteCount ? n += e.calculateBinaryShiftCost(t) - e.calculateBinaryShiftCost(this) : this.binaryShiftByteCount > t.binaryShiftByteCount && t.binaryShiftByteCount > 0 && (n += 10), n <= t.bitCount;
	}, e.prototype.toBitArray = function(e) {
		for (var t, n, r = [], i = this.endBinaryShift(e.length).token; i !== null; i = i.getPrevious()) r.unshift(i);
		var a = new ne();
		try {
			for (var o = Ua(r), s = o.next(); !s.done; s = o.next()) s.value.appendTo(a, e);
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				s && !s.done && (n = o.return) && n.call(o);
			} finally {
				if (t) throw t.error;
			}
		}
		return a;
	}, e.prototype.toString = function() {
		return P.format("%s bits=%d bytes=%d", La[this.mode], this.bitCount, this.binaryShiftByteCount);
	}, e.calculateBinaryShiftCost = function(e) {
		return e.binaryShiftByteCount > 62 ? 21 : e.binaryShiftByteCount > 31 ? 20 : e.binaryShiftByteCount > 0 ? 10 : 0;
	}, e.INITIAL_STATE = new e(Ra, 0, 0, 0), e;
}();
// node_modules/@zxing/library/esm/core/aztec/encoder/CharMap.js
function Ga(e) {
	var t = P.getCharCode(" "), n = P.getCharCode("."), r = P.getCharCode(",");
	e[0][t] = 1;
	for (var i = P.getCharCode("Z"), a = P.getCharCode("A"), o = a; o <= i; o++) e[0][o] = o - a + 2;
	e[1][t] = 1;
	for (var s = P.getCharCode("z"), c = P.getCharCode("a"), o = c; o <= s; o++) e[1][o] = o - c + 2;
	e[2][t] = 1;
	for (var l = P.getCharCode("9"), u = P.getCharCode("0"), o = u; o <= l; o++) e[2][o] = o - u + 2;
	e[2][r] = 12, e[2][n] = 13;
	for (var d = /* @__PURE__ */ "\0 \x07\b	\n\v\f\r\x1B@\\^_`|~".split(""), f = 0; f < d.length; f++) e[3][P.getCharCode(d[f])] = f;
	for (var p = /* @__PURE__ */ "\0\r\0\0\0\0!'#$%&'()*+,-./:;<=>?[]{}".split(""), f = 0; f < p.length; f++) P.getCharCode(p[f]) > 0 && (e[4][P.getCharCode(p[f])] = f);
	return e;
}
var Ka = Ga(k.createInt32Array(5, 256)), qa = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ja = function() {
	function e(e) {
		this.text = e;
	}
	return e.prototype.encode = function() {
		for (var t = P.getCharCode(" "), n = P.getCharCode("\n"), r = ka.singletonList(Wa.INITIAL_STATE), i = 0; i < this.text.length; i++) {
			var a = void 0, o = i + 1 < this.text.length ? this.text[i + 1] : 0;
			switch (this.text[i]) {
				case P.getCharCode("\r"):
					a = o === n ? 2 : 0;
					break;
				case P.getCharCode("."):
					a = o === t ? 3 : 0;
					break;
				case P.getCharCode(","):
					a = o === t ? 4 : 0;
					break;
				case P.getCharCode(":"):
					a = o === t ? 5 : 0;
					break;
				default: a = 0;
			}
			a > 0 ? (r = e.updateStateListForPair(r, i, a), i++) : r = this.updateStateListForChar(r, i);
		}
		return ka.min(r, function(e, t) {
			return e.getBitCount() - t.getBitCount();
		}).toBitArray(this.text);
	}, e.prototype.updateStateListForChar = function(t, n) {
		var r, i, a = [];
		try {
			for (var o = qa(t), s = o.next(); !s.done; s = o.next()) {
				var c = s.value;
				this.updateStateForChar(c, n, a);
			}
		} catch (e) {
			r = { error: e };
		} finally {
			try {
				s && !s.done && (i = o.return) && i.call(o);
			} finally {
				if (r) throw r.error;
			}
		}
		return e.simplifyStates(a);
	}, e.prototype.updateStateForChar = function(e, t, n) {
		for (var r = this.text[t] & 255, i = Ka[e.getMode()][r] > 0, a = null, o = 0; o <= 4; o++) {
			var s = Ka[o][r];
			if (s > 0) {
				if (a ??= e.endBinaryShift(t), !i || o === e.getMode() || o === 2) {
					var c = a.latchAndAppend(o, s);
					n.push(c);
				}
				if (!i && Ha[e.getMode()][o] >= 0) {
					var l = a.shiftAndAppend(o, s);
					n.push(l);
				}
			}
		}
		if (e.getBinaryShiftByteCount() > 0 || Ka[e.getMode()][r] === 0) {
			var u = e.addBinaryShiftChar(t);
			n.push(u);
		}
	}, e.updateStateListForPair = function(e, t, n) {
		var r, i, a = [];
		try {
			for (var o = qa(e), s = o.next(); !s.done; s = o.next()) {
				var c = s.value;
				this.updateStateForPair(c, t, n, a);
			}
		} catch (e) {
			r = { error: e };
		} finally {
			try {
				s && !s.done && (i = o.return) && i.call(o);
			} finally {
				if (r) throw r.error;
			}
		}
		return this.simplifyStates(a);
	}, e.updateStateForPair = function(e, t, n, r) {
		var i = e.endBinaryShift(t);
		if (r.push(i.latchAndAppend(4, n)), e.getMode() !== 4 && r.push(i.shiftAndAppend(4, n)), n === 3 || n === 4) {
			var a = i.latchAndAppend(2, 16 - n).latchAndAppend(2, 1);
			r.push(a);
		}
		if (e.getBinaryShiftByteCount() > 0) {
			var o = e.addBinaryShiftChar(t).addBinaryShiftChar(t + 1);
			r.push(o);
		}
	}, e.simplifyStates = function(e) {
		var t, n, r, i, a = [];
		try {
			for (var o = qa(e), s = o.next(); !s.done; s = o.next()) {
				var c = s.value, l = !0, u = function(e) {
					if (e.isBetterThanOrEqualTo(c)) return l = !1, "break";
					c.isBetterThanOrEqualTo(e) && (a = a.filter(function(t) {
						return t !== e;
					}));
				};
				try {
					for (var d = (r = void 0, qa(a)), f = d.next(); !f.done; f = d.next()) {
						var p = f.value;
						if (u(p) === "break") break;
					}
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						f && !f.done && (i = d.return) && i.call(d);
					} finally {
						if (r) throw r.error;
					}
				}
				l && a.push(c);
			}
		} catch (e) {
			t = { error: e };
		} finally {
			try {
				s && !s.done && (n = o.return) && n.call(o);
			} finally {
				if (t) throw t.error;
			}
		}
		return a;
	}, e;
}(), Ya = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Xa = function() {
	function e() {}
	return e.encodeBytes = function(t) {
		return e.encode(t, e.DEFAULT_EC_PERCENT, e.DEFAULT_AZTEC_LAYERS);
	}, e.encode = function(t, n, r) {
		var i = new Ja(t).encode(), a = A.truncDivision(i.getSize() * n, 100) + 11, o = i.getSize() + a, s, c, l, u, d;
		if (r !== e.DEFAULT_AZTEC_LAYERS) {
			if (s = r < 0, c = Math.abs(r), c > (s ? e.MAX_NB_BITS_COMPACT : e.MAX_NB_BITS)) throw new b(P.format("Illegal value %s for layers", r));
			l = e.totalBitsInLayer(c, s), u = e.WORD_SIZE[c];
			var f = l - l % u;
			if (d = e.stuffBits(i, u), d.getSize() + a > f || s && d.getSize() > u * 64) throw new b("Data to large for user specified layer");
		} else {
			u = 0, d = null;
			for (var p = 0;; p++) {
				if (p > e.MAX_NB_BITS) throw new b("Data too large for an Aztec code");
				if (s = p <= 3, c = s ? p + 1 : p, l = e.totalBitsInLayer(c, s), !(o > l)) {
					(d == null || u !== e.WORD_SIZE[c]) && (u = e.WORD_SIZE[c], d = e.stuffBits(i, u));
					var f = l - l % u;
					if (!(s && d.getSize() > u * 64) && d.getSize() + a <= f) break;
				}
			}
		}
		var m = e.generateCheckWords(d, l, u), h = d.getSize() / u, g = e.generateModeMessage(s, c, h), _ = (s ? 11 : 14) + c * 4, v = new Int32Array(_), y;
		if (s) {
			y = _;
			for (var p = 0; p < v.length; p++) v[p] = p;
		} else {
			y = _ + 1 + 2 * A.truncDivision(A.truncDivision(_, 2) - 1, 15);
			for (var x = A.truncDivision(_, 2), S = A.truncDivision(y, 2), p = 0; p < x; p++) {
				var C = p + A.truncDivision(p, 15);
				v[x - p - 1] = S - C - 1, v[x + p] = S + C + 1;
			}
		}
		for (var w = new ue(y), p = 0, T = 0; p < c; p++) {
			for (var E = (c - p) * 4 + (s ? 9 : 12), D = 0; D < E; D++) for (var ee = D * 2, O = 0; O < 2; O++) m.get(T + ee + O) && w.set(v[p * 2 + O], v[p * 2 + D]), m.get(T + E * 2 + ee + O) && w.set(v[p * 2 + D], v[_ - 1 - p * 2 - O]), m.get(T + E * 4 + ee + O) && w.set(v[_ - 1 - p * 2 - O], v[_ - 1 - p * 2 - D]), m.get(T + E * 6 + ee + O) && w.set(v[_ - 1 - p * 2 - D], v[p * 2 + O]);
			T += E * 8;
		}
		if (e.drawModeMessage(w, s, y, g), s) e.drawBullsEye(w, A.truncDivision(y, 2), 5);
		else {
			e.drawBullsEye(w, A.truncDivision(y, 2), 7);
			for (var p = 0, D = 0; p < A.truncDivision(_, 2) - 1; p += 15, D += 16) for (var O = A.truncDivision(y, 2) & 1; O < y; O += 2) w.set(A.truncDivision(y, 2) - D, O), w.set(A.truncDivision(y, 2) + D, O), w.set(O, A.truncDivision(y, 2) - D), w.set(O, A.truncDivision(y, 2) + D);
		}
		var te = new Oa();
		return te.setCompact(s), te.setSize(y), te.setLayers(c), te.setCodeWords(h), te.setMatrix(w), te;
	}, e.drawBullsEye = function(e, t, n) {
		for (var r = 0; r < n; r += 2) for (var i = t - r; i <= t + r; i++) e.set(i, t - r), e.set(i, t + r), e.set(t - r, i), e.set(t + r, i);
		e.set(t - n, t - n), e.set(t - n + 1, t - n), e.set(t - n, t - n + 1), e.set(t + n, t - n), e.set(t + n, t - n + 1), e.set(t + n, t + n - 1);
	}, e.generateModeMessage = function(t, n, r) {
		var i = new ne();
		return t ? (i.appendBits(n - 1, 2), i.appendBits(r - 1, 6), i = e.generateCheckWords(i, 28, 4)) : (i.appendBits(n - 1, 5), i.appendBits(r - 1, 11), i = e.generateCheckWords(i, 40, 4)), i;
	}, e.drawModeMessage = function(e, t, n, r) {
		var i = A.truncDivision(n, 2);
		if (t) for (var a = 0; a < 7; a++) {
			var o = i - 3 + a;
			r.get(a) && e.set(o, i - 5), r.get(a + 7) && e.set(i + 5, o), r.get(20 - a) && e.set(o, i + 5), r.get(27 - a) && e.set(i - 5, o);
		}
		else for (var a = 0; a < 10; a++) {
			var o = i - 5 + a + A.truncDivision(a, 5);
			r.get(a) && e.set(o, i - 7), r.get(a + 10) && e.set(i + 7, o), r.get(29 - a) && e.set(o, i + 7), r.get(39 - a) && e.set(i - 7, o);
		}
	}, e.generateCheckWords = function(t, n, r) {
		var i, a, o = t.getSize() / r, s = new Di(e.getGF(r)), c = A.truncDivision(n, r), l = e.bitsToWords(t, r, c);
		s.encode(l, c - o);
		var u = n % r, d = new ne();
		d.appendBits(0, u);
		try {
			for (var f = Ya(Array.from(l)), p = f.next(); !p.done; p = f.next()) {
				var m = p.value;
				d.appendBits(m, r);
			}
		} catch (e) {
			i = { error: e };
		} finally {
			try {
				p && !p.done && (a = f.return) && a.call(f);
			} finally {
				if (i) throw i.error;
			}
		}
		return d;
	}, e.bitsToWords = function(e, t, n) {
		for (var r = new Int32Array(n), i = 0, a = e.getSize() / t; i < a; i++) {
			for (var o = 0, s = 0; s < t; s++) o |= e.get(i * t + s) ? 1 << t - s - 1 : 0;
			r[i] = o;
		}
		return r;
	}, e.getGF = function(e) {
		switch (e) {
			case 4: return Ie.AZTEC_PARAM;
			case 6: return Ie.AZTEC_DATA_6;
			case 8: return Ie.AZTEC_DATA_8;
			case 10: return Ie.AZTEC_DATA_10;
			case 12: return Ie.AZTEC_DATA_12;
			default: throw new b("Unsupported word size " + e);
		}
	}, e.stuffBits = function(e, t) {
		for (var n = new ne(), r = e.getSize(), i = (1 << t) - 2, a = 0; a < r; a += t) {
			for (var o = 0, s = 0; s < t; s++) (a + s >= r || e.get(a + s)) && (o |= 1 << t - 1 - s);
			(o & i) === i ? (n.appendBits(o & i, t), a--) : (o & i) === 0 ? (n.appendBits(o | 1, t), a--) : n.appendBits(o, t);
		}
		return n;
	}, e.totalBitsInLayer = function(e, t) {
		return ((t ? 88 : 112) + 16 * e) * e;
	}, e.DEFAULT_EC_PERCENT = 33, e.DEFAULT_AZTEC_LAYERS = 0, e.MAX_NB_BITS = 32, e.MAX_NB_BITS_COMPACT = 4, e.WORD_SIZE = Int32Array.from([
		4,
		6,
		6,
		8,
		8,
		8,
		8,
		8,
		8,
		10,
		10,
		10,
		10,
		10,
		10,
		10,
		10,
		10,
		10,
		10,
		10,
		10,
		10,
		12,
		12,
		12,
		12,
		12,
		12,
		12,
		12,
		12,
		12
	]), e;
}();
(function() {
	function e() {}
	return e.prototype.encode = function(e, t, n, r) {
		return this.encodeWithHints(e, t, n, r, null);
	}, e.prototype.encodeWithHints = function(t, n, r, i, a) {
		var o = Ui.ISO_8859_1, s = Xa.DEFAULT_EC_PERCENT, c = Xa.DEFAULT_AZTEC_LAYERS;
		return a != null && (a.has(q.CHARACTER_SET) && (o = Hi.forName(a.get(q.CHARACTER_SET).toString())), a.has(q.ERROR_CORRECTION) && (s = A.parseInt(a.get(q.ERROR_CORRECTION).toString())), a.has(q.AZTEC_LAYERS) && (c = A.parseInt(a.get(q.AZTEC_LAYERS).toString()))), e.encodeLayers(t, n, r, i, o, s, c);
	}, e.encodeLayers = function(t, n, r, i, a, o, s) {
		if (n !== L.AZTEC) throw new b("Can only encode AZTEC, but got " + n);
		var c = Xa.encode(P.getBytes(t, a), o, s);
		return e.renderResult(c, r, i);
	}, e.renderResult = function(e, t, n) {
		var r = e.getMatrix();
		if (r == null) throw new Be();
		for (var i = r.getWidth(), a = r.getHeight(), o = Math.max(t, i), s = Math.max(n, a), c = Math.min(o / i, s / a), l = (o - i * c) / 2, u = (s - a * c) / 2, d = new ue(o, s), f = 0, p = u; f < a; f++, p += c) for (var m = 0, h = l; m < i; m++, h += c) r.get(m, f) && d.setRegion(h, p, c, c);
		return d;
	}, e;
})();
// node_modules/@zxing/browser/esm/common/HTMLCanvasElementLuminanceSource.js
var Za = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), Qa = function(e) {
	Za(t, e);
	function t(n) {
		var r = e.call(this, n.width, n.height) || this;
		return r.canvas = n, r.tempCanvasElement = null, r.buffer = t.makeBufferFromCanvasImageData(n), r;
	}
	return t.makeBufferFromCanvasImageData = function(e) {
		var n;
		try {
			n = e.getContext("2d", { willReadFrequently: !0 });
		} catch {
			n = e.getContext("2d");
		}
		if (!n) throw Error("Couldn't get canvas context.");
		var r = n.getImageData(0, 0, e.width, e.height);
		return t.toGrayscaleBuffer(r.data, e.width, e.height);
	}, t.toGrayscaleBuffer = function(e, t, n) {
		for (var r = new Uint8ClampedArray(t * n), i = 0, a = 0, o = e.length; i < o; i += 4, a++) {
			var s = void 0;
			if (e[i + 3] === 0) s = 255;
			else {
				var c = e[i], l = e[i + 1], u = e[i + 2];
				s = 306 * c + 601 * l + 117 * u + 512 >> 10;
			}
			r[a] = s;
		}
		return r;
	}, t.prototype.getRow = function(e, t) {
		if (e < 0 || e >= this.getHeight()) throw new b("Requested row is outside the image: " + e);
		var n = this.getWidth(), r = e * n;
		return t === null ? t = this.buffer.slice(r, r + n) : (t.length < n && (t = new Uint8ClampedArray(n)), t.set(this.buffer.slice(r, r + n))), t;
	}, t.prototype.getMatrix = function() {
		return this.buffer;
	}, t.prototype.isCropSupported = function() {
		return !0;
	}, t.prototype.crop = function(t, n, r, i) {
		return e.prototype.crop.call(this, t, n, r, i), this;
	}, t.prototype.isRotateSupported = function() {
		return !0;
	}, t.prototype.rotateCounterClockwise = function() {
		return this.rotate(-90), this;
	}, t.prototype.rotateCounterClockwise45 = function() {
		return this.rotate(-45), this;
	}, t.prototype.invert = function() {
		return new ve(this);
	}, t.prototype.getTempCanvasElement = function() {
		if (this.tempCanvasElement === null) {
			var e = this.canvas.ownerDocument.createElement("canvas");
			e.width = this.canvas.width, e.height = this.canvas.height, this.tempCanvasElement = e;
		}
		return this.tempCanvasElement;
	}, t.prototype.rotate = function(e) {
		var n = this.getTempCanvasElement();
		if (!n) throw Error("Could not create a Canvas element.");
		var r = e * t.DEGREE_TO_RADIANS, i = this.canvas.width, a = this.canvas.height, o = Math.ceil(Math.abs(Math.cos(r)) * i + Math.abs(Math.sin(r)) * a), s = Math.ceil(Math.abs(Math.sin(r)) * i + Math.abs(Math.cos(r)) * a);
		n.width = o, n.height = s;
		var c = n.getContext("2d");
		if (!c) throw Error("Could not create a Canvas Context element.");
		return c.translate(o / 2, s / 2), c.rotate(r), c.drawImage(this.canvas, i / -2, a / -2), this.buffer = t.makeBufferFromCanvasImageData(n), this;
	}, t.DEGREE_TO_RADIANS = Math.PI / 180, t;
}(ge);
// node_modules/@zxing/browser/esm/common/navigator-utils.js
function $a() {
	return typeof navigator < "u";
}
function eo() {
	return $a() && !!navigator.mediaDevices;
}
function to() {
	return !!(eo() && navigator.mediaDevices.enumerateDevices);
}
// node_modules/@zxing/browser/esm/readers/BrowserCodeReader.js
var no = function() {
	return no = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, no.apply(this, arguments);
}, ro = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, io = function(e, t) {
	var n = {
		label: 0,
		sent: function() {
			if (a[0] & 1) throw a[1];
			return a[1];
		},
		trys: [],
		ops: []
	}, r, i, a, o = {
		next: s(0),
		throw: s(1),
		return: s(2)
	};
	return typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(e) {
		return function(t) {
			return c([e, t]);
		};
	}
	function c(o) {
		if (r) throw TypeError("Generator is already executing.");
		for (; n;) try {
			if (r = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a;
			switch (i = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
				case 0:
				case 1:
					a = o;
					break;
				case 4: return n.label++, {
					value: o[1],
					done: !1
				};
				case 5:
					n.label++, i = o[1], o = [0];
					continue;
				case 7:
					o = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (o[0] === 6 || o[0] === 2)) {
						n = 0;
						continue;
					}
					if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
						n.label = o[1];
						break;
					}
					if (o[0] === 6 && n.label < a[1]) {
						n.label = a[1], a = o;
						break;
					}
					if (a && n.label < a[2]) {
						n.label = a[2], n.ops.push(o);
						break;
					}
					a[2] && n.ops.pop(), n.trys.pop();
					continue;
			}
			o = t.call(e, n);
		} catch (e) {
			o = [6, e], i = 0;
		} finally {
			r = a = 0;
		}
		if (o[0] & 5) throw o[1];
		return {
			value: o[0] ? o[1] : void 0,
			done: !0
		};
	}
}, ao = function(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, oo = {
	delayBetweenScanAttempts: 500,
	delayBetweenScanSuccess: 500,
	tryPlayVideoTimeout: 5e3
}, so = function() {
	function e(e, t, n) {
		t === void 0 && (t = /* @__PURE__ */ new Map()), n === void 0 && (n = {}), this.reader = e, this.hints = t, this.options = no(no({}, oo), n);
	}
	return Object.defineProperty(e.prototype, "possibleFormats", {
		set: function(e) {
			this.hints.set(j.POSSIBLE_FORMATS, e);
		},
		enumerable: !1,
		configurable: !0
	}), e.addVideoSource = function(e, t) {
		try {
			e.srcObject = t;
		} catch {
			console.error("got interrupted by new loading request");
		}
	}, e.mediaStreamSetTorch = function(e, t) {
		return ro(this, void 0, void 0, function() {
			return io(this, function(n) {
				switch (n.label) {
					case 0: return [4, e.applyConstraints({ advanced: [{
						fillLightMode: t ? "flash" : "off",
						torch: !!t
					}] })];
					case 1: return n.sent(), [2];
				}
			});
		});
	}, e.mediaStreamIsTorchCompatible = function(t) {
		var n, r, i = t.getVideoTracks();
		try {
			for (var a = ao(i), o = a.next(); !o.done; o = a.next()) {
				var s = o.value;
				if (e.mediaStreamIsTorchCompatibleTrack(s)) return !0;
			}
		} catch (e) {
			n = { error: e };
		} finally {
			try {
				o && !o.done && (r = a.return) && r.call(a);
			} finally {
				if (n) throw n.error;
			}
		}
		return !1;
	}, e.mediaStreamIsTorchCompatibleTrack = function(e) {
		try {
			return "torch" in e.getCapabilities();
		} catch (e) {
			return console.error(e), console.warn("Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available."), !1;
		}
	}, e.isVideoPlaying = function(e) {
		return e.currentTime > 0 && !e.paused && e.readyState > 2;
	}, e.getMediaElement = function(e, t) {
		var n = document.getElementById(e);
		if (!n) throw new v(`element with id '${e}' not found`);
		if (n.nodeName.toLowerCase() !== t.toLowerCase()) throw new v(`element with id '${e}' must be an ${t} element`);
		return n;
	}, e.createVideoElement = function(t) {
		if (t instanceof HTMLVideoElement) return t;
		if (typeof t == "string") return e.getMediaElement(t, "video");
		if (!t && typeof document < "u") {
			var n = document.createElement("video");
			return n.width = 200, n.height = 200, n;
		}
		throw Error("Couldn't get videoElement from videoSource!");
	}, e.prepareImageElement = function(t) {
		if (t instanceof HTMLImageElement) return t;
		if (typeof t == "string") return e.getMediaElement(t, "img");
		if (t === void 0) {
			var n = document.createElement("img");
			return n.width = 200, n.height = 200, n;
		}
		throw Error("Couldn't get imageElement from imageSource!");
	}, e.prepareVideoElement = function(t) {
		var n = e.createVideoElement(t);
		return n.setAttribute("autoplay", "true"), n.setAttribute("muted", "true"), n.setAttribute("playsinline", "true"), n;
	}, e.isImageLoaded = function(e) {
		return !(!e.complete || e.naturalWidth === 0);
	}, e.createBinaryBitmapFromCanvas = function(e) {
		return new x(new he(new Qa(e)));
	}, e.drawImageOnCanvas = function(e, t) {
		e.drawImage(t, 0, 0);
	}, e.getMediaElementDimensions = function(e) {
		if (e instanceof HTMLVideoElement) return {
			height: e.videoHeight,
			width: e.videoWidth
		};
		if (e instanceof HTMLImageElement) return {
			height: e.naturalHeight || e.height,
			width: e.naturalWidth || e.width
		};
		throw Error("Couldn't find the Source's dimensions!");
	}, e.createCaptureCanvas = function(t) {
		if (!t) throw new v("Cannot create a capture canvas without a media element.");
		if (typeof document > "u") throw Error("The page \"Document\" is undefined, make sure you're running in a browser.");
		var n = document.createElement("canvas"), r = e.getMediaElementDimensions(t), i = r.width, a = r.height;
		return n.style.width = i + "px", n.style.height = a + "px", n.width = i, n.height = a, n;
	}, e.tryPlayVideo = function(t) {
		return ro(this, void 0, void 0, function() {
			var n;
			return io(this, function(r) {
				switch (r.label) {
					case 0:
						if (t?.ended) return console.error("Trying to play video that has ended."), [2, !1];
						if (e.isVideoPlaying(t)) return console.warn("Trying to play video that is already playing."), [2, !0];
						r.label = 1;
					case 1: return r.trys.push([
						1,
						3,
						,
						4
					]), [4, t.play()];
					case 2: return r.sent(), [2, !0];
					case 3: return n = r.sent(), console.warn("It was not possible to play the video.", n), [2, !1];
					case 4: return [2];
				}
			});
		});
	}, e.createCanvasFromMediaElement = function(t) {
		var n = e.createCaptureCanvas(t), r = n.getContext("2d");
		if (!r) throw Error("Couldn't find Canvas 2D Context.");
		return e.drawImageOnCanvas(r, t), n;
	}, e.createBinaryBitmapFromMediaElem = function(t) {
		var n = e.createCanvasFromMediaElement(t);
		return e.createBinaryBitmapFromCanvas(n);
	}, e.destroyImageElement = function(e) {
		e.src = "", e.removeAttribute("src"), e = void 0;
	}, e.listVideoInputDevices = function() {
		return ro(this, void 0, void 0, function() {
			var e, t, n, r, i, a, o, s, c, l, u, d;
			return io(this, function(f) {
				switch (f.label) {
					case 0:
						if (!$a()) throw Error("Can't enumerate devices, navigator is not present.");
						if (!to()) throw Error("Can't enumerate devices, method not supported.");
						return [4, navigator.mediaDevices.enumerateDevices()];
					case 1:
						e = f.sent(), t = [];
						try {
							for (n = ao(e), r = n.next(); !r.done; r = n.next()) i = r.value, a = i.kind === "video" ? "videoinput" : i.kind, a === "videoinput" && (o = i.deviceId || i.id, s = i.label || `Video device ${t.length + 1}`, c = i.groupId, l = {
								deviceId: o,
								label: s,
								kind: a,
								groupId: c
							}, t.push(l));
						} catch (e) {
							u = { error: e };
						} finally {
							try {
								r && !r.done && (d = n.return) && d.call(n);
							} finally {
								if (u) throw u.error;
							}
						}
						return [2, t];
				}
			});
		});
	}, e.findDeviceById = function(t) {
		return ro(this, void 0, void 0, function() {
			var n;
			return io(this, function(r) {
				switch (r.label) {
					case 0: return [4, e.listVideoInputDevices()];
					case 1: return n = r.sent(), n ? [2, n.find(function(e) {
						return e.deviceId === t;
					})] : [2];
				}
			});
		});
	}, e.cleanVideoSource = function(e) {
		if (e) {
			try {
				e.srcObject = null;
			} catch {
				e.src = "";
			}
			e && e.removeAttribute("src");
		}
	}, e.releaseAllStreams = function() {
		e.streamTracker.length !== 0 && e.streamTracker.forEach(function(e) {
			e.getTracks().forEach(function(e) {
				return e.stop();
			});
		}), e.streamTracker = [];
	}, e.playVideoOnLoadAsync = function(t, n) {
		return ro(this, void 0, void 0, function() {
			var r;
			return io(this, function(i) {
				switch (i.label) {
					case 0: return [4, e.tryPlayVideo(t)];
					case 1: return r = i.sent(), r ? [2, !0] : [2, new Promise(function(r, i) {
						var a = setTimeout(function() {
							e.isVideoPlaying(t) || (i(!1), t.removeEventListener("canplay", o));
						}, n), o = function() {
							e.tryPlayVideo(t).then(function(e) {
								clearTimeout(a), t.removeEventListener("canplay", o), r(e);
							});
						};
						t.addEventListener("canplay", o);
					})];
				}
			});
		});
	}, e.attachStreamToVideo = function(t, n, r) {
		return r === void 0 && (r = 5e3), ro(this, void 0, void 0, function() {
			var i;
			return io(this, function(a) {
				switch (a.label) {
					case 0: return i = e.prepareVideoElement(n), e.addVideoSource(i, t), [4, e.playVideoOnLoadAsync(i, r)];
					case 1: return a.sent(), [2, i];
				}
			});
		});
	}, e._waitImageLoad = function(t) {
		return new Promise(function(n, r) {
			var i = setTimeout(function() {
				e.isImageLoaded(t) || (t.removeEventListener("load", a), r());
			}, 1e4), a = function() {
				clearTimeout(i), t.removeEventListener("load", a), n();
			};
			t.addEventListener("load", a);
		});
	}, e.checkCallbackFnOrThrow = function(e) {
		if (!e) throw new v("`callbackFn` is a required parameter, you cannot capture results without it.");
	}, e.disposeMediaStream = function(e) {
		e.getVideoTracks().forEach(function(e) {
			return e.stop();
		}), e = void 0;
	}, e.prototype.decode = function(t) {
		var n = e.createCanvasFromMediaElement(t);
		return this.decodeFromCanvas(n);
	}, e.prototype.decodeBitmap = function(e) {
		return this.reader.decode(e, this.hints);
	}, e.prototype.decodeFromCanvas = function(t) {
		var n = e.createBinaryBitmapFromCanvas(t);
		return this.decodeBitmap(n);
	}, e.prototype.decodeFromImageElement = function(t) {
		return ro(this, void 0, void 0, function() {
			var n;
			return io(this, function(r) {
				switch (r.label) {
					case 0:
						if (!t) throw new v("An image element must be provided.");
						return n = e.prepareImageElement(t), [4, this._decodeOnLoadImage(n)];
					case 1: return [2, r.sent()];
				}
			});
		});
	}, e.prototype.decodeFromImageUrl = function(t) {
		return ro(this, void 0, void 0, function() {
			var n;
			return io(this, function(r) {
				switch (r.label) {
					case 0:
						if (!t) throw new v("An URL must be provided.");
						n = e.prepareImageElement(), n.src = t, r.label = 1;
					case 1: return r.trys.push([
						1,
						,
						3,
						4
					]), [4, this.decodeFromImageElement(n)];
					case 2: return [2, r.sent()];
					case 3: return e.destroyImageElement(n), [7];
					case 4: return [2];
				}
			});
		});
	}, e.prototype.decodeFromConstraints = function(t, n, r) {
		return ro(this, void 0, void 0, function() {
			var i, a;
			return io(this, function(o) {
				switch (o.label) {
					case 0: return e.checkCallbackFnOrThrow(r), [4, this.getUserMedia(t)];
					case 1: i = o.sent(), o.label = 2;
					case 2: return o.trys.push([
						2,
						4,
						,
						5
					]), [4, this.decodeFromStream(i, n, r)];
					case 3: return [2, o.sent()];
					case 4: throw a = o.sent(), e.disposeMediaStream(i), a;
					case 5: return [2];
				}
			});
		});
	}, e.prototype.decodeFromStream = function(t, n, r) {
		return ro(this, void 0, void 0, function() {
			var i, a, o, s, c, l, u, d, f, p = this;
			return io(this, function(m) {
				switch (m.label) {
					case 0: return e.checkCallbackFnOrThrow(r), i = this.options.tryPlayVideoTimeout, [4, e.attachStreamToVideo(t, n, i)];
					case 1: return a = m.sent(), o = function() {
						e.disposeMediaStream(t), e.cleanVideoSource(a);
					}, s = this.scan(a, r, o), c = t.getVideoTracks(), l = no(no({}, s), {
						stop: function() {
							s.stop();
						},
						streamVideoConstraintsApply: function(e, t) {
							return ro(this, void 0, void 0, function() {
								var n, r, i, a, o, s, l;
								return io(this, function(u) {
									switch (u.label) {
										case 0: n = t ? c.filter(t) : c, u.label = 1;
										case 1: u.trys.push([
											1,
											6,
											7,
											8
										]), r = ao(n), i = r.next(), u.label = 2;
										case 2: return i.done ? [3, 5] : (a = i.value, [4, a.applyConstraints(e)]);
										case 3: u.sent(), u.label = 4;
										case 4: return i = r.next(), [3, 2];
										case 5: return [3, 8];
										case 6: return o = u.sent(), s = { error: o }, [3, 8];
										case 7:
											try {
												i && !i.done && (l = r.return) && l.call(r);
											} finally {
												if (s) throw s.error;
											}
											return [7];
										case 8: return [2];
									}
								});
							});
						},
						streamVideoConstraintsGet: function(e) {
							return c.find(e).getConstraints();
						},
						streamVideoSettingsGet: function(e) {
							return c.find(e).getSettings();
						},
						streamVideoCapabilitiesGet: function(e) {
							return c.find(e).getCapabilities();
						}
					}), u = e.mediaStreamIsTorchCompatible(t), u && (d = c?.find(function(t) {
						return e.mediaStreamIsTorchCompatibleTrack(t);
					}), f = function(t) {
						return ro(p, void 0, void 0, function() {
							return io(this, function(n) {
								switch (n.label) {
									case 0: return [4, e.mediaStreamSetTorch(d, t)];
									case 1: return n.sent(), [2];
								}
							});
						});
					}, l.switchTorch = f, l.stop = function() {
						return ro(p, void 0, void 0, function() {
							return io(this, function(e) {
								switch (e.label) {
									case 0: return s.stop(), [4, f(!1)];
									case 1: return e.sent(), [2];
								}
							});
						});
					}), [2, l];
				}
			});
		});
	}, e.prototype.decodeFromVideoDevice = function(t, n, r) {
		return ro(this, void 0, void 0, function() {
			var i, a;
			return io(this, function(o) {
				switch (o.label) {
					case 0: return e.checkCallbackFnOrThrow(r), i = t ? { deviceId: { exact: t } } : { facingMode: "environment" }, a = { video: i }, [4, this.decodeFromConstraints(a, n, r)];
					case 1: return [2, o.sent()];
				}
			});
		});
	}, e.prototype.decodeFromVideoElement = function(t, n) {
		return ro(this, void 0, void 0, function() {
			var r, i;
			return io(this, function(a) {
				switch (a.label) {
					case 0:
						if (e.checkCallbackFnOrThrow(n), !t) throw new v("A video element must be provided.");
						return r = e.prepareVideoElement(t), i = this.options.tryPlayVideoTimeout, [4, e.playVideoOnLoadAsync(r, i)];
					case 1: return a.sent(), [2, this.scan(r, n)];
				}
			});
		});
	}, e.prototype.decodeFromVideoUrl = function(t, n) {
		return ro(this, void 0, void 0, function() {
			var r, i, a, o;
			return io(this, function(s) {
				switch (s.label) {
					case 0:
						if (e.checkCallbackFnOrThrow(n), !t) throw new v("An URL must be provided.");
						return r = e.prepareVideoElement(), r.src = t, i = function() {
							e.cleanVideoSource(r);
						}, a = this.options.tryPlayVideoTimeout, [4, e.playVideoOnLoadAsync(r, a)];
					case 1: return s.sent(), o = this.scan(r, n, i), [2, o];
				}
			});
		});
	}, e.prototype.decodeOnceFromConstraints = function(e, t) {
		return ro(this, void 0, void 0, function() {
			var n;
			return io(this, function(r) {
				switch (r.label) {
					case 0: return [4, this.getUserMedia(e)];
					case 1: return n = r.sent(), [4, this.decodeOnceFromStream(n, t)];
					case 2: return [2, r.sent()];
				}
			});
		});
	}, e.prototype.decodeOnceFromStream = function(t, n) {
		return ro(this, void 0, void 0, function() {
			var r, i, a;
			return io(this, function(o) {
				switch (o.label) {
					case 0: return r = !!n, [4, e.attachStreamToVideo(t, n)];
					case 1: i = o.sent(), o.label = 2;
					case 2: return o.trys.push([
						2,
						,
						4,
						5
					]), [4, this.scanOneResult(i)];
					case 3: return a = o.sent(), [2, a];
					case 4: return r || e.cleanVideoSource(i), [7];
					case 5: return [2];
				}
			});
		});
	}, e.prototype.decodeOnceFromVideoDevice = function(e, t) {
		return ro(this, void 0, void 0, function() {
			var n, r;
			return io(this, function(i) {
				switch (i.label) {
					case 0: return n = e ? { deviceId: { exact: e } } : { facingMode: "environment" }, r = { video: n }, [4, this.decodeOnceFromConstraints(r, t)];
					case 1: return [2, i.sent()];
				}
			});
		});
	}, e.prototype.decodeOnceFromVideoElement = function(t) {
		return ro(this, void 0, void 0, function() {
			var n, r;
			return io(this, function(i) {
				switch (i.label) {
					case 0:
						if (!t) throw new v("A video element must be provided.");
						return n = e.prepareVideoElement(t), r = this.options.tryPlayVideoTimeout, [4, e.playVideoOnLoadAsync(n, r)];
					case 1: return i.sent(), [4, this.scanOneResult(n)];
					case 2: return [2, i.sent()];
				}
			});
		});
	}, e.prototype.decodeOnceFromVideoUrl = function(t) {
		return ro(this, void 0, void 0, function() {
			var n, r;
			return io(this, function(i) {
				switch (i.label) {
					case 0:
						if (!t) throw new v("An URL must be provided.");
						n = e.prepareVideoElement(), n.src = t, r = this.decodeOnceFromVideoElement(n), i.label = 1;
					case 1: return i.trys.push([
						1,
						,
						3,
						4
					]), [4, r];
					case 2: return [2, i.sent()];
					case 3: return e.cleanVideoSource(n), [7];
					case 4: return [2];
				}
			});
		});
	}, e.prototype.scanOneResult = function(e, t, n, r) {
		var i = this;
		return t === void 0 && (t = !0), n === void 0 && (n = !0), r === void 0 && (r = !0), new Promise(function(a, o) {
			i.scan(e, function(e, i, s) {
				if (e) a(e), s.stop();
				else if (i) {
					if (i instanceof I && t || i instanceof C && n || i instanceof M && r) return;
					s.stop(), o(i);
				}
			});
		});
	}, e.prototype.scan = function(t, n, r) {
		var i = this;
		e.checkCallbackFnOrThrow(n);
		var a = e.createCaptureCanvas(t), o;
		try {
			o = a.getContext("2d", { willReadFrequently: !0 });
		} catch {
			o = a.getContext("2d");
		}
		if (!o) throw Error("Couldn't create canvas for visual element scan.");
		var s = function() {
			o = void 0, a = void 0;
		}, c = !1, l, u = { stop: function() {
			c = !0, clearTimeout(l), s(), r && r();
		} }, d = function() {
			if (!c) try {
				e.drawImageOnCanvas(o, t), n(i.decodeFromCanvas(a), void 0, u), l = setTimeout(d, i.options.delayBetweenScanSuccess);
			} catch (e) {
				n(void 0, e, u);
				var f = e instanceof C, p = e instanceof M, m = e instanceof I;
				if (f || p || m) {
					l = setTimeout(d, i.options.delayBetweenScanAttempts);
					return;
				}
				s(), r && r(e);
			}
		};
		return d(), u;
	}, e.prototype._decodeOnLoadImage = function(t) {
		return ro(this, void 0, void 0, function() {
			var n;
			return io(this, function(r) {
				switch (r.label) {
					case 0: return n = e.isImageLoaded(t), n ? [3, 2] : [4, e._waitImageLoad(t)];
					case 1: r.sent(), r.label = 2;
					case 2: return [2, this.decode(t)];
				}
			});
		});
	}, e.prototype.getUserMedia = function(t) {
		return ro(this, void 0, void 0, function() {
			var n;
			return io(this, function(r) {
				switch (r.label) {
					case 0: return [4, navigator.mediaDevices.getUserMedia(t)];
					case 1: return n = r.sent(), e.streamTracker.push(n), [2, n];
				}
			});
		});
	}, e.streamTracker = [], e;
}(), co = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	co(t, e);
	function t(t, n) {
		return e.call(this, new nt(), t, n) || this;
	}
	return t;
})(so);
// node_modules/@zxing/browser/esm/readers/BrowserMultiFormatOneDReader.js
var lo = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	lo(t, e);
	function t(t, n) {
		return e.call(this, new zn(t), t, n) || this;
	}
	return t;
})(so);
// node_modules/@zxing/browser/esm/readers/BrowserDatamatrixCodeReader.js
var uo = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	uo(t, e);
	function t(t, n) {
		return e.call(this, new Qn(), t, n) || this;
	}
	return t;
})(so);
// node_modules/@zxing/browser/esm/readers/BrowserMultiFormatReader.js
var fo = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})(), po = function(e) {
	fo(t, e);
	function t(t, n) {
		var r = this, i = new Si();
		return i.setHints(t), r = e.call(this, i, t, n) || this, r.reader = i, r;
	}
	return Object.defineProperty(t.prototype, "possibleFormats", {
		set: function(e) {
			this.hints.set(j.POSSIBLE_FORMATS, e), this.reader.setHints(this.hints);
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype.decodeBitmap = function(e) {
		return this.reader.decodeWithState(e);
	}, t.prototype.setHints = function(e) {
		this.hints = e, this.reader.setHints(this.hints);
	}, t;
}(so), mo = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	mo(t, e);
	function t(t, n) {
		return e.call(this, new vi(), t, n) || this;
	}
	return t;
})(so);
// node_modules/@zxing/browser/esm/readers/BrowserQRCodeReader.js
var ho = (function() {
	var e = function(t, n) {
		return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, e(t, n);
	};
	return function(t, n) {
		if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
		e(t, n);
		function r() {
			this.constructor = t;
		}
		t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
	};
})();
(function(e) {
	ho(t, e);
	function t(t, n) {
		return e.call(this, new Or(), t, n) || this;
	}
	return t;
})(so);
// node_modules/@zxing/browser/esm/writers/BrowserCodeSvgWriter.js
var go = "http://www.w3.org/2000/svg";
(function() {
	function e(e) {
		if (typeof e == "string") {
			var t = document.getElementById(e);
			if (!t) throw Error(`Could not find a Container element with '${e}'.`);
			this.containerElement = t;
		} else this.containerElement = e;
	}
	return e.prototype.write = function(t, n, r, i) {
		if (t.length === 0) throw new b("Found empty contents");
		if (n < 0 || r < 0) throw new b("Requested dimensions are too small: " + n + "x" + r);
		var a = i && i.get(q.MARGIN) !== void 0 ? Number.parseInt(i.get(q.MARGIN).toString(), 10) : e.QUIET_ZONE_SIZE, o = this.encode(i, t);
		return this.renderResult(o, n, r, a);
	}, e.prototype.createSVGElement = function(t, n) {
		var r = document.createElementNS(e.SVG_NS, "svg");
		return r.setAttributeNS(go, "width", n.toString()), r.setAttributeNS(go, "height", t.toString()), r;
	}, e.prototype.createSvgPathPlaceholderElement = function(t, n) {
		var r = document.createElementNS(e.SVG_NS, "path");
		return r.setAttributeNS(go, "d", `M0 0h${t}v${n}H0z`), r.setAttributeNS(go, "fill", "none"), r;
	}, e.prototype.createSvgRectElement = function(t, n, r, i) {
		var a = document.createElementNS(e.SVG_NS, "rect");
		return a.setAttributeNS(go, "x", t.toString()), a.setAttributeNS(go, "y", n.toString()), a.setAttributeNS(go, "height", r.toString()), a.setAttributeNS(go, "width", i.toString()), a.setAttributeNS(go, "fill", "#000000"), a;
	}, e.prototype.encode = function(e, t) {
		var n = tr.L;
		if (e && e.get(q.ERROR_CORRECTION) !== void 0) {
			var r = e.get(q.ERROR_CORRECTION).toString();
			n = tr.fromString(r);
		}
		return Li.encode(t, n, e);
	}, e.prototype.renderResult = function(e, t, n, r) {
		var i = e.getMatrix();
		if (i === null) throw new Be();
		var a = i.getWidth(), o = i.getHeight(), s = a + r * 2, c = o + r * 2, l = Math.max(t, s), u = Math.max(n, c), d = Math.min(Math.floor(l / s), Math.floor(u / c)), f = Math.floor((l - a * d) / 2), p = Math.floor((u - o * d) / 2), m = this.createSVGElement(l, u), h = this.createSvgPathPlaceholderElement(t, n);
		m.appendChild(h), this.containerElement.appendChild(m);
		for (var g = 0, _ = p; g < o; g++, _ += d) for (var v = 0, y = f; v < a; v++, y += d) if (i.get(v, g) === 1) {
			var b = this.createSvgRectElement(y, _, d, d);
			m.appendChild(b);
		}
		return m;
	}, e.QUIET_ZONE_SIZE = 4, e.SVG_NS = "http://www.w3.org/2000/svg", e;
})();
// node_modules/@zxing/browser/esm/writers/BrowserQRCodeSvgWriter.js
var _o = "http://www.w3.org/2000/svg";
(function() {
	function e() {}
	return e.prototype.write = function(t, n, r, i) {
		if (t.length === 0) throw new b("Found empty contents");
		if (n < 0 || r < 0) throw new b("Requested dimensions are too small: " + n + "x" + r);
		var a = tr.L, o = e.QUIET_ZONE_SIZE;
		if (i) {
			if (i.get(q.ERROR_CORRECTION) !== void 0) {
				var s = i.get(q.ERROR_CORRECTION).toString();
				a = tr.fromString(s);
			}
			i.get(q.MARGIN) !== void 0 && (o = Number.parseInt(i.get(q.MARGIN).toString(), 10));
		}
		var c = Li.encode(t, a, i);
		return this.renderResult(c, n, r, o);
	}, e.prototype.writeToDom = function(e, t, n, r, i) {
		if (typeof e == "string") {
			var a = document.querySelector(e);
			if (!a) throw Error("Could no find the target HTML element.");
			e = a;
		}
		var o = this.write(t, n, r, i);
		e instanceof HTMLElement && e.appendChild(o);
	}, e.prototype.renderResult = function(e, t, n, r) {
		var i = e.getMatrix();
		if (i === null) throw new Be();
		for (var a = i.getWidth(), o = i.getHeight(), s = a + r * 2, c = o + r * 2, l = Math.max(t, s), u = Math.max(n, c), d = Math.min(Math.floor(l / s), Math.floor(u / c)), f = Math.floor((l - a * d) / 2), p = Math.floor((u - o * d) / 2), m = this.createSVGElement(l, u), h = 0, g = p; h < o; h++, g += d) for (var _ = 0, v = f; _ < a; _++, v += d) if (i.get(_, h) === 1) {
			var y = this.createSvgRectElement(v, g, d, d);
			m.appendChild(y);
		}
		return m;
	}, e.prototype.createSVGElement = function(e, t) {
		var n = document.createElementNS(_o, "svg"), r = e.toString(), i = t.toString();
		return n.setAttribute("height", i), n.setAttribute("width", r), n.setAttribute("viewBox", "0 0 " + r + " " + i), n;
	}, e.prototype.createSvgRectElement = function(e, t, n, r) {
		var i = document.createElementNS(_o, "rect");
		return i.setAttribute("x", e.toString()), i.setAttribute("y", t.toString()), i.setAttribute("height", n.toString()), i.setAttribute("width", r.toString()), i.setAttribute("fill", "#000000"), i;
	}, e.QUIET_ZONE_SIZE = 4, e;
})();
// node_modules/react/cjs/react-jsx-runtime.production.min.js
var vo = /* @__PURE__ */ t(((e) => {
	var t = r(), n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function c(e, t, r) {
		var i, c = {}, l = null, u = null;
		for (i in r !== void 0 && (l = "" + r), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) a.call(t, i) && !s.hasOwnProperty(i) && (c[i] = t[i]);
		if (e && e.defaultProps) for (i in t = e.defaultProps, t) c[i] === void 0 && (c[i] = t[i]);
		return {
			$$typeof: n,
			type: e,
			key: l,
			ref: u,
			props: c,
			_owner: o.current
		};
	}
	e.Fragment = i, e.jsx = c, e.jsxs = c;
})), Z = (/* @__PURE__ */ t(((e, t) => {
	t.exports = vo();
})))(), yo = (e, t) => {
	let n = new Intl.DateTimeFormat("en-CA", {
		...t ? { timeZone: t } : {},
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23"
	});
	return Object.fromEntries(n.formatToParts(e).map(({ type: e, value: t }) => [e, t]));
}, bo = (e) => {
	let t = yo(/* @__PURE__ */ new Date(), e);
	return `${t.year}-${t.month}-${t.day}`;
}, xo = (e = /* @__PURE__ */ new Date(), t) => {
	let n = yo(e, t);
	return `${n.year}-${n.month}-${n.day}T${n.hour}:${n.minute}`;
}, So = (e, t) => {
	if (!t) return new Date(e).toISOString();
	let [n, r] = e.split("T"), [i, a, o] = (n ?? "").split("-").map(Number), [s, c] = (r ?? "").split(":").map(Number), l = Date.UTC(i ?? 0, (a ?? 1) - 1, o ?? 1, s ?? 0, c ?? 0), u = l;
	for (let e = 0; e < 2; e += 1) {
		let e = yo(new Date(u), t), n = Date.UTC(Number(e.year), Number(e.month) - 1, Number(e.day), Number(e.hour), Number(e.minute));
		u += l - n;
	}
	return new Date(u).toISOString();
}, Co = (e, t, n, r) => e.callApi(t, `calorie_tracker/api/v1/${n}`, r), wo = (e) => Math.round(e).toLocaleString();
function To({ product: e }) {
	let t = (e) => e === null ? "—" : wo(e);
	return /* @__PURE__ */ (0, Z.jsxs)("p", {
		className: "nutrition-line",
		children: [
			t(e.calories),
			" kcal · P ",
			t(e.protein_g),
			"g · C",
			" ",
			t(e.carbs_g),
			"g · F ",
			t(e.fat_g),
			"g"
		]
	});
}
function Eo({ hass: e }) {
	let [t, n] = (0, l.useState)(() => bo(e.config?.time_zone)), [r, i] = (0, l.useState)(null), [a, o] = (0, l.useState)(null), [s, c] = (0, l.useState)([]), [u, d] = (0, l.useState)([]), [f, p] = (0, l.useState)(null), [m, h] = (0, l.useState)(!1), [g, _] = (0, l.useState)(""), [v, y] = (0, l.useState)("servings"), [b, x] = (0, l.useState)("1"), [S, C] = (0, l.useState)(() => xo(/* @__PURE__ */ new Date(), e.config?.time_zone)), [w, T] = (0, l.useState)(""), [E, D] = (0, l.useState)(!1), [ee, O] = (0, l.useState)(""), [te, k] = (0, l.useState)(!1), [A, ne] = (0, l.useState)(!1), [re, j] = (0, l.useState)(!1), ie = (0, l.useCallback)(async () => {
		try {
			let [n, r, a, s] = await Promise.all([
				Co(e, "GET", "me"),
				Co(e, "GET", `totals?date=${t}`),
				Co(e, "GET", `meals?date=${t}`),
				Co(e, "GET", `products?q=${encodeURIComponent(g)}`)
			]);
			i(n), o(r), c(a), d(s);
		} catch (e) {
			O(e instanceof Error ? e.message : "Could not load tracker data.");
		}
	}, [
		t,
		e,
		g
	]);
	(0, l.useEffect)(() => {
		ie();
	}, [ie]);
	let M = (0, l.useCallback)(async (t, n = !1) => {
		D(!0), O("Looking up product…");
		try {
			let r = await Co(e, "GET", `products/lookup?upc=${encodeURIComponent(t)}${n ? "&refresh=true" : ""}`);
			r ? (p(r), h(!1), T(t), x("1"), y("servings"), O(`Found via ${r.source.replaceAll("_", " ")}. Review before logging.`)) : (p(null), h(!1), T(t), O("No nutrition match. Scan the nutrition label to add this product."));
		} catch (e) {
			O(e instanceof Error ? e.message : "Product lookup failed.");
		} finally {
			D(!1), k(!1);
		}
	}, [e]), ae = (e) => {
		e.preventDefault(), /^\d{8,14}$/.test(w.trim()) ? M(w.trim()) : O("Enter a UPC with 8–14 digits.");
	}, N = (0, l.useCallback)((e) => {
		M(e);
	}, [M]), oe = async () => {
		if (f) {
			D(!0);
			try {
				await Co(e, "POST", "meals", {
					product_id: f.id,
					consumed_at: So(S, e.config?.time_zone),
					amount_mode: v,
					amount: Number(b)
				}), p(null), T(""), O("Meal logged."), await ie();
			} catch (e) {
				O(e instanceof Error ? e.message : "Could not log meal.");
			} finally {
				D(!1);
			}
		}
	}, se = async (t) => {
		try {
			let n = await Co(e, "POST", "products", {
				upc: w || null,
				name: t.name || `Scanned food ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`,
				source: "label",
				serving_size: t.servingSize || null,
				serving_weight_g: t.servingWeightG,
				calories: t.calories,
				protein_g: t.protein,
				carbs_g: t.carbs,
				fat_g: t.fat
			});
			p(n), h(!1), ne(!1), O("Label facts extracted locally. Review and confirm the product."), await ie();
		} catch (e) {
			O(e instanceof Error ? e.message : "Could not save label facts.");
		}
	}, ce = async (t) => {
		t.preventDefault();
		let n = new FormData(t.currentTarget);
		try {
			let t = await Co(e, "PUT", "me/targets", {
				calorie_target: Number(n.get("calories")),
				protein_target_g: Number(n.get("protein")),
				carbs_target_g: Number(n.get("carbs")),
				fat_target_g: Number(n.get("fat"))
			});
			i(t), j(!1), await ie();
		} catch (e) {
			O(e instanceof Error ? e.message : "Could not save targets.");
		}
	}, le = async (t) => {
		if (t.preventDefault(), !f) return;
		let n = new FormData(t.currentTarget), r = (e) => {
			let t = String(n.get(e) ?? "").trim();
			return t ? Number(t) : null;
		};
		try {
			let t = await Co(e, "PATCH", `products/${f.id}`, {
				name: String(n.get("product_name") ?? f.name).trim(),
				brand: String(n.get("brand") ?? "").trim() || null,
				serving_size: String(n.get("serving_size") ?? "").trim() || null,
				serving_weight_g: r("serving_weight_g"),
				calories: r("calories"),
				protein_g: r("protein_g"),
				carbs_g: r("carbs_g"),
				fat_g: r("fat_g")
			});
			p(t), h(!1), O("Product facts saved to your catalog."), await ie();
		} catch (e) {
			O(e instanceof Error ? e.message : "Could not update product facts.");
		}
	}, P = (t) => {
		p(t), h(!1), T(t.upc ?? ""), x("1"), y("servings"), C(xo(/* @__PURE__ */ new Date(), e.config?.time_zone));
	}, F = async (t) => {
		let n = window.prompt("Amount consumed:", String(t.amount));
		if (n === null || !Number.isFinite(Number(n)) || Number(n) <= 0) return;
		let r = window.prompt("Local date and time (YYYY-MM-DDTHH:mm):", xo(new Date(t.consumed_at), e.config?.time_zone));
		r !== null && (await Co(e, "PATCH", `meals/${t.id}`, {
			amount: Number(n),
			consumed_at: So(r, e.config?.time_zone)
		}), await ie());
	}, ue = async (t) => {
		window.confirm(`Delete ${t.product.name} from this day?`) && (await Co(e, "DELETE", `meals/${t.id}`), await ie());
	}, de = (0, l.useMemo)(() => !a || !r ? [
		0,
		0,
		0,
		0
	] : [
		a.calories / r.calorie_target * 100,
		a.protein_g / r.protein_target_g * 100,
		a.carbs_g / r.carbs_target_g * 100,
		a.fat_g / r.fat_target_g * 100
	].map((e) => Math.min(100, Math.max(0, e))), [r, a]), I = f !== null && f.calories !== null && f.protein_g !== null && f.carbs_g !== null && f.fat_g !== null;
	return /* @__PURE__ */ (0, Z.jsxs)("main", {
		className: "tracker",
		children: [
			/* @__PURE__ */ (0, Z.jsxs)("header", {
				className: "topbar",
				children: [/* @__PURE__ */ (0, Z.jsxs)("div", { children: [
					/* @__PURE__ */ (0, Z.jsx)("p", {
						className: "eyebrow",
						children: "HOME ASSISTANT · NUTRITION"
					}),
					/* @__PURE__ */ (0, Z.jsx)("h1", { children: "Calorie Tracker" }),
					/* @__PURE__ */ (0, Z.jsx)("p", {
						className: "muted",
						children: r?.display_name ?? "Your profile"
					})
				] }), /* @__PURE__ */ (0, Z.jsx)("button", {
					className: "icon-button",
					onClick: () => j(!0),
					"aria-label": "Edit targets",
					children: "⚙"
				})]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("section", {
				className: "summary-card",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("label", {
						className: "date-control",
						children: [/* @__PURE__ */ (0, Z.jsx)("span", { children: "Daily log" }), /* @__PURE__ */ (0, Z.jsx)("input", {
							type: "date",
							value: t,
							onChange: (e) => n(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "calorie-total",
						children: [/* @__PURE__ */ (0, Z.jsx)("strong", { children: wo(a?.calories ?? 0) }), /* @__PURE__ */ (0, Z.jsxs)("span", { children: [
							" / ",
							wo(r?.calorie_target ?? 0),
							" kcal"
						] })]
					}),
					/* @__PURE__ */ (0, Z.jsx)(Do, {
						label: "Calories",
						current: a?.calories ?? 0,
						target: r?.calorie_target ?? 0,
						percent: de[0] ?? 0
					}),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "macro-grid",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(Do, {
								label: "Protein",
								current: a?.protein_g ?? 0,
								target: r?.protein_target_g ?? 0,
								percent: de[1] ?? 0,
								unit: "g"
							}),
							/* @__PURE__ */ (0, Z.jsx)(Do, {
								label: "Carbs",
								current: a?.carbs_g ?? 0,
								target: r?.carbs_target_g ?? 0,
								percent: de[2] ?? 0,
								unit: "g"
							}),
							/* @__PURE__ */ (0, Z.jsx)(Do, {
								label: "Fat",
								current: a?.fat_g ?? 0,
								target: r?.fat_target_g ?? 0,
								percent: de[3] ?? 0,
								unit: "g"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("section", {
				className: "scan-card",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("h2", { children: "Add food" }),
					/* @__PURE__ */ (0, Z.jsx)("p", {
						className: "muted",
						children: "Scan a barcode first. Product photos stay on your phone."
					}),
					/* @__PURE__ */ (0, Z.jsx)("button", {
						className: "primary-button",
						onClick: () => k(!0),
						disabled: E,
						children: "▦ \xA0 Scan UPC"
					}),
					/* @__PURE__ */ (0, Z.jsxs)("form", {
						className: "manual-upc",
						onSubmit: ae,
						children: [/* @__PURE__ */ (0, Z.jsx)("input", {
							inputMode: "numeric",
							value: w,
							onChange: (e) => T(e.target.value),
							placeholder: "Or enter a UPC",
							"aria-label": "UPC barcode"
						}), /* @__PURE__ */ (0, Z.jsx)("button", {
							type: "submit",
							disabled: E,
							children: "Look up"
						})]
					}),
					/* @__PURE__ */ (0, Z.jsx)("button", {
						className: "text-button",
						onClick: () => ne(!0),
						children: "Scan nutrition label instead"
					}),
					!f && /^\d{8,14}$/.test(w) && /* @__PURE__ */ (0, Z.jsx)("button", {
						className: "text-button",
						onClick: () => void M(w, !0),
						disabled: E,
						children: "Retry UPC lookup"
					}),
					ee && /* @__PURE__ */ (0, Z.jsx)("p", {
						className: "status-message",
						role: "status",
						children: ee
					})
				]
			}),
			f && /* @__PURE__ */ (0, Z.jsxs)("section", {
				className: "product-card",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", { children: [
							/* @__PURE__ */ (0, Z.jsxs)("p", {
								className: "eyebrow",
								children: ["REVIEW PRODUCT · ", f.source.replaceAll("_", " ")]
							}),
							/* @__PURE__ */ (0, Z.jsx)("h2", { children: f.name }),
							/* @__PURE__ */ (0, Z.jsxs)("p", {
								className: "muted",
								children: [
									f.brand || "Brand not listed",
									" · ",
									f.serving_size || "Serving size unavailable"
								]
							})
						] }), /* @__PURE__ */ (0, Z.jsx)("button", {
							className: "close-button",
							onClick: () => p(null),
							"aria-label": "Close",
							children: "×"
						})]
					}),
					/* @__PURE__ */ (0, Z.jsx)(To, { product: f }),
					!I && /* @__PURE__ */ (0, Z.jsx)("p", {
						className: "error-message",
						children: "Fill in all four nutrition values before logging this product."
					}),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "product-actions",
						children: [/* @__PURE__ */ (0, Z.jsx)("button", {
							className: "text-button inline-button",
							onClick: () => h((e) => !e),
							children: m ? "Cancel fact edits" : "Edit product facts"
						}), f.upc && /* @__PURE__ */ (0, Z.jsx)("button", {
							className: "text-button inline-button",
							onClick: () => void M(f.upc ?? "", !0),
							disabled: E,
							children: "Refresh lookup"
						})]
					}),
					m && /* @__PURE__ */ (0, Z.jsxs)("form", {
						className: "product-edit-form",
						onSubmit: (e) => void le(e),
						children: [
							/* @__PURE__ */ (0, Z.jsxs)("label", { children: ["Product name", /* @__PURE__ */ (0, Z.jsx)("input", {
								name: "product_name",
								defaultValue: f.name,
								required: !0
							})] }),
							/* @__PURE__ */ (0, Z.jsxs)("label", { children: ["Brand", /* @__PURE__ */ (0, Z.jsx)("input", {
								name: "brand",
								defaultValue: f.brand ?? ""
							})] }),
							/* @__PURE__ */ (0, Z.jsxs)("label", { children: ["Serving size", /* @__PURE__ */ (0, Z.jsx)("input", {
								name: "serving_size",
								defaultValue: f.serving_size ?? ""
							})] }),
							/* @__PURE__ */ (0, Z.jsxs)("label", { children: ["Serving weight (g)", /* @__PURE__ */ (0, Z.jsx)("input", {
								name: "serving_weight_g",
								type: "number",
								min: "0.1",
								step: "0.1",
								defaultValue: f.serving_weight_g ?? ""
							})] }),
							/* @__PURE__ */ (0, Z.jsxs)("label", { children: ["Calories", /* @__PURE__ */ (0, Z.jsx)("input", {
								name: "calories",
								type: "number",
								min: "0",
								step: "0.1",
								defaultValue: f.calories ?? ""
							})] }),
							/* @__PURE__ */ (0, Z.jsxs)("label", { children: ["Protein (g)", /* @__PURE__ */ (0, Z.jsx)("input", {
								name: "protein_g",
								type: "number",
								min: "0",
								step: "0.1",
								defaultValue: f.protein_g ?? ""
							})] }),
							/* @__PURE__ */ (0, Z.jsxs)("label", { children: ["Carbs (g)", /* @__PURE__ */ (0, Z.jsx)("input", {
								name: "carbs_g",
								type: "number",
								min: "0",
								step: "0.1",
								defaultValue: f.carbs_g ?? ""
							})] }),
							/* @__PURE__ */ (0, Z.jsxs)("label", { children: ["Fat (g)", /* @__PURE__ */ (0, Z.jsx)("input", {
								name: "fat_g",
								type: "number",
								min: "0",
								step: "0.1",
								defaultValue: f.fat_g ?? ""
							})] }),
							/* @__PURE__ */ (0, Z.jsx)("button", {
								className: "secondary-button wide-field",
								type: "submit",
								children: "Save product facts"
							})
						]
					}),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "form-grid",
						children: [
							/* @__PURE__ */ (0, Z.jsxs)("label", { children: ["Amount", /* @__PURE__ */ (0, Z.jsx)("input", {
								type: "number",
								min: "0.1",
								step: "0.1",
								value: b,
								onChange: (e) => x(e.target.value)
							})] }),
							/* @__PURE__ */ (0, Z.jsxs)("label", { children: ["Measure", /* @__PURE__ */ (0, Z.jsxs)("select", {
								value: v,
								onChange: (e) => y(e.target.value),
								children: [
									/* @__PURE__ */ (0, Z.jsx)("option", {
										value: "servings",
										children: "Servings"
									}),
									/* @__PURE__ */ (0, Z.jsx)("option", {
										value: "grams",
										disabled: !f.serving_weight_g,
										children: "Grams"
									}),
									/* @__PURE__ */ (0, Z.jsx)("option", {
										value: "ounces",
										disabled: !f.serving_weight_g,
										children: "Ounces"
									})
								]
							})] }),
							/* @__PURE__ */ (0, Z.jsxs)("label", {
								className: "wide-field",
								children: ["Date and time", /* @__PURE__ */ (0, Z.jsx)("input", {
									type: "datetime-local",
									value: S,
									onChange: (e) => C(e.target.value)
								})]
							})
						]
					}),
					v !== "servings" && f.serving_weight_g && /* @__PURE__ */ (0, Z.jsxs)("p", {
						className: "muted",
						children: [
							"Serving weight: ",
							f.serving_weight_g,
							" g"
						]
					}),
					/* @__PURE__ */ (0, Z.jsx)("button", {
						className: "primary-button",
						onClick: () => void oe(),
						disabled: E || !I,
						children: "Add to daily log"
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("section", {
				className: "catalog-card",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("div", {
						className: "section-heading",
						children: /* @__PURE__ */ (0, Z.jsxs)("div", { children: [/* @__PURE__ */ (0, Z.jsx)("h2", { children: "Previously scanned" }), /* @__PURE__ */ (0, Z.jsx)("p", {
							className: "muted",
							children: "Choose a saved product to log it again."
						})] })
					}),
					/* @__PURE__ */ (0, Z.jsx)("input", {
						className: "search-input",
						value: g,
						onChange: (e) => _(e.target.value),
						placeholder: "Search your product catalog",
						"aria-label": "Search catalog"
					}),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "product-list",
						children: [u.map((e) => /* @__PURE__ */ (0, Z.jsxs)("button", {
							className: "product-row",
							onClick: () => P(e),
							children: [
								/* @__PURE__ */ (0, Z.jsxs)("span", { children: [/* @__PURE__ */ (0, Z.jsx)("strong", { children: e.name }), /* @__PURE__ */ (0, Z.jsx)("small", { children: e.serving_size || "Serving details unavailable" })] }),
								/* @__PURE__ */ (0, Z.jsx)(To, { product: e }),
								/* @__PURE__ */ (0, Z.jsx)("span", {
									"aria-hidden": "true",
									children: "›"
								})
							]
						}, e.id)), u.length === 0 && /* @__PURE__ */ (0, Z.jsx)("p", {
							className: "empty-state",
							children: "Scanned products will appear here."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("section", {
				className: "history-card",
				children: [/* @__PURE__ */ (0, Z.jsxs)("h2", { children: ["Meals · ", t] }), s.length === 0 ? /* @__PURE__ */ (0, Z.jsx)("p", {
					className: "empty-state",
					children: "Nothing logged for this day yet."
				}) : s.map((t) => /* @__PURE__ */ (0, Z.jsxs)("article", {
					className: "meal-row",
					children: [
						/* @__PURE__ */ (0, Z.jsxs)("div", {
							className: "meal-main",
							children: [/* @__PURE__ */ (0, Z.jsx)("strong", { children: t.product.name }), /* @__PURE__ */ (0, Z.jsxs)("small", { children: [
								new Intl.DateTimeFormat(void 0, {
									hour: "numeric",
									minute: "2-digit",
									...e.config?.time_zone ? { timeZone: e.config.time_zone } : {}
								}).format(new Date(t.consumed_at)),
								" · ",
								t.amount,
								" ",
								t.amount_mode
							] })]
						}),
						/* @__PURE__ */ (0, Z.jsxs)("div", {
							className: "meal-nutrition",
							children: [/* @__PURE__ */ (0, Z.jsxs)("strong", { children: [wo(t.calories), " kcal"] }), /* @__PURE__ */ (0, Z.jsxs)("small", { children: [
								"P ",
								wo(t.protein_g),
								" · C ",
								wo(t.carbs_g),
								" · F ",
								wo(t.fat_g),
								"g"
							] })]
						}),
						/* @__PURE__ */ (0, Z.jsx)("button", {
							className: "small-button",
							onClick: () => void F(t),
							"aria-label": `Edit ${t.product.name}`,
							children: "Edit"
						}),
						/* @__PURE__ */ (0, Z.jsx)("button", {
							className: "small-button danger",
							onClick: () => void ue(t),
							"aria-label": `Delete ${t.product.name}`,
							children: "×"
						})
					]
				}, t.id))]
			}),
			te && /* @__PURE__ */ (0, Z.jsx)(ko, {
				onClose: () => k(!1),
				onScan: N
			}),
			A && /* @__PURE__ */ (0, Z.jsx)(Mo, {
				onClose: () => ne(!1),
				onExtract: (e) => void se(e)
			}),
			re && r && /* @__PURE__ */ (0, Z.jsx)("div", {
				className: "modal-backdrop",
				children: /* @__PURE__ */ (0, Z.jsxs)("form", {
					className: "modal-card",
					onSubmit: (e) => void ce(e),
					children: [
						/* @__PURE__ */ (0, Z.jsx)("h2", { children: "Daily targets" }),
						/* @__PURE__ */ (0, Z.jsx)(Oo, {
							label: "Calories",
							name: "calories",
							unit: "kcal",
							value: r.calorie_target
						}),
						/* @__PURE__ */ (0, Z.jsx)(Oo, {
							label: "Protein",
							name: "protein",
							unit: "g",
							value: r.protein_target_g
						}),
						/* @__PURE__ */ (0, Z.jsx)(Oo, {
							label: "Carbs",
							name: "carbs",
							unit: "g",
							value: r.carbs_target_g
						}),
						/* @__PURE__ */ (0, Z.jsx)(Oo, {
							label: "Fat",
							name: "fat",
							unit: "g",
							value: r.fat_target_g
						}),
						/* @__PURE__ */ (0, Z.jsxs)("div", {
							className: "modal-actions",
							children: [/* @__PURE__ */ (0, Z.jsx)("button", {
								type: "button",
								className: "secondary-button",
								onClick: () => j(!1),
								children: "Cancel"
							}), /* @__PURE__ */ (0, Z.jsx)("button", {
								className: "primary-button",
								type: "submit",
								children: "Save targets"
							})]
						})
					]
				})
			})
		]
	});
}
function Do({ label: e, current: t, target: n, percent: r, unit: i = "" }) {
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "progress-block",
		children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "progress-label",
			children: [/* @__PURE__ */ (0, Z.jsx)("span", { children: e }), /* @__PURE__ */ (0, Z.jsxs)("strong", { children: [
				wo(t),
				i,
				" / ",
				wo(n),
				i
			] })]
		}), /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "progress-track",
			children: /* @__PURE__ */ (0, Z.jsx)("div", {
				className: "progress-fill",
				style: { width: `${r}%` }
			})
		})]
	});
}
function Oo({ label: e, name: t, unit: n, value: r }) {
	return /* @__PURE__ */ (0, Z.jsxs)("label", {
		className: "target-field",
		children: [
			e,
			" (",
			n,
			")",
			/* @__PURE__ */ (0, Z.jsx)("input", {
				name: t,
				type: "number",
				min: "1",
				step: "1",
				defaultValue: r,
				required: !0
			})
		]
	});
}
function ko({ onScan: e, onClose: t }) {
	let n = (0, l.useRef)(null), r = (0, l.useRef)(null), [i, a] = (0, l.useState)("");
	return (0, l.useEffect)(() => {
		let t = new po(), i = !0;
		if (n.current) return t.decodeFromVideoDevice(void 0, n.current, (t, n, a) => {
			r.current = a, i && t && (i = !1, a.stop(), e(t.getText()));
		}).catch(() => a("Camera unavailable. Check Home Assistant app camera permission or enter the UPC manually.")), () => {
			i = !1, r.current?.stop();
		};
	}, [e]), /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "modal-backdrop",
		children: /* @__PURE__ */ (0, Z.jsxs)("section", {
			className: "camera-modal",
			children: [
				/* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, Z.jsx)("h2", { children: "Scan UPC" }), /* @__PURE__ */ (0, Z.jsx)("button", {
						className: "close-button",
						onClick: t,
						children: "×"
					})]
				}),
				/* @__PURE__ */ (0, Z.jsx)("div", {
					className: "camera-frame",
					children: /* @__PURE__ */ (0, Z.jsx)("video", {
						ref: n,
						muted: !0,
						playsInline: !0
					})
				}),
				/* @__PURE__ */ (0, Z.jsx)("p", {
					className: "muted",
					children: "Hold the barcode inside the frame."
				}),
				i && /* @__PURE__ */ (0, Z.jsx)("p", {
					role: "alert",
					className: "error-message",
					children: i
				}),
				/* @__PURE__ */ (0, Z.jsx)("button", {
					className: "secondary-button full-button",
					onClick: t,
					children: "Cancel"
				})
			]
		})
	});
}
function Ao(e) {
	let t = (t) => {
		let n = e.match(t);
		if (!n?.[1]) return null;
		let r = Number(n[1].replace(",", "."));
		return Number.isFinite(r) ? r : null;
	}, n = e.match(/serving size\s*[:\-]?\s*([^\n]+)/i)?.[1]?.trim() ?? "", r = n.match(/([\d.]+)\s*g\b/i)?.[1];
	return {
		name: "",
		servingSize: n,
		servingWeightG: r ? Number(r) : null,
		calories: t(/calories\s*[:\-]?\s*(\d+(?:[.,]\d+)?)/i),
		protein: t(/protein\s*[:\-]?\s*(\d+(?:[.,]\d+)?)/i),
		carbs: t(/total carbohydrates?\s*[:\-]?\s*(\d+(?:[.,]\d+)?)/i),
		fat: t(/total fat\s*[:\-]?\s*(\d+(?:[.,]\d+)?)/i)
	};
}
function jo(e, t) {
	let n = t.getContext("2d", { willReadFrequently: !0 });
	if (!n || !e.videoWidth) return 0;
	let r = Math.max(1, Math.round(e.videoHeight / e.videoWidth * 160));
	t.width = 160, t.height = r, n.drawImage(e, 0, 0, 160, r);
	let { data: i } = n.getImageData(0, 0, 160, r), a = 0, o = 0, s = 0;
	for (let e = 1; e < r - 1; e += 1) for (let t = 1; t < 159; t += 1) {
		let n = i[(e * 160 + t) * 4] ?? 0, r = i[((e - 1) * 160 + t) * 4] ?? 0, c = i[((e + 1) * 160 + t) * 4] ?? 0, l = i[(e * 160 + t - 1) * 4] ?? 0, u = i[(e * 160 + t + 1) * 4] ?? 0, d = 4 * n - r - c - l - u;
		a += d, o += d * d, s += 1;
	}
	let c = s ? o / s - (a / s) ** 2 : 0;
	return Math.max(0, Math.min(100, Math.round(c / 18)));
}
function Mo({ onExtract: t, onClose: n }) {
	let r = (0, l.useRef)(null), i = (0, l.useRef)(null), a = (0, l.useRef)(null), [o, s] = (0, l.useState)(0), [c, u] = (0, l.useState)(""), [d, f] = (0, l.useState)(""), [p, m] = (0, l.useState)(!1), [h, g] = (0, l.useState)("");
	(0, l.useEffect)(() => {
		if (c) return;
		let e = 0, t = !0;
		return navigator.mediaDevices.getUserMedia({
			video: { facingMode: { ideal: "environment" } },
			audio: !1
		}).then((n) => {
			t ? (a.current = n, r.current && (r.current.srcObject = n, r.current.play()), e = window.setInterval(() => {
				r.current && i.current && s(jo(r.current, i.current));
			}, 400)) : n.getTracks().forEach((e) => e.stop());
		}).catch(() => g("Camera permission is unavailable. Check the Home Assistant app permission.")), () => {
			t = !1, window.clearInterval(e), a.current?.getTracks().forEach((e) => e.stop()), a.current = null;
		};
	}, [c]);
	let _ = async () => {
		if (!r.current || !i.current) return;
		let t = i.current;
		t.width = r.current.videoWidth, t.height = r.current.videoHeight;
		let n = t.getContext("2d");
		if (n) {
			n.drawImage(r.current, 0, 0), u(t.toDataURL("image/jpeg", .92)), m(!0), g("");
			try {
				let { createWorker: n } = await import("./src-BdqmpwrO.js").then((t) => /* @__PURE__ */ e(t.default, 1)), r = await n("eng");
				try {
					let e = await r.recognize(t);
					f(e.data.text);
				} finally {
					await r.terminate();
				}
			} catch {
				g("Local OCR could not read the image. Try again with the label steady and closer.");
			} finally {
				m(!1);
			}
		}
	}, v = () => t(Ao(d)), y = o >= 35 && !p;
	return /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "modal-backdrop",
		children: /* @__PURE__ */ (0, Z.jsxs)("section", {
			className: "camera-modal label-modal",
			children: [
				/* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, Z.jsxs)("div", { children: [/* @__PURE__ */ (0, Z.jsx)("h2", { children: "Scan nutrition label" }), /* @__PURE__ */ (0, Z.jsx)("p", {
						className: "muted",
						children: "Image stays on this phone."
					})] }), /* @__PURE__ */ (0, Z.jsx)("button", {
						className: "close-button",
						onClick: n,
						children: "×"
					})]
				}),
				c ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)("img", {
					className: "captured-image",
					src: c,
					alt: "Captured nutrition label, processed locally"
				}), p ? /* @__PURE__ */ (0, Z.jsx)("p", { children: "Reading label locally…" }) : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("label", {
					className: "ocr-text-label",
					children: ["Recognized text (edit if needed)", /* @__PURE__ */ (0, Z.jsx)("textarea", {
						rows: 8,
						value: d,
						onChange: (e) => f(e.target.value)
					})]
				}), /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "modal-actions",
					children: [/* @__PURE__ */ (0, Z.jsx)("button", {
						className: "secondary-button",
						onClick: () => {
							u(""), f("");
						},
						children: "Retake"
					}), /* @__PURE__ */ (0, Z.jsx)("button", {
						className: "primary-button",
						onClick: v,
						children: "Extract facts"
					})]
				})] })] }) : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "camera-frame label-frame",
						children: [/* @__PURE__ */ (0, Z.jsx)("video", {
							ref: r,
							muted: !0,
							playsInline: !0
						}), /* @__PURE__ */ (0, Z.jsx)("div", { className: "label-guide" })]
					}),
					/* @__PURE__ */ (0, Z.jsx)("p", {
						className: y ? "clarity-ready" : "muted",
						children: y ? "Looks clear enough · ready to capture" : `Hold steady and focus the label · clarity ${o}%`
					}),
					/* @__PURE__ */ (0, Z.jsx)("button", {
						className: "primary-button full-button",
						onClick: () => void _(),
						disabled: !y,
						children: "Capture label"
					})
				] }),
				h && /* @__PURE__ */ (0, Z.jsx)("p", {
					className: "error-message",
					role: "alert",
					children: h
				}),
				/* @__PURE__ */ (0, Z.jsx)("canvas", {
					ref: i,
					className: "hidden-canvas"
				})
			]
		})
	});
}
// src/panel.tsx
var No = "/calorie-tracker-assets/ha-calorie-tracker-frontend.css";
if (!document.querySelector(`link[href="${No}"]`)) {
	let e = document.createElement("link");
	e.rel = "stylesheet", e.href = No, document.head.append(e);
}
var Po = class extends HTMLElement {
	root;
	currentHass;
	set hassObject(e) {
		this.currentHass = e, this.renderApp();
	}
	set hass(e) {
		this.hassObject = e;
	}
	connectedCallback() {
		this.renderApp();
	}
	renderApp() {
		this.currentHass && this.isConnected && (this.root ??= (0, u.createRoot)(this), this.root.render(/* @__PURE__ */ (0, Z.jsx)(Eo, { hass: this.currentHass })));
	}
};
customElements.get("ha-calorie-tracker-panel") || customElements.define("ha-calorie-tracker-panel", Po);
