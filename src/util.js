const randomArrayNumber = () => {
  const randomNumbers = [];
  for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }
  return randomNumbers;
};

//Return a promise that resolves with an array of 10 random numbers
export function fakeAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomArrayNumber = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 100)
      );
      resolve(randomArrayNumber);
    }, 3000);
  });
}
