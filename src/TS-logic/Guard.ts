import { faker } from '@faker-js/faker';
import { Personell } from './Personell';

export class Guard extends Personell {
    rankNumber: number;
    rank: string;
    rankSet = ['Private', 'Corporal', 'Sergeant', 'Lieutenant', "Captain", "Major"];

    constructor(name?:string, surname?: string, dateOfBirth?: string, dateOfEmployment?: Date, rank?: string) {
        super(name, surname, dateOfBirth, dateOfEmployment);
        this.rankNumber = Math.floor(Math.random()*(this.rankSet.length-2));
        this.rank = rank? rank : this.rankSet[this.rankNumber];
        this.superior = `${this.rankSet[this.rankNumber+1]} ${faker.name.fullName()}`;
    }

    checkEmployee(): string {
        console.log(
            `
            ${this.rank} ${this.name} ${this.surname} is an employee since ${this.dateOfEmployment.toDateString()} and is a subordinate of ${this.superior}.
            `
        )
        return `${this.rank} ${this.name} ${this.surname} is an employee since ${this.dateOfEmployment.toDateString()} and is a subordinate of ${this.superior}.`
    }

}