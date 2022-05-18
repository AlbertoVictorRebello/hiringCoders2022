import { IPerson } from './interface';
//Importação de interface para tipagem dos nossos objetos

const PersonA: IPerson = {
    name: 'John',
    age: 22,
    occupation: 'Developer',
    gender: 'Male'
};
//Objeto persona A

const PersonB: IPerson = {
    name: 'Kath',
    age: 25,
    occupation: 'Product Manager',
    gender: 'Female'
};
//Objeto persona B

const AllPersons: IPerson[] = [PersonA, PersonB];
//array contendo dois objetos e interface compondo array

export default AllPersons;
//exportando array por padrão em nosso arquivo