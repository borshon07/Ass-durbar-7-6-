function isValidBDMobile(phoneNumber) {
  const regex = /^(?:\+?880|0)1[3-9]\d{8}$/;
  return regex.test(phoneNumber);
}

console.log(isValidBDMobile("+8801712345678")); 
console.log(isValidBDMobile("01987654321")); 
console.log(isValidBDMobile("1234567890")); 
console.log(isValidBDMobile("01712345678")); 
console.log(isValidBDMobile("+8801987654321"));
