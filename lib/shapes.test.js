const { Triangle, Circle, Square, Polygon } = require("./shapes");

describe("Shapes Testing", () => {

  const testText = 'ABC';
  const standardText = `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' style='font-size: 70; font-family: arial' fill='white'>${testText}</text>`;

  describe("Polygon Testing", () => {
    const pointsArray = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];

    const polygon = new Polygon("red", pointsArray, testText);

    it("render() string constructed as expected", () => {
      expect(polygon.render()).toBe(
        [
          `<polygon points='1,1 2,2' fill='red'/>`,
          standardText,
        ].join("")
      );
    });
  });

  describe("Triangle testing", () => {

    const triangle = new Triangle("blue", testText);

    it("render() string constructed as expected", () => {
      expect(triangle.render()).toBe(
        [
          `<polygon points='30,200 150,0 270,200' fill='blue'/>`,
          standardText
          .replace(`y='50%`,`y='65%`)
          .replace('font-size: 70','font-size: 50'),
        ].join("")
      );
    });
  });

  describe("Circle testing", () => {

    const circle = new Circle("green", testText);

    it("render() string constructed as expected", () => {
      expect(circle.render()).toBe(
        [
          `<circle r='100' cx='150' cy='100' fill='green'/>`,
          standardText,
        ].join("")
      );
    });
  });

  describe("Square testing", () => {

    const square = new Square("yellow", testText);

    it("render() string constructed as expected", () => {
      expect(square.render()).toBe(
        [
          `<rect x='50' width='200' height='200' fill='yellow'/>`,
          standardText,
        ].join("")
      );
    });
  });
});
