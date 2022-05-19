
//From interface.ts
interface IPerson{
    name: string;
    age: number;
    occupation: string;
    gender: string;
}
//From function.ts
function getPersonType(info: IPerson[] , type: string){
    const findPerson = info.find ( item => item.gender === type )
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
console.log (AllPersons);
console.log ('Retorna genero feminino', getPersonType);
console.log ('Retona generomasculino', getPersonType)