const ContextStrategy = require('./db/strategies/base/contextStrategy.js')
const MongoDb = require('./db/strategies/mongodb.js')
const Postgres = require('./db/strategies/postgres.js')

const contextMongo = new ContextStrategy(new MongoDb())
contextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()