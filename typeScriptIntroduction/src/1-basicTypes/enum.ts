enum permits {
    ADMIN,
    EDITOR,
    WRITER
}

const user = {
    accessLevel: permits.ADMIN
};

console.log(user);

enum colors {
    red = '#ff0000',
    black = "#000"
}

const coloredUser = {
    flag: colors.red,
    accessLevel: permits.ADMIN
}
