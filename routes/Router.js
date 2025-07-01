var express = require('express');
var router = express.Router();
const Users = require("../models/userModel")








/* GET index page. */
router.get('/', async function(req, res, next) {

  const users =  await Users.find();
  res.send(users);
  res.json([{}])




  video = "Sporst replay......................";

  res.render('index',{video:video});
});



/* GET page1 page. */
router.get('/news', function(req, res, next) {

  video = "Sporst replay";

  res.render('news',{video:video});
});
/* GET page2 page. */
router.get('/scores', function(req, res, next) {

  video = "Sporst replay";

  res.render('scores',{video:video});
});
/* GET page3 page. */
router.get('/teams', function(req, res, next) {

  video = "Sporst replay";

  res.render('teams',{video:video});
});
/* GET page4 page. */
router.get('/contact', function(req, res, next) {

  video = "Sporst replay";

  res.render('contact',{video:video});
});
/* GET page5 page. */
router.get('/page5', function(req, res, next) {

  video = "Sporst replay";

  res.render('page5',{video:video});
});



























/* GET home page. */
router.get('/', async function(req, res, next) {

// const user = [
//   {}
// ]
 const users = await User.find() ;
 

 res.render('index', { links: users });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET About page. */
router.get('/contact', function(req, res, next) {
  res.render('about', { title: 'Express' });
});






// Managing Database

//////////////////////////
// Create user
router.post('/users', async (req, res) => {

  try {
    const user = new User(req.body);
    await user.save();
    // res.status(201).send(user);
    res.redirect("/")

  } catch (err) {

    res.status(400).send(err);
  }
});


// Get all users
router.get('/users', async (req, res) => {
try {

    const User = await User.find();
      res.json(User);
    res.send(users);
  
} catch (error) {
  
  res.send(error)
}
});


// Get Single user
router.get('/users/:id', async (req, res) => {

  try {
    const users = await User.findById(req.params.id);

  res.send(users);
    
  } catch (error) {
   
     res.send(error);
  }
});


//////////////////////////




module.exports = router;
