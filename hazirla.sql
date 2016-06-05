USE [Development]
GO

/****** Object:  Table [dbo].[MCR_DEF_MUSAKSIYONLIST]    Script Date: 02/16/2014 22:36:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MCR_DEF_MUSAKSIYONLIST](
	[INTCODE] [int] IDENTITY(1,1) NOT NULL,
	[AKSIYON] [nvarchar](255) NOT NULL,
	[AKOD] [nvarchar](255) NOT NULL,
	[ACIKLAMA] [nvarchar](255) NOT NULL,
	[ISRPC] [bit] NULL,
	[ISAKTIF] [bit] NULL
) ON [PRIMARY]

GO
CREATE TABLE [dbo].[MCR_DIM_AKSIYONKODU](
	[INTCODE] [float] NULL,
	[AKSIYON] [nvarchar](255) NULL,
	[URUN_MUSTERI] [float] NULL
) ON [PRIMARY]

GO

USE [Development]
GO

/****** Object:  Table [dbo].[MCR_DIM_AKSIYONLAR]    Script Date: 02/16/2014 22:37:08 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MCR_DIM_AKSIYONLAR](
	[CUST_ID] [nvarchar](255) NULL,
	[USERID] [nvarchar](255) NULL,
	[AKSIYONKODU] [nvarchar](255) NULL,
	[AKSIYONZAMANI] [nvarchar](255) NULL
) ON [PRIMARY]

GO
USE [Development]
GO

/****** Object:  Table [dbo].[MCR_DIM_AKTIF]    Script Date: 02/16/2014 22:37:24 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[MCR_DIM_AKTIF](
	[CUST_ID] [float] NULL,
	[USERID] [varchar](25) NULL,
	[GIRISZAMANI] [datetime] NULL,
	[TAMAMLANMAZAMANI] [datetime] NULL,
	[KAT_DURUM] [float] NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

USE [Development]
GO

/****** Object:  Table [dbo].[MCR_DIM_HAVUZ]    Script Date: 02/16/2014 22:37:36 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MCR_DIM_HAVUZ](
	[HAVUZKODU] [float] NULL,
	[HAVUZADI] [nvarchar](255) NULL
) ON [PRIMARY]

GO

USE [Development]
GO

/****** Object:  Table [dbo].[MCR_DIM_KATAGORI]    Script Date: 02/16/2014 22:37:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MCR_DIM_KATAGORI](
	[KOD] [float] NULL,
	[ACIKLAMA] [nvarchar](255) NULL,
	[KATEGORI] [nvarchar](255) NULL
) ON [PRIMARY]

GO

USE [Development]
GO

/****** Object:  Table [dbo].[MCR_DIM_MUSTERILER]    Script Date: 02/16/2014 22:37:58 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MCR_DIM_MUSTERILER](
	[CUST_ID] [nvarchar](255) NULL,
	[HAVUZID] [nvarchar](255) NULL,
	[BILGIGUNCELLENMEZAMANI] [nvarchar](255) NULL,
	[GGS] [nvarchar](255) NULL
) ON [PRIMARY]

GO

USE [Development]
GO

/****** Object:  Table [dbo].[MCR_DIM_SAYFALAR]    Script Date: 02/16/2014 22:38:10 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[MCR_DIM_SAYFALAR](
	[SAYFAID] [float] NULL,
	[SAYFAADI] [nvarchar](255) NULL,
	[YETKIDUZEYI] [float] NULL,
	[REDIRECTPAGE] [varchar](100) NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

USE [Development]
GO

/****** Object:  Table [dbo].[MCR_DIM_USER]    Script Date: 02/16/2014 22:38:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MCR_DIM_USER](
	[INTCODE] [float] NULL,
	[USERID] [nvarchar](255) NULL,
	[USERNAME] [nvarchar](255) NULL,
	[YETKI] [float] NULL,
	[HAVUZID] [float] NULL,
	[GIRISZAMANI] [datetime] NULL,
	[TIMEOUTZAMANI] [datetime] NULL,
	[AKTIFSAYFA] [float] NULL,
	[ARDISIK] [float] NULL
) ON [PRIMARY]

GO

USE [Development]
GO

/****** Object:  Table [dbo].[MCR_TBL_EXTEL]    Script Date: 02/16/2014 22:38:33 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[MCR_TBL_EXTEL](
	[INTCODE] [int] IDENTITY(1,1) NOT NULL,
	[OID] [int] NULL,
	[CID] [int] NULL,
	[UID] [varchar](50) NOT NULL,
	[ISIM] [varchar](500) NOT NULL,
	[NUMARA] [varchar](100) NOT NULL,
	[DT] [datetime] NOT NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

USE [Development]
GO

/****** Object:  Table [dbo].[MCR_TBL_MEMO]    Script Date: 02/16/2014 22:38:44 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[MCR_TBL_MEMO](
	[INTCODE] [int] IDENTITY(1,1) NOT NULL,
	[TOKEN] [int] NOT NULL,
	[OID] [int] NOT NULL,
	[CID] [int] NULL,
	[UID] [varchar](50) NULL,
	[MEMO] [varchar](max) NOT NULL,
	[MDT] [datetime] NULL,
	[GIRIS] [tinyint] NULL,
	[ODEYEMEME] [int] NULL,
	[YYRED] [int] NULL,
	[MUSTERIAKSIYON] [int] NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

USE [Development]
GO

/****** Object:  Table [dbo].[MCR_TBL_TELAKSIYON]    Script Date: 02/16/2014 22:38:55 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[MCR_TBL_TELAKSIYON](
	[INTCODE] [int] IDENTITY(1,1) NOT NULL,
	[Position] [int] NOT NULL,
	[TOKEN] [int] NULL,
	[OID] [int] NULL,
	[CID] [int] NULL,
	[UID] [varchar](25) NULL,
	[tel] [nvarchar](25) NULL,
	[result] [varchar](25) NULL,
	[DT] [datetime] NULL,
	[GIRIS] [varchar](50) NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

USE [Development]
GO

/****** Object:  Table [dbo].[MCR_TBL_URNAKSIYON]    Script Date: 02/16/2014 22:39:10 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[MCR_TBL_URNAKSIYON](
	[INTCODE] [int] IDENTITY(1,1) NOT NULL,
	[Position] [int] NOT NULL,
	[TOKEN] [int] NULL,
	[OID] [int] NULL,
	[CID] [int] NULL,
	[UID] [varchar](25) NULL,
	[PID] [varchar](50) NULL,
	[TRH] [nvarchar](55) NULL,
	[TTR] [nvarchar](55) NULL,
	[result] [varchar](25) NULL,
	[DT] [datetime] NULL,
	[GIRIS] [tinyint] NULL,
	[GGS] [nvarchar](55) NULL,
	[TUR] [nvarchar](55) NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

USE [Development]
GO

/****** Object:  StoredProcedure [dbo].[MCR_SP_AKTIF]    Script Date: 02/16/2014 22:39:36 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[MCR_SP_AKTIF](@U VARCHAR(15)='A25318'
, @C FLOAT=0) AS 
 
 --BÜTÜN KULLANICILARDA LOGOUT OLUNAN MÜÞTERÝLERÝN DURUMLARINI GÜNCELLE
UPDATE MCR_DIM_AKTIF
   SET KAT_DURUM=5
 WHERE KAT_DURUM=0
   AND TAMAMLANMAZAMANI<GETDATE()


DECLARE @RETVAL FLOAT;
DECLARE @ISACTIVE BIT=0;
--MCR_SP_AKTIF A25317 ,74508537
-- SELECT * FROM MCR_DIM_AKTIF
 

--0	ACIK	AKTIF
--2	KAPALI	AKTIF
--3	RANDEVU	AKTIF
--5 LOGOUT OLMUS
--6 vazgeçmiþ(bir müþterinin içindeyken bir baþkasýný tuþlamýþ)
--7 bitir'i talep etmiþ
IF (@C=0) 
BEGIN;
		SELECT  @ISACTIVE= CASE  COUNT(*) WHEN 0 THEN 0 ELSE 1 END  
		  FROM MCR_DIM_AKTIF
		 WHERE TAMAMLANMAZAMANI>GETDATE()
		   AND KAT_DURUM=0
		   AND USERID=@U;
		   
		IF (@ISACTIVE=1)
		BEGIN
		   
		SELECT TOP 1  @RETVAL= CUST_ID
		  FROM MCR_DIM_AKTIF
		 WHERE TAMAMLANMAZAMANI>GETDATE()
		   AND KAT_DURUM=0
		   AND USERID=@U
		 ORDER BY GIRISZAMANI ASC;
END 
ELSE 
BEGIN
SET @RETVAL= 0;
END

END
ELSE
BEGIN 

		DECLARE @K VARCHAR(15);

		SELECT @K=USERID, @ISACTIVE= CASE KAT_DURUM WHEN 0 THEN 1 ELSE 0 END  
		  FROM MCR_DIM_AKTIF
		 WHERE TAMAMLANMAZAMANI>GETDATE()
		   AND KAT_DURUM=0
		   AND CUST_ID=@C
		   
		   

		IF (@ISACTIVE=1 AND @K!=@U )
		BEGIN
		
				SET @RETVAL=2; --BÝR BAÞKASI BU MÜÞTERDE ÝÞLEM YAPIYOR
		
		END
		ELSE IF (@ISACTIVE=1 AND @K=@U )
		BEGIN
		--ZATEN AYNI KÝÞÝ, TAMAMLANMA ZAMANI GUNCELLENIR
				   
				
				UPDATE MCR_DIM_AKTIF
				   SET TAMAMLANMAZAMANI=DATEADD(minute,20,GETDATE())
				 WHERE USERID=@U 
				   AND CUST_ID=@C
				   AND KAT_DURUM=0;
		
				   SET @RETVAL=@C; 
		
		END
		ELSE
		BEGIN
		--BASE O KULLANICI ÝÇÝN AKTÝF HALE GETÝRÝLÝR.
				UPDATE MCR_DIM_AKTIF
				   SET KAT_DURUM=6
				 WHERE USERID=@U 
				   AND KAT_DURUM=0;
				
				INSERT INTO MCR_DIM_AKTIF(CUST_ID,USERID,GIRISZAMANI,TAMAMLANMAZAMANI,KAT_DURUM)
				VALUES (@C,@U,GETDATE(),DATEADD(minute,20,GETDATE()),0);
				
				   SET @RETVAL=@C;
				

		END

END

SELECT @RETVAL as AKTIFBASE;
GO

USE [Development]
GO

/****** Object:  StoredProcedure [dbo].[MCR_SP_FINALMEMO]    Script Date: 02/16/2014 22:39:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

--EXEC MCR_SP_MEMO 1671354892, 62676944 ,0,'A25318','','2625786308.2,5326606172.0,5326636172.0,5334801527.0,5337382563.0,2625786338.0,5414801527.0,5333626035.0,5332943225.0,2625786118.0,5378511436.0,','aksiyon.5478000142175100.1,tarih.5478000142175100.,tutar.5478000142175100.,'
 
 --select * from MCR_TBL_URNAKSIYON
 --select * from MCR_TBL_TELAKSIYON
 
--+ ODY + "','" + YYR + "','" + MAK + "'
 
 CREATE PROC [dbo].[MCR_SP_FINALMEMO](@TOKEN INT,@OID INT,@CID INT,@UID VARCHAR(50),@MEMO VARCHAR(MAX)='0',@TEL NVARCHAR(MAX)='0',@URN NVARCHAR(MAX)='0',@ODY INT,@YYR INT,@MAK INT) AS
BEGIN TRY
INSERT INTO MCR_TBL_MEMO (TOKEN, OID, CID, UID, MEMO, MDT,GIRIS,ODEYEMEME,YYRED,MUSTERIAKSIYON)
VALUES (@TOKEN,@OID ,@CID,@UID ,@MEMO,GETDATE(),1,@ODY,@YYR,@MAK)
 
 
 
INSERT INTO MCR_TBL_TELAKSIYON (Position,TOKEN, OID, CID, UID,tel,result,DT,GIRIS )
 select Position,TOKEN, OID, CID, UID,tel,result,DT ,1
   from DBO.MCR_FN_TELARRAY(@TOKEN,@OID ,@CID,@UID ,@TEL,',')
  where tel is not null
    and result <>0
    
    

   
/*
   
 DECLARE @TOKEN INT =0
  DECLARE @OID INT=0
   DECLARE @CID INT=0
    DECLARE @UID VARCHAR(15)='AA'
     DECLARE @ARR NVARCHAR(MAX)='aksiyon.5478000142175100.3,tarih.5478000142175100.VAL1A,tutar.5478000142175100.,aksiyon.547800.2,tarih.547800.VAL2A,tutar.547800.VAL2B,aksiyon.ererfe.0,tarih.ererfe.VAL2A,tutar.ererfe.VAL3B,aksiyon.d3d3de.4,tarih.d3d3de.,tutar.d3d3de.VAL4B,aksiyon.d3e333e32.6,tarih.d3e333e32.VAL5A,tutar.d3e333e32.,'
 
 
 select  @TOKEN TOKEN,@OID AS OID,@CID CID,@UID AS UID, A.REF AS REFERANS, A.RSLT AS RESULT,D.URNAKS AS ACIKLAMA , B.RSLT AS TARIH ,C.RSLT AS TUTAR
   from 
  ( SELECT REF,RSLT FROM DBO.MCR_FN_URUN_F_ARRAY(@TOKEN,@OID ,@CID,@UID ,@ARR,',') A WHERE A.VAL='aksiyon') A
       LEFT JOIN
  ( SELECT REF,RSLT FROM DBO.MCR_FN_URUN_F_ARRAY(@TOKEN,@OID ,@CID,@UID ,@ARR,',') A WHERE A.VAL='tarih') B
   ON A.REF=B.REF       LEFT JOIN
  ( SELECT REF,RSLT FROM DBO.MCR_FN_URUN_F_ARRAY(@TOKEN,@OID ,@CID,@UID ,@ARR,',') A WHERE A.VAL='tutar') C
   ON A.REF=C.REF LEFT JOIN dbo.MCR_DEF_URNAKSIYONLIST D ON A.RSLT = D.INTCODE
    
*/


