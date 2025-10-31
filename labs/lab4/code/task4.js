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