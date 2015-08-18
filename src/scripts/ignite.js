
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var n=o;n=n.bespoke||(n.bespoke={}),n=n.plugins||(n.plugins={}),n.touch=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = function(options) {
  return function(deck) {
    var igniteParent = document.createElement('div'),
    igniteBar = document.createElement('div'),
      prop = options === 'vertical' ? 'height' : 'width',
      interval = null;

    igniteParent.className = 'ignite-parent';
    igniteBar.className = 'ignite-bar';
    igniteParent.appendChild(igniteBar);
    deck.parent.appendChild(igniteParent);

    deck.on('activate', function(e) {
      if (!interval) {
        interval = setInterval(function(e) {
            deck.next();
          }
        ,2500);
        deck.slide(0);
      }

    });
  };
};

},{}]},{},[1])
(1)
});
