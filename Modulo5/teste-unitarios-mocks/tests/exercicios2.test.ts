import { validateCharacter } from "../src/exercicios2";


describe("teste validateCharacter", ()=> {
   
    test(`Exercicio 2.b  Returns false for an empty "nome"` , () => {
        const result = validateCharacter({ 
            nome:"", 
            vida:100,
            defesa: 50,
            forca: 10
        })
        expect(result).toBe(false)
    } )
    
    test(`Exercicio 2.c Returns false false for "vida" equal to 0!`, ()=>{
        const test = validateCharacter({
            nome:"Gabriel", 
            vida:0,
            defesa: 50,
            forca:10
        })
        expect(test).toBe(false)
    })

    test(`Exercicio 2.d Returns false for "força" equal to 0!`, ()=>{
        const test = validateCharacter(
            {
                nome:"gabriel",
                vida: 100,
                defesa: 50, 
                forca: 0
            }
        )
        expect(test).toBe(false)
    })
    test(`Exercicio 2.e.1  Returns false for "vida" < 0 !`, ()=>{
        const test = validateCharacter(
            {
              nome: "Gabriel", 
              vida: -1,
              defesa: 50,
              forca: 10
            }
        )
        expect(test).toBe(false )
    })
    test(`Exercicio 2.e.2  Returns false for "forca" < 0 !`, ()=>{
        const test = validateCharacter(
            {
              nome: "Gabriel", 
              vida: 100,
              defesa: 50,
              forca: -10
            }
        )
        expect(test).toBe(false )
    })
    test(`Exercicio 2.e.3  Returns false for "defesa" < 0 !`, ()=>{
        const test = validateCharacter(
            {
              nome: "Gabriel", 
              vida: 100,
              defesa:-50,
              forca: 10
            }
        )
        expect(test).toBe(false )
    })
    test("Exercicio 2.f Returns true!", () => {
        const result = validateCharacter({ 
            nome:"Gabriel", 
            vida:100,
            defesa: 50,
            forca: 10
        })
        expect(result).toBe(true)
    } )
} )