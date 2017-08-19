function CArray(numElements) {
   this.dataStore = [];
   this.pos = 0;
   this.numElements = numElements;
   this.insert = insert;
   this.toString = toString;
   this.clear = clear;
   this.setData = setData;
   this.swap = swap;
   this.insertionSort = insertionSort;

   for (var i = 0; i < numElements; ++i) {
      this.dataStore[i] = i;
   }
}

function setData() {
   for (var i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() * 
                          (this.numElements+1));
   }
}

function clear() {
   for (var i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0;
   }
}

function insert(element) {
   this.dataStore[this.pos++] = element;
}

function toString() {
   var retstr = "";
   for (var i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
         retstr += "\n";
      }
   }
   return retstr;
}

function swap(arr, index1, index2) {
   var temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
}


function insertionSort() {
   var temp, inner;
   for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
         this.dataStore[inner] = this.dataStore[inner-1];
         --inner;
      }
      this.dataStore[inner] = temp;
      console.log(this.toString());
   }
}


var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
console.log('\n');
myNums.insertionSort();
console.log('\n');
console.log(myNums.toString());
