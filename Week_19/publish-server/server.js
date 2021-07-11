let http = require("http");
let https = require("https");
let fs = require("fs");
let unzipper = require("unzipper");
let querystring = require("querystring");

// 2. auth route: to recieve code, and use code, client_id, client_secret to get token

function auth(request, response) {
    let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
    console.log(query);
    getToken(query.code, function(info) {
        console.log(info);
        response.write(`<a href='http://localhost:8083/?token=${info.access_token}'>publish</a>`);
        response.end();
    });
}

function getToken(code, callback) {
    let request = https.request({
        hostname: "github.com",
        path: `/login/oauth/access_token?code=${code}&client_id=Iv1.dab69dc423694614&client_secret=d3c625ab6332df964a09398acd2fe81bbd0096d0`,
        port: 443,
        method: "POST"
    }, function(response) {
        let body = "";
        response.on("data", chunk => {
            body += chunk.toString();
        });
        respose.on("end", chunk => {
            callback(querystring.parse(body));
        });
        //console.log(response);
    });
    request.end();
}

// 4. Publish route: use token to get user information and check permission, and start to publish

function publish(request, response) {
    let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);

    getUser(query.token, info => {
        if(info.login === "Ptrstudy") {
            request.pipe(unzipper.Extract({ path: "../server/public/"}));
            request.on("end", function() {
                response.end("success!");
            });
        }
    });
}

function getUser(token, callback) {
    let request = https.request({
        hostname: "api.github.com",
        path: `/user`,
        port: 443,
        method: "GET",
        headers: {
            Authorization: `token ${token}`,
            "User-Agent": "Toy Publish"
        }
    }, function(response) {
        let body = "";
        response.on("data", chunk => {
            body += chunk.toString();
        });
        response.on("end", chunk => {
            console.log(body);
            callback(JSON.parse(body));
        });
    });
    request.end();
}

http.createServer(function(request, respose) {
    if(request.url.match(/^\/auth\?/)) {
        return auth(request, respose);
    }
    if(request.url.match(/^\/publish\?/)) {
        return publish(request, respose);
    }
    console.log("request");
    
}).listen(8082);