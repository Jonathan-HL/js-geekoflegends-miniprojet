// Les Boss
import {Boss} from "./modules/boss.js";
import {Sauron} from "./modules/boss.js";
let Boss1 = new Sauron("Sauron",600,20);
Boss1.attaqueRandom();
// Boss1.enigmes();
import {Chronos} from "./modules/boss.js";
let Boss2 = new Chronos("Chronos",650,25);
// Boss2.attaqueRandom();
// Boss2.enigmes();
import {Lilith} from "./modules/boss.js";
let Boss3 = new Lilith("Lilith",700,35);
// Boss3.attaqueRandom();
// Boss3.enigmes();
// -----------------------------------------------------
// Random all Boss
let allBoss = [Sauron.name,Chronos.name,Lilith.name];
let onebyone = allBoss[Math.floor(Math.random() * allBoss.length)];
// console.log(onebyone);
// ----------------------------------------------------------------------------
// Le Guerrier / Archer / Mage
import {Guerrier} from "./modules/guerrier.js";
let Garen = new Guerrier("Garen",200,50,0);
import {Archer} from "./modules/archer.js"; 
let Ashe = new Archer("Ashe",110,100);
import {Mage} from "./modules/mage.js";
let Ryze = new Mage("Ryze",100,150);
//  Random all Perso
let allPerso = [Garen.nom,Ashe.nom,Ryze.nom];
let hsPerso = allPerso[Math.floor(Math.random() * allPerso.length)];
// console.log(hsPerso);
// -----------------------------------------------------
// Le Guerrier
// Mes Postures
// Garen.postureDefense();
// console.log(Garen);
// Garen.postureAttaques();
// console.log(Garen);
// Mes Methods
// Garen.rageUp();
// console.log(Garen);
Garen.attaquezz();
// -----------------------------------------------------
// L'Archer
Ashe.randomeFleches();
// Mes Postures
// Ashe.postureDefense();
// console.log(Ashe);
// Ashe.postureAttaques();
// console.log(Ashe);
// Mes Methods
// Ashe.perdFleches()
// Ashe.recupFleches();
// -----------------------------------------------------
// Le Mage
Ryze.manaReserve();
// Mes Postures
// Ryze.postureDefense();
// console.log(Ryze);
// Ryze.postureAttaques();
// console.log(Ryze);
// Mes Methods
// console.log(Ryze);
// Ryze.noMana();
// console.log(Ryze);
// Ryze.perdAttaque();
// Ryze.rcpMana();
// console.log(Ryze);
