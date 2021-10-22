export class Mage {
    constructor(nom,vie,attaque,){
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.mana = [];
    };
    defense() {
        this.attaque = this.attaque / 2;
        this.vie = this.vie * 2.5;
    };
    attaques () {
        this.attaque = this.attaque * 1.4;
        this.vie = this.vie -25;
    };
    manaReserve (){
        let mana = [7,9,11];
        let changeMana = mana[Math.floor(Math.random() * mana.length)];
        this.mana = changeMana;
        return changeMana; 
    };
    noMana (){
        for (let i = 0; 0 < this.mana ;i--) {
            console.log(`j'ai bientot plus de mana : ${this.mana}.`);
            this.mana -=1;
        };
        console.log(`je n'ai plus de mana : ${this.mana}.`);
        console.log("je passe mon tour.");
    };
    perdAttaque(){
        if (this.mana == 0) {
            this.attaque -=2;
        };
    };
    rcpMana(){
        if (this.attaque == 148) {
            this.mana += 7;
        };
        console.log(`j'ai récupéré : ${this.mana} de mana mais en échange j'ai perdu 2 d'attaque.`);
    };
};
