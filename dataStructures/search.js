var values = [5, 8, 10, 22, 38, 45,  60, 90, 100, 120];


function sequentialSearch(number) {
    let counter = 0;
    for (let index = 0; index < values.length; index++) {
        counter++;
        const element = values[index];
        
        if (values[index] === number) {
            console.log("it took " + counter + " operations.");
            return index;            
        }
    }
    console.log("it took " + counter + " operations.");
    return -1;
}


function binarySearch(number) {
    let firstElementIndex, midElementIndex, lastElementIndex;
    let counter = 0;

    firstElementIndex = 0;
    lastElementIndex = values.length - 1;

    while (firstElementIndex <= lastElementIndex) {
        counter++;
            midElementIndex = parseInt((firstElementIndex + lastElementIndex) / 2);

            if (values[midElementIndex] === number) {
                console.log("it took " + counter + " operations.");
                return midElementIndex;
            }
                
            if (values[midElementIndex] < number) {
                firstElementIndex = midElementIndex + 1;                
            } else {

                lastElementIndex = midElementIndex - 1;                
            }       
    }
    console.log("it took " + counter + " operations.");
    return -1;
}

console.log("+++ Searching a number on an array using sequential search +++");
console.log(values);
console.log("Searching for the last element of the array: " + values[values.length - 1]);
console.log("The index is " + sequentialSearch(values[values.length - 1]));

console.log("+++ Searching a number on an array using binary search +++");
console.log(values);
console.log("Searching for the last element of the array: " + values[values.length - 1]);
console.log("The index is " + binarySearch(values[values.length - 1]));