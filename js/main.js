// Les Boss
import {Boss} from "./modules/boss.js";
// Sauron
import {Sauron} from "./modules/boss.js";
let Boss1 = new Sauron("Sauron",1000,10);
// Boss1.enigmes();
// console.log(Boss1);
// -----------------------------------------------------
// Chronos
import {Chronos} from "./modules/boss.js";
let Boss2 = new Chronos("Chronos",1300,20);
// Boss2.enigmes();
// console.log(Boss2);
// -----------------------------------------------------
// Lilith
import {Lilith} from "./modules/boss.js";
let Boss3 = new Lilith("Lilith",1500,35);
// Boss3.enigmes();
// console.log(Boss3);
// -----------------------------------------------------
// Random all Boss
let allBoss = [Sauron,Chronos,Lilith];
// ----------------------------------------------------------------------------
// Le Guerrier
import {Guerrier} from "./modules/guerrier.js";
let Garen = new Guerrier("Garen",200,50,0);
// Mes Postures
// Garen.defense();
// Garen.attaques();
// ---------------------------
// Garen.rageUp();
// console.log(Garen);
// -----------------------------------------------------
// L'Archer
import {Archer} from "./modules/archer.js"; 
let Ashe = new Archer("Ashe",120,100);
// Ashe.randomeFleches();
// console.log(Ashe);
// Mes Postures
// Ashe.defense();
// Ashe.attaques();
// ---------------------------
// Ashe.perdFleches()
// console.log(Ashe);
// Ashe.recupFleches();
// console.log(Ashe);
// -----------------------------------------------------
// Le Mage 
import {Mage} from "./modules/mage.js";
let Ryze = new Mage("Ryze",100,150);
Ryze.manaReserve();
// Mes Postures
// Ryze.defense();
// Ryze.attaques();
// ---------------------------
console.log(Ryze);
Ryze.noMana();
console.log(Ryze);
Ryze.perdAttaque();
Ryze.rcpMana();
console.log(Ryze);

