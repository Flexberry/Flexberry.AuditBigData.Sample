#!/bin/sh
export REPO=auditbigdatatest/clickhouse-audit-odata-backend

docker build --no-cache -t $REPO:latest .