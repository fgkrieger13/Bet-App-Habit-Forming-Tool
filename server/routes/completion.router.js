const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();


//USE CRON TO POPULATE COMPLETION TABLE

const CronJob = require('../../node_modules/cron/lib/cron').CronJob;

console.log('Before job instantiation');
const job = new CronJob('00 01 00 * * *', function () {
    const d = new Date();
    let day = d.getDay();
    console.log('Midnight:', day);

    if (day === 1) {
        const queryText = `SELECT "bets"."id" as bets_id, * FROM "bets"
            JOIN "bet_type" ON "bets"."bet_type_id" = "bet_type"."id"
            WHERE "bets"."monday" = 'true'
            ORDER BY "bets"."id" DESC
            ;`

        pool.query(queryText)
            .then(result => {
                console.log(result.rows)
                for (bet of result.rows) {
                const queryTextTwo = `INSERT INTO "completion" ("bets_id", "status", "time") 
            VALUES ($1, $2, $3)`

                pool.query(queryTextTwo, [bet.bets_id, false, d])
                    .then(result => {
                        console.log(result.rows)
                    
                    }).catch(error => {
                        console.log('error in completion post', error)
                    })
                }
            }).catch(error => {
                console.log('error in completion post', error)
            })

    }
});

console.log('After job instantiation');
job.start();


module.exports = router;