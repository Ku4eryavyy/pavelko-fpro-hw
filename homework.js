function createSumFunction() {
    let sum = 0;  // Змінна для накопичення суми
    
    function innerSum(x) {
      sum += x;
      return sum;
    }
    
    return sum;  // Повертаємо внутрішню функцію
  }
  
  // Створюємо функцію для накопичення суми
  const sumTotal = createSumFunction();
  
  // Використовуємо функцію замикання
  console.log(sumTotal(3));  // Виведе 3
  console.log(sumTotal(5));  // Виведе 8
  console.log(sumTotal(20));  // Виведе 28
  