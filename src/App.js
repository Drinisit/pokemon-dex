import { POKEMON_LIST } from './data';
import PokeCard from './components/PokeCard'

import Header from './components/Header'

import './index.css'




function App() {
  return (
    <>
      <Header />
      <section className='cards'>
        <br />
        <h2>Pokedex</h2>
        <ul>
          <PokeCard
            name={POKEMON_LIST[0].name}
            description={POKEMON_LIST[0].description}
            image ={POKEMON_LIST[0].image}
          />

          <PokeCard {...POKEMON_LIST[1]} />
          <PokeCard {...POKEMON_LIST[2]} />
          <PokeCard {...POKEMON_LIST[3]} />
          
        </ul>
      </section>
    </>
  );
}

export default App;