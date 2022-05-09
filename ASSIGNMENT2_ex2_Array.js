$("btn2DArr").addEventListener("click", () => {
  let n = $("nRows").value;
  let m = $("mCols").value;

  $("show2DArr").innerHTML = "";
  const myArray = [];

  for (let i = 0; i < n; i++) {
    myArray[i] = [];

    for (let j = 0; j < m; j++) {
      myArray[i][j] = 0;
      $("show2DArr").innerHTML += myArray[i][j] + " ";
    }
    $("show2DArr").innerHTML += "<br>";
  }
});
// ===========

// =============== Name ==================
// (function(){
//             var names = [];
//             $("btnName").addEventListener('click', function() {
//                 names.push($("name").value);
//                 $('showName').innerHTML = names.join('<br>');
//             });
//         })();

var names = [];
names.push($("name").value.toString());
console.log(names);
$("btnName").addEventListener("click", () => {
  var names = [];
  names.push($("name").value.toString());

  console.log(names);
  let nameList = [names.toString()];
  console.log(nameList);

  $("showName").innerHTML += names + "<br>";
  // name.value = "";
  // myFunction(names);
});

// function myFunction() {
//   names.sort(function(a, b){return a-b});
//   $("sortName").innerHTML = names;
// }
