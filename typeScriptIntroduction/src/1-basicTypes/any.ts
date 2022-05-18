let numericVal: any

numericVal = 25;
numericVal = '25';

// The function arguments may be numbers or strings or both
function sumAny(a: any, b: any) {
    return a + b;
}
console.log(sumAny(1, 1));
console.log(sumAny(1, '1'));
console.log(sumAny('1', '1'));