/*
我用的是ES6语法进行数组去重,一行代码搞定的同时，性能很高
 */

Array.prototype.deleteSame = ()=>{return Array.from(new Set(arr))};  
var arr = [1,2,3,4,1,2,3,4];        
console.log(arr.deleteSame());        