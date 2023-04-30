// Number 1
const reverseNumber = (number) => {
    let reverse = 0;
    while (number > 0) {
        reverse = (reverse * 10) + (number % 10);
        number = Math.floor(number / 10);
    }
    return reverse;
}

console.log(reverseNumber(12345));

// Number 2
const isPalindrome = (word) => {
    word = word.replace(/\s/g, '').toLowerCase();

    if (word === word.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }

}

console.log(isPalindrome('nurses run'));
console.log(isPalindrome('fox'));

// Number 3
const stringCombinations = (word) => {
    let result = [];
    let wordArr = word.split('');

    for (let i = 0; i < wordArr.length; i++) {
        for (let j = i + 1; j < wordArr.length + 1; j++) {
            result.push(wordArr.slice(i, j).join(''));
        }
    }
    return result;
}

console.log(stringCombinations('dog'));

// Number 4
const alphabetSort = (word) => {
    return word.split('').sort().join('');
}

console.log(alphabetSort('webmaster'));

// Number 5
const capitalizeFirstLetter = (sentence) => {
    let words = sentence.split(' ');

    words = words.map((word) => {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        return word;
    });

    return words.join(' ');

}

console.log(capitalizeFirstLetter('the quick brown fox'));

// Number 6
const findLongestWord = (sentence) => {

    let words = sentence.split(' ');
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(findLongestWord('Web Development Tutorial'));

// Number 7
const numVowels = (word) => {
    let vowels = 'aeiou';
    let count = 0;

    word = word.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1) {
            count++;
        }
    }


    return count;
}

console.log(numVowels('The quick brown fox'));

// Number 8 
const isPrime = (number) => {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;

        }
    }
    return true;
}

console.log(isPrime(13));
console.log(isPrime(4));

// Number 9
const getType = (value) => {
    return typeof value;
}

console.log(getType(12));
console.log(getType('hello'));
console.log(getType(true));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(function myFunction() { }));

// Number 10
const matrixIdentity = (n) => {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                matrix[i][j] = 1;
            } else {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

console.log(matrixIdentity(3));

// Number 11
const secondLowestSecondHighest = (arr) => {
    let sortedArr = arr.sort();
    return [sortedArr[1], sortedArr[sortedArr.length - 2]];
}

console.log(secondLowestSecondHighest([1, 2, 3, 4, 5]));

// Number 12
const isPerfect = (number) => {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number) {
        return true;
    } else {
        return false;
    }
}

console.log(isPerfect(28));

// Number 13
const getFactors = (number) => {
    let factors = [];

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

console.log(getFactors(28));

// Number 14
const amountToCoins = (amount, coins) => {
    let result = [];

    while (amount > 0) {
        if (amount - coins[0] >= 0) {
            amount -= coins[0]
            result.push(coins[0])
        } else {
            coins.shift();
        }
    }

    return result;
}


console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

// Number 15
const power = (base, exponent) => {
    return Math.pow(base, exponent);
}

console.log(power(2, 3));

// Number 16
const uniqueLetters = (word) => {
    let unique = "";

    for (let i = 0; i < word.length; i++) {
        if (unique.indexOf(word[i]) === -1) {
            unique += word[i];
        }
    }

    return unique;
}

console.log(uniqueLetters('thequickbrownfoxjumpsoverthelazydog'));

// Number 17
const numOccurrences = (word) => {
    let occurrences = {};

    for (let i = 0; i < word.length; i++) {
        if (occurrences[word[i]] === undefined) {
            occurrences[word[i]] = 1;
        } else {
            occurrences[word[i]]++;
        }
    }

    return occurrences;
}

console.log(numOccurrences('thequickbrownfoxjumpsoverthelazydog'));

// Number 18
const binarySearch = (arr, value) => {
    let start = 0;
    let end = arr.length - 1;
    let middle;

    while (start <= end) {
        middle = Math.floor((start + end) / 2);

        if (arr[middle] === value) {
            return middle;
        } else if (arr[middle] < value) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));

// Number 19
const largerThan = (arr, number) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > number) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(largerThan([1, 2, 3, 4, 5], 3));

// Number 20
const randomString = (length) => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

console.log(randomString(8));

// Number 21
const subsetCombinations = (arr, length) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = [];
        temp.push(arr[i]);

        for (let j = i + 1; j < arr.length; j++) {
            temp.push(arr[j]);
            if (temp.length === length) {
                result.push(temp);
                temp = [];
                temp.push(arr[i]);
            }
        }
    }

    return result;

}

console.log(subsetCombinations([1, 2, 3], 2));

// Number 22
const countOccurrence = (string, char) => {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }

    return count;
}

console.log(countOccurrence('microsoft.com', 'o'));

// Number 23
const firstUniqueLetter = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
            return string[i];
        }
    }

    return null;
}

console.log(firstUniqueLetter('abacddbec'));

// Number 24
const bubbleSort = (arr) => {
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                swapped = true;
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }

    }
    return arr;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// Number 25
const longestCountryName = (countries) => {
    let longest = "";

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longest.length) {
            longest = countries[i];
        }
    }

    return longest;
}

console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

// Number 26
const longestSubstring = (string) => {
    let longest = "";
    let temp = "";

    for (let i = 0; i < string.length; i++) {
        if (temp.indexOf(string[i]) === -1) {
            temp += string[i];
        } else {
            if (temp.length > longest.length) {
                longest = temp;
            }
            temp = "";
            temp += string[i];
        }
    }

    return longest;


}

console.log(longestSubstring("google.com"));

// Number 27
const longestPalindrome = (string) => {
    let longest = "";

    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            let temp = string.substring(i, j);
            let reversed = temp.split("").reverse().join("");

            if (temp === reversed) {
                if (temp.length > longest.length) {
                    longest = temp;
                }
            }
        }
    }

    return longest;
}

console.log(longestPalindrome("abracadabra"));

// Number 28
const passInCallback = (callback) => {
    callback();
}

passInCallback(() => {
    console.log("Hello World");
});

// Number 29
const getFunctionName = (func) => {
    return func.name;
}

console.log(getFunctionName(getFunctionName));
