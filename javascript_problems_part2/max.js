const jannatun= 60;
const fima= 80;

if (jannatun> fima) {
    console.log('jannatun will get then strawberry');
    
}
else{
    console.log(' fima will eat then strawberry');
    
}

// inside function

function getMax(num1, num2) {
    if (num1>num2) {
        return num1
    }
    else{
        return num2
    }
}
const max = getMax(70, 60)
console.log(max);
