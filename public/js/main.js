
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.2;

var messageBoolean;

function updateGradient()
{
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,1);




for(var i = 0; i <6; i++) {
  $('.sound-smiley').append('<img id="smiley-' + i +'" class="smileyBtn" src="acid.gif" alt="Smiley face" height="100" width="100" />');
  console.log("smileys are created");
}



var player0Bool = true;
var player1Bool = true;
var player2Bool = true;
var player3Bool = true;
var player4Bool = true;
var player5Bool = true;

var message0
var message1
var message2
var message3
var message4
var message5

var player0 = $('.player_audio-0')[0];
var player1 = $('.player_audio-1')[0];
var player2 = $('.player_audio-2')[0];
var player3 = $('.player_audio-3')[0];
var player4 = $('.player_audio-4')[0];
var player5 = $('.player_audio-5')[0];

console.log($('.player_audio-0').html);


function playSound0() {
  
  if(player0Bool){
  player0.play();
}else if(!player0Bool){
   player0.pause();

  console.log("play");
}
};

function pauseSound0() {
  player0.pause();
};


function playSound1() {
  if(player1Bool){
  player1.play();

} else if (!player1Bool){
   player1.pause();
  console.log("play");
}
};
function pauseSound1() {
  player1.pause();
};


function playSound2() {
  if(player2Bool){
  player2.play();

}else if (!player2Bool){
   player2.pause();
   console.log("play");
}
};
function pauseSound2() {
  player2.pause();
};


function playSound3() {
  if(player3Bool){
  player3.play();

} else if (!player3Bool){
   player3.pause();
   console.log("play");
}
};
function pauseSound3() {
  player3.pause();
};


function playSound4() {
if(player4Bool){
  player4.play();

} else if (!player4Bool){
   player4.pause();
   console.log("play");
}
};
function pauseSound4() {
  player4.pause();
};


function playSound5() {
if(player5Bool){
  player5.play();

} else if (!player5Bool){
   player5.pause();
   console.log("play");
}
};
function pauseSound5() {
  player5.pause();
};


$('#smiley-0').click(function() {

  console.log("I'm clicked");
  playSound0();
   message0 = {bool: true};
  player0Bool = !player0Bool;

});



$('#smiley-1').click(function() {
   
  console.log("I'm clicked");
  playSound1();
   message1 = {bool: true};

  player1Bool = !player1Bool;

});


$('#smiley-2').click(function() {
 
  console.log("I'm clicked");
  playSound2();
   message2 = {bool: true};

  player2Bool = !player2Bool;

});


$('#smiley-3').click(function() {
 
  console.log("I'm clicked");
  playSound3();
   message3 = {bool: true};

  player3Bool = !player3Bool;

});

  $('#smiley-4').click(function() {
  
  console.log("I'm clicked");
  playSound4();
   message4 = {bool: true};
  player4Bool = !player4Bool;

});

  $('#smiley-5').click(function() {
  console.log("I'm clicked");
  playSound5();
   message5 = {bool: true};
  player5Bool = !player5Bool;

});



