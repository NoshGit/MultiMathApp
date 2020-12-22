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