/*
INSERT INTO dbo.MCR_TBL_URNAKSIYON(Position, TOKEN, OID, CID, UID, PID, TRH, TTR, result, DT,GIRIS)
 select Position,TOKEN, OID, CID, UID,PID,TRH,TTR,result,DT ,'FINAL' as GIRIS
   from DBO.MCR_FN_URNARRAY(@TOKEN,@OID ,@CID,@UID ,@URN,',')
  WHERE PID IS NOT NULL
    and result <>0
 */
--EXEC MCR_SP_FINALMEMO 1664717390, 62676944 ,0,'A25318','','2625786118.1,5326606172.0,2625786308.0,5332943225.0,5333626035.0,5337382563.0,5414801527.0,2625786338.0,5334801527.0,5326636172.0,5378511436.0,','ggs.5478000142175100.17,aksiyon.5478000142175100.32,tarih.5478000142175100.hh,tutar.5478000142175100.45t,'
INSERT INTO dbo.MCR_TBL_URNAKSIYON(Position, TOKEN, OID, CID, UID, PID, TRH, TTR, result, DT,GIRIS,GGS,TUR)
      select  A.Position,@TOKEN TOKEN,@OID AS OID,@CID CID,@UID AS UID, A.REF AS PID, B.RSLT AS TRH,C.RSLT AS TTR,A.RSLT AS result,GETDATE(),1 as GIRIS,D.GGS,e.TUR
   from 
  ( SELECT Position,REF,RSLT FROM DBO.MCR_FN_URUN_F_ARRAY(@TOKEN,@OID ,@CID,@UID ,@URN,',') A WHERE A.VAL='aksiyon') A
       LEFT JOIN
  ( SELECT REF,RSLT FROM DBO.MCR_FN_URUN_F_ARRAY(@TOKEN,@OID ,@CID,@UID ,@URN,',') A WHERE A.VAL='tarih') B
   ON A.REF=B.REF       LEFT JOIN
  ( SELECT REF,RSLT FROM DBO.MCR_FN_URUN_F_ARRAY(@TOKEN,@OID ,@CID,@UID ,@URN,',') A WHERE A.VAL='tutar') C
   ON A.REF=C.REF  LEFT JOIN
  ( SELECT REF,RSLT AS GGS FROM DBO.MCR_FN_URUN_F_ARRAY(@TOKEN,@OID ,@CID,@UID ,@URN,',') A WHERE A.VAL='ggs') D
   ON A.REF=D.REF   LEFT JOIN
  ( SELECT REF,RSLT AS TUR FROM DBO.MCR_FN_URUN_F_ARRAY(@TOKEN,@OID ,@CID,@UID ,@URN,',') A WHERE A.VAL='tur') E
   ON A.REF=E.REF 
   --LEFT JOIN dbo.MCR_DEF_URNAKSIYONLIST D ON A.RSLT = D.INTCODE
   
 --SELECT * FROM MCR_TBL_URNAKSIYON
 
 
