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
            niceSentence += " " + stringToArray[i]
        }
    }
    return niceSentence.trim()
}

// // PART 2: write a function called capitalizeAll(). 
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence. 
function firstLetterCapitalized (word){
    var letterOne = word.substring(0,1)
    var capitalizedLetter = letterOne.toUpperCase()
    return capitalizedLetter + word.substring(1)
}

function capitalizeAll(sentence){
    var newArray = sentence.split(' ')
    var newSentence = ''
    for (var i = 0; i < newArray.length; i++){
        newArray[i] = firstLetterCapitalized(newArray[i])
        newSentence += newArray[i] + " "
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
    var newArray = sentence.split('. ')
    var newSentence = ''
    for (var i = 0; i < newArray.length; i++){
        newArray[i] = firstLetterCapitalized(newArray[i])
        newSentence += newArray[i] + " "
    }
    var finalSentence = newArray.join('. ')
    return finalSentence
}


// // PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 
function iPutTheFunIn(string){
    var halfStringLength = (string.length/2)
    var leftHalf = string.substring(0, halfStringLength)
    var funWord = (leftHalf+"fun"+string.substring(halfStringLength,string.length))
    return funWord
}

// // HARD MODE

// // PART 5: write a function called split(). it should take two inputs: (1) a string and (2) a delimiter

// // obviously, you may not use the native .split() method. your task here is to reverse-engineer .split() and write your own. 


// // PART 6: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// // visit test.js to see the tests that will be run against your code.


