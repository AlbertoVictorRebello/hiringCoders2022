class ParentClass {    
    private privateInfo: string = "Private information";
    protected protectedInfo: string = "Protected information";
    public publicInfo: string = "Public information";

    showPrivateInformation(key: string) {
        if ("^-^" === key) {
            console.log(this.privateInfo);
            
        }

        console.log("You are not allowed to know this information.");
        
    }

    showProtectedInformation(key: string) {
        if ("^-^" === key) {
            console.log(this.protectedInfo);
            
        }

        console.log("You are not allowed to know this information.");
    }
}

const parentObject = new ParentClass();

// The next line throws an error because the privateInfo attribute is private
// console.log(parentObject.privateInfo); // A propriedade 'privateInfo' é particular e somente é acessível na classe 'ParentClass'.
console.log(parentObject.showPrivateInformation("^⁻^"));

// The next line throws an error because the protectedInfo attribute is protected
// parentObject.protectedInfo; // A propriedade 'protectedInfo' é protegida e somente é acessível na classe 'ParentClass' e em suas subclasses.
console.log(parentObject.showProtectedInformation("^⁻^"));
console.log(parentObject.publicInfo);

class ChildClass extends ParentClass {
    constructor(){
        super();        
        // The next line throws an error because the privateInfo attribute is private
        // this.privateInfo = ""; // A propriedade 'privateInfo' é particular e somente é acessível na classe 'ParentClass'.
        this.protectedInfo = this.protectedInfo + " modified by ChildClass";
    }
}


const childObject = new ChildClass();

// The next line throws an error because the protectedInfo attribute is protected
// parentObject.protectedInfo; // A propriedade 'protectedInfo' é protegida e somente é acessível na classe 'ParentClass' e em suas subclasses.
console.log(childObject.showProtectedInformation("^⁻^"));
console.log(childObject.publicInfo);
