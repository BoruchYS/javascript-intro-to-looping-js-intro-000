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
var i = 0;

function incrementVariable() {
 i = i + 1;
}

do {
   incrementVariable();
} while (i < 5);
function doWhileLoop(array){


array.pop();
  while array.length > 0 && incrementVariable()}
