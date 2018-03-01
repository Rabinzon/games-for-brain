#!/usr/bin/env node
import Menu from 'terminal-menu';

const menu = Menu({ width: 70, x: 4, y: 2, bg: 'black' });
menu.reset();
menu.write('Welcome to the Brain Games!\n');
menu.write('Choose game\n');
menu.write('-------------------------\n');

menu.add('brain-even');
menu.add('brain-calc');
menu.add('brain-gcd');
menu.add('brain-prime');
menu.add('brain-balance');
menu.add('brain-progression');
menu.add('EXIT');

let game;

menu.on('select', (label) => {
  game = label;
  menu.close();
});

process.stdin.pipe(menu.createStream()).pipe(process.stdout);

process.stdin.setRawMode(true);
menu.on('close', () => {
  process.stdin.setRawMode(false);
  process.stdin.end();
  if (game === 'EXIT') {
    return;
  }

  const gamePath = `./${game}.js`;
  require(gamePath); // eslint-disable-line
});
