import { Guard } from "../TS-logic/Guard";

export function Navigation({guardian}: Guard){
    const {rank, name, surname, superior} = guardian;
    return (
    <>
      <div id='navigationDiv'>
        <h2>Welcome {rank} {name} {surname}</h2>
        <h3>Your superior is {superior}</h3>
        <button id='logoutBtn'>Logout</button>
      </div>
    </>  
    );
  }