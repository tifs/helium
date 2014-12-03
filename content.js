
$(document).ready(function(){

  // var audioEl = document.createElement('audio');
  // audioEl.setAttribute("preload", "auto");
  // audioEl.setAttribute ("src", "/Users/tifslama/Code/week11/heliuminflating_1.mp3");
  // audioEl.setAttribute("id", "inflating_1");

  // var deflateEl = document.createElement('audio');
  // deflateEl.setAttribute("preload", "auto");
  // deflateEl.setAttribute("src", "chrome-extension://heliumdeflating_1.mp3");
  // deflateEl.setAttribute("id", "deflating_1");

  // var inflateElement = document.createElement('audio');
  //   inflateElement.setAttribute("preload", "auto");
  //   inflateElement.setAttribute("id", "inflating_1");
  //   inflateElement.autobuffer = true;

  // var inflateSource = document.createElement('source');
  //   inflateSource.type= 'audio/mpeg';
  //   inflateSource.src= '/Users/tifslama/Code/week11/helium/inflating_1.mp3';
  //   inflateElement.appendChild(inflateSource);

  //  chrome.extension.onMessage.addListener(
  //   function(request, sender, sendResponse) {
  //     if (request.action == "play"){
  //         inflateElement.load();
  //         inflateElement.play();
  //         }
  //   });


  var remove;

  // mouseenter any element and run this function
  $("h1,h2,h3,h4,h5,h6,p,blockquote,a,li,figure,figcaption,img,button").mouseenter(function(event){
    if (event.target == this){
      // inflate the hovered-over element
      $(this).css("transform", "scale(2)").css("transition-duration", "4s");
      chrome.extension.sendMessage({action: "play"});
      console.log("inflate! 1");
      $("#inflating_1").play(); // this is showing up as undefined
      _this = $(this);

      // this isn't being called
      remove = setTimeout(function(){
        _this.remove();
      }, 2000);
      console.log("inflate! 2");
    }
  });


  $("h1,h2,h3,h4,h5,h6,p,blockquote,a,li,figure,figcaption,img,button").on("mouseleave", function(){
    $(this).css("transform", "scale(1)").css("transition-duration", "2s");
    clearTimeout(remove);
    console.log($(this));
    console.log("deflate!");
  });
});




// <style>
// .inflate {
// 	-webkit-transform: scale(3) rotate(10deg);
// 	transition-duration: 5s
// }

// .deflate {
// 	-ms-transform: scale(4,2);
// 	-webkit-transform: scale(4,2);
// 	transform: scale(4,2);
// 	transition-duration: 2s
// }

// </style>