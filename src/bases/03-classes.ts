import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi.interface';

// FROMA TRADICIONAL
// export class Pokemon {
//     public id: number;
//     public name: string;

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }

// FORMA SIMPLIFICADA
export class Pokemon {

    constructor(
        private readonly id: number,
        public name: string
    ) { }

    public get getImageUrl(): string {
        return `https://www.pokemon.com/${this.id}.jpg`
    }

    public scream() {
        return `${this.name.toLocaleUpperCase()}!!!`;
    }

    private speak() {
        return `${this.name}, ${this.name}`;
    }

    async getMoves():Promise<Move[]> {

        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        return data.moves;
    }
}

// readonly no me permite modificar los valores una vez inicializados, solo leer y no reasignar nuevo valor
// solo en typescrit

export const charmander = new Pokemon(4, 'charmander');

// charmander.id = 5;
// charmander.name = 'jjjjcccaa'

// console.log(charmander);
// console.log(charmander.getImageUrl);
// console.log(charmander.scream());
// console.log(charmander.speak());

// console.log(charmander.getMoves());
charmander.getMoves()