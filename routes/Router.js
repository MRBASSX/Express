var express = require('express');
var router = express.Router();
const User = require('../models/User');
// let User = [{
//   "id":123,
//   name: "Mr Abass",
//   email: "MrAbass@gmail.com",
//   age: "120"
// }];
// let idCounter = 1;


/* GET Testing page. */
router.get('/', function(req, res, next) {

  const latest = [
    {name:"Sala",
    age:100,
    height:'6ft'

    }
    ,
    {name:"Aziz",
    age:100,
    height:'6ft'

    },
    {name:"Mariam",
    age:100,
    height:'6ft'

    },
    {name:"Ramzi",
    age:100,
    height:'6ft'

    },
    {name:"Eyeson",
    age:100,
    height:'6ft'

    },
     {name:"Acheampong",
    age:100,
    height:'6ft'

    }
   
  ];

  const trending = [
    {name:"Sala",
    age:100,
    height:'6ft'

    }
    ,
    {name:"Aziz",
    age:100,
    height:'6ft'

    },
    {name:"Mariam",
    age:100,
    height:'6ft'

    },
    {name:"Ramzi",
    age:100,
    height:'6ft'

    },
    {name:"Eyeson",
    age:100,
    height:'6ft'

    },
     {name:"Acheampong",
    age:100,
    height:'6ft'

    },
    {name:"Acheampong",
    age:100,
    height:'6ft'

    }
   
  ];

  const likes = "I Like this More";

  console.log(latest)

  res.render('testing',{latest : latest, trending : trending, like : likes,links : trending});
});



























// /* GET home page. */
// router.get('/', async function(req, res, next) {

// // const user = [
// //   {}
// // ]
//  const users = await User.find() ;
 

//  res.render('index', { links: users });
// });

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





// // Managing Session Data

// //////////////////////////
// // 🔹 CREATE - POST
// router.post('/User', (req, res) => {
//   const newUser = {
//     id: idCounter++,
//     name: req.body.name,
//   };
//   User.push(newUser);
//   res.status(201).json(newUser);
// });

// //////////////////////////
// // 🔹 READ - GET All
// router.get('/User', (req, res) => {
//   res.json(User);
// });

// // 🔹 READ - GET by ID
// router.get('/User/:id', (req, res) => {
//   const User = User.find(i => i.id === parseInt(req.params.id));
//   if (!User) return res.status(404).json({ message: 'User not found' });
//   res.json(User);
// });

// //////////////////////////
// // 🔹 UPDATE - PUT
// router.put('/User/:id', (req, res) => {
//   const User = User.find(i => i.id === parseInt(req.params.id));
//   if (!User) return res.status(404).json({ message: 'User not found' });

//   User.name = req.body.name;
//   res.json(User);
// });

// //////////////////////////
// // 🔹 DELETE
// router.delete('/User/:id', (req, res) => {
//   const index = User.findIndex(i => i.id === parseInt(req.params.id));
//   if (index === -1) return res.status(404).json({ message: 'User not found' });

//   const deletedUser = User.splice(index, 1);
//   res.json(deletedUser[0]);
// });

//////////////////////////







// // Managing Database



// //////////////////////////

// // CREATE
// router.post('/', async (req, res) => {
//   try {
//     const User = new User(req.body);
//     const saved = await User.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // READ ALL
// router.get('/', async (req, res) => {
//   try {
//     const User = await User.find();
//     res.json(User);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // READ ONE
// router.get('/:id', async (req, res) => {
//   try {
//     const User = await User.findById(req.params.id);
//     if (!User) return res.status(404).json({ message: 'Not found' });
//     res.json(User);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // UPDATE
// router.put('/:id', async (req, res) => {
//   try {
//     const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // DELETE
// router.delete('/:id', async (req, res) => {
//   try {
//     const deleted = await User.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ message: 'Not found' });
//     res.json(deleted);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// //////////////////////////

module.exports = router;
