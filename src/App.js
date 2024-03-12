import { POKEMON_LIST } from './data';
import PokeCard from './components/PokeCard'

import Header from './components/Header'

import './index.css'
import TabButton from './components/TabButton';




function App() {

  function handleClick(){
    console.log('Hello')
}

  return (
    <>
      <Header />
      <main>
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
        <section className='legendary'>
          <h2>Legendary</h2>
          <menu>
            <TabButton onClick={handleClick} >Articuno</TabButton>
            <TabButton onClick={handleClick} >Moltres</TabButton>
            <TabButton onClick={handleClick} >Zapdos</TabButton>
          </menu>

        </section>
      </main>




      <div className="whitespace">

      </div>
    </>
  );
}

export default App;
