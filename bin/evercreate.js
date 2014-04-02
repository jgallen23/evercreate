#!/usr/bin/env node
var parseArgs = require('minimist');
var everCreate = require('../');

var args = parseArgs(process.argv);

if (typeof args.token !== 'string') {
  throw new Error('--token is required');
}

if (typeof args.title !== 'string') {
  throw new Error('--title is required');
}

everCreate(
  args.token,
  args.title,
  args.body || '',
  args.reminder,
  function(err, note) {
    if (err) {
      throw err;
    }
    console.log('Note Created');
  }
);
