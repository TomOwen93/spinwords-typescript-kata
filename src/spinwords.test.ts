import spinWords from "./spinwords";

test("spinWords returns a string all five or more letter words reversed", () => {
  expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
});

test("spinWords returns a string all five or more letter words reversed", () => {
  expect(spinWords("This is a test")).toBe("This is a test");
});

test("spinWords returns a string all five or more letter words reversed", () => {
  expect(spinWords("This is another test")).toBe("This is rehtona test");
});

test("spinWords returns a string with a single word back, if one string is inputted. Reversed if input word contains 5 or more letters", () => {
  expect(spinWords("test")).toBe("test");
});

test("spinWords returns a string with a single word back, if one string is inputted. Reversed if input word contains 5 or more letters", () => {
  expect(spinWords("Superduper")).toBe("repudrepuS");
});