SELECT 1 AS RV;
END TRY
BEGIN CATCH
SELECT 0 AS RV;
END CATCH

 
GO

USE [Development]
GO

/****** Object:  StoredProcedure [dbo].[MCR_SP_HSTTEL]    Script Date: 02/16/2014 22:39:58 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE  proc [dbo].[MCR_SP_HSTTEL](@ARR nvarchar(max))as
--EXEC MCR_SP_HSTTEL '2625786118,5326606172,2625786308,5332943225,5333626035,5337382563,5414801527,2625786338,5334801527,5326636172,5378511436,'
--declare @ARR NVARCHAR(MAX)
declare @ARY NVARCHAR(MAX)
--SET @ARR='2625786118,5326606172,2625786308,5332943225,5333626035,5337382563,5414801527,2625786338,5334801527,5326636172,5378511436,'
SET @ARY='['+@ARR +']';
SET @ARR =REPLACE(@ARY,',]',']')
SET @ARR =REPLACE(@ARR,',','], [')

exec ('SELECT DT,'+ @ARR +' FROM (
select tel, convert(int,result) as result, datediff(ss,''01.01.1970'',DT) DT from MCR_TBL_TELAKSIYON

) AS A PIVOT(AVG(result) FOR tel IN('+@ARR+')) AS P' )
/*
SELECT DT, [2625786118], [5326606172], [2625786308], [5332943225], [5333626035], [5337382563], [5414801527], [2625786338], [5334801527], [5326636172], [5378511436] 
FROM (
select tel, convert(int,result) as result, datediff(ss,'01.01.1970',DT) DT from MCR_TBL_TELAKSIYON

) AS A 
PIVOT( avg (result )
FOR tel IN( [2625786118], [5326606172], [2625786308], [5332943225], [5333626035], [5337382563], [5414801527], [2625786338], [5334801527], [5326636172], [5378511436])
) AS P
*/







