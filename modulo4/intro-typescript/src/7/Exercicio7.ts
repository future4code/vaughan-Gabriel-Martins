const DNA2RNA = (DNA: string) =>{ 

    const arrayDNA = DNA.split("")
   
   
   const arrayRNA = arrayDNA.map((letter) => {
        if(letter.toUpperCase() === "A" ){
            return "U"
        }
        if(letter.toUpperCase() === "T" ){
            return "A"
        }
        if(letter.toUpperCase() === "C" ){
            return "G"
        }
        if(letter.toUpperCase() === "G" ){
            return "C"
        }
    })


    const RNAm1 = arrayRNA.join("")
    
    console.log(RNAm1)

}

DNA2RNA(process.argv[2]);