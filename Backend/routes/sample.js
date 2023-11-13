var express = require('express');
var router = express.Router();

router.get('/',(req, res,) =>{
  res.json({ message: 'Hello World' });
  console.log({message});
});

module.exports = router;
