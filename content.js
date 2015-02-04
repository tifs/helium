
  // inflate audio files
  $("body").prepend("<audio id='inflating_1' preload='auto' src='http://www.tonycuffe.com/mp3/pipers%20hut.mp3'</audio>");
  $("body").prepend("<audio id='inflating_2' preload='auto' src='http://www.tonycuffe.com/mp3/pipers.mp3'</audio>");
  $("body").prepend("<audio id='inflating_3' preload='auto' src='http://www.tonycuffe.com/mp3/pipers.mp3'</audio>");
  $("body").prepend("<audio id='inflating_4' preload='auto' src='http://www.tonycuffe.com/mp3/pipers.mp3'</audio>");
  // deflate audio files
  $("body").prepend("<audio id='deflating_1' preload='auto' src='http://www.tonycuffe.com/mp3/tail%20toddle.mp3'</audio>");
  $("body").prepend("<audio id='deflating_2' preload='auto' src='http://www.tonycuffe.com/mp3/tail%20.mp3'</audio>");
  $("body").prepend("<audio id='deflating_3' preload='auto' src='http://www.tonycuffe.com/mp3/tail%20.mp3'</audio>");
  $("body").prepend("<audio id='deflating_4' preload='auto' src='http://www.tonycuffe.com/mp3/tail%20.mp3'</audio>");
  // pop audio files
  $("body").prepend("<audio id='popping_1' preload='auto' src='http://www.tonycuffe.com/mp3/tail%20.mp3'</audio>");
  $("body").prepend("<audio id='popping_2' preload='auto' src='http://www.tonycuffe.com/mp3/tail%20.mp3'</audio>");
  $("body").prepend("<audio id='popping_3' preload='auto' src='http://www.tonycuffe.com/mp3/tail%20.mp3'</audio>");
  $("body").prepend("<audio id='popping_4' preload='auto' src='http://www.tonycuffe.com/mp3/tail%20.mp3'</audio>");
  // var randomInflate = document.getElementById('inflating_'+ Math.ceil(Math.random()*4));
  // var randomDeflate = document.getElementById('deflating_'+ Math.ceil(Math.random()*4));

  var remove;

    // mouseenter any element and run this function
    $("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").mouseenter(function(event){
      // targets only one mouse-entered element
      if (event.target == this){
        // inflate only the hovered-over element
        $(this).css("transform", "scale(3)").css("transition-duration", "4s");
        console.log($("audio"));
        // stores the specific 'this' to use later
        _this = $(this);
        var inflateTune = document.getElementById('inflating_'+ Math.ceil(Math.random()*4));
        var deflateTune = document.getElementById('deflating_'+ Math.ceil(Math.random()*4));
        var popTune = document.getElementById('popping_'+ Math.ceil(Math.random()*4));
        inflateTune.play();
        deflateTune.pause();
        deflateTune.currentTime = 0;
        remove = setTimeout(function(){
          _this.remove();
          inflateTune.pause();
          inflateTune.currentTime = 0;
          popTune.play();
        }, 4000);
      }
    });


    $("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").on("mouseleave", function(){
      var inflateTune = document.getElementById('inflating_'+ Math.ceil(Math.random()*4));
      var deflateTune = document.getElementById('deflating_'+ Math.ceil(Math.random()*4));
      inflateTune.pause();
      inflateTune.currentTime = 0;
      deflateTune.play();

      // $(this).addClass("shake");
      $(this).css("transform", "scale(1)").css("transition-duration", "2s");
      $(this).bind("transitionend animationend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
        deflateTune.pause();
        deflateTune.currentTime = 0;
      });
      // $(this).removeClass("shake");
      clearTimeout(remove);
    });
