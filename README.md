# User API

Consider a simple Users Management API written using FASTIFY framework. This API expose the following routes:

- `POST /api/user`: create a new user
- `DELETE /api/user/:id`: delete an user from given ID
- `GET /api/user/:id`: get a user from an ID
- `GET /api/user/all`: get all the users ordered by `fullName`

The schema of an user is the following:

- `_id`: the MongoDB ObjectId
- `fullName`: a string that represent the name and surname of the user. This string cannot be longer than 100 characters
- `email`: the email. This string cannot be longer than 150 characters

In case of error codes (eg. 400, 404, 500) a route should return an object with the following schema:

- `message`: a String that represent the problem occurred (eg. `{ message: "User not found" }`)

Imagine that you have a fastify application, already configured with `fastify-mongodb` plugin and fluent-schema. Now what we need is that you complete the module below with the code needed for each route.

In particular, we need every defined route to be:

- Validated with `fluent-schema` in order to validate the input, and serialize, the output
- Completed with the missing code

## Project Source Code

You can DOWNLOAD a starter project from here.

Remember to run `npm run mongo` before you start and then:

- `npm install`
- `npm run dev`

to run your base code locally. When you've finished cut and paste the `users.js` file in the text area below!
