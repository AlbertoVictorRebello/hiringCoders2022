let age: number;

// age = "25"; /* Type 'string' is not assignable to type 'number'.3 age = "25";*/

age = 25; 

function growing(age: number, years: number) {
    return age + years;
}

console.log(growing(age, 10));

