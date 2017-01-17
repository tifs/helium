// resets all js and jquery on the page when the button's turned off
$(document).ready(function(){
  $("audio").remove();
  // supposed to reset the default behavior on all targeted elements, but doesn't work
  // $("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").unbind("click");
  $("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").off("mouseenter");
  clearTimeout(remove);
  $("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").off("mouseleave");
});