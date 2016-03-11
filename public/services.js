'use strict'

// Extending the flashcard App
var flashcardApp = angular.module("flashcardApp")

// Extend the app with FlashcardService
// This service interacts with the backend for data
flashcardApp.service("FlashcardService", function($http) { // a Singleton
  this.fetch = function() { // Returns the promise
    return $http.get('/flashcards')
  }

  this.create = function(newFlashcard) {
    return $http.post('/flashcards', newFlashcard) // No need for localhost
  }

  this.update = function(flashcard) {
    console.log('updatesObj should be here');
    return $http.put("/flashcards/" + flashcard.id)
  }

  this.remove = function(flashcard) {
    return $http.delete("/flashcards/" + flashcard.id)
  }
})
