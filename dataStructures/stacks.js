var elements = [];
var topElement = - 1;
const MAX = 10;

function push(num) { 
    // console.log(topElement < MAX);   
    if (topElement < MAX) {
        topElement++;        
        elements[topElement] = num;

    } else {
        console.log("The stack is full.");
    }

}


function pop() {
    if (topElement !== -1) {
        let popped = elements.pop();        
        topElement--;
        return popped;

    } else {
        console.log("The stack is empty.");
    }

}

function isEmpty() {
    if (topElement !== -1) {
        return false;
    } 
    return true;

}

console.log("+++ Testing the stack functions +++");
console.log("Pushed three values into the stack:");
push(10);
push(20);
push(30);

console.log(elements);

console.log("Popped all three values from the stack one in a time:");

console.log(pop());
console.log(elements);

console.log(pop());
console.log(elements);

console.log(pop());
console.log(elements);

console.log("+++ Converting a decimal number no binary notation +++");
let number = 10;
console.log(number);

while (number >= 1) {
    push(number % 2);
    if (number % 2 === 0) {
        number = number / 2; 
    } else {
        number = (number - number % 2) / 2;         
    }   
    console.log(number);
}

let response = ""
while (!isEmpty()) {
    response += pop(); 
}
console.log(response);

