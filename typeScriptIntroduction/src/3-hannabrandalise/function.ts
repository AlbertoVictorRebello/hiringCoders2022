import { IPerson } from './interface';
//importando a interface em nossa função

export default function getPersonType(info: IPerson[] , type: string){
    const findPerson = info.find ( item => item.gender === type )
    return findPerson
}

//função com exportação padrão de nosso arquivo