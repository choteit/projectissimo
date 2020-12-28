const router = require('express').Router();
const UserModel = require('../models/UserModel');

//Get users list
router.get('/', (req, res) =>  {
    UserModel.getList(function(err,data){
        if(err){
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    });
});

//Create user
router.post('/create', (req, res) => {
    UserModel.create(req.params, function (err,data) {
        if(err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    })
});

router.put('/update/:userId', (req,res) => {
    UserModel.update(req.params.userId, req.params, function (err, data) {
        if(err){
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    })
});

module.exports = router;