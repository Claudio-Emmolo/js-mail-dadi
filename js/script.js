const startGame = document.getElementById("btn-start");

//Definisco gli Array
let numberPlayerElement;

let numberComputerElement;

//Start Game
startGame.addEventListener ("click", function(){
    numberPlayerElement = Math.floor(Math.random() * 6) + 1;
    numberComputerElement = Math.floor(Math.random() * 6) + 1;

    console.log(numberPlayerElement);
    console.log(numberComputerElement);

    if (numberPlayerElement > numberComputerElement){
        console.log ("Hai vinto!");
    } else if ((numberPlayerElement < numberComputerElement)){
        console.log ("Hai perso");
    } else if (numberPlayerElement == numberComputerElement){
        console.log("Pareggio")
    }

});
    

