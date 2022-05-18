let firstName: string;
let lastName: string;

function fullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`
}

firstName = "Alberto";
lastName = "Rebello";

console.log(fullName(firstName, lastName));
