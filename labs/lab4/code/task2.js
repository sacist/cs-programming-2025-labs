const seasons=['Зима','Весна','Лето','Осень']

const seasonNum=readline.questionInt('Введите номер месяца: ')
if(seasonNum>seasons.length||seasonNum<0){
    throw new Error()
}

console.log(seasons[seasonNum-1]);