// Les Boss
import {Boss} from "./modules/boss.js";
// console.log(Boss);
// -----------------------------------------------------
// Sauron
import {Sauron} from "./modules/boss.js";
let Boss1 = new Sauron("Sauron",10,10);
// Boss1.enigmes();
// console.log(Boss1);
// -----------------------------------------------------
// Chronos
import {Chronos} from "./modules/boss.js";
let Boss2 = new Chronos("Chronos",1300,20);
// console.log(Boss2);
// Boss2.enigmes();
// console.log(Boss2.enigmes());
// -----------------------------------------------------
// Lilith
import {Lilith} from "./modules/boss.js";
let Boss3 = new Lilith("Lilith",1500,35);
// console.log(Boss3);
// Boss3.enigmes();
// console.log(Boss3.enigmes());
// ----------------------------------------------------------------------------
// Le Guerrier
import {Guerrier} from "./modules/guerrier.js";
let Garen = new Guerrier("Garen",200,50,0);
// Garen.defense();
// Garen.attaques();
// Garen.rageUp();
console.log(Garen);
// -----------------------------------------------------
// L'Archer
import {Archer} from "./modules/archer.js"; 
let Ashe = new Archer("Ashe",120,100);
// Ashe.randomeFleches();
// Ashe.defense();
// Ashe.attaques();
// console.log(Ashe);
// -----------------------------------------------------
// Le Mage 
import {Mage} from "./modules/mage.js";
let Ryze = new Mage("Ryze",100,150,130);
// Ryze.defense();
// Ryze.attaques();
// console.log(Ryze);