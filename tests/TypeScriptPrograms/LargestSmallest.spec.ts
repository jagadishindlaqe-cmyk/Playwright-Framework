//largest smallest
let arr: number [] = [2,10,40,45,55,100];
let largest= arr[0];
let smallest= arr[0];
for (let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        largest= arr[i];
    }
    if(arr[i]<smallest){
        smallest= arr[i];
    }
}
console.log('largest arr:',largest);
console.log('smallest arr:', smallest);

