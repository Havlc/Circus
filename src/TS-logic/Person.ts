import { faker } from '@faker-js/faker';

export class Person {
    name: string;
    surname: string;
    dateOfBirth: string;
    photo: string;

    constructor(name?:string, surname?: string, dateOfBirth?: string){
        this.name = name? name : faker.name.firstName();
        this.surname = surname? surname : faker.name.lastName();
        this.dateOfBirth = dateOfBirth? dateOfBirth : faker.date.birthdate({
            min: 18,
            max: 100,
            mode: 'age'
        }).toDateString();
        this.photo = faker.image.avatar();
    }

    introduce(): string {
        /*console.log(`
        ${this.name} ${this.surname} was born on ${this.dateOfBirth}.
        `)*/
        return `${this.name} ${this.surname} was born on ${this.dateOfBirth}.`

    }
}