// Les Boss.
// import {Sauron} from "./boss.js";
// let Boss1 = new Sauron("Sauron",600,10);
// import {Chronos} from "./boss.js";
// let Boss2 = new Chronos("Chronos",650,20);
// import {Lilith} from "./boss.js";
// let Boss3 = new Lilith("Lilith",700,35);
// let allBoss = [Boss1.name,Boss2.name,Boss3.name];
// let onebyone = allBoss[Math.floor(Math.random() * allBoss.length)];
// // -----------------------------------------------------------------------------------------------------------------------------------
export class Guerrier{
    constructor(nom,vie,attaque,rage){
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.rage = rage;
    };
    postureDefense() {
        this.attaque = this.attaque / 2;
        this.vie = this.vie * 2.5;
        console.log(`${this.nom} boost ses points de vie en échange de ses degas.`);
    };
    postureAttaques() {
        this.attaque = this.attaque * 1.4;
        this.vie = this.vie -50;
        console.log(`${this.nom} boost ses points de degas en échange de ses points de vie.`);
    };
    rageUp() {
        console.log(Garen);
        for ( let i = 1; i <= 4; i++) {
            this.rage = this.rage +1;
            console.log(`j'ai bientot toutes ma rage : ${this.rage} point de rage`);
        };
        if (this.rage == 4) {
            this.attaque = this.attaque + 12;
            console.log("parfait j'active mon Boost d'attaque : + 12 Degas d'attaque.");
        };
    };
    attaquezz(){
        // 
        // if (onebyone == "Sauron") {
        //     Sauron.vie -= this.attaque;
        //     console.log(`${this.nom} attaque ${Sauron.nom} et il lui reste ${Sauron.vie} de vie`);
        // }else if (onebyone =="Chronos") {
        //     Chronos.vie -= this.attaque;
        //     console.log(`${this.nom} attaque ${Chronos.nom} et il lui reste ${Chronos.vie} de vie`);
        // }else if (onebyone =="Lilith") {
        //     Lilith.vie -= this.attaque;
        //     console.log(`${this.nom} attaque ${Lilith.nom} et il lui reste ${Lilith.vie} de vie`);
        // }
    };
};
