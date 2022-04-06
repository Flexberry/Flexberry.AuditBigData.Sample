#!/bin/sh
cd MainBackend
docker build --no-cache -t auditbigdatatest/main-backend:latest .
cd ../BackendForReadClickhouseDatabase
docker build --no-cache -t auditbigdatatest/clickhouse-odata-backend:latest .
cd ../Databases/Clickhouse
docker build --no-cache -t auditbigdatatest/clickhouse:latest .
cd ../SQL
docker build --no-cache -t auditbigdatatest/postgres:latest .