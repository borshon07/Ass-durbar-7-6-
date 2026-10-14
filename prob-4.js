function gcd(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}
console.log(gcd(48, 18)); 
console.log(gcd(56, 98)); 
console.log(gcd(7, 13));
console.log(gcd(12, 18));