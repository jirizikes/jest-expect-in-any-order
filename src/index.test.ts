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
  ).toThrow(new Error('Not same -> [{"name":"string","obj1":"hi","obj2":"hello"}]'));
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
  ).toThrow(new Error('Not same -> [{"name":"array","obj1":[{"name":"CZ"},{"name":"EN"},{"name":"DE"}],"obj2":[{"name":"EN"},{"name":"CZZ"},{"name":"DE"}]}]'));
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
