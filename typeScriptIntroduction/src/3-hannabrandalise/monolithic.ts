
//From interface.ts
interface IPerson{
    name: string;
    age: number;
    occupation: string;
    gender: string;
}
//From function.ts
function getPersonType(info: IPerson[] , type: string) { 
    const findPerson = info.find(item => item.gender === type)       
    return findPerson
}

// From object.ts

//Objeto persona A
const PersonA: IPerson = {
    name: 'John',
    age: 22,
    occupation: 'Developer',
    gender: 'Male'
};

//Objeto persona B
const PersonB: IPerson = {
    name: 'Kath',
    age: 25,
    occupation: 'Product Manager',
    gender: 'Female'
};

//array contendo dois objetos e interface compondo array
const AllPersons: IPerson[] = [PersonA, PersonB];

// From index.ts
console.log("AllPersons");
/* AR: nested into JSON.stringify() */
console.log (JSON.stringify(AllPersons));

/* AR: Changed from getPersonType to getPersonType(AllPersons, "Female")) 
       and nested into JSON.stringify()*/
console.log ('Retorna genero feminino', JSON.stringify(getPersonType(AllPersons, "Female")));

/* AR: Changed from getPersonType to getPersonType(AllPersons, "Male")) 
       and nested into JSON.stringify()*/
console.log ('Retona generomasculino', JSON.stringify(getPersonType(AllPersons, "Male")))