---
layout: post
title:  "Where's all the logs?"
published: true
---

Welcome back, everybody!

Firstly, I must apologize for being absent for so long. How long was it? Four months? Five? Geez, I have not been taking care of this blog much, have I? My goodness, look at all this dust!

Kidding. Although, there is alot of cruft on this blog that could use a "fresh code of paint", if you will. Maybe I'll get around to that. I don't know.

Secondly, I apologize for the downtime that this website has had over the past few days. I have a Let's Encrypt certificate and everytime that certificate expires, I don't have a way (yet) to automatically generate a new certificate for my website and I have been quite lazy over the past few days to get it done. I'll be sure to scope out solutions here soon.

Over the summer, I got a job as Linux system administrator! Rad, right? Well, I should probably say it's part of an internship course that I had to take to get my degree. Also, I probably should've mentioned that in last blog post, heh. Anywho, with that job, I have not only been busting my butt but also challenged. My interest is piqued all the time, it's crazy how much my brain hops around to different topics. From high availability clusters to Ansible to Python programming (strange stuff indeed, I know), it's all over the place. However, the most important part of it all is that I am having a fun time doing it, which is what counts. Sadly, this post isn't about work. Perhaps, I'll talk about my internship in another blog post. 

About a week ago, while I was at work, I was reading some documentation. In this documentation, they listed a tool called Lumberjack. No, not this [Lumberjack](https://github.com/natefinch/lumberjack), but that Lumberjack is the bee's knees. Kudos to Nate Finch for creating that program! What this documentation's Lumberjack did was supposed to gather all of your logs for you and give them to you in a little picnic basket...wait, that's not right. It was supposed to give them to you in a centrailized format. For example, a directory or a compressed file of some kind, like a tarball or a Zipped file. What logs it was trying to give you, I am afraid I can not tell you because that was when it struck me. I couldn't find a link where I could see the source code or even where to download it. I thought to myself "Why can't I create my own?"

I present to you Logman! Logman is a program that connects through SSH to various different machines and gathers the log files for you and gives them to you in a tarball. Now there is alot more that goes into Logman so let me explain. This program is 

Logman is dictated by a configuration file, namely a YAML file. I don't about you, but I love YAML over JSON. TOML is pretty great as well because you could read it about as well as YAML but we won't go into a debate at this point in time. Another blog post may be in the works. In this configuration file, there's a username field and a password field, which say which username and which password is going to be used for connecting to machines. The same configuration file has port field and a hosts dictionary. As you may have guessed, the port field has your port you want to connect to and the hosts dictionary has a list of hosts you want to connect to. I choose a configuration file over a command or ad-hoc input (i.e. INPUT YOUR HOST) because it's a whole easier on the user and on the maintainer (that's me). 

What happens to that configuration file is it gets deserialized into a structure and fields get thrown in multiple functions. Those functions will allow fetching and recieving the log files on your system. The fetching and receiving process is done through SSH, which means you must have some kind of SSH server on the machines you are getting log files from. It really doesn't matter what SSH server you want to use but I have tested this program on OpenSSH. I will probably not test on any other SSH servers as how popular  As of now, the program only gets one log file, hard coded in to the program, but soon, you will be able to define the log file you want in the configuration file. 

Things I have planned for Logman is pretty small but I'm sure I have more ideas if I mull it over. As I have stated before, one item I want to have done ASAP is having the configuration file dictate what log file you would want to fetch from the host machines. Another item is I want to allow proper SSH key support as well as passwordless SSH sessions along with bypassing keys altogether. Maybe in the future, I will scrap that last bit of bypassing keys but that item is still in the planning stages. The last item I have on my todo list is to allow fetching of multiple log files. I want this item in place so you won't have to run Logman multiple times whenever you want log files.

Logman is still in early days but I will continue my quest to develop Logman whenever I get the chance.

EDIT: logman is on [GitHub](https://github.com/wymillerlinux/logman)