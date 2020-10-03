'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
const path = require('path');
app.use(cors);
admin.initializeApp();
const db = admin.firestore();

const projectCollection = 'projects';

//Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Get projects list
app.get('/projects', (req, res) => {
    const projectsQuerySnapshot = db.collection('projects').get();
    const projectsList = [];
    projectsQuerySnapshot
        .then((result) => {
            result.forEach((doc) => {
                    projectsList.push({
                        id: doc.id,
                        data: doc.data()
                    });
                }
            );
            return res.status(200).json(projectsList);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
});

//Create project
app.post('/addProject', (req, res) => {
    const projectsQuerySnapshot = db.collection("/projects").add({
        title: "Custom project",
        description: "This is a project added through http"

    })
        .then((doc) => {
            return res.send('The project has id ' + doc.id);
        })
        .catch((error) => {
            return res.status(500).json(error);
        })
});
exports.app = functions.https.onRequest(app);