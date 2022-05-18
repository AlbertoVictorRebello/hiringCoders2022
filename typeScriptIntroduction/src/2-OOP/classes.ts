// Class notation

class ConstructorDefault {
    public attribute01: string = "";
}

let constructorDefault: ConstructorDefault = new ConstructorDefault();
constructorDefault.attribute01 = "Value";

class ConstructorExplicity {
    public attribute01: string = "";

    public constructor() {
        this.attribute01 = "";
    }
}

let constructorExplicity: ConstructorExplicity = new ConstructorExplicity();
constructorExplicity.attribute01 = "Value";

class UserClass {
    protected name: string;
    protected age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// The following lines (Alternative using function) should work well in accordance with the instructors' information, however it did not yet.
/* // Alternative using function
function UserFunction(name: string, age: number) {
    this.name = name;
    this.age = age;
}

const personClass = new UserClass("Alberto", 49);
console.log(typeof personClass);

const personFunction = new UserFunction("Alberto", 49);
 */

// Heritance
class Player extends UserClass {
    private game: string;
    constructor(name: string, age: number, game: string) {
        super(name, age);
        this.game = game;
    }

    static showMyClass() {
        return typeof Player;        
    }
}

const player = new Player("Alberto", 49, "Prince of Persia");
console.log(player);

//Static method. We can call the method througth the class, no need of an instanced object.
console.log(Player.showMyClass());


