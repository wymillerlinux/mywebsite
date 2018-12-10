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

function whatTimeIsIt(){
    var death = new Date();
    var timezone = death.getTimezoneOffset();
    var getHoursOffset;
    var getMinutesOffset;
    var getSecondsOffset;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition();
    } else {
        print("Geolocation is not supported. Update your shit.");
    }

    // working on getting user location and setting timezone to said location
    function timezoneOffset(zone){
        var offset = Math.abs(zone/60);
        
        var getHoursOffset = death.getHours + offset;
        var getMinutesOffset = death.getMinutes + offset;
        var getSecondsOffset = death.getSeconds + offset;

        return getHoursOffset, getMinutesOffset, getSecondsOffset;
    }

    function isPastNoon(){
        if (death.getHours() > 12) {
            print(death.getHours() - 12);
        } else {
            print(death.getHours());
        }
    }

    //timezoneOffset(timezone);
    console.log(timezone);
    print(isPastNoon(), ":", death.getMinutes(), ":", death.getSeconds());
    print(isPastNoon(), getHoursOffset(), getMinutesOffset(), getSecondsOffset());

}

function backToTop(){
    // code goes here
    // this function has a button where js moves the page/screen back to the top
}

//mediaDetect();
//whatTimeIsIt();
