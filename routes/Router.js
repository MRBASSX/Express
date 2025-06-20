var express = require('express');
var router = express.Router();
const User = require('../models/User');

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


// Create user
router.post('/users/create', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});


// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});


// Get user
router.get('/users/:id', async (req, res) => {
  const users = await User.params.id.find();
  res.send(users);
});
module.exports = router;
