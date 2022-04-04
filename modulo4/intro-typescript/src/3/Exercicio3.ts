function checaAnoBissexto(ano:number):string {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    
    if( cond1 || cond2){ 
        return  ""
    }return "não"
 }

 console.log(`Ano ${process.argv[2]} ${checaAnoBissexto(Number(process.argv[2]))} é Bissexto.  `)
