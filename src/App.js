const reactDescriptions = [`Gotta Catch 'Em All!`, 'The adventure begins!', 'The ultimate Pokémon experience.','Become a Pokémon Master!'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
  const description = reactDescriptions[genRandomInt(3)];
  return (
    <header>
      <img src="src/assets/pokemondex.webp" alt="" />
      <h1>POKEMON</h1>
      <p>{description}</p>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
