// $("h2").append(' Helium Test!');
//   console.log("it's working");
$(document).ready(function(){
  var remove;

  // browsers become impossible when this is uncommented
  // mouseenter any element and run this function
  $("h1,h2,h3,h4,h5,h6,p,blockquote,a,li,figure,figcaption,img,button").mouseenter(function(event){
    if (event.target == this){
  //   // if the element hasn't popped yet
  //   if (counter >= 0 && counter < 10) {
  //     myInterval = setInterval(function () {
  //         ++counter;
  //         }, 1000);
  //         console.log(counter);
  //     // inflate the hovered-over element
      $(this).css("transform", "scale(2)").css("transition-duration", "5s");

      _this = $(this);

      remove = setTimeout(function(){
        _this.remove();
      }, 2000);

      console.log("inflate!");
  //   } else {

  //   }
  }
  });

  $("h1,h2,h3,h4,h5,h6,p,blockquote,a,li,figure,figcaption,img,button").on("mouseleave", function(){
    $(this).css("transform", "scale(1)").css("transition-duration", "5s");
    clearTimeout(remove);
    console.log($(this));
  });
});

// currentTime = 0
// mouseenter {
//   inflate // -> inflateTime increases
// }
// when inflateTime >= 0 && inflateTime < 5
// if (inflateTime >= 5) {
//   pop
// }
// elseif (inflateTime < 5)
// mouseleave {
//   deflate // -> inflateTime decreases
// }





$('p').mouseenter(function(){
	$(this).toggleClass('inflate');
	// picks a random number between 1 and 1 and plays that 'inflate' audio file
  $("#inflate_" + Math.ceil(Math.random() * 1))[0].play();
  console.log("please inflate!");
  // $(this).css({"transform: scale(4) rotate"(getRandomInt(-10,10))});
});




$(this).on("mouseleave",function(){
	$(this).toggleClass('deflate');
	// picks a random number between 1 and 2 and plays that 'inflate' audio file
	$("#deflate_" + Math.ceil(Math.random() * 2))[0].play();
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

// h1 {
// 	font-family: helvetica;
// }

// .headline {
// 	color: red;
// }
// </style>