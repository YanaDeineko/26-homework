let sum = 0.1 + 0.2;
alert(sum.toFixed(1));

let d = "1";
let e = 2;
alert(+d + e);

const a = '0.82';
let size = prompt('Write the volume of the flash drive in GB, please.');
let totally = size / a;
alert(Math.floor(totally) + ' files can fit on a flash drive.');

let userTotalMoney = prompt('How much money do you have?');
let priseOfChocolate = prompt('How much is chocolate?');
alert('You can buy ' +Math.floor(userTotalMoney / priseOfChocolate) + ' chocolates!')
alert('You balance is ' + userTotalMoney%priseOfChocolate);

let userNumber = prompt('Write a three-digit number, please.');
let y = 0;
for (; userNumber; userNumber = Math.floor(userNumber / 10)){
    y *=10;
    y += userNumber % 10;
}
alert(y);

let userSum = prompt('Enter the investment amount for 2 months, please.');
let i = userSum / 100 * 5;
alert('Your interest is '+ i);

alert(2 && 0 && 3);// 0, потому что, это первое «ложное» значение из списка.
alert(2 || 0 || 3);// 2, потому что, это первое «истинное» значение из списка.
alert(2 && 0 || 3);// 3, потому что, 0 || 3 это 3 - «истинное» значение из списка.




