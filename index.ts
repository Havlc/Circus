import { faker } from '@faker-js/faker';

class Person {
    name: string;
    surname: string;
    dateOfBirth: string;
    photo: string;

    constructor(){
        this.name = faker.name.firstName();
        this.surname = faker.name.lastName();
        this.dateOfBirth = faker.date.birthdate({
            min: 18,
            max: 100,
            mode: 'age'
        }).toDateString();
        this.photo = faker.image.avatar();
    }

    introduce(): void {
        console.log(`
        ${this.name} ${this.surname} was born in ${this.dateOfBirth}.
        `)
    }
}

class Personell extends Person {
    dateOfEmployment: Date;
    
    constructor() {
        super();
        this.dateOfEmployment = faker.date.between(
            this.dateOfBirth, Date.now()
        )
    }

    checkEmployee(): void {
        console.log(
            `
            ${this.name} ${this.surname} is an employee since ${this.dateOfEmployment.toDateString()}.
            `
        )
    }
}

class Guard extends Personell {
    rankNumber: number;
    rank: string;
    superior: string;
    rankSet = ['Private', 'Corporal', 'Sergeant', 'Lieutenant', "Captain", "Major"];

    constructor() {
        super();
        this.rankNumber = Math.floor(Math.random()*4);
        this.rank = this.rankSet[this.rankNumber];
        this.superior = `${this.rankSet[this.rankNumber+1]} ${faker.name.fullName()}`;
    }

    checkGuard(): void {
        console.log(
            `
            ${this.rank} ${this.name} ${this.surname} is a subordinate of ${this.superior}.
            `
        )
    }

}

class Administration extends Personell {
    room: number;
    specNumber: number;
    specialization: string;
    specSet = ['cleaner', 'doctor', 'accountant', 'human resources', 'nurse', 'office worker', 'psychologist', 'director'];

    constructor() {
        super();
        this.room = Math.floor(Math.random()*100);
        this.specNumber = Math.floor(Math.random()*8);
        this.specialization = this.specSet[this.specNumber];
    }

    checkAdministration():void {
        console.log(`
            ${this.name} ${this.surname} is a ${this.specialization} and works in a ${this.room} room.
        `)
    }
}

class Inmate extends Person {
    dateOfImprisonment: Date;
    sentence: string;
    dateOut: Date;
    isDangerous: boolean;
    punishments: string[];
    sentenceNumber: number;
    sentenceSet = ['killer', 'drink-driver', 'thief', 'swindler', 'rapist'];
    punishNumber: number;
    punishmentsSet = ['isolation', 'warning', 'no visits', 'no working', 'no TV'];

    constructor() {
        super();
        this.name = faker.name.firstName('male');
        this.dateOfImprisonment = faker.date.between(
            this.dateOfBirth, Date.now()
        );
        this.sentenceNumber = Math.floor(Math.random()*5);
        this.punishNumber = Math.floor(Math.random()*5);
        this.sentence = this.sentenceSet[this.sentenceNumber];
        this.punishments=[];
        for (let i=0;i<=this.punishNumber;i++){
            this.punishments.push(this.punishmentsSet[Math.floor(Math.random()*5)])
        };
        this.dateOut = faker.date.between(
            Date.now(), '2050-01-01T00:00:00.000Z'
        );
        (this.sentence == 'killer' || this.sentence == 'rapist')? this.isDangerous = true : this.isDangerous = false;
    }
    checkInmate():void {
        console.log(`
            ${this.name} ${this.surname} is an inmate since ${this.dateOfImprisonment.toDateString()}. Planned date to out is ${this.dateOut.toDateString()}. 
            Inprisoned for being a ${this.sentence} and is${this.isDangerous? '': ' not'} dangerous. During his stay he was punished ${this.punishments.length} times, with:
            ${this.punishments}.
        `)
    }
}

/*const person = new Person;
person.introduce();

const personell = new Personell;
personell.introduce();
personell.checkEmployee();*/

const guard = new Guard;
guard.introduce();
guard.checkEmployee();
guard.checkGuard();

const administrationWorker = new Administration;
administrationWorker.introduce();
administrationWorker.checkEmployee();
administrationWorker.checkAdministration();

const inmate = new Inmate;
inmate.introduce();
inmate.checkInmate();
