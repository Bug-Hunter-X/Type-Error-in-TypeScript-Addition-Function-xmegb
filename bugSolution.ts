function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Handle invalid input
  }
  return numA + numB;
}

let result1 = add(1, 2); // Correct usage
let result2 = addSafe("1", 2); // Safe usage
let result3 = addSafe("a",2); //Safe usage with invalid input