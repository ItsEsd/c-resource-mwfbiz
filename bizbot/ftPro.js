function addImageField() {
    var imageFields = document.getElementById("imageFields");
    var newImageField = document.createElement("input");
    newImageField.type = "text";
    newImageField.className = "imageInput";
    newImageField.required = true;
    imageFields.appendChild(newImageField);
    imageFields.appendChild(document.createElement("br"));
    imageFields.appendChild(document.createElement("br"));
  }

  function removeImageField() {
    var imageFields = document.getElementById("imageFields");
    var imageInputFields = imageFields.getElementsByClassName("imageInput");
    if (imageInputFields.length > 1) {
      imageFields.removeChild(imageInputFields[imageInputFields.length - 1]);
      imageFields.removeChild(imageFields.lastChild);
      imageFields.removeChild(imageFields.lastChild);
    }
  }

  document.getElementById("showhqt").addEventListener("click", function(event) {
    event.preventDefault();

    var imageInputs = document.getElementsByClassName("imageInput");
    var imageUrls = [];
    for (var i = 0; i < imageInputs.length; i++) {
      imageUrls.push(imageInputs[i].value);
    }

    var videoInput = document.getElementById("videoInput").value;
    if(imageInputs!=""&&videoInput!=""){
      var generatedHTML = document.createElement("div");
      generatedHTML.innerHTML = `
      <div id="myNav" class="overlay">
        <div class="overlay-content">
          <div class="sticky">
            <span><a onclick="closeNav()"><img class="close" src="https://icon-library.com/images/1f22f8c59e.png" width="30px"></a></span>
            <h3 style="color:white;" align="left">Hello, Quotes.</h3>
            <hr>
          </div>
    `;

    for (var j = 0; j < imageUrls.length; j++) {
      generatedHTML.innerHTML += `
        <img src="`+imageUrls[j]+`" width="100%">
        <hr>
      `;
    }

    generatedHTML.innerHTML += `
      <div class="embed-responsive embed-responsive-16by9" align="center">
        <iframe class="embed-responsive-item" width="560" height="315" src="`+videoInput+`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
      <hr>
    `;
    document.getElementById("generatedHTMLhq").innerHTML = "";
    document.getElementById("generatedHTMLhq").style.display = "block";
    document.getElementById("generatedHTMLhq").appendChild(generatedHTML);}else{return}});

  function closeNav(){
      document.getElementById('generatedHTMLhq').innerHTML = "";
      document.getElementById("generatedHTMLhq").style.display = "none";
  }
  function openNav(){
      document.getElementById('generatedHTMLfl').innerHTML = "";
      document.getElementById("generatedHTMLfl").style.display = "none";
  }
var inputField = document.createElement("input");
inputField.setAttribute("type", "text");
inputField.setAttribute("id", "videoUrl");
inputField.setAttribute("required", "required");

inputField.addEventListener("input", function(e) {
  e.preventDefault();
  var url = this.value;
var isValid = validateYouTubeUrl(url);
if (!isValid) {
  alert("Please enter a valid link.");  this.value = "";
} else {
   showVideoInModal();
}
});

