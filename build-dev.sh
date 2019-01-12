# Script written by Wyatt J. Miller
# Licensed by the MIT License
# Very generic build script for my website
# Automation so I don't get carpal tunnel lol
# Used for development 
#
# Must be used in the site's root directory

cd src/blog
bundle update
jekyll build
cd ../..
sudo docker build -t mywebsite .
sudo docker run -v /home/wyatt/Source/mywebsite/src/:/var/www/html -p 80:80 mywebsite