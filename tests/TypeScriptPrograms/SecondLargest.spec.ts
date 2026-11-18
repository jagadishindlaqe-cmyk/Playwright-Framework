//second largest 
let arr: number []= [10,40,30,50,30,15];
let largest= -Infinity;
let secondlargest= -Infinity;
for (let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondlargest=largest;
        largest= arr[i];
    }
    else if(arr[i]>secondlargest && arr[i] !== largest){
        secondlargest= arr[i];
    }
}
console.log("Largest:", largest);
console.log("second largest:",secondlargest);
