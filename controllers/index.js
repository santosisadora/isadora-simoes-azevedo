var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ISA' });
});

// GET: //about
router.get('/about', function(req, res, next) {
  res.render('about',{
    title: 'Hello, world!',
    content: 'I\'m Isadora.'});
});

// GET: //projects
router.get('/projects', function(req, res, next) {
  res.render('projects',{
    title: 'Projects',
    content:'Check out some of my projects:'});
});


// GET: //contactme
router.get('/contactme', function(req, res, next) {
  res.render('contactme',{
    title: 'Contact me'});
});


module.exports = router;
