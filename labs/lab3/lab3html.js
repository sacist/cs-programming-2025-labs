// ЗАДАНИЕ 1
const div1 = document.querySelector('#lab3task1')
const input1 = document.querySelector('#lab3task1>input')
const button1 = document.querySelector('#lab3task1>button')
button1.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        const [name, age] = input1.value.split(' ')
        const text = `Меня зовут ${name}, и мне ${age} лет`
        const child = document.createElement('div')
        child.innerText = text
        div1.appendChild(child)
    }
})

// ЗАДАНИЕ 2

const div2 = document.querySelector('#lab3task2')
const input2 = document.querySelector('#lab3task2>input')
const button2 = document.querySelector('#lab3task2>button')
button2.addEventListener('click', () => {
    for (let i = 1; i <= 9; i++) {
        const val = input2.value
        const text = `${val}x${i}=${+val * i}`
        const child = document.createElement('div')
        child.innerText = text
        div2.appendChild(child)
    }
})

// ЗАДАНИЕ 3

const div3 = document.querySelector('#lab3task3')
const input3 = document.querySelector('#lab3task3>input')
const button3 = document.querySelector('#lab3task3>button')
button3.addEventListener('click', () => {
    for (let i = 2; i <= 100; i += 3) {
        const child = document.createElement('div')
        child.innerText = i
        div3.appendChild(child)
    }
})

// ЗАДАНИЕ 4

const div4 = document.querySelector('#lab3task4')
const input4 = document.querySelector('#lab3task4>input')
const button4 = document.querySelector('#lab3task4>button')
button4.addEventListener('click', () => {
        const numForFactorial = input4.value
        let res=1
        for (let i = 2; i <= numForFactorial; i++) {
            res = res * i
        }
        const text = res
        const child = document.createElement('div')
        child.innerText = text
        div4.appendChild(child)
})

// ЗАДАНИЕ 5

const div5 = document.querySelector('#lab3task5')
const button5 = document.querySelector('#lab3task5>button')
button5.addEventListener('click', () => {
    let whileCount=20
    while(whileCount>=0) {
        const text = whileCount
        const child = document.createElement('div')
        child.innerText = text
        div5.appendChild(child)
        whileCount--
    }
})

// ЗАДАНИЕ 6

const div6 = document.querySelector('#lab3task6');
const input6 = document.querySelector('#lab3task6>input');
const button6 = document.querySelector('#lab3task6>button');

button6.addEventListener('click', () => {
    const countTo = +input6.value

    if (countTo <= 0) return

    if (countTo >= 1) {
        const child1 = document.createElement('div')
        child1.innerText = '0'
        div6.appendChild(child1)
    }

    if (countTo >= 2) {
        const child2 = document.createElement('div')
        child2.innerText = '1'
        div6.appendChild(child2)
    }

    if (countTo <= 2) return

    let firstNum = 0
    let secNum = 1

    for (let i = 2; i < countTo; i++) {
        const nextNum = firstNum + secNum
        const child = document.createElement('div')
        child.innerText = nextNum
        div6.appendChild(child)
        firstNum = secNum
        secNum = nextNum
    }
});

// ЗАДАНИЕ 7

const div7 = document.querySelector('#lab3task7')
const input7 = document.querySelector('#lab3task7>input')
const button7 = document.querySelector('#lab3task7>button')
button7.addEventListener('click', () => {
    const str = input7.value
    const splitted = str.split('')
    const mapped = splitted.map((val, idx) => {
        const num = idx + 1
        return val + num.toString()
    })
    const res = mapped.join('')
    const child = document.createElement('div')
    child.innerText = res
    div7.appendChild(child)
})

// ЗАДАНИЕ 8

const div8 = document.querySelector('#lab3task8')
const input8 = document.querySelector('#lab3task8>input')
const button8 = document.querySelector('#lab3task8>button')

const handleTask8Click = (inputElem, buttonElem) => {
    const [num1, num2] = inputElem.value.split(' ')
    const sum = (+num1 || 0) + (+num2 || 0)
    const child = document.createElement('div')
    child.innerText =  sum
    div8.appendChild(child)

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.placeholder = 'Введите два числа через пробел'

    const newButton = document.createElement('button')
    newButton.textContent = 'Посчитать'

    newButton.addEventListener('click', () => {
        handleTask8Click(newInput, newButton)
    })

    div8.appendChild(newInput)
    div8.appendChild(newButton)
}

button8.addEventListener('click', () => {
    handleTask8Click(input8, button8)
})