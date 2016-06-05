using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Text;
using System.Globalization;

/// <summary>
/// Summary description for MicroMain
/// </summary>
public class MicroMain
{

    private Boolean cOnline; //Kullanıcı
    private Decimal cCUST; //Kullanıcı
    public Decimal CUST
    {
        get { return cCUST; }
        set { cCUST = value; }
    }
    public Boolean Online
    {
        get { return cOnline; }
        set { cOnline = value; }
    }
    private String cUser; //Kullanıcı
    public String User
    {
        get { return cUser; }
        set { cUser = value; }
    }

    private string cEDWUserId;
    private string cEDWPassword;

    public String EDWUserId
    {
        get { return cEDWUserId; }
        set { cEDWUserId = value; }
    }

    public String EDWPassword
    {
        get { return cEDWPassword; }
        set { cEDWPassword = value; }
    }

    public MicroMain()
    {
        InitializeClass();
    }


    private void InitializeClass()
    {
        cUser ="A25318";// HttpContext.Current.User.Identity.Name.ToUpper().Replace("İ", "I").Substring(7, 6).ToString();

        // InitEDWUser();
        cOnline = false;
        cCUST = 0;
    }
    public Boolean IsNumeric(String s)
    {
        float f;

        return float.TryParse(s, NumberStyles.Any, CultureInfo.InvariantCulture, out f);
        //float.TryParse(s, out output);
    }

    /*public string ConvertDataTable2HTMLString(string STR)
    {
        // string strM = "EXEC KKBSITE_SP_FINANSAL " + ViewState["base"].ToString();

        String RVl = "";

        DataTable dt = new DataTable();
        try
        {

            //dt = PCL.MsSQL_DBOperations.GetData(STR, "SqlConn");
            dt = PCL.Oracle_DBOperations.GetData(STR, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            // RV = dt.Rows[0]["URUN"].ToString().Trim();

            StringBuilder sb = new StringBuilder();
            sb.Append("<table class=\"urnTable\" style=\"max-width: 1100px; max-height: 750px; overflow: auto;\"><thead><tr>");
            foreach (DataColumn c in dt.Columns)
            {
                sb.AppendFormat("<th>{0}</th>", c.ColumnName);
            }
            sb.AppendLine("</tr></thead><tbody>");
            foreach (DataRow dr in dt.Rows)
            {
                sb.Append("<tr>"); foreach (object o in dr.ItemArray)
                {
                    sb.AppendFormat("<td>{0}</td>",
                    System.Web.HttpUtility.HtmlEncode(o.ToString()));
                } sb.AppendLine("</tr>");
            } sb.AppendLine("</tbody></table>");
            RVl = sb.ToString();
        }
        catch (Exception ex)
        {
            RVl = "HATA: " + ex;//  Page.ClientScript.RegisterStartupScript(typeof(Page), "bisey3", "alert('bunu Alper Özen e gönderiniz\n" + strM + "\n" + ex.ToString() + "');", true);
        }


        return RVl;
    }
    */
    public string ConvertDataTable2HTMLString(string Bag, string Bas, string STR)
    {
        // string strM = "EXEC KKBSITE_SP_FINANSAL " + ViewState["base"].ToString();

        String RVl = "";

        DataTable dt = new DataTable();
        try
        {
            if (Bag == "SqlConn")
            {
                dt = PCL.MsSQL_DBOperations.GetData(STR, "SqlConn");
            }
            else if (Bag == "EDWConn")
            {
                dt = PCL.Oracle_DBOperations.GetData(STR, "EDWConn", HttpContext.Current.Session["EDWuser"].ToString(), HttpContext.Current.Session["EDWpass"].ToString());
            }
            // RV = dt.Rows[0]["URUN"].ToString().Trim();

            StringBuilder sb = new StringBuilder();
            sb.Append("<table id=\"" + Bas + "\"  border=\"0\" cellpadding=\"0\" cellspacing=\"1\"  class=\"tablesorter\"  ><thead><tr>");
            foreach (DataColumn c in dt.Columns)
            {
                sb.AppendFormat("<th>{0}</th>", c.ColumnName);

            }
            if (Bas == "KEFIL")
                sb.AppendFormat("<th>detay</th>");
            sb.AppendLine("</tr></thead><tbody>");
            foreach (DataRow dr in dt.Rows)
            {
                sb.Append("<tr>");
                Int32 clmnm = 0;
                string bs = "";
                foreach (object o in dr.ItemArray)
                {
                    clmnm = clmnm + 1;
                    if (clmnm == 2)
                        bs = o.ToString();
                    sb.AppendFormat("<td class=\"K_C" + clmnm.ToString() + "\">{0}</td>",
                    System.Web.HttpUtility.HtmlEncode(o.ToString()));
                }
                if (Bas == "KEFIL")
                    sb.AppendFormat("<td><a class=\"detay button turq small\" id=\"" + bs + "\"> DETAY</a></td>");
                sb.AppendLine("</tr>");
            } sb.AppendLine("</tbody></table>");
            RVl = sb.ToString();
        }
        catch (Exception ex)
        {
            RVl = "HATA: @ConvertDataTable2HTMLString()" + ex;//  Page.ClientScript.RegisterStartupScript(typeof(Page), "bisey3", "alert('bunu Alper Özen e gönderiniz\n" + strM + "\n" + ex.ToString() + "');", true);
        }


        return RVl;
    }
    public string kullanici(Int16 RequestedPage)
    {


        Int16 ReturnValue = 0;
        String strRetVal = "";
        HttpContext httpContext = HttpContext.Current;

        string strSql = "EXEC MCR_SP_NAVI " + cUser + "," + RequestedPage.ToString();
        try
        {
            DataTable dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            if (dt.Rows.Count > 0)
            {
                ReturnValue = PCL.Utility.DBtoMT.ToInt16(dt.Rows[0]["AKTIFSAYFA"]);
                cCUST = PCL.Utility.DBtoMT.ToDecimal(dt.Rows[0]["CUST"].ToString());
                httpContext.ApplicationInstance.Session["CUST"] = cCUST;
                Online = PCL.Utility.DBtoMT.ToBoolean(dt.Rows[0]["ISONLINE"]);

            }
            else
            {
                ReturnValue = 0;
            }
            //ReturnValue = PCL.MsSQL_DBOperations.ExecuteScalarSQLStr(strSql, "SqlConn");
            strRetVal = ReturnValue.ToString();
        }
        catch (Exception ex)
        {
            strRetVal = " The process failed. Error = " + ex.Message;
        }

        return strRetVal;
    }

