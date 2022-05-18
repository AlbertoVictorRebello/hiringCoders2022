let isActive: boolean;

// isActive = 12; // O tipo 'number' não pode ser atribuído ao tipo 'boolean'.

isActive = true;

function checkUser(isActive: boolean) {
    if (isActive) {
        return console.log("The user is active");
        
    } else {
        return console.log("The user is not active");
    }
}

console.log(checkUser(isActive));
