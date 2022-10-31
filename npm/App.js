// import validator from "validator";
const validator = require('validator');
const email = 'ardrah@gmail.com';

console.log(validator.isEmail(email))
console.log(validator.isMobilePhone('08123123', 'id-ID'))
// validator.is
// console.log(validator.isEmail(email))
// console.log(validator.isEmail(email))