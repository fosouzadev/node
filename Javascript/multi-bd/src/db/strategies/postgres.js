const ICrud = require('./interfaces/ICrud.js')

class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('criado')
    }
}

module.exports = Postgres