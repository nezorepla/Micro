/// <reference path="jquery-1.8.3-vsdoc.js" />
// format date/time
var aylar = ['Ocak', 'Åubat', 'Mart', 'Nisan', 'MayÄ±s', 'Haziran', 'Temmuz', 'AÄŸustos', 'EylÃ¼l', 'Ekim', 'KasÄ±m', 'AralÄ±k'], gunler = ['Pazar', 'Pazartesi', 'SalÄ±', 'Ã‡arÅŸamba', 'PerÅŸembe', 'Cuma', 'Cumartesi'];
function parseDataDate(d) { if (d != undefined) { var t, x = [0, 0, 0]; if (d.toString().indexOf(' ') > -1) { var p = d.toString().split(' '); t = p[0].split('-'); x = p[1].split(':'); if (x.length < 3) x.push(0) } else t = d.toString().split('-'); return new Date(t[0], t[1] - 1, t[2], x[0], x[1], x[2]) } }
function formatDate(d) { if (d != undefined) { var t, s = '', x = parseDataDate(d); if (d.toString().indexOf(' ') > -1) { var p = d.toString().split(' '); t = p[0].split('-'); s = p[1].substring(0, 5) } else t = d.toString().split('-'); return t[2] + ' ' + aylar[t[1] - 1] + ' ' + t[0] + ', ' + gunler[x.getDay()] + " " + s; } }
function formatTime(d) { return d.toString().substring(11, 16); }
function formatDateTime(dt) { return (dt.getDate() < 10 ? '0' : '') + dt.getDate() + '.' + (dt.getMonth() + 1 < 10 ? '0' : '') + (dt.getMonth() + 1) + '.' + dt.getFullYear() + ' ' + (dt.getHours() < 10 ? '0' : '') + dt.getHours() + ':' + (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes() + ':' + (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds() }
function formatShortDate(d) { if (d != undefined) { var x = parseDataDate(d); return x.getDate() + ' ' + aylar[x.getMonth()] + ' ' + x.getFullYear() + ', ' + gunler[x.getDay()]; } }
function formatShortTime(d) { if (d != undefined) { var x = parseDataDate(d); return (x.getHours() < 10 ? '0' + x.getHours() : x.getHours()) + ':' + (x.getMinutes() < 10 ? '0' + x.getMinutes() : x.getMinutes()); } }
// merge_sort: http://en.literateprograms.org/Merge_sort_(JavaScript)?action=history&offset=20081119164105
function merge_sort(array, comparison) { if (array.length < 2) return array; var middle = Math.ceil(array.length / 2); return merge(merge_sort(array.slice(0, middle), comparison), merge_sort(array.slice(middle), comparison), comparison) }
function merge(left, right, comparison) { var result = new Array(); while ((left.length > 0) && (right.length > 0)) { if (comparison(left[0], right[0]) < 0) result.push(left.shift()); else result.push(right.shift()) } while (left.length > 0) result.push(left.shift()); while (right.length > 0) result.push(right.shift()); return result }

function kisalt(t, sinir) {
    var rv;
    if (t.length > 50) {

        rv = t.toString().substring(0, 20) + '...' + t.toString().substring(t.length - 20, t.length);

    } else { rv = t; }
    return rv;
}
function tarih(t) {
    return t.toString().replace('00:00:00', '');

}
function formatNumber(n, d) {
    if (isNaN(parseInt(n, 10))) return "NaN";
    d = d || 2;
    n = Math.round(parseFloat(n.toString().replace(',', '.')) * 100) / 100;
    var s = n < 0 ? '-' : '';

    var p = (n > 0 ? n.toFixed(d) : (-1 * n).toFixed(d)).split('.');
    var t = p[0];
    for (i = t.length - 3; i >= 1; i = i - 3)
        t = t.substring(0, i) + "." + t.substring(i, t.length);

    return s + t + ',' + p[1];
}

function formatNumberFloor(n, d) {
    if (isNaN(parseInt(n, 10))) return "NaN";
    d = d || 2;
    n = Math.floor(parseFloat(n.toString().replace(',', '.')) * 100) / 100;
    var s = n < 0 ? '-' : '';

    var p = (n > 0 ? n.toFixed(d) : (-1 * n).toFixed(d)).split('.');
    var t = p[0];
    for (i = t.length - 3; i >= 1; i = i - 3)
        t = t.substring(0, i) + "." + t.substring(i, t.length);

    return s + t + ',' + p[1];
}
$("#accTELEFON").live("click", function() {
    var icerik = $("#detayTELEFON").html();
    var JT = $('.t0ken').val();
    var BASE = $('#detaycontain').attr('rel');
    if (icerik.length > 1) {
    } else {
        detayTELEFON(BASE, JT);
    }
})
$("#dahaMemo").live("click", function() {
    var midc = $(".hdnIntCode").last().val(); //serializeArray();
    /*var MIds = '';
    jQuery.each(midc, function(i, field) {
    MIds += (field.name + ',');
    });
    */
    var JT = $('.t0ken').val();
    var OID = $("#fOID").val();

    var src = $('#fpre-msg');
    $('#fpost-msg').html('<img src="Assets/img/loading.gif"/>');
    // $('#tbMEMO').val('Json.aspx?I=6&T=' + JT + '&M=' + b + '&TP=' + T);
    try {

        $.ajax({
            url: 'Json.aspx?I=17&T=' + JT + '&M=' + OID + '&TP=' + midc,
            dataType: 'json',
            cache: false,
            success: function(JSON) {
                if (JSON.toString().length>1) {
                    var W = ''
                    $.each(JSON, function(i, deger) {
                        if (deger.CID > 0) {
                            W += ('<div id="FB_' + deger.INTCODE + '" class="FBOX" style="padding-left:20px;"> MİKRO BASE: ' + decodeURIComponent(deger.OID) + '| MÜŞTERİ NUMARASI: '
                    + decodeURIComponent(deger.CID) + '| EKLEYEN: ' + decodeURIComponent(deger.UID) + ' ('
                    + decodeURIComponent(deger.MDT) + ')<BR>' + decodeURIComponent(deger.MEMO) + '</div>');

                        } else {
                            W += ('<div id="FB_' + deger.INTCODE + '" class="FBOX"  style="padding-left:0px;"><input class="hdnIntCode" type="hidden" name="' + deger.INTCODE + '" value="' + deger.INTCODE + '"><SPAN class="fbMDT">' + deger.MDT + '</SPAN> | <span class="fbUID">' + deger.UID + ' </span> | <span class="fbOID">' + deger.OID + ' </span> | <span class="fbMUSAKS">' + decodeURIComponent(deger.MUSAKS)
                        + '</SPAN><SPAN class="fbTELARR">' + deger.TELARR + '</SPAN><SPAN class="fbURNARR">' + deger.URNARR + '</SPAN><div class="fbMEMO">' + decodeURIComponent(deger.MEMO) + '</div></div>');
                        }
                    });

                    src.append(W);
                } else { $("#dahaMemo").remove(); }
            }, error: function(xhr, ajaxOptions, thrownError) { $(src).append(xhr.status + thrownError); }
        });
    }
    catch (ex) {
        src.append('<br>HATA #dahaMemo' + ex.message);

    }
    finally { $('#fpost-msg').html(''); }

})


$("#accUYARI").live("click", function() {
    var JT = $('.t0ken').val();
    var BASE = $('#detaycontain').attr('rel');
    var icerik = $("#detayUYARI").html();
    if (icerik.length > 1) {
    } else {
        detayUYARI('detayUYARI', BASE, JT);
    }
})
$("#accADRES").live("click", function() {
    var JT = $('.t0ken').val();
    var BASE = $('#detaycontain').attr('rel');
    var icerik = $("#detayADRES").html();
    if (icerik.length > 1) {
    } else {
        detayADRES(BASE, JT);
    }
})
$("#accMEMO").live("click", function() {
    var JT = $('.t0ken').val();
    var BASE = $('#detaycontain').attr('rel');
    var icerik = $("#detayMEMO").html();
    if (icerik.length > 1) {
    } else {
        MEMOG('0', BASE, JT, 5);
    }
})
$("#sendMEMO").live("click", function() {
    loading = true;
    //page++;
    gonder();
})
$("#yeniTelEkle").live("click", function() {

    fnyeniTelEkle();
})

$("#MusteriyiTamamlaGonder").live("click", function() {
    // TelTdEkle();
    window.location.href = 'Debt.aspx';
})
function fnyeniTelEkle() {
    var JT = $('.t0ken').val();
    var OID = $("#yeniTelEkle").attr("rel");
    var CID = 0;
    var te_isim = $('#yeniTelisim').val();
    var te_num = $('#yeniTelNum').val();
    //string OID, string CID, string ISIM, string TEL
    $.ajax(
		{
		    type: "POST",
		    url: "ajax_form_submit.aspx/yenitelekle",
		    data: '{OID:"' + OID + '", CID:"' + CID + '", ISIM:"' + te_isim + '", TEL:"' + te_num + '" }',
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    success: function(response) {
		        TelTrEkle(JT, OID, 1);
		    },
		    failure: function(response) {
		        alert(response.d);
		    }

		});




}
function TelTrEkle(JT, b, TP) {
    // [{ "INTCODE": "1", "OID": "62676944", "CID": "0", "UID": "A25318", "ISIM": "rww", "NUMARA": "rt", "DT": "14.2.2014 16:11:54" }, { "INTCODE": "2", "OID": "62676944", "CID": "0", "UID": "A25318", "ISIM": "f4ftg", "NUMARA": "5452", "DT": "14.2.2014 16:13:31" }, { "INTCODE": "3", "OID": "62676944", "CID": "0", "UID": "A25318", "ISIM": "R43", "NUMARA": "EW", "DT": "14.2.2014 17:30:29" }, { "INTCODE": "4", "OID": "62676944", "CID": "0", "UID": "A25318", "ISIM": "er", "NUMARA": "tt", "DT": "14.2.2014 17:43:56"}]
    // var tvd = [{ "INTCODE": "1", "OID": "62676944", "CID": "0", "UID": "A25318", "ISIM": "rww", "NUMARA": "rt", "DT": "14.2.2014 16:11:54" }, { "INTCODE": "2", "OID": "62676944", "CID": "0", "UID": "A25318", "ISIM": "f4ftg", "NUMARA": "5452", "DT": "14.2.2014 16:13:31" }, { "INTCODE": "3", "OID": "62676944", "CID": "0", "UID": "A25318", "ISIM": "R43", "NUMARA": "EW", "DT": "14.2.2014 17:30:29" }, { "INTCODE": "4", "OID": "62676944", "CID": "0", "UID": "A25318", "ISIM": "er", "NUMARA": "tt", "DT": "14.2.2014 17:43:56"}]
    //try {

    $.ajax({
        url: 'Json.aspx?I=15&T=' + JT + '&M=' + b + '&TP=' + TP,
        dataType: 'json',
        cache: false,
        success: function(tvd) {
            var TDT = ' ';
            /*   */var tel = '';
            $.each(tvd, function(x, deger3) {
                //    alert(deger3.UID);
                tel = deger3.NUMARA;
                ownertp = deger3.UID;
                owner = deger3.ISIM;
                //  TDT += ('<TR class="trrow" id="Tel_' + tel + '"><TD>' + decodeURIComponent(deger3.UID) + '</TD><TD>' + decodeURIComponent(deger3.ISIM) + '</TD><TD>' + decodeURIComponent(deger3.NUMARA) + '</TD><TD> SS</TD><TD>GEÇMİŞ</TD></TR>');
                TDT += ('<tr><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select id="slc_' + tel + '"  class="ftelarray" name="' + tel + '"></select></td><td><a id="jti" class="jt" href="#/Json.aspx?I=11&T=' + JT + '&M=' + b + '&TP=' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + b + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')

            });
            //alert(TDT);
            $('#KISILER').append(TDT);
            if (TP == 1) {

                $.ajax({
                    url: 'Json.aspx?I=8&T=' + JT + '&M=' + b,
                    dataType: 'json',
                    cache: false,
                    success: function(JSONF) {

                        $.each(JSONF, function(i, degerF) {

                            //         OO += '<option value="' + deger.INTCODE + '">' + deger.TELAKS + '</option>';
                            $('#slc_' + tel).append('<option value="' + decodeURIComponent(degerF.INTCODE) + '">' + decodeURIComponent(degerF.TELAKS) + '</option>');

                        });

                    }, error: function(xhr, ajaxOptions, thrownError) { }
                });

            }

        }
    })
    /**/
    $('#jti').cluetip({ activation: 'click', arrows: true, cluetipClass: 'rounded', dropShadow: false, sticky: true, ajaxCache: false, closePosition: 'title', closeText: '<img src="Assets/img/basic/x.png" alt="close" />' });

}

function TelTdEkle() {
    var fteller = $(".ftelarray").serializeArray();
    var ftel = '';
    jQuery.each(fteller, function(i, field) {
        ftel += (field.name + ',');
    });


    var ts = '';

    $.ajax(
		{
		    type: "POST",
		    url: "ajax_form_submit.aspx/telaksiyonlar",
		    data: '{TELARRAY:"' + ftel + '" }',
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    success: function(response) {


		        jQuery.each(response.d, function(i, f) {
		            $('#Tel_Th').append('<th></th>');
		            for (field in f) {
		                if (field !== 'DT')
		                    $('#Tel_' + field).append('<td>' + f[field] + '</td>');

		            }
		        });
		    },
		    failure: function(response) {
		        alert(response.d);
		    }

		});



    $("#ftbMEMO").val(ts);

}


function gonder() {
    var JT = $('.t0ken').val();
    var OID = $("#OID").val();
    var CID = $("#CID").val();
    var tbMEMO = encodeURIComponent($("#tbMEMO").val());
    var name = $("#name").val();
    if (tbMEMO.length > 1) {

        $("#post-msg").html("<img src='assets/img/loading.gif'/>");

        var teller = $(".telarray").serializeArray();
        var tel = '';
        jQuery.each(teller, function(i, field) {
            tel += (field.name + '.' + field.value + ',');
        });


        var urnlerU = $(".UrunAksiyonlari").serializeArray();
        var urrU = '';
        jQuery.each(urnlerU, function(x, fieldU) {
            urrU += (fieldU.name + '|' + fieldU.value + '~');
        });

        $.ajax(
		{
		    type: "POST",
		    url: "ajax_form_submit.aspx/gercek",
		    data: '{OID: "' + OID + '",CID:"' + CID + '",name:"' + name + '",tbMEMO:"' + tbMEMO + '",TELARRAY:"' + tel + '",URNARRAY:"' + urrU + '" }',
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    success: function(response) {
		        MEMOG('1', CID, JT, 1);
		        alert(CID + ' NUMARALI MÜŞTERİ NOTU BAŞARIYLA EKLENMİŞTİR');
		        $("#tbMEMO").val('');
		        $('#accMEMO').parent().trigger('click');
		    },
		    failure: function(response) {
		        alert(response.d);
		    }

		});

    } else { alert('MEMO YAZILMALI') }
}

$(".detay").live("click", function(e) {
    //$('#facebox .content').width('900px');
    var JT = $('.t0ken').val();
    jQuery.facebox('veriler yükleniyor');
    var BASE = $(this).attr('id'); var OID = $("#txtOID").val();
    //    var str = $('<div id="detaycontain" class="detaycontain" rel="' + BASE + '"><div id="acc" ><ol><li> <h2> <span id="accTEMEL">Temel Bilgiler</span> </h2>   <div id="d1"> <div id="detayTEMEL"  ></div></div></li><li> <h2> <span id="accUYARI">Uyarılar</span></h2> <div id="d2"><div id="detayUYARI" class="detayC"></div></li><li> <h2><span id="accTELEFON">Telefon</span></h2>   <div id="d3"> <div id="detayTELEFON" class="detayC"></div></div></li><li> <h2><span id="accADRES">Adres</span></h2>     <div id="d4"> <div id="detayADRES" class="detayC"></div></div></li></ol><noscript><p>Please enable JavaScript to get the full experience.</p></noscript>   </div><div id="detayUrunBilgileri"></div> <div id="detayAREA"><form name="ajaxform" id="ajaxform" action="ajax_form_submit.aspx/gercek" method="POST"><input id="OID" name="OID" type="hidden" value="' + OID + '"><input id="CID"  name="CID" type="hidden" value="' + BASE + '"><input id="name" name="name" value="A25318" type="hidden"><table><tr><td style="width:100%;"><textarea id="tbMEMO" NAME="tbMEMO"></textarea></form></td><td><input id="sendMEMO" class="button blue" type="button" value="gönder"></td></tr></table><div id="post-msg"></div><div id="pre-msg"></div></div></div> </div>');
    var str2 = '<div id="acc" ><ol><li> <h2> <span id="accTEMEL">Temel Bilgiler</span> </h2>   <div id="d1"> <div id="detayTEMEL"  ></div></div></li><li> <h2> <span id="accUYARI">Uyarılar</span></h2> <div id="d2"><div id="detayUYARI" class="detayC"></div></li><li> <h2><span id="accTELEFON">Telefon</span></h2>   <div id="d3"> <div id="detayTELEFON"></div></div></li><li> <h2><span id="accADRES">Adres</span></h2>     <div id="d4"> <div id="detayADRES" class="detayC"></div></div></li><li> <h2><span id="accMEMO">MEMO</span></h2>     <div id="d4"> <div id="detayMEMO" class="detayC"></div></div></li></ol><noscript><p>Please enable JavaScript to get the full experience.</p></noscript>   </div><div id="detayUrunBilgileri"></div> <div id="detayAREA">'
    + '<form name="ajaxform" id="ajaxform" action="ajax_form_submit.aspx/gercek" method="POST">'
    + '<input id="OID" name="OID" type="hidden" value="' + OID + '">'
    + '<input id="CID"  name="CID" type="hidden" value="' + BASE + '">'
    + '<input id="name" name="name" value="A25318" type="hidden"></form>'
    + '<table style="width:100%"><tr><td style="width:80%"><textarea id="tbMEMO" NAME="tbMEMO" class="form-control" style="width:100%"></textarea></td>'
    + '<td style="width:20%;text-align:right;" ><input id="sendMEMO" class="button blue" type="button"  value="gönder"></td></tr></table>'
    + '<div id="post-msg"></div><div id="pre-msg"></div></div></div> ';

    var str = $('<div id="detaycontain" class="detaycontain" rel="' + BASE + '"></div>');

    jQuery.facebox(str);
    $('#detaycontain').html(str2);
    $('#acc').liteAccordion({
        theme: 'light',
        rounded: true, containerWidth: 675, containerHeight: 200
    });
    detayTEMEL(BASE, JT);
    detayUrunBilgileri(BASE, JT);
    MEMOG('0', BASE, JT, 5);




});

$('#fsendMEMO').live('click', function() {
    //.odeyememeNedeni YYREDNedeni  
    var JT = $('.t0ken').val();
    var OID = $("#fOID").val();
    var CID = "0";
    var ftbMEMO = encodeURIComponent($("#ftbMEMO").val());
    var fname = $("#fname").val();
    var ODY = $('.odeyememeNedeni').val();
    var YYR = $('.YYREDNedeni').val();
    var MAK = $('.MusteriAksiyon').val();

    var fteller = $(".ftelarray").serializeArray();
    var ftel = '';
    jQuery.each(fteller, function(i, field) {
        ftel += (field.name + '.' + field.value + ',');
    });
    // alert(ftel)
    var furnler = $(".fUrunAksiyonlari").serializeArray();
    var furr = '';
    jQuery.each(furnler, function(i, field) {
        furr += (TrReplace(field.name) + '.' + TrReplace(field.value) + ',');
    });
    $('#ftbMEMO').val(furr);

    $.ajax(
		{
		    type: "POST",
		    url: "ajax_form_submit.aspx/Final",
		    data: '{OID: "' + OID + '",CID:"' + CID + '",name:"' + fname + '",tbMEMO:"' + ftbMEMO + '",TELARRAY:"' + ftel + '",URNARRAY:"' + furr + '" ,ODY:"' + ODY + '",YYR:"' + YYR + '",MAK:"' + MAK + '"}',
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    success: function(response) {
		        MEMOF('1', OID, JT, 1);
		        alert(OID + ' NUMARALI MÜŞTERİ NOTU BAŞARIYLA EKLENMİŞTİR');
		        $("#ftbMEMO").val('');

		    },
		    failure: function(response) {
		        alert(response.d);
		    }

		});

})

function MEMOF(a, b, JT, T) {

    var src = $('#fpre-msg');
    $('#fpost-msg').html('<img src="Assets/img/loading.gif"/>');
    // $('#tbMEMO').val('Json.aspx?I=6&T=' + JT + '&M=' + b + '&TP=' + T);
    try {

        $.ajax({
            url: 'Json.aspx?I=10&T=' + JT + '&M=' + b + '&TP=' + T,
            dataType: 'json',
            cache: false,
            success: function(JSON) {
                //    $("#tbMEMO").val("");
                /* 
                13/2/2014 - 12:10:56 - A35408 - 34 - 9691791 – Ürün Aksiyonu  -
                533 9260935 Cep telefonundan Ulaşıldı.Görüşülen kişi Kendisi.
 
00090BK000000010280 (34)  kredisine  Aksiyon Erteleme aksiyonu alınmıştır.
                4022780185479527 (7)  kredi kartına  Aksiyon Erteleme aksiyonu alınmıştır.
                4998521939304755 (0)  kredi kartına  Gecikmesiz aksiyonu alınmıştır.
 
Alacaklarını Alamamış aksiyonu alınmıştır.
                Faiz Nedeniyle YY Red aksiyonu alınmıştır.
 
gelen arama ** müşteriye kart borcunun 10.000tlnin üstünde old için 0.99 faizle taksit olabileceği bilg verilmiş yanlış yönlendirilmiş kapak 2.02 onay verdiği için müşt bilg verildi kendisine böyle söylnmediğini belirtip itiraz eder kaydı dinleyn der ***/
                var W = ''
                $.each(JSON, function(i, deger) {
                    if (deger.CID > 0) {
                        W += ('<div id="FB_' + deger.INTCODE + '" class="FBOX" style="padding-left:20px;"> MİKRO BASE: ' + decodeURIComponent(deger.OID) + '| MÜŞTERİ NUMARASI: '
                    + decodeURIComponent(deger.CID) + '| EKLEYEN: ' + decodeURIComponent(deger.UID) + ' ('
                    + decodeURIComponent(deger.MDT) + ')<BR>' + decodeURIComponent(deger.MEMO) + '</div>');

                    } else {
                    W += ('<div id="FB_' + deger.INTCODE + '" class="FBOX"  style="padding-left:0px;"><input class="hdnIntCode" type="hidden" name="' + deger.INTCODE + '" value="' + deger.INTCODE + '"><SPAN class="fbMDT">' + deger.MDT + '</SPAN> | <span class="fbUID">' + deger.UID + ' </span> | <span class="fbOID">' + deger.OID + ' </span> | <span class="fbMUSAKS">' + decodeURIComponent(deger.MUSAKS)
                        + '</SPAN><SPAN class="fbTELARR">' + deger.TELARR + '</SPAN><SPAN class="fbURNARR">' + deger.URNARR + '</SPAN><div class="fbMEMO">' + decodeURIComponent(deger.MEMO) + '</div></div>');
                    }
                });

                if (a == '1')
                { src.prepend(W); }
                else { src.empty(); src.html(W); }
            }, error: function(xhr, ajaxOptions, thrownError) { $(src).append(xhr.status + thrownError); }
        });
    }
    catch (ex) {
        src.empty().prepend('HATA @MEMOG()' + ex.message);

    }
    finally { $('#fpost-msg').html(''); }
}

function MEMOG(a, b, JT, T) {

    var src = $('#detayMEMO');
    $('#post-msg').html('<img src="Assets/img/loading.gif"/>');
    // $('#tbMEMO').val('Json.aspx?I=6&T=' + JT + '&M=' + b + '&TP=' + T);
    try {
        $.ajax({
            url: 'Json.aspx?I=6&T=' + JT + '&M=' + b + '&TP=' + T,
            dataType: 'json',
            cache: false,
            success: function(JSON) {
                //    $("#tbMEMO").val("");

                var W = ''
                $.each(JSON, function(i, deger) {

                    W += ('<div id="MBOX"> MİKRO BASE: ' + decodeURIComponent(deger.OID) + '| MÜŞTERİ NUMARASI: '
                    + decodeURIComponent(deger.CID) + '| EKLEYEN: ' + decodeURIComponent(deger.UID) + ' ('
                    + decodeURIComponent(deger.MDT) + ')<BR>' + decodeURIComponent(deger.MEMO) + '</div>');

                });

                if (a == '1')
                { src.prepend(W); }
                else { src.empty(); src.html(W); }
            }, error: function(xhr, ajaxOptions, thrownError) { $(src).append(xhr.status + thrownError); }
        });
    }
    catch (ex) {
        src.empty().prepend('HATA @MEMOG()' + ex.message);

    }
    finally { $('#post-msg').html(''); }
}





function detayTELEFON(b, JT) {

    var src = $('#detayTELEFON');
    src.html('<img src="Assets/img/loading.gif"/>');


    var OO = '';
    // try {

    $.ajax({
        url: 'Json.aspx?I=8&T=' + JT + '&M=' + b,
        dataType: 'json',
        cache: false,
        success: function(JSON) {

            $.each(JSON, function(i, deger) {

                OO += '<option value="' + deger.INTCODE + '">' + deger.TELAKS + '</option>';
            });

        }, error: function(xhr, ajaxOptions, thrownError) { OO = '<option>' + xhr.status + thrownError + '</option>'; /*$(src).empty().append(xhr.status + thrownError);*/ }
    });


    try {
        $.ajax({
            url: 'Json.aspx?I=5&T=' + JT + '&M=' + b,
            dataType: 'json',
            cache: false,
            success: function(JSON) {
                var W = '<table class="tablesorter" Width="100%" border="0" cellpadding="0" cellspacing="0"><thead><th>TELEFON</th><th>TELEFON AKSİYON</TH></thead><tbody>';
                $.each(JSON, function(i, deger) {
                    W += ('<tr><td id="" CLASS="TBLtml"> ' + deger.AREA_CODE + '' + deger.PHONE_NUMBER + ' (' + deger.PHONE_TP + ')</td><td><select class="telarray" id="' + deger.AREA_CODE + '' + deger.PHONE_NUMBER + '" name="' + deger.AREA_CODE + '' + deger.PHONE_NUMBER + '">' + OO + '</select></td></tr>');
                });
                W += '</tbody></table>';
                src.empty();
                src.html(W);
            }, error: function(xhr, ajaxOptions, thrownError) { $(src).empty().append(xhr.status + thrownError); }
        });
    }
    catch (ex) {
        src.empty().append('HATA @detayTELEFON()' + ex.message);
    }
}
function detayUYARI(o, b, JT) {
    var src = '#' + o;
    $(src).html(b + ' NUMARALI MÜŞTERİYE AİT UYARILAR...');
    try {
        $.ajax({
            url: 'Json.aspx?I=2&T=' + JT + '&M=' + b,
            dataType: 'json',
            cache: false,
            success: function(JSON) {
                $(src).html(b + ' NUMARALI MÜŞTERİYE AİT UYARILAR GELİYOR...');
                if (JSON != '' && JSON !== null) {
                    var W = ''
                    $.each(JSON, function(i, deger) {

                        W += ('<div id="WARNING">' + decodeURIComponent(deger.WARNING) + '</div>');
                    });
                    $(src).empty();
                    $(src).html(W);
                } else {
                    $(src).html('<div id="WARNING">Müşteri için uyarı bulunmamaktadır..</div>');
                }
            }, error: function(xhr, ajaxOptions, thrownError) { $(src).empty().append(xhr.status + thrownError); }
        });
    }
    catch (ex) {
        $(src).empty().append('HATA @detayUYARI()' + ex.message);
    }
}
function detayADRES(b, JT) {
    var src = $('#detayADRES');
    src.html('<img src="Assets/img/loading.gif"/>');
    try {
        $.ajax({
            url: 'Json.aspx?I=4&T=' + JT + '&M=' + b,
            dataType: 'json',
            cache: false,
            success: function(JSON) {
                if (JSON != '' && JSON !== null) {
                    var W = ''
                    $.each(JSON, function(i, deger) {
                        W += ('<div><div id="" CLASS="TBLtml"><SPAN CLASS="TBLFT">Adres Tipi (</SPAN>' + deger.ADDR_TP + ')</div>');
                        W += ('<div id="" CLASS="TBLtml"> ' + deger.ADDR_LINE_1 + '</div>');
                        W += ('<div id="" CLASS="TBLtml">' + deger.ADDR_LINE_2 + '</div>');
                        W += ('<div id="" CLASS="TBLtml">' + deger.ADDR_LINE_3 + '</div>');
                        W += ('<div id="" CLASS="TBLtml">' + deger.DISTRICT + '</div>');
                        W += ('<div id="" CLASS="TBLtml"><SPAN CLASS="TBLFT">Güncelleme Tarihi: </SPAN>' + deger.GUNCELLEMETARIHI + '</div>');
                        W += ('</div><hr>');
                    });
                    src.empty();
                    src.html(W);
                } else {
                    src.html('<div id="WARNING">Müşteri için adres bilgisi bulunmamaktadır..</div>');
                }
            }, error: function(xhr, ajaxOptions, thrownError) { $(src).empty().append(xhr.status + thrownError); }
        });
    }
    catch (ex) {
        src.empty().append('HATA @detayADRES()' + ex.message);
    }
}



function detayTEMEL(b, JT) {

    var src = $('#detayTEMEL');
    src.html('<img src="Assets/img/loading.gif"/>');
    try {
        $.ajax({
            url: 'Json.aspx?I=3&T=' + JT + '&M=' + b,
            dataType: 'json',
            cache: false,
            success: function(JSON) {




                var a = $('<table id="" class="tablesorter" Width="100%" border="0" cellpadding="0" cellspacing="0"></table>');

                W = '<tbody>'
                $.each(JSON, function(i, deger) {
                    W += ('<tr id="" CLASS="TBLtml"><td CLASS="TBLFT">İSİM</td><td CLASS="TBLRT">' + deger.SCND_NM + ' ' + deger.NM + ' ' + deger.SURNM + '</td></tr>');
                    W += ('<tr id="" CLASS="TBLtml"><td CLASS="TBLFT">TCKN</td><td CLASS="TBLRT">' + deger.TR_ID_NUM + '</td></tr>');
                    W += ('<tr id="" CLASS="TBLtml"><td CLASS="TBLFT">DOĞUM YERİ</td><td CLASS="TBLRT">' + deger.BRTH_PL + '</td></tr>');
                    W += ('<tr id="" CLASS="TBLtml"><td CLASS="TBLFT">DOĞUM TARİHİ</td><td CLASS="TBLRT">' + tarih(deger.BRTH_DT) + '</td></tr>');
                    W += ('<tr id="" CLASS="TBLtml"><td CLASS="TBLFT">BABA İSMİ</td><td CLASS="TBLRT">' + deger.FATHER_NAME + '</td></tr>');
                   W += ('<tr id="" CLASS="TBLtml"><td CLASS="TBLFT">ANNE İSMİ</td><td CLASS="TBLRT">' + deger.MOTHER_NAME + '</td></tr>');
                    W += ('<tr id="" CLASS="TBLtml"><td CLASS="TBLFT">ANNE AKS</td><td CLASS="TBLRT">' + deger.MOTHER_SURNAME + '</td></tr>');
                });
                W += '</tbody>';







                /*  
                var W = ''
                $.each(JSON, function(i, deger) {

                W += ('<div id="" CLASS="TBLtml"><SPAN CLASS="TBLFT">İSİM</SPAN>' + deger.SCND_NM + ' ' + deger.NM + ' ' + deger.SURNM + '</div>');
                W += ('<div id="" CLASS="TBLtml"><SPAN CLASS="TBLFT">TCKN</SPAN>' + deger.TR_ID_NUM + '</div>');
                W += ('<div id="" CLASS="TBLtml"><SPAN CLASS="TBLFT">DOĞUM YERİ</SPAN>' + deger.BRTH_PL + '</div>');
                W += ('<div id="" CLASS="TBLtml"><SPAN CLASS="TBLFT">DOĞUM TARİHİ</SPAN>' + deger.BRTH_DT + '</div>');
                W += ('<div id="" CLASS="TBLtml"><SPAN CLASS="TBLFT">BABA İSMİ</SPAN>' + deger.FATHER_NAME + '</div>');
                W += ('<div id="" CLASS="TBLtml"><SPAN CLASS="TBLFT">ANNE İSMİ</SPAN>' + deger.MOTHER_NAME + '</div>');
                W += ('<div id="" CLASS="TBLtml"><SPAN CLASS="TBLFT">ANNE AKS</SPAN>' + deger.MOTHER_SURNAME + '</div>');
                });*/
                src.empty();
                src.html(W);
            }, error: function(xhr, ajaxOptions, thrownError) { $(src).empty().append(xhr.status + thrownError); }
        });
    }
    catch (ex) {
        src.empty().append('HATA @detayTEMEL()' + ex.message);
    }
}
/*
function UrunOPs(JT, b) {
  

$('.UrunAksiyonlari').each(function(i) {
this.append(UU);
})
}
*/
function detayUrunBilgileri(b, JT) {

    $('#detayUrunBilgileri').html('<img src="Assets/img/loading.gif"/>');

    try {
        var UU = ' ';




        $.ajax({
            url: 'Json.aspx?I=1&T=' + JT + '&M=' + b,
            dataType: 'json',
            cache: false,
            success: function(JSON) {
                var cc = '';
                if (JSON) {
                    var a = $('<table id="kart_urunleri" class="tablesorter" Width="100%" border="0" cellpadding="0" cellspacing="1"><thead><tr><TH>TUR</TH><TH>URUN</TH><TH>GGS</TH><TH>ASGARI</TH><TH>BAKIYE</TH><TH>LIMIT ASIM</TH><TH>EKT</TH><TH>SOT</TH><TH>AKSIYON<img src="Assets/img/refresh.png" rel="' + JT + '" id="' + b + '" class="rfAks"></TH></tr></thead></table>');
                    cc = '<tbody>'
                    $.each(JSON, function(i, deger) {
                        cc += ('<tr class="trrow">')
                        cc += ('<td class="">' + deger.TUR + '</td>');
                        cc += ('<td class="">' + deger.URUN + '</td>');
                        cc += ('<td class="">' + deger.GGS + '</td>');
                        cc += ('<td class="">' + deger.ASGARI + '</td>');
                        cc += ('<td class="">' + deger.GECIKME_BAKIYE + '</td>');
                        cc += ('<td class="">' + deger.LIMITASIM + '</td>');
                        cc += ('<td class="">' + deger.EKT + '</td>');
                        cc += ('<td class="">' + deger.SOT + '</td>');

                        cc += ('<td class="opUR"><SELECT class="UrunAksiyonlari" class="form-control" style="width: 100px;height:20px;" id="' + deger.URUN + '" rel="' + deger.TUR + '" name="' + deger.URUN + '||"></SELECT></td>');
                        //  cc += ('<td class="urnTARIH"></td>');
                        //    cc += ('<td class="urnTUTAR"></td>');
                        //    cc += ('<td class="urnINIT"></td>');
                        cc += ('</tr>');
                    });
                    cc += '</tbody>';
                    $.ajax({
                        url: 'Json.aspx?I=9&T=' + JT + '&M=' + b,
                        dataType: 'json',
                        cache: false,
                        success: function(JSON2) {
                            if (JSON2 != '' && JSON2 !== null) {
                                $.each(JSON2, function(i, deger2) {

                                    $('.UrunAksiyonlari').append('<option value="' + decodeURIComponent(deger2.INTCODE) + '" rel="' + decodeURIComponent(deger2.ISRPC) + '">' + decodeURIComponent(deger2.URNAKS) + '</option>');

                                });
                            } else { alert("OLMADI"); }
                        }, error: function(xhr, ajaxOptions, thrownError) { UU = '<option>' + xhr.status + thrownError + '</option>'; /*$(src).empty().append(xhr.status + thrownError);*/ }
                    });

                } else { a = $(''); cc = 'Kayıt Bulunmamaktadır' }
                a.append(cc);
                $("#detayUrunBilgileri").empty();
                $("#detayUrunBilgileri").append(a); //.append(b).append(c);
                sorter();





            }, error: function(xhr, ajaxOptions, thrownError) { $("#detayUrunBilgileri").empty().append(xhr.status + '  ' + thrownError); }
        });
    } catch (ex) {
        $("#detayUrunBilgileri").empty().append('HATA' + ex.message);
    }
    // UrunOPs(JT, b);
}

$('.rfAks').live('click', function() {
    var urnler = $(".UrunAksiyonlari").serializeArray();
    var urr = '';
    jQuery.each(urnler, function(i, field) {
        //urr += (field.ID + '.' + field.REL + '.' + field.name + '.' + field.value + ',');
        // value aksiyon tipi
        urr += ('\ntarih-tutar: ' + field.name + '\nürün kodu:' + field.id + '\nürün tipi:' + field.rel + '\nürün sonuç:' + field.value);
    });
    alert('serial:' + urr);
})
$('.urnInp').live('keyup', function() {

    var id = $(this).attr('name');
    id = id.replace('_U_', '')
    $('#' + id).attr('name', id + '||')
    $(this).parent().parent().find('.urnINIT').html('<img id="initURN" name="' + id + '" rel="0" src="Assets/img/checkbox0.png">');
})

$('#initURN').live('click', function() {
    var t = $(this);
    var rl = t.attr('rel');
    var id = t.attr('name');
    var cml = ''
    var tutar = t.parent().parent().find('#urnInpTU').val();
    var tarih = t.parent().parent().find('#urnInpT').val();
    cml = id + '|' + tutar + '|' + tarih
    //  alert(cml);
    /* var NM = t.parent().parent().find('.UrunAksiyonlari').attr('name')
    alert(NM);
    t.parent().parent().find('.UrunAksiyonlari').attr({ 'name': cml })
    var NM2 = t.parent().parent().find('.UrunAksiyonlari').attr('name')
    alert(NM2);
    */

    //   alert($('#' + id).attr('name'))

    if (rl == 0) {
        $('#' + id).attr({ 'name': cml })


        t.parent().html('<img id="initURN" name="' + id + '" rel="1" src="Assets/img/checkbox1.png">');

        //  t.parent().parent().find('.UrunAksiyonlari').attr('name', '')

        //   t.parent().parent().find('.UrunAksiyonlari').attr('name', cml)

        // cc += ('<td class="opUR"><SELECT class="UrunAksiyonlari" id="' + deger.URUN + '" rel="' + deger.TUR + '" name="nm">' + UU + '</SELECT></td>');

    } else {
        t.parent().html('<img id="initURN" name="' + id + '" rel="0" src="Assets/img/checkbox0.png">');
        //t.parent().parent().find('.UrunAksiyonlari').attr('name', ''); 
        $('#' + id).attr('name', '' + id + '||')
    }

})

$('.UrunAksiyonlari').live('change', function() {
    var t = $(this);
    var option = $('option:selected', this).attr('rel');
    var val = $('option:selected', this).val();
    var UID = t.parent().parent().find('.UrunAksiyonlari').attr('id')
    $('#' + UID).attr('name', '' + UID + '||');
    if (option == 'True' && val == '3') {
        t.parent().parent().after('<tr id="tr' + UID + '"><td colspan="2">' + UID + '</TD><TD class="urnTARIH" colspan="3"><input id="urnInpT" class="urnInp" name="_U_' + UID + '"  type="text" style="width:150px;"></TD><TD  colspan="2" class="urnTUTAR"><input id="urnInpTU" class="urnInp" name="_U_' + UID + '" type="text" style="width:80px;"></TD><TD class="urnINIT" id="_U_' + UID + '"><img id="initURN"  name="' + UID + '" rel="0" src="Assets/img/checkbox0.png"></td></tr>');
        //t.parent().parent().find('.urnTARIH').html('<input id="urnInpT" class="urnInp" type="text" style="width:80px;">');
        //t.parent().parent().find('.urnTUTAR').html('<input id="urnInpTU" class="urnInp" type="text" style="width:80px;">');
        //    t.parent().parent().find('.urnINIT').html('<img id="initURN" rel="0" src="Assets/img/checkbox0.png">');

    } else if (option == 'True' && val == '4') {
        //  t.parent().parent().find('.urnTARIH').html('<input id="" class="urnInp" type="text" style="width:80px;">');
        //   t.parent().parent().find('.urnTUTAR').html('');
        //   t.parent().parent().find('.urnINIT').html('<img id="initURN" rel="0" src="Assets/img/checkbox0.png">');
    } else {
        //   t.parent().parent().find('.urnTARIH').html('')
        //   t.parent().parent().find('.urnTUTAR').html('')
        //   t.parent().parent().find('.urnINIT').html('')
        $('#tr' + UID).remove();
    }
});



function DOLDUR(I, B) {
    var JT = $('.t0ken').val();
    $('#lblMusteriBilgileri').html('<img src="Assets/img/loading.gif"/>');
    //$('#lblMusteriBilgileri').empty();
    try {






        //$.ajax({
        //   url: 'Json.aspx?I=' + I + '&T=' + JT + '&M=' + B,
        //     dataType: 'json',
        //     cache: false,
        //     success: function(JSON) {
        //  var hstr = '<table id="KISILER" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr><TH>Müşteri Numarası</TH><th>İlgili Kişi</th><th></th><th>Telefon</th><th>AKS</th><TH>CİNSİYET</TH><TH>D. YERİ</TH><TH>D. TARİHİ</TH><TH>AKS</TH></tr></thead>';
        var MBstr = '<div id="colBLGIc"><table id="MUSTERIBILGILERI" class="tablesorter mblg1" border="0" cellpadding="0" cellspacing="1" ><thead><tr><TH>SORUMLU KİŞİ</TH><TH>BASE</TH><th>UNVAN</th><TH>CINSIYET</TH><TH>D. YERİ</TH><th>D. TARIHI</th><TH>AKS</TH><th>BABA ADI</th> </tr></thead>';
        var hstr = '<div id="colILTIc"><table class="tablesorter  mblg2" border="0" cellpadding="0" cellspacing="1" ><thead><tr id="Tel_Th"><TH>OWNER</TH><th>TP</th><th>Telefon</th><th>AKS</th><th>g</th></tr></thead>';
        var Ustr = '<table id="URUNLER" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr><TH>ŞUBE</TH><th>ÜRÜN TİPİ</th><th>REFERANS</th><th>GGS</th><TH>DVZ</TH><TH>İLK GECİKME</TH><TH>TOPLAM GECİKME</TH><TH>TOPLAM BAKİYE</TH><th>LİMİT AŞIM</th><th>KALAN TAKSİT</th><th>ÖDENMİŞ TAKSİT</th><th>ÖDEME TARİHİ</th><th>Aksiyon</th><th>ÖS tarihi</th><th>Ös Turarı</th></tr></thead> ';
        var UMBstr = ' <table id="UMB" class="tablesorter">'; //<thead><tr><th>bilgi</th>	<th>val</th></tr></thead>';
        var MusKiml = '';
        MBstr += '<tbody>';
        Ustr += '<tbody>';
        hstr += '<tbody id="KISILER">';
        UMBstr += '<tbody>';
        $.each(JSVal, function(i, deger) {



            Ustr += ('<tr class="trrow">')
            Ustr += ('<td class="">' + decodeURIComponent(deger.URUN1_SUBE) + '</td>');
            Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_TP1) + '</td>');
            Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_REF1) + '</td>');
            Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_GGS1)
            + '<input class="fUrunAksiyonlari tur"  name="tur^_' + deger.URUN_REF1 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_TP1) + '"><input class="fUrunAksiyonlari ggs"  name="ggs^_' + deger.URUN_REF1 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_GGS1) + '"></td>');
            Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_DOVIZ1) + '</td>');
            Ustr += ('<td class="">' + formatNumber(deger.URUN1_TAKSIT, 1) + '</td>');
            Ustr += ('<td class="">' + formatNumber(deger.URUN1_GECIKME, 1) + '</td>');
            Ustr += ('<td class="">' + formatNumber(deger.URUN1_RISK) + '</td>');
            Ustr += ('<td class="">' + formatNumber(deger.LIMIT_ASIMI1) + '</td>');
            Ustr += ('<td class="">' + decodeURIComponent(deger.KALAN_TAKSIT_SAYISI1) + '</td>');
            Ustr += ('<td class="">' + decodeURIComponent(deger.ODENMIS_TAKSIT_SAYISI1) + '</td>');
            Ustr += ('<td class="">' + tarih(deger.URUN1_ODEME_T) + '</td>');
            Ustr += ('<td class="fopUR"><SELECT id="slcURUN" class="fUrunAksiyonlari"  name="aksiyon^_' + deger.URUN_REF1 + '"><option value="0">Seçiniz  </option></SELECT></td>');
            Ustr += ('<td class=""><input class="fUrunAksiyonlari tarih"  name="tarih^_' + deger.URUN_REF1 + '" type="text"></td>');
            Ustr += ('<td class=""><input class="fUrunAksiyonlari tutar"  name="tutar^_' + deger.URUN_REF1 + '" type="text"></td>');
            Ustr += ('</tr>');
            if (deger.URUN_REF2) {
                Ustr += ('<tr class="trrow">')
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN2_SUBE) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_TP2) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_REF2) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_GGS2) + '<input class="fUrunAksiyonlari tur"  name="tur^_' + deger.URUN_REF2 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_TP2) + '"><input class="fUrunAksiyonlari ggs"  name="ggs^_' + deger.URUN_REF2 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_GGS2) + '"></td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_DOVIZ2) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN2_TAKSIT) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN2_GECIKME) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN2_RISK) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.LIMIT_ASIMI2) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.KALAN_TAKSIT_SAYISI2) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.ODENMIS_TAKSIT_SAYISI2) + '</td>');
                Ustr += ('<td class="">' + tarih(deger.URUN2_ODEME_T) + '</td>');
                Ustr += ('<td class="fopUR"><SELECT id="slcURUN" class="fUrunAksiyonlari"  name="aksiyon^_' + deger.URUN_REF2 + '"><option value="0">Seçiniz  </option></SELECT></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tarih"  name="tarih^_' + deger.URUN_REF2 + '" type="text"></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tutar"  name="tutar^_' + deger.URUN_REF2 + '" type="text"></td>');
                Ustr += ('</tr>');
            }

            if (deger.URUN_REF3) {
                Ustr += ('<tr class="trrow">')
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN3_SUBE) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_TP3) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_REF3) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_GGS3)
                + '<input class="fUrunAksiyonlari ggs"  name="ggs^_' + deger.URUN_REF3 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_GGS3) + '"><input class="fUrunAksiyonlari tur"  name="tur^_' + deger.URUN_REF3 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_TP3) + '"></td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_DOVIZ3) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN3_TAKSIT) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN3_GECIKME) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN3_RISK) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.LIMIT_ASIMI3) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.KALAN_TAKSIT_SAYISI3) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.ODENMIS_TAKSIT_SAYISI3) + '</td>');
                Ustr += ('<td class="">' + tarih(deger.URUN3_ODEME_T) + '</td>');
                Ustr += ('<td class="fopUR"><SELECT id="slcURUN" class="fUrunAksiyonlari"  name="aksiyon^_' + deger.URUN_REF3 + '"><option value="0">Seçiniz  </option></SELECT></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tarih"  name="tarih^_' + deger.URUN_REF3 + '" type="text"></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tutar"  name="tutar^_' + deger.URUN_REF3 + '" type="text"></td>');
                Ustr += ('</tr>');
            }
            if (deger.URUN_REF4) {
                Ustr += ('<tr class="trrow">')
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN4_SUBE) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_TP4) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_REF4) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_GGS4) + '<input class="fUrunAksiyonlari tur"  name="tur^_' + deger.URUN_REF4 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_TP4) + '"><input class="fUrunAksiyonlari ggs"  name="ggs^_' + deger.URUN_REF4 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_GGS4) + '"></td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_DOVIZ4) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN4_TAKSIT) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN4_GECIKME) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN4_RISK) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.LIMIT_ASIMI4) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.KALAN_TAKSIT_SAYISI4) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.ODENMIS_TAKSIT_SAYISI4) + '</td>');
                Ustr += ('<td class="">' + tarih(deger.URUN4_ODEME_T) + '</td>');
                Ustr += ('<td class="fopUR"><SELECT id="slcURUN" class="fUrunAksiyonlari"  name="aksiyon^_' + deger.URUN_REF4 + '"><option value="0">Seçiniz  </option></SELECT></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tarih"  name="tarih^_' + deger.URUN_REF4 + '" type="text"></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tutar"  name="tutar^_' + deger.URUN_REF4 + '" type="text"></td>');
                Ustr += ('</tr>');
            }
            if (deger.URUN_REF5) {
                Ustr += ('<tr class="trrow">')
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN5_SUBE) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_TP5) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_REF5) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_GGS5) + '<input class="fUrunAksiyonlari tur"  name="tur^_' + deger.URUN_REF5 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_TP5) + '"><input class="fUrunAksiyonlari ggs"  name="ggs^_' + deger.URUN_REF5 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_GGS5) + '"></td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_DOVIZ5) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN5_TAKSIT) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN5_GECIKME) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN5_RISK) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.LIMIT_ASIMI5) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.KALAN_TAKSIT_SAYISI5) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.ODENMIS_TAKSIT_SAYISI5) + '</td>');
                Ustr += ('<td class="">' + tarih(deger.URUN5_ODEME_T) + '</td>');
                Ustr += ('<td class="fopUR"><SELECT id="slcURUN" class="fUrunAksiyonlari"  name="aksiyon^_' + deger.URUN_REF5 + '"><option value="0">Seçiniz  </option></SELECT></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tarih"  name="tarih^_' + deger.URUN_REF5 + '" type="text"></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tutar"  name="tutar^_' + deger.URUN_REF5 + '" type="text"></td>');
                Ustr += ('</tr>');
            }
            if (deger.URUN_REF6) {
                Ustr += ('<tr class="trrow">')
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN6_SUBE) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_TP6) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_REF6) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_GGS6) + '<input class="fUrunAksiyonlari tur"  name="tur^_' + deger.URUN_REF6 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_TP6) + '"><input class="fUrunAksiyonlari ggs"  name="ggs^_' + deger.URUN_REF6 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_GGS6) + '"></td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_DOVIZ6) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN6_TAKSIT) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN6_GECIKME) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN6_RISK) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.LIMIT_ASIMI6) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.KALAN_TAKSIT_SAYISI6) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.ODENMIS_TAKSIT_SAYISI6) + '</td>');
                Ustr += ('<td class="">' + tarih(deger.URUN6_ODEME_T) + '</td>');
                Ustr += ('<td class="fopUR"><SELECT id="slcURUN" class="fUrunAksiyonlari"  name="aksiyon^_' + deger.URUN_REF6 + '"><option value="0">Seçiniz  </option></SELECT></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tarih"  name="tarih^_' + deger.URUN_REF6 + '" type="text"></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tutar"  name="tutar^_' + deger.URUN_REF6 + '" type="text"></td>');
                Ustr += ('</tr>');
            }
            if (deger.URUN_REF7) {
                Ustr += ('<tr class="trrow">')
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN7_SUBE) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_TP7) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_REF7) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_GGS7) + '<input class="fUrunAksiyonlari tur"  name="tur^_' + deger.URUN_REF7 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_TP7) + '"><input class="fUrunAksiyonlari ggs"  name="ggs^_' + deger.URUN_REF7 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_GGS7) + '"></td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_DOVIZ7) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN7_TAKSIT) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN7_GECIKME) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN7_RISK) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.LIMIT_ASIMI7) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.KALAN_TAKSIT_SAYISI7) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.ODENMIS_TAKSIT_SAYISI7) + '</td>');
                Ustr += ('<td class="">' + tarih(deger.URUN7_ODEME_T) + '</td>');
                Ustr += ('<td class="fopUR"><SELECT id="slcURUN" class="fUrunAksiyonlari"  name="aksiyon^_' + deger.URUN_REF7 + '"><option value="0">Seçiniz  </option></SELECT></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tarih"  name="tarih^_' + deger.URUN_REF7 + '" type="text"></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tutar"  name="tutar^_' + deger.URUN_REF7 + '" type="text"></td>');
                Ustr += ('</tr>');
            }
            if (deger.URUN_REF8) {
                Ustr += ('<tr class="trrow">')
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN8_SUBE) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_TP8) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_REF8) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_GGS8) + '<input class="fUrunAksiyonlari tur"  name="tur^_' + deger.URUN_REF8 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_TP8) + '"><input class="fUrunAksiyonlari ggs"  name="ggs^_' + deger.URUN_REF8 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_GGS8) + '"></td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_DOVIZ8) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN8_TAKSIT) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN8_GECIKME) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN8_RISK) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.LIMIT_ASIMI8) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.KALAN_TAKSIT_SAYISI8) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.ODENMIS_TAKSIT_SAYISI8) + '</td>');
                Ustr += ('<td class="">' + tarih(deger.URUN8_ODEME_T) + '</td>');
                Ustr += ('<td class="fopUR"><SELECT id="slcURUN" class="fUrunAksiyonlari"  name="aksiyon^_' + deger.URUN_REF8 + '"><option value="0">Seçiniz  </option></SELECT></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tarih"  name="tarih^_' + deger.URUN_REF8 + '" type="text"></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tutar"  name="tutar^_' + deger.URUN_REF8 + '" type="text"></td>');
                Ustr += ('</tr>');
            }
            if (deger.URUN_REF9) {
                Ustr += ('<tr class="trrow">')
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN9_SUBE) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_TP9) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_REF9) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_GGS9) + '<input class="fUrunAksiyonlari tur"  name="tur^_' + deger.URUN_REF9 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_TP9) + '"><input class="fUrunAksiyonlari ggs"  name="ggs^_' + deger.URUN_REF9 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_GGS9) + '"></td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_DOVIZ9) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN9_TAKSIT) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN9_GECIKME) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN9_RISK) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.LIMIT_ASIMI9) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.KALAN_TAKSIT_SAYISI9) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.ODENMIS_TAKSIT_SAYISI9) + '</td>');
                Ustr += ('<td class="">' + tarih(deger.URUN9_ODEME_T) + '</td>');
                Ustr += ('<td class="fopUR"><SELECT id="slcURUN" class="fUrunAksiyonlari"  name="aksiyon^_' + deger.URUN_REF9 + '"><option value="0">Seçiniz  </option></SELECT></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tarih"  name="tarih^_' + deger.URUN_REF9 + '" type="text"></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tutar"  name="tutar^_' + deger.URUN_REF9 + '" type="text"></td>');
                Ustr += ('</tr>');
            }
            if (deger.URUN_REF10) {
                Ustr += ('<tr class="trrow">')
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN10_SUBE) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_TP10) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_REF10) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_GGS10) + '<input class="fUrunAksiyonlari tur"  name="tur^_' + deger.URUN_REF10 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_TP10) + '"><input class="fUrunAksiyonlari ggs"  name="ggs^_' + deger.URUN_REF10 + '" type="hidden" value="' + decodeURIComponent(deger.URUN_GGS10) + '"></td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN_DOVIZ10) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN10_TAKSIT) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN10_GECIKME) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.URUN10_RISK) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.LIMIT_ASIMI10) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.KALAN_TAKSIT_SAYISI10) + '</td>');
                Ustr += ('<td class="">' + decodeURIComponent(deger.ODENMIS_TAKSIT_SAYISI10) + '</td>');
                Ustr += ('<td class="">' + tarih(deger.URUN10_ODEME_T) + '</td>');
                Ustr += ('<td class="fopUR"><SELECT id="slcURUN" class="fUrunAksiyonlari"  name="aksiyon^_' + deger.URUN_REF10 + '"><option value="0">Seçiniz  </option></SELECT></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tarih"  name="tarih^_' + deger.URUN_REF10 + '" type="text"></td>');
                Ustr += ('<td class=""><input class="fUrunAksiyonlari tutar"  name="tutar^_' + deger.URUN_REF10 + '" type="text"></td>');
                Ustr += ('</tr>');
            }

            if (deger.PRTNR_CUST_ID1) {
                MBstr += ('<tr class="trrow">')
                MBstr += ('<td class="">' + decodeURIComponent(deger.SORUMLU_NM1) + '</td>');
                MBstr += ('<td class=""><a class="detay" id="' + deger.PRTNR_CUST_ID1 + '">' + decodeURIComponent(deger.PRTNR_CUST_ID1) + '</a></td>');
                MBstr += ('<td class="">' + kisalt(deger.UNVAN) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.SORUMLU1_CINSIYET) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.DOGUM_YERI1) + '</td>');
                MBstr += ('<td class="">' + tarih(deger.D_TARIH1) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.AKS1) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.BABA_ADI1) + '</td>');
                //MBstr += ('<td class="">' + decodeURIComponent(deger.ANNE_ADI1) + '</td>');

                MBstr += ('</tr>');
            }
            if (deger.PRTNR_CUST_ID2) {
                MBstr += ('<tr class="trrow">')
                MBstr += ('<td class="">' + decodeURIComponent(deger.SORUMLU_NM2) + '</td>');
                MBstr += ('<td class=""><a class="detay" id="' + deger.PRTNR_CUST_ID2 + '">' + decodeURIComponent(deger.PRTNR_CUST_ID2) + '</a></td>');
                MBstr += ('<td class="">' + kisalt(deger.UNVAN2) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.SORUMLU2_CINSIYET) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.DOGUM_YERI2) + '</td>');
                MBstr += ('<td class="">' + tarih(deger.D_TARIH2) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.AKS2) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.BABA_ADI2) + '</td>');
                //MBstr += ('<td class="">' + decodeURIComponent(deger.ANNE_ADI3) + '</td>');
                MBstr += ('</tr>');

            }
            if (deger.PRTNR_CUST_ID3) {
                MBstr += ('<tr class="trrow">')
                MBstr += ('<td class="">' + decodeURIComponent(deger.SORUMLU_NM3) + '</td>');
                MBstr += ('<td class=""><a class="detay" id="' + deger.PRTNR_CUST_ID3 + '">' + decodeURIComponent(deger.PRTNR_CUST_ID3) + '</a></td>');
                MBstr += ('<td class="">' + kisalt(deger.UNVAN3) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.SORUMLU3_CINSIYET) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.DOGUM_YERI3) + '</td>');
                MBstr += ('<td class="">' + tarih(deger.D_TARIH3) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.AKS3) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.BABA_ADI3) + '</td>');
               // MBstr += ('<td class="">' + decodeURIComponent(deger.ANNE_ADI3) + '</td>');
                MBstr += ('</tr>');
            }
            if (deger.PRTNR_CUST_ID4) {
                MBstr += ('<tr class="trrow">')
                MBstr += ('<td class="">' + decodeURIComponent(deger.SORUMLU_NM4) + '</td>');
                MBstr += ('<td class=""><a class="detay" id="' + deger.PRTNR_CUST_ID4 + '">' + decodeURIComponent(deger.PRTNR_CUST_ID4) + '</a></td>');
                MBstr += ('<td class="">' + kisalt(deger.UNVAN4) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.SORUMLU4_CINSIYET) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.DOGUM_YERI4) + '</td>');
                MBstr += ('<td class="">' + tarih(deger.D_TARIH4) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.AKS4) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.BABA_ADI4) + '</td>');
              //  MBstr += ('<td class="">' + decodeURIComponent(deger.ANNE_ADI4) + '</td>');
                MBstr += ('</tr>');
            }
            if (deger.PRTNR_CUST_ID5) {
                MBstr += ('<tr class="trrow">')
                MBstr += ('<td class="">' + decodeURIComponent(deger.SORUMLU_NM5) + '</td>');
                MBstr += ('<td class=""><a class="detay" id="' + deger.PRTNR_CUST_ID5 + '">' + decodeURIComponent(deger.PRTNR_CUST_ID5) + '</a></td>');
                MBstr += ('<td class="">' + kisalt(deger.UNVAN5) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.SORUMLU5_CINSIYET) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.DOGUM_YERI5) + '</td>');
                MBstr += ('<td class="">' + tarih(deger.D_TARIH5) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.AKS5) + '</td>');
                MBstr += ('<td class="">' + decodeURIComponent(deger.BABA_ADI5) + '</td>');
              //  MBstr += ('<td class="">' + decodeURIComponent(deger.ANNE_ADI5) + '</td>');
                MBstr += ('</tr>');
            }
            if (deger.M_TL1) {
                var owner = kisalt(deger.M1_TEL_OWNER);
                var ownertp = kisalt(deger.M1_OWNER_TP);
                var tel = decodeURIComponent(deger.M_TL1_KOD + '' + deger.M_TL1);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            }
            if (deger.M_TL2) {
                var owner = kisalt(deger.M2_TEL_OWNER);
                var ownertp = kisalt(deger.M2_OWNER_TP);
                var tel = decodeURIComponent(deger.M_TL2_KOD + '' + deger.M_TL2);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            } if (deger.M_TL3) {
                var owner = kisalt(deger.M3_TEL_OWNER);
                var ownertp = kisalt(deger.M3_OWNER_TP);
                var tel = decodeURIComponent(deger.M_TL3_KOD + '' + deger.M_TL3);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            } if (deger.M_TL4) {
                var owner = kisalt(deger.M4_TEL_OWNER);
                var ownertp = kisalt(deger.M4_OWNER_TP);
                var tel = decodeURIComponent(deger.M_TL4_KOD + '' + deger.M_TL4);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            } if (deger.M_TL5) {
                var owner = kisalt(deger.M5_TEL_OWNER);
                var ownertp = kisalt(deger.M5_OWNER_TP);
                var tel = decodeURIComponent(deger.M_TL5_KOD + '' + deger.M_TL5);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            } if (deger.M_TL6) {
                var owner = kisalt(deger.M6_TEL_OWNER);
                var ownertp = kisalt(deger.M6_OWNER_TP);
                var tel = decodeURIComponent(deger.M_TL6_KOD + '' + deger.M_TL6);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            } if (deger.M_TL7) {
                var owner = kisalt(deger.M7_TEL_OWNER);
                var ownertp = kisalt(deger.M7_OWNER_TP);
                var tel = decodeURIComponent(deger.M_TL7_KOD + '' + deger.M_TL7);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            } if (deger.M_TL8) {
                var owner = kisalt(deger.M8_TEL_OWNER);
                var ownertp = kisalt(deger.M8_OWNER_TP);
                var tel = decodeURIComponent(deger.M_TL8_KOD + '' + deger.M_TL8);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            } if (deger.M_TL9) {
                var owner = kisalt(deger.M9_TEL_OWNER);
                var ownertp = kisalt(deger.M9_OWNER_TP);
                var tel = decodeURIComponent(deger.M_TL9_KOD + '' + deger.M_TL9);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            } if (deger.M_TL10) {
                var owner = kisalt(deger.M10_TEL_OWNER);
                var ownertp = kisalt(deger.M10_OWNER_TP);
                var tel = decodeURIComponent(deger.M_TL10_KOD + '' + deger.M_TL10);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            }
            if (deger.H_TL1) {
                var owner = kisalt(deger.H1_TEL_OWNER);
                var ownertp = kisalt(deger.H1_OWNER_TP);
                var tel = decodeURIComponent(deger.H_TL1_KOD + '' + deger.H_TL1);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            }
            if (deger.H_TL2) {
                var owner = kisalt(deger.H2_TEL_OWNER);
                var ownertp = kisalt(deger.H2_OWNER_TP);
                var tel = decodeURIComponent(deger.H_TL2_KOD + '' + deger.H_TL2);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            }
            if (deger.H_TL3) {
                var owner = kisalt(deger.H3_TEL_OWNER);
                var ownertp = kisalt(deger.H3_OWNER_TP);
                var tel = decodeURIComponent(deger.H_TL3_KOD + '' + deger.H_TL3);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            }
            if (deger.H_TL4) {
                var owner = kisalt(deger.H4_TEL_OWNER);
                var ownertp = kisalt(deger.H4_OWNER_TP);
                var tel = decodeURIComponent(deger.H_TL4_KOD + '' + deger.H_TL4);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            }
            if (deger.H_TL5) {
                var owner = kisalt(deger.H5_TEL_OWNER);
                var ownertp = kisalt(deger.H5_OWNER_TP);
                var tel = decodeURIComponent(deger.H_TL5_KOD + '' + deger.H_TL5);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            }
            if (deger.G_TL1) {
                var owner = kisalt(deger.G1_TL);
                var ownertp = kisalt(deger.G1_OWNER_TP);
                var tel = decodeURIComponent(deger.G_TL1_KOD + '' + deger.G_TL1);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            }
            if (deger.G_TL2) {
                var owner = kisalt(deger.G2_TL);
                var ownertp = kisalt(deger.G2_OWNER_TP);
                var tel = decodeURIComponent(deger.G_TL2_KOD + '' + deger.G_TL2);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            }
            if (deger.G_TL3) {
                var owner = kisalt(deger.G3_TL);
                var ownertp = kisalt(deger.G3_OWNER_TP);
                var tel = decodeURIComponent(deger.G_TL3_KOD + '' + deger.G_TL3);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            } if (deger.G_TL4) {
                var owner = kisalt(deger.G4_TL);
                var ownertp = kisalt(deger.G4_OWNER_TP);
                var tel = decodeURIComponent(deger.G_TL4_KOD + '' + deger.G_TL4);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            } if (deger.G_TL5) {
                var owner = kisalt(deger.G5_TL);
                var ownertp = kisalt(deger.G5_OWNER_TP);
                var tel = decodeURIComponent(deger.G_TL5_KOD + '' + deger.G_TL5);
                hstr += ('<tr class="trrow" id="Tel_' + tel + '"><td class="">' + ownertp + '</td><td class="">' + owner + '</td><td class="">' + tel + '</td><td class=""><select  class="ftelarray" name="' + tel + '"></select></td><td><a class="jt" href="#Tel_' + tel + '" rel="Json.aspx?I=11&T=' + JT + '&M=' + B + '&TP=' + tel + '" title="' + tel + ' Numaralı Telefon Geçmişi">Geçmiş</a></td></tr>')
            }
            hstr += ('<tr class="trrow" id="Tel_yeni"><td class="">İSİM:</td><td class=""><input id="yeniTelisim"></td><td class="">Telefon:</td><td class=""><input id="yeniTelNum"></td><td><a class="button green small" id="yeniTelEkle" REL="' + deger.MUSTERI_NO + '">Ekle</a></td></tr>')

            //MusKiml = deger.MUSTERI_NO + ' - ' + deger.UNVAN;
            UMBstr += ('<thead><tr><th colspan="2">&nbsp;Bilgiler&nbsp;</th></tr></thead>');
           $('.header').html('<table  class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr><th class="thUnv"> ' + deger.MUSTERI_NO + ' </th><th class="thUnv"> ' + deger.UNVAN + ' </th></tr></thead></table>');

            // UMBstr += ('<tr><th>UNVAN</th><th>' + deger.UNVAN + '</th></tr></thead>');
            //UMBstr += ('<tr class="trrow"><td class="musteriblg">base</td><td class="urnblgvalrow">' + deger.UNVAN + '</td></tr>');

            UMBstr += ('<tr class="trrow"><td class="green" colspan=2>&nbsp; </td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">KURULUŞ TII</td><td class="urnblgvalrow">' + deger.TYP + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">GRUP ADI</td><td class="urnblgvalrow">' + deger.GRUP_ADI + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">FAALIYET ALANI</td><td class="urnblgvalrow">' + deger.MUSTERI_NO + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">KAR MERKEZI</td><td class="urnblgvalrow">' + deger.MUSTERI_NO + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">MAX GGS</td><td class="urnblgvalrow">' + deger.MAX_GGS + '</td></tr>');
            // UMBstr += ('<tr class="trrow"><td class="musteriblg">MUSTERI NO(Mikro)</td><td class="urnblgvalrow">' + deger.MUSTERI_NO + '</td></tr>');
            //UMBstr += ('<tr class="trrow"><td class="musteriblg">ÜNVAN</td><td class="urnblgvalrow">' + deger.UNVAN + '</td></tr>');

            UMBstr += ('<tr class="trrow"><td class="green" colspan=2>&nbsp;</td></tr>');
            //UMBstr += ('<tr class="trrow"><td class="musteriblg">BANKA_NAKIT_LIMIT</td><td class="urnblgvalrow">' + deger.BANKA_NAKIT_LIMIT + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">BANKA_NAKIT_RISKI</td><td class="urnblgvalrow">' + formatNumber(deger.BANKA_NAKIT_RISKI, 1) + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">NAKDI_RISK</td><td class="urnblgvalrow">' + formatNumber(deger.NAKDI_RISK) + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">SBEDEKI TPLM RSK</td><td class="urnblgvalrow">' + formatNumber(deger.SBEDEKI_TPLM_RSK, 0) + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">TOPLAM RISK</td><td class="urnblgvalrow">' + formatNumber(deger.TOPLAM_RISK, 0) + '</td></tr>');

            UMBstr += ('<tr class="trrow"><td class="green" colspan=2>&nbsp;</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">HAZIR YY</td><td class="urnblgvalrow">' + deger.HAZIR_YY + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">KART YY </td><td class="urnblgvalrow">' + deger.KART_YY_SUNULABILIR + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">YY DURUM</td><td class="urnblgvalrow">' + deger.YY_DURUM + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">YY_RED</td><td class="urnblgvalrow">' + deger.YY_RED + '</td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">YY RED NEDENİ</td><td class="urnblgvalrow"><select id="YYREDNedeni" class="YYREDNedeni"><option value="0">Seçiniz  </option></select></td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">ÖDEYEMEM NEDENİ</td><td class="urnblgvalrow"><select id="odeyememeNedeni" class="odeyememeNedeni"><option value="0">Seçiniz    </option></select></td></tr>');
            UMBstr += ('<tr class="trrow"><td class="musteriblg">MÜŞTERİ AKSİYONU</td><td class="urnblgvalrow"><select id="MusteriAksiyon" class="MusteriAksiyon"><option value="0">Seçiniz    </option></select></td></tr>');

            TelTrEkle(JT, B);



        });
        /* UMBstr += ('<tr class="trrow"><td class="musteriblg">BNKA_TPLM_LIMIT</td><td class="urnblgvalrow">' + deger.BNKA_TPLM_LIMIT + '</td></tr>');
        UMBstr += ('<tr class="trrow"><td class="musteriblg">BUS_CARD_RISK</td><td class="urnblgvalrow">' + deger.BUS_CARD_RISK + '</td></tr>');
        UMBstr += ('<tr class="trrow"><td class="musteriblg">CEK_RISK</td><td class="urnblgvalrow">' + deger.CEK_RISK + '</td></tr>');
        UMBstr += ('<tr class="trrow"><td class="musteriblg">CINSIYET</td><td class="urnblgvalrow">' + deger.CINSIYET + '</td></tr>');
        UMBstr += ('<tr class="trrow"><td class="musteriblg">DISTIC_RISK</td><td class="urnblgvalrow">' + deger.DISTIC_RISK + '</td></tr>');
        UMBstr += ('<tr class="trrow"><td class="musteriblg">GRUP_GENEL_LIMIT</td><td class="urnblgvalrow">' + deger.GRUP_GENEL_LIMIT + '</td></tr>');
        UMBstr += ('<tr class="trrow"><td class="musteriblg">GRUP_NAKIT_LIMITI</td><td class="urnblgvalrow">' + deger.GRUP_NAKIT_LIMITI + '</td></tr>');
        UMBstr += ('<tr class="trrow"><td class="musteriblg">KMH_RISK</td><td class="urnblgvalrow">' + deger.KMH_RISK + '</td></tr>');
           
        UMBstr += ('<tr class="trrow"><td class="musteriblg">NON_CASH_RISK</td><td class="urnblgvalrow">' + deger.NON_CASH_RISK + '</td></tr>');
        UMBstr += ('<tr class="trrow"><td class="musteriblg">TIP</td><td class="urnblgvalrow">' + deger.TIP + '</td></tr>');
        UMBstr += ('<tr class="trrow"><td class="musteriblg">TOP_GECIKME</td><td class="urnblgvalrow">' + deger.TOP_GECIKME + '</td></tr>');
        UMBstr += ('<tr class="trrow"><td class="musteriblg">TOP_KART_RISK</td><td class="urnblgvalrow">' + deger.TOP_KART_RISK + '</td></tr>');
        UMBstr += ('<tr class="trrow"><td class="musteriblg">X1TAKSIT_TOP</td><td class="urnblgvalrow">' + deger.X1TAKSIT_TOP + '</td></tr>');
        */
        var OO = '';
        $.ajax({
            url: 'Json.aspx?I=8&T=' + JT + '&M=' + B,
            dataType: 'json',
            cache: false,
            success: function(JSONF) {

                $.each(JSONF, function(i, degerF) {

                    //OO += '<option value="' + deger.INTCODE + '">' + deger.TELAKS + '</option>';

                    $('select.ftelarray').append('<option value="' + decodeURIComponent(degerF.INTCODE) + '">' + decodeURIComponent(degerF.TELAKS) + '</option>');

                });

            }, error: function(xhr, ajaxOptions, thrownError) { /* OO = '<option>' + xhr.status + thrownError + '</option>'; $(src).empty().append(xhr.status + thrownError);*/ }
        });

        $.ajax({
            url: 'Json.aspx?I=9&T=' + JT + '&M=' + B,
            dataType: 'json',
            cache: false,
            success: function(JSON3) {
                if (JSON3 != '' && JSON3 !== null) {
                    $.each(JSON3, function(i, deger3) {

                        $('select.fUrunAksiyonlari').append('<option value="' + decodeURIComponent(deger3.INTCODE) + '" rel="' + decodeURIComponent(deger3.ISRPC) + '">' + decodeURIComponent(deger3.URNAKS) + '</option>');

                    });
                } else { alert("OLMADI"); }
            }, error: function(xhr, ajaxOptions, thrownError) { UU = '<option>' + xhr.status + thrownError + '</option>'; /*$(src).empty().append(xhr.status + thrownError);*/ }
        });
        var FinalMemo = '<form name="fajaxform" id="fajaxform" action="ajax_form_submit.aspx/Final" method="POST"><hr>'
    + '<input id="fOID" name="fOID" type="hidden" value="' + B + '">'
    + '<input id="fname" name="fname" value="A25318" type="hidden">'
    + '<table style="width:100%"><tr><td style="width:80%"><textarea id="ftbMEMO" NAME="ftbMEMO" class="form-control" style="width:100%"></textarea></td>'
    + '<td style="width:20%;text-align:right;" ><input id="fsendMEMO" class="button blue" type="button"  value="Tamamla"></td></tr></table>'
    + '<div id="fpost-msg"></div><div id="fpre-msg"></div><div class="button red" id="dahaMemo">DAHA</div></form>';

        Ustr += '</tbody></table>';
        hstr += '</tbody></table></div>';
        MBstr += '</tbody></table></div>';
        UMBstr += '</tbody></table>';

        var U1 = $('<h3>Ürün Bilgileri</h3>');
        var p1 = $('<h3>İletişim Bilgileri</h3>');
        var MB1 = $('<h3>Sorumlu Kişi Bilgileri</h3>');
        var UMB1 = $('<SPAN></SPAN>');
        U1.append(Ustr);
        p1.append(hstr);

        MB1.append(MBstr);
        UMB1.append(UMBstr);
        $("#lblMusteriBilgileri").empty();
        // $("#lblMusteriBilgileri").append(UMB1).append(MB1).append(p1).append(U1);
        $("#colBL").append(UMB1);
        $("#colSRM").append(MB1);
        $("#colILT").append(p1);
        $("#colURN").append(U1);
        $("#colMEM").append(FinalMemo);

        //$(".header").append('<span><img src="Assets/img/return.png" id="MusteriyiTamamlaGonder" alt="Müşteri İle İşlemi Bitir"><span style="padding-left:5px;">' + MusKiml + '</span></span>');
        MEMOF('1', B, JT, 9);
        odeyememeNedeni(JT, B);
        YYREDNedeni(JT, B);
        MusteriAks(JT, B)
        // sorter();
        //  }, error: function(xhr, ajaxOptions, thrownError) { $("#lblMusteriBilgileri").empty().append(xhr.status + thrownError); }
        //});

        /* cluetip({
        cluetipClass: 'jtip',
        
        dropShadow: false,
        hoverIntent: false,
        sticky: true,
        mouseOutClose: true,
        closePosition: 'title',
        closeText: 
        });  */

    }
    catch (ex) {
        $("#lblMusteriBilgileri").empty().append('HATA' + ex.message);
    }
    finally {
        $('.jt').cluetip({ activation: 'click', arrows: true, cluetipClass: 'rounded', dropShadow: false, sticky: true, ajaxCache: false, closePosition: 'title', closeText: '<img src="Assets/img/basic/x.png" alt="close" />' });
        $(".tarih").datepicker();
    }

}
function MusteriAks(JT, B) {

    $.ajax({
        url: 'Json.aspx?I=16&T=' + JT + '&M=' + B,
        dataType: 'json',
        cache: false,
        success: function(JSONF) {

            $.each(JSONF, function(i, degerF) {

                //OO += '<option value="' + deger.INTCODE + '">' + deger.TELAKS + '</option>';

                $('select.MusteriAksiyon').append('<option value="' + decodeURIComponent(degerF.INTCODE) + '">' + decodeURIComponent(degerF.MUSAKS) + '</option>');

            });

        }, error: function(xhr, ajaxOptions, thrownError) { /* OO = '<option>' + xhr.status + thrownError + '</option>'; $(src).empty().append(xhr.status + thrownError);*/ }
    });


}
function odeyememeNedeni(JT, B) {

    $.ajax({
        url: 'Json.aspx?I=13&T=' + JT + '&M=' + B,
        dataType: 'json',
        cache: false,
        success: function(JSONF) {

            $.each(JSONF, function(i, degerF) {

                //OO += '<option value="' + deger.INTCODE + '">' + deger.TELAKS + '</option>';

                $('select.odeyememeNedeni').append('<option value="' + decodeURIComponent(degerF.INTCODE) + '">' + decodeURIComponent(degerF.ODYAKS) + '</option>');

            });

        }, error: function(xhr, ajaxOptions, thrownError) { /* OO = '<option>' + xhr.status + thrownError + '</option>'; $(src).empty().append(xhr.status + thrownError);*/ }
    });


}

