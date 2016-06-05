<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Micro Manager</title>
    <link href="Assets/Main.css" rel="stylesheet" type="text/css" />
    <link href="Assets/Button.css" rel="stylesheet" type="text/css" />
</head>

<body>
    <form id="form1" runat="server">
    <center id="giris">
        <br />
        <br />
        <br />
   
    <asp:Label ID="lbl1" runat="server" Text="Label" CssClass="form-control"></asp:Label>
    <br />
    <br />
    <br />
    <br />
        <asp:Button ID="btnGiris" runat="server" Text="gir" onclick="btnGiris_Click" CssClass="button blue" />
     </center></form>
</body>
</html>
