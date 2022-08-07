let input = "I am kubilay and learning javascript by codecademy";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
        resultArray.push(input[i]);
    } else if (input[i] === "u") {
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
}
// console.log(resultArray);
let resultString = resultArray.join(" ").toUpperCase();
console.log(resultString);
