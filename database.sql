
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (1000) NOT NULL,
    "last_name" VARCHAR (1000) NOT NULL,
    "amount_cash" INT
);

INSERT INTO "user" ("username", "password", "first_name", "last_name", "amount_cash")
VALUES ('fgkrieger13', 'password', 'Grant', 'Krieger', '250');

CREATE TABLE "bet_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (80) UNIQUE NOT NULL
);
INSERT INTO "bet_type" ("type")
VALUES ('Wakeup'), ('Workout');

CREATE TABLE "charity" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (80) UNIQUE NOT NULL
);

INSERT INTO "charity" ("type")
VALUES ('ALZ Org'), ('Wounded Warrior'), ('Childrens Hospital');

CREATE TABLE "bets" (
    "id" SERIAL PRIMARY KEY,
    "bet_type_id" INT REFERENCES "bet_type",
    "bet_amount" VARCHAR (1000) NOT NULL,
    "time_select" INT,
    "time_amount" INT,
    "charity_id" INT REFERENCES "charity",
    "sunday" BOOLEAN,
    "monday" BOOLEAN,
    "tuesday" BOOLEAN,
    "wednesday" BOOLEAN,
    "thursday" BOOLEAN,
    "friday" BOOLEAN,
    "saturday" BOOLEAN,
    "user_id" INT REFERENCES "user"
);

INSERT INTO "bets" (
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
    "user_id") VALUES (
        '1',
        '20.00',
        '0',
        '8',
        '1',
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        '1'), (
        '1',
        '10.00',
        '0',
        '6',
        '1',
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        '1'), (
        '2',
        '5.00',
        '60',
        '12',
        '1',
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        '1');