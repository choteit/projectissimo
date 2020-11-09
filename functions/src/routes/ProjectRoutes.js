const router = require('express').Router();
const ProjectModel = require('../models/ProjectModel');

//Get projects list
router.get('/', (req, res) =>  {
    const projectList = ProjectModel.getProjectsList()
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
});

//Create project
router.post('/create', (req, res) => {
    const projectsQuerySnapshot = db.collection('projects').add({
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

router.post('/:projectId/like', (req, res) => {
    const increment = admin.firestore.FieldValue.increment(1);
    const projectRef = db.collection('projects').doc(req.params.projectId);
    projectRef.update({
            claps: increment
        }
    ).then((doc) => {
            return res.status(200).json(doc);
        }
    ).catch((error) => {
        return res.status(500).json(error);
    });
});

router.put('/:projectId/update', (req,res) => {
    const projectRef = db.collection('projects').doc(req.params.projectId);
    projectRef.update({
            claps: increment
        }
    ).then((doc) => {
            return res.status(200).json(doc);
        }
    ).catch((error) => {
        return res.status(500).json(error);
    });
});

module.exports = router;