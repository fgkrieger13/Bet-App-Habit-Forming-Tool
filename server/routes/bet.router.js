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

//USE CRON TO POPULATE COMPLETION TABLE

router.post('/', rejectUnauthenticated, (req, res) => {
    const queryText = `INSERT INTO "bets" (
        "bet_type_id",
        "bet_amount",
        "time_select",
        "time_amount",
        "charity_id",
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);
        `
    const queryValues = [
            bet_type= req.body.bet_type,
            bet_amount= req.body.bet_amount,
            time_select= req.body.time_select,
            time_amount= req.body.time_amount,
            charity= req.body.charity,
            sunday= req.body.sunday,
            monday= req.body.monday,
            tuesday= req.body.tuesday,
            wednesday= req.body.wednesday,
            thursday= req.body.thursday,
            friday= req.body.friday,
            saturday= req.body.saturday,
            user_id= req.user.id,
    ]
    pool.query(queryText, queryValues)
        .then(result => {
            res.sendStatus(200)
        }).catch(error => {
            console.log('error in post', error)
            res.sendStatus(500)
        })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    // console.log(req.params.id)
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