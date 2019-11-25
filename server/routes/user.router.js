const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log(req.params.id)
  const queryText = 'UPDATE "user" SET "amount_cash" = ("amount_cash" + 1) WHERE "user"."id" = $1;';
  pool.query(queryText, [req.params.id])
  .then(() => {
      // console.log(req.params.id)
      res.sendStatus(200)
  }).catch(error => {
      console.log('error in put', error)
      res.sendStatus(500)
  })
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const accountAmount = req.body.accountAmount;

  const queryText = 'INSERT INTO "user" (username, password, first_name, last_name, amount_cash) VALUES ($1, $2, $3, $4, $5) RETURNING id';
  pool.query(queryText, [username, password, firstName, lastName, accountAmount])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
