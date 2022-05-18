type MyTypeAssertion = {
    attribute01: string;
}

// Using as
const myObjectTypeAssertion01 = {} as MyTypeAssertion;
myObjectTypeAssertion01.attribute01 = "Value 01";


// Using <>
const myObjectTypeAssertion02 = <MyTypeAssertion>{};
myObjectTypeAssertion02.attribute01 = "Value 02";


// Using : the attribute value shall be initialized immediately
const myObjectTypeAssertion03: MyTypeAssertion = {
    attribute01: "Value 03"
};

console.log(myObjectTypeAssertion01);
console.log(myObjectTypeAssertion02);
console.log(myObjectTypeAssertion03);
