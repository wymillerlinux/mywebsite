---
layout: post
title:  "Container it up: Massive Amounts of Docker!"
published: true
---

I had a presentation today. It was about containers. "Wyatt" you are probably thinking "that's too broad of a topic. What are you doing??" Fear not friend, we gave a presentation about Docker, a containerized solution and Docker is used everywhere, from myself to the who's who like Google, Amazon, and Red Hat, to name a few.

Think of containers this way, if you don't know what containers in the software world do already. Let's say you're about to ship barrels of oil and a bear skin by cargo boat. You probably think that you need somewhere safe to store those, right? You store them in a big metal shipping box and now, those barrels of oil and bear skin won't be damaged by the sea or the boat. Software container work the same way, only they don't transport oil or bear skins, they transport software. Containers are a solution to move software to one machine to the other without any breaking changes, so no matter where you run your container, whether it be on a server, a developement machine or AWS, the environment will still be the same and it will run the same.

What makes containers so great? Well, I just explained that containers run everywhere so that eliminates the problem of "Well, it works on my machine." Containers also save resources, much more than virtual machines, which allocates system hardware to it using a hypervisor where as containers share system resources. Containers are very good at scaling as well, very well in fact when paired with Kuberntes or Docker Swarm which are orchestaration tools for Docker. Containers also enable microservices, which are layers of software that fit together. For example, take the Model-View-Presenter pattern. Have one container be the Model, have another be the View and the last container be the Presenter. Have them linked together and you have a program that one has the MVP pattern and two has microservices. How cool is that?

Docker has many different platforms, like GitLab, Wordpress and Rocket.Chat, which all run on Docker. Programming languages can also be run in Docker containers such as Ruby, Python, .NET, Java, Node, Rust, Golang and others so nobody is left out. Also, there are Docker images fro Windows so you Windows lovers out there can have your piece of the cake to with the Linux people.

A few Docker commands must known however.

-- Section for CIT 280 instructor --

My team consisted of four other team members. Our team pulled it together come presentation time. When a problem came up, a team member went on a messesing platform and said what his or her problem was and we either answered or we worked on it together, which was awesome. For example, when a team member did the editing, he asked for the recordingsa week before and said he needed them by the next weekend so he could edit. Well, nobody hesistated and we all submitted our recordings to him by the deadline and the editing went smoothly. Another example was the resources channel, which was a great idea by the server administrator. If anybody had a article or a particular tutorial they wanted to share, they post it in the resources channel which was again a great idea.

How I came up with demonstration was a whole different ballgame. So, I got an outline of the demonstration done by the first meetting and I had the demonstration done by the next weekend and threw it up into GitHub and posted it into the resources channel. For some parts I did not know the answer to, let's say a particular programming question, I would go online and head over to StackOverflow and figure out my question and find my answer. Since I knew Docker beforehand, I had no trouble working with Docker and various commands that go with it.

I felt the presentation went really well and I'm proud of us as a team. Everyone pulled it together throughout the three weeks that we had and it turned out to be a great presentation.

Some things I liked about our presentation was the intermittent assessment which was different from the rest of the presentations and how lively everyone was as it seemed like nobody forgot their coffee that morning which is important if you want to keep the audience engaged.

Some things we could improve on as a team is a proposal is just a proposal and can be changed. Not dissing a certain person at all because he didn't know any better but a slide that shows some real world applications and/or programming languages would been great! Also, I know I didn't benchmark correctly because I got keyboard happy and we should've passed out the visual presentation which was my fault as a teamate and I were having a private discussion over Discord together and I gave the document the green light and I implied that it was going to passed to everybody and that's why you guys saw the confusion on my face when I started my part of the presentation.