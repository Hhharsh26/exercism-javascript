//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {
  let ld = num%10; 
  let suf ="";
  if (num % 100 == 11||num % 100 == 12||num % 100 == 13) { 
    suf = "th"; 
  } else if (ld == 1) { 
    suf = "st"; 
  } 
  else if (ld == 2) {
    suf = "nd"; } 
  else if (ld == 3) {
    suf = "rd"; 
  } 
  else { 
    suf = "th"; 
  }
  let res= name+", you are the "+ num + suf +" customer we serve today. Thank you!";
  return res;
};
