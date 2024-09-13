const products=[
    {name:'shampo', price:200},
    {name:'chiruni', price:100},
    {name:'shart', price:500},
    {name:'pant', price:700},
   
];

function getShoppingTotal(products) {
    let sum=0;
   for(const product of products){
    sum= sum+ product.price
    
   }
   return sum
}
const total= getShoppingTotal(products);
console.log(total);
