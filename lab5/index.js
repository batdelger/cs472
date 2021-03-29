"use strict";

// prob 1
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log("max of 1,2:", max(1, 2));

// prob 2
function maxOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    }
    return num3;
}

console.log("maxOfThree of 1,3,2:", maxOfThree(1, 3, 2));

// prob 3
function isVowel(c) {
    if (c.length !== 1)
        return false;

    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

console.log("isVowel 'a':", isVowel('a'));
console.log("isVowel 'B':", isVowel('B'));

// prob 4
function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }

    return s;
}

console.log("sum of [1, 2, 3, 4]:", sum([1, 2, 3, 4]));

function multiply(arr) {
    let s = 1;
    for (let i = 0; i < arr.length; i++) {
        s *= arr[i];
    }

    return s;
}

console.log("multiply of [1, 2, 3, 4]:", multiply([1, 2, 3, 4]));

// prob 5
function reverse(str) {
    return str.split("").reverse().join("");
}


console.log("reverse of 'jag testar':", reverse("jag testar"));

// prob 6
function findLongestWord(words) {
    return words.reduce((longest, w) => w.length > longest.length ? w : longest, "");
}

console.log("findLongestWord ['jag', 'am', 'testar']:", findLongestWord(["jag", "am", "testar"]));

// prob 7
function filterLongWords(words, i) {
    return words.filter(w => w.length > i);
}

console.log("filterLongWords ['jag', 'am', 'testar'], 3:", filterLongWords(["jag", "am", "testar"], 3));

// prob 8
function computeSumOfSquares(nums) {
    return nums.reduce((acc, n) => acc + n * n, 0);
}

console.log("computeSumOfSquares of [1, 2, 3]:", computeSumOfSquares([1, 2, 3]));

// prob 9
function printOddNumbersOnly(nums) {
    console.log(nums.filter(n => n % 2 === 1));
}

console.log("printOddNumbersOnly [1, 2, 3]:");
printOddNumbersOnly([1, 2, 3]);

// prob 10
function computeSumOfSquaresOfEvensOnly(nums) {
    return nums.filter(n => n % 2 === 0).reduce((acc, n) => acc + n * n, 0);
}

console.log("computeSumOfSquaresOfEvensOnly [1, 2, 3, 4, 5]:", computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

// prob 11
function sum2(nums) {
    return nums.reduce((s, n) => s + n);
}

console.log("sum2 of [1, 2, 3, 4]:", sum2([1, 2, 3, 4]));

function multiply2(nums) {
    return nums.reduce((s, n) => s * n);
}

console.log("multiply2 of [1, 2, 3, 4]:", multiply2([1, 2, 3, 4]));

// prob 12
function findSecondBiggest(nums) {
    let big1 = nums.pop(), big2 = null;

    nums.forEach(n => {
        if (n > big1) {
            big2 = big1;
            big1 = n;
        }
        else if (big2 === null) {
            big2 = n;
        }
        else if (n > big2) {
            big2 = n;
        }
    });

    return big2;
}

console.log("findSecondBiggest [1, 2, 3, 4, 5]:", findSecondBiggest([1, 2, 3, 4, 5]));
console.log("findSecondBiggest [19, 9, 11, 0, 12]:", findSecondBiggest([19, 9, 11, 0, 12]));

// prob 13
function printFibo(n, a, b) {
    let arr = [a, b];
    for(let i = 2; i < n; i ++) {
        arr[i] = arr[i-2] + arr[i-1];
    }
    arr.length = n;
    console.log(`printFibo(n=${n}, a=${a}, b=${b}):`, arr);
}

printFibo(1, 0, 1);
printFibo(2, 0, 1);
printFibo(3, 0, 1); 
printFibo(6, 0, 1);
printFibo(10, 0, 1);