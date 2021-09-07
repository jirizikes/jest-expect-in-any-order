import { expectInAnyOrder } from "./";

test("Two same objects ", () => {
  expect(
    expectInAnyOrder(
      {
        string: "hi",
        array: [1, 2, 3],
      },
      {
        string: "hi",
        array: [1, 2, 3],
      }
    )
  ).toBeUndefined();
});

test("Two different objects ", () => {
  expect(() =>
    expectInAnyOrder(
      {
        string: "hi",
        array: [1, 2, 3],
      },
      {
        string: "hello",
        array: [1, 3, 2],
      }
    )
  ).toThrow("Not same");
});

test("Two different objects 2", () => {
  expect(() =>
    expectInAnyOrder(
      {
        string: "hi",
        array: [
          {
            name: "CZ",
          },
          {
            name: "EN",
          },
          {
            name: "DE",
          },
        ],
      },
      {
        string: "hi",
        array: [
          {
            name: "EN",
          },
          {
            name: "CZZ",
          },
          {
            name: "DE",
          },
        ],
      }
    )
  ).toThrow("Not same");
});

test("Two same objects, different order", () => {
  expect(
    expectInAnyOrder(
      {
        string: "hi",
        array: [1, 2, 3],
      },
      {
        string: "hi",
        array: [1, 3, 2],
      }
    )
  ).toBeUndefined();
});

test("Two same objects, different order 2", () => {
  expect(
    expectInAnyOrder(
      {
        string: "hi",
        array: [
          {
            name: "CZ",
          },
          {
            name: "EN",
          },
          {
            name: "DE",
          },
        ],
      },
      {
        string: "hi",
        array: [
          {
            name: "EN",
          },
          {
            name: "CZ",
          },
          {
            name: "DE",
          },
        ],
      }
    )
  ).toBeUndefined();
});
