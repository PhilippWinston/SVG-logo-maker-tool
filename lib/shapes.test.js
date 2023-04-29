const { test } = require("node:test");
const { Circle, Square, Star, Triangle } = require("./shapes.js");

describe("Circle test", () => {
  test("test for a circle with a blue background", () => {
    const shapes = new Circle();
    shapes.setColor("blue");
    expect(shapes.render()).toEqual(
      '<circle cx="150"cy="100"r="80"fill="blue"stroke="black"stroke-width="1"/>'
    );
  });
});

describe("Square test", () => {
  test("test for a square with a black background", () => {
    const shapes = new Square();
    shapes.setColor("black");
    expect(shapes.render()).toEqual(
      '<rect x="75"y="50"width="160"height="160"fill="black"stroke="black"stroke-width="1"/>'
    );
  });
});

describe("Star test", () => {
  test("test for a star with a green background", () => {
    const shapes = new Star();
    expect(shapes.render()).toEqual(
      '<polygon points="150,30 175,75 225,75 185,110 205,155 150,125 95,155 115,110 75,75 125,75" fill="green" stroke="black" stroke-width="1"/>'
    );
  });
});

describe("Triangle test", () => {
  test("test for a triangle with a orange background", () => {
    const shapes = new Triangle();
    expect(shapes.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="orange" stroke="black" stroke-width="1" />'
    );
  });
});
