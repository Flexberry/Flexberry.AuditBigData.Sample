#!/bin/sh
export REPO=auditbigdatatest/postgres-audit-odata-backend

docker build --no-cache -t $REPO:latest .