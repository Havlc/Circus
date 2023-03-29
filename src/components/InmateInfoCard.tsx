import { Inmate } from "../TS-logic/Inmate";
import { useState } from "react";

export function InmateInfoCard({
    inmateNumber,
    name,
    surname,
    dateOut,
    isDangerous,
    sentence,
    punishments,
    photo,
  }: Inmate) {
    const release = () =>
      confirm("Are you sure you want to request for freedom for this inmate?");
  
    const [stateTest, setWarnings] = useState([
      "placeholder for new warning from state",
    ]);
  
    let punishmentList = [...punishments].map((item, index) => (
      <li key={index} className="punishmentList">
        {item}
      </li>
    ));
    //console.log(punishmentList)
  
    const handleAddWarning = () => {
      setWarnings("added warning to state");
      //console.log('add warning')
    };
    return (
      <div className="inmateInfoCard">
        <h4>
          Inmate {inmateNumber}: {name} {surname}
        </h4>
        <img src={photo} width="280vh" height="250vh" />
        <p>Date out: {dateOut}</p>
        <p>{sentence}</p>
        <p>{stateTest}</p>
        <p>Punishments:</p>
        <p>{punishmentList}</p>
        <p className={isDangerous.toString()}>Dangerous{isDangerous}</p>
        <hr />
        <button onClick={handleAddWarning} className="warningBtn">
          <img
            src="https://designlooter.com/images/warning-svg-3.png"
            height="15vh"
          />{" "}
          Add warning
        </button>
        {dateOut !== "life-sentence" && (
          <button onClick={release} className="releaseBtn">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_438613.png"
              height="15vh"
            />{" "}
            Release Inmate
          </button>
        )}
        <button className="editBtn">
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_169788.png"
            height="15vh"
          />{" "}
          Edit Inmate
        </button>
      </div>
    );
  }