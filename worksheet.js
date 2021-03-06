// PART 0: Write a function called squareDance() that squares each number in an array.
function squareDance(array){
    var newArray = []
    for (var i = 0; i < array.length ; i++){
        var squared = array[i]*array[i]
        newArray.push(squared)
    }
    return newArray
}

// PART 1: write a function called nicer(). 
// It should clean up the language in its input sentence. 
// Forbidden words include heck, dang, crappy, and dang.
function contains(val,seq){
    for (var i = 0; i < seq.length; i ++){
        if (seq[i] === val){
            return true
        }
    }
    return false
}

var badWords = ["heck","darn","dang","crappy"]

function nicer(string){
    var stringToArray = string.split(' ')
    var niceSentence=''
    for (var i = 0; i < stringToArray.length; i++){
        if (contains(stringToArray[i], badWords)===false){
            niceSentence += " " + stringToArray[i] //only add words to niceSentence is bad words are not included
        }
    }
    return niceSentence.trim()
}

// // PART 2: write a function called capitalizeAll(). 
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence. 
function firstLetterCapitalized (word){//function that capitalizes first letter of one word
    var letterOne = word.substring(0,1)//finds first letter
    var capitalizedLetter = letterOne.toUpperCase()//to upper case
    return capitalizedLetter + word.substring(1)//concatenates capitalized first letter and rest of word
}

function capitalizeAll(sentence){
    var newArray = sentence.split(' ')
    var newSentence = ''
    for (var i = 0; i < newArray.length; i++){
        newArray[i] = firstLetterCapitalized(newArray[i])//apply first letter capitalizer to each word
        newSentence += newArray[i] + " "//add each word to newSentence
    }
    return newSentence.trim()
}


// // PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)
function firstLetterCapitalized (word){
    var letterOne = word.substring(0,1)
    var capitalizedLetter = letterOne.toUpperCase()
    return capitalizedLetter + word.substring(1)
}

function properSentences(sentence){
    var newArray = sentence.split('. ')//split based on period
    var finalSentence = ''
    for (var i = 0; i < newArray.length; i++){
        newArray[i] = firstLetterCapitalized(newArray[i])//update each array in index to have a caiptalized 1st letter on first word
        finalSentence += newArray[i] + " "//update final sentence based on new array
    }
    finalSentence = newArray.join('. ')//join the array with a period
    return finalSentence
}



// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 
function iPutTheFunIn(string){
    var halfStringLength = (string.length/2)
    var leftHalf = string.substring(0, halfStringLength)//identify the left half of the string
    var funWord = (leftHalf+"fun"+string.substring(halfStringLength,string.length))//stick fun in the middle
    return funWord
}

// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 

function split (string, delimiter){
    var tempString = ''
    var splitArray = []
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== delimiter) {//if individual character in the string do not equal the delimiter
            tempString += string[i]//push those individual letters to the tempString
        }
        else {
            splitArray.push(tempString)//once delimiter is found (aka character in loop = delimiter), push it to the array as individual itteratin of array
            tempString = ''//each time you push to the array, you empty your string out
        }
    }
    return splitArray
}


// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).
function addOne(number){
    return number + 1
}

function divideByTen(number){
    return number/10
}

function pipeline(startingValue, function1, function2){
    if (typeof(function1) === "function" && typeof(function2)==="function"){
        var result1 = function1(startingValue)
        var result2 = function2(result1)
    }
    return result2
}
// // visit test.js to see the tests that will be run against your code.


