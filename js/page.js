var one = false;
var two = false;
var three = false;
var bird = $('.pokeheel');
var birdChange = $('.pokeheel img')
var keycount = 0;

function a316(){
  if($(window).width() === 316){
    $('body').css("font-family","impact");
    $('body').prop("id",true);
    console.log("clever, pick the right 3 digit number. Preferably between 001 - 151.")
    window.clearInterval(rattleSnake);
  }
};

console.log("Austin 3:16 says - Dev tools probably won't help you much, but they would work better displayed vertically.")

rattleSnake;

var changem = setInterval(function(){birdUp()}, 100);
var rattleSnake = setInterval(function(){a316()}, 3016);

function birdUp() {
  var margin = bird.css("margin-left");
  if (margin == "25px"){
    birdChange.css("min-width",9+"%")
    birdChange.prop("src","i/PidgeotCill.gif")
  window.clearInterval(changem)
  }
};


function moveBird(){
  bird.css("opacity",1);
  var i = 0;
  do {
   i += 1;
     bird.animate({ "margin-left": "-=25px" }, "fast" );
     console.log('move');
  } while (i < 39);
  changem;
}

function newMan(){
  $('body').css("background-image","url('https://github.com/HeelSteve/heelsteve.github.io/blob/master/i/magicword.gif?raw=true')");
  $('.title').css("display","none");
  setTimeout(function(){
    $('body').css("background-image","none");
    $('.title').css("display","inline-block");
  }, 3000)
}


var map = {48: false, 49: false, 56: false};
$(document).keydown(function(e) {
  if($('body').attr('id') === "true"){
      keycount++;
    if (e.which in map) {
        map[e.which] = true;
        }
      if(keycount === 3){
        if (map[48] && map[49] && map[56]) {
          moveBird();
        }else{
        keycount = 0;
        newMan();
        map[48] = false;
        map[49] = false;
        map[56] = false
      }
    }
  }
});



