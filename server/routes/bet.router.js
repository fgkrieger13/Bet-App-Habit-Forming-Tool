const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * Get all of the bets from db
 */
router.get('/', (req, res) => {
    console.log('i was hit')
 
    const queryText = `SELECT * FROM "bets" ORDER BY "id" DESC;`;

    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
});

module.exports = router;