GO

USE [Development]
GO

/****** Object:  StoredProcedure [dbo].[MCR_SP_MEMO]    Script Date: 02/16/2014 22:40:09 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

--{OID: "62676944",CID:"14326187",name:"A25318",tbMEMO:"Json.aspx%3FI%3D6%26T%3D1181%26M%3D14326187%26TP%3D5,TELARRAY:"5334801527.0,5334801527.-1,5334801527.0,2625786308.-1,2625786338.0,2625786338.-1," }
--EXEC MCR_SP_MEMO 1885752646, 62676944 ,20974026,'A25318','urun%20aksiyonu','5334941768.4,2625786028.0,2625786113.0,','29049819|||1~5458470187422085|val2|val1|3~'

CREATE PROC [dbo].[MCR_SP_MEMO](@TOKEN INT,@OID INT,@CID INT,@UID VARCHAR(50),@MEMO VARCHAR(MAX)='0',@TEL NVARCHAR(MAX)='0',@URN NVARCHAR(MAX)='0') AS
BEGIN TRY
INSERT INTO MCR_TBL_MEMO (TOKEN, OID, CID, UID, MEMO, MDT)
VALUES (@TOKEN,@OID ,@CID,@UID ,@MEMO,GETDATE())
 
 --select * from MCR_TBL_URNAKSIYON
 --select * from MCR_TBL_TELAKSIYON
 
 INSERT INTO MCR_TBL_TELAKSIYON (Position,TOKEN, OID, CID, UID,tel,result,DT )
 select Position,TOKEN, OID, CID, UID,tel,result,DT 
   from DBO.MCR_FN_TELARRAY(@TOKEN,@OID ,@CID,@UID ,@TEL,',')
  where tel is not null
    and result <>0

INSERT INTO dbo.MCR_TBL_URNAKSIYON(Position, TOKEN, OID, CID, UID, PID, TRH, TTR, result, DT)
 select Position,TOKEN, OID, CID, UID,PID,TRH,TTR,result,DT 
   from DBO.MCR_FN_URNARRAY(@TOKEN,@OID ,@CID,@UID ,@URN,'~')
  WHERE PID IS NOT NULL
    and result <>0
 
SELECT 1 AS RV;
END TRY
BEGIN CATCH
SELECT 0 AS RV;
END CATCH

 
GO

USE [Development]
GO

/****** Object:  StoredProcedure [dbo].[MCR_SP_MUSTERIBITIR]    Script Date: 02/16/2014 22:40:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[MCR_SP_MUSTERIBITIR](@U VARCHAR(15)='A25318'
, @C FLOAT=0,@TALEP INT=0) AS 
 
DECLARE @RETVAL INT;

--1 BITIRILDI
--0 IZIN VERILMEDI
--3 
 IF (@TALEP=0)   
 BEGIN
UPDATE MCR_DIM_AKTIF
   SET KAT_DURUM=7,TAMAMLANMAZAMANI=GETDATE()
 WHERE KAT_DURUM=0
   AND CUST_ID=@C
   AND USERID=@U;
   
  SET @RETVAL=1
 END
 
 SELECT @RETVAL DURUM;
GO

USE [Development]
GO

/****** Object:  StoredProcedure [dbo].[MCR_SP_NAVI]    Script Date: 02/16/2014 22:40:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[MCR_SP_NAVI] (

 @UID VARCHAR(15)='A25318' ,
 @ISTENENSAYFA TINYINT =99) AS
 
DECLARE @HEDEFSAYFA TINYINT  
--DECLARE @BUTONABASILMIS TINYINT   --0

 

DECLARE @TIMEOUTZAMANI DATETIME
DECLARE @ONLINE BIT

--SELECT * from MCR_DIM_USER

select  @TIMEOUTZAMANI=TIMEOUTZAMANI 
from MCR_DIM_USER WHERE USERID=@UID

IF (@TIMEOUTZAMANI>GETDATE()) 
--TIMEOUT OLMAMIS
	BEGIN
	--PRINT 'ONLINE'
	SET @ONLINE=1;

		IF ( @ISTENENSAYFA =99)
		--BIR ISTEK SAYFASI YOKSA KALDIÐI SAYFADAN DEVAM ETSIN
			BEGIN
			SELECT @HEDEFSAYFA=AKTIFSAYFA 
			FROM MCR_DIM_USER WHERE USERID=@UID
			END
		ELSE
		--BIR ISTEK SAYFASI VAR , AKTIF SAYFAYI GUNCELLE
			BEGIN
			UPDATE MCR_DIM_USER
			   SET AKTIFSAYFA=@ISTENENSAYFA, ARDISIK=0
			 WHERE USERID=@UID;
			 
			SET @HEDEFSAYFA=@ISTENENSAYFA;
		END
	
		UPDATE MCR_DIM_USER
		   SET TIMEOUTZAMANI=DATEADD(minute,20,GETDATE())
		 WHERE USERID=@UID;



	END
ELSE
--TIMEOUT OLMUS, AKTIF SAYFA GIRIS SAYFASI OLDU, KULLANICIDAN GIRIS ISTENECEK
	BEGIN
	SET @ONLINE=0;
	--PRINT 'OFLINE'
			IF ( @ISTENENSAYFA =99)
		--BIR ISTEK SAYFASI YOKSA KALDIÐI SAYFADAN DEVAM ETSIN
			BEGIN
 
			UPDATE MCR_DIM_USER
			   SET AKTIFSAYFA=0, ARDISIK=0
			 WHERE USERID=@UID;
			 
			 SET @HEDEFSAYFA=0;
END
ELSE
		--BIR ISTEK SAYFASI VAR , AKTIF SAYFAYI GUNCELLE
			BEGIN
			UPDATE MCR_DIM_USER
			   SET AKTIFSAYFA=@ISTENENSAYFA, ARDISIK=0,TIMEOUTZAMANI=DATEADD(minute,20,GETDATE())
			 WHERE USERID=@UID;
			 
			SET @ONLINE=1;
			SET @HEDEFSAYFA=@ISTENENSAYFA;
			END
	
 



END

DECLARE @CUST float   --0


 -- SET  @CUST= MCR_SP_AKTIF @UID;
declare @t table (name float)
insert @t (name)
exec MCR_SP_AKTIF @UID

select @CUST=name from @t;

select   @ONLINE ISONLINE ,  @HEDEFSAYFA as AKTIFSAYFA  , @CUST CUST;
 
GO

USE [Development]
GO

/****** Object:  StoredProcedure [dbo].[MCR_SP_ORTAKLIKMEMO]    Script Date: 02/16/2014 22:40:45 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[MCR_SP_ORTAKLIKMEMO] (@OID INT, @TP INT) AS

IF(@TP=1)
BEGIN
SELECT   TOP 1  INTCODE,OID, CID, UID,MDT, MEMO,DBO.MCR_FN_AKSACIKLAMA(ODEYEMEME) ODY
, DBO.MCR_FN_AKSACIKLAMA(MUSTERIAKSIYON) MUSAKS,DBO.MCR_FN_AKSACIKLAMA(YYRED) YYR,DBO.MCR_FN_TUARY(TOKEN,'T') TELARR
 ,DBO.MCR_FN_TUARY(TOKEN,'T') TELARR
,DBO.MCR_FN_TUARY(TOKEN,'U') URNARR
FROM [dbo].[MCR_TBL_MEMO] 
 WHERE OID=@OID
 order by MDT DESC
  END
  ELSE BEGIN
  SELECT   TOP 5 INTCODE,OID, CID, UID,MDT, MEMO,DBO.MCR_FN_AKSACIKLAMA(ODEYEMEME) ODY
, DBO.MCR_FN_AKSACIKLAMA(MUSTERIAKSIYON) MUSAKS,DBO.MCR_FN_AKSACIKLAMA(YYRED) YYR
,DBO.MCR_FN_TUARY(TOKEN,'T') TELARR
,DBO.MCR_FN_TUARY(TOKEN,'U') URNARR
 FROM [dbo].[MCR_TBL_MEMO] 
 WHERE OID=@OID
 order by MDT DESC
 END
  
--  EXEC MCR_SP_ORTAKLIKMEMO 62676944,2
GO

USE [Development]
GO

/****** Object:  StoredProcedure [dbo].[MCR_SP_ORTAKLIKMEMOF]    Script Date: 02/16/2014 22:40:58 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

create PROC [dbo].[MCR_SP_ORTAKLIKMEMOF] (@OID INT, @TP INT) AS



  SELECT   TOP 5   INTCODE,OID, CID, UID,MDT, MEMO,DBO.MCR_FN_AKSACIKLAMA(ODEYEMEME) ODY
, DBO.MCR_FN_AKSACIKLAMA(MUSTERIAKSIYON) MUSAKS,DBO.MCR_FN_AKSACIKLAMA(YYRED) YYR
,DBO.MCR_FN_TUARY(TOKEN,'T') TELARR
,DBO.MCR_FN_TUARY(TOKEN,'U') URNARR
 FROM [dbo].[MCR_TBL_MEMO] 
 WHERE OID=@OID and INTCODE<@TP
 order by INTCODE DESC


  
--  EXEC MCR_SP_ORTAKLIKMEMO 62676944,5

GO

USE [Development]
GO

/****** Object:  StoredProcedure [dbo].[MCR_SP_TELEKLE]    Script Date: 02/16/2014 22:41:14 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE  proc [dbo].[MCR_SP_TELEKLE](@OID INT,@CID INT,@UID VARCHAR(50),@ISIM VARCHAR(500),@TEL VARCHAR(100)) as


BEGIN TRY
INSERT INTO MCR_TBL_EXTEL (OID, CID, UID, ISIM, NUMARA, DT)
VALUES (@OID ,@CID,@UID ,@ISIM,@TEL,GETDATE());
  
   SELECT 1 AS RV;

END TRY
 BEGIN CATCH 
 SELECT 0 AS RV
 END CATCH
 
GO


USE [Development]
GO

/****** Object:  UserDefinedFunction [dbo].[MCR_FN_TELARRAY]    Script Date: 02/16/2014 22:41:46 ******/
SET ANSI_NULLS OFF
GO

