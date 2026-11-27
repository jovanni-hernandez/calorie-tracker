"""Persistent domain models."""

from datetime import date, datetime
from typing import Any

from sqlalchemy import (
    JSON,
    Boolean,
    Date,
    DateTime,
    Float,
    ForeignKey,
    Index,
    Integer,
    String,
    UniqueConstraint,
    text,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from calorie_tracker.database import Base


class Profile(Base):
    """A Home Assistant user profile and its daily targets."""

    __tablename__ = "profiles"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    ha_user_id: Mapped[str] = mapped_column(String(128), unique=True, index=True)
    display_name: Mapped[str] = mapped_column(String(120))
    timezone: Mapped[str] = mapped_column(String(64), default="UTC")
    calorie_target: Mapped[float] = mapped_column(Float, default=2000)
    protein_target_g: Mapped[float] = mapped_column(Float, default=100)
    carbs_target_g: Mapped[float] = mapped_column(Float, default=250)
    fat_target_g: Mapped[float] = mapped_column(Float, default=70)
    meals: Mapped[list["Meal"]] = relationship(back_populates="profile")


class Goal(Base):
    """One active, extensible goal belonging to a Home Assistant profile."""

    __tablename__ = "goals"
    __table_args__ = (
        Index(
            "uq_goals_active_profile",
            "profile_id",
            unique=True,
            sqlite_where=text("status = 'active'"),
            postgresql_where=text("status = 'active'"),
        ),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    profile_id: Mapped[int] = mapped_column(ForeignKey("profiles.id"), index=True)
    goal_type: Mapped[str] = mapped_column(String(48))
    status: Mapped[str] = mapped_column(String(16), default="active")
    goal_data: Mapped[dict[str, Any]] = mapped_column(JSON, default=dict)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))


class WeightCheckIn(Base):
    """A user's dated body-weight measurement, stored in canonical kilograms."""

    __tablename__ = "weight_checkins"
    __table_args__ = (
        UniqueConstraint("profile_id", "measured_on", name="uq_weight_checkins_profile_date"),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    profile_id: Mapped[int] = mapped_column(ForeignKey("profiles.id"), index=True)
    measured_on: Mapped[date] = mapped_column(Date)
    weight_kg: Mapped[float] = mapped_column(Float)


class Product(Base):
    """A cached UPC product or a user-created catalog item."""

    __tablename__ = "products"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    upc: Mapped[str | None] = mapped_column(String(32), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(240))
    brand: Mapped[str | None] = mapped_column(String(160), nullable=True)
    source: Mapped[str] = mapped_column(String(32), default="manual")
    lookup_status: Mapped[str] = mapped_column(String(24), default="found")
    serving_size: Mapped[str | None] = mapped_column(String(120), nullable=True)
    serving_weight_g: Mapped[float | None] = mapped_column(Float, nullable=True)
    calories: Mapped[float | None] = mapped_column(Float, nullable=True)
    protein_g: Mapped[float | None] = mapped_column(Float, nullable=True)
    carbs_g: Mapped[float | None] = mapped_column(Float, nullable=True)
    fat_g: Mapped[float | None] = mapped_column(Float, nullable=True)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    nutrition_basis: Mapped[str] = mapped_column(String(32), default="serving")
    metadata_json: Mapped[dict[str, Any]] = mapped_column(JSON, default=dict)


class Meal(Base):
    """A consumed amount of a product at a user-selected time."""

    __tablename__ = "meals"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    profile_id: Mapped[int] = mapped_column(ForeignKey("profiles.id"), index=True)
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id"), index=True)
    consumed_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), index=True)
    amount_mode: Mapped[str] = mapped_column(String(16), default="servings")
    amount: Mapped[float] = mapped_column(Float)
    calories: Mapped[float] = mapped_column(Float)
    protein_g: Mapped[float] = mapped_column(Float)
    carbs_g: Mapped[float] = mapped_column(Float)
    fat_g: Mapped[float] = mapped_column(Float)
    profile: Mapped[Profile] = relationship(back_populates="meals")
    product: Mapped[Product] = relationship()


class BarcodeCache(Base):
    """Cache successful and unsuccessful lookups to avoid repeated API calls."""

    __tablename__ = "barcode_cache"
    __table_args__ = (UniqueConstraint("upc", name="uq_barcode_cache_upc"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    upc: Mapped[str] = mapped_column(String(32), index=True)
    status: Mapped[str] = mapped_column(String(24))
    product_id: Mapped[int | None] = mapped_column(ForeignKey("products.id"), nullable=True)
    checked_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    refresh_requested: Mapped[bool] = mapped_column(Boolean, default=False)
    provider_statuses: Mapped[dict[str, str] | None] = mapped_column(JSON, nullable=True)
