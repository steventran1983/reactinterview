//create the swame function as above but return a list 10 random movies names
export function fakeAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const people = [
        { name: "Alice", age: 25, gender: "female" },
        { name: "Bob", age: 32, gender: "male" },
        { name: "Charlie", age: 29, gender: "male" },
        { name: "Daisy", age: 21, gender: "female" },
        { name: "Ethan", age: 40, gender: "male" },
        { name: "Fiona", age: 35, gender: "female" },
        { name: "George", age: 28, gender: "male" },
        { name: "Hannah", age: 23, gender: "female" },
        { name: "Ian", age: 30, gender: "male" },
        { name: "Julia", age: 27, gender: "female" },
      ];
      resolve(people);
    }, 1000);
  });
}
