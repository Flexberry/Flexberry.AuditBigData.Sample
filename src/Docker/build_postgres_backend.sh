docker build --no-cache -f Dockerfiles/Dockerfile.App -t auditbigdatasample/app ../..

docker build --no-cache --build-arg DOTNET_ENVIRONMENT_VALUE=DockerAuditPostgres -f Dockerfiles/Dockerfile.BackendForReadAudit -t auditbigdatasample/auditodatabackend ../..

docker build --no-cache -f Dockerfiles/Dockerfile.Postgres -t auditbigdatasample/postgres ../SQL