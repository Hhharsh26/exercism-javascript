//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (txt) => {
  let stack=[];
  for(let i of txt){
    if(i=="["|| i=="{"||i=="("){
      stack.push(i);
    }
    if(i=="]"|| i=="}"||i==")"){
      let top= stack.pop();
        if (top === undefined){
          return false;
        }
      if (
    (top == "(" && i != ")") ||
    (top == "[" && i != "]") ||
    (top == "{" && i != "}")
) {
    return false;
}
    }
    
  }
  if(stack.length==0){
    return true;
  }
  else return false;
};
