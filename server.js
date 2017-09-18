// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 8000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Helper Functions
const RandomScores = function() {
  var result = []
  for (var i = 0; i < 10; i++) {
    result.push(Math.floor(Math.random()*5) + 1)
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
  {name: "Candyman", photoURL: "app/public/img/candyman.jpg", scores: new RandomScores},
  {name: "Chrome Skull", photoURL: "app/public/img/chrome-skull.jpg", scores: new RandomScores},
  {name: "Chucky", photoURL: "app/public/img/chucky.jpg", scores: new RandomScores},
  {name: "Freddy", photoURL: "app/public/img/freddy.jpg", scores: new RandomScores},
  {name: "Herbert West", photoURL: "app/public/img/herbert-west.jpg", scores: new RandomScores},
  {name: "Jason", photoURL: "app/public/img/jason.jpg", scores: new RandomScores},
  {name: "Jigsaw", photoURL: "app/public/img/jigsaw.jpg", scores: new RandomScores},
  {name: "Patrick Bateman", photoURL: "app/public/img/patrick-bateman.jpg", scores: new RandomScores},
  {name: "Pinhead", photoURL: "app/public/img/pinhead.jpg", scores: new RandomScores},
  {name: "Skeletor", photoURL: "app/public/img/skeletor.jpg", scores: new RandomScores},
  {name: "The Donald", photoURL: "app/public/img/trump.jpg", scores: new RandomScores}
];


// HTML Routes
app.get("/", function(req, res) {
  res.render("index");
});

// API routes
app.get("/:name", function(req, res) {
  // res.render("index", lunches[0]);
});


// Initiate the listener.
app.listen(port, err => {
  console.log(`Active on port ${port}`);
});
