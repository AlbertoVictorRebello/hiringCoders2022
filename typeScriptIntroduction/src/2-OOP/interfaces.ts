interface IMyInterface {
    attribute01: string;
    attribute02: string;
}

class MyClassUnderMyInterface implements IMyInterface{    
    attribute01: string = "Value 01";
    attribute02: string = "Value 02";
}

const myObjectUnderIMyInterface: IMyInterface = {
    attribute01: "",
    attribute02: "",

}

//The next statements will include a new attribute into IMyInterface. 
// It will impact also the previous lines
/* interface IMyInterface {
    attribute03: string;    
} */

//Interface contract effect may also be achieved using type alias strategy as follows:
type TMyInterface = {
    attribute01: string;
    attribute02: string;
}

type TMyAditionalInterface = {    
    attribute03: string;
}
const myObjectUnderTyInterface: TMyInterface = {
    attribute01: "",
    attribute02: ""
}

type TMyCompleteInterface = TMyInterface & TMyAditionalInterface;




