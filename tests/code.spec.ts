const arr = [10, 5, 20, 8, 20];

const unique = [...new Set(arr)];
unique.sort((a, b) => b - a);

console.log(unique[1]);


