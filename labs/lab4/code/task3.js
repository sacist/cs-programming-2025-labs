const dogAge = readline.questionInt('Введите возраст собаки (в годах): ')

if (dogAge < 1) {
    throw new Error('Число меньше 1')
}
if (dogAge > 22) {
    throw new Error('Число больше 22')
}

console.log(`Возраст собаки в человеческих годах: ${dogAge === 1 ? 10.5 : 10.5 * 2 + (dogAge - 2) * 4}`);
