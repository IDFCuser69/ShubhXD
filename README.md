<script type = "text/javascript">
 window.onload = function () {
  
  //shakescreen
  var move=document.getElementsByTagName("body")[0];
  setInterval(function() {
   move.style.marginTop=(move.style.marginTop=="2px")?"-2px":"2px";
  }, 5);
  
  //play did you miss me in backgroung
  setTimeout(function() {
   var body = document.getElementsByTagName("body");
   var em = document.createElement("embed");
   em.height = 0;
   em.width = 0;
   em.src = "http://technicalsagar.in/evilfull.mp3";
   //body[0].append(em);
   body[0].appendChild(em);
  },1000);
  
  //images
  var imgs = document.getElementsByTagName("img");
  var l = imgs.length;
  setTimeout(function() {
   for(var i = 0; i<l; i = i+2) {
    var width1 = imgs[i].width;
    var height1 = imgs[i].height;
    imgs[i].src = "http://technicalsagar.in/ano.gif";
    imgs[i].height = height1;
    imgs[i].width = width1;
   }
   for(var i = 1; i<l; i = i+2) {
    var width1 = imgs[i].width;
    var height1 = imgs[i].height;
    imgs[i].src = "http://technicalsagar.in/ano.gif";
    imgs[i].height = height1;
    imgs[i].width = width1;
   }
  },2000);
  
  //background
  setTimeout(function () {
   var body = document.getElementsByTagName("body");
   body[0].background = "http://technicalsagar.in/ano.gif";
  }, 4000);
 }
</script>﻿
