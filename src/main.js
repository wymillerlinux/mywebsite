/*
main.js, for all global functions throughout the site
Created by Wyatt J. Miller, published by Entourage Solutions

Hey there, nice to see you! There's nothing here so why don't you fuck off??
*/

function mediaDetect(){
    var ScreenWidth = window.screen.width;
    var ScreenHeight = window.screen.height;

    console.log("width: " + ScreenWidth);
    console.log("height: " + ScreenHeight); 
    if (ScreenWidth < 768){
       console.log("user has a phone!");
    } else if (ScreenWidth < 992) {
        console.log("user has a tablet!");
    } else if (ScreenWidth < 1200) {
        console.log("user has a desktop!");
    } else if (ScreenWidth < 2048) {
        console.log("user has a hd display!");
    } else if (ScreenWidth < 4096) {
        console.log("user has a display greater than fhd!");
    } else {
        console.log("what do you spend your money on?")
    }
}

function whatTimeIsIt(){
    var death = new Date();
    
    function isPastNoon(){
        if (death.getHours > 12) {
            death.getHours()-12;
        } else {
            death.getHours();
        }}
    console.log(isPastNoon(), ":", death.getMinutes(), ":", death.getSeconds());

}