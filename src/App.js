import React,{ useState } from "react";

import { LEGENDARY } from "./data";
import { POKEMON_LIST } from "./data";
import PokeCard from "./components/PokeCard";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import "./index.css";

function App() {
  const [selectedPokemon ,setSelectedPokemon] = useState('articuno'); 

  function handleClick(selectedButton) {
    setSelectedPokemon(selectedButton);
    console.log(selectedPokemon);
  }

  return (
    <>
      <Header />
      <main>
        <section className="cards">
          <br />
          <h2>Pokedex</h2>
          <ul>
            <PokeCard
              name={POKEMON_LIST[0].name}
              description={POKEMON_LIST[0].description}
              image={POKEMON_LIST[0].image}
            />

            <PokeCard {...POKEMON_LIST[1]} />
            <PokeCard {...POKEMON_LIST[2]} />
            <PokeCard {...POKEMON_LIST[3]} />
          </ul>
        </section>
        <section className="legendary">
          <h2>Legendary</h2>
          <menu>
            <TabButton onClick={() => handleClick('articuno')}>Articuno</TabButton>
            <TabButton onClick={() => handleClick('moltres')}>Moltres</TabButton>
            <TabButton onClick={() => handleClick('zapdos')}>Zapdos</TabButton>
          </menu>
          <div className="tab-content">
              <img src={LEGENDARY[selectedPokemon].image} alt={LEGENDARY[selectedPokemon].name} />
              <h3>{LEGENDARY[selectedPokemon].name}</h3>
              <p>{LEGENDARY[selectedPokemon].description}</p>
          </div>
        </section>
      </main>

      <div className="whitespace"></div>
    </>
  );
}

export default App;
