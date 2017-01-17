// creating and preloading an audio element with yay sfx
$("body").prepend("<audio id='yay_0' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/yay_sfx/Helium_yay_0_sfx.mp3'></audio>");

// audio files for inflate sfx
var inflatingUrls = [
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_0_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_1_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_2_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_3_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_4_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_5_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_6_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/inflate_sfx/Helium_inflate_7_sfx.mp3"
];

// creating and preloading audio elements with inflate sfx that include unique and matching id and src attributes
for (i = 0;i <= 7; i++) {
  var inflateAudio = $("<audio>").attr("id","inflating_" + i).attr("src",inflatingUrls[i]);
  $("body").prepend(inflateAudio);
}

// audio files for deflate sfx
var deflatingUrls = [
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/delfate_sfx/Helium_deflate_0_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/deflate_sfx/Helium_deflate_1_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/deflate_sfx/Helium_deflate_2_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/deflate_sfx/Helium_deflate_3_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/deflate_sfx/Helium_deflate_4_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/deflate_sfx/Helium_deflate_5_sfx.mp3",
  "https://s3-us-west-1.amazonaws.com/tifsprojects/helium/deflate_sfx/Helium_deflate_6_sfx.mp3"
];

// creating and preloading audio elements with deflate sfx that include unique and matching id and src attributes
for (i = 0;i <= 6; i++) {
  var deflateAudio = $("<audio>").attr("id","deflating_" + i).attr("src",deflatingUrls[i]);
  $("body").prepend(deflateAudio);
}

// creating and preloading an audio element with pop sfx
$("body").prepend("<audio id='popping_0' preload='auto' src='https://s3-us-west-1.amazonaws.com/tifsprojects/helium/pop_sfx/Helium_pop_0_sfx.mp3'</audio>");

var remove;

// runs the following function once the page loads
$(document).ready(function() {
  // select the "yay" sound
  var yayTune = document.getElementById('yay_0');
  // plays the "yay" sound
  yayTune.play();
});

// targets all these elements and runs the following function when you mouse over it
$("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").mouseenter(function(event){
  // targets only the one specific mouse-entered element
  if (event.target == this){
    // "inflates" that element by changing its css
    $(this).css("transform", "scale(3)")
           .css("transition-duration", "2s");
    console.log($("audio"));
    // stores the specific 'this' to use later
    _this = $(this);
    // selects a random "inflate", "deflate", or "pop" sound
    var inflateTune = document.getElementById('inflating_'+ Math.floor(Math.random()*8));
    var deflateTune = document.getElementById('deflating_'+ Math.floor(Math.random()*7));
    var popTune = document.getElementById('popping_0');
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
    var popTune = document.getElementById('popping_0');
    // removes the clicked-on element from the dom
    _this.remove();
    // while playing the "pop" sound
    popTune.play();
  }
});

// plays the "deflate" sound if you mouse off an element, and stops the "inflate" sound
$("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").on("mouseleave", function(){
  var inflateTune = document.getElementById('inflating_'+ Math.floor(Math.random()*8));
  var deflateTune = document.getElementById('deflating_'+ Math.floor(Math.random()*7));
  inflateTune.pause();
  inflateTune.currentTime = 0;
  deflateTune.play();


  // "deflates" the element back to normal size and resets the "deflate" sound
  $(this).css("transform", "scale(1)")
         .css("transition-duration", "2.5s");
  $(this).bind("transitionend animationend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
    deflateTune.pause();
    deflateTune.currentTime = 0;
  });
  clearTimeout(remove);
});