    public string SayfayaGit(string RequestedPageId)
    {
        string strSql = "select ISNULL(max(REDIRECTPAGE),'Default.aspx' ) as REDIRECTPAGE "
                        + " from MCR_DIM_SAYFALAR "
                        + " where SAYFAID = " + RequestedPageId.ToString();

        string isim = "";
        try
        {
            DataTable dt = PCL.MsSQL_DBOperations.GetData(strSql, "SqlConn");
            if (dt.Rows.Count > 0)
            {
                isim = dt.Rows[0]["REDIRECTPAGE"].ToString();

            }
            else
            {
                isim = "Hata.aspx";
            }
        }
        catch
        {
            isim = "Hata.aspx";
        }





        return isim;


    }

    public decimal musteridurum(string baseno)
    {


        long ReturnValue = 0;
        // String strRetVal = "";

        string strSql = "EXEC MCR_SP_AKTIF " + cUser + "," + baseno.ToString();
        try
        {
            ReturnValue = PCL.MsSQL_DBOperations.ExecuteScalarSQLStr(strSql, "SqlConn");
            // strRetVal = ReturnValue.ToString();
        }
        catch
        {
            ReturnValue = 0;
        }
        cCUST = ReturnValue;
        //  Session["CUSTID"] = strRetVal;
        return ReturnValue;
    }

    public string MusteriBitir(string baseno, Int16 talep)
    {
        //     string cUser = HttpContext.Current.User.Identity.Name.ToUpper().Replace("İ", "I").Substring(7, 6).ToString();
        string retVal = "0";
        long ReturnValue = 0;
        string strSql = "EXEC MCR_SP_MUSTERIBITIR " + cUser + "," + baseno.ToString() + "," + talep.ToString();

        try
        {
            ReturnValue = PCL.MsSQL_DBOperations.ExecuteScalarSQLStr(strSql, "SqlConn");
            retVal = ReturnValue.ToString();
        }



        catch (Exception ex)
        {
            retVal = " The process failed. Error = " + ex.Message;
        }

        return retVal;
    }


    public string GetJSONString(DataTable Dt)
    {

        string[] StrDc = new string[Dt.Columns.Count];
        string HeadStr = string.Empty;
        StringBuilder Sb = new StringBuilder();
        if (Dt.Rows.Count > 0)
        {
            if (Dt.Columns.Count > 0)
            {
                for (int i = 0; i < Dt.Columns.Count; i++)
                {

                    StrDc[i] = Dt.Columns[i].Caption;

                    HeadStr += "\"" + StrDc[i] + "\" : \"" + StrDc[i] + i.ToString() + "¾" + "\",";
                }

                HeadStr = HeadStr.Substring(0, HeadStr.Length - 1);


                // Sb.Append("{\"" + Dt.TableName + "\" : [");
                Sb.Append("[");

                for (int i = 0; i < Dt.Rows.Count; i++)
                {

                    string TempStr = HeadStr;
                    Sb.Append("{");

                    for (int j = 0; j < Dt.Columns.Count; j++)
                    {

                        TempStr = TempStr.Replace("<br>",Environment.NewLine ).Replace(Dt.Columns[j] + j.ToString() + "¾", Dt.Rows[i][j].ToString());
                    }

                    Sb.Append(TempStr + "},");
                }

                Sb = new StringBuilder(Sb.ToString().Substring(0, Sb.ToString().Length - 1));
                //Sb.Append("]}");
                Sb.Append("]");
            }
            else
            {
                Sb.Append("[]");
            }
        }
        else { Sb.Append("[]"); }
        return Sb.ToString();
    }

}
