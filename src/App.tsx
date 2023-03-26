import './App.css'
import { faker } from '@faker-js/faker';
import { Person } from './TS-logic/Person';
import { Personell } from './TS-logic/Personell';
import { Guard } from './TS-logic/Guard';
import { Administration } from './TS-logic/Administration';
import { Inmate } from './TS-logic/Inmate';
import { ReactNode } from 'react';
import { useState } from 'react';
/*
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
const inmate2 = new Inmate;
const inmate3 = new Inmate;
inmate.introduce();
inmate.checkInmate();
*/

const listOfInmates = [new Inmate('Robert', 'Bandzior')];
const generateInmates = (number: number)=> {
    for (let i=0; i<number; i++){
        listOfInmates.push(
            new Inmate
        )
    } 
    return listOfInmates;
}
generateInmates(6);
// console.log(listOfInmates);

const guardian = new Guard;
// console.log(guardian)

function Navigation({rank, name, surname, superior}: Guard){
  return (
  <>
    <div style={{color: "#35bcbf", backgroundColor: "#41506b", display: 'flex', justifyContent: 'space-between'}}>
      <h2>Welcome {rank} {name} {surname}</h2>
      <h3>Your superior is {superior}</h3>
      <button id='logoutBtn'>Logout</button>
    </div>
  </>  
  );
}

function Heading() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return(
    <>
    <header style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#263849'}}>
      <h3>Circus - Government app to manage prison</h3>
      <h5>It's {date}</h5>
      <img src="https://media.istockphoto.com/vectors/prisoner-in-jail-vector-id165487536?k=6&m=165487536&s=612x612&w=0&h=vYzJd64kHCHjchZQpyDUXdPRjyGfdXsF_YOwBgYlgVk=" width='150vh' height='100vh'/>
    </header>
    </>
  )
}

function Tasks({duties}: string[]){
  return(
    <>
      <h4>Today you've been ordered to:</h4>
      <ol>{duties.map((item: string, index:number)=><li key={index}><input type="checkbox"></input>{item}</li>)}</ol>
    </>
  )
}

function Prisonplan({prisonplan}){
  return(
    <img src={prisonplan} width='400vh'/>
  )
}

const InmateInfo=({inmateNumber, name, surname, dateOut, isDangerous, sentence, punishments, photo}: Inmate) => {
  const release = () => confirm('Are you sure you want to request for freedom for this inmate?');
  // console.log(punishments)
  // const [state, setstate] = useState(punishments)
  let punishmentList = punishments
  punishmentList = ['pierwszy', 'drugi'].map((item, index)=><li key={index}>{item}</li>)
  return(
    <div className="inmateInfoCard">
      <h4>Inmate {inmateNumber}: {name} {surname}</h4>
      <img src={photo} width='280vh' height='250vh'/>
      <p>Date out: {dateOut}</p>
      <p>{sentence}</p>

      <p>Punishments: {punishments}</p>
      <p>{punishmentList}</p>
      <p className={isDangerous.toString()}>Dangerous: {isDangerous}</p>
      <button><img src='https://designlooter.com/images/warning-svg-3.png' height='15vh'/> Add warning</button>
      {dateOut!=='life-sentence' && <button onClick={release} ><img src='http://cdn.onlinewebfonts.com/svg/img_438613.png' height='15vh'/> Release Inmate</button>}
      <button><img src='http://cdn.onlinewebfonts.com/svg/img_169788.png' height='15vh'/> Edit Inmate</button>
    </div>
  )
}

function InmateControl(){
  return (
   <> 
    <button>Add Inmate</button>
   </> 
  )
}

function App() {
  return (
    <>
      <Heading />
      <Navigation rank={guardian.rank} name={guardian.name} surname={guardian.surname} dateOfBirth={guardian.dateOfBirth} dateOfEmployment={guardian.dateOfEmployment} superior={guardian.superior}/>
      <div id='mainField'>
        <div id='taskAndMapField'>
          <Tasks duties={['check cells', 'take prisoner #286 to the doctor', 'secure visiting hours', 'take prisoner #782 for a walk', 'prepare request for punishment for prisoner #112', 'write daily report']}/>
          <Prisonplan prisonplan={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Fremantle_Prison_map.svg/303px-Fremantle_Prison_map.svg.png'} />
        </div>
        <div id='inmateInfo'>
          {listOfInmates.map((nextInmate)=>
          <InmateInfo 
          key={nextInmate.surname}
          inmateNumber={nextInmate.inmateNumber}
          name={nextInmate.name} 
          surname={nextInmate.surname} 
          isDangerous={nextInmate.isDangerous} 
          sentence={nextInmate.sentence} 
          dateOut={nextInmate.dateOut.getFullYear()} 
          photo={nextInmate.photo}
          punishments={nextInmate.punishments}
          checkInmate={nextInmate.checkInmate}
          />)}
          <InmateInfo inmateNumber={123456} name='Jeff' surname='Dahmer' isDangerous={true} sentence='killer' dateOut='life-sentence' dateOfImprisonment={Date} photo='https://render.fineartamerica.com/images/rendered/default/flat/beach-towel/images/artworkimages/medium/2/serial-killer-jeffrey-dahmer-1991-daniel-hagerman.jpg?&targetx=0&targety=-70&imagewidth=952&imageheight=616&modelwidth=952&modelheight=476&backgroundcolor=A98F6C&orientation=1&producttype=beachtowel-32-64'/>  
          <InmateInfo inmateNumber={187498}name='Patric' surname='Sonny' isDangerous={false} sentence='drink-driver' dateOut='21/10/2023' dateOfImprisonment={Date} photo='https://www.nydailynews.com/resizer/WIlocS3MDizpyZC_IvvJYEqsi3U=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/PSHDY5HCFQF733EZEX2NPKYAYA.jpg'/>
          <InmateInfo inmateNumber={123986} name='Dominic' surname='Bald' isDangerous={false} sentence='thief' dateOut='14/04/2024' dateOfImprisonment={Date} photo='https://www.wsfa.com/resizer/YHfJ-uKG9FODETmCpfJ3R0AIu_U=/1200x0/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/OA32BRRB4NGHBJD5RVTECOCRTE.jpg'/>
          <InmateInfo inmateNumber={723426} name='Criss' surname='Klankus' isDangerous={false} sentence='swindler' dateOut='28/11/2025' dateOfImprisonment={Date} photo='https://www.nydailynews.com/resizer/kyTwpPnJvnjHWznu5oU_mNM0BY0=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/OJINDXXE5QEPVHY2L477LKQULI.jpg'/>
          <InmateInfo inmateNumber={428486} name='Mike' surname='Maloney' isDangerous={true} sentence='rapist' dateOut='01/06/2053' dateOfImprisonment={Date} photo='https://images.seattletimes.com/wp-content/uploads/2016/08/0d8a422b7294421bbec6f6fbf645eba7.jpg?d=1136x1523'/>
         </div>
        <div id='inmateControl'>
          <InmateControl />
        </div>
      </div>
    </>
  );
}

export default App;