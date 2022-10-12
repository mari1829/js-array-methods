let num=[250,12,23,45]
// num.reduce(myfun);
console.log(num.reduce(myfun));
function myfun(total,sum){
    return total-sum;
}