
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var n=o;n=n.bespoke||(n.bespoke={}),n=n.plugins||(n.plugins={}),n.touch=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var startTimer = function(duration, display) {
  var timer = duration, seconds;
  setInterval(function () {
      seconds = parseInt(timer % 60, 10);
      display.innerHTML = seconds;
      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
};

module.exports = function(options) {
  return function(deck) {
    var igniteParent = document.createElement('div'),
    igniteBar = document.createElement('div'),
    igniteTimer = document.createElement('div'),
      prop = options === 'vertical' ? 'height' : 'width',

      interval = null;

    igniteParent.className = 'ignite-parent';
    igniteBar.className = 'ignite-bar';
    igniteTimer.className = 'timer-bar';
    igniteParent.appendChild(igniteBar);
    igniteParent.appendChild(igniteTimer);
    deck.parent.appendChild(igniteParent);

    deck.on('activate', function(e) {
      igniteBar.innerHTML = (e.index + 1) + '/' + deck.slides.length;
      if (!interval) {
        startTimer(14, igniteTimer);
        interval = setInterval(function(e) {
            deck.next();
          }
        ,15000);
        deck.slide(0);
      }

    });
  };
};

},{}]},{},[1])
(1)
});
