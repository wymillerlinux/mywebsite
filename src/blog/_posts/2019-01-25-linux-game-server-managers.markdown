---
layout: post
title:  "Game Servers Made Easy: Linux Game Server Managers"
published: true
---

I made countless game servers over the years, for my brother and I to play games together, for LAN parties, and other things that would overpower my machine which is also playing the game. Well, if you're like me and you're wanting to scratch that itch of easily updating, installing, monitoring your own game servers, fear no longer, for I found a solution!

Linux Game Server Managers, or [LinuxGSM](https://linuxgsm.com/), is a collection of various game servers that run basically ran in framework and ran the same way as the next. They are ran in a framework (in a sense) and they are well put together, considering they are written in pure Bash shell. Big surprise for me, thinking that these would be written in Python, Ruby, or some other scripting language. 

You can install a number of game servers in their collection, such Counter Strike: Global Offensive, Terraria, Starbound, Quake II/Quake III Arena, Team Fortress 2, Call of Duty, Unreal Tournament 2004/Unreal Tournament 3, Garry's Mod, and tons more, with over 80 game servers in the collection at the time of this writing. Also, you can install some VoIP clients as well, such as Mumble and TeamSpeak, although people would rather use Discord for VoIP. 

Features make a framework with using, and rightfully so, because LinuxGSM is packing a punch with a slew of features, including (almost) hand-free installation, simple updating, intuitive monitoring, alerting (i.e. alerting through Pushbullet, Discord, etc.), debugging (if you have issues with your server), and backups (in case your server takes a dump).

I have tried a few game servers from this collection like CSGO, Terraria, and Starbound. Today, I will demonstrate how one installs the Terraria server, for example, on your machine or on a remote machine. Since the framework is called LinuxGSM, I assume you'll be installing on modern distribution of Linux. Here, I used Ubuntu 18.04 LTS. You can pick that up right [here](https://www.ubuntu.com/download/server) if you're getting started. I also assume you have a Steam account. If you don't, go [get](https://store.steampowered.com/join/) one. You'll need it later.

Once you have your Linux installation all ready to go, you'll have to create a new user with the following command:<br>
`adduser terrariaserver`

You'll have to login with a password, so lets set a password for this user:<br>
`passwd terrariaserver`

Next, you to switch to that user you just added with the following command:<br>
`su - terrariaserver`

Once you've logged in to the new user, `terrariaserver`, you can go ahead and download the installation script:<br>
`wget -O linuxgsm.sh https://linuxgsm.sh && chmod +x linuxgsm.sh && bash linuxgsm.sh terrariaserver`

Next, you have to enter you Steam account details into a configuration file. LinuxGSM downloads the server files from Steam's repository. Here, enter the following command (sorry Dave!):<br>
`nano lgsm/config-lgsm/terrariaserver/common.cfg`

This file might be empty, but you'll go ahead and enter the following, with `username` being your username and `password` being your password:
`steamuser="username"`
`steampass='password'`

Once you've entered that in, go ahead and press Ctrl-X. Nano, the text editor you're using, will prompt you for a overwrite if the file exists. Press the `y` key and you're back to the command line.

All that's left is to install your Terraria server! Go ahead and type the following command to install the Terraria server:
`./terrariaserver install`

If you encounter an error with your installation, the [support](https://linuxgsm.com/support/) page can help you! If your install succeeded, congrats! You just installed a LinuxGSM Terraria server. You can go ahead and start your server with:
`./terrariaserver start`

If you need help with the `terrariaserver` command, just type:
`./terrariaserver help` and the command will output a bunch of commands for you and a brief description of what they do.