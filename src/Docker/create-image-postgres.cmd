docker build --no-cache -f Dockerfiles/Dockerfile.App -t auditbigdatasample/app ../..

docker build --no-cache -f Dockerfiles/Dockerfile.BackendForReadAudit -t auditbigdatasample/auditodatabackend ../..

docker build --no-cache -f Dockerfiles/Dockerfile.Postgres -t auditbigdatasample/postgres ../SQL