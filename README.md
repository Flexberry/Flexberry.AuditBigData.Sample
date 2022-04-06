# Flexberry.AuditBigDataTestStand
Тестовый стенд AuditBigData

## Локальный запуск

На компьютере должен быть установлен Docker

1) С помощью shell оболочки (например GitBash) запустить скрипт src/build_all_docker_image.sh

sh build_all_docker_image.sh

2) Выполнить src/docker compose (в командной строке)

docker-compose up -d

3) Зайти в терминальном режиме в запущенный контейнер auditbigdatatest/clickhouse и выполнить команду

clickhouse-client --host clickhouse-db --user default --password P@ssw0rd --multiquery < /var/clickhouse/schema/CreateAuditTables.sql

После чего в докере будет развернута вся бэкенд часть стенда - основной бэкенд, бд postgres для него, odata-бэкенд для чтения данных AuditBigData из бд Cliskhouse и сама бд clickhouse с заготовленными таблицами AuditBigData

4) Фронт находиться в папке src/ember-app-v3

ember s -e development-loc

