$(document).ready(function(){
  $("audio").remove();
  $("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").off("mouseenter");
  clearTimeout(remove);
  $("h1,h2,h3,h4,h5,h6,p,a,li,video,img,button,figcaption").off("mouseleave");
});