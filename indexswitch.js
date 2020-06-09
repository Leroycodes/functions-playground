function pocketMoneyCaulc(age) {
    switch (age) {
        case 10:
            return 10;
        case 11:
            return 15;
        case 12:
            return 20;
        case 13:
            return 25;
        case 13:
            return 30;
        case 14:
            return 35;
        default:
            return 50;

    }
}

const age = 12
const age1 = 10
const age2 = 16
const age3 = 13

const allowence = pocketMoneyCaulc(age)
const allowence1 = pocketMoneyCaulc(age1)
const allowence2 = pocketMoneyCaulc(age2)
const allowence3 = pocketMoneyCaulc(age3)

console.log('for age ' + age + ' alowence ' + allowence)
console.log('for age ' + age1 + ' alowence ' + allowence1)
console.log('for age ' + age2 + ' alowence ' + allowence2)
console.log('for age ' + age3 + ' alowence ' + allowence3)