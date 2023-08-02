function nestedForLoops(n, max, m) {
  let check = false;
  function loop(currentNestLevel, loopVariables) {
    if (currentNestLevel === 0) {
      console.log(loopVariables);
      if (
        loopVariables.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        ) == max
      ) {
        check = true;
      }
    } else {
      for (let i = 0; Math.pow(m, i) < max; i++) {
        loop(currentNestLevel - 1, [...loopVariables, Math.pow(2, i)]);
      }
    }
  }

  loop(n, []);
  console.log("合計が"+max+"のものはあるか");
  console.log(check);
}

// 3重のforループの例
nestedForLoops(3, 14, 2);
