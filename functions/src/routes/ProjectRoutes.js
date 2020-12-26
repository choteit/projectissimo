const router = require('express').Router();
const Promise = require('promise');
const ProjectModel = require('../models/ProjectModel');

//Get projects list
router.get('/', (req, res) =>  {
    ProjectModel.getList(function(err,data){
        if(err){
           return res.status(500).json(err);
       }
       return res.status(200).json(data);
    });
});

//Create project
router.post('/create', (req, res) => {
    ProjectModel.create(req.params, function (err,data) {
        if(err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    })
});

router.get('/like/:projectId', (req, res) => {
    ProjectModel.like(req.params.projectId,function(err,data){
        if(err){
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    });
});

router.put('/update/:projectId', (req,res) => {
    ProjectModel.update(req.params.projectId, req.params, function (err, data) {
        if(err){
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    })
});

module.exports = router;