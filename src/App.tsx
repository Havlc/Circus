import "./App.css";
import { Guard } from "./TS-logic/Guard";
import { Inmate } from "./TS-logic/Inmate";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Heading } from "./components/Heading";
import { Prisonplan } from "./components/Prisonplan";
import { InmateControl } from "./components/InmateControl";
import { Tasks } from "./components/Tasks";
import { InmateInfoCard } from "./components/InmateInfoCard";

function App() {
  const guardian = new Guard();

  const [listOfInmates, setInmatesList] = useState([]);

  const generateInmates = (number: number) => {
    for (let i = 0; i < number; i++) {
      console.log("generacja" + i);
      listOfInmates.push(new Inmate);
    }
    return listOfInmates;
  };
  generateInmates(1);
  
  const handleAddInmate = (e) => {
    e.stopPropagation();
    //console.log([...listOfInmates])
    let newListOfInmates = [...listOfInmates];
    console.log(newListOfInmates);
    // console.log(new Inmate)
    newListOfInmates.push(new Inmate);
    // console.log(newListOfInmates)
    setInmatesList(newListOfInmates);
    /*console.log('added local'+newListOfInmates)
    console.log(listOfInmates)
    */
    return newListOfInmates;
  };

  return (
    <>
      <Heading />
      <Navigation guardian={guardian}/>
      <div id="mainField">
        <div id="taskAndMapField">
          <Tasks duties={guardian.duties} />
          <Prisonplan/>
        </div>
        {listOfInmates.length == 0 ? (
          <div>
            There are no inmates on the dashboard, click on th button to add
            one.{" "}
          </div>
        ) : (
          <div id="inmateInfo">
            {listOfInmates.map((nextInmate) => (
              <InmateInfoCard
                key={nextInmate.surname}
                inmateNumber={nextInmate.inmateNumber}
                name={nextInmate.name}
                surname={nextInmate.surname}
                isDangerous={nextInmate.isDangerous}
                sentence={nextInmate.sentence}
                dateOut={
                  typeof nextInmate.dateOut === "string"
                    ? nextInmate.dateOut
                    : nextInmate.dateOut.getFullYear()
                }
                photo={nextInmate.photo}
                punishments={nextInmate.punishments}
                checkInmate={nextInmate.checkInmate}
              />
            ))}
          </div>
        )}
        <div id="inmateControl">
          <InmateControl handleAddInmate={handleAddInmate} />
        </div>
      </div>
    </>
  );
}

export default App;