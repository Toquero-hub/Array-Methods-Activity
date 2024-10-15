// Step 1: Use concat() to join two arrays
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log("Combined Array:", combinedArr);

// Step 2: Use push() to add an element "Kiwi" to the fruits array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits after push:", fruits);

// Step 3: Use unshift() to add two numbers 4 and 5 to the beginning of array1
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after unshift:", array1);

// Step 4: Use pop() to remove the last element from the fruits array
const removedFruit = fruits.pop();
console.log("Removed Fruit:", removedFruit);
console.log("Fruits after pop:", fruits);

// Step 5: Use shift() to remove the first element from array2
const array2 = [1, 2, 3];
const removedFirstElement = array2.shift();
console.log("Removed First Element from Array2:", removedFirstElement);
console.log("Array2 after shift:", array2);

// Step 6: Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("Fruits after sort:", fruits);

// Step 7: Use slice() to create a new array containing a portion of the fruits array
const slicedFruits = fruits.slice(1, 3); // Slicing from index 1 to index 3 (not inclusive)
console.log("Sliced Fruits:", slicedFruits);

// Step 8: Use splice() to insert and remove elements in months array
const months = ["January", "February", "March", "April"];
months.splice(2, 1, "March Updated"); // Remove one element at index 2 and add "March Updated"
console.log("Months after splice:", months);