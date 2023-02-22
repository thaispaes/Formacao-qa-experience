import { Router } from "express";

const routes = Router()

const database = []

routes.get('/', (request, response) => {
    return response.status(200).json(database)
})



export { routes }