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

function Heading({duties}) {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return(
    <>
    <header style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#263849'}}>
      <h3>Circus - Government app to manage prison</h3>
      <h5>It's {date}</h5>
      <img src="https://media.istockphoto.com/vectors/prisoner-in-jail-vector-id165487536?k=6&m=165487536&s=612x612&w=0&h=vYzJd64kHCHjchZQpyDUXdPRjyGfdXsF_YOwBgYlgVk=" width='100vh' height='100vh'/>
    </header>
    </>
  )
}

function Tasks({duties}){
  return(
    <>
      <h4>Today you've been ordered to:</h4>
      <ol>{duties.map((item)=><li>{item} <input type="checkbox"></input></li>)}</ol>
    </>
  )
}

function Prisonplan({prisonplan}){
  return(
    <img src={prisonplan} />
  )
}

function Addinmate({name, surname, dateOut, isDangerous, sentence, photo}){
  return(
    <>
      <h4>Inmate: {name} {surname}</h4>
      <img src={photo} width='300vh' height='200vh'/>
      <h5>Date out: {dateOut}</h5>
      <h5>{sentence}</h5>
      <h5>Dangerous: {isDangerous}</h5>
      <button>Add Inmate</button>
      <button>Release Inmate</button>
      <button>Edit Inmate</button>
    </>
  )
}

function App() {
  return (
    <>
      <Heading />
      <Navigation rank={'Sergeant'} name={'John'} surname={'Doe'} />
      <Tasks duties={['check cells', 'take prisoner #286 to the doctor', 'secure visiting hours']}/>
      <Prisonplan prisonplan={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Fremantle_Prison_map.svg/303px-Fremantle_Prison_map.svg.png'} />
      <Addinmate name='Jeff' surname='Dahmer' isDangerous='yes' sentence='killer' dateOut='21/10/2035' photo='https://render.fineartamerica.com/images/rendered/default/flat/beach-towel/images/artworkimages/medium/2/serial-killer-jeffrey-dahmer-1991-daniel-hagerman.jpg?&targetx=0&targety=-70&imagewidth=952&imageheight=616&modelwidth=952&modelheight=476&backgroundcolor=A98F6C&orientation=1&producttype=beachtowel-32-64'/>
    </>
  );
}

export default App;