SET QUOTED_IDENTIFIER OFF
GO






CREATE   function [dbo].[MCR_FN_TELARRAY] 
 (@TOKEN INT,
 @OID INT,
 @CID INT,
 @UID VARCHAR(25),
 @p_SourceText  varchar(8000)
 ,@p_Delimeter varchar(100) = ',' --default to comma delimited.
 )
RETURNS @retTable TABLE 
 (
  Position  int identity(1,1),
  TOKEN INT,
  OID INT , 
  CID INT, 
  UID VARCHAR(25),
 tel NVARCHAR(25),
 result varchar(25),
 DT DATETIME
 )
AS
/*
********************************************************************************
Purpose: Parse values from a delimited string
  & return the result as an indexed table
Copyright 1996, 1997, 2000, 2003 Clayton Groom (<A href="mailto:Clayton_Groom@hotmail.com">Clayton_Groom@hotmail.com</A>)
Posted to the public domain Aug, 2004
06-17-03 Rewritten as SQL 2000 function.
 Reworked to allow for delimiters > 1 character in length 
 and to convert Text values to numbers
********************************************************************************
*/
BEGIN
 DECLARE @w_Continue  int
  ,@w_StartPos  int
  ,@w_Length  int
  ,@w_Delimeter_pos int
  ,@w_tmp_int  int
  ,@w_tmp_num  numeric(18,3)
  ,@w_tmp_txt   varchar(2000)
  ,@w_Delimeter_Len tinyint
 if len(@p_SourceText) = 0
 begin
  SET  @w_Continue = 0 -- force early exit
 end 
 else
 begin
 -- parse the original @p_SourceText array into a temp table
  SET  @w_Continue = 1
  SET @w_StartPos = 1
  SET @p_SourceText = RTRIM( LTRIM( @p_SourceText))
  SET @w_Length   = DATALENGTH( RTRIM( LTRIM( @p_SourceText)))
  SET @w_Delimeter_Len = len(@p_Delimeter)
 end
 WHILE @w_Continue = 1
 BEGIN
  SET @w_Delimeter_pos = CHARINDEX( @p_Delimeter
      ,(SUBSTRING( @p_SourceText, @w_StartPos
      ,((@w_Length - @w_StartPos) + @w_Delimeter_Len)))
      )
 
  IF @w_Delimeter_pos > 0  -- delimeter(s) found, get the value
  BEGIN
   SET @w_tmp_txt = LTRIM(RTRIM( SUBSTRING( @p_SourceText, @w_StartPos 
        ,(@w_Delimeter_pos - 1)) ))
 /*  if isnumeric(@w_tmp_txt) = 1
   begin
    set @w_tmp_int = cast( cast(@w_tmp_txt as numeric) as int)
    set @w_tmp_num = cast( @w_tmp_txt as numeric(18,3))
   end
   else
   begin
    set @w_tmp_int =  null
    set @w_tmp_num =  null
   end
 */  SET @w_StartPos = @w_Delimeter_pos + @w_StartPos + (@w_Delimeter_Len- 1)
  END
  ELSE -- No more delimeters, get last value
  BEGIN
   SET @w_tmp_txt = LTRIM(RTRIM( SUBSTRING( @p_SourceText, @w_StartPos 
      ,((@w_Length - @w_StartPos) + @w_Delimeter_Len)) ))
   /*if isnumeric(@w_tmp_txt) = 1
   begin
    set @w_tmp_int = cast( cast(@w_tmp_txt as numeric) as int)
    set @w_tmp_num = cast( @w_tmp_txt as numeric(18,3))
   end
   else
   begin
    set @w_tmp_int =  null
    set @w_tmp_num =  null
   end
   
 
   */
   SELECT @w_Continue = 0
  END
  INSERT INTO @retTable VALUES( @TOKEN ,@OID,@CID,@UID,   PARSENAME(@w_tmp_txt,2) ,PARSENAME(@w_tmp_txt,1),GETDATE() )
 END
