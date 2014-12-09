$(document).ready(function(){
  // inflating audio files
  $("body").prepend("<audio id='inflating_1' preload='auto' src='javascript:void(0)");
  $("body").prepend("<audio id='inflating_2' preload='auto' src='javascript:void(0)'</audio>");
  $("body").prepend("<audio id='inflating_3' preload='auto' src='javascript:void(0)'</audio>");
  $("body").prepend("<audio id='inflating_4' preload='auto' src='javascript:void(0)'</audio>");
  // deflating audio files
  $("body").prepend("<audio id='deflating_1' preload='auto' src='javascript:void(0)'</audio>");
  $("body").prepend("<audio id='deflating_2' preload='auto' src='javascript:void(0)'</audio>");
  $("body").prepend("<audio id='deflating_3' preload='auto' src='javascript:void(0)'</audio>");
  $("body").prepend("<audio id='deflating_4' preload='auto' src='javascript:void(0)'</audio>");


  // var randomInflate = document.getElementById('inflating_'+ Math.ceil(Math.random()*4));
  // var randomDeflate = document.getElementById('deflating_'+ Math.ceil(Math.random()*4));

  var remove;

    // mouseenter any element and run this function
    $("h1,h2,h3,h4,h5,h6,p,blockquote,a,li,figure,figcaption,img,button").mouseenter(function(event){
      if (event.target == this){
        // inflate the hovered-over element
        $(this).css("transform", "scale(1)").css("transition-duration", "0s");
        console.log($("NOT audio"));
        // console.dir($("#inflating_1"));
        // $("#inflating_1").play(); // this is showing up as undefined
        _this = $(this);
        var inflateTune = document.getElementById('inflating_'+ Math.ceil(Math.random()*4));
        var deflateTune = document.getElementById('deflating_'+ Math.ceil(Math.random()*4));
        inflateTune.pause();
        deflateTune.pause();
        deflateTune.currentTime = 0;
        remove = setTimeout(function(){
          _this.show();
          inflateTune.pause();
          inflateTune.currentTime = 0;
          // popTune.play();
        }, 2000);
        console.log("NOT " + inflateTune);
      }
    });


    $("h1,h2,h3,h4,h5,h6,p,blockquote,a,li,figure,figcaption,img,button").on("mouseleave", function(){
      var inflateTune = document.getElementById('inflating_'+ Math.ceil(Math.random()*4));
      var deflateTune = document.getElementById('deflating_'+ Math.ceil(Math.random()*4));
      inflateTune.pause();
      inflateTune.currentTime = 0;
      deflateTune.pause();

      $(this).addClass("shake");
      $(this).css("transform", "scale(1)").css("transition-duration", "0s");
      $(this).bind("transitionend animationend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
        deflateTune.pause();
        deflateTune.currentTime = 0;
      });
      $(this).removeClass("shake");

      clearTimeout(remove);

      // console.log($(this));
      // console.log("deflate!");
    });
});