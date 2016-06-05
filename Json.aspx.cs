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

public partial class Json : System.Web.UI.Page
{
    MicroMain MM = new MicroMain();
    private Int16 Islem;
    private string tkn = "-1";
    private Int32 M;
    private Boolean D;



    protected void Page_Load(object sender, EventArgs e)
    {
        InitEDWUser();
        Session["TOKEN"] = "-1";
        try
        {
            if (String.IsNullOrEmpty(Session["TOKEN"].ToString()))
                Response.Redirect("default.aspx");
        }
        catch { Response.Redirect("default.aspx"); }



        #region giriş
        D = false;

        if (Request.QueryString["T"] == null)
        {
            tkn = "-1";

        }
        else if (MM.IsNumeric(Request.QueryString["T"]))
        {
            tkn = "-1";// Request.QueryString["T"].ToString();

        }
        else
        {
            tkn = "-1";
        }
        if (Session["TOKEN"].ToString() == tkn)
            D = true;


        if (Request.QueryString["I"] == null)
        {
            Islem = 0;

        }
        else if (MM.IsNumeric(Request.QueryString["I"]) && D)
        {
            Islem = PCL.Utility.UItoMT.ToInt16(Request.QueryString["I"].ToString());
            D = true;
        }
        else
        {
            Islem = 0;
        }

        if (Request.QueryString["M"] == null)
        {
            M = 0;
            D = false;

        }
        else if (MM.IsNumeric(Request.QueryString["M"]) && D)
        {
            M = PCL.Utility.UItoMT.ToInt32(Request.QueryString["M"].ToString());
            D = true;
        }
        else
        {
            M = 0;
            D = false;
        }
        #endregion



        if (D && Islem == 0)
        {

            String MusStr = "select  /*+ parallel(1024)*/* from A36596.MICRO_MEMO_TEL where MUSTERI_NO= " + M;
            DataTable dt = new DataTable();
            dt = PCL.Oracle_DBOperations.GetData(MusStr, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            // dt = PCL.MsSQL_DBOperations.GetData(MusStr, "SqlConn");
            string val = MM.GetJSONString(dt);
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 1)
        {


            string val = "";

            val = urunler(M);// "[{\"KART\":" + ccard(M) + "},{\"KREDI\":" + cashloan(M) + "},{\"KMH\":" + overdraft(M) + "}]";

            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 2)
        {


            string val = "";

            val = UYARI(M);// "[{\"KART\":" + ccard(M) + "},{\"KREDI\":" + cashloan(M) + "},{\"KMH\":" + overdraft(M) + "}]";

            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 3)
        {


            string val = "";

            val = TEMELBILGI(M);// "[{\"KART\":" + ccard(M) + "},{\"KREDI\":" + cashloan(M) + "},{\"KMH\":" + overdraft(M) + "}]";

            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 4)
        {
            string val = "";
            val = ADRES(M);
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 5)
        {
            string val = "";
            val = TELEFON(M);
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 6)
        {

            Int32 TP;

            if (Request.QueryString["TP"] == null)
            { TP = 5; }
            else if (MM.IsNumeric(Request.QueryString["TP"]))
            { TP = PCL.Utility.UItoMT.ToInt32(Request.QueryString["TP"].ToString()); }
            else
            { TP = 5; }
            string val = "";
            val = MEMOG(M, TP);
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 7)
        {

            Int32 TP;

            if (Request.QueryString["TP"] == null)
            { TP = 5; }
            else if (MM.IsNumeric(Request.QueryString["TP"]))
            { TP = PCL.Utility.UItoMT.ToInt32(Request.QueryString["TP"].ToString()); }
            else
            { TP = 5; }
            string val = "";
            val = MEMOO(M, TP);
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 8)
        {
            string val = "";
            val = TelAksList();
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 9)
        {
            string val = "";
            val = UrnAksList();
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 10)
        {

            Int32 TP;

            if (Request.QueryString["TP"] == null)
            { TP = 5; }
            else if (MM.IsNumeric(Request.QueryString["TP"]))
            { TP = PCL.Utility.UItoMT.ToInt32(Request.QueryString["TP"].ToString()); }
            else
            { TP = 5; }
            string val = "";
            val = MEMOF(M, TP);
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 11)
        {

            Int64 TP;

            if (Request.QueryString["TP"] == null)
            { TP = 5; }
            else if (MM.IsNumeric(Request.QueryString["TP"]))
            { TP = PCL.Utility.UItoMT.ToInt64(Request.QueryString["TP"].ToString()); }
            else
            { TP = 5; }
            string val = "";
            val = TelGecmis(M, TP);
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 12)
        {
            string val = "";
            val = MusteriSonucuList();
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 13)
        {
            string val = "";
            val = DDLODEYEMEMEList();
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 14)
        {
            string val = "";
            val = YYREDList();
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 15)
        {
            Int64 TP;
            if (Request.QueryString["TP"] == null)
            { TP = 0; }
            else if (MM.IsNumeric(Request.QueryString["TP"]))
            { TP = PCL.Utility.UItoMT.ToInt64(Request.QueryString["TP"].ToString()); }
            else
            { TP =0; }


            string val = "";
            val = EXT_TEL(M,TP);
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 16)
        {
            string val = "";
            val = MusAks();
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else if (D && Islem == 17)
        {
            Int32 TP;
            if (Request.QueryString["TP"] == null)
            { TP = 0; }
            else if (MM.IsNumeric(Request.QueryString["TP"]))
            { TP = PCL.Utility.UItoMT.ToInt32(Request.QueryString["TP"].ToString()); }
            else
            { TP = 0; }
           // fazladanmemo(Int32 M, Int32 TOP)
            string val = "";
            val = fazladanmemo(M,TP);
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
        else
        {
            string val = "";
            Response.Clear();
            //Response.ContentType = "application/json; charset=utf-8";
            Response.Write(val);
            Response.End();
        }
    }
    private string EXT_TEL(Int32 M,Int64 TP)
    {

        string val;

        string strSql;
        if (TP == 0)
        {
            strSql = " SELECT * FROM MCR_TBL_EXTEL WHERE OID =" + M + "  order by INTCODE ";
        }
        else
        {
            strSql = " SELECT top 1 * FROM MCR_TBL_EXTEL WHERE OID =" + M + "  order by INTCODE desc";
        }
        
        try
        {
            DataTable dt = new DataTable();
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;
        // sb.ToString();
    }
    private string MusAks()
    {

        string val;
        string strSql = "SELECT   [INTCODE]      ,/*[AKOD] +' - '+ */[ACIKLAMA] MUSAKS      FROM [dbo].[MCR_DEF_MUSAKSIYONLIST]  where  [AKSIYON]='DDLMUSTERI' and ISAKTIF=1 order by INTCODE ";
        try
        {
            DataTable dt = new DataTable();
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;
        // sb.ToString();
    }
    private string DDLODEYEMEMEList()
    {

        string val;
        string strSql = "SELECT   [INTCODE]      ,/*[AKOD] +' - '+ */[ACIKLAMA] ODYAKS      FROM [dbo].[MCR_DEF_MUSAKSIYONLIST]  where  [AKSIYON]='DDLODEYEMEME' and ISAKTIF=1 order by INTCODE ";
        try
        {
            DataTable dt = new DataTable();
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;
        // sb.ToString();
    }
    private string YYREDList()
    {

        string val;
        string strSql = "SELECT   [INTCODE]      ,/*[AKOD] +' - '+*/ [ACIKLAMA] YYRED      FROM [dbo].[MCR_DEF_MUSAKSIYONLIST]  where  [AKSIYON]='DDLYYRED' and ISAKTIF=1 order by INTCODE ";
        try
        {
            DataTable dt = new DataTable();
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;
        // sb.ToString();
    }
    private string TelGecmis(Int32 M, Int64 T)
    {
        string val;
        string strSql = "SELECT  T.UID SİCİL,DBO.MCR_FN_AKSACIKLAMA(result) AKSİYON,T.DT TARİH from [dbo].[MCR_TBL_TELAKSIYON] T   WHERE tel='" + T + "' order by dt DESC";
        try
        {
            DataTable dt = new DataTable();
            //DEV İÇİN dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.ConvertDataTable2HTMLString("SqlConn", "TELHIST", strSql);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;// sb.ToString();
    }
    private string MEMOF(Int32 M, Int32 TOP)
    {
        string val;
        string strSql = "EXEC MCR_SP_ORTAKLIKMEMO " + M + ", " + TOP.ToString();
        try
        {
            DataTable dt = new DataTable();
            //DEV İÇİN dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;// sb.ToString();
    }
    private string fazladanmemo(Int32 M, Int32 TOP)
    {
        string val;
        string strSql = "EXEC MCR_SP_ORTAKLIKMEMOF " + M + ", " + TOP.ToString();
        try
        {
            DataTable dt = new DataTable();
            //DEV İÇİN dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;// sb.ToString();
    }
    private string MEMOG(Int32 M, Int32 TOP)
    {
        string val;
        string strSql = "SELECT TOP " + TOP.ToString() + " [OID]      ,[CID]      ,[UID]      ,[MEMO]      , datediff(ss,'01.01.1970',MDT) MDT "
                           + "  FROM [dbo].[MCR_TBL_MEMO] WHERE CID=" + M + " order by MDT DESC";
        try
        {
            DataTable dt = new DataTable();
            //DEV İÇİN dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;// sb.ToString();
    }
    private string MEMOO(Int32 M, Int32 TOP)
    {
        string val;
        string strSql = "EXEC MCR_SP_ORTAKLIKMEMO " + M + ", " + TOP.ToString();
        try
        {
            DataTable dt = new DataTable();
            //DEV İÇİN dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;// sb.ToString();
    }


    private string TELEFON(Int32 x)
    {
        string val;
        string strSql = "SELECT AREA_CODE      , PHONE_NUMBER,PHONE_TP  FROM EDW.TEL_ADDR WHERE CUST_ID=" + x;
        try
        {
            DataTable dt = new DataTable();
            dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            //DEV İÇİN dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;// sb.ToString();
    }
    private string ADRES(Int32 x)
    {
        string val;
        string strSql = "SELECT  ADDR_TP , ADDR_LINE_1 , ADDR_LINE_2 , ADDR_LINE_3 , CITY , PROV , DISTRICT , DFLT_F , GUNCELLEMETARIHI   FROM EDW.PST_ADDR WHERE CUST_ID=" + x;
        try
        {
            DataTable dt = new DataTable();
            dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            //DEV İÇİN dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;// sb.ToString();
    }
    public void InitEDWUser()
    {
        try
        {
            if (String.IsNullOrEmpty(Session["EDWuser"].ToString()))
            {
                DataTable dt = PCL.MsSQL_DBOperations.GetData("SELECT * FROM [SSIS Configurations] WHERE ConfigurationFilter = 'EDWConn'", "SqlConn");
                if (dt.Rows.Count > 0)
                {
                    foreach (DataRow dr in dt.Rows)
                    {
                        string PackagePath = PCL.Utility.DBtoMT.ToString(dr["PackagePath"]);
                        string ConfiguredValue = PCL.Utility.DBtoMT.ToString(dr["ConfiguredValue"]);
                        if (PackagePath == "UserId") { MM.EDWUserId = ConfiguredValue; Session["EDWuser"] = ConfiguredValue; }
                        if (PackagePath == "Password") { MM.EDWPassword = ConfiguredValue; Session["EDWpass"] = ConfiguredValue; }
                    }
                }
            }
        }

        catch
        {
            // HttpContext.Current.Session["EDWuser"].ToString() = "-";
            // (String)HttpContext.Current.Session["EDWpass"] = "-";
            DataTable dt = PCL.MsSQL_DBOperations.GetData("SELECT * FROM [SSIS Configurations] WHERE ConfigurationFilter = 'EDWConn'", "SqlConn");
            if (dt.Rows.Count > 0)
            {
                foreach (DataRow dr in dt.Rows)
                {
                    string PackagePath = PCL.Utility.DBtoMT.ToString(dr["PackagePath"]);
                    string ConfiguredValue = PCL.Utility.DBtoMT.ToString(dr["ConfiguredValue"]);
                    if (PackagePath == "UserId") { MM.EDWUserId = ConfiguredValue; Session["EDWuser"] = ConfiguredValue; }
                    if (PackagePath == "Password") { MM.EDWPassword = ConfiguredValue; Session["EDWpass"] = ConfiguredValue; }
                }
            }
        }
    }

    //
    private string overdraft(Int32 x)
    {
        string val;

        string strSql2 = " select /*+ parallel(4)*/  CREDIT_DEPOSIT_METHOD_CODE,ABS(RISK) AS RISK,LIMIT_EXCEED,ABS(RISK)-LIMIT_EXCEED AS KULLANDIRIM, NUM_UNPAID_DAYS, ABS(MIN_PYMT_AMT) AS MIN_PYMT_AMT , TO_CHAR(LST_REALIZATION_DT,'yyyymmdd')  as EKT, TO_CHAR(NEXT_REALIZATION_DT,'yyyymmdd') as SOT from LDM.OVERDRAFT where CUST_ID= " + x + " AND OD_ACCT_ST=1";

        string strSql = "select /*+ parallel(4)*/  CREDIT_DEPOSIT_METHOD_CODE URUN,ABS(RISK) AS GECIKME_BAKIYE,LIMIT_EXCEED LIMITASIM,'' GGS,/*ABS(RISK)-LIMIT_EXCEED AS KULLANDIRIM, NUM_UNPAID_DAYS,*/ ABS(MIN_PYMT_AMT) AS ASGARI , TO_CHAR(LST_REALIZATION_DT,'yyyymmdd')  as EKT, TO_CHAR(NEXT_REALIZATION_DT,'yyyymmdd') as SOT from LDM.OVERDRAFT where CUST_ID= " + x + " AND OD_ACCT_ST=1";
        try
        {
            DataTable dt = new DataTable();
            //dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");

            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"CREDIT_DEPOSIT_METHOD_CODE\":\"" + ex.Message + "\"}]";
        }
        return val;
    }
    private string cashloan(Int32 x)
    {

        string val;

        string strSql2 = "SELECT /*+ PARALLEL(4)*/ CREDIT_REFERENCE_TP KREDI, NUM_DELAY_DAY AS GGS,  CREDIT_BALANCE  AS KALAN_BAKIYE, "
   + "  DELAYED_INSTALMENT_AMT AS GECIKMELI_TUTAR,DELAY_INSTALLMENT_PYMT GECIKMELI_ODENEN_TAKSIT,"
   + " NUM_PYMT_INSTALLMENT_ON_TIME AS ZAMANINDA_ODENEN_TAKSIT,   NUM_INSTALLMENT_WAIT_DELAY AS GECIKMEDE_BEKLEYEN_TAKSIT,"
   + " DUE_DATE_COUNT AS TAKSIT_ADET,  TO_CHAR(FRST_DELAY_INSTALLMENT_DT,'YYYYMMDD') AS ODEME_GUNU ,   "
   + " RETURN_AMT AS TAKSIT_TUTARI ,USAGE_AMT_DEFAULT_CCY AS KULLANDIRIM ,NUM_INSTALL_WAIT_DELAY_DUEDATE AS KALANTAKSIT  FROM LDM.CASH_LOANS CL  "
   + " WHERE CL.CREDIT_ST = '1'       AND CL.CUST_ID = " + x;

        string strSql = "SELECT /*+ PARALLEL(4)*/ CREDIT_REFERENCE_TP URUN, NUM_DELAY_DAY AS GGS,  CREDIT_BALANCE  AS GECIKME_BAKIYE, "
+ "  DELAYED_INSTALMENT_AMT AS ASGARI,/*DELAY_INSTALLMENT_PYMT GECIKMELI_ODENEN_TAKSIT,*/"
+ "/* NUM_PYMT_INSTALLMENT_ON_TIME AS ZAMANINDA_ODENEN_TAKSIT,   NUM_INSTALLMENT_WAIT_DELAY AS GECIKMEDE_BEKLEYEN_TAKSIT,*/"
+ "/* DUE_DATE_COUNT AS TAKSIT_ADET, */ TO_CHAR(FRST_DELAY_INSTALLMENT_DT,'YYYYMMDD') AS EKT ,   "
+ " /*RETURN_AMT AS TAKSIT_TUTARI ,USAGE_AMT_DEFAULT_CCY AS KULLANDIRIM ,NUM_INSTALL_WAIT_DELAY_DUEDATE AS KALANTAKSIT*/ ''SOT,''LIMIT_ASIM  FROM LDM.CASH_LOANS CL  "
+ " WHERE CL.CREDIT_ST = '1'       AND CL.CUST_ID = " + x;

        try
        {
            DataTable dt = new DataTable();
            //         dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");

            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"KREDI\":\"" + ex.Message + "\"}]";
        }
        return val;
    }
    private string ccard(Int32 x)
    {

        string val;


        string strSql2 = " SELECT /*+ parallel(4)*/  A.CUR_CARD_NO,  A.DLQ_DAY_CNT,  A.DLQ_CODE_ID ,B.LAST_STMT_TOT_BLNC_DOM,  B.LAST_STMT_MIN_PYMNT_AMNT_DOM,  "
                        + "  TO_CHAR(B.LAST_STMT_DT,'yyyymmdd') LAST_STMT_DT,  TO_CHAR(B.LAST_PYMNT_DT,'yyyymmdd') LAST_PYMNT_DT"
                        + "  FROM CDM.CC_DAILY A, CDM.CC_CUST_STMT B "
                        + " WHERE A.CARD_TP = 'B'  AND A.VALID = 'Y' "
                        + "   AND A.CUST_ID = " + x + "   AND A.CUST_ID =B.CUST_ID(+)     AND A.CUR_CARD_NO=B.CARD_NO ";

        string strSql = " SELECT /*+ parallel(4)*/  A.CUR_CARD_NO URUN,  A.DLQ_DAY_CNT GGS,/*  A.DLQ_CODE_ID ,*/ B.LAST_STMT_TOT_BLNC_DOM GECIKME_BAKIYE,  B.LAST_STMT_MIN_PYMNT_AMNT_DOM ASGARI,  "
                + "  TO_CHAR(B.LAST_STMT_DT,'yyyymmdd')  EKT/*LAST_STMT_DT*/,  TO_CHAR(B.LAST_PYMNT_DT,'yyyymmdd') SOT/* LAST_PYMNT_DT*/, '' LIMITASIM"
                + "  FROM CDM.CC_DAILY A, CDM.CC_CUST_STMT B "
                + " WHERE A.CARD_TP = 'B'  AND A.VALID = 'Y' "
                + "   AND A.CUST_ID = " + x + "   AND A.CUST_ID =B.CUST_ID(+)     AND A.CUR_CARD_NO=B.CARD_NO ";


        try
        {
            DataTable dt = new DataTable();
            //         dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");

            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"CUR_CARD_NO\":\"" + ex.Message + "\"}]";
        }
        return val;// sb.ToString();


    }

    private string UrnAksList()
    {

        string val;
        string strSql = "SELECT   [INTCODE]      ,/*[AKOD] +' - '+ */[ACIKLAMA] URNAKS      ,[ISRPC]  FROM [Development].[dbo].[MCR_DEF_MUSAKSIYONLIST]  where  [AKSIYON]='DDLURUN' and ISAKTIF=1 order by INTCODE ";
        try
        {
            DataTable dt = new DataTable();
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;
        // sb.ToString();
    }
    private string MusteriSonucuList()
    {

        string val;
        string strSql = "SELECT   [INTCODE]      ,/*[AKOD] +' - '+*/ [ACIKLAMA] MUSAKS      ,[ISRPC]  FROM [Development].[dbo].[MCR_DEF_MUSAKSIYONLIST]  where  [AKSIYON]='DDLMUSTERI' and ISAKTIF=1 order by INTCODE ";
        try
        {
            DataTable dt = new DataTable();
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;
        // sb.ToString();
    }
    private string TelAksList()
    {

        string val;
        string strSql = " SELECT 0 INTCODE,'SEÇİNİZ' AS TELAKS ,0 ISRPC UNION SELECT INTCODE,ACIKLAMA AS TELAKS , ISRPC FROM dbo.MCR_DEF_MUSAKSIYONLIST WHERE AKSIYON='DDLTEL' order by INTCODE";
        try
        {
            DataTable dt = new DataTable();
            dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;
        // sb.ToString();
    }

    private string urunler(Int32 x)
    {

        string val;

        string strSql = "select /*+ parallel(1024)*/  'KMH' TUR,ACCT_NO as URUN,"
+ " ABS(RISK) AS GECIKME_BAKIYE,"
+ " NUM_UNPAID_DAYS as  GGS,/*ABS(RISK)-LIMIT_EXCEED AS KULLANDIRIM, ,*/ "
+ " ABS(MIN_PYMT_AMT) AS ASGARI , "
+ " TO_CHAR(LST_REALIZATION_DT,'yyyymmdd')  as EKT, "
+ " TO_CHAR(NEXT_REALIZATION_DT,'yyyymmdd') as SOT ,"
+ " TO_CHAR(LIMIT_EXCEED) LIMITASIM"
+ " from LDM.OVERDRAFT where CUST_ID=" + x + " AND OD_ACCT_ST=1"
+ " union all"
+ " SELECT /*+ PARALLEL(1024)*/ 'KREDI' TUR,CREDIT_REFERENCE as URUN, "
+ " CREDIT_BALANCE  AS GECIKME_BAKIYE, "
+ " NUM_DELAY_DAY AS GGS,   "
+ "   DELAYED_INSTALMENT_AMT AS ASGARI,/*DELAY_INSTALLMENT_PYMT GECIKMELI_ODENEN_TAKSIT,*/ "
+ " /* NUM_PYMT_INSTALLMENT_ON_TIME AS ZAMANINDA_ODENEN_TAKSIT,   NUM_INSTALLMENT_WAIT_DELAY AS GECIKMEDE_BEKLEYEN_TAKSIT,*/ "
+ " /* DUE_DATE_COUNT AS TAKSIT_ADET, */ "
+ " TO_CHAR(FRST_DELAY_INSTALLMENT_DT,'YYYYMMDD') AS EKT ,    "
+ "  /*RETURN_AMT AS TAKSIT_TUTARI ,USAGE_AMT_DEFAULT_CCY AS KULLANDIRIM ,NUM_INSTALL_WAIT_DELAY_DUEDATE AS KALANTAKSIT*/ "
+ "  '' as SOT,'' as LIMIT_ASIM  "
+ "  FROM LDM.CASH_LOANS CL    WHERE CL.CREDIT_ST = '1'       AND CL.CUST_ID =" + x
+ "    union all"
+ "     SELECT /*+ parallel(1024)*/  'KART' TUR,to_char(A.CUR_CARD_NO) URUN,  "
+ "        B.LAST_STMT_TOT_BLNC_DOM GECIKME_BAKIYE, "
+ "         A.DLQ_DAY_CNT GGS,/*  A.DLQ_CODE_ID ,*/ "
+ "           B.LAST_STMT_MIN_PYMNT_AMNT_DOM ASGARI,    "
+ "           TO_CHAR(B.LAST_STMT_DT,'yyyymmdd')  EKT/*LAST_STMT_DT*/,  TO_CHAR(B.LAST_PYMNT_DT,'yyyymmdd') SOT/* LAST_PYMNT_DT*/, '' LIMITASIM "
+ "         FROM CDM.CC_DAILY A, CDM.CC_CUST_STMT B "
+ "    WHERE A.CARD_TP = 'B'  AND A.VALID = 'Y'  "
+ "       AND A.CUST_ID = " + x + "  AND A.CUST_ID =B.CUST_ID(+)     AND A.CUR_CARD_NO=B.CARD_NO";

        strSql = "select /*+ parallel(1024)*/  'KMH' TUR,TO_CHAR(ACCT_NO) as URUN, ABS(RISK) AS GECIKME_BAKIYE, NUM_UNPAID_DAYS as  GGS,/*ABS(RISK)-LIMIT_EXCEED AS KULLANDIRIM, ,*/  ABS(MIN_PYMT_AMT) AS ASGARI ,  TO_CHAR(LST_REALIZATION_DT,'yyyymmdd')  as EKT,  TO_CHAR(NEXT_REALIZATION_DT,'yyyymmdd') as SOT , TO_CHAR(LIMIT_EXCEED) LIMITASIM "
+ "from LDM.OVERDRAFT where CUST_ID= " + x + "  AND OD_ACCT_ST=1 "
+ "union all "
+ "SELECT /*+ PARALLEL(1024)*/ 'KREDI' TUR,TO_CHAR(CREDIT_REFERENCE) as URUN,  CREDIT_BALANCE  AS GECIKME_BAKIYE,  NUM_DELAY_DAY AS GGS,      DELAYED_INSTALMENT_AMT AS ASGARI,/*DELAY_INSTALLMENT_PYMT GECIKMELI_ODENEN_TAKSIT,*/  /* NUM_PYMT_INSTALLMENT_ON_TIME AS ZAMANINDA_ODENEN_TAKSIT,   NUM_INSTALLMENT_WAIT_DELAY AS GECIKMEDE_BEKLEYEN_TAKSIT,*/  /* DUE_DATE_COUNT AS TAKSIT_ADET, */  TO_CHAR(FRST_DELAY_INSTALLMENT_DT,'YYYYMMDD') AS EKT ,      /*RETURN_AMT AS TAKSIT_TUTARI ,USAGE_AMT_DEFAULT_CCY AS KULLANDIRIM ,NUM_INSTALL_WAIT_DELAY_DUEDATE AS KALANTAKSIT*/   '' as SOT,'' as LIMIT_ASIM    "
+ "FROM LDM.CASH_LOANS CL    WHERE CL.CREDIT_ST = '1'       AND CL.CUST_ID =" + x
+ " union all     "
+ "SELECT /*+ parallel(1024)*/  'KART' TUR,to_char(A.CUR_CARD_NO) URUN,          B.LAST_STMT_TOT_BLNC_DOM GECIKME_BAKIYE,          A.DLQ_DAY_CNT GGS,/*  A.DLQ_CODE_ID ,*/            B.LAST_STMT_MIN_PYMNT_AMNT_DOM ASGARI,               TO_CHAR(B.LAST_STMT_DT,'yyyymmdd')  EKT/*LAST_STMT_DT*/,  TO_CHAR(B.LAST_PYMNT_DT,'yyyymmdd') SOT/* LAST_PYMNT_DT*/, '' LIMITASIM          "
+ "FROM CDM.CC_DAILY A, CDM.CC_CUST_STMT B     WHERE A.CARD_TP = 'B'  AND A.VALID = 'Y'         AND A.CUST_ID =  " + x + "   AND A.CUST_ID =B.CUST_ID(+)     AND A.CUR_CARD_NO=B.CARD_NO";


        //   strSql = "select /*+ parallel(1024)*/  'KMH' TUR,CAST(ACCT_NO  AS VARCHAR(50)) as URUN, ABS(RISK) AS GECIKME_BAKIYE, NUM_UNPAID_DAYS as  GGS,ABS(MIN_PYMT_AMT) AS ASGARI , CAST(LST_REALIZATION_DT AS VARCHAR(50))  as EKT, CAST(NEXT_REALIZATION_DT AS VARCHAR(50)) as SOT ,CAST(LIMIT_EXCEED AS VARCHAR(50)) LIMITASIM  from LDM.OVERDRAFT where CUST_ID= " + x + "  AND OD_ACCT_ST='1' union all  SELECT /*+ PARALLEL(1024)*/ 'KREDI' TUR,CAST(CREDIT_REFERENCE AS VARCHAR(50)) as URUN,  CREDIT_BALANCE  AS GECIKME_BAKIYE,  NUM_DELAY_DAY AS GGS,      DELAYED_INSTALMENT_AMT AS ASGARI,CAST(FRST_DELAY_INSTALLMENT_DT AS VARCHAR(50)) AS EKT ,      '' as SOT,'' as LIMIT_ASIM    FROM LDM.CASH_LOANS CL    WHERE CL.CREDIT_ST = '1'       AND CL.CUST_ID = " + x + "    union all     SELECT /*+ parallel(1024)*/  'KART' TUR,CAST(A.CUR_CARD_NO  AS VARCHAR(50)) URUN,          B.LAST_STMT_TOT_BLNC_DOM GECIKME_BAKIYE,          A.DLQ_DAY_CNT GGS,           B.LAST_STMT_MIN_PYMNT_AMNT_DOM ASGARI,    B.LAST_STMT_DT EKT, B.LAST_PYMNT_DT SOT/* LAST_PYMNT_DT*/, '' LIMITASIM          FROM CDM.CC_DAILY A, CDM.CC_CUST_STMT B     WHERE A.CARD_TP = 'B'  AND A.VALID = 'Y'         AND A.CUST_ID =  " + x + "   AND A.CUST_ID =B.CUST_ID/*DEV(+)*/     AND A.CUR_CARD_NO=B.CARD_NO; ";
        try
        {
            DataTable dt = new DataTable();
            dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            //     dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");

            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"URUN\":\"" + ex.Message + "\"}]";
        }
        return val;// sb.ToString();


    }

    private string UYARI(Int32 x)
    {

        string val;

        string strSql = "select /*+ parallel(1024)*/ WARNING_CODE_DESC WARNING FROM CLDM.COLLTN_CUST_WARNING  WHERE CUST_ID = " + x;


        try
        {
            DataTable dt = new DataTable();
            dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            //  dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");

            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;// sb.ToString();


    }


    private string TEMELBILGI(Int32 x)
    {
        string val;
        string strSql = "SELECT /*parallel(4)*/SCND_NM,NM,SURNM,MOTHER_NAME,FATHER_NAME,TO_CHAR(BRTH_DT,'DD/MM/YYYY') BRTH_DT,BRTH_PL,TR_ID_NUM,MOTHER_SURNAME,EMPR, INCOME ,CASE MRTL_ST_CODE WHEN 'EV' THEN 'EVLI' WHEN 'BK' THEN 'BEKAR'  WHEN 'DL' THEN 'DUL' ELSE 'BELIRTILMEMIS' END AS MRTL_ST ,(EXTRACT(YEAR FROM SYSDATE) - EXTRACT(YEAR FROM BRTH_DT)) AS YAS  FROM  EDW.IND WHERE CUST_ID=" + x;
        //DEV İÇİN     string strSql = "SELECT /*parallel(4)*/SCND_NM,NM,SURNM,MOTHER_NAME,FATHER_NAME,/*TO_CHAR(BRTH_DT,'DD/MM/YYYY')*/ BRTH_DT,BRTH_PL,TR_ID_NUM,MOTHER_SURNAME,EMPR, INCOME ,CASE MRTL_ST_CODE WHEN 'EV' THEN 'EVLI' WHEN 'BK' THEN 'BEKAR'  WHEN 'DL' THEN 'DUL' ELSE 'BELIRTILMEMIS' END AS MRTL_ST ,DATEDIFF(year,BRTH_DT,GETDATE()) /*(EXTRACT(YEAR FROM SYSDATE) - EXTRACT(YEAR FROM BRTH_DT))*/ AS YAS  FROM  EDW.IND WHERE CUST_ID=" + x;
        try
        {
            DataTable dt = new DataTable();
            dt = PCL.Oracle_DBOperations.GetData(strSql, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            //DEV İÇİN    dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            val = MM.GetJSONString(dt);
        }
        catch (Exception ex)
        {
            val = "[{\"WARNING\":\"" + ex.Message + "\"}]";
        }
        return val;// sb.ToString();
    }
}
