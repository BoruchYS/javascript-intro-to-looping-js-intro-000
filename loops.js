function whileLoop(n) {
   while (n > 0) {
     console.log (n)
     --n
   }
 return "done"
}
function forLoop(array){
  for (i = 0; i < 25; i++) {
    s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`;
    array.push(s)
  }
  return array
}
function doWhileLoop(array){
 var i = 0;
 function incrementVariable() {

  do {i = i + 1;
    return true} while i < 5;
 return false
  }

do {array.pop()}
 while array.length > 1 || incrementVariable() ;
}
