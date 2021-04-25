import { Person } from './Interfaces/person';

export class Player implements Person{
    name:string = '';
    age:number = 0;
    highScore:number = 0;

    //constructor(public name:string, public age: number, public highScore: number){}

    formatName(){
        return this.name.toUpperCase();
    }
}