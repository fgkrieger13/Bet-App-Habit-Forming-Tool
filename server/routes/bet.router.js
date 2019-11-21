const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * Get all of the bets from db
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('i was hit')
 
    const queryText = `SELECT * FROM "bets"
    JOIN "bet_type" ON "bets"."bet_type_id" = "bet_type"."id"
    WHERE "bets"."user_id" = $1
    ORDER BY "bets"."id" DESC
    ;`;

    pool.query(queryText, [req.user.id])
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
});

module.exports = router;