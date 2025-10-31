const readline=require('readline-sync')

const temp=readline.questionInt('Введите температуру: ')
if(temp>=20){
    console.log('Кондиционер включен')
}else{
    console.log('Кондиционер выключен');
}