function removeNumberArray(array, removeNumber) {
    const indexElement = array.indexOf(removeNumber);
  
    if (indexElement >= 0) {
      array.splice(indexElement, 1);
      console.log(array);
    } else {
      console.log('Element not found in array');
    }
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7];
  const removeNumber = 5;
  removeNumberArray(array, removeNumber);
