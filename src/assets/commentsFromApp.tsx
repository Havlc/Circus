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

inmate.introduce();
inmate.checkInmate();*/

 {/*<InmateInfo inmateNumber={123456} name='Jeff' surname='Dahmer' isDangerous={true} sentence='killer' dateOut='life-sentence' dateOfImprisonment={Date} photo='https://render.fineartamerica.com/images/rendered/default/flat/beach-towel/images/artworkimages/medium/2/serial-killer-jeffrey-dahmer-1991-daniel-hagerman.jpg?&targetx=0&targety=-70&imagewidth=952&imageheight=616&modelwidth=952&modelheight=476&backgroundcolor=A98F6C&orientation=1&producttype=beachtowel-32-64'/>  
          <InmateInfo inmateNumber={187498}name='Patric' surname='Sonny' isDangerous={false} sentence='drink-driver' dateOut='21/10/2023' dateOfImprisonment={Date} photo='https://www.nydailynews.com/resizer/WIlocS3MDizpyZC_IvvJYEqsi3U=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/PSHDY5HCFQF733EZEX2NPKYAYA.jpg'/>
          <InmateInfo inmateNumber={123986} name='Dominic' surname='Bald' isDangerous={false} sentence='thief' dateOut='14/04/2024' dateOfImprisonment={Date} photo='https://www.wsfa.com/resizer/YHfJ-uKG9FODETmCpfJ3R0AIu_U=/1200x0/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/OA32BRRB4NGHBJD5RVTECOCRTE.jpg'/>
          <InmateInfo inmateNumber={723426} name='Criss' surname='Klankus' isDangerous={false} sentence='swindler' dateOut='28/11/2025' dateOfImprisonment={Date} photo='https://www.nydailynews.com/resizer/kyTwpPnJvnjHWznu5oU_mNM0BY0=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/OJINDXXE5QEPVHY2L477LKQULI.jpg'/>
          <InmateInfo inmateNumber={428486} name='Mike' surname='Maloney' isDangerous={true} sentence='rapist' dateOut='01/06/2053' dateOfImprisonment={Date} photo='https://images.seattletimes.com/wp-content/uploads/2016/08/0d8a422b7294421bbec6f6fbf645eba7.jpg?d=1136x1523'/>
          */}

          <Navigation guardian={guardian}
       /*rank={guardian.rank}
        name={guardian.name}
        surname={guardian.surname}
        dateOfBirth={guardian.dateOfBirth}
        dateOfEmployment={guardian.dateOfEmployment}
        superior={guardian.superior}*/
      />

      const handleAddInmate = (e) => {
        e.stopPropagation();
        //console.log([...listOfInmates])
        let newListOfInmates = [...listOfInmates];
        console.log(newListOfInmates);
        // console.log(new Inmate)
        newListOfInmates.push(new Inmate());
        // console.log(newListOfInmates)
        setInmatesList(newListOfInmates);
        /*console.log('added local'+newListOfInmates)
        console.log(listOfInmates)
        */
        return newListOfInmates;
      };