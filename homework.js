function createSumFunction() {
    let sum = 0;
    
    function innerSum(x) {
      sum += x;
      return sum;
    }
    
    return sum;
  }
  
  const sumTotal = createSumFunction();
  
  console.log(sumTotal(3));
  console.log(sumTotal(5));
  console.log(sumTotal(20));