const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();


//USES CRON TO POPULATE COMPLETION TABLE

const CronJob = require('../../node_modules/cron/lib/cron').CronJob;

console.log('Before job instantiation');
const job = new CronJob('00 23 09 * * *', function () {
    const d = new Date();
    let day = d.getDay();
    console.log('Midnight:', day);

    if (day === 1) {
        const queryText = `SELECT "bets"."id" as bets_id, * FROM "bets"
            JOIN "bet_type" ON "bets"."bet_type_id" = "bet_type"."id"
            JOIN "user" ON "bets"."user_id" = "user"."id"
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
            JOIN "user" ON "bets"."user_id" = "user"."id"
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
            JOIN "user" ON "bets"."user_id" = "user"."id"
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
            JOIN "user" ON "bets"."user_id" = "user"."id"
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
            JOIN "user" ON "bets"."user_id" = "user"."id"
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
            JOIN "user" ON "bets"."user_id" = "user"."id"
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
            JOIN "user" ON "bets"."user_id" = "user"."id"
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

router.get('/', rejectUnauthenticated, (req, res) => {
 
    const queryText = `SELECT "completion"."id" as completion_id, * FROM "completion"
    JOIN "bets" ON "completion"."bets_id" = "bets"."id"
    JOIN "bet_type" ON "bets"."bet_type_id" = "bet_type"."id"
    WHERE "bets"."user_id" = $1
    ORDER BY "time" DESC
    ;`;
    pool.query(queryText, [req.user.id])
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
});

console.log('Before job 2 instantiation');
const jobTwo = new CronJob('00 02 00 * * *', function () {

const queryText = `SELECT "bets_id", "user_id" FROM "completion"
JOIN "bets" ON "bets"."id" = "completion"."bets_id"
JOIN "user" ON "bets"."user_id" = "user"."id"
WHERE (CAST("time" AS DATE) = CURRENT_DATE - 1) AND "status" = 'false' AND "bet_type_id" = '2';`
pool.query(queryText)
.then((result) => {
    console.log(result.rows)
    for(status of result.rows){
        const queryTextTwo = ` UPDATE "user"
        SET "amount_cash" = ("amount_cash" - (SELECT CAST("bet_amount" AS DOUBLE PRECISION) 
        FROM "bets" 
        WHERE "bets"."id" = $1)) 
        WHERE "user"."id" = $2;`

        pool.query(queryTextTwo, [status.bets_id, status.user_id])
        .then(result => {
        
        }).catch(error => {
            console.log('error in completion post', error)
        })
    }
}).catch(error => {
    console.log('error in completion GET', error)
})

});

console.log('After job 2 instantiation');
jobTwo.start();


console.log('Before job 3 instantiation');
const jobThree = new CronJob('00 00 07 * * *', function () {

const queryText = `SELECT "bets_id", "user_id" FROM "completion"
JOIN "bets" ON "bets"."id" = "completion"."bets_id"
JOIN "user" ON "bets"."user_id" = "user"."id"
WHERE (CAST("time" AS DATE) = CURRENT_DATE - 1) AND "status" = 'false' AND "bet_type_id" = '1';`
pool.query(queryText)
.then((result) => {
    console.log(result.rows)
    for(status of result.rows){
        const queryTextTwo = ` UPDATE "user"
        SET "amount_cash" = ("amount_cash" - (SELECT CAST("bet_amount" AS DOUBLE PRECISION) 
        FROM "bets" 
        WHERE "bets"."id" = $1)) 
        WHERE "user"."id" = $2;`

        pool.query(queryTextTwo, [status.bets_id, status.user_id])
        .then(result => {
        
        }).catch(error => {
            console.log('error in completion post', error)
        })
    }
}).catch(error => {
    console.log('error in completion GET', error)
})

});

console.log('After job 3 instantiation');
jobThree.start();

module.exports = router;