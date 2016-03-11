'use strict';

var fs = require('fs');
var path = require('path');
var uuid = require('uuid');

// This is the Model which provides a low-level API to the backend data
var flashcardsFilepath = path.join(__dirname, '../data/flashcards.json');

exports.get = function(cb) {
  fs.readFile(flashcardsFilepath, function(err, data) {
    if (err) {
      return cb(err)
    } else {
      var flashcards = JSON.parse(data)
      cb(null, flashcards)
    }
  })
}

exports.create = function(newflashcard, callback) {
  this.get((err, flashcards) => {
    if (err) {
      return cb(err)
    } else {
      newflashcard.id = uuid()
      flashcards.push(newflashcard)
      this.write(flashcards, callback(newflashcard))
    }
  })
}

exports.write = function(flashcards, cb) {
  fs.writeFile(flashcardsFilepath, JSON.stringify(flashcards), cb)
}

exports.delete = function(id, cb) {
  this.get( (err, flashcards) => {

    var length = flashcards.length;

    flashcards = flashcards.filter(function(flashcard) {
      return flashcard.id !== id
    })

    if (length === flashcards.length) {
      cb("flashcard not found.")
      return
    }

    this.write(flashcards, cb)
  })
}


exports.update = function(id, updatesObj, cb) {
  // find the flashcard with the given id
  // update that flashcard with the object
  // save the modified flashcards array to db
  // cb with updated flashcard

  this.get( (err, flashcards) => {
    var updatedflashcard

    flashcards = flashcards.map(function(flashcard) {
      if (flashcard.id === id) {
        // Transfer updated fields
        for(var key in updatesObj) {
          flashcard[key] = updatesObj[key];
        }
        updatedflashcard = flashcard;
      }
      return flashcard
    })

    if (!updatedflashcard) {
      cb("Flashcard not found.")
      return
    }

    this.write(flashcards, function(err) {
      cb(err, updatedflashcard)
    })
  })
}
