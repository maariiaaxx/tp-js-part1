//1

let etudiant=["etudiant1", "etudiant2", "etudiant3"];
document.getElementById("b8").onclick= function(){ for(let i of etudiant) { console.log(i)} ;} 

//2
class etudiantObject{
    
constructor(nom,prenom,age){ 
    this.nom= nom;
    this.prenom=prenom;
    this.age=age;
}

} 

const etudiant1= new etudiantObject("john","doe",30);


document.getElementById("b9").onclick= function() { 
    function afficher0bjet() { 
    console.log(etudiant1);
} 
afficher0bjet();
} 

//3 
const etudiant2= new etudiantObject("maria","dahbi",19);
const etudiant3= new etudiantObject("mimi","doe",22);

let etudiants2= [etudiant1,etudiant2,etudiant3];
document.getElementById("b10").onclick= function(){ 
    function afficherTableauObjets() 
    { 
 for(k of etudiants2){ 
    console.log(k);
 }
    }

    afficherTableauObjets() ;
}


//exo4 


class etudiantObject2{
    
    constructor(matricule,nom,prenom,note,ass){ 
        this.matricule= matricule;
        this.nom= nom;
        this.prenom=prenom;
        this.note=note;
        this.ass=ass;

    }

   

    }
    

    const e1= new etudiantObject2(100,"maria","dahbi",15,16);
    const e2=new etudiantObject2(400,"mimi","abcd",13,11);
    const e3=new etudiantObject2(500,"soso","kol",9,1);
    
    let tab= [e1,e2,e3]; 

function estadmissible(notefinale){ 
    return notefinale>=10;
}

function deliberation(){ 
    for(let i=0; i<tab.length; i++) { 
        let notefinale= (tab[i].note + tab[i].ass )/2;
        if(estadmissible(notefinale)){ 
            console.log(tab[i].matricule + "admis");
        }
        else {   console.log(tab[i].matricule + "ajourne");}
    }
}


//execution 
document.getElementById("b11").onclick= function(){ 
  deliberation(); } 