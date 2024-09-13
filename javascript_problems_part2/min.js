const price =[20000, 10000, 15000, 50000, 30000, 100000];

function getMin(numbers) {
    let min = numbers[0];
    for( const num of numbers){
        if (num<min) {
            min=num
        }
        
    }
    return min
}
const cheap = getMin(price);
console.log(cheap);
