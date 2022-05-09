const $ = function (id) {
  return document.getElementById(id);
};
// ============= Swap ================
let btnSwap = $("btnSwap");
btnSwap.addEventListener("click", () => {
  let aSwap = $("aSwap").value;
  let bSwap = $("bSwap").value;
  let cSwap = aSwap;
  aSwap = bSwap;
  bSwap = cSwap;
  let showSwap = $("showSwap");
  showSwap.innerHTML = "a: " + aSwap + " and b: " + bSwap;
});
// ============ Average and Rank ======
let btnAverage = $("btnAverage");
btnAverage.addEventListener("click", () => {
  let math = $("math").value;
  let physics = $("physics").value;
  let chemistry = $("chemistry").value;
  let showAverage = $("showAverage");

  let avg = parseFloat((math * 1 + physics * 1 + chemistry * 1) / 3).toFixed(1);
  if (avg >= 8.0) {
    showAverage.innerHTML = "Average: " + avg + "<br>Rank: " + "A";
  } else if (avg >= 6.5) {
    showAverage.innerHTML = "Average: " + avg + "<br>Rank: " + "B";
  } else if (avg >= 5.0) {
    showAverage.innerHTML = "Average: " + avg + "<br>Rank: " + "C";
  } else {
    showAverage.innerHTML = "Average: " + avg + "<br>Rank: " + "D";
  }
});
// ========= find x from ax + b =0 ======
let btnX1 = $("btnX1");
btnX1.addEventListener("click", () => {
  let aX1 = $("aX1").value;
  let bX1 = $("bX1").value;
  let showX1 = $("showX1");

  if (aX1 == 0) {
    if (bX1 == 0) {
      showX1.innerHTML = "No x value";
    } else {
      showX1.innerHTML = "No x value";
    }
  } else {
    if (bX1 == 0) {
      showX1.innerHTML = "x = 0";
    } else {
      x = -bX1 / aX1;
      showX1.innerHTML = "x = " + x;
    }
  }
});
// ==========find x from ax2 + bx + c =0 ======
let btnX2 = $("btnX2");
btnX2.addEventListener("click", () => {
  let aX2 = $("aX2").value;
  let bX2 = $("bX2").value;
  let cX2 = $("cX2").value;
  let showX2 = $("showX2");

  if (aX2 == 0) {
    if (bX2 == 0) {
      if ((cX2 = 0)) {
        showX2.innerHTML = "No x value";
      } else {
        showX2.innerHTML = "No x value";
      }
    } else {
      showX2.innerHTML = "x = " + -cX2 / bX2;
    }
  } else {
    delta = bX2 * bX2 - 4 * aX2 * cX2;
    if (delta > 0) {
      x1 = ((-bX2 + Math.sqrt(delta)) / 2) * aX2;
      x2 = ((-bX2 - Math.sqrt(delta)) / 2) * aX2;
      showX2.innerHTML = "x1 = " + x1 + "<br>x2 = " + x2;
    } else if (delta == 0) {
      showX2.innerHTML = "x1 = x2 = " + -bX2 / (2 * aX2);
    } else {
      showX2.innerHTML = "No x value";
    }
  }
});
// ======= sum n Integer Number =======
let btnSumInt = $("btnSumInt");
btnSumInt.addEventListener("click", () => {
  let intNumber = $("intNumber").value;
  sumNumber = 0;
  for (let index = 0; index < intNumber; index++) {
    sumNumber += index;
  }
  let showSumInt = $("showSumInt");
  showSumInt.innerHTML = "Sum = " + sumNumber;
});
// ========= Fibonacci numbers ==========
let btnFibonacci = $("btnFibonacci");
btnFibonacci.addEventListener("click", () => {
  let numFibonacci = $("numFibonacci").value;
  let showFibonacci = $("showFibonacci");

  let f1 = 1;
  let f2 = 1;
  let fn;
  showFibonacci.innerHTML = "";
  for (let f = 1; f <= numFibonacci; f++) {
    showFibonacci.innerHTML += f1 + ", ";
    fn = f1 + f2;
    f1 = f2;
    f2 = fn;
  }
});
// ===== student's information ======
let btnStudent = $("btnStudent");
btnStudent.addEventListener("click", () => {
  let studentCode = $("studentCode").value;
  let studentName = $("studentName").value;
  let studentAge = $("studentAge").value;
  let studentSex = $("studentSex").value;

  $("tdCode").innerHTML = studentCode;
  $("tdName").innerHTML = studentName;
  $("tdAge").innerHTML = studentAge;
  $("tdSex").innerHTML = studentSex;
});
studentCode.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnStudent.click();
  }
});
studentName.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnStudent.click();
  }
});
studentAge.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnStudent.click();
  }
});
studentSex.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnStudent.click();
  }
});
// ======== print number of days in month n ======
let btnDay = $("btnDay");
btnDay.addEventListener("click", () => {
  let month = $("month").value;
  let showDay = $("showDay");
  const d = new Date();
  let year = d.getFullYear();
  switch (month) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
      showDay.innerHTML = "31 days";
      break;
    case "4":
    case "6":
    case "9":
    case "11":
      showDay.innerHTML = "30 days";
      break;
    case "2":
      if (year % 4 == 0) {
        if (year % 100 == 0) {
          if (year % 400 == 0) {
            isLeapYear = true;
            showDay.innerHTML = "29 days";
          } else {
            isLeapYear = false;
            showDay.innerHTML = "28 days";
          }
        } else {
          isLeapYear = true;
          showDay.innerHTML = "29 days";
        }
      } else {
        isLeapYear = false;
        showDay.innerHTML = "28 days";
      }
      break;
    default:
      showDay.innerHTML = "Please enter again month (1 to 12)!";
      break;
  }
});
// ============ greatestCommonDivisor =====
// const gcd = function(a, b) {
//   if (!b) {
//     return a;
//   } else {
//       return gcd(b, a % b)
//     };
// }
const gcd = function (a, b) {
  return !b ? a : gcd(b, a % b);
};

let btnGcd = $("btnGcd");
btnGcd.addEventListener("click", () => {
  let aGcd = $("aGcd").value;
  let bGcd = $("bGcd").value;
  let showGcd = $("showGcd");
  showGcd.innerHTML = gcd(aGcd, bGcd);
});
// ========= print the triangle Ascending =========
$("btnTriangle").addEventListener("click", () => {
  $("showTriangle").innerHTML = "";
  let nTriangle = $("nTriangle").value;

  for (let n = 1; n <= nTriangle; n++) {
    for (let j = 1; j <= n; j++) {
      $("showTriangle").innerHTML +=
        '<i class="fa-solid fa-star-half-stroke"></i> ';
    }
    $("showTriangle").innerHTML += "<br>";
  }
});
// ========= print the triangle Decrease ======
$("btnDecrease").addEventListener("click", () => {
  $("showDecrease").innerHTML = "";
  let nDecrease = $("nDecrease").value;

  for (let n = nDecrease; n >= 1; n--) {
    for (let j = n; j >= 1; j--) {
      $("showDecrease").innerHTML +=
        '<i class="fa-solid fa-star-half-stroke"></i> ';
    }
    $("showDecrease").innerHTML += "<br>";
  }
});
