/* https://www.typescriptlang.org/docs/handbook/2/functions.html */

// I Embora o texto de I. esteja correto, o exemplo fornecido não está de acordo com a syntax do TypeScript, conforme o exemplo de código abaixo demonstra: 


/* 
function myRange(max, min, exclusive?) {
  console.log(max, min, exclusive? exclusive: '');
   
} 

error TS7006: Parameter 'max' implicitly has an 'any' type.
error TS7006: Parameter 'min' implicitly has an 'any' type.
error TS7006: Parameter 'exclusive' implicitly has an 'any' type.
*/

console.log('I. É FALSA, conforme demonstra o código abaixo:');
function myRangeFixed(max: any, min: any, exclusive?: any) {
  console.log(max, min, exclusive? exclusive: '');
   
}


myRangeFixed(1, 2, 3);
myRangeFixed(1, 2);
console.log();


console.log('II. É VERDADEIRA, conforme demonstra o código abaixo:');
function myFuncWithOptionals(firstParam?: string, secondParam = "2", thirdParam?: string) {
  console.log(`firstParam =  ${ firstParam } - secondParam = ${ secondParam } - thirdParam = ${ thirdParam }`);
}

myFuncWithOptionals("a", "b", "c")
myFuncWithOptionals("a", "b")
myFuncWithOptionals();
console.log();

console.log('III. É FALSA conforme demonstra o código abaixo:');
function myFuncWithUndefined(myParam = undefined) {
  console.log(`myParam =  ${ myParam }`);
}

/* 
Ao ser chamada conforme abaixo, a função provocará o seguinte erro no momento da compilação:
error TS2345: Argument of type '"someValue"' is not assignable to parameter of type 'undefined'.
 */

myFuncWithUndefined("someValue"); // Chamada nº 1
myFuncWithUndefined(); // Chamada nº 2



