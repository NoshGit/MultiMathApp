import { getValue } from './utility';
import { Result } from './Interfaces/result';
import { Player } from './player';
import { ScoreBoard as ResultPanel } from './scoreboard';

export class Game {
    private scoreBoard: ResultPanel = new ResultPanel();

    constructor(public player:Player, public problemCount: number, public factor: number){}


    displayGame(): void {
        //Create HTML for Current Game
        let gameForm: string = '';
        for (let i =1; i <= this.problemCount; i++){
            gameForm += `<div class="form-group">`;
            gameForm += `<label for="answer${i}" class="col-sm-2 control-label">`;
            gameForm += String(this.factor) + ` x ${i} = </label>`;
            gameForm += `<div class="col-sm-1"><input type="text" class="form-control" id="answer${i}" </div>`;
            gameForm += '</div>';

        }

        //add the new game
        const gameElement: HTMLElement = document.getElementById('game')!;
        gameElement.innerHTML = gameForm;

        //enable the calculate score button
        document.getElementById('calculate')!.removeAttribute('disabled');
    }

    calculateScore(): void{
        let score: number = 0;

        //loop through the text boxes and calculate the number that are correct
        for (let i=1; i <= this.problemCount; i++ ){
            const answer: number = Number(getValue(`answer${i}`));
            if(i * this.factor === answer){
                score++;
            }
        }

        //Create a new result object to pass to scoreboard
        const result: Result = {
            playerName: this.player.name,
            score:score,
            problemCount: this.problemCount,
            factor: this.factor
        };

        //add a result and update to score board
        this.scoreBoard.addResult(result);
        this.scoreBoard.updateScore();

        //disable the calculate score button
        document.getElementById('calculate')!.setAttribute('disabled','true');
    }


}