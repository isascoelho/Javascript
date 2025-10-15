var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Você está na rota de produtos!');
});

module.exports = router;