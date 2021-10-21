export class Mage {
    constructor(nom,vie,attaque,mana){
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.mana = mana;
    };
    defense() {
        this.attaque = this.attaque / 2;
        this.vie = this.vie * 2.5;
    };
    attaques () {
        this.attaque = this.attaque * 1.4;
        this.vie = this.vie -50;
    };
    
};
let Ryze = new Mage("Ryze",100,150,130);