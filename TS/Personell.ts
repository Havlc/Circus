import { faker } from '@faker-js/faker';
import { Person } from './Person';

export class Personell extends Person {
    dateOfEmployment: Date;
    superior: string;
    
    constructor(name?:string, surname?: string, dateOfBirth?: string, dateOfEmployment?: Date) {
        super(name, surname, dateOfBirth);
        this.dateOfEmployment = dateOfEmployment ? dateOfEmployment : faker.date.between(
            this.dateOfBirth, Date.now()
        );
        this.superior = faker.name.fullName();
    }

    checkEmployee(): string {
        console.log(
            `
            ${this.name} ${this.surname} is an employee since ${this.dateOfEmployment.toDateString()} and is a subordinate of ${this.superior}.
            `
        )
        return `${this.name} ${this.surname} is an employee since ${this.dateOfEmployment.toDateString()} and is a subordinate of ${this.superior}.`
    }
}