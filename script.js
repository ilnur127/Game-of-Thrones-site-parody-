 var layer = document.getElementById("empty-layer");
 var alert = document.getElementById("alert");
 var alertItem = document.getElementById("alertItem");
 var alertImg = document.getElementById("alert_img");


 alertItem.addEventListener("click", function() {
     alert.style.display = "block";
     var widthPercent = 0;
     var animduration = 2000.0;
     var curentTime = 0;
     alert.style.width = widthPercent + "%";
     var fps = 50; // 50 кадров в секунду
     var timer = setInterval(function() {

         if (curentTime >= animduration) {
             clearInterval(timer);
             debugger;
             alertImg.style.display = "block";
         } else {
             widthPercent = 52 * (curentTime / animduration);
             alert.style.width = widthPercent + "%";
             curentTime += 50;
         }
     }, 1000 / fps)


     layer.style.display = "block";

 })
 layer.addEventListener("click", function() {
     alert.style.display = "none";
     layer.style.display = "none";
     alertImg.style.display = "none";
 });