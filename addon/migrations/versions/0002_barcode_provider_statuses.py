"""Cache per-provider outcomes for barcode lookups."""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

revision: str = "0002_barcode_provider_statuses"
down_revision: str | None = "0001_initial"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    """Add nullable diagnostics for existing and new barcode cache rows."""
    op.add_column(
        "barcode_cache",
        sa.Column("provider_statuses", sa.JSON(), nullable=True),
    )


def downgrade() -> None:
    """Remove cached provider diagnostics."""
    op.drop_column("barcode_cache", "provider_statuses")