RETURN
END

GO

USE [Development]
GO

/****** Object:  UserDefinedFunction [dbo].[MCR_FN_URNARRAY]    Script Date: 02/16/2014 22:41:56 ******/
SET ANSI_NULLS OFF
GO

SET QUOTED_IDENTIFIER OFF
GO






CREATE   function [dbo].[MCR_FN_URNARRAY] 
 (@TOKEN INT,
 @OID INT,
 @CID INT,
 @UID VARCHAR(25),
 @p_SourceText  varchar(8000)
 ,@p_Delimeter varchar(100) = '~' --default to comma delimited.
 )
RETURNS @retTable TABLE 
 (
  Position  int identity(1,1),
  TOKEN INT,
  OID INT , 
  CID INT, 
  UID VARCHAR(25),
  PID VARCHAR(50),
  TRH VARCHAR(55),
  TTR VARCHAR(55),
 result varchar(25),
 DT DATETIME
 )
AS
/*
********************************************************************************
Purpose: Parse values from a delimited string
  & return the result as an indexed table
Copyright 1996, 1997, 2000, 2003 Clayton Groom (<A href="mailto:Clayton_Groom@hotmail.com">Clayton_Groom@hotmail.com</A>)
Posted to the public domain Aug, 2004
06-17-03 Rewritten as SQL 2000 function.
 Reworked to allow for delimiters > 1 character in length 
 and to convert Text values to numbers
********************************************************************************
*/
BEGIN
 DECLARE @w_Continue  int
  ,@w_StartPos  int
  ,@w_Length  int
  ,@w_Delimeter_pos int
  ,@w_tmp_int  int
  ,@w_tmp_num  numeric(18,3)
  ,@w_tmp_txt   varchar(2000)
  ,@w_Delimeter_Len tinyint
 if len(@p_SourceText) = 0
 begin
  SET  @w_Continue = 0 -- force early exit
 end 
 else
 begin
 -- parse the original @p_SourceText array into a temp table
  SET  @w_Continue = 1
  SET @w_StartPos = 1
  SET @p_SourceText = RTRIM( LTRIM( @p_SourceText))
  SET @w_Length   = DATALENGTH( RTRIM( LTRIM( @p_SourceText)))
  SET @w_Delimeter_Len = len(@p_Delimeter)
 end
 WHILE @w_Continue = 1
 BEGIN
  SET @w_Delimeter_pos = CHARINDEX( @p_Delimeter
      ,(SUBSTRING( @p_SourceText, @w_StartPos
      ,((@w_Length - @w_StartPos) + @w_Delimeter_Len)))
      )
 
  IF @w_Delimeter_pos > 0  -- delimeter(s) found, get the value
  BEGIN
   SET @w_tmp_txt = LTRIM(RTRIM( SUBSTRING( @p_SourceText, @w_StartPos 
        ,(@w_Delimeter_pos - 1)) ))
  SET @w_StartPos = @w_Delimeter_pos + @w_StartPos + (@w_Delimeter_Len- 1)
  END
  ELSE -- No more delimeters, get last value
  BEGIN
   SET @w_tmp_txt = LTRIM(RTRIM( SUBSTRING( @p_SourceText, @w_StartPos 
      ,((@w_Length - @w_StartPos) + @w_Delimeter_Len)) ))

   SELECT @w_Continue = 0
  END
  
  /*  Position  int identity(1,1),
  TOKEN INT,
  OID INT , 
  CID INT, 
  UID VARCHAR(25),
  PID VARCHAR(50),
  TRH VARCHAR(55),
  TTR VARCHAR(55),
 result varchar(25),
 DT DATETIME*/
  DECLARE @PARCA VARCHAR(250);
  DECLARE @PID VARCHAR(50);
 DECLARE @TRH VARCHAR(55);
 DECLARE @TTR VARCHAR(55);
 DECLARE @result VARCHAR(25);
   --SET @PARCA='29049819|||1'--~5458470187422085|val2|val1|3~'
  SET @PARCA=REPLACE(@w_tmp_txt,'.','¨');
 SET @PARCA=REPLACE(@PARCA,'|','.');
 SELECT @PID=REPLACE(PARSENAME(@PARCA,4),'¨','.');
 SELECT @TRH=REPLACE(PARSENAME(@PARCA,3),'¨','.');
 SELECT @TTR=REPLACE(PARSENAME(@PARCA,2),'¨','.');
 SELECT @result=REPLACE(PARSENAME(@PARCA,1),'¨','.');
   INSERT INTO @retTable VALUES( @TOKEN ,@OID,@CID,@UID,@PID ,@TRH,@TTR,@result,GETDATE() )
 END
