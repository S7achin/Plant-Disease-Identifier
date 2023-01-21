const express = require("express");
const path = require("path");
const bodyparser = require("body-parser")
const mongoose = require('mongoose');
const app = express();
const port = 80;

// Connect with DB
const DB = "mongodb+srv://sp68:Sachin68@cluster0.krvu6dd.mongodb.net/Registration?retryWrites=true&w=majority";
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected with DB");
}).catch((err) => console.log("Not Connected", err));

const contactSchema = new mongoose.Schema({
  username: {
    type:String,
    required:true
  },
  no: {
    type:String,
    required:true,
    unique:true
  },
  password: {
    type:String,
    required:true
  }
  ,
  cpassword: {
    type:String,
    required:true
  }
});
const Contact = mongoose.model('User', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
  const params = {}
  res.status(200).render('index.pug', params);
})
app.get('/login', (req, res) => {
  const params = {}
  res.status(200).render('login.pug', params);
})
app.get('/register', (req, res) => {
  const params = {}
  res.status(200).render('register.pug', params);
})
// app.get('/home', (req, res) => {
//   const params = {}
//   res.status(200).render('home.pug', params);
// })


app.post('/register', async(req, res) => {
  try {
    var myData = new Contact(req.body);
    console.log(myData);
    if(myData.password === myData.cpassword){
      myData.save().then(() => {
          res.send("Registration Successfully Completed")
        })
    }
    else{
      //  alert("Password does not match plzz enter accurately")
      res.write("<script language='javascript'>alert('password mismatched plzz enter correctly');</script>");
      // res.render('register.pug')
    }
  } catch (error) {
    res.status(404).send("Registration Unsuccessfull !!")
    console.log(error)

  }
})


// login check
app.post('/login', async(req, res) => {
  try {
      const username = req.body.username;
      const password = req.body.password;
      // console.log(`${username} and password is ${password}`);

      const uservalue = await Contact.findOne({username:username});
      if(uservalue.password === password){
        res.status(201).render("home.pug");
        // res.redirect('/home')
      }else{
        res.send("Invalid Login Credentials!!!");
      }

  } catch (error) {
      res.status(400).send("Invalid Login Credentials!!");
      console.log(error)
      
  }
})


// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});