// Functions

// duchod = 65 let
// vypočítat věk

function calculateAge(birth) {
    return 2023 - birth
}

let ageMartin = calculateAge(1999)

console.log(ageMartin)

function calculatePension(pension) {
    return pension - ageMartin
}

let martinPension = calculatePension(65)

console.log(martinPension)

let check = ageMartin + martinPension
console.log(check + " Sedí to. Nice.")