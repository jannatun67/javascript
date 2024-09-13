// 12 inch 1 feet

function inchToFeet(inch) {
    const feet= inch/12;
    return feet;
}
// 12
function inchToFeet2(inch) {
    const feetFraction= inch/12;
    const feetNumber= parseInt(feetFraction);
    const inchRemaining= inch%2;
    const result= feetNumber+ " ft "+ inchRemaining +' inch '
    return result
}


const height= inchToFeet(75);
// console.log(height);
const height2= inchToFeet2(75);
// console.log(height2);



function mileToKilometer(mile) {
    const kilo=mile* 1.60934;
    return kilo;
}
const metter =mileToKilometer(12);
console.log(metter);
