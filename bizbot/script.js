"use strict";
document.getElementById("fvlbtn").addEventListener("click", showfeatvidlist);
function showfeatvidlist() {
  $("#fevidlist").empty();
  $(".addvdmn").remove();
  $(".genlstsht").empty();
  var dmdn = $("#bbotpass").val();
  document.getElementById("fevidlist").style.display = "block";
  document.getElementById("falseback").style.display = "block";
  var url1 = "https://script.google.com/macros/s/";
  var url2 =
    "AKfycbx-Ggr5HmTI-1hG_Mtdlg-l051t1O61PQRz_k_QNGmWOBtsiT_LyZmcQm6xxPoRQwheQA";
  var urlfv =
    url1 +
    url2 +
    "/exec" +
    "?callback=rdftrdytlst" +
    "&bbps=" +
    dmdn +
    "&action=rdytlt";
  makeAjRequest(urlfv);
}

function rdftrdytlst(e) {
  if (e.records != "ID not found!") {
    for (var y = 0; y <= e.records.length - 2; y++) {
      document.getElementById("fevidlist").innerHTML +=
        "<div class='fvlist'>" +
        (y + 1) +
        ". <input onclick='showyouvid(this)' value=" +
        e.records[y].YvidPlayList +
        "></div>";
      document.getElementById("fevidlist").style.display = "block";
    }

    var addButton = document.createElement("button");
    addButton.innerHTML = "Add Featured Video List";
    addButton.id = "addfdlst";
    addButton.className = "addvdmn";
    addButton.addEventListener("click", function () {
      var fntype = "ytlist";
      showModal(fntype);
    });

    var fevidlistDiv = document.getElementById("fevidlist");
    fevidlistDiv.insertBefore(addButton, fevidlistDiv.firstChild);

    addButton.style.position = "sticky";
    addButton.style.top = "0";
    var fprbtn = document.createElement("button");
    fprbtn.innerHTML = "Add Featured Profile";
    fprbtn.id = "addfprbtn";
    fprbtn.className = "addfprup";
    fprbtn.addEventListener("click", function () {
      $("#fprupdt").show();
    });

    fevidlistDiv.insertBefore(fprbtn, fevidlistDiv.firstChild);

    fprbtn.style.position = "sticky";
    fprbtn.style.top = "0";

    var dmdn = $("#bbotpass").val();
    var url1 = "https://script.google.com/macros/s/";
    var url2 =
      "AKfycbx-Ggr5HmTI-1hG_Mtdlg-l051t1O61PQRz_k_QNGmWOBtsiT_LyZmcQm6xxPoRQwheQA";
    var urlfpr =
      url1 +
      url2 +
      "/exec" +
      "?callback=rdfprlst" +
      "&bbps=" +
      dmdn +
      "&action=rdfpr";
    makeAjRequest(urlfpr);
  }
}

function rdfprlst(e) {
  if (e.records != "ID not found!") {
    document.getElementById("falseback").style.display = "none";
    var elmnw = document.createElement("div");
    elmnw.id = "fpropv";
    var inputValues = []; // Array to store input values
    var inputValuesGN = [];
    for (var y = 0; y <= e.records.length - 2; y++) {
      var profileDiv = document.createElement("div");
      profileDiv.className = "divisionfpr";

      var image = document.createElement("img");
      image.src = e.records[y].ImageLink;
      image.alt = "Image";
      image.className = "imagefpr";

      var contentDiv = document.createElement("div");
      contentDiv.className = "contentfpr";

      var title = document.createElement("p");
      title.className = "titlefpr";
      title.innerText = e.records[y].Name;

      var inputGroup = document.createElement("div");
      inputGroup.className = "input-groupfpr";

      var input1 = document.createElement("input");
      input1.type = "text";
      input1.className = "inputfprgn";
      input1.value = e.records[y].PLink;
      inputValuesGN.push(e.records[y].PLink);

      var input2 = document.createElement("input");
      input2.type = "text";
      input2.className = "inputfpr";
      inputValues.push(e.records[y].Guj); // Store the input value
      // Do not set the value here, it will be set after the elements are appended

      var bioCategory = document.createElement("p");
      var bioSpan = document.createElement("span");
      bioSpan.className = "fprbctg1";
      bioSpan.innerText = e.records[y].Bio;
      var categorySpan = document.createElement("span");
      categorySpan.className = "fprbctg2";
      categorySpan.innerText = e.records[y].Category;

      inputGroup.appendChild(input1);
      inputGroup.appendChild(input2);

      bioCategory.appendChild(bioSpan);
      bioCategory.appendChild(categorySpan);

      contentDiv.appendChild(title);
      contentDiv.appendChild(inputGroup);
      contentDiv.appendChild(bioCategory);

      profileDiv.appendChild(image);
      profileDiv.appendChild(contentDiv);

      elmnw.appendChild(profileDiv);
    }

    var fevidlistDiv = document.getElementById("fevidlist");
    fevidlistDiv.appendChild(elmnw);

    // Set the input values after elements have been appended
    var inputElements = elmnw.getElementsByClassName("inputfpr");
    var inputElementsGN = elmnw.getElementsByClassName("inputfprgn");
    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].value = inputValues[i];
      inputElementsGN[i].value = inputValuesGN[i];
    }
  }
}

