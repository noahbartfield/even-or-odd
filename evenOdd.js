const evenOdd = (num) => {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}


const return1 = evenOdd(6)
console.log(return1)

const return2 = evenOdd(7)
console.log(return2)


const numbers = [7,5,3,4,2,3,6,5,3,1,7,9,56,24,58,79,13,2]

numbers.forEach(currentNumber => {
    const isItEvenOrOdd = evenOdd(currentNumber)
    console.log(isItEvenOrOdd)
});
