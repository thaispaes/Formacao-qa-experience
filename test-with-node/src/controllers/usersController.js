import { database } from "../database.js"

const usersController = {
    criarUsuario (request, response) {
        const { nome } = request.body

        if (nome.length < 1) {
            return response.status(403).json({ mensagem: `Não é possível criar usuários em branco` })
        }

        database.push(nome)
        return response.status(201).json({ 'mensagem': `Usuário criado` })
    },

    listarUsuario (request, response) {
        return response.status(200).json(database)
    }
}

export { usersController }