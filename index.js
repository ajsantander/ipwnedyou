#! /usr/bin/env node

const figlet = require('figlet');
const colors = require('colors');
const ctrl_c = require('ctrl-c');

process.stdin.setRawMode(true);
process.stdin.resume();
ctrl_c(true);

const target = process.argv[2];

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
  'You',
  'have',
  'been',
  `pwned${target ? "" : "!!!"}`,
  `${target ? target + '!!!' : ""}`,
  '',
  'I',
  'know',
  'where',
  'you',
  'live',
  `${target ? target : ""}`,
  '',
  'I',
  'have',
  'all',
  'your',
  'keys',
  `${target ? target : ""}`,
  '',
  "I'll",
  'be',
  'watching',
  'you',
  `${target ? target : ""}`,
  '',
  'I',
  'own',
  'you',
  `${target ? target : ""}`,
  '',
  'mua',
  'ha',
  'ha',
  'ha',
  'haaaa...',
  '',
  '',
  'MUA',
  'HA',
  'HA',
  'HA',
  'HAAAA!!!!',
  '',
  '',
  '',
  '',
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
}, 500);
