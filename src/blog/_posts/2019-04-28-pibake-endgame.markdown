---
layout: post
title:  "PiBake: Endgame"
published: true
---

In the spirit of Avengers: Endgame coming two days after this blog post, I thought I should homage to it's titular name. I haven't seen Endgame yet so if you see me and you have seen Endgame, please, do not spoil it for me.

Anywho, we are done, apparently. And so is this blog post.

Just kidding. We wrapped up little pieces of the project here and there and we also figured out how to insert the data sent from one of our units to the database which is the thing I'm going to talk about today. 

Our initial thought was to have Thresa write a stored procedure to insert the data into the database once the data was passed from the server. This was unfortunately a slower fail than we would have liked. In the hunt for information for building this stored procedure, much of the information related to using the JSON data type which is a relatively new feature to MySQL. This route was avoided for fear this would create issues elsewhere in the project as it would affect multiple areas. With multiple attempts this was simply not working and the complexity was beyond our level of expertise. We did not know it at the time but even if this had been worked out, we would have run into more issues with the change of our primary key further into the project.

It was at this point that Wyatt and Jacob announced that they had solved the issue with the PHP script. In that script, they used a row checker to see if the row had any data against any data we had, namely the UUID in question. If not, we would run one query with a conditional mentioned above in one table. Then, the other query which just inserted data was ran in a different table, regardless of the conditional was met or not.

For me in particular, I was documenting code for "the software." It was pretty easy given that I've documented my own Python projects before. All documentation needs are string surrounded by three single quotes. So I don't get carpal tunnel, I wrote a Bash script to generate HTML pages using `pydoc` which is really nice. 