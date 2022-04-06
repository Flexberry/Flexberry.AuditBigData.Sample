#!/bin/sh
export REPO=auditbigdatatest/clickhouse

docker build --no-cache -t $REPO:latest .