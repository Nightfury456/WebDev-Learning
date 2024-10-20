// q1
const arrayAverage=(arr)=>{
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum +=arr[i];
    }
    console.log(sum);
    console.log(sum/arr.length);
}
let arr = [2,4,6,8];
arrayAverage(arr);
                // OR
                // const arrayAverage1=(arr1)=>{
                //     let sum = 0;
                //     for(let num of arr1){
                //         sum += num;
                //     }
                //     return sum / arr1.length; 
                // }
                // let arr1 = [2,4,6,8];
                // console.log(arrayAverage1(arr));

// q2
const isEven = n =>{
    if(n%2 ==0){
        return "even";
    } else {
        return "odd";
    }
}
console.log(isEven(6));

// q3