"use strict";
const DNA2RNA = (DNA) => {
    const arrayDNA = DNA.split("");
    const arrayRNA = arrayDNA.map((letter) => {
        if (letter.toUpperCase() === "A") {
            return "U";
        }
        if (letter.toUpperCase() === "T") {
            return "A";
        }
        if (letter.toUpperCase() === "C") {
            return "G";
        }
        if (letter.toUpperCase() === "G") {
            return "C";
        }
    });
    const RNAm = arrayRNA.join("");
    console.log(RNAm);
};
DNA2RNA(process.argv[2]);
