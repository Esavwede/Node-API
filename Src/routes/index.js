var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  throw new Error('Intentional Error ')
  res.render('index', { title: 'Express' });
});

module.exports = router;
