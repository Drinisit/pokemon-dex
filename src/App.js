import { POKEMON_LIST } from './data';

import Header from './components/Header'

import './index.css'



function PokeCard(props){
  return (
    <li>
      <img src={props.image} alt={props.description} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </li>
  )
}

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
