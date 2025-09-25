import * as readline from 'readline'

//ЗАДАНИЕ 1

const testnum:number=5
const testfloat:number=5.5
const str:string=''
const bool:boolean=true

//ЗАДАНИЕ 2

const myName:string='Andrey'
const myAge:number=21

console.log('меня заовут ',myName,' мой возраст ',myAge);


//ЗАДАНИЕ 3

const num1=342
const num2=56.2
const numStr='43'

console.log(num1+num2+parseInt(numStr))

// ЗАДАНИЕ 4

const a=3
const b=8


console.log((a+4*b)*(a-3*b)+a*a);


//ЗАДАНИЕ 5

const getTriangleAreaP=(a:number,b:number,c:number)=>{
    const P=a+b+c
    const p=P/2
    const area=Math.sqrt(p*(p-a)*(p-b)*(p-c))
    const res={
        P,
        area
    }
    console.log(res);
    
    return res
}

getTriangleAreaP(3,5,6)

// ЗАДАНИЕ 6 
 

console.log(`
*   *   *
 * * * *
  *   * 
    `);


//ЗАДАНИЕ 7

const x:any=9
const y:any='9'

console.log(x==y,x<=y,x>=y,x===y,x!==y,x!=y);
console.log(x+y,x-y,x/y,x*y,x**y,x%y);

//ЗАДАНИЕ 8

console.log(`меня зовут ${myName}, моё имя ${myAge}`);


//ЗАДАНИЕ 9

const origStr='Съешь еще этих мягких французских булок, да выпей чаю'

const arrayedStr=origStr.split(' ')

const joinedStr=arrayedStr.join(' ')

console.log(arrayedStr, joinedStr);


//ЗАДАНИЕ 10

console.log('нет!'.repeat(4),'да!'.repeat(4));


//ЗАДАНИЕ 11

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите три числа через запятую (например, 1,2,3): ', (inputString) => {
  const numbersAsStrings = inputString.split(','); 
  if (numbersAsStrings.length !== 3) {
    throw new Error('ошибка инпута bro')
}
const num1 = parseFloat(numbersAsStrings[0].trim())
const num2 = parseFloat(numbersAsStrings[1].trim());
const num3 = parseFloat(numbersAsStrings[2].trim());

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    throw new Error('не правильный формат ввода')
}
console.log(`Вы ввели числа: ${num1}, ${num2}, ${num3}`);
console.log(`Результат вычисления: ${(num1+num3)/num2}`);
// ЗАДАНИЕ 12
  rl.question('Введите строку от 10 символов: ',(input)=>{
    if(input.length<10){
        throw new Error('надо от 10 символов было')
    }
    const first4=input.slice(0,4)
    const letters4to8=input.slice(4,8)
    const last2=input.slice(8,10)
    const reversed=input.split('').reverse().join('')
    console.log(first4,letters4to8,last2,reversed);
    rl.close()
})
});

