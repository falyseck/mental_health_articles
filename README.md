Mental Health Articles App
This is a simple web application that allows users to search for mental health-related articles using a search bar. The app fetches articles from an external API (Gnews) and displays them in a user-friendly interface.

Features
-Search for articles about mental health by entering a keyword.
-Dynamically display articles with titles, descriptions, and links to full content.
-Clean and responsive user interface.

Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: None (Client-side API requests)
API: Gnews

Deployment:

I deployed the app on both of my web servers by creating a new directory /var/www/html/mental_health_app, and coping the files in my both servers.
They can be access through http://my_ip/mental_health_app
I was able to make it accessible through my load balancer too, by editing the nginx configuartion file (/etc/nginx/sites-available/default). 

As my mission is to raise awereness about mental health and destigmatize open conversations about it, this project makes sense to my current goal and mission. And it is useful to people who yearn to learn more about mental health. 

link to my api documentation: https://gnews.io/docs/v4#introduction

video demo: https://youtu.be/rtKz3jOPJOc

