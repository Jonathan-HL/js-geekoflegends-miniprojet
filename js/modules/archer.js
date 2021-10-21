export class Archer {
    constructor(nom,vie,attaque){
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.fleches = "";
    };
    randomeFleches(){
        let fleche = [7, 8 , 9 ,10 ,11];
        let changeFleche = fleche[Math.floor(Math.random() * fleche.length)];
        this.fleches = changeFleche;
        return changeFleche;     
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
let Ashe = new Archer("Ashe",120,100);

