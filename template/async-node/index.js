// Copyright (c) Tommaso De Rossi 2019. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

"use strict"

const express = require('express')
const app = express()
const handler = require('./function/handler');
const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text({ type : "text/*" }));
app.disable('x-powered-by');




const middleware = (req, res) => {
    Promise.resolve({
        body: req.body,
        headers: req.headers,
        method: req.method,
        query: req.query,
        path: req.path,
    })
        .then(handler)
        .then(result => {
            res.set({'Content-Type': 'application/json', ...(result.headers || {})})
            res.status(result.status || 200)
            res.send(JSON.stringify(result.body))
        })
        .catch(e => {
            res.status(500)
            res.send(JSON.stringify({error: String(e)}))
        })
}

app.post('/*', middleware);
app.get('/*', middleware);
app.patch('/*', middleware);
app.put('/*', middleware);
app.delete('/*', middleware);

const port = process.env.http_port || 3000;

app.listen(port, () => {
    console.log(`OpenFaaS Node.js listening on port: ${port}`)
});

