import { faker } from '@faker-js/faker';
import { Personell } from './Personell';

export class Guard extends Personell {
    rankNumber: number;
    rank: string;
    rankSet = ['Private', 'Corporal', 'Sergeant', 'Lieutenant', "Captain", "Major"];
    dutiesSet = ['check cells', `take prisoner #${Math.floor(Math.random()*100000)} to the doctor`, 'secure visiting hours', `take prisoner #${Math.floor(Math.random()*100000)} for a walk`, `prepare request for punishment for prisoner #${Math.floor(Math.random()*100000)}`, 'write daily report'];
    duties: string[];
    dutiesNumber: number;

    constructor(name?:string, surname?: string, dateOfBirth?: string, dateOfEmployment?: Date, rank?: string, duties?: string[]) {
        super(name, surname, dateOfBirth, dateOfEmployment);
        this.rankNumber = Math.floor(Math.random()*(this.rankSet.length-2));
        this.rank = rank? rank : this.rankSet[this.rankNumber];
        this.superior = `${this.rankSet[this.rankNumber+1]} ${faker.name.fullName()}`;
        this.dutiesNumber=Math.round(Math.random()*5);
        this.duties = duties ? duties : [];
        if (this.duties.length ===0 ){
        for (let i=0;i<=this.dutiesNumber;i++){
            this.duties.push(this.dutiesSet[i])
        }};
        //console.log(this.dutiesNumber, this.duties)
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