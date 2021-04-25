import { Result } from './Interfaces/result';

export class ScoreBoard {
    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
    }

    updateScore(): void {
        let output: string = `<h2>Scoreboard</h2>`;

        for(let i = 0; i < this.results.length; i++){
            const result : Result = this.results[i];
            //output += '<h4>';
            //output += ' Player Name: '+ result.playerName + '</br> Correct Score:  ' + result.score + '/' + result.problemCount + '  for Factore  ' + result.factor;
            //output += '</h4>';
            output += `<h4><p>Player Name: ${result.playerName}</p><p>Score: ${result.score} / ${result.problemCount} For Factor ${result.factor}`
        }

        const scoreElement: HTMLElement = document.getElementById('scores')!;
        scoreElement.innerHTML = output;
    }
}