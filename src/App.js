import Logo from './assets/pokemondex.webp';
import Bulbasaur from './assets/bulbasaur.avif';
import Charmander from './assets/charmander.avif';
import Squirtle from './assets/squirtle.avif';
import './index.css'

const taglineDescriptions = [`Gotta Catch 'Em All!`, 'The adventure begins!', 'The ultimate Pokémon experience.','Become a Pokémon Master!'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
  const description = taglineDescriptions[genRandomInt(3)];
  return (
    <header>
      <img src={Logo} alt="" />
      <h1>POKEMON</h1>
      <p>{description}</p>
    </header>
  );
}

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
            name="Bulbasaur"
            description="Bulbasaur is a Grass/Poison type Pokémon introduced in Generation 1"
            image ={Bulbasaur}
          />
          <PokeCard
            name="Charmander"
            description="Charmander is a Fire type Pokémon introduced in Generation 1."
            image ={Charmander}
          />
          <PokeCard
            name="Squartle"
            description="Squirtle is a Water type Pokémon introduced in Generation 1."
            image ={Squirtle}
          />
        </ul>
      </section>
    </>
  );
}

export default App;