document.getElementById("fprgens").addEventListener("input", function(e) {
  e.preventDefault();
  var url = this.value;
  var gensPattern = /^(https?:\/\/)?(www\.)?(genesis.mwfbiz\.com)\/.+$/;
  var isValid = gensPattern.test(url);
  if (!isValid) {
  alert("Please enter a valid link.");  this.value = "";
  } else { return;}});

  document.getElementById("showful").addEventListener("click", function(event) {
      var generatedHTMLfl = document.createElement("div");
      var fprnm = document.getElementById("fprnm").value;
      var fprgens = document.getElementById("fprgens").value;
      var fprthumb = document.getElementById("fprthumb").value;
      var fprmqt = document.getElementById("fprmqt").value;
      var fprftv = document.getElementById("fprftv").value;
      var mdlq = `</div></div><div align="center"><span style="font-size:30px;cursor:pointer" onclick="openNav()"><img src="`+fprmqt+`" width="90%"></span>
          </div>
          <hr>`;
      var ftvd = `<div class="embed-responsive embed-responsive-16by9" align="center"><iframe class="embed-responsive-item" width="560" height="315" src="`+fprftv+`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
      if(fprnm!=""&&fprgens!=""&&fprthumb!=""&&fprmqt!=""&&fprftv!=""&&mdlq!=""){
     generatedHTMLfl.innerHTML = `<div class="Name">`+fprnm+`</div><hr style="width:50%;"><div align="center">
          <a href="`+fprgens+`" target="_parent"><img src="`+fprthumb+`" width="70%" class="imgC" ></a></div>
          <hr style="width:70%;">`+mdlq+ftvd;

          document.getElementById("generatedHTMLfl").innerHTML = "";
          document.getElementById("generatedHTMLfl").style.display = "block";
          document.getElementById("generatedHTMLfl").appendChild(generatedHTMLfl);
          }
          else{ return;
          }
      });


myFormpedt.addEventListener('submit',(event)=>{
event.preventDefault();
document.getElementById("falseback").style.display = "block";
document.getElementById('upfpr').disabled=true;
var dmdn = $('#bbotpass').val();

  var fprnm = document.getElementById("fprnm").value;
  var fprbio = document.getElementById("fprbio").value;
  var fprcatg = document.getElementById("fprcatg").value;
  var fprgens = document.getElementById("fprgens").value;
  var fprthumb = document.getElementById("fprthumb").value;

  var fprmqt = document.getElementById("fprmqt").value;
  var fprftv = document.getElementById("fprftv").value;
  var hqhtm = ``;

  var imageInputs = document.getElementsByClassName("imageInput");
  var imageUrls = [];
    for (var i = 0; i < imageInputs.length; i++) {
      imageUrls.push(imageInputs[i].value);
    }

  var videoInput = document.getElementById("videoInput").value;
  var  hqhtm = `
      <div id="myNav" class="overlay">
        <div class="overlay-content">
          <div class="sticky">
            <span><a onclick="closeNav()"><img class="close" src="https://icon-library.com/images/1f22f8c59e.png" width="30px"></a></span>
            <h3 style="color:white;" align="left">Hello, Quotes.</h3>
            <hr>
          </div>
    `;
    for (var j = 0; j < imageUrls.length; j++) {
      hqhtm += `
        <img src="`+imageUrls[j]+`" width="100%">
        <hr>
      `;
    }
    hqhtm += `
      <div class="embed-responsive embed-responsive-16by9" align="center">
        <iframe class="embed-responsive-item" width="560" height="315" src="`+videoInput+`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
      <hr>
    `;
  var mdlq = `</div></div><div align="center"><span style="font-size:30px;cursor:pointer" onclick="openNav()"><img src="`+fprmqt+`" width="90%"></span></div><hr>`;
  var ftvd = `<div class="embed-responsive embed-responsive-16by9" align="center"><iframe class="embed-responsive-item" width="560" height="315" src="`+fprftv+`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  var gurj = hqhtm + mdlq + ftvd; 
  gurj = minifyHTML(gurj);
  var ur1 = "https://script.google.com/macros/s/";
  var ur2="AKfycbx-Ggr5HmTI-1hG_Mtdlg-l051t1O61PQRz_k_QNGmWOBtsiT_LyZmcQm6xxPoRQwheQA";
  var urup = ur1+ur2+"/exec?callback=updtfpr&gurj="+escape(gurj)+"&bbps="+dmdn+
  "&fprcatg="+escape(fprcatg)+"&fprbio="+escape(fprbio)+"&fprthumb="+escape(fprthumb)+"&fprgens="+escape(fprgens)+"&fprnm="+escape(fprnm)+"&action=infpro";
  var request = jQuery.ajax({
      crossDomain: true,
      url: urup,
      method: "GET",
      dataType: "jsonp"
    });
   });
   function updtfpr(e){
      if(e.records==='updated'){
          document.getElementById('upfpr').disabled=false;
          myFormpedt.reset();
      }
      document.getElementById('upfpr').disabled=false;
   }    

function minifyHTML(htmlCode) {
htmlCode = htmlCode.replace(/\s+/g, ' ');
return htmlCode;}