function createSumFunction() {
    let total = 0;  // Змінна для накопичення суми
    
    // Внутрішня функція, яка приймає значення і додає їх до total
    function innerSum(x) {
      total += x;
      return total;
    }
    
    return innerSum;  // Повертаємо внутрішню функцію
  }
  
  // Створюємо функцію для накопичення суми
  const sum = createSumFunction();
  
  // Використовуємо функцію замикання
  console.log(sum(3));  // Виведе 3
  console.log(sum(5));  // Виведе 8
  console.log(sum(20));  // Виведе 28
  