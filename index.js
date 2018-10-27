const figlet = require('figlet');
const colors = require('colors');

let msg;
if(process.argv.length === 3) {
  msg = process.argv[2].split(' ');
}
else if(process.argv.length > 2) {
  msg = process.argv.slice(2, process.argv.length - 1);
}
  
const fonts = [
  'Bloody',
  'ANSI Shadow',
  'Delta Corps Priest 1',
  'Electronic',
  'Elite',
  'Graffiti',
  'Doom',
  'Isometric1'
];
const cols = [
  'cyan',
  'green',
  'cyan',
  'yellow',
  'blue',
  'red',
];
let words = msg ? msg : [
  'You',
  'have',
  'been',
  'pwned'
];

var i = 0;
setInterval(function() {
  const font = fonts[ Math.floor(fonts.length * Math.random()) ];
  const color = cols[ Math.floor(cols.length * Math.random()) ];
  const word = words[i];
  i++;
  if(i >= words.length) i = 0;
  console.log(
    // colors.inverse(
      colors.bold(
        colors[color](
          figlet.textSync(
            word,
            { font: font }
          )
        )
      )
    // )
  );
}, 800);
