using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

public partial class ajax_form_submit : System.Web.UI.Page
{

    protected void Page_Load(object sender, EventArgs e)
    {

    }

    /*
drop TABLE [dbo].[MCR_TBL_MEMO]

CREATE TABLE [dbo].[MCR_TBL_MEMO](
INTCODE INT NOT NULL  IDENTITY(1,1),
TOKEN INT not null,
OID INT NOT NULL,
CID INT NULL,
UID VARCHAR(50) NULL,
MEMO VARCHAR(MAX) NOT NULL,
MDT DATETIME 
) ON [PRIMARY]
     * 
DROP TABLE [dbo].[MCR_TBL_TELAKSIYON];

CREATE TABLE [dbo].[MCR_TBL_TELAKSIYON](
	[INTCODE] [int] IDENTITY(1,1) NOT NULL,
	[Position] [int]  NOT NULL,
	[TOKEN] [int] NULL,
	[OID] [int] NULL,
	[CID] [int] NULL,
	[UID] [varchar](25) NULL,
	[tel] [nvarchar](25) NULL,
	[result] [varchar](25) NULL,
	[DT] [datetime] NULL
) ON [PRIMARY]
     * 
    CREATE TABLE [dbo].[MCR_DEF_TELAKSIYONLIST](
INTCODE INT NOT NULL  IDENTITY(0,1),
TELAKS VARCHAR(50) NOT NULL,
ISRPC BIT NOT NULL
) ON [PRIMARY]
 
 drop PROC [dbo].[MCR_SP_MEMO]
 
CREATE  PROC [dbo].[MCR_SP_MEMO](@TOKEN INT,@OID INT,@CID INT,@UID VARCHAR(50),@MEMO VARCHAR(MAX)='0',@TEL NVARCHAR(MAX)='0') AS
BEGIN TRY
INSERT INTO MCR_TBL_MEMO (TOKEN, OID, CID, UID, MEMO, MDT)
VALUES (@TOKEN,@OID ,@CID,@UID ,@MEMO,GETDATE())
 
 
 INSERT INTO MCR_TBL_TELAKSIYON (Position,TOKEN, OID, CID, UID,tel,result,DT )
 select Position,TOKEN, OID, CID, UID,tel,result,DT 
   from DBO.MCR_FN_TELARRAY(@TOKEN,@OID ,@CID,@UID ,@TEL,',')
  where tel is not null
     * 
SELECT 1 AS RV;
END TRY
BEGIN CATCH
SELECT 0 AS RV;
END CATCH
     * 
     * 
     * CREATE TABLE [dbo].MCR_DEF_URNAKSIYONLIST(
	[INTCODE] [int] IDENTITY(0,1) NOT NULL,
	[URNAKS] [varchar](50) NOT NULL,
	[ISAKTIF] [bit] NOT NULL,
	[ISRPC] [bit] NOT NULL
) ON [PRIMARY]
     * 
     * 
     * CREATE TABLE [dbo].[MCR_TBL_URNAKSIYON](
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
	[DT] [datetime] NULL
) ON [PRIMARY]
*/
    //  url: "ajax_form_submit.aspx/yenitelekle",
    //	    data: '{ISIM:"' + te_isim + '", TEL:"' + te_num + '" }',
    [System.Web.Services.WebMethod]
    public static string yenitelekle(string OID, string CID, string ISIM, string TEL)
    {
        string strSql = "EXEC MCR_SP_TELEKLE   " + OID + " ," + CID + ",'" + KUL() + "','" + ISIM + "','" + TEL + "'";
        string val = ajax_form_submit.DBKaydet(strSql);
        return val;
        /*   return "NAME: " + name + Environment.NewLine + "OID: " + OID + Environment.NewLine + "CID: " + name + Environment.NewLine + "MEMO: " + tbMEMO + Environment.NewLine + "The Current Time is: "
               + DateTime.Now.ToString();
         */
    }
    [System.Web.Services.WebMethod]
    public static string gercek(string OID, string CID, string name, string tbMEMO, string TELARRAY, string URNARRAY)
    {
        Random rnd = new Random();
        int tkn = rnd.Next(1000000000, 2147483647);


        string strSql = "EXEC MCR_SP_MEMO " + tkn + ", " + OID + " ," + CID + ",'" + KUL() + "','" + tbMEMO + "','" + TELARRAY + "','" + URNARRAY + "'";
        string val = ajax_form_submit.DBKaydet(strSql);
        return val;
        /*   return "NAME: " + name + Environment.NewLine + "OID: " + OID + Environment.NewLine + "CID: " + name + Environment.NewLine + "MEMO: " + tbMEMO + Environment.NewLine + "The Current Time is: "
               + DateTime.Now.ToString();
         */
    }
    [System.Web.Services.WebMethod]
    public static string Final(string OID, string CID, string name, string tbMEMO, string TELARRAY, string URNARRAY, string ODY, string YYR, string MAK)
    {
        Random rnd = new Random();
        int tkn = rnd.Next(1000000000, 2147483647);
        // ODY:"' + ODY + '",YYR:"' + YYR + '",MAK:"' + MAK + '"

        string strSql = "EXEC MCR_SP_FINALMEMO " + tkn + ", " + OID + " ," + CID + ",'" + KUL() + "','" + tbMEMO + "','" + TELARRAY + "','" + URNARRAY + "','" + ODY + "','" + YYR + "','" + MAK + "'";
        string val = ajax_form_submit.DBKaydet(strSql);
        return val;
        /*   return "NAME: " + name + Environment.NewLine + "OID: " + OID + Environment.NewLine + "CID: " + name + Environment.NewLine + "MEMO: " + tbMEMO + Environment.NewLine + "The Current Time is: "
               + DateTime.Now.ToString();
         */
    }
    [System.Web.Services.WebMethod]
    public static string telaksiyonlar(string TELARRAY)
    {
        Random rnd = new Random();
        int tkn = rnd.Next(1000000000, 2147483647);


        string strSql = "EXEC MCR_SP_HSTTEL '" + TELARRAY + "'";
        string val = ajax_form_submit.retJS(strSql);
        return val;

    }

    public static string KUL()
    {
        MicroMain MM = new MicroMain();

        return MM.User;
    }
    public static string retJS(string SqlSTR)
    {
        MicroMain MM = new MicroMain();
        String strRetVal = SqlSTR;

        DataTable dt = new DataTable();
        try
        {
            dt = PCL.MsSQL_DBOperations.GetData(SqlSTR, "SqlConn");

            strRetVal = MM.GetJSONString(dt); //dt.Rows[0]["RV"].ToString().Trim();

        }
        catch (Exception ex)
        {
            strRetVal = "HATA @retJS()= " + ex.Message;
        }
        return strRetVal;
    }
    public static string DBKaydet(string SqlSTR)
    {
        String strRetVal = SqlSTR;

        DataTable dt = new DataTable();
        try
        {
            dt = PCL.MsSQL_DBOperations.GetData(SqlSTR, "SqlConn");

            strRetVal = dt.Rows[0]["RV"].ToString().Trim();

        }
        catch (Exception ex)
        {
            strRetVal = "HATA @DBKaydet()= " + ex.Message;
        }
        return strRetVal;
    }
}
