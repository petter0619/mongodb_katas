## Intro

This repo contains 29 exercises for practicing basic querying of a MongoDB database via the Mongoose ODM.

## Instructions

Required:

- Node v18.12.1
- Docker Desktop

To get up and running follow these instructions:

1. npm install
2. Add the connection string to your db to /src/config.js (in the exports.connectionString variable)
3. npm run seedPresidentsDb

Your database should now be populated with data about 45 US presdents. Navigate to the /src/exercises directory. Here you'll find 29 exercises. Write a Mongoose/MongoDB query that produces a result according to the comment at the top of each respective file. To check your work just run "npm run exerciseX" where "X" is substituted for the number of the exercise you are on; e.g. "npm run exercise1"

To see the result that the solution produces run "npm run solutionX" where "X" is substituted for the number of the exercise you are on; e.g. "npm run solution1". The code for all solutions can be found under /src/solutions.

If using Docker to spin up a MongoDB database:

1. Start Docker Desktop (if you have mongod running shut it down)
2. docker compose up
