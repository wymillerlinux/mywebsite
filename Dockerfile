# wyattjmiller.com Dockerfile
# Created by Wyatt J. Miller, published by Entourage Solutions
# Licensed by the MIT
#
# Copying files in the dockerfile is kind of a mess. Actually not really.
# Just remember when linking files, follow the method below.
FROM php:7.0-apache
COPY src/ /var/www/html
COPY img/ /var/www/html/img
COPY css/ /var/www/html/css
COPY webfonts/ /var/www/html/webfonts
COPY assets/ /var/www/html/assets
EXPOSE 80
