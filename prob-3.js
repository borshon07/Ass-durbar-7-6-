function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

console.log(isValidEmail("user@example.com")); // Output: true
console.log(isValidEmail("invalid.email")); // Output: false