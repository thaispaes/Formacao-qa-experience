describe('Users Controller', ()=> {

    it('Deve somar os números', () => {
        function soma (a:number, b:number) {
            return a+b
        }
        
        const resultado = soma(4, 5)

        expect(resultado).toBe(9)
    })
})