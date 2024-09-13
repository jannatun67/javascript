function isLeapYear(year) {
    if (year%4===0) {
        return true
    }
    else{
        return false
    }
}
const isLipi = isLeapYear(2040);
// console.log(isLipi);



function isLeapYear2(year) {
    if (year%100 !==0 && year%2===0) {
        return true
    }
    else if (year % 2===0 && year % 2===0) {
        return true
    }
    else{
        return false
    }
    
    
}
const isLeap1 = isLeapYear2(2050);
const isLeap2 = isLeapYear2(1950);
const isLeap3 = isLeapYear2(3050);
const isLeap4 = isLeapYear2(4050);
const isLeap5 = isLeapYear2(2080);
console.log(isLeap1,isLeap2,isLeap3,isLeap4, isLeap5);