function YYREDNedeni(JT, B) {

    $.ajax({
        url: 'Json.aspx?I=14&T=' + JT + '&M=' + B,
        dataType: 'json',
        cache: false,
        success: function(JSONF) {

            $.each(JSONF, function(i, degerF) {

                //OO += '<option value="' + deger.INTCODE + '">' + deger.TELAKS + '</option>';

                $('select.YYREDNedeni').append('<option value="' + decodeURIComponent(degerF.INTCODE) + '">' + decodeURIComponent(degerF.YYRED) + '</option>');

            });

        }, error: function(xhr, ajaxOptions, thrownError) { /* OO = '<option>' + xhr.status + thrownError + '</option>'; $(src).empty().append(xhr.status + thrownError);*/ }
    });


}

function TrReplace(S) {
    var Rv = S.replace(/\,/g, '´~');
    //.replace(',', '´*´')
    Rv = Rv.replace(/\./g, '´¨');
    Rv = Rv.replace(/\^_/g, '.');

    return Rv;
}
function sorter() {

    $("#tst").tablesorter({ sortList: [[4, 1]], widthFixed: true, widgets: ['zebra'],
        headers: {/*

   1: { sorter: 'currency' },
   2: { sorter: 'currency' },
   3: { sorter: 'currency' },
   4: { sorter: 'currency' },
   5: { sorter: 'currency' },
   6: { sorter: 'currency' },
   7: { sorter: 'currency' },
   8: { sorter: 'currency' },
   9: { sorter: 'currency' },
   10: { sorter: 'currency' },
   11: { sorter: 'currency' }*/
    }


});


}
 