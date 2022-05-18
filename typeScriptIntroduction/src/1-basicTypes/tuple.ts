/* let cats: [string, string] = [
    'mia',
    'peter',
    'miau'
]; */
/* O tipo '[string, string, string]' não pode ser atribuído ao tipo '[string, string]'.
  A origem tem 3 elementos, mas o destino permite somente 2. */

let tupleCats: [string, string, string] = [
    'mia',
    'peter',
    'miau'
];

type myTriple = [string, boolean, string];

let alienCats: myTriple = [
    'mia',
    true,
    'miau'  
];