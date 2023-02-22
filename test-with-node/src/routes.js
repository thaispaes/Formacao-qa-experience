import { Router } from "express";

const routes = Router()

const database = ['Thais']

routes.get('/', (request, response) => {
    return response.status(200).json(database)
})





export { routes }