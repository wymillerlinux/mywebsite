/* 
Twitch player for my personal site
Created by Wyatt J. Miller, published by Entourage Solutions
Made possible by the folks at Twitch, thanks guys ;)
Licensed by the MIT
*/

new Twitch.Embed("twitch-embed", {
    theme: "dark",
    chat: "mobile",
    width: "100%",
    height: "100%",
    channel: "wymillerlinux"
});

var follow = document.getElementById("twitch-follow");
follow.addEventListener("click", function(user){
    this.user = user;
}, false);
