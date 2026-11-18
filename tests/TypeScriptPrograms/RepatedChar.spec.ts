let arr: number [] = [20,30,10,20,20,40,50,40];
const duplicates: number[]= [];
for (let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j] && ! duplicates.includes(arr[i])){
            duplicates.push(arr[i]);
        }
    }

}
console.log(duplicates);

