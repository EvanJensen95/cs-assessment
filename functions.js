
// LONGEST WORD
function find_longest_word(str) {
    const splStrArr = str.split(' ');

    let longestWord = '';
    for(let i = 0; i < splStrArr.length; i++) {
        if(splStrArr[i].length > longestWord.length) {
            longestWord = splStrArr[i];
        }
    }
    return longestWord
}

find_longest_word('I’m just a simple man trying to make my way in the universe')

//Big O runtime would be O(n)


// UNIQUE CHARACTER

function findUniqueChar(str){
    let uniqueChar = 'C';

    for(let i = 0; i < str.length; i++){
        if (uniqueChar.includes(str[i] === false)) { 
            uniqueChar += str[i]
        }
    }
    return uniqueChar;
}
console.log(findUniqueChar('Check it out'))

