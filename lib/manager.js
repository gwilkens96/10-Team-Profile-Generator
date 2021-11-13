const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = number
}
getRole(){
    return 'Manager'
}

getOfficeNumber(){
    return this.number
}

}

module.exports = Manager