document.getElementById("rrbtn").addEventListener("click", showrrvidlist);

function showrrvidlist() {
  $("#fevidlist").empty();
  $(".addvdmn").remove();
  $(".genlstsht").empty();
  var dmdn = $("#bbotpass").val();
  document.getElementById("fevidlist").style.display = "block";
  document.getElementById("falseback").style.display = "block";
  var url1 = "https://script.google.com/macros/s/";
  var url2 =
    "AKfycbx-Ggr5HmTI-1hG_Mtdlg-l051t1O61PQRz_k_QNGmWOBtsiT_LyZmcQm6xxPoRQwheQA";
  var urlyt =
    url1 +
    url2 +
    "/exec" +
    "?callback=rdftrdyt" +
    "&bbps=" +
    dmdn +
    "&action=rdyt";
  makeAjRequest(urlyt);
  var urlvm =
    url1 +
    url2 +
    "/exec" +
    "?callback=rdftrdvm" +
    "&bbps=" +
    dmdn +
    "&action=rdvm";
  makeAjRequest(urlvm);
}

function rdftrdvm(e) {
  if (e.records != "ID not found!") {
    for (var v = 0; v <= e.records.length - 2; v++) {
      document.getElementById("fevidlist").innerHTML +=
        "<div class='rrclistvm'>" +
        (v + 1) +
        ". <input onclick='showyouvid(this)' value=" +
        e.records[v].VPList +
        "></div>";
      document.getElementById("falseback").style.display = "none";
    }
    var addButtonvm = document.createElement("button");
    addButtonvm.innerHTML = "Add Vimeo Video";
    addButtonvm.id = "addvmvd";
    addButtonvm.className = "addvdmn";
    addButtonvm.addEventListener("click", function () {
      var fntypev = "vmvid";
      showModal(fntypev);
    });
    var fevidlistDiv = document.getElementById("fevidlist");
    fevidlistDiv.insertBefore(addButtonvm, fevidlistDiv.firstChild);
    addButtonvm.style.position = "sticky";
    addButtonvm.style.top = "0";
    var addButton = document.createElement("button");
    addButton.innerHTML = "Add YouTube Video";
    addButton.id = "addytvd";
    addButton.className = "addvdmn";
    addButton.addEventListener("click", function () {
      var fntypey = "ytvid";
      showModal(fntypey);
    });
    var fevidlistDiv = document.getElementById("fevidlist");
    fevidlistDiv.insertBefore(addButton, fevidlistDiv.firstChild);
    addButton.style.position = "sticky";
    addButton.style.top = "0";
  }
}

function rdftrdyt(e) {
  if (e.records != "ID not found!") {
    for (var y = 0; y <= e.records.length - 2; y++) {
      document.getElementById("fevidlist").innerHTML +=
        "<div class='rrclistyt'>" +
        (y + 1) +
        ". <input onclick='showyouvid(this)' value=" +
        e.records[y].Yvid +
        "></div>";
      document.getElementById("falseback").style.display = "none";
    }
  }
}

var modal;
var videoContainer;

