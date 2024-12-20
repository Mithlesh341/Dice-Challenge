document.querySelector("h1").addEventListener("click" , dice);

function dice(){

var random1 = Math.floor(Math.random()*6)+1;
var rimg1 = "dice" + random1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",rimg1);

var random2 = Math.floor(Math.random()*6)+1;
var rimg2 = "dice" + random2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",rimg2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "	&#128681 Player 1 wins";
}else if(random1 < random2){
    document.querySelector("h1").innerHTML = "Player 2 wins &#128681";
}else{
    document.querySelector("h1").innerHTML = "&#127884 It's a draw &#127884";
}
}