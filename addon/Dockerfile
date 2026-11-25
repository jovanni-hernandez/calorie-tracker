ARG BUILD_FROM
FROM ${BUILD_FROM}

WORKDIR /app
COPY pyproject.toml ./
COPY src ./src
COPY migrations ./migrations
COPY alembic.ini ./
RUN pip install --no-cache-dir .

COPY run.sh /run.sh
RUN chmod a+x /run.sh
CMD ["/run.sh"]
