import { Player } from './player';
import { Game } from './game';
import * as Util from './utility';

let newGame: Game;

//add click handler to start Game Button;

document.getElementById('start-cta')!.addEventListener('click', ()=>{
    const player:Player = new Player();
    player.name = Util.getValue('playerName');

    const probleCount: number = Number (Util.getValue('problemCount'));
    const factor: number = Number (Util.getValue('factor'));

    newGame = new Game(player, probleCount, factor);
    newGame.displayGame();
});

//add Click Handler to a calculate Score Button
document.getElementById('calculate')!.addEventListener('click', ()=>{
    newGame.calculateScore();
});


/* Old Practice code
function startGame () {
    // Starting Game Function
    let playerName: string = 'Chloe';
    printName(playerName);
    var message = 'Welcome! Starting Game...';
    document.getElementById('message')!.innerHTML= message;
}


function printName(name:string): void{
    console.log(`Starting game for player: ${name}`);
}
document.getElementById('start-cta')!.addEventListener('click', startGame);

*/