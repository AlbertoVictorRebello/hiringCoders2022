var values = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubleSorting() {
    let firstElementIndex = 0,
        lastElementIndex = values.length,
        swapValue;

    for (let counter = 0; counter < values.length; counter++) {
        for (let index = firstElementIndex; index < lastElementIndex - 1 - counter; index++) {
            const element = values[index];
            if (values[index] > values[index + 1]) {
                swapValue = values[index];
                values[index] = values[index + 1];
                values[index + 1] = swapValue;            
            }         
        }
        
    }

}

console.log("+++ Sorting an array using buble sorting +++");
console.log(values);
console.log("Abracadabra...");
bubleSorting();
console.log(values);
