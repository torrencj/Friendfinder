// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 8000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static('views/layouts/public'))
app.use(bodyParser.urlencoded({ extended: true }));


//Helper Functions
const random = function(num){
  return Math.floor(Math.random()*num);
}

const RandomScores = function() {
  var result = []
  for (var i = 0; i < 10; i++) {
    result.push(random(5) + 1)
  }
  return result;
}




//Data
var questions = [
  {id: "q1", text:"Your mind is always buzzing with unexplored ideas and plans."},
  {id: "q2", text:"Generally speaking, you rely more on your experience than your imagination."},
  {id: "q3", text:"You find it easy to stay relaxed and focused even when there is some pressure."},
  {id: "q4", text:"You rarely do something just out of sheer curiosity."},
  {id: "q5", text:"People can rarely upset you."},
  {id: "q6", text:"It is often difficult for you to relate to other people’s feelings."},
  {id: "q7", text:"In a discussion, truth should be more important than people’s sensitivities."},
  {id: "q8", text:"You rarely get carried away by fantasies and ideas."},
  {id: "q9", text:"You think that everyone’s views should be respected regardless of whether they are supported by facts or not."},
  {id: "q10", text:"You feel more energetic after spending time with a group of people."},
];

var friends = [
  {name: "Candyman", photoURL: "candyman.jpg", scores: new RandomScores},
  {name: "Chrome Skull", photoURL: "chrome-skull.jpg", scores: new RandomScores},
  {name: "Chucky", photoURL: "chucky.jpg", scores: new RandomScores},
  {name: "Freddy", photoURL: "freddy.jpg", scores: new RandomScores},
  {name: "Herbert West", photoURL: "herbert-west.jpg", scores: new RandomScores},
  {name: "Jason", photoURL: "jason.jpg", scores: new RandomScores},
  {name: "Jigsaw", photoURL: "jigsaw.jpg", scores: new RandomScores},
  {name: "Patrick Bateman", photoURL: "patrick-bateman.jpg", scores: new RandomScores},
  {name: "Pinhead", photoURL: "pinhead.jpg", scores: new RandomScores},
  {name: "Skeletor", photoURL: "skeletor.png", scores: new RandomScores},
  {name: "The Donald", photoURL: "trump.jpg", scores: new RandomScores}
];

// Routes
app.get("/", function(req, res) {
  res.render("quiz", {questions});
});

app.post("/api/friend", function(req,res) {
  res.send(friends[random(10)]);
})


// Initiate the listener.
app.listen(port, err => {
  console.log(`Active on port ${port}`);
});
