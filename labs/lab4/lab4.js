// ЗАДАНИЕ 1

const readline=require('readline-sync')

const temp=readline.questionInt('Введите температуру: ')
if(temp>=20){
    console.log('Кондиционер включен')
}else{
    console.log('Кондиционер выключен');
}
// Задание 2
const seasons=['Зима','Весна','Лето','Осень']

const seasonNum=readline.questionInt('Введите номер месяца: ')
if(seasonNum>seasons.length||seasonNum<0){
    throw new Error()
}

console.log(seasons[seasonNum-1]);


// Задание 3

const dogAge=readline.questionInt('Введите возраст собаки (в годах): ')

if(dogAge<1){
    throw new Error('Число меньше 1')
}
if(dogAge>22){
    throw new Error('Число больше 22')
}

console.log(`Возраст собаки в человеческих годах: ${dogAge===1?10.5:10.5*2+(dogAge-2)*4}`);


//Задание 4

const numTask4=readline.questionInt('Введите число: ')

const sumTask4=+numTask4.toString().split('').reduce((acc,curr)=>{
    return acc+Number(curr)
},0)
const strTask4=numTask4.toString()
if(+strTask4[strTask4.length-1]%2===0&&sumTask4%3===0){
    console.log('Число делится на 6')
}else{
    console.log('Число не делится на 6')
}

// Задание 5

const checkPassword=(password)=> {
    const errors = []

    if (password.length < 8) {
        errors.push("Длина пароля менее 8 символов")
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Отсутствуют заглавные латинские буквы")
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Отсутствуют строчные латинские буквы")
    }

    if (!/\d/.test(password)) {
        errors.push("Отсутствуют цифры")
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Отсутствуют специальные знаки")
    }

    if (errors.length === 0) {
        console.log("Пароль надёжный!")
        return true
    } else {
        console.log("Пароль недостаточно надёжен. Проблемы:")
        errors.forEach(error => console.log("- " + error))
        return false
    }
}

const userPassword = "MyPass123!"
checkPassword(userPassword)


// Задание 6

const year=readline.questionInt('Введите год: ')

if(year%4===0&&year%100!==0||year%400===0){
    console.log(`${year} - високосный год`)
}

// Задание 7

const nums=readline.question('Введите 3 числа через пробел: ').split(' ')
let min=+nums[0]
for(let i=1;i<nums.length;i++){
    if(+nums[i]<min){
        min=nums[i]
    }
}
console.log(min)

// Задание 8

const priceRanges=[{range:999,discount:0},{range:4999,discount:0.05},{range:9999,discount:0.1},{range:Infinity,discount:0.15}]

const checkSum=readline.questionInt('Введите сумму покупки: ')
for(const priceRange of priceRanges){
    if(checkSum<=priceRange.range){
        console.log(`Ваша скидка: ${priceRange.discount}%\nК оплате: ${checkSum-checkSum*priceRange.discount}`)
        break
    }
}

// Задание 9

const hourRanges=[{range:5,period:'night'},{range:11,period:'morning'},{range:17,period:'day'},{range:23,period:'evening'}]

const hour=readline.questionInt('Введите час (0–23): ')
for(const hourRange of hourRanges){
    if(hour<=hourRange.range){
        console.log(`Сейчас ${hourRange.period}`)
        break
    }
}

// Задание 10

const num = readline.questionInt('Введите число: ')

if (num <= 1) {
    console.log(`${num} - не является простым числом.`)
} else {
    const isPrime = (n) => {
        if (n === 2) return true
        if (n % 2 === 0) return false
        const limit = Math.sqrt(n)
        for (let i = 3; i <= limit; i += 2) {
            if (n % i === 0) {
                return false
            }
        }
        return true
    }

    if (isPrime(num)) {
        console.log(`${num} - простое число`)
    } else {
        console.log(`${num} - составное число`)
    }
}