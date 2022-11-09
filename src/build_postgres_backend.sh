#!/bin/sh
cd MainBackend
docker build --no-cache -t auditbigdatatest/main-backend:latest .
cd ../BackendForReadPostgresDatabase
docker build --no-cache -t auditbigdatatest/postgres-audit-odata-backend:latest .
cd ../Databases/Postgres
docker build --no-cache -t auditbigdatatest/postgres:latest .