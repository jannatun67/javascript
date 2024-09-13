const heights= [87, 67, 78, 59, 60, 78, 68,70];

function getMax(numbers) {
    let max= numbers[0];
    for(const num of numbers){
        // console.log(num);
        if (num>max) {
            max=num;
        }
    }
    return max
}

const  max = getMax(heights);
// console.log(max);



const height= [70, 57, 60, 70,67,80,66,]

function getMin(numbers) {
    let min= numbers[0];
   for(const num of numbers){
    // console.log(num);
        if (num<min) {
           min=num
        }
   }
    return min
}
const min= getMin(height);
console.log(min);

