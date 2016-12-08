

// preloading "inflate" audio
$("body").prepend("<audio id='inflating_1' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_1_sfx.mp3'</audio>");
$("body").prepend("<audio id='inflating_2' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_2_sfx.mp3'</audio>");
$("body").prepend("<audio id='inflating_3' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_3_sfx.mp3'</audio>");
$("body").prepend("<audio id='inflating_4' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_4_sfx.mp3'</audio>");
$("body").prepend("<audio id='inflating_5' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_5_sfx.mp3'</audio>");
$("body").prepend("<audio id='inflating_6' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_6_sfx.mp3'</audio>");
$("body").prepend("<audio id='inflating_7' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_7_sfx.mp3'</audio>");
$("body").prepend("<audio id='inflating_8' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_8_sfx.mp3'</audio>");

// preloading "deflate" audio
$("body").prepend("<audio id='deflating_1' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/delfate_sfx/Helium_deflate_1_sfx.mp3'</audio>");
$("body").prepend("<audio id='deflating_2' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/delfate_sfx/Helium_deflate_2_sfx.mp3'</audio>");
$("body").prepend("<audio id='deflating_3' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/delfate_sfx/Helium_deflate_3_sfx.mp3'</audio>");
$("body").prepend("<audio id='deflating_4' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/delfate_sfx/Helium_deflate_4_sfx.mp3'</audio>");
$("body").prepend("<audio id='deflating_5' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/delfate_sfx/Helium_deflate_5_sfx.mp3'</audio>");
$("body").prepend("<audio id='deflating_6' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/delfate_sfx/Helium_deflate_6_sfx.mp3'</audio>");
$("body").prepend("<audio id='deflating_7' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/delfate_sfx/Helium_deflate_7_sfx.mp3'</audio>");

// preloading "pop" audio
$("body").prepend("<audio id='popping_1' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/pop_sfx/Helium_pop_1_sfx.mp3'</audio>");

var remove;



// targets all these elements and runs the following function when you mouse over it
$("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").mouseenter(function(event){
  // targets only the one specific mouse-entered element
  if (event.target == this){
    // "inflates" that element by changing its css
    $(this).css("transform", "scale(3)").css("transition-duration", "2s");
    console.log($("audio"));
    // stores the specific 'this' to use later
    _this = $(this);
    // selects a random "inflate", "deflate", or "pop" sound
    var inflateTune = document.getElementById('inflating_'+ Math.ceil(Math.random()*8));
    var deflateTune = document.getElementById('deflating_'+ Math.ceil(Math.random()*7));
    var popTune = document.getElementById('popping_1');
    // plays that randomly chosen "inflate" sound
    inflateTune.play();
    deflateTune.pause();
    deflateTune.currentTime = 0;
    // "pops" an element if it's "inflated" more than 2 seconds, and stops the "inflate" sound
    remove = setTimeout(function(){
      _this.remove();
      inflateTune.pause();
      inflateTune.currentTime = 0;
      popTune.play();
    }, 2000);
  }
});

// targets the following elements and runs the following function when you click it
$("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").click(function(event){
  // disables normal click functionality
  event.preventDefault();
  // targets only the one specific clicked-on element
  if(event.target == this) {
    // stores the specific 'this' to use later
    _this = $(this);
    // selects the "pop" sound
    var popTune = document.getElementById('popping_1');
    // removes the clicked-on element from the dom
    _this.remove();
    // while playing the "pop" sound
    popTune.play();
  }
});

// plays the "deflate" sound if you mouse off an element, and stops the "inflate" sound
$("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").on("mouseleave", function(){
  var inflateTune = document.getElementById('inflating_'+ Math.ceil(Math.random()*8));
  var deflateTune = document.getElementById('deflating_'+ Math.ceil(Math.random()*7));
  inflateTune.pause();
  inflateTune.currentTime = 0;
  deflateTune.play();


  // "deflates" the element back to normal size and resets the "deflate" sound
  $(this).css("transform", "scale(1)").css("transition-duration", "2.5s");
  $(this).bind("transitionend animationend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
    deflateTune.pause();
    deflateTune.currentTime = 0;
  });
  // this removes the css class "shake" that i'm not using
  // // $(this).removeClass("shake");
  clearTimeout(remove);
});