RETURN
END

GO

USE [Development]
GO

/****** Object:  UserDefinedFunction [dbo].[MCR_FN_URUN_F_ARRAY]    Script Date: 02/16/2014 22:42:06 ******/
SET ANSI_NULLS OFF
GO

SET QUOTED_IDENTIFIER OFF
GO

 
 
 
 
 
CREATE   function [dbo].[MCR_FN_URUN_F_ARRAY]
 (@TOKEN INT,
@OID INT,
@CID INT,
@UID VARCHAR(25),
@p_SourceText  varchar(8000)
,@p_Delimeter varchar(100) = ',' --default to comma delimited.
)
RETURNS @retTable TABLE
 (
  Position  int identity(1,1),
  TOKEN INT,
  OID INT ,
  CID INT,
  UID VARCHAR(25),
VAL NVARCHAR(50),
REF NVARCHAR(50),
RSLT NVARCHAR(50),
 
DT DATETIME
)
AS
/*
********************************************************************************
Purpose: Parse values from a delimited string
  & return the result as an indexed table
Copyright 1996, 1997, 2000, 2003 Clayton Groom (<A href="mailto:Clayton_Groom@hotmail.com">Clayton_Groom@hotmail.com</A>)
Posted to the public domain Aug, 2004
06-17-03 Rewritten as SQL 2000 function.
Reworked to allow for delimiters > 1 character in length
 and to convert Text values to numbers
********************************************************************************
*/
BEGIN
DECLARE @w_Continue  int
  ,@w_StartPos  int
  ,@w_Length  int
  ,@w_Delimeter_pos int
  ,@w_tmp_int  int
  ,@w_tmp_num  numeric(18,3)
  ,@w_tmp_txt   varchar(2000)
  ,@w_Delimeter_Len tinyint
