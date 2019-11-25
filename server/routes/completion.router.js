const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();


//USES CRON TO POPULATE COMPLETION TABLE

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

    if (day === 2) {
        const queryText = `SELECT "bets"."id" as bets_id, * FROM "bets"
            JOIN "bet_type" ON "bets"."bet_type_id" = "bet_type"."id"
            WHERE "bets"."tuesday" = 'true'
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

    if (day === 3) {
        const queryText = `SELECT "bets"."id" as bets_id, * FROM "bets"
            JOIN "bet_type" ON "bets"."bet_type_id" = "bet_type"."id"
            WHERE "bets"."wednesday" = 'true'
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

    if (day === 4) {
        const queryText = `SELECT "bets"."id" as bets_id, * FROM "bets"
            JOIN "bet_type" ON "bets"."bet_type_id" = "bet_type"."id"
            WHERE "bets"."thursday" = 'true'
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

    if (day === 5) {
        const queryText = `SELECT "bets"."id" as bets_id, * FROM "bets"
            JOIN "bet_type" ON "bets"."bet_type_id" = "bet_type"."id"
            WHERE "bets"."friday" = 'true'
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

    if (day === 6) {
        const queryText = `SELECT "bets"."id" as bets_id, * FROM "bets"
            JOIN "bet_type" ON "bets"."bet_type_id" = "bet_type"."id"
            WHERE "bets"."saturday" = 'true'
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

    if (day === 7) {
        const queryText = `SELECT "bets"."id" as bets_id, * FROM "bets"
            JOIN "bet_type" ON "bets"."bet_type_id" = "bet_type"."id"
            WHERE "bets"."sunday" = 'true'
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


router.put('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = 'UPDATE "completion" SET "status" = $1 WHERE "bets_id" = $2;';
    pool.query(queryText, [req.body.status, req.params.id])
    .then(() => {
        // console.log(req.params.id)
        res.sendStatus(200)
    }).catch(error => {
        console.log('error in put', error)
        res.sendStatus(500)
    })
});


module.exports = router;