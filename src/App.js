import Header from "./components/Header";
import PokeCards from "./components/PokeCards";
import "./index.css";
import Legendary from "./components/Legendary";

function App() {


  return (
    <>
      <Header />
      <main>
        <PokeCards />
        <Legendary />
      </main>

      <div className="whitespace"></div>
    </>
  );
}

export default App;
