import knex from '../database/connection'
import tables from '../database/tables'
import { Request, Response } from 'express'

export default class PointsController {
    async create(request: Request, response: Response) {
        const { name, email, whatsapp, latitude, longitude, city, uf, items } = request.body        
        const point = { 
            image: 'https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', 
            name, email, whatsapp, latitude, longitude, city, uf
        }

        const knexTrans = await knex.transaction()
        const insertedIds = await knexTrans(tables.points).insert(point)
        
        const pointId = insertedIds[0]
        const pointItems = items.map((itemId: number) => {
            return {
                item_id: itemId,
                point_id: pointId
            }
        })

        await knexTrans(tables.pointItems).insert(pointItems)

        console.log(`isCompleted: ${knexTrans.isCompleted()}`)

        await knexTrans.commit()

        return response.json({ id: pointId, ...point })
    }

    async index(request: Request, response: Response) {
        const { city, uf, items } = request.query
        const parsedItems = String(items).split(',').map(item => Number(item.trim()))

        const points = await knex(tables.points)
            .join(`${tables.pointItems}`, `${tables.points}.id`, '=', `${tables.pointItems}.point_id`)
            .whereIn(`${tables.pointItems}.item_id`, parsedItems)
            .where('uf', String(uf))
            .where('city', String(city))
            .distinct()
            .select(`${tables.points}.*`)

        return response.json(points)
    }

    async show(request: Request, response: Response) {
        const pointId = Number(request.params.id)
        const point = await knex(tables.points).where('id', pointId).first()
        const items = await knex(tables.items)
                            .join(tables.pointItems,    // segunda tabela
                                  `${tables.items}.id`, // pk tabela principal
                                  '=', 
                                  `${tables.pointItems}.item_id`) // fk tabela secundária
                            .where(`${tables.pointItems}.point_id`, pointId)
                            .select(`${tables.items}.id`, `${tables.items}.title`, `${tables.items}.image`)

        if (!point)
            return response.status(400).json({ message: 'Point not found' })

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        })
        return response.json({ ...point, items: serializedItems })
    }
}