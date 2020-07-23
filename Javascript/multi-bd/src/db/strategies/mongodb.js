const ICrud = require('./interfaces/ICrud.js')

class MongoDb extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('criado')
    }
}

module.exports = MongoDb