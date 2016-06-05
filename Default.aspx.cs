using System;
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

public partial class _Default : System.Web.UI.Page
{
    MicroMain MM = new MicroMain();
    Int16 PageId = 0;

    protected void Page_Load(object sender, EventArgs e)
    {
        //token();
        string HedefSayfa = MM.kullanici(99);
        //if (!string.IsNullOrEmpty((string)Session["giris"]))
        //{
        //    Response.Redirect("debt.aspx");
        //} 
        if (!MM.Online) {
            lbl1.Text = "Lütfen Giriş Yapınız!";
        
        }
        if (HedefSayfa != PageId.ToString())
            Response.Redirect(MM.SayfayaGit(HedefSayfa));
 

    }
    protected void btnGiris_Click(object sender, EventArgs e)
    {
        string HedefSayfa = MM.kullanici(1);
        //if (!string.IsNullOrEmpty((string)Session["giris"]))
        //{
        //    Response.Redirect("debt.aspx");
        //} 

   
            Response.Redirect(MM.SayfayaGit(HedefSayfa));

    }
  /*  protected void token()
    {
        Random rnd = new Random();
        int tkn = rnd.Next(1000, 9999);
        if (Session["TOKEN"] == null)
        {
            Session["TOKEN"] = tkn;
           


        }
        else if (MM.IsNumeric(Session["TOKEN"].ToString()))
        {
            Session["TOKEN"] = tkn;
       


        }
    

    }   */

}
