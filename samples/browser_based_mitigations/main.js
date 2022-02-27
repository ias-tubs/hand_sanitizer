const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");


var app = express();

async function main() {
    app.disable('x-powered-by')
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/static", express.static(__dirname + "/static"))
    app.set("view engine", "ejs");

    app.get("/", async function(req, res) {

        return res.render("index" );
    });
    app.get("/sanitizer", async function(req, res) {

        return res.render("sanitizer_api");
    });
    app.get("/tt", async function(req, res) {
        res.append('Content-Security-Policy', "require-trusted-types-for 'script';");
        return res.render("trusted_types");
    });

    app.use(function(req, res, next){
        return res.status(404).send("This page does not exist.");
    });

    app.listen(8000, "127.0.0.1");
}
main();
