import { Result } from './result';

export class ScoreBoard {
    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
    }

    updateScore(): void {
        let output: string = `<h2>Scoreboard</h2>`;

        for(let i = 0; i < this.results.length; i++){
            const result : Result = this.results[i];
            output += '<h4>';
            output += result.playerName + ':' + result.score + '/' + result.problemCount + 'for Factore' + result.factor;
            output += '</h4>';
        }

        const scoreElement: HTMLElement = document.getElementById('scores')!;
        scoreElement.innerHTML = output;
    }
}