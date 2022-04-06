FROM mono:latest as backend

#Копируем всю папку backend проекта. В данном случае там уже должен находиться билд. Также, если он предварительно не собирается, нужно здесь написать соотв команды(ms-build).
COPY /ODataBackend /backend/ODataBackend
COPY NewPlatform.Flexberry.AuditBigDataODataBackend.sln /backend

COPY DockerConfig/NuGet.Config /nuget.config

RUN \
 cd /backend ;\
 nuget restore NewPlatform.Flexberry.AuditBigDataODataBackend.sln; \
 msbuild NewPlatform.Flexberry.AuditBigDataODataBackend.sln

RUN \
	cd /backend ;\
	rm -f ODataBackend/bin/Mono.Security.dll;\
	rm -f ODataBackend/bin/ICSSoft.STORMNET.Windows.Forms.XmlViewer.dll;\
	rm -f ODataBackend/Global.asax.cs;\
	rm -f ODataBackend/Web.Debug.config;\
	rm -f ODataBackend/Web.Azure.config;\
	rm -f ODataBackend/Web.rtc-web.config;\
	rm -f ODataBackend/Web.Release.config;\
	rm -f ODataBackend/packages.config;\
	rm -fr ODataBackend/App_Start;\
	rm -fr ODataBackend/Properties;\
	rm -fr ODataBackend/obj;\
	rm ODataBackend/Web.config;\
	mv ODataBackend/Web.Docker.config ODataBackend/Web.config

#Теперь переходим к самому web-серверу.
FROM flexberry/mono-xsp:latest
 
WORKDIR /app

COPY --from=backend /backend/ODataBackend /app
WORKDIR /app

RUN mkdir -p /usr/share/man/man1 && \
    apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y xorg xvfb

#Копируем скрипт установки переменных окружения и дисплея.
COPY DockerConfig/prepareConf.sh /app

# Символ перевода строки в скрипте может сломать исполнение скрипта.
RUN sed -i 's/\r$//' /app/prepareConf.sh

#При старте контейнера запускаются подготовительные скрипты настройки
# Start Xvfb and the Web Api
ENV DISPLAY :99
CMD bash -x /app/prepareConf.sh
