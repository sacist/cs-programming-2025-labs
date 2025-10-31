const hourRanges=[{range:5,period:'night'},{range:11,period:'morning'},{range:17,period:'day'},{range:23,period:'evening'}]

const hour=readline.questionInt('Введите час (0–23): ')
for(const hourRange of hourRanges){
    if(hour<=hourRange.range){
        console.log(`Сейчас ${hourRange.period}`)
        break
    }
}