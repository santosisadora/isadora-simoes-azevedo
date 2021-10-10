var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ISA' });
});

// GET: //about
router.get('/about', function(req, res, next) {
  res.render('about',{
    title: 'About me',
    content: 'A little bit about me'});
});

module.exports = router;
