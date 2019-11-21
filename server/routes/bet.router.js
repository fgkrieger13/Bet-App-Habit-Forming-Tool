const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * Get all of the bets from db
 */
router.get('/', rejectUnauthenticated, (req, res) => {
 
    const queryText = `SELECT "bets"."id" as bets_id, * FROM "bets"
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

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.params.id)
    const queryText = 'DELETE FROM "bets" WHERE "id" = $1;';
    pool.query(queryText, [req.params.id])
    .then(() => {
        res.sendStatus(200)
    }).catch(error => {
        console.log('error in delete', error)
        res.sendStatus(500)
    })
});

module.exports = router;