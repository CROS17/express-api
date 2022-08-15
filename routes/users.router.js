const express = require('express');
const faker = require("faker");

const router = express.Router();

router.get('/',(req,res)=>{
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('Se esperaban Datos');
  }
})

router.get('/', (req,res ) => {
  res.json({
    id:1,
    name: 'Juan'
  })
})

module.exports = router;
