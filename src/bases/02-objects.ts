
export const pokemonsIds = [1, 20, 30, 34, 69];

pokemonsIds.push('sakfn');

pokemonsIds.push(+'5')

console.log(pokemonsIds);


interface Pokemon{
    id:number;
    name: string;
    age?:number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
}

export const charmander:Pokemon = {
    id: 4,
    name: "charmander"
}

console.log(bulbasaur);
console.log(charmander);

// cuando se imprmie en el navegador un objeto directo, hace esto
// poke=[] -> poke.toString()-> [object Object]