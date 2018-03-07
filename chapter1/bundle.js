(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

// const gameType = "awesome";
// alert(`Let's make ${ gameType } games!`);

var myGuess = Math.floor(Math.random() * 20) + 1;
var guesses = 0;
var guess = void 0;

while (guess !== myGuess) {
    guess = parseInt(prompt("What number am I thinking of?"), 10);
    guesses++;
    if (guess < myGuess) {
        alert("Higher.");
    } else if (guess > myGuess) {
        alert("Lower.");
    }
}
alert("Well done! You got it in " + guesses + "!");

},{}]},{},[1]);
