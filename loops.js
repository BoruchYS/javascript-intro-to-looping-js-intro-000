function whileLoop(n) {
   while (n > 0) {
     console.log (n)
     --n
   }
 return "done"
}
function forLoop(array){
  for (i = 0; i < 25; i++) {
  var  s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`;
    array[i] = s
  }
  return array
}
