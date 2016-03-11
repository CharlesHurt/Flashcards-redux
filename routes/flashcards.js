'use strict'

var express = require('express')
var path = require('path')

// Routes field requests from the front-end code
// and invoke methods on the model to get the
// requested data
var Flashcard = require('../models/flashcard')

var router = express.Router()
var INDEX_HTML = path.join(__dirname, 'index.html')
path.resolve(__dirname, 'public', 'index.html')

router.get('/', function(req, res, next) {
  res.sendFile(INDEX_HTML)
})

router.get('/flashcards', function(req, res) {
  Flashcard.get(function(err, flashcards) {
    if (err) {
      res.status(400)
      res.send(err)
    } else {
      res.send(flashcards)
    }
  })
})

router.get('/flashcards/:id', function(req, res) {
  var id = req.params.id
  Flashcard.get(function(err, flashcards) {
    if (err) {
      res.status(400)
      res.send(err)
      return
    }

    var flashcard = flashcards.find(function(obj) {
      return obj.id === id
    })

    if (!flashcard) {
      res.status(404)
      res.send("Flashcard not found")
      return
    }
    res.send(flashcard)
  })
})

router.post('/flashcards', function(req, res) {
  var newFlashcard = req.body
  Flashcard.create(newFlashcard, function(err) {
    if (err) {
      res.status(400)
      res.send(err)
    } else {
      res.send()
    }
  })
})

router.delete('/flashcards/:id', function(req, res) {
  var id = req.params.id
  Flashcard.delete(id, function(err) {
    if (err) {
      res.status(400)
      res.send(err)
    } else {
      res.send()
    }
  })
})

router.put('/flashcards/:id', function(req, res) {
  var id = req.params.id
  var updatesObj = req.body
  Flashcard.update(id, updatesObj, function(err, updatedFlashcard) {
    if (err) {
      res.status(400)
      res.send(err)
    } else {
      res.send(updatedFlashcard)
    }
  })
})

module.exports = router
