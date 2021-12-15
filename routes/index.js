var express = require('express');
var router = express.Router();
var url = require('url');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api', function(req, res, next) {

  var api = require('../api/controllers/apiController.js');
  var par = url.parse(req.url, true);
  api.endpoint(par.query, res)
 

});

module.exports = router;
