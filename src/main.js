/*
main.js, for all global functions throughout the site
Created by Wyatt J. Miller, published by Entourage Solutions

Hey there, nice to see you! There's nothing here so why don't you fuck off??
*/  

var elTime = document.getElementById("time");
var time = new Date().getHours();

function mediaDetect(){
    var ScreenWidth = window.screen.width;
    var ScreenHeight = window.screen.height;

    print("width: " + ScreenWidth);
    print("height: " + ScreenHeight); 
    if (ScreenWidth < 768){
        print("user has a phone!");
    } else if (ScreenWidth < 992) {
        print("user has a tablet!");
    } else if (ScreenWidth < 1200) {
        print("user has a desktop!");
    } else if (ScreenWidth < 2048) {
        print("user has a hd display!");
    } else if (ScreenWidth < 4096) {
        print("user has a display greater than fhd!");
    } else {
        print("what do you spend your money on?");
    }
}

function backToTop(){
    // code goes here
    // this function has a button where js moves the page/screen back to the top
}

var x = "Good morning, people!";
var y = "Good afternoon, people!";
var z = "Good evening, people!";
var a = "Hello!";

if (time < 12) {
    elTime.innerHTML = x;
} else if (time < 18) {
    elTime.innerHTML = y;
} else if (time < 24) {
    elTime.innerHTML = z;
} else {
    elTime.innerHTML = a;
}

console.log("Anyone that gets the version codename, email me by clicking the contact button.");
