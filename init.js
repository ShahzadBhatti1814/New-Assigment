/*let arr = [
	[1, 2],
	[3, 4],
	[5, 6],
];
let result = [];
for (a = 0; a < arr.length; a++) {
	for (i = 0; i < arr[a].length; i++) {
		result.push(arr[a][i]);
	}
	
}
const getLargestWord = (str) => {
	const bigWordArray = str.split(" ");
	let storeBigWord = "";
	for( a= 0;  a < bigWordArray.length; a++ ) {
		if (bigWordArray[a].length > storeBigWord.length) {
			storeBigWord = bigWordArray[a];
		}
	}
	return storeBigWord;
};
const words = "asdfasd asdfasdfasdfasdf dfd adfasdf";

console.log(getLargestWord(words));*/

// console.log(a)
// console.log(b)
// var a= b=7;

// console.log("7"*3+4)
const str = ["f","u","i","s","v","x"] 
let result = [];
for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
}
for (let i = 0; i < result.length - 1; i++) {
    for (let a = 0; a < result.length - i - 1; a++) {
        if (result[a] > result[a + 1]) {
            let temp = result[a];
            result[a] = result[a + 1];
            result[a + 1] = temp; }}}
			console.log(result)



// console.log(str.sort());