//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  let prow=[1];
  let res=[];
  for(let i=0; i<n;i++){
    let trow=[];

    if(i===0){
      trow=[1];
    }
    else{
    trow[0]=1;
    for(let j=0;j<prow.length-1;j++){
      let number= prow[j]+prow[j+1];
      trow[j+1]=number;
    }
    trow[trow.length]=1;
    }
    res.push(trow);
    prow=trow;
  }
  return res;
};
