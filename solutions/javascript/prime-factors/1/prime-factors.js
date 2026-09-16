//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  let cnt=2;
  let arr=[];
  while(num!=1) {
    if(num%cnt==0){
      arr.push(cnt);
      num/=cnt;
    }
      else cnt++;
    }
  return arr;
  
};
