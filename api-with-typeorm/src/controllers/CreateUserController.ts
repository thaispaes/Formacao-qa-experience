import { Request, Response } from 'express';

class CreateUserController{
   handle(request: Request, response: Response) {
        
        const name = request.body.name;

        return response.status(200).json({mensagem: `Usuário ${name} criado`})
    }  
} 


export { CreateUserController }