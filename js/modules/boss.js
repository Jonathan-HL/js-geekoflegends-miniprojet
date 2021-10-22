export class Boss {
    constructor(nom,vie,dega){
        this.nom = nom;
        this.vie = vie;
        this.dega = dega;
    };
};
// Exetends Boss
// Sauron 
export class Sauron extends Boss{
    constructor(nom,vie,dega){
        super(nom,vie,dega)
    };
    enigmes(){
        let enigme = ["Je grandis sans être vivant. Je n'ai pas de poumon, mais j'ai besoin d'air pour vivre. L'eau, même si je n'ai pas de bouche, me tue, qui suis-je ?","Qu'est-ce qui disparaît lorsque l'on dit son nom ?","Quel objet permet de regarder à travers un mur sans le casser ?","Sans moi 'Paris' serait 'pris'. Qui suis je ?","On m'entend mais on ne me voit pas. Qui suis-je ?"]
        let random1 = Math.floor(Math.random() * enigme.length);
        let choice1 = enigme[random1];
        let reponse = ["le feu","le silence","une fenetre","a","la voix"];
        if (this.vie <= 200) {
            alert(choice1);
        };
        let maReponse = prompt("met ta reponse")
        if (random1 == 0 && maReponse == reponse[0]) {
                    alert("Sauron est mort")
                }else if (random1 == 1 && maReponse == reponse[1]) {
                    alert("Sauron est mort")
                }else if (random1 == 2 && maReponse == reponse[2]) {
                    alert("Sauron est mort")
                }else if (random1 == 3 && maReponse == reponse[3]) {
                    alert("Sauron est mort")
                }else if (random1 == 4 && maReponse == reponse[4]) {
                    alert("Sauron est mort")
                }
                else{
                    alert("tu es mort")
                };
    };
};
// ------------------------------------------------------------------------
// Chronos
export class Chronos extends Boss{
    constructor(nom,vie,dega){
        super(nom,vie,dega)
    };
    enigmes(){
        let enigme = ["Je grandis sans être vivant. Je n'ai pas de poumon, mais j'ai besoin d'air pour vivre. L'eau, même si je n'ai pas de bouche, me tue, qui suis-je ?","Qu'est-ce qui disparaît lorsque l'on dit son nom ?","Quel objet permet de regarder à travers un mur sans le casser ?","Sans moi 'Paris' serait 'pris'. Qui suis je ?","On m'entend mais on ne me voit pas. Qui suis-je ?"]
        let random1 = Math.floor(Math.random() * enigme.length) ;
        let choice1 = enigme[random1];
        let reponse = ["le feu","le silence","la fenetre","a","la voix"];
        if (this.vie <= 200) {
            alert(choice1);
        };
        let maReponse = prompt("votre reponse ?");
                if (random1 == 0 && maReponse == reponse[0]) {
                    alert("Chronos est mort")
                }else if (random1 == 1 && maReponse == reponse[1]) {
                    alert("Chronos est mort")
                }else if (random1 == 2 && maReponse == reponse[2]) {
                    alert("Chronos est mort")
                }else if (random1 == 3 && maReponse == reponse[3]) {
                    alert("Chronos est mort")
                }else if (random1 == 4 && maReponse == reponse[4]) {
                    alert("Chronos est mort")
                }
                else{
                    alert("tu es mort")
                };
    };
};
// ------------------------------------------------------------------------
// Lilith
export class Lilith extends Boss{
    constructor(nom,vie,dega){
        super(nom,vie,dega)
    };
    enigmes(){
        let enigme = ["Je grandis sans être vivant. Je n'ai pas de poumon, mais j'ai besoin d'air pour vivre. L'eau, même si je n'ai pas de bouche, me tue, qui suis-je ?","Qu'est-ce qui disparaît lorsque l'on dit son nom ?","Quel objet permet de regarder à travers un mur sans le casser ?","Sans moi 'Paris' serait 'pris'. Qui suis je ?","On m'entend mais on ne me voit pas. Qui suis-je ?"]
        let random1 = Math.floor(Math.random() * enigme.length) ;
        let choice1 = enigme[random1];
        let reponse = ["le feu","le silence","la fenetre","a","la voix"];
        if (this.vie <= 200) {
            alert(choice1);
        };
        let maReponse = prompt("votre reponse ?");
                if (random1 == 0 && maReponse == reponse[0]) {
                    alert("Lilith est mort")
                }else if (random1 == 1 && maReponse == reponse[1]) {
                    alert("Lilith est mort")
                }else if (random1 == 2 && maReponse == reponse[2]) {
                    alert("Lilith est mort")
                }else if (random1 == 3 && maReponse == reponse[3]) {
                    alert("Lilith est mort")
                }else if (random1 == 4 && maReponse == reponse[4]) {
                    alert("Lilith est mort")
                }
                else{
                    alert("tu es mort")
                };
    };
};
// ------------------------------------------------------------------------