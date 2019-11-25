const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();


//USE CRON TO POPULATE COMPLETION TABLE
  
const CronJob = require('../../node_modules/cron/lib/cron').CronJob;

console.log('Before job instantiation');
const job = new CronJob('00 18 10 * * *', function() {
    const d = new Date();
    let day = d.getDay();
    console.log('Midnight:', day);
    // if (req.body.sunday = true && d === 1){
    //     return router.post('/', rejectUnauthenticated, (req, res) => {})
    // }
    if (day === 1){
        return router.post('/', (req, res) => {
            const queryText = `INSERT INTO "completion" (
                "bets_id",
                "status",
              ) VALUES ($1, $2);
                `
            const queryValues = [
                bets_id = req.body.bets_id,
                status = false,
            ]

            pool.query(queryText, queryValues)
        .then(result => {
            res.sendStatus(200)
        }).catch(error => {
            console.log('error in completion post', error)
            res.sendStatus(500)
        })

        })
    }
    // if (req.body.tuesday = true && d === 2){
    //     return router.post('/', rejectUnauthenticated, (req, res) => {
    //     })
    // }
});
console.log('After job instantiation');
job.start();


module.exports = router;