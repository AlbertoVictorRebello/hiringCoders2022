let varObject1: Object;
let varObject2: object;

varObject1 = 1;
console.log(varObject1);

varObject1 = "Hello Word!";
console.log(varObject1);

varObject1 = new Date();
console.log(varObject1);

// varObject2 = 2; // O tipo 'number' não pode ser atribuído ao tipo 'object'.ts(2322)
// varObject2 = "Hello Word!"; // O tipo 'string' não pode ser atribuído ao tipo 'object'.ts(2322)


varObject2 = new Date();
console.log(varObject2);