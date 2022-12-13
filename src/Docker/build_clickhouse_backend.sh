#!/bin/sh
cd MainBackend
docker build --no-cache -t auditbigdatatest/main-backend:latest .
cd ../BackendForReadClickhouseDatabase
docker build --no-cache -t auditbigdatatest/clickhouse-audit-odata-backend:latest .
cd ../Databases/Postgres
docker build --no-cache -t auditbigdatatest/postgres:latest .
cd ../Clickhouse
docker build --no-cache -t auditbigdatatest/clickhouse:latest .