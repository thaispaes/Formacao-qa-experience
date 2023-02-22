import { Request, Response } from 'express'
import { database } from "../database"

export class UsersController {
    criarUsuario (request: Request, response: Response): Response{
        const { nome } = request.body

        if (nome.length < 1) {
            return response.status(403).json({ mensagem: `Não é possível criar usuários em branco` })
        }

        database.push(nome)
        return response.status(201).json({ 'mensagem': `Usuário criado` })
    }

    listarUsuario (request: Request, response: Response): Response {
        return response.status(200).json(database)
    } 
}

