#!/bin/sh
export REPO=auditbigdatatest/clickhouse-odata-backend

docker build --no-cache -t $REPO:latest .