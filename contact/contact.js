const express = require('express');
const router = express.Router();
const User=require("../model/contactmodel")

router.post('/contactinfo',async (req,res)=>{
    try
    {
    user = await User.create
    ({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    })
    res.json(user)
  }
    catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
})

module.exports = router;