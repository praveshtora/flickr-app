const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 5000 ;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/hello', (req, res, next) => res.status(200).send({express: 'Hello from Lynit'}));

app.listen(port,() => console.log(`Listening on ${port}`));

