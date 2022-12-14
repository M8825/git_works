// console.log(10 > 10);                        // false
// console.log(10 >= 10);                       // true
// console.log(10 < 11);                        // true
// console.log(10 <= 10);                       // true
// console.log(10 === 10);                      // true
// console.log(10 !== 11);                      // true
// console.log(0 === -0);                       // true
// console.log(false !== true);                 // true


// 1. Indexing - Returns the character at certain position
// Way to access our data

console.log("hello"[0]);                     // "h"
console.log("hello"[1]);                     // "e"
console.log("hello"[2]);                     // "l"
console.log("hello"[6]);                     // undefined; default value when no value present
console.log("hi bye"[2]);                    // " "


// 3. indexOf - Returns the index where the substring is first found
console.log("hello".indexOf('e'));           // 1
console.log("hello".indexOf("l"));           // 2; returns the left-most char for duplicates
console.log("hello".indexOf('llo'));         // 2; returns index where substring starts
console.log("hello".indexOf('x'));           // -1; returns -1 if char is not present