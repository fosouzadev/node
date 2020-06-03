import knex from '../database/connection'
import tables from '../database/tables'
import { Request, Response } from 'express'

export default class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex(tables.items).select('*')
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        })
    
        return response.json(serializedItems)
    }
}