function showModal(fntype) {
  modal = document.createElement("div");
  modal.setAttribute("id", "myCustomModal");
  modal.setAttribute("class", "modal");

  var modalContent = document.createElement("div");
  modalContent.setAttribute("class", "modal-content");

  var closeButton = document.createElement("span");
  closeButton.setAttribute("class", "closefdlst");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", function () {
    closeModal();
  });

  var form = document.createElement("form");
  form.setAttribute("id", "videoForm");

  var inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("id", "videoUrl");
  inputField.setAttribute("required", "required");

  inputField.addEventListener("input", function (e) {
    e.preventDefault();
    var url = this.value;
    var isValid = validateYouTubeUrl(url);
    if (!isValid) {
      alert("Please enter a valid link.");
      this.value = "";
    } else {
      showVideoInModal();
    }
  });

  function validateYouTubeUrl(url) {
    var youtubePattern =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    var vimeoPattern = /^(https?:\/\/)?(www\.)?(player.vimeo\.com)\/.+$/;
    if (fntype == "ytlist" || fntype == "ytvid") {
      return youtubePattern.test(url);
    } else if (fntype == "vmvid") {
      return vimeoPattern.test(url);
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var url = document.getElementById("videoUrl").value;
    updtytlst(url, fntype);
  });

  var submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.id = "actnbtnup";
  if (fntype == "ytlist") {
    submitButton.setAttribute("value", "+ Add YouTube Video List");
  } else if (fntype == "ytvid") {
    submitButton.setAttribute("value", "+ Add YouTube Video");
  } else if (fntype == "vmvid") {
    submitButton.setAttribute("value", "+ Add Vimeo Video");
  }

  videoContainer = document.createElement("div");
  videoContainer.setAttribute("id", "videoContainer");

  form.appendChild(inputField);
  form.appendChild(submitButton);
  modalContent.appendChild(closeButton);
  modalContent.appendChild(form);
  modalContent.appendChild(videoContainer);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  modal.style.display = "block";
}

function closeModal() {
  videoContainer.innerHTML = "";
  document.getElementById("videoForm").reset();
  modal.style.display = "none";
  modal.innerHTML = "";
}

function showVideoInModal() {
  var url = document.getElementById("videoUrl").value;
  videoContainer.innerHTML = "";
  var iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.width = "100%";
  iframe.height = "100%";
  videoContainer.appendChild(iframe);
}
function updtytlst(url, fntype) {
  document.getElementById("actnbtnup").disabled = true;
  var dmdn = $("#bbotpass").val();
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbx-Ggr5HmTI-1hG_Mtdlg-l051t1O61PQRz_k_QNGmWOBtsiT_LyZmcQm6xxPoRQwheQA";
  var urup =
    ur1 +
    ur2 +
    "/exec?callback=updtvlres&value=" +
    escape(url) +
    "&bbps=" +
    dmdn +
    "&action=";
  if (fntype === "ytlist") {
    var sndaj = urup + "inlist";
    makeAjRequest(sndaj);
  } else if (fntype === "ytvid") {
    var sndaj = urup + "inytvd";
    makeAjRequest(sndaj);
  } else if (fntype === "vmvid") {
    var sndaj = urup + "invmvd";
    makeAjRequest(sndaj);
  }
}

function updtvlres(e) {
  if (e.records == "updated") {
    videoContainer.innerHTML = "";
    document.getElementById("videoForm").reset();
    document.getElementById("actnbtnup").disabled = false;
  } else {
    document.getElementById("actnbtnup").disabled = false;
  }
}

function makeAjRequest(urlmi) {
  var request = $.ajax({
    crossDomain: true,
    url: urlmi,
    method: "GET",
    dataType: "jsonp",
  });
}

function showyouvid(label) {
  var vid = label.value;
  document.getElementById("showvidfrm").src = vid;
  document.getElementById("frminptstr").value = vid;
  document.getElementById("frameholder").style.display = "block";
}
document.getElementById("edtgnsis").addEventListener("click", showgenslist);
function showgenslist() {
  $("#fevidlist").empty();
  $(".addvdmn").remove();
  $(".genlstsht").empty();
  document.getElementById("fevidlist").style.display = "block";
  document.getElementById("fevidlist").innerHTML = `<div class="genlstsht">
  <base target="_blank">
    <a href="https://docs.google.com/spreadsheets/d/1NShTlqvTV3Y9kjTTgvyoLBzEESgAglm6PhRARAI_t4w/edit#gid=0">
      <button>Past All</button>
    </a>
    <a href="https://docs.google.com/spreadsheets/d/1YXULwUnKuzWEAz_ap6hmw9pTw4-j1cvMG-l2V778edI/edit#gid=0">
      <button>Science & Society</button>
    </a>
    <a href="https://docs.google.com/spreadsheets/d/1nWQyrsjM9tYEUZkjYkxtL9Fh3T3cJcz3xbLhsdHTYoA/edit#gid=0">
      <button>Sports & Games</button>
    </a>
    <a href="https://docs.google.com/spreadsheets/d/1KYmScctKVNBIWQ2EbA9IT8SSuJfYD7f4QMNPdSqnnFc/edit#gid=0">
      <button>Art & Culture</button>
    </a>
    <a href="https://docs.google.com/spreadsheets/d/1ac0JRnVUJIX8YYrGQSM5ZkoTOS0OhCFLZMkHksFRcIc/edit#gid=0">
      <button>Enterprising</button>
    </a>
  </div>`;
}

