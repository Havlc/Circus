import { faker } from '@faker-js/faker';
import { Person } from './Person';

export class Inmate extends Person {
    inmateNumber: number;
    dateOfImprisonment: Date;
    dateOut: Date | string;
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
        this.dateOut = dateOut ? dateOut : faker.date.between(
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
            // console.log(this.punishments)
        }};
       // console.log(this.punishments + "from constructor")
    }
    checkInmate(): string {
        console.log(`
            ${this.inmateNumber} - ${this.name} ${this.surname} is an inmate since 
            ${typeof(this.dateOfImprisonment)==='string'? this.dateOfImprisonment:this.dateOfImprisonment.toDateString()}. 
            Planned date to out is ${typeof(this.dateOut)==='string'?this.dateOut:this.dateOut.toDateString()}. 
            Inprisoned for being a ${this.sentence} and is${this.isDangerous? '': ' not'} dangerous. 
            During his stay he was punished ${this.punishments.length} times, with:
            ${this.punishments}.
        `)
        return `${this.inmateNumber} - ${this.name} ${this.surname} is an inmate since 
        ${typeof(this.dateOfImprisonment)==='string'? this.dateOfImprisonment:this.dateOfImprisonment.toDateString()}. 
        Planned date to out is ${typeof(this.dateOut)==='string'?this.dateOut:this.dateOut.toDateString()}. 
        Inprisoned for being a ${this.sentence} and is${this.isDangerous? '': ' not'} dangerous. 
        During his stay he was punished ${this.punishments.length} times, with:
        ${this.punishments}.`
    }
}