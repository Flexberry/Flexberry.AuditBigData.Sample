docker build --no-cache -f SQL\Dockerfile.PostgreSql -t audittestsimple/postgre-sql ./SQL

docker build --no-cache -f Dockerfile -t audittestsimple/app ../..
