function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(1, 2);

const sum = (num1: number, num2: number = 4): number => num1 + num2;

sum(3, 4);

//object --> function --> method
const employee = {
  name: "John",
  age: 30,
  company: "Google BD",
  // Its a normal function and its called method. realAge is a method of employee object.
  realAge(age: number): string {
    return `current age is ${this.age + age} years old.`;
  },
};


//callback function
const arr: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = arr.map((elem: number): number => elem * 2);