if len(@p_SourceText) = 0
begin
  SET  @w_Continue = 0 -- force early exit
end
 else
begin
-- parse the original @p_SourceText array into a temp table
  SET  @w_Continue = 1
  SET @w_StartPos = 1
  SET @p_SourceText = RTRIM( LTRIM( @p_SourceText))
  SET @w_Length   = DATALENGTH( RTRIM( LTRIM( @p_SourceText)))
  SET @w_Delimeter_Len = len(@p_Delimeter)
end
WHILE @w_Continue = 1
BEGIN
  SET @w_Delimeter_pos = CHARINDEX( @p_Delimeter
      ,(SUBSTRING( @p_SourceText, @w_StartPos
      ,((@w_Length - @w_StartPos) + @w_Delimeter_Len)))
      )
  IF @w_Delimeter_pos > 0  -- delimeter(s) found, get the value
  BEGIN
   SET @w_tmp_txt = LTRIM(RTRIM( SUBSTRING( @p_SourceText, @w_StartPos
        ,(@w_Delimeter_pos - 1)) ))
/*  if isnumeric(@w_tmp_txt) = 1
   begin
    set @w_tmp_int = cast( cast(@w_tmp_txt as numeric) as int)
    set @w_tmp_num = cast( @w_tmp_txt as numeric(18,3))
   end
   else
   begin
    set @w_tmp_int =  null
    set @w_tmp_num =  null
   end
*/  SET @w_StartPos = @w_Delimeter_pos + @w_StartPos + (@w_Delimeter_Len- 1)
  END
  ELSE -- No more delimeters, get last value
  BEGIN
   SET @w_tmp_txt = LTRIM(RTRIM( SUBSTRING( @p_SourceText, @w_StartPos
      ,((@w_Length - @w_StartPos) + @w_Delimeter_Len)) ))
   /*if isnumeric(@w_tmp_txt) = 1
   begin
    set @w_tmp_int = cast( cast(@w_tmp_txt as numeric) as int)
    set @w_tmp_num = cast( @w_tmp_txt as numeric(18,3))
   end
   else
   begin
    set @w_tmp_int =  null
    set @w_tmp_num =  null
   end
  VAL NVARCHAR(50),
REF NVARCHAR(50),
RSLT NVARCHAR(50),
 
 
   */
   SELECT @w_Continue = 0
  END
  INSERT INTO @retTable VALUES( @TOKEN ,@OID,@CID,@UID,   PARSENAME(@w_tmp_txt,3),   PARSENAME(@w_tmp_txt,2) ,PARSENAME(@w_tmp_txt,1),GETDATE() )
END
RETURN
END

GO
USE [Development]
GO

/****** Object:  UserDefinedFunction [dbo].[MCR_FN_AKSACIKLAMA]    Script Date: 02/16/2014 22:42:19 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE FUNCTION [dbo].[MCR_FN_AKSACIKLAMA](@A INT)
RETURNS VARCHAR(100)
AS BEGIN 
DECLARE @RV VARCHAR(100);
 

 
 
SELECT @RV = ACIKLAMA FROM MCR_DEF_MUSAKSIYONLIST WHERE INTCODE= @A

 
RETURN @RV;
END

 
GO

USE [Development]
GO

/****** Object:  UserDefinedFunction [dbo].[MCR_FN_TUARY]    Script Date: 02/16/2014 22:42:30 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE  FUNCTION [dbo].[MCR_FN_TUARY](@T INT,@S VARCHAR(1)='T')
RETURNS VARCHAR(MAX)
AS BEGIN 
DECLARE @RV VARCHAR(MAX);
 SET @RV=' '
 
 IF (@S='T' )
 BEGIN

 
 
SELECT   @RV =@RV+'<DIV>'+A.tel+': '+ ACIKLAMA +'</DIV>'
FROM MCR_TBL_TELAKSIYON A LEFT JOIN MCR_DEF_MUSAKSIYONLIST B ON  A.result=B.INTCODE
WHERE TOKEN= @T

END ELSE 
BEGIN
SELECT   @RV =@RV+'<DIV>['+TUR+'] <span class=\"fbPID\">'+ A.PID+'</span> (GGS: '+GGS+') '+ ACIKLAMA +' Aksiyonu alýnmýþtýr.'+ case when TRH is null then  '' else ' Tarih: '+TRH end + case when TTR is null then  '' else ' Tutar: '+TTR end +'</DIV>'
FROM MCR_TBL_URNAKSIYON A LEFT JOIN MCR_DEF_MUSAKSIYONLIST B ON  A.result=B.INTCODE
WHERE TOKEN= @T
END
 --SELECT * FROM MCR_TBL_URNAKSIYON where token=1396983004
 /*
 
 select  '<DIV>['+TUR+'] <span class=\"fbPID\">'+ A.PID+'</span> (GGS: '+GGS+') '+ ACIKLAMA +' Aksiyonu alýnmýþtýr.'+ case when TRH is null then  '' else ' Tarih: '+TRH end + case when TTR is null then  '' else ' Tutar: '+TTR end +'</DIV>'
FROM MCR_TBL_URNAKSIYON A LEFT JOIN MCR_DEF_MUSAKSIYONLIST B ON  A.result=B.INTCODE
WHERE TOKEN=1396983004

select * from MCR_DEF_MUSAKSIYONLIST where Intcode=34
*/
--select DBO.MCR_FN_TUARY(1396983004,'U') URNARR 
RETURN @RV;
END

 
GO




