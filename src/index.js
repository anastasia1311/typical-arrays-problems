
exports.min = function min (array) {
  if(array === undefined || array.length === 0){
    return 0;
  } 
   else {
    return Math.min(...array);
  }
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0){
    return 0;
  } 
   else {
    return Math.max(...array);
  }
}

exports.avg = function avg (array) {
  var sum = 0;
  if(array === undefined || array.length === 0){
    return 0;
  } 
   else {
    for( var i = 0; i < array.length; i++ ){
     sum += array[i]; //don't forget to add the base
 }
 var avg = sum/array.length;
    return avg;
  }
}
