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