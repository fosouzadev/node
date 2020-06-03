import knex from '../database/connection'
import tables from '../database/tables'
import { Request, Response } from 'express'

export default class PointsController {
    async create(request: Request, response: Response) {
        const { name, email, whatsapp, latitude, longitude, city, uf, items } = request.body        
        const point = { image: 'image-fake', name, email, whatsapp, latitude, longitude, city, uf }

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

        knexTrans.commit()

        return response.json({ id: pointId, ...point })
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

        if (!point)
            return response.status(400).json({ message: 'Point not found' })

        const deserializedItems = items.map(item => {
            return {
                id: item.id, image: item.image, title: item.title
            }
        })
        return response.json({ ...point, items: deserializedItems })
    }
}