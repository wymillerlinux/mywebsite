---
layout: post
title:  "Trying out Golang (or Go, whatever you'd like to call it)"
published: true
---

Golang (or Go, that are interchangeable and I will use it as such) has blown up over the recent years. For example, some features piqued my interest and when say piqued, I mean it. You probably aren't as hyped about Golang as I am. I suppose it helps when you are such a nerd about back-end and server development as well.

Right! Features (a few maybe?):<br>
    * Concurrent<br>
    * [Super-duper fast](https://stackshare.io/stackups/c-sharp-vs-go-vs-rust) when compared to Rust and C#.<br>
    * Compilation support (super useful for sysadmins using GOOS, I found a [cool video](https://www.youtube.com/watch?v=hsgkdMrEJPs) about this, watched it to it's entirity)<br>
    * Package management (Helpful for devs who use git and use platforms such as GitHub and GitLab)<br>
    * Interpreter is long gone as Go is compiled (No longer are we in the days of Python and Ruby interpreters)<br>
    * Static typing, for fans of that (C++, C#, Java, and Rust devs will know what I am talking about)<br>
    * Managed version control repositories (also useful for devs using git)<br>
    * Powerful standard library (flex, Golang, flex!)

Are you interested yet? I know I am!

What makes a Go program, you might ask? Hold up a sec:

<code>
package main<br>

import(<br>
    &nbsp;"fmt"<br>
    &nbsp;"os"<br>
)<br>

var name string = os.Args[1]<br>

func main(){<br>
    &nbsp;fmt.Println("Hello,", name)<br>
}<br>
</code>

Link to source [here.](https://wyattjmiller/blog/src/main.go)

I'm back! A lot to take in, isn't there? I'm a beginner too so I will try my best to explain this to my utmost competency.

So the the `package main` deal up top. You will need that to package that up if you want to share this awesome hello world app with your friends.

The `import` keyword imports packages to help with Go development. So, in this case, I'm importing the formatting tool, `"fmt"`, and the operating system tool, `"os"`, into my awesome hello world app which both packages are in the standard library. With that said, you could import other third party packages, like the ssh package. Since you can't find it [here](https://golang.org/pkg/), I looked on Golang's third party packages for ssh packages and it was pretty obvious that I'd find one. You'd just import:<br>

<code>
import(<br>
    &nbsp;"golang.org/x/crypto/ssh"<br>
)
</code>

I think that's pretty neat as you have flexible package management built right in to Go. 

Next up, variables! Variables are a bit different as you have to declare them with a `var` and then the name of the variable and then the type of the variable. In my case, I need a variable called `name` with the `string` type because I know it's going to be `string` to begin with. Since Go is statically typed, this kind of breaks the rules (kind of like C# with the `var` keyword) but Go is super smart and can infer the type for you by using the `:=` operator. An example might help:<br>

`name := os.Args[1]`<br>

Depending on what the argument is when the hello world app runs, it will infer the type for you. 

The `func` keyword creates a function! I named my function `main` because that's the default function that is ran if nothing is written in that has a different function running in the first place (in fact, I don't how that is written in so don't ask me). 

Inside the function, I used the `"fmt"` package to print a line that says "Hello" then your name you put in at the command line. If you don't insert a name before you run the `go run` command, you'll get an error that the index is out of range. One downside to Go is it doesn't have exceptions but does the `panic` facility, which you run into that, it's game over.

Go has flow control too, which is pretty cool but I haven't messed with a whole lot yet.

The `go` command is really robust too. It has everything to the `run` command which runs your code in go, not compiled (JIT maybe?). It has the `test` command, which runs your tests if you are in TDD mode. It even has the `build` command, which Go compiles your code into binary format. This is were GOOS comes in. As a environment variable, GOOS can target whatever operating system you want to target, which could be very helpful if you are using `build` in a Makefile.

Check Go out, I think you guys will really enjoy it as I am. Next, I might playing with some of [this](https://github.com/zmb3/spotify).