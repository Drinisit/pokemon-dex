import PokeCard from "./PokeCard"
import { POKEMON_LIST } from "../data"

export default function PokeCards(){
    return(
        <section className="cards">
        <br />
        <h2>Pokedex</h2>
        <ul>
          {POKEMON_LIST.map((pokemonItem) => (
            <PokeCard key={pokemonItem.name} {...pokemonItem} />
          ))}
        </ul>
      </section>
    )
}