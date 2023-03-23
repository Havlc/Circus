import { Person } from './TS/Person';
import { Personell } from './TS/Personell';
import { Guard } from './TS/Guard';
import { Administration } from './TS/Administration';
import { Inmate } from './TS/Inmate';

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
    return listOfInmates;
}
generateInmates(2);
console.log(listOfInmates);
