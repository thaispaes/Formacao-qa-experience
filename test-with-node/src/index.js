import { Express } from "express";

const server = Express();

server.listen(5000, () => {
    console.log('Servidor on na porta 5000')
});