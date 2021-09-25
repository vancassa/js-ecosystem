const factorial = (number) => {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
};

// export default factorial; //Default export
export { factorial }; //Named export
