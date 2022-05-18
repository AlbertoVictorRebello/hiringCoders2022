interface IOne {
    attribute01:string;
    attribute02?:string;
}

let var1: IOne = {attribute01: "value 01", attribute02: "Value 02 - Optional"};
let var2: IOne = {attribute01: "value 01", attribute02: "Value 02 - Optional"};

console.log(var1);
console.log(var2);
let result: boolean = var1 === var2; 
console.log("var1 = var2? " + result);

