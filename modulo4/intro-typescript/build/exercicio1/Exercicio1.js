"use strict";
function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero";
    }
    else {
        return "Isósceles";
    }
}
console.log(checaTriangulo(1, 1, 1));
console.log(checaTriangulo(1, 2, 3));
console.log(checaTriangulo(1, 1, 2));
