const priceRanges=[{range:999,discount:0},{range:4999,discount:0.05},{range:9999,discount:0.1},{range:Infinity,discount:0.15}]

const checkSum=readline.questionInt('Введите сумму покупки: ')
for(const priceRange of priceRanges){
    if(checkSum<=priceRange.range){
        console.log(`Ваша скидка: ${priceRange.discount}%\nК оплате: ${checkSum-checkSum*priceRange.discount}`)
        break
    }
}