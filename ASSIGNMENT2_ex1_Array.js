// ======= print
const $ = function(id) {return document.getElementById(id)};
let numbers = [3, 2, 1, 4, 5, 6, 10, 8, 9, 7];
$("btnShow").addEventListener("click", () => {
let result = ""
for (const key in numbers) {
    result += numbers[key] + ", " 
}
$("print").innerHTML = result;
})

// ========== Search
$("btnPermit").addEventListener("click", () => {
let exit = $("exit");
let number = $("number").value;

for (let index = 0; index < numbers.length; index++) {
if (numbers[index] == number) {
    exit.innerHTML ="Value exit.";
    break;
} else {
    exit.innerHTML ="Value not exit.";
}}
});
// ================= Maximum
// $("btnMax").addEventListener("click", () => {
//     $("max").innerHTML = Math.max.apply(null, numbers);
// })
$("btnMax").addEventListener("click", () => {
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    max = numbers[0];
    for (a = 0; a < numbers.length; a++) {
        if (numbers[a] > max) {
            $("max").innerHTML = numbers[a];
        }
    }
})
// ============ sum
$("btnSum").addEventListener("click", () => {
    let printSum = $("printSum");
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
    printSum.innerHTML = sum;
})
// ================  Sort descending
const descending = function(x, y){
	return y-x;
};
$("btnSort").addEventListener("click", () => {
    $("sort").innerHTML = numbers.sort(descending);
})

// function (sort_des) {
//     let tmp;
//     for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; i < numbers.length; j++) {
//         if (numbers[1] < numbers [j]) {
//             tmp = numbers [j];
//             number[i] = number [j];
//             numbers[j] = tmp;
//         }
//     }
//     }
// }
//  ============= prime ==============
$("btnPrime").addEventListener("click", function ()  {
    const numbers1 = [3, 2, 1, 4, 5, 6, 10, 8, 9, 7];
    $("prime").innerHTML = ""
for (let b = 1; b <= numbers1.length; b++) {
     let isPrime = true;
    for (let j = 2; j < b; j++) {
        if (b % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (b > 1 && isPrime) {
        console.log(b);
        $("prime").innerHTML += b + ", ";
    }
}
})