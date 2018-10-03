function whileLoop(n) {
   while (n > 0) {
     console.log (n)
     --n
   }
 return "done"
}
function forLoop(array){
  for (i = 0; i < 25; i++){
    array[i] ="I amd $(i) strange loop${(i === 0) ? '' : 's'}"
  }
}