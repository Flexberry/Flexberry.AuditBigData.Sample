CREATE TABLE Audit (
		primaryKey UUID NOT NULL,
		UserName VARCHAR(1024) NULL,
		UserLogin VARCHAR(1024) NULL,
		OperationId UUID NULL,
		OperationTags VARCHAR(255) NULL,
		ObjectType VARCHAR(1024) NULL,
		ObjectPrimaryKey VARCHAR(38) NULL,
		OperationTime TIMESTAMP(3) NOT NULL,
		OperationType VARCHAR(255) NOT NULL,
		ExecutionStatus VARCHAR(10) NOT NULL,
		Source VARCHAR(255) NULL,
		SerializedFields JSONB NULL,
		HeadAuditEntity UUID NULL,
		PRIMARY KEY (primaryKey));
		
	ALTER TABLE Audit ADD CONSTRAINT FK2b809dfb762a4e9db0096d2b1fe889ae FOREIGN KEY (HeadAuditEntity) REFERENCES Audit; 
	CREATE INDEX Indexa91db9c259624f959230d031bc90415c on Audit (HeadAuditEntity);
	CREATE INDEX Indexa91db9c259624f959230d031bc90416c on Audit (OperationTime);
	CLUSTER Audit USING Indexa91db9c259624f959230d031bc90416c;
	
