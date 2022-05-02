module.exports = class Client{
    constructor(_id = 0, _name = "user", _phone = "2199999999"){
        this.id = _id;
        this.name = _name;
        this.phone = _phone;
    }

    upperCase() {
        return this.name.toUpperCase();
    }
    static first() {
        return new Client();
    }
    
    static all() {
        const array = [];

        for (let index = 0; index < 10; index++) {
            let number = index + 1;
            array[index] = new Client(number, "user_" + number, "219999999" + index);            
        }
        return array;
    }
}
