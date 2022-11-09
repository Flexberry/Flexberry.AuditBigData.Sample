#!/bin/sh
export REPO=auditbigdatatest/postgres

docker build --no-cache -t $REPO:latest .