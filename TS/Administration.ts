import { faker } from '@faker-js/faker';
import { Personell } from './Personell';


export class Administration extends Personell {
    room: number;
    specNumber: number;
    specialization: string;
    specSet = ['cleaner', 'doctor', 'accountant', 'human resources', 'nurse', 'office worker', 'psychologist', 'director'];

    constructor(name?:string, surname?: string, dateOfBirth?: string, dateOfEmployment?: Date, room?: number, specialization?: string) {
        super(name, surname, dateOfBirth, dateOfEmployment);
        this.room = room ? room : Math.floor(Math.random()*100);
        this.specNumber = Math.floor(Math.random()*this.specSet.length);
        this.specialization = specialization ? specialization : this.specSet[this.specNumber];
    }

    checkAdministration(): string {
        console.log(`
            ${this.name} ${this.surname} is a ${this.specialization} and works in room number: ${this.room}.
        `)
        return `${this.name} ${this.surname} is a ${this.specialization} and works in room number: ${this.room}.`
    }
}