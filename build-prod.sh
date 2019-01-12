# Script written by Wyatt J. Miller
# Licensed by the MIT
# Very generic build script for my website
# Used in production ONLY!
#
# Must be used in the site's root directory

cd ..
docker-compose down
docker image rm -f wyattjmiller.com
cd mywebsite
git pull
cd src/blog
bundle update
jekyll build
cd ../..
docker build -t wyattjmiller.com .
cd ..
docker-compose up -d
