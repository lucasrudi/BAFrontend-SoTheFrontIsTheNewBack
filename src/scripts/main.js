// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  state = require('bespoke-state'),
  hash = require('bespoke-hash'),
  nebula = require('bespoke-theme-nebula'),
  camera = require('bespoke-camera'),
  click = require('bespoke-click'),
  //notes = require('bespoke-notes'),
  ignite = require('./ignite'),
  //sync = require('bespoke-sync'),
  progress = require('bespoke-progress');

// Bespoke.js
bespoke.from('article', [
  nebula(),
  camera(),
  click(),
  //notes(),
  keys(),
  state(),
  touch(),
  //bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  ignite(),
  progress()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
