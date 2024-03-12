import Bulbasaur from './assets/bulbasaur.avif'
import Charmander from './assets/charmander.avif'
import Pikachu from './assets/pikachu.avif'
import Squirtle from './assets/squirtle.avif'
import Articuno from './assets/articuno.avif'
import Moltres from './assets/moltres.avif'
import Zapdos from './assets/zapdos.avif'

export const POKEMON_LIST = [ 
{
    image: Bulbasaur,
    name: 'Bulbasaur',
    description: 'Based on a frog, a bulb resembling a plant bulb that grows into a flower as it evolves.',
},
{
    image: Charmander,
    name: 'Charmander',
    description: 'Charmander is a bipedal, reptilian Pokémon. Most of its body is colored orange.',
},
{
    image: Pikachu,
    name: 'Pikachu',
    description: 'Pikachu is an Electric type Pokémon introduced in Generation 1.',
},
{
    image: Squirtle,
    name: 'Squirtle',
    description: 'Squirtle is a bipedal, reptilian Pokémon. It has a blue body with purple eyes.',
},
];

export const LEGENDARY ={
    articuno:{
        name: 'Articuno',
        description: 'Articuno is an Ice/Flying type Pokémon introduced in Generation 1.',
        image: Articuno ,
    },
    moltres:{
        name: 'Moltres',
        description: 'Moltres is a Fire/Flying type Pokémon introduced in Generation 1.',
        image: Moltres ,
    },
    zapdos:{
        name: 'Zapdos',
        description: 'Zapdos is an Electric/Flying type Pokémon introduced in Generation 1.',
        image: Zapdos ,
    },
}