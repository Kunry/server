const express = require('express');
const router  = express.Router();
const User = require('../models/User');


/* GET home page */
router.post('/', (req, res, next) => {
  console.log(req.body)
  User.findOneAndUpdate({username:req.body.username}, req.body, {new:true})
  .then(user => {console.log(user);res.status(200).json(user)})
  .catch(err => res.status(500).json({msg:"Error"}))
});

module.exports = router;
