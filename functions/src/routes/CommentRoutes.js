const router = require('express').Router();
const CommentModel = require('../models/CommentModel');

//Get comment list
router.get('/', (req, res) =>  {
    CommentModel.getList(function(err,data){
        if(err){
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    });
});

//Create project
router.post('/create', (req, res) => {
    CommentModel.create(req.params, function (err,data) {
        if(err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    })
});

router.get('/like/:projectId', (req, res) => {
    CommentModel.like(req.params.projectId,function(err,data){
        if(err){
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    });
});

router.put('/update/:projectId', (req,res) => {
    CommentModel.update(req.params.projectId, req.params, function (err, data) {
        if(err){
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    })
});

module.exports = router;