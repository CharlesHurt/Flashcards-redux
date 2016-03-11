'use strict'

var flashcardApp = angular.module("flashcardApp", [])

flashcardApp.controller("flashcardController", function($scope) {
  $scope.hello ='42'

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
