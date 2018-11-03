let n = 1000;
let num = 0;
let sum = 0;
for (let a = 0; a < n; a++){
    sum = n
    n /= 2;
    if (n < 50){
        num = a;
        break;
    }
}
console.log(`Полученое чилсо = ${sum}`);
console.log(`Количество итераций = ${num}`);