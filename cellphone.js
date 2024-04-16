let celular = [["","",""], ["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u", "v"],["w","x","y","z"]];

function calculateDigit(first,second) {
  let firsArray = [];
  let secondArray = [];
  if (first === 0) {
     firsArray = [" "," "," "];
  }
  if (first > 0) {
    let t = first - 1;
    firsArray = celular[t];
  }
  
  if (second === 0) {
     secondArray = [" "," "," "];
  }
  if (second > 0) {
    let ts = second - 1;
    secondArray = celular[ts];
  }
 let finalArray = []
  
 for(let i = 0; i < firsArray.length; i++) {
  for(let p = 0; p < secondArray.length; p++) {
    let fword = `${firsArray[i]}${secondArray[p]}`;
    finalArray.push(fword);
 }
 }
  console.log(finalArray)
}

calculateDigit(0,3);