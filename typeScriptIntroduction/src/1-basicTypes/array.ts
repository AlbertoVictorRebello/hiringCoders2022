let cats: string[] = [
    'mia',
    'peter',
    'miau'
];

// cats.push(1); 
/* O argumento do tipo 'number' não é atribuível ao parâmetro do 
tipo 'string'.ts(2345) */

function showCats(cats: string[]) {
    return `The nome of the cats are: ${ cats.join(',')}`
}

console.log(showCats(cats));
