// importa o type Knex
import Knex from 'knex'
import tables from '../tables'

export async function up(knex : Knex){
    return knex.schema.createTable(tables.pointItems, table => {
        table.increments('id').primary()

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable(tables.points)

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable(tables.items)
    })
}

export async function down(knex : Knex){
    return knex.schema.dropTable(tables.pointItems)
}