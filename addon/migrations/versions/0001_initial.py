"""Initial product, profile, barcode cache, and meal tables."""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

revision: str = "0001_initial"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    """Create initial schema."""
    op.create_table(
        "profiles",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("ha_user_id", sa.String(128), nullable=False),
        sa.Column("display_name", sa.String(120), nullable=False),
        sa.Column("timezone", sa.String(64), nullable=False, server_default="UTC"),
        sa.Column("calorie_target", sa.Float(), nullable=False, server_default="2000"),
        sa.Column("protein_target_g", sa.Float(), nullable=False, server_default="100"),
        sa.Column("carbs_target_g", sa.Float(), nullable=False, server_default="250"),
        sa.Column("fat_target_g", sa.Float(), nullable=False, server_default="70"),
        sa.UniqueConstraint("ha_user_id"),
    )
    op.create_index("ix_profiles_ha_user_id", "profiles", ["ha_user_id"], unique=True)
    op.create_table(
        "products",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("upc", sa.String(32), nullable=True),
        sa.Column("name", sa.String(240), nullable=False),
        sa.Column("brand", sa.String(160), nullable=True),
        sa.Column("source", sa.String(32), nullable=False, server_default="manual"),
        sa.Column("lookup_status", sa.String(24), nullable=False, server_default="found"),
        sa.Column("serving_size", sa.String(120), nullable=True),
        sa.Column("serving_weight_g", sa.Float(), nullable=True),
        sa.Column("calories", sa.Float(), nullable=True),
        sa.Column("protein_g", sa.Float(), nullable=True),
        sa.Column("carbs_g", sa.Float(), nullable=True),
        sa.Column("fat_g", sa.Float(), nullable=True),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("nutrition_basis", sa.String(32), nullable=False, server_default="serving"),
        sa.Column("metadata_json", sa.JSON(), nullable=False),
        sa.UniqueConstraint("upc"),
    )
    op.create_index("ix_products_upc", "products", ["upc"], unique=True)
    op.create_table(
        "meals",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("profile_id", sa.Integer(), sa.ForeignKey("profiles.id"), nullable=False),
        sa.Column("product_id", sa.Integer(), sa.ForeignKey("products.id"), nullable=False),
        sa.Column("consumed_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("amount_mode", sa.String(16), nullable=False, server_default="servings"),
        sa.Column("amount", sa.Float(), nullable=False),
        sa.Column("calories", sa.Float(), nullable=False),
        sa.Column("protein_g", sa.Float(), nullable=False),
        sa.Column("carbs_g", sa.Float(), nullable=False),
        sa.Column("fat_g", sa.Float(), nullable=False),
    )
    op.create_index("ix_meals_profile_id", "meals", ["profile_id"])
    op.create_index("ix_meals_product_id", "meals", ["product_id"])
    op.create_index("ix_meals_consumed_at", "meals", ["consumed_at"])
    op.create_table(
        "barcode_cache",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("upc", sa.String(32), nullable=False),
        sa.Column("status", sa.String(24), nullable=False),
        sa.Column("product_id", sa.Integer(), sa.ForeignKey("products.id"), nullable=True),
        sa.Column("checked_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("refresh_requested", sa.Boolean(), nullable=False, server_default=sa.false()),
        sa.UniqueConstraint("upc", name="uq_barcode_cache_upc"),
    )
    op.create_index("ix_barcode_cache_upc", "barcode_cache", ["upc"])


def downgrade() -> None:
    """Remove initial schema."""
    op.drop_index("ix_barcode_cache_upc", table_name="barcode_cache")
    op.drop_table("barcode_cache")
    op.drop_index("ix_meals_consumed_at", table_name="meals")
    op.drop_index("ix_meals_product_id", table_name="meals")
    op.drop_index("ix_meals_profile_id", table_name="meals")
    op.drop_table("meals")
    op.drop_index("ix_products_upc", table_name="products")
    op.drop_table("products")
    op.drop_index("ix_profiles_ha_user_id", table_name="profiles")
    op.drop_table("profiles")
