function googoodanCore(dan, limit) {
  let stepCount = 0;
  let resultArray = [];

  for (let i = 1; i <= limit; i++) {
    let calc = dan * i;

    // isInteger() -정수판별함수 , toFiexed() - 고정 소수점 표기법
    if (Number.isInteger(calc) === false) {
      calc = calc.toFixed(0);
    }

    //Math.abs() - 주어진 숫자의 절대값을 반환
    if (calc < 0 && i === limit) {
      console.log(Math.abs(calc));
    }
    resultArray.push(calc);
    stepCount++;
  }
  // 시그마 값 구하기
  let reduceResult = resultArray.reduce(function (prev, curr) {
    // parseFloat()는 문자열을 실수로 바꾸는 함수입니다.
    return parseFloat(prev) + parseFloat(curr);
  });

  console.log(`시그마 값 :${reduceResult}`);
  console.log(`총${stepCount}번실행`);
  return resultArray;
}
console.log(googoodanCore(-3.2, 9));
