// let gugudan = setInterval(() => {
//   for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//       let result;
//       result = i * j;
//       console.log(i + "*" + j + "=" + result);

//       if (result === 81) {
//         clearInterval(gugudan);
//       }
//     }
//   }
// }, 2000);

//

function googoodan(dan, limit) {
  let resultArray = [];
  for (let i = 1; i <= limit; i++) {
    resultArray.push(dan * i);
  }
  console.log(resultArray);
  return resultArray;
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    googoodan(i, j);
  }
}
