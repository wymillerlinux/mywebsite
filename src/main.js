/*
main.js, for all global functions throughout the site
Created by Wyatt J. Miller, published by Entourage Solutions

Hey there, nice to see you! There's nothing here so why don't you fuck off??
*/  

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

function whatTimeIsIt() {
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
}
function backToTop(){
    // code goes here
    // this function has a button where js moves the page/screen back to the top
}

//mediaDetect();
var time = document.getElementById("load");
time.addEventListener("load", whatTimeIsIt, false);

whatTimeIsIt();
