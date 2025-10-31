const nums=readline.question('Введите 3 числа через пробел: ').split(' ')
let min=+nums[0]
for(let i=1;i<nums.length;i++){
    if(+nums[i]<min){
        min=nums[i]
    }
}
console.log(min)