"use strict";
document
  .getElementById("showdncqt")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var dncqut = $("#dncqut").val();
    var dncqtah = $("#dncqtah").val();
    var dncqtarf = $("#dncqtarf").val();
    var dncqtimg = $("#dncqtimg").val();
    var dncqtvd = $("#dncqtvd").val();
    if (
      dncqut != "" &&
      dncqtah != "" &&
      dncqtarf != "" &&
      dncqtimg != "" &&
      dncqtvd != ""
    ) {
      var prvhtmlqnt = document.createElement("div");
      prvhtmlqnt.innerHTML =
        `<div align="center"> <h3 align="justify">“` +
        dncqut +
        `”</h3><h4><a href="` +
        dncqtarf +
        `"><b>|| ` +
        dncqtah +
        ` ||</b></a></h4><br><img onclick="openFullscreen()" class="hpinImg" src="` +
        dncqtimg +
        `" ></div><br> <div class="embed-responsive embed-responsive-16by9" id="hpinVid" align="center"> <iframe class="embed-responsive-item" width="560" onerror="document.getElementById('hpinVid').style.display='none';" height="315" src="` +
        dncqtvd +
        `" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
      document.getElementById("dncqandt").innerHTML = "";
      document.getElementById("dncqandt").style.display = "block";
      document.getElementById("dncqandt").appendChild(prvhtmlqnt);
      var clsButton = document.createElement("button");
      clsButton.innerHTML = "Close";
      clsButton.id = "clsdncqt";
      clsButton.addEventListener("click", function () {
        document.getElementById("dncqandt").innerHTML = "";
        document.getElementById("dncqandt").style.display = "none";
        document.getElementById("clsdncqt").style.display = "none";
      });
      document.getElementById("dncqandt").appendChild(clsButton);
      var divToScroll = document.getElementById("dncqandt");
      divToScroll.scrollTop = 0;
    } else {
      return;
    }
  });
document
  .getElementById("showdncful")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var dncqut = $("#dncqut").val();
    var dncqtah = $("#dncqtah").val();
    var dncqtarf = $("#dncqtarf").val();
    var dncqtimg = $("#dncqtimg").val();
    var dncqtvd = $("#dncqtvd").val();
    var dncttl = $("#dncttl").val();
    var dncthumb = $("#dncthumb").val();
    var dncplnk = $("#dncplnk").val();
    var dncpfvd = $("#dncpfvd").val();
    if (
      dncqut != "" &&
      dncqtah != "" &&
      dncqtarf != "" &&
      dncqtimg != "" &&
      dncqtvd != "" &&
      dncpfvd != "" &&
      dncplnk != "" &&
      dncttl != "" &&
      dncthumb != ""
    ) {
      var prvhtmlfl = document.createElement("div");
      prvhtmlfl.innerHTML =
        '<div align="center">' +
        '<img style="pointer-events: none;width:100%;max-width:500px;" src="' +
        dncthumb +
        '">' +
        '<div style="padding-bottom:0px;">' +
        '<a href="' +
        dncplnk +
        '" target="_blank">' +
        '<h4 style="color:#FFD703;padding:10px;">' +
        dncttl +
        "</h4>" +
        "</a>" +
        "</div>";
      prvhtmlfl.innerHTML +=
        '<div class="facebook-responsive" align="center"><div class="nwresdv">' +
        dncpfvd +
        "</div></div>" +
        "</div>";
      prvhtmlfl.innerHTML +=
        `<div align="center"> <h3 align="justify">“` +
        dncqut +
        `”</h3><h4><a href="` +
        dncqtarf +
        `"><b>|| ` +
        dncqtah +
        ` ||</b></a></h4><br><img onclick="openFullscreen()" class="hpinImg" src="` +
        dncqtimg +
        `" ></div><br> <div class="embed-responsive embed-responsive-16by9" id="hpinVid" align="center"> <iframe class="embed-responsive-item" width="560" onerror="document.getElementById('hpinVid').style.display='none';" height="315" src="` +
        dncqtvd +
        `" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
      document.getElementById("dncfull").innerHTML = "";
      document.getElementById("dncfull").style.display = "block";
      document.getElementById("dncfull").appendChild(prvhtmlfl);
      var clsButton = document.createElement("button");
      clsButton.innerHTML = "Close";
      clsButton.id = "clsdncqtf";
      clsButton.addEventListener("click", function () {
        document.getElementById("dncfull").innerHTML = "";
        document.getElementById("dncfull").style.display = "none";
        clsButton.style.display = "none";
      });
      document.getElementById("dncfull").appendChild(clsButton);
      var divToScroll = document.getElementById("dncfull");
      divToScroll.scrollTop = 0;
    } else {
      return;
    }
  });
dnicefrm.addEventListener("submit", function (event) {
  document.getElementById("updnc").disabled = true;
  var dncqut = $("#dncqut").val();
  var dncqtah = $("#dncqtah").val();
  var dncqtarf = $("#dncqtarf").val();
  var dncqtimg = $("#dncqtimg").val();
  var dncqtvd = $("#dncqtvd").val();
  var dncttl = $("#dncttl").val();
  var dncthumb = $("#dncthumb").val();
  var dncplnk = $("#dncplnk").val();
  var dncpfvd = $("#dncpfvd").val();
  var sphi =
    `<div align="center"> <h3 align="justify">“` +
    dncqut +
    `”</h3><h4><a href="` +
    dncqtarf +
    `"><b>|| ` +
    dncqtah +
    ` ||</b></a></h4><br><img onclick="openFullscreen()" class="hpinImg" src="` +
    dncqtimg +
    `" ></div><br> <div class="embed-responsive embed-responsive-16by9" id="hpinVid" align="center"> <iframe class="embed-responsive-item" width="560" onerror="document.getElementById('hpinVid').style.display='none';" height="315" src="` +
    dncqtvd +
    `" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  dncpfvd = minifyHTML(dncpfvd);
  sphi = minifyHTML(sphi);
  var dmdn = $("#bbotpass").val();
  var url1 = "https://script.google.com/macros/s/";
  var url2 =
    "AKfycbx-Ggr5HmTI-1hG_Mtdlg-l051t1O61PQRz_k_QNGmWOBtsiT_LyZmcQm6xxPoRQwheQA";
  var dncup =
    url1 +
    url2 +
    "/exec" +
    "?callback=rddnclst" +
    "&bbps=" +
    escape(dmdn) +
    "&dncttl=" +
    escape(dncttl) +
    "&dncthumb=" +
    escape(dncthumb) +
    "&dncplnk=" +
    escape(dncplnk) +
    "&dncpfvd=" +
    escape(dncpfvd) +
    "&sphi=" +
    escape(sphi) +
    "&action=insphi";
  makeAjRequest(dncup);
});
function rddnclst(e) {
  if (e.records == "updated") {
    document.getElementById("dnicefrm").reset();
    document.getElementById("updnc").disabled = false;
  } else {
    document.getElementById("updnc").disabled = false;
  }
}
