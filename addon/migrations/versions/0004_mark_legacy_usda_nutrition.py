"""Mark cached USDA nutrients that were stored per 100 g as legacy."""

from collections.abc import Sequence

from alembic import op

revision: str = "0004_mark_legacy_usda_nutrition"
down_revision: str | None = "0003_goals_and_weight_checkins"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    """Make existing USDA products refresh before their serving facts are reused."""
    op.execute(
        "UPDATE products "
        "SET nutrition_basis = 'legacy_per_100g' "
        "WHERE source = 'usda' AND nutrition_basis = 'serving'"
    )


def downgrade() -> None:
    """Restore the previous serving marker if this migration is rolled back."""
    op.execute(
        "UPDATE products "
        "SET nutrition_basis = 'serving' "
        "WHERE nutrition_basis = 'legacy_per_100g'"
    )
