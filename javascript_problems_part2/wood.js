function woodQuantity(chairQuantity, tableQuantity,bedQuantity) {
    const perChairWood= 3;
    const perTableWood= 10;
    const perBedWood=50;

    const chairTotalWood= chairQuantity*perChairWood;
    const tableTotalWood = tableQuantity* perTableWood;
    const bedTotalWood = bedQuantity* perBedWood;
    const totalWood= chairTotalWood+ tableTotalWood+bedTotalWood;
    return totalWood;
}
const wood= woodQuantity(0, 0, 4);
// console.log(wood);


function dress(shirt, pant, shoe) {
    const perShirt= 500;
    const perPant=300;
    const perShoe= 900;

    const perTotalShirtPrice=shirt*perShirt;
    const perTotalPantPrice= pant*perPant;
    const perTotalShoePrice= shoe*perShoe;
    const totalPrice=perTotalPantPrice+ perTotalShirtPrice+perTotalShoePrice;
    return totalPrice;
}
const price= dress(3, 2, 1);
console.log(price);
