const employee = require('./employee')

class manager extends employee {
    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = number
}
getRole(){
    return 'manager'
}

getSchool(){
    return this.number
}

}

module.exports = manager