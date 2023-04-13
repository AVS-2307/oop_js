import Bowman from './bowman.js';
import Daemon from './daemon.js';
import Magician from './magician.js';
import Swordsman from './swordsman.js';
import Undead from './undead.js';
import Zombie from './zombie.js';

const bowman = new Bowman('Nick', 'Bowman');
const swordsman = new Swordsman('John','Swordsman');
const magician = new Magician('Alex', 'Magician');
const udead = new Undead('Grade', 'Undead');
const zombie = new Zombie('Dead', 'Zombie');
const daemon = new Daemon('Devil', 'Daemon');

console.log(bowman, swordsman, magician, udead, zombie, daemon);
