#! /usr/bin/env node

const figlet = require('figlet');
const colors = require('colors');
const ctrl_c = require('ctrl-c');

process.stdin.setRawMode(true);
process.stdin.resume();
ctrl_c(true);

const fonts = [
  'Bloody',
  'ANSI Shadow',
  'Delta Corps Priest 1',
  'Electronic',
  'Elite',
  'Graffiti',
];
const cols = [
  'cyan',
  'green',
  'cyan',
  'yellow',
  'blue',
  'red',
];
const words = [
  'you',
  'have',
  'been',
  'pwned!!!',
];
var i = 0;

setInterval(function() {
  const font = fonts[ Math.floor(fonts.length * Math.random()) ];
  const color = cols[ Math.floor(cols.length * Math.random()) ];
  const word = words[i];
  i++;
  if(i >= words.length) i = 0;
  console.log(
    colors.inverse(
      colors.bold(
        colors[color](
          figlet.textSync(
            word,
            { font: font }
          )
        )
      )
    )
  );
}, 250);
