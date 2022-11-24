# Flexberry.AuditBigDataTestStand
Тестовый стенд AuditBigData

## Локальный запуск

На компьютере должен быть установлен Docker

Бэкенд часть:

Записи аудита могут писаться в БД Clickhouse или Postgres.

1) Запустить соответствующий sh скрипт 

	build_clickhouse_backend 
	build_postgres_backend
	
2) После завершения построения докер-образов запустить соотв cmd файл

	run-clickhouse-backend
	или
	run-postgres-backend
	
3) Если выбран clickhouse, то после запуска контейнера auditbigdatatest/clickhouse нужно зайти в его терминал и вручную выполнить команду

clickhouse-client --host clickhouse-db --user default --password P@ssw0rd --multiquery < /var/clickhouse/schema/CreateAuditTables.sql

	
Для остановки контейнеров использовать stop-backend.cmd


Фронтэнд часть:

Фронтэнд есть для ember v2 и v3. Рекомендуется использовать v3

перейти в папку src/ember-app-v3

ember s -e development-loc

