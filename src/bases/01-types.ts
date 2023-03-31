

export const name: string = 'Jhon Carreño';

export const age: number = 31;

export const templateString = ` sto es un string multiinea
que puede tener
" dobles
' simples
inyectar valores ${name}
expresione ${1+4}
salto de escape \$
numero ${age}
boleanos: ${true}
`

console.log(templateString)


// No ejecutar codigo, porque al importar el modulo se ejecuta, en algunos casos es un quilombo
// console.log(name)
// console.log(age)