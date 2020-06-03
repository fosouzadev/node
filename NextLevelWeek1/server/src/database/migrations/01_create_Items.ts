// importa o type Knex
import Knex from 'knex'
import tables from '../tables'

export async function up(knex : Knex){
    return knex.schema.createTable(tables.items, table => {
        table.increments('id').primary()

        table.string('image').notNullable()
        table.string('title').notNullable()
    })
}

export async function down(knex : Knex){
    return knex.schema.dropTable(tables.items)
}