CREATE TABLE Class4 (

 primaryKey UUID NOT NULL,

 Field41 VARCHAR(255) NULL,

 Field42 VARCHAR(255) NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Class2 (

 primaryKey UUID NOT NULL,

 Field21 VARCHAR(255) NULL,

 Field22 VARCHAR(255) NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 Class4 UUID NULL,

 Class1 UUID NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Class1 (

 primaryKey UUID NOT NULL,

 Field11 VARCHAR(255) NULL,

 Field12 VARCHAR(255) NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Class3 (

 primaryKey UUID NOT NULL,

 Field31 VARCHAR(255) NULL,

 Field32 VARCHAR(255) NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 Class2 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMNETLOCKDATA (

 LockKey VARCHAR(300) NOT NULL,

 UserName VARCHAR(300) NOT NULL,

 LockDate TIMESTAMP(3) NULL,

 PRIMARY KEY (LockKey));



CREATE TABLE STORMSETTINGS (

 primaryKey UUID NOT NULL,

 Module VARCHAR(1000) NULL,

 Name VARCHAR(255) NULL,

 Value TEXT NULL,

 "User" VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMAdvLimit (

 primaryKey UUID NOT NULL,

 "User" VARCHAR(255) NULL,

 Published BOOLEAN NULL,

 Module VARCHAR(255) NULL,

 Name VARCHAR(255) NULL,

 Value TEXT NULL,

 HotKeyData INT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERSETTING (

 primaryKey UUID NOT NULL,

 Name VARCHAR(255) NOT NULL,

 DataObjectView VARCHAR(255) NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMWEBSEARCH (

 primaryKey UUID NOT NULL,

 Name VARCHAR(255) NOT NULL,

 "Order" INT NOT NULL,

 PresentView VARCHAR(255) NOT NULL,

 DetailedView VARCHAR(255) NOT NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERDETAIL (

 primaryKey UUID NOT NULL,

 Caption VARCHAR(255) NOT NULL,

 DataObjectView VARCHAR(255) NOT NULL,

 ConnectMasterProp VARCHAR(255) NOT NULL,

 OwnerConnectProp VARCHAR(255) NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERLOOKUP (

 primaryKey UUID NOT NULL,

 DataObjectType VARCHAR(255) NOT NULL,

 Container VARCHAR(255) NULL,

 ContainerTag VARCHAR(255) NULL,

 FieldsToView VARCHAR(255) NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE UserSetting (

 primaryKey UUID NOT NULL,

 AppName VARCHAR(256) NULL,

 UserName VARCHAR(512) NULL,

 UserGuid UUID NULL,

 ModuleName VARCHAR(1024) NULL,

 ModuleGuid UUID NULL,

 SettName VARCHAR(256) NULL,

 SettGuid UUID NULL,

 SettLastAccessTime TIMESTAMP(3) NULL,

 StrVal VARCHAR(256) NULL,

 TxtVal TEXT NULL,

 IntVal INT NULL,

 BoolVal BOOLEAN NULL,

 GuidVal UUID NULL,

 DecimalVal DECIMAL(20,10) NULL,

 DateTimeVal TIMESTAMP(3) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE ApplicationLog (

 primaryKey UUID NOT NULL,

 Category VARCHAR(64) NULL,

 EventId INT NULL,

 Priority INT NULL,

 Severity VARCHAR(32) NULL,

 Title VARCHAR(256) NULL,

 Timestamp TIMESTAMP(3) NULL,

 MachineName VARCHAR(32) NULL,

 AppDomainName VARCHAR(512) NULL,

 ProcessId VARCHAR(256) NULL,

 ProcessName VARCHAR(512) NULL,

 ThreadName VARCHAR(512) NULL,

 Win32ThreadId VARCHAR(128) NULL,

 Message VARCHAR(2500) NULL,

 FormattedMessage TEXT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMAuObjType (

 primaryKey UUID NOT NULL,

 Name VARCHAR(255) NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMAuEntity (

 primaryKey UUID NOT NULL,

 ObjectPrimaryKey VARCHAR(38) NOT NULL,

 OperationTime TIMESTAMP(3) NOT NULL,

 OperationType VARCHAR(100) NOT NULL,

 ExecutionResult VARCHAR(12) NOT NULL,

 Source VARCHAR(255) NOT NULL,

 SerializedField TEXT NULL,

 User_m0 UUID NOT NULL,

 ObjectType_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMAuField (

 primaryKey UUID NOT NULL,

 Field VARCHAR(100) NOT NULL,

 OldValue TEXT NULL,

 NewValue TEXT NULL,

 MainChange_m0 UUID NULL,

 AuditEntity_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMAG (

 primaryKey UUID NOT NULL,

 Name VARCHAR(80) NOT NULL,

 Login VARCHAR(50) NULL,

 Pwd VARCHAR(50) NULL,

 IsUser BOOLEAN NOT NULL,

 IsGroup BOOLEAN NOT NULL,

 IsRole BOOLEAN NOT NULL,

 ConnString VARCHAR(255) NULL,

 Enabled BOOLEAN NULL,

 Email VARCHAR(80) NULL,

 Comment VARCHAR NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMLG (

 primaryKey UUID NOT NULL,

 Group_m0 UUID NOT NULL,

 User_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMI (

 primaryKey UUID NOT NULL,

 User_m0 UUID NOT NULL,

 Agent_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Session (

 primaryKey UUID NOT NULL,

 UserKey UUID NULL,

 StartedAt TIMESTAMP(3) NULL,

 LastAccess TIMESTAMP(3) NULL,

 Closed BOOLEAN NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMS (

 primaryKey UUID NOT NULL,

 Name VARCHAR(100) NOT NULL,

 Type VARCHAR(100) NULL,

 IsAttribute BOOLEAN NOT NULL,

 IsOperation BOOLEAN NOT NULL,

 IsView BOOLEAN NOT NULL,

 IsClass BOOLEAN NOT NULL,

 SharedOper BOOLEAN NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 Comment VARCHAR NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMP (

 primaryKey UUID NOT NULL,

 Subject_m0 UUID NOT NULL,

 Agent_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMF (

 primaryKey UUID NOT NULL,

 FilterText TEXT NULL,

 Name VARCHAR(255) NULL,

 FilterTypeNView VARCHAR(255) NULL,

 Subject_m0 UUID NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMAC (

 primaryKey UUID NOT NULL,

 TypeAccess VARCHAR(7) NULL,

 Filter_m0 UUID NULL,

 Permition_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMLO (

 primaryKey UUID NOT NULL,

 Class_m0 UUID NOT NULL,

 Operation_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMLA (

 primaryKey UUID NOT NULL,

 View_m0 UUID NOT NULL,

 Attribute_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMLV (

 primaryKey UUID NOT NULL,

 Class_m0 UUID NOT NULL,

 View_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMLR (

 primaryKey UUID NOT NULL,

 StartDate TIMESTAMP(3) NULL,

 EndDate TIMESTAMP(3) NULL,

 Agent_m0 UUID NOT NULL,

 Role_m0 UUID NOT NULL,

 CreateTime TIMESTAMP(3) NULL,

 Creator VARCHAR(255) NULL,

 EditTime TIMESTAMP(3) NULL,

 Editor VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));


ALTER TABLE Class2 ADD CONSTRAINT FK0d610300dffe443b8b8fa01d60915f4b FOREIGN KEY (Class4) REFERENCES Class4; 
CREATE INDEX Index38d03a6a306f4971391531f8a7a1d128522f0f72 on Class2 (Class4); 

ALTER TABLE Class2 ADD CONSTRAINT FK6d1cd49df5854525bdbb8fc783704f87 FOREIGN KEY (Class1) REFERENCES Class1; 
CREATE INDEX Index3874a3ae5aa138409cb95f04d5d3298e550a0eb4 on Class2 (Class1); 

ALTER TABLE Class3 ADD CONSTRAINT FK8e30011c483f4f448be28355777cdb31 FOREIGN KEY (Class2) REFERENCES Class2; 
CREATE INDEX Indexb801aadeaac44cd8703329271789265dc2b1bae6 on Class3 (Class2); 

ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FK451200c73d5844aaa83cc778ef114898 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK7f03c6255fa643edbd7b9210504e95b5 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKf89596fa16c543a0aeb7aff9f1c630b7 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

ALTER TABLE STORMAuEntity ADD CONSTRAINT FK29797e2d64274d36bc3bc39c29291658 FOREIGN KEY (ObjectType_m0) REFERENCES STORMAuObjType; 

ALTER TABLE STORMAuField ADD CONSTRAINT FK156a8f9a031c4a00b6c16e09cbbccb1e FOREIGN KEY (MainChange_m0) REFERENCES STORMAuField; 

ALTER TABLE STORMAuField ADD CONSTRAINT FK22f5f293d3e849e19adb7f04d1b760c0 FOREIGN KEY (AuditEntity_m0) REFERENCES STORMAuEntity; 

 ALTER TABLE STORMLG ADD CONSTRAINT FK9def1b4063f040fc9d4ce78f9bcfc730 FOREIGN KEY (Group_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMLG ADD CONSTRAINT FK2f98b172a1c24348a085693051cb6c75 FOREIGN KEY (User_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMI ADD CONSTRAINT FK1fdfdd8295524997b67882e085b2245f FOREIGN KEY (User_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMI ADD CONSTRAINT FK0020686823e240868e996f6b47534350 FOREIGN KEY (Agent_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMP ADD CONSTRAINT FK160bbefbbeb8447da880f86abe465eba FOREIGN KEY (Subject_m0) REFERENCES STORMS; 

 ALTER TABLE STORMP ADD CONSTRAINT FKa32228d1259c44bc94bcb681efbd6d7e FOREIGN KEY (Agent_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMF ADD CONSTRAINT FKd6579815269b4394b53687e53dff8b08 FOREIGN KEY (Subject_m0) REFERENCES STORMS; 

 ALTER TABLE STORMAC ADD CONSTRAINT FK462359f3fe1b4348af3a2f045dc33fa7 FOREIGN KEY (Filter_m0) REFERENCES STORMF; 

 ALTER TABLE STORMAC ADD CONSTRAINT FK05a374b1b8a846f4b446ca4839a751eb FOREIGN KEY (Permition_m0) REFERENCES STORMP; 

 ALTER TABLE STORMLO ADD CONSTRAINT FKc762afd449be4c48adf6d76bc48323db FOREIGN KEY (Class_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLO ADD CONSTRAINT FK0a10f9e4e5a14201b6fbfd6c57969e49 FOREIGN KEY (Operation_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLA ADD CONSTRAINT FK56934193400740feb8fda331e784c7fc FOREIGN KEY (View_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLA ADD CONSTRAINT FKc6c814223ed64d3a90a7a9cb0a815064 FOREIGN KEY (Attribute_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLV ADD CONSTRAINT FK031eab0dd1944a5abd5bfe900ede1a57 FOREIGN KEY (Class_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLV ADD CONSTRAINT FK24a004155f5144edae7482d3dca8b035 FOREIGN KEY (View_m0) REFERENCES STORMS; 

 ALTER TABLE STORMLR ADD CONSTRAINT FK0c0d25accafe40ceb985055e4986b0bf FOREIGN KEY (Agent_m0) REFERENCES STORMAG; 

 ALTER TABLE STORMLR ADD CONSTRAINT FKf85155d452d8474a97dd6665ba8dd465 FOREIGN KEY (Role_m0) REFERENCES STORMAG;
 
 INSERT INTO public.stormag(
	primarykey, name, login, pwd, isuser, isgroup, isrole,  enabled)
	VALUES ('a30d4348-1654-4097-9b8e-8dc626e4b4e9', 'Administrator', 'admin', 'D033E22AE348AEB5660FC2140AEC35850C4DA997', true, false, false, true);