var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const platos = ['milanesa', 'helado', 'empanadas']
  const movies = [
  {
    id: 1,
    title: "Iron Man",
    director: "Jon Favreau",
    length: 126,
    rating: 7.9,
    language: "English"
  },
  {
    id: 2,
    title: "The Avengers",
    director: "Joss Whedon",
    length: 143,
    rating: 8.0,
    language: "English"
  },
  {
    id: 3,
    title: "Black Panther",
    director: "Ryan Coogler",
    length: 134,
    rating: 7.3,
    language: "English"
  },
  {
    id: 4,
    title: "Guardians of the Galaxy",
    director: "James Gunn",
    length: 121,
    rating: 8.0,
    language: "English"
  },
  {
    id: 5,
    title: "Doctor Strange",
    director: "Scott Derrickson",
    length: 115,
    rating: 7.5,
    language: "English"
  }
];

  res.render('index.ejs', { title: 'Restaurant', platoPreferido: 'Milanesa' , platos: platos, movies});
});

module.exports = router;
