function sum(...argu)  {
  // console.log(typeof argu);
  // let argumentArray = Array.from(argu);
  let sum = 0;
  argu.forEach(ele => sum += ele);
  return sum;
}
// console.log(sum(1, 2, 3, 4));

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

Function.prototype.myBind = function(obj,...bindArgs) {
  return(...callArgs) => {
    return this.apply(obj,bindArgs.concat(callArgs));
  }
}



function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs){
      let sum = 0
      numbers.forEach(ele => sum+=ele);
      return sum;
    } else {
      return _curriedSum;
    }
  }
}

// const result = curriedSum(4);
// console.log(result(5)(30)(20)(1));
// console.log(result);


Function.prototype.curry = function(numArgs){
  let numbers = [];
  console.log(this); // sumThree
  let that = this;
  return function _curry(num) {
    numbers.push(num);
    console.log(numbers);
    if (numbers.length === numArgs){
      // console.log(this); // this is global
      return that.apply(this, numbers);
      // return this(...numbers) ???
      // return sumThree(...numbers)
    } else {
      return _curry;
    }
  }
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30


// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30
// console.log(f1);


// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30







//
