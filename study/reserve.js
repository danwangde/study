var arr=[1,20,30,5];

console.log(arr.sort());//默认字符串排序

function compare(a,b) {
    if (a<b){
        return -1;
    } else if (a>b){
        return 1;
    } else{
        return 0;
    }
}

arr.sort(compare);
console.log(arr);