dragElement(document.getElementById("frameholder"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.right = "10px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

$(document).ready(function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

bizbotfrm.addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("falseback").style.display = "block";
  var btop = escape($("#bbotpass").val());
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbwsHJqstolIo9zWuXuwKkkkT-DnPdtjtWe4canWhLrzPJjD0dSduhkWaqf-TCx5yarH";
  var url =
    ur1 +
    ur2 +
    "/exec" +
    "?callback=ctrlqbtop&bbotpass=" +
    btop +
    "&action=btpd";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp",
  });
});

function ctrlqbtop(e) {
  var outp = e.records;
  if (outp == "Pass found!") {
    document.getElementById("falseback").style.display = "none";
    document.getElementById("btncontainer").style.display = "block";
    document.getElementById("signbot").style.display = "none";
  } else {
    document.getElementById("falseback").style.display = "none";
  }
}

$("#resetpbiz").click(function () {
  $("#repass").show();
});

$("#clsrest").click(function () {
  $("#repass").hide();
});

document.getElementById("verem").addEventListener("click", verifyEmail);
function verifyEmail() {
  $("#copmail").hide();
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbxeS5fAln2rPIti4G4wIVzG_j8zNfDFY_d99Qjt3j8JKYYC6_7ThxIWPFLmSBgOw-P-hw";
  var ursc = ur1 + ur2 + "/exec";
  var ml = $("#biusrem").val();
  if (ml != 0) {
    document.getElementById("falseback").style.display = "block";
    // document.getElementById("mcheck").style.display = "none";
    var urscv = ursc + "?callback=ctrlqchmail&mid=" + ml + "&action=chmail";
    var request = jQuery.ajax({
      crossDomain: true,
      url: urscv,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    return false;
  }
}
function ctrlqchmail(e) {
  var res = e.records;
  var ml2 = window.btoa($("#biusrem").val());
  var ml3 =
    Math.random().toString(26).substring(2, 10) +
    Math.random().toString(26).substring(2, 10);
  var ml1 =
    Math.random().toString(26).substring(2, 16) +
    Math.random().toString(26).substring(2, 16);
  if (res == "ID found!") {
    var ptone =
      "https://user-reset.mwfbiz.com/?" +
      "usrem=" +
      ml3 +
      "-" +
      ml2 +
      "-" +
      ml1 +
      "&state=v";
    document.getElementById("messagert").style.display = "block";
    document.getElementById("messagert").value = ptone;
    document.getElementById("falseback").style.display = "none";
    document.getElementById("copmail").style.display = "block";
    document.getElementById("copmbody").innerHTML =
      `
  <div class="default-style"><base target="_blank">
<div>Reset your passcode?</div>
<div>&nbsp;</div>
<div>To create new passcode click the link below</div>
<div>&nbsp;</div>
<div style="text-align: center;"><a href="` +
      ptone +
      `">` +
      ptone +
      `</a></div>
<div>&nbsp;</div>
<div class="default-style"><span style="color: #000000;">Thanks &amp; regards,</span></div>
<div><a href="https://mwfbiz.com/"><span style="color: #000000;"><strong>mwfbiz.COM</strong></span></a></div></div>
`;
  } else {
    document.getElementById("messagert").style.display = "block";
    document.getElementById("messagert").value = "User Not Found";
    document.getElementById("falseback").style.display = "none";
  }
}

document.getElementById("srchfrm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  var input = document.getElementById("srchste").value; // Get input value
  document.getElementById("modalText").innerHTML = input; // Set input value in modal

  var myModal = new bootstrap.Modal(document.getElementById("myModal")); // Initialize modal
  myModal.show(); // Show modal
});

document.getElementById("urlForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var url = document.getElementById("urlInput").value;
  var iframe = document.createElement("iframe");
  var hideButton = document.createElement("button");
  iframe.src = url;
  document.getElementById("ifrmembd").innerHTML = "";
  document.getElementById("ifrmembd").appendChild(iframe);
  hideButton.id = "hidefrmvw";
  hideButton.textContent = "Close";
  hideButton.addEventListener("click", function () {
    document.getElementById("ifrmembd").innerHTML = "";
    document.getElementById("ifrmembd").style.display = "none";
    document.getElementById("hidefrmvw").remove();
  });
  document.getElementById("ifrmembd").style.display = "block";
  document.getElementById("ifrmembd").appendChild(hideButton);
});
