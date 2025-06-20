var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

 const list =[
        {
          href: '/',
          icon: '<svg>...</svg>',
          text: 'Home'
        },
        {
          href: 'collection',
          icon: '<svg>...</svg>',
          text: 'Collection'
        },
        {
          href: 'live',
          icon: '<svg>...</svg>',
          text: 'Live'
        }
      ];

 res.render('index', { links: list });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET About page. */
router.get('/contact', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

module.exports = router;
