"""Add extensible user goals and weekly weight check-ins."""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

revision: str = "0003_goals_and_weight_checkins"
down_revision: str | None = "0002_barcode_provider_statuses"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    """Create the goal and weight measurement tables."""
    op.create_table(
        "goals",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("profile_id", sa.Integer(), sa.ForeignKey("profiles.id"), nullable=False),
        sa.Column("goal_type", sa.String(48), nullable=False),
        sa.Column("status", sa.String(16), nullable=False),
        sa.Column("goal_data", sa.JSON(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
    )
    op.create_index("ix_goals_profile_id", "goals", ["profile_id"])
    op.create_index(
        "uq_goals_active_profile",
        "goals",
        ["profile_id"],
        unique=True,
        sqlite_where=sa.text("status = 'active'"),
        postgresql_where=sa.text("status = 'active'"),
    )
    op.create_table(
        "weight_checkins",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("profile_id", sa.Integer(), sa.ForeignKey("profiles.id"), nullable=False),
        sa.Column("measured_on", sa.Date(), nullable=False),
        sa.Column("weight_kg", sa.Float(), nullable=False),
        sa.UniqueConstraint(
            "profile_id",
            "measured_on",
            name="uq_weight_checkins_profile_date",
        ),
    )
    op.create_index("ix_weight_checkins_profile_id", "weight_checkins", ["profile_id"])


def downgrade() -> None:
    """Remove goals and weigh-ins."""
    op.drop_index("ix_weight_checkins_profile_id", table_name="weight_checkins")
    op.drop_table("weight_checkins")
    op.drop_index("uq_goals_active_profile", table_name="goals")
    op.drop_index("ix_goals_profile_id", table_name="goals")
    op.drop_table("goals")
