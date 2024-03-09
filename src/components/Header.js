import Logo from '../assets/pokemondex.webp';

const taglineDescriptions = [`Gotta Catch 'Em All!`, 'The adventure begins!', 'The ultimate Pokémon experience.','Become a Pokémon Master!'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
    const description = taglineDescriptions[genRandomInt(3)];
    return (
      <header>
        <img src={Logo} alt="" />
        <h1>POKEMON</h1>
        <p>{description}</p>
      </header>
    );
  }

  