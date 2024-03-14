import React,{ useState } from "react";
import TabButton from "./TabButton"
import Section from "./Section";
import { LEGENDARY } from "../data";

export default function Legendary(){

    const [selectedPokemon ,setSelectedPokemon] = useState(); 

    function handleClick(selectedButton) {
      setSelectedPokemon(selectedButton);
      console.log(selectedPokemon);
    }
  
    let selectLegend = <p>Select a Legendary Pokemon</p>;
  
    if (selectedPokemon) {
      selectLegend = (
        <div className="tab-content">
          <img
            src={LEGENDARY[selectedPokemon].image}
            alt={LEGENDARY[selectedPokemon].name}
          />
          <h3>{LEGENDARY[selectedPokemon].name}</h3>
          <p>{LEGENDARY[selectedPokemon].description}</p>
        </div>
      );
    }

    return(
        <Section title="Legendary" className="legendary">
        
        <menu>
          <TabButton
            isClicked={selectedPokemon === "articuno"}
            onClick={() => handleClick("articuno")}
          >
            Articuno
          </TabButton>
          <TabButton
            isClicked={selectedPokemon === "moltres"}
            onClick={() => handleClick("moltres")}
          >
            Moltres
          </TabButton>
          <TabButton
            isClicked={selectedPokemon === "zapdos"}
            onClick={() => handleClick("zapdos")}
          >
            Zapdos
          </TabButton>
        </menu>
        {selectLegend}
      </Section>
    )
}