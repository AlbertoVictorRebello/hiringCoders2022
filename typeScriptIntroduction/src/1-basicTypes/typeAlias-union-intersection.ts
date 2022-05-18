//Type alias
type UserType = {
    firstName: string,
    lastName: string,
    birthDate: string,
    //Optional attribute
    age?: number;
}

const myUser: UserType = {
    firstName: "Alberto",
    lastName: "Rebello",
    birthDate: "26/09/1972"
}

//Type union. Operator pipe '|'
type logLevel = "info" | "error" | "debug";

function logMessage(message: string, level: logLevel) {
    console.log(`${ message } - ${ level }`)
}

//The next statment is not correct
// logMessage("Mymessage", "debuging");

logMessage("Mymessage", "debug");
logMessage("Mymessage","info");
logMessage("Mymessage", "error");

type About = {
    bio: string,
    interests: string[]
}

type Profile = UserType & About;

// The following variable shall have all attributes from userType and About
const userWithProfile: Profile = {
    firstName: "Alberto",
    lastName: "Rebello",
    birthDate: "26/09/1972",
    bio: "Hi, I am a developer.",
    interests: ["chess", "java"]
}

type ComposedProfile = Profile & {
    log:logLevel
}

// The followin variable shall have all attributes from userType, About and a new logLevel attribute
const userWithComposedProfile: ComposedProfile = {
    firstName: "Alberto",
    lastName: "Rebello",
    birthDate: "26/09/1972",
    bio: "Hi, I am a developer.",
    interests: ["chess", "java"],
    log: "info"
}