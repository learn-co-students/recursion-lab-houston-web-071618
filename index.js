function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string === '') return '';
  return reverseString(string.substring(1)) + string[0]
}

function isPalindrome(string) {
  let strLen = string.length;
  if (strLen === 0||strLen === 1){
    return true;
  }
  if (string[0] === string[strLen -1]) {
    return isPalindrome(string.slice(1,strLen - 1))
  }
  return false;
}


// let addUpTo = (array, index) => {
// 	let result = 0;
// 	for (let i=0;i<=index;i++) {
// 		result += array[i];
// 	}
// 	return result;
// }

function addUpTo(array, index) {
	if (index === 0 ) return array[index];
	if (index > 0) {
		return array[index] + addUpTo(array, --index)
	}
}

function maxOf(array) {
  if (array.length ===1) return array[0];
  return Math.max(array.pop(), maxOf(array))
}

function includesNumber(array, number) {
  if (!array.length) return false;
  if (array[0] === number) return true;
  return includesNumber(array.slice(1), number)
}