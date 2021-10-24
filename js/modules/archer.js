export class Archer {
    constructor(nom,vie,attaque){
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.fleches = [];
    };
    randomeFleches(){
        let fleche = [7, 8 , 9 ,10 ,11];
        let changeFleche = fleche[Math.floor(Math.random() * fleche.length)];
        this.fleches = changeFleche;
        return changeFleche;     
    };
    postureDefense() {
        this.attaque = this.attaque / 2;
        this.vie = this.vie * 2.5;
        console.log(`${this.nom} boost ses points de vie en échange de ses degas.`);
    };
    postureAttaques() {
        this.attaque = this.attaque * 1.4;
        this.vie = this.vie - 30;
        console.log(`${this.nom} boost ses points de degas en échange de ses points de vie.`);
    };
    perdFleches(){
        for (let i = 0; 0 < this.fleches ;i--) {
            console.log(`j'ai bientot plus de fleches : ${this.fleches}.`);
            this.fleches -=2;
        };
    };
    recupFleches(){
            for (let i = 0; this.fleches < 6 ;i++) {
                this.fleches +=1;
                console.log(`je reprends des fleches: ${this.fleches}.`);
            };
        
    };
};
