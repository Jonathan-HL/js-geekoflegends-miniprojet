import {Mage} from "./mage.js";
let Ryze = new Mage("Ryze",100,150);
Ryze.manaReserve();
import {Guerrier} from "./guerrier.js";
let Garen = new Guerrier("Garen",200,50,0);
import {Archer} from "./archer.js";
let Ashe = new Archer("Ashe",110,100);
Ashe.randomeFleches();
let allPerso = [Garen.nom,Ashe.nom,Ryze.nom];
let hsPerso = allPerso[Math.floor(Math.random() * allPerso.length)];
// ----------------------------------------------------------------------------
export class Boss {
    constructor(nom,vie,dega){
        this.nom = nom;
        this.vie = vie;
        this.dega = dega;
    };
    enigmes(){
        let enigme = ["Je grandis sans être vivant. Je n'ai pas de poumon, mais j'ai besoin d'air pour vivre. L'eau, même si je n'ai pas de bouche, me tue, qui suis-je ?","Qu'est-ce qui disparaît lorsque l'on dit son nom ?","Quel objet permet de regarder à travers un mur sans le casser ?","Sans moi 'Paris' serait 'pris'. Qui suis je ?","On m'entend mais on ne me voit pas. Qui suis-je ?"]
        let random1 = Math.floor(Math.random() * enigme.length);
        let choice1 = enigme[random1];
        let reponse = ["le feu","le silence","une fenetre","a","la voix"];
        let maReponse;
        if (this.vie <= 200) {
            alert(choice1);
            maReponse = prompt("Donne moi une reponse.")
        };
        if (random1 == 0 && maReponse == reponse[0]) {
                    alert(`${this.nom} est mort.`)
                }else if (random1 == 1 && maReponse == reponse[1]) {
                    alert(`${this.nom} est mort.`)
                }else if (random1 == 2 && maReponse == reponse[2]) {
                    alert(`${this.nom} est mort.`)
                }else if (random1 == 3 && maReponse == reponse[3]) {
                    alert(`${this.nom} est mort.`)
                }else if (random1 == 4 && maReponse == reponse[4]) {
                    alert(`${this.nom} est mort.`)
                }
                else if (random1 !== reponse) {
                    alert(`tu es mort`)
                }
    };
    attaqueRandom(){
        console.log(`${this.nom} attaque ${hsPerso} est lui fait perdre : ${this.dega} point de vie.`);
        if (hsPerso == "Garen") {
            Garen.vie -= this.dega
            console.log(Garen);
        }else if (hsPerso == "Ryze") {
            Ryze.vie -= this.dega
            console.log(Ryze);
        }else if (hsPerso == "Ashe") {
            Ashe.vie -= this.dega
            console.log(Ashe);
        }
    };
};
// Sauron 
export class Sauron extends Boss{
    constructor(nom,vie,dega){
        super(nom,vie,dega)
    };
};
// ------------------------------------------------------------------------
// Chronos
export class Chronos extends Boss{
    constructor(nom,vie,dega){
        super(nom,vie,dega)
    };
};
// ------------------------------------------------------------------------
// Lilith
export class Lilith extends Boss{
    constructor(nom,vie,dega){
        super(nom,vie,dega)
    };
};
