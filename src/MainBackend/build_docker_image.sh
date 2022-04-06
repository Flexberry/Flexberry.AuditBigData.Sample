#!/bin/sh
export REPO=auditbigdatatest/main-backend

docker build --no-cache -t $REPO:latest .