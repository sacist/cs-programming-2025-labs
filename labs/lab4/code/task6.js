const year=readline.questionInt('Введите год: ')

if(year%4===0&&year%100!==0||year%400===0){
    console.log(`${year} - високосный год`)
}