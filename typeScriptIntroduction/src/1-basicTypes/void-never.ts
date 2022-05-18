//This codes will print the sequence of functions calls.
let stackOfFuncitons: string[] = [];

function c(): never {
    // Infinity loop"
    while (true) {
        stackOfFuncitons.push("Executing: c forever");
    }

    // OR

   // Error
   throw new Error("Message");

}

main();

function a() {
    stackOfFuncitons.push("Starting: a function");
    stackOfFuncitons.push("Returned by a function: " + b()); 
    stackOfFuncitons.push("Finishing: a function");

}

function b(): void {
    stackOfFuncitons.push("Starting: b function");
    stackOfFuncitons.push("Do not call c function. It will never end");
    // c();
    stackOfFuncitons.push("Finishing: b function");

    //An empty return command is ok.    
    return;

    //The following return command is not ok.
    // return 123;

}



function main() {
    
    stackOfFuncitons.push("Starting: main function");
    stackOfFuncitons.push("Returned by a function: " + a()); 
    stackOfFuncitons.push("Finishing: main function");
}

for (const iterator of stackOfFuncitons) {
    console.log(iterator);    
}
