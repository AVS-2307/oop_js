import Bowman from './bowman.js';
import Daemon from './daemon.js';
import Magician from './magician.js';
import Swordsman from './swordsman.js';
import Undead from './undead.js';
import Zombie from './zombie.js';

const bowman = new Bowman('Bowman1', 'Bowman');
const swordsman = new Swordsman('Swordsman1','Swordsman');
const magician = new Magician('Magician1', 'Magician');
const udead = new Undead('Undead1', 'Undead');
const zombie = new Zombie('Zombie1', 'Zombie');
const daemon = new Daemon('Daemon1', 'Daemon');

console.log(bowman, swordsman, magician, udead, zombie, daemon);
