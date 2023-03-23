import { faker } from '@faker-js/faker';

class Person {
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
        console.log(`
        ${this.name} ${this.surname} was born on ${this.dateOfBirth}.
        `)
        return `${this.name} ${this.surname} was born on ${this.dateOfBirth}.`

    }
}

class Personell extends Person {
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

class Guard extends Personell {
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

class Administration extends Personell {
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

class Inmate extends Person {
    inmateNumber: number;
    dateOfImprisonment: Date;
    dateOut: Date;
    sentence: string;
    isDangerous: boolean;
    punishments: string[];
    sentenceNumber: number;
    sentenceSet = ['killer', 'drink-driver', 'thief', 'swindler', 'rapist'];
    punishNumber: number;
    punishmentsSet = ['isolation', 'warning', 'no visits', 'no working', 'no TV'];

    constructor(name?:string, surname?: string, dateOfBirth?: string, inmateNumber?: number, dateOfImprisonment?: Date, dateOut?: Date, sentence?: string, isDangerous?: boolean, punishments?: string[])  {
        super(name, surname, dateOfBirth);
        this.inmateNumber = inmateNumber ? inmateNumber : Math.floor(Math.random()*100000);
        this.name = name ? name : faker.name.firstName('male');
        this.dateOfImprisonment = dateOfImprisonment ? dateOfImprisonment : faker.date.between(
            this.dateOfBirth, Date.now()
        );
        this.dateOut = faker.date.between(
            Date.now(), '2050-01-01T00:00:00.000Z'
        );
        this.sentenceNumber = Math.floor(Math.random()*this.sentenceSet.length);
        this.punishNumber = Math.floor(Math.random()*this.punishmentsSet.length);
        this.sentence = sentence ? sentence : this.sentenceSet[this.sentenceNumber];
        (this.sentence == 'killer' || this.sentence == 'rapist')? this.isDangerous = true : this.isDangerous = false;
        this.punishments = punishments ? punishments : [];
        if (this.punishments.length ===0 ){
        for (let i=0;i<=this.punishNumber;i++){
            this.punishments.push(this.punishmentsSet[Math.floor(Math.random()*this.punishmentsSet.length)])
        }};
    }
    checkInmate(): string {
        console.log(`
            ${this.inmateNumber} - ${this.name} ${this.surname} is an inmate since ${this.dateOfImprisonment.toDateString()}. Planned date to out is ${this.dateOut.toDateString()}. 
            Inprisoned for being a ${this.sentence} and is${this.isDangerous? '': ' not'} dangerous. During his stay he was punished ${this.punishments.length} times, with:
            ${this.punishments}.
        `)
        return `${this.inmateNumber} - ${this.name} ${this.surname} is an inmate since ${this.dateOfImprisonment.toDateString()}. Planned date to out is ${this.dateOut.toDateString()}. 
        Inprisoned for being a ${this.sentence} and is${this.isDangerous? '': ' not'} dangerous. During his stay he was punished ${this.punishments.length} times, with:
        ${this.punishments}.`
    }
}

const person = new Person;
person.introduce();

const myPerson = new Person('Jan', "Nowak")
myPerson.introduce()

const personell = new Personell('Janina', 'Kowalska');
personell.introduce();
personell.checkEmployee();

const guard = new Guard;
guard.introduce();
guard.checkEmployee();
//guard.checkGuard();

const administrationWorker = new Administration;
administrationWorker.introduce();
administrationWorker.checkEmployee();
administrationWorker.checkAdministration();

const inmate = new Inmate;
inmate.introduce();
inmate.checkInmate();


const listOfInmates = [new Inmate('Robert', 'Bandzior')];
const generateInmates = (number: number)=> {
    for (let i=0; i<number; i++){
        listOfInmates.push(
            new Inmate
        )
    } 
    //console.log(listOfInmates);
    return listOfInmates;
}
generateInmates(5);