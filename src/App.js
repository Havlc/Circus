import './App.css';

function Navigation({rank, name, surname}){
  return (
  <>
    <div style={{color: "#35bcbf", backgroundColor: "#41506b", display: 'flex', justifyContent: 'space-between'}}>
      <h2>Welcome {rank} {name} {surname}</h2>
      <button>Logout</button>
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

function Tasks({duties}){
  return(
    <>
      <h4>Today you've been ordered to:</h4>
      <ol>{duties.map((item)=><li><input type="checkbox"></input>{item}</li>)}</ol>
    </>
  )
}

function Prisonplan({prisonplan}){
  return(
    <img src={prisonplan} width='400vh'/>
  )
}

function InmateInfo({name, surname, dateOut, isDangerous, sentence, photo}){
  const release = () => alert('Are you sure you want to request for freedom for this inmate?');
  return(
    <div className="inmateInfoCard">
      <h4>Inmate: {name} {surname}</h4>
      <img src={photo} width='280vh' height='250vh'/>
      <p>Date out: {dateOut}</p>
      <p>{sentence}</p>
      <p className={isDangerous}>Dangerous: {isDangerous}</p>
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
      <Navigation rank={'Sergeant'} name={'John'} surname={'Doe'} />
      <div id='mainField'>
        <div id='taskAndMapField'>
          <Tasks duties={['check cells', 'take prisoner #286 to the doctor', 'secure visiting hours', 'take prisoner #782 for a walk', 'prepare request for punishment for prisoner #112', 'write daily report']}/>
          <Prisonplan prisonplan={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Fremantle_Prison_map.svg/303px-Fremantle_Prison_map.svg.png'} />
        </div>
        <div id='inmateInfo'>
          <InmateInfo name='Jeff' surname='Dahmer' isDangerous='yes' sentence='killer' dateOut='life-sentence' photo='https://render.fineartamerica.com/images/rendered/default/flat/beach-towel/images/artworkimages/medium/2/serial-killer-jeffrey-dahmer-1991-daniel-hagerman.jpg?&targetx=0&targety=-70&imagewidth=952&imageheight=616&modelwidth=952&modelheight=476&backgroundcolor=A98F6C&orientation=1&producttype=beachtowel-32-64'/>  
          <InmateInfo name='Patric' surname='Sonny' isDangerous='no' sentence='drink-driver' dateOut='21/10/2023' photo='https://www.nydailynews.com/resizer/WIlocS3MDizpyZC_IvvJYEqsi3U=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/PSHDY5HCFQF733EZEX2NPKYAYA.jpg'/>
          <InmateInfo name='Dominic' surname='Bald' isDangerous='no' sentence='thief' dateOut='14/04/2024' photo='https://www.wsfa.com/resizer/YHfJ-uKG9FODETmCpfJ3R0AIu_U=/1200x0/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/OA32BRRB4NGHBJD5RVTECOCRTE.jpg'/>
          <InmateInfo name='Criss' surname='Klankus' isDangerous='no' sentence='swindler' dateOut='28/11/2025' photo='https://www.nydailynews.com/resizer/kyTwpPnJvnjHWznu5oU_mNM0BY0=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/OJINDXXE5QEPVHY2L477LKQULI.jpg'/>
          <InmateInfo name='Mike' surname='Maloney' isDangerous='yes' sentence='rapist' dateOut='01/06/2053' photo='https://images.seattletimes.com/wp-content/uploads/2016/08/0d8a422b7294421bbec6f6fbf645eba7.jpg?d=1136x1523'/>
        </div>
        <div id='inmateControl'>
          <InmateControl />
        </div>
      </div>
    </>
  );
}

export default App;
