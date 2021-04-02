docker build --no-cache -f SQL\Dockerfile.PostgreSql -t auditteststand/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t auditteststand/app ../..
