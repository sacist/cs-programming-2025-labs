//Задание 1
console.log('Задание 1');

const logNameAge10 = (str) => {
    const [name, age] = str.split(' ')
    for (let i = 0; i < 10; i++) {
        console.log(`Меня зовут ${name}, и мне ${age} лет`);

    }
}

logNameAge10('Андрей 20')
//Задание 2
console.log('Задание 2');

const num = 8
for (let i = 1; i <= 9; i++) {
    console.log(`${num}*${i}=${num * i}`);

}

// Задание 3
console.log('Задание 3');

for (let i = 3; i < 100; i += 3) {
    if (i < 100) {
        console.log(i);
    }

}

// Задание 4
console.log('Задание 4');

const numForFactorial = 9
let res = 1
for (let i = 2; i <= numForFactorial; i++) {
    res = res * i
}
console.log(res);


// Задание 5
console.log('Задание 5');

let whileCount = 20

while (whileCount >= 0) {
    console.log(whileCount);
    whileCount--
}

// Задание 6
console.log('Задание 6');

const logFibNums = (countTo) => {
    if (countTo <= 0) return
    if (countTo >= 1) console.log(0)
    if (countTo >= 2) console.log(1)

    let firstNum = 0
    let secNum = 1

    for (let i = 2; i < countTo; i++) {
        const nextNum = firstNum + secNum
        console.log(nextNum)
        firstNum = secNum
        secNum = nextNum
    }
}

logFibNums(5)

// Задание 7
console.log('Задание 7');

const transmuteStr = (str) => {
    const splitted = str.split('')
    const mapped = splitted.map((val, idx) => {
        const num = idx + 1
        return val + num.toString()
    })
    const res = mapped.join('')
    console.log(res);
}

transmuteStr('Привет')

// Задание 8

console.log('Задание 8');

const imitateUserInput=(range1,range2) => {
    for(;;){
        const randNum1=Math.floor(Math.random()*range1+1)
        const randNum2=Math.floor(Math.random()*range2+1)
    
        console.log(randNum1+randNum2);
        
    }
}

// imitateUserInput(500,10)