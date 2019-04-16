---
layout: post
title:  "Racing to the finish line!"
published: true
---

This sprint, oh boy! It was "heads down and squashing bugs" kind of sprint. We, as a team, have a lot accomplished but we not quite done yet, with our importing to our database still needing to happen and some fishing touches have to be added as well. Let's get into it, shall we?

My adventure from picking hardware that will (possibly, it was a 'keep your fingers' kind of moment) work on our hardware that we have already i.e. Raspberry Pi was already pretty tough, I thought. Here I was, just hoping and praying that we will choose the right piece of hardware for the job as our defunct piece of hardware, the GrovePi, didn't work as intended. But Chris, he came in clutch with piecing it all together and fitting the unit into a nice little case as he said he wanted it in a presentable unit. Hats off to Chris for pulling that off! Intentionally, I thought would have to try different code examples until we find the right piece of hardware (because different pieces of hardware require different code) and to my surprise, we finally got some real temperatures! I was pretty excited to see that "piece of the puzzle" come together.

Josiah and Jacob also came in with the website they have been working so hard on. I got the honor and privilege of seeing it today while in a private conversation with Jacob. Apparently, `cron`, the time scheduler on Linux, doesn't automatically fire off a script the pulls down the `master` branch from GitHub at noon every day. I also tried to set Travis CI to deploy automatically when a push is made to the `master` branch but that didn't work either because of the infernal SSH keys. I'll have to find a way to deploy cause I want to be easy on the web guys because they don't know any command line stuff in the first place and it'll take many days to help them learn the command line in the first place. It's not like I'm doing this out of the kindness of my heart or something. Just kidding, you guys are doing great!

Thresa and I are working on a script that will import JSON into the database. We hit a snag in the importing side of things as you have to manually import the UUID in the `Pi` table before you can import the JSON data into the `TempData` table so we are sorting through that right now. That's the last "piece of the puzzle" until we have fully automated project build.

That's all I have as we can see the light at the end of tunnel. Pretty excited to show off what we have thus far. Go check out [the PiBake website](https://thepibake.com) if you haven't already, it's looking pretty damn great.