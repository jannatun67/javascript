const phone =[
    {name:'samsung',price:20000, camera:'12mp', color:'black'},
    {name:'Xoami',price:17000, camera:'12mp', color:'black'},
    {name:'Iphone',price:100000, camera:'12mp', color:'black'},
    {name:'oppo',price:24000, camera:'12mp', color:'black'},
    {name:'walton',price:25000, camera:'12mp', color:'black'},
];
function getCheapest(phones) {
    let  min= phones[0];
    for(const phn of phones){
        // console.log(phn);
        if (min.price<phn.price) {
            min=phn
        }
    }
    return min
}
const cheap = getCheapest(phone);
// console.log(cheap);


const mobile=[
    {name:'samsung',price:20000, camera:'12mp', color:'black'},
    {name:'Xoami',price:17000, camera:'12mp', color:'black'},
    {name:'Iphone',price:100000, camera:'12mp', color:'black'},
    {name:'oppo',price:24000, camera:'12mp', color:'black'},
    {name:'walton',price:25000, camera:'12mp', color:'black'},
]

function getMax(Phones) {
    let max= Phones[0];
   for(const phn of Phones){
      if (max.price<phn.price) {
        max=phn
      }
        
   }
    return max
}

const big =getMax(mobile);
console.log(big);
