export class Guerrier{
    constructor(nom,vie,attaque,rage){
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.rage = rage;
    };
    defense() {
        this.attaque = this.attaque / 2;
        this.vie = this.vie * 2.5;
    };
    attaques() {
        this.attaque = this.attaque * 1.4;
        this.vie = this.vie -50;
    };
    rageUp() {
        for ( let i = 1; i <= 4; i++) {
            this.rage = this.rage +1;
        };
        this.attaque = this.attaque + 12;
    };
};
