const startGame = document.getElementById("btn-start");

//Definisco gli Array
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
    

