//Definisco gli Array
const emailList = [
    "giggi0209@gmail.com",
    "riccardo.pet@gmail.com",
    "luigi.mic@gmail.com",
    "stefano.cap@gmail.com",
    "claudioemmolo90@gmail.com",
    "gold-email.1998@gmail.com",
    "giggi0209@gmail.com",
    "pippi@gmail.com",
    "cane@gmail.com",
    "gatto@gmail.com",
    "carroarmato-96@gmail.com",
    "jshelp@info.com",
    "htmlcsshrlp@info.com",
    "boolean81@class.com",
];

//Definisco le variabili
const startGame = document.getElementById("btn-start");

let numberPlayerElement;

let numberComputerElement;


//Start Game
startGame.addEventListener ("click", function(){
    numberPlayerElement = Math.floor(Math.random() * 6) + 1;
    numberComputerElement = Math.floor(Math.random() * 6) + 1;

    document.getElementById("user-number") .innerHTML = `Hai tirato: ${numberPlayerElement}`;
    document.getElementById("computer-number") .innerHTML = `Il computer ha tirato: ${numberComputerElement}`;

    if (numberPlayerElement > numberComputerElement){
        document.getElementById("result") .innerHTML = "Hai vinto!";
    } else if ((numberPlayerElement < numberComputerElement)){
        document.getElementById("result") .innerHTML = "Hai perso!";
    } else if (numberPlayerElement == numberComputerElement){
        document.getElementById("result") .innerHTML = "Pareggio!";
    }
});


//Email


//Variabili
let emailUser;

const sendEmail = document.getElementById("send");

let emailStatus;

sendEmail.addEventListener ("click", function(){
    
    emailUser = document.getElementById("email-user").value;
    
    //Scrollo tutte le email dell'Arrey e controllo se quella del mio utente è presente
    for ( let i = 0 ; i < emailList.length; i++){
    
    if (emailUser === emailList[i]){
        emailStatus = true;
    } else {
        emailStatus = false;
    }
    }

    if (emailStatus == true){
        alert("Email inviata correttamente!");
    } else {
        alert("Email errata!");
    }
});
