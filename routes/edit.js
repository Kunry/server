const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', (req, res, next) => {
    console.log(req.body.age)
    const {username, age} = req.body;
    User.findOneAndUpdate(username, age, {new:true})
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({msg:"Error"}))
  });

  module.exports = router