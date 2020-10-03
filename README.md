## Pizzatracker-app - A MERN Stack App using Docker

### Prerequisites:

You must have Docker Installed in your System !

### How to run the App :

##### In Development Mode :

First copy the content of **docker-compose-dev.yml** to **docker-compose.yml**

Run the app using :

`$ docker-compose up --build -remove-orphans`

The App should be App :

visit client : http://localhost:3000

visit server : http://localhost:8080

To check the status :

`docker-compose ps`

##### In Production Mode :

First copy the content of **docker-compose-prod.yml** to **docker-compose.yml**

Run the app using :

` $ docker-compose up --build -remove-orphans`

The App should be up at http://localhost:8080
