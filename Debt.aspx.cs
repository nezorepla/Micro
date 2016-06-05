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

public partial class Debt : System.Web.UI.Page
{
    MicroMain MM = new MicroMain();
    Int16 PageId = 1;

    protected void Page_Load(object sender, EventArgs e)
    {
        string HedefSayfa = MM.kullanici(99);
        //if (!string.IsNullOrEmpty((string)Session["giris"]))
        //{
        //    Response.Redirect("debt.aspx");
        //} 

        if (HedefSayfa != PageId.ToString())
            Response.Redirect(MM.SayfayaGit(HedefSayfa));
        if (!Page.IsPostBack)
        {
            token();

            InitEDWUser();
            ClearPage();
            if (MM.CUST > 100)
            {
                AktifMusteriVar(MM.CUST.ToString());
            }
            else
            {
                ManuelArama();
            }

        }
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
    protected void btnMusteriBul_Click(object sender, EventArgs e)
    {

        Session["CUST"] = MM.musteridurum(txtBase.Text.ToString());
        musteridoldur(Session["CUST"].ToString());
    }
    public void ClearPage()
    {
        //Token.Text = "";

        txtOID.Text = "";
        lblAktifMusteri.Visible = false;
        lblManuelArama.Visible = false;
        lblMusteriBilgileri.Visible = false;
        lblUyari.Visible = false;
    }
    public void ManuelArama()
    {
        ClearPage();
        lblManuelArama.Visible = true;
    }
    public void AktifMusteriVar(string baseno)
    {
        lblAktifMusteri.Visible = true;
        lblBase.Text = baseno.ToString() + " Numaralı Müşteride Aktif Görünüyorsunuz?";

    }
    public string Ortaklik(string b) { return "<h3>" + b + " Numaralı Base'e Bağlı Ortaklık Bilgileri</h3>" + MM.ConvertDataTable2HTMLString("EDWConn", "ORTAK", "SELECT /*+ parallel(4)*/ A.ORTAK_CUST_ID,A.PRTNR_PRCNTG ORTAKLIK_YUZDE,E.SCND_NM||' '||E.NM ISIM,E.SURNM from MUSTERI_ORTAK_DATA_1  a,edw.ind e where A.ORTAK_CUST_ID=E.CUST_ID(+) and a.CUST_ID='" + b + "'"); }
    //  public string Ortaklik(string b) { return "<h3>" + b + " Numaralı Base'e Bağlı Ortaklık Bilgileri</h3>" + MM.ConvertDataTable2HTMLString("SqlConn", "ORTAK", "SELECT /*+ parallel(4)*/ A.ORTAK_CUST_ID,A.PRTNR_PRCNTG ORTAKLIK_YUZDE,E.SCND_NM+' '+E.NM ISIM,E.SURNM from A25318.MUSTERI_ORTAK_DATA_1  a,EDW.IND e where A.ORTAK_CUST_ID=E.CUST_ID  and a.CUST_ID='" + b + "'"); }
    public string Kefillik(string b) { return "<h3>" + b + " Numaralı Base'e Bağlı Kefillik Bilgileri</h3>" + MM.ConvertDataTable2HTMLString("EDWConn", "KEFIL", "select /*+ parallel(4)*/ CUST_ID  ,KEFIL_MUSTERI_NO,KEFIL_UNVAN,KEFIL_PC_CODE from COLLECTION_DATA_KEFILLER where CUST_ID ='" + b + "'"); }
    // public string Kefillik(string b) { return "<h3>" + b + " Numaralı Base'e Bağlı Kefillik Bilgileri</h3>" + MM.ConvertDataTable2HTMLString("SqlConn", "KEFIL", "select /*+ parallel(4)*/ CUST_ID  ,KEFIL_MUSTERI_NO,KEFIL_UNVAN,KEFIL_PC_CODE from A25318.COLLECTION_DATA_KEFILLER where CUST_ID ='" + b + "'"); }

    public string ORT_KEF(string b)
    {
        string qr = "SELECT /*+ parallel(4)*/ A.ORTAK_CUST_ID as MUSTERI_NO,TO_CHAR(A.PRTNR_PRCNTG) ORTAKLIK_YUZDE,E.FULL_NM ISIM ,'ORTAK' as TIP"
+ " from MUSTERI_ORTAK_DATA_1  a,edw.CUST e "
+ " where A.ORTAK_CUST_ID=E.CUST_ID(+)"
+ "  and a.CUST_ID=" + b + " "
+ "  UNION  ALL"
+ "  select /*+ parallel(4)*/ KEFIL_MUSTERI_NO  as MUSTERI_NO ,'' ORTAKLIK_YUZDE,KEFIL_UNVAN AS ISIM,'KEFIL' as TIP /* KEFIL_PC_CODE */ "
+ "  from COLLECTION_DATA_KEFILLER K"
+ "  where CUST_ID =" + b + " "
+ "  AND NOT EXISTS(SELECT 1 FROM  MUSTERI_ORTAK_DATA_1 O WHERE O.ORTAK_CUST_ID=K.KEFIL_MUSTERI_NO AND O.CUST_ID=" + b + ")";
        var orkef = "";// "<h3>" + b + " Numaralı Base'e Bağlı Ortaklık ve Kefillik Bilgileri</h3>" + MM.ConvertDataTable2HTMLString("EDWConn", "KEFIL", qr);
        return "<div class=\"maincontain\"><div class=\"header\"></div><table class=\"maintable\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\"><tr><td><div id=\"colBL\" class=\"box2\"></div></td><td><div id=\"colSRM\" class=\"box2\"></div><div id=\"colORKEF\" class=\"box2\">" + orkef + "</div><div id=\"colILT\" class=\"box2\"></div></td></tr><tr><td colspan=2><div id=\"colURN\" class=\"box2\"></div><div id=\"colMEM\" class=\"box2\"></div></td></tr></table></div>";

    }
    public void musteridoldur(string baseno)
    {
        txtOID.Text = baseno;
        lblAktifMusteri.Visible = false;
        lblManuelArama.Visible = false;
        lblMusteriBilgileri.Visible = true;

        String MusStr = "select  /*+ parallel(1024)*/* from A36596.MICRO_MEMO_TEL where MUSTERI_NO= " + baseno;
            DataTable dt = new DataTable();
        try
        {
            dt = PCL.MsSQL_DBOperations.GetData(MusStr, "SqlConn");
//            dt = PCL.Oracle_DBOperations.GetData(MusStr, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            string val = MM.GetJSONString(dt);

            ScriptManager.RegisterStartupScript(this, typeof(string), "JsVal", "var JSVal=" + val + ";", true);
        ScriptManager.RegisterStartupScript(this, typeof(string), "jSON", "$(document).ready(function(){DOLDUR(0," + baseno + ");$('.header').sticky({topSpacing:0});})", true);
        lblMusteriAnaBilgileri.Text = ORT_KEF(baseno);// Ortaklik(baseno) + "<hr>" + Kefillik(baseno);
        }
        catch (Exception ex)
        {
              dt = PCL.MsSQL_DBOperations.GetData(MusStr, "SqlConn");
              string val = MM.GetJSONString(dt);

              ScriptManager.RegisterStartupScript(this, typeof(string), "JsVal", "var JSVal=" + val + ";", true);
              ScriptManager.RegisterStartupScript(this, typeof(string), "jSON", "$(document).ready(function(){DOLDUR(0," + baseno + ");$('.header').sticky({topSpacing:0});})", true);


              lblMusteriAnaBilgileri.Text = ex.ToString() + ORT_KEF(baseno);// Ortaklik(baseno) + "<hr>" + Kefillik(baseno);
                    }

        // lblMusteriBilgileri.Text = baseno;
        /*
         * 
         * TAŞINDI
         * String MusStr = "select * from A36596.micro_memo_tel where MUSTERI_NO= " + baseno;
         DataTable dt = new DataTable();
         dt = PCL.Oracle_DBOperations.GetData(MusStr, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());

         string val= MM.GetJSONString(dt);
       */


        // lblMusteriBilgileri.Text = MM.GetJSONString(dt);

    }
    public void UyariYaz(string Uyari)
    {
        lblUyari.Visible = true;
        lblUyari.Text = Uyari;
    }

    protected void btnDevam_Click(object sender, EventArgs e)
    {
        musteridoldur(Session["CUST"].ToString());
    }
    protected void btnCikis_Click(object sender, EventArgs e)
    {
        if (MM.MusteriBitir(Session["CUST"].ToString(), 0) == "1")
        {

            MM.CUST = 0;
            Session["CUST"] = 0;
            ManuelArama();
        }
        else
        {
            UyariYaz(Session["CUST"].ToString() + " numaralı Müşteri Kapatilamadı");

        }
    }

    protected void token()
    {
        //Token.Text = "A25318";
        Random rnd = new Random();
        int tkn = rnd.Next(1000, 9999);
        // if (Session["TOKEN"] == null)
        // {
        Session["TOKEN"] = tkn;
        Token.Text = tkn.ToString();
        /*
                }
                else if (!MM.IsNumeric(Session["TOKEN"].ToString()))
                {
                    Session["TOKEN"] = tkn;
                    Token.Text = tkn.ToString();

                }
          */

    }

}
