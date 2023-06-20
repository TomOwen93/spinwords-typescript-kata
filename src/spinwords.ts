function spinWords(inputString: string): string {
  let splitString = inputString.split(" ");
  splitString = splitString.map((str) =>
    str.length > 5 ? str.split("").reverse().join("") : str
  );

  return splitString.join(" ");
}

export default spinWords;
