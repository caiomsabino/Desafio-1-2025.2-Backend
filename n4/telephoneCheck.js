// Esse código valida todos menos o caso 28

// function isNumeric(str) {
//   return /^\d+$/.test(str); 
// }

// function telephoneCheck(str) {

//   str = str.split(' ').join('');


//   if (str[0] === '1') {
//     str = str.slice(1);
//   }


//   if (str.includes('(') || str.includes(')')) {
//     if (!(str[0] === '(' && str[4] === ')')) return false;
//     str = str.slice(1, 4) + str.slice(5);
//   }

  
//   str = str.split('-').join('');


//   if (!isNumeric(str)) return false;
//   if (str.length !== 10) return false;

//   return true;
// }

// telephoneCheck("555-555-5555")



function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/

  return regex.test(str)

}

telephoneCheck("555-555-5555")



