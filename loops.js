function whileLoop(n) {
   while (n > 0) {
     console.log (n)
     --n
   }
 return "done"
}
function forLoop(array){
  for (i = 0; i < 25; i++) {
    array.splice(1, 0, "I am ${i} strange loop${i === 1 ? '' : 's'}.")
  }
}
