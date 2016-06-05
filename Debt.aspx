<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Debt.aspx.cs" Inherits="Debt" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<title>Micro Manager</title>
    <script src="Assets/jquery-1.8.3.js" type="text/javascript"></script>
<link rel="shortcut icon" href="ico.png" />
    <link href="Assets/facebox.css" rel="stylesheet" type="text/css" />

    <script src="Assets/facebox.js" type="text/javascript"></script>

    <script src="Assets/jquery.tablesorter.min.js" type="text/javascript"></script>

    <link href="Assets/Main.css" rel="stylesheet" type="text/css" />
    <link href="Assets/TableSorter.css" rel="stylesheet" type="text/css" />

    <script src="Assets/JScript.js" type="text/javascript"></script>

    <link href="Assets/Button.css" rel="stylesheet" type="text/css" />

    <script src="Assets/modernizr.custom.99982.js" type="text/javascript"></script>

    <script src="Assets/jquery.easing.1.3.js" type="text/javascript"></script>

    <script src="Assets/liteaccordion.jquery.js" type="text/javascript"></script>
    <script src="http://static.oley.com/v1.087/resources/js/libs/jquery.dateFormat-1.0.js?v=0.1065" type="text/javascript"></script>

    <link href="Assets/liteaccordion.css" rel="stylesheet" type="text/css" />

    <script src="Assets/jquery.sticky.js" type="text/javascript"></script>

    <script src="Assets/jquery.cluetip.js" type="text/javascript"></script>

    <link href="Assets/jquery.cluetip.css" rel="stylesheet" type="text/css" />

    <script src="Assets/jquery-ui-1.9.2.custom.min.js" type="text/javascript"></script>

    <link href="Assets/jquery-ui-1.9.2.custom.min.css" rel="stylesheet" type="text/css" />

    <script src="Assets/ui.datepicker-tr.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function() {
     

        });
    </script>

</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:Label ID="lblUyari" runat="server" Text=""></asp:Label>
       
       <center>
        <asp:Label ID="lblManuelArama" runat="server">
            <asp:TextBox ID="txtBase" runat="server" Text="62676944" CssClass="form-control"></asp:TextBox>
            <asp:Button ID="btnMusteriBul" runat="server" Text="Button" CssClass="button blue"
                OnClick="btnMusteriBul_Click" />
        </asp:Label>
       <!--  <center> </center>-->
        
        <asp:Label ID="lblAktifMusteri" runat="server">
          
          <asp:Label ID="lblBase" runat="server"></asp:Label><br />
            <asp:Button ID="btnDevam" runat="server" Text="DEVAM ET" OnClick="btnDevam_Click"
                CssClass="button blue" />
            <asp:Button ID="btnCikis" runat="server" Text="MUSTERIDEN ÇIK" CssClass="button blue"
                OnClick="btnCikis_Click" />
                </asp:Label>
                </center>
                
        <asp:Label ID="lblMusteriAnaBilgileri" runat="server"></asp:Label>
        <asp:Label ID="lblMusteriBilgileri" runat="server" Text="Müşteri Bilgileri"></asp:Label>
        <asp:TextBox ID="Token" CssClass="t0ken" Style="display: none" runat="server" Text="A25318"></asp:TextBox>
        <asp:TextBox ID="txtOID" runat="server" Style="display: none"></asp:TextBox>
        <!--str-->
        <!--str-->
    </div>
    </form>
</body>
</html>
