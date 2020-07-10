// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

// First I need to declare my function and arguments. I know this function is going to take in a number that we will test, so I'll call it num

// I remember using ternary operators when I went through freecodecamp.org. I feel pretty comfortable with if statements so I want to try and get some practice with ternaries here. 

const divByThree = (num) => {return num % 3 === 0 ? 

//According to my notes, I want to use the return statement before the condition, and then give the statement if true after the question mark

    `${num} is evenly divisible by three`

//Now I can give the statement if false

    :`${num} is not evenly divisible by three`}

//Perfect, now I just need to console.log it. 

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

console.log(divByThree(num1))
console.log(divByThree(num2))
console.log(divByThree(num3))

// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// First I'll declare my function and arguments which will be an array in this case

const capitalizer = (array) => {

// Here I think I'll want to use a map function. This will allow me to create a new array with the result of all the elements after I perform my capitalization function on them

    let capitalNouns = array.map(word => {

// Here I will string.splice("") the characters into an array

            let wordArray = word.split("")

// Now I can use my toUpperCase method to capitalize the first letter of each word (I had to debug this line, finally realizing I have to overwrite the original value to get it to work)

            wordArray[0] = wordArray[0].toUpperCase()

// Finally, I will return the result of joining those word arrays back into strings

            return wordArray.join("")
    })

// So as not to modify the original data set, I'll just return our local variable as the output to the function

    return capitalNouns
}

console.log(capitalizer(randomNouns))

// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]

// First I'll declare my function with the argument of an array

const sortedNumbers = (array) => {

// Now, I think I'll use a filter method to create an array of only the numbers in this mixed data array

    let onlyNumbers = array.filter(value => typeof value == "number")

// Here I will use a sort method to sort the array numerically, being careful to define the sort method because Javascript has a hard time with type coersion

    let sortedNumberArray = onlyNumbers.sort(function(a, b){return a - b})

// Finally I need to return the sorted array

    return sortedNumberArray
}
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

console.log(sortedNumbers(mixedDataArray))


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const firstVowel = (word => {

// First I want to declare a predefined vowel array

    let vowelArray = ['a', 'e', 'i', 'o', 'u']

// Now I can split my word into an array to perform logic on

    let wordArray = word.split("")

// After some research on the findIndex() method, I need to pass a function in so I will go ahead and declare that function now

    let vowelCheck = (letter => vowelArray.includes(letter))

// Finally, I can simply return the result of the findIndex method checking for vowels on my word array.

    return wordArray.findIndex(vowelCheck)
})

console.log(firstVowel(vowelTester1))
console.log(firstVowel(vowelTester2))


// --------------------5) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// Here I'm going to declare my function with an input of an array

const catAnimals = (array => {

// Next I want to filter out the elements that are of type "cat", using dot notation to access the ojbects properties

    return array.filter(value => value.animal == "cat")
})

console.log(catAnimals(toonimals))

// --------------------6) Using the toonimals variable, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// I can simply add the bang operator to the front of my comparison to reverse the logic

const notCatAnimals = (array => {
    let notCats = array.filter(value => value.animal !== "cat")
    let notCatNames = notCats.map(value => value.name)
    return notCatNames.join(" ")
})

console.log(notCatAnimals(toonimals))