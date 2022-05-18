/* function sum(a, b) { // O parâmetro 'a' implicitamente tem um tipo 'any'.ts(7006)
    return a + b;
}

console.log(sum(1, 1));
console.log(sum("1", "1")); */

function sum(a: number, b: number) { // O parâmetro 'a' implicitamente tem um tipo 'any'.ts(7006)
    return a + b;
}

console.log(sum(1, 1));
/* console.log(sum("1", "1")); // Argument of type 'string' is not assignable to parameter of
 type 'number'. 13 console.log(sum("1", "1")); */
