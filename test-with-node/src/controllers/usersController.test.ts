import { Request } from "express";
import { makeMockResponse } from "../mocks/mockResponse";
import { UsersController } from "./usersController"

describe('Users Controller', ()=> {
    const usersControler = new UsersController();

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()

    it('Deve listar os nossos usuarios', ()=> {
        usersControler.listarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        //expect(mockResponse.state.status).toHaveLength(4)
    } )
})