export default class ArrayRevisited {
  value: any[] = [];
  length: number = 0;

  push(el: any) {
    const newArray = new Array(this.length + 1);

    for (let i = 0; i < this.length + 1; i++) {
      if (i === this.length) {
        newArray[i] = el;
      } else {
        newArray[i] = this.value[i];
      }
    }

    this.value = newArray;
    this.length++;
  }
}

const myArray = new ArrayRevisited();
console.log(myArray.value);

console.log(myArray.length);

myArray.push(12);
console.log(myArray.value);
console.log(myArray.length);
