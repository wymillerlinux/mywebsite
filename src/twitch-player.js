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
<<<<<<< HEAD
follow.addEventListener("click", function() {
    //code goes here
=======
follow.addEventListener("click", function(user){
    this.user = user;
>>>>>>> 05b1d079479a667e15c6dcf18f1eb132b19c3849
}, false);

/*
var a = 42;
var b = Number(a);
console.log(a);
console.log(b); 

function foo(){
    this.bar = bar;
    this.foo = foo;
    console.log(foo, bar);
}

var obj = {
    foo: "bar",
    bar: "foo"
};

foo();
new foo();
*/