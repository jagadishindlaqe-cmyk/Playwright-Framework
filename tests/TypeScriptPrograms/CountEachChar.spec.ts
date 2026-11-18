
let str = "Automattionstesting";

let charCount = new Map<string, number>();

for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
}

console.log(charCount);