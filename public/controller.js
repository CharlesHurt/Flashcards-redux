'use strict'

var flashcardApp = angular.module("flashcardApp", [])

flashcardApp.controller("flashcardController", function($scope, FlashcardService) {

  $scope.newFlashcard = {}
  $scope.newFlashcard.question
  $scope.newFlashcard.answer

  $scope.updateFlashcard = null


  $scope.getCards = function() {
    FlashcardService.fetch()
    .then(function(res) {
      $scope.flashcards = res.data
    }, function(err) {
      console.log(err);
    })
  }

  $scope.flashcards = $scope.getCards()

  $scope.cancelUpdateCard = function() {
    $scope.updateFlashcard = null
  }


  $scope.updateCard = function() {
    $scope.updateFlashcard = null
    console.log('Wish driven delelopment is cool');
  }

  $scope.addCard = function() {
    //console.log($scope.newFlashcard.question.length + ' is length');
    if ($scope.newFlashcard.question === '') {
      // Set focus
      return
    }
    if ($scope.newFlashcard.answer === '') {
      // Set focus
      return
    }

    FlashcardService.create($scope.newFlashcard)
    .then(function(res) {
      $scope.flashcards.push(res.data)
      $scope.newFlashcard = {}
    }, function(err) {
      console.log(err);
    })
  }

  $scope.showUpdateCard = function(flashcard) {
    $scope.updateFlashcard = {}
    $scope.updateFlashcard.question = flashcard.question
    $scope.updateFlashcard.answer = flashcard.answer
    $scope.updateFlashcard.id = flashcard.id


     return

    if ($scope.updateFlashcard.question === '') {
      // Set focus
      return
    }
    if ($scope.updateFlashcard.answer === '') {
      // Set focus
      return
    }

    FlashcardService.update($scope.updateFlashcard)
    .then(function(res) {
      console.log('Enter updated card into flashcards here');
      //$scope.flashcards.push(res.data)
    }, function(err) {
      console.log(err);
    })
  }

  $scope.deleteCard = function(id) {
    swal({ "title": "<small>NOTICE</small>!",
    "text":
    "<span style='color:#F8BB86'>This card is permanently deleted!<span>",   "html": true });
    FlashcardService.remove(id)
    .then(function(res) {
      $scope.flashcards = $scope.flashcards.filter( function(cur) {
        return cur.id !== id
      })
      $scope.updateFlashcard = null
    }, function(err) {
      console.log(err);
    })
  }

  $scope.initData = [
    {"Q" : "EMMET: Numbering?", "A": "# or is it $?"},
    {"Q" : "MAC: Three finger salute?", "A" : "Option Cmd Esc"},
    {"Q" : "EMMET: Can parens be used?", "A": "Yes"},
    {"Q" : "EDITOR: Move line up and down?", "A": "Control Cmd"},
    {"Q" : "EDITOR: Instant commenting", "A": "Command /"},
    {"Q" : "MAC: Move to other desktop?", "A": "Three finger swish left/right"},
    {"Q" : "CSS/JQUERY: What is h1:nth-child(2)?", "A": "the h1 that is the second"},
    {"Q" : "EMMET: How to insert innerHTML in an element?", "A": "div{this is inside text"},
    {"Q" : "EMMET: How to go up one level?", "A": "div>p^a // Go up one level"},
    {"Q" : "EMMET: How to make peers?", "A": "p + div // These are peers"},
    {"Q" : "EMMET: How to use parens?", "A": "(ul>.classNameForLI)*5"},
    {"Q" : "EMMET:How to Select a line?", "A": "Cmd L (repeat)"},
    {"Q" : "EMMET:Bring lines together?", "A": "Cmd J"},
    {"Q" : "EMMET:How to Delete a line?", "A": "Shift Control K"},
    {"Q" : "EMMET:Comment code a line?", "A": "Cmd /"},
    {"Q" : "MAC: Hot key for Grab?", "A": "Shift Cmd + 3  // Goes to DESKTOP"},
    {"Q" : "MAC: Hot key for Select Grab?", "A": "Shift Cmd + 4  // Goes to DESKTOP"},
    {"Q" : "EMMET:Multi-cursor how?", "A": "Cmd AND Click"},
    {"Q" : "EMMET: Duplicate line?", "A": "Shift Cmd D"},
    {"Q" : "EMMET: Forward delete key:?", "A": "Function Delete"},
    {"Q" : "MAC: Right click trackpad?", "A": "Two finger tap"},
    {"Q" : "MAC: Close Window?", "A": "Cmd W"},
    {"Q" : "MAC: New window?", "A": "Cmd N"},
    {"Q" : "MAC: Scroll?", "A": "Two fingers"},
    {"Q" : "MAC: Previous/Next virtual desktop?", "A": "Two?THree finger arc swipe left right"},
    {"Q" : "MAC: Switch desktop?", "A": "Three finger left/right"},
    {"Q" : "MAC: Show desktop?", "A": "Spread thumb and three fingers"},
    {"Q" : "MAC: Tab between Apps?", "A": "Four finger swipe"},

    {"Q" : "MAC: Scroll left/right?", "A": "Two fingers left/right"}
  ]
})
