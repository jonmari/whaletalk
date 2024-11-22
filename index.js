let input = 'turpentine and turtles'

let vowels = ["a", "e", "i", "o", "u"]

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    let inputElement = input[i]
    let lowerCaseElement = inputElement.toLowerCase()
    console.log(lowerCaseElement)

    if (lowerCaseElement === "e") {
    resultArray.push(input[i])
    }

    if (lowerCaseElement === "u") {
    resultArray.push(input[i])
    }

    for (let j = 0; j < vowels.length; j++) {
    let vowel = vowels[j] 

    if (lowerCaseElement === vowel) {
        resultArray.push(vowel)
        console.log(resultArray)
    }  
}
}
