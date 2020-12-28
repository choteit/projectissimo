'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
const path = require('path');
app.use(cors);
app.use(express.urlencoded({extended:true}));
app.use(express.json());
admin.initializeApp();

const router = require('express').Router();

app.use('/projects', require ('./src/routes/ProjectRoutes'));
app.use('/users', require ('./src/routes/UserRoutes'));
app.use('/comments', require ('./src/routes/CommentRoutes'));

//Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/index.html'));
});


exports.app = functions.https.onRequest(app);