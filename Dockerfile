# wyattjmiller.com Dockerfile
# Created by Wyatt J. Miller, published by Miller Web Solutions
# Licensed by the MIT
#
# Copying files in the dockerfile is kind of a mess. Actually not really.
# Just remember when linking files in code, follow the method below.

FROM php:7.3.10-apache
# RUN /bin/bash -c "cd /var/www/html && mkdir assets && mkdir css && mkdir img && mkdir webfonts"
COPY src/ /var/www/html
EXPOSE 80
