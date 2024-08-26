const { Triangle, Circle, Square, Polygon } = require("./shapes");

describe("Shapes Testing", () => {

  const standardText = `<text x='135' y='100' fill='white'>Test Text</text>`;

  describe("Polygon Testing", () => {
    const pointsArray = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];

    const polygon = new Polygon("red", pointsArray, "Test Text");

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

    const triangle = new Triangle("blue", "Test Text");

    it("render() string constructed as expected", () => {
      expect(triangle.render()).toBe(
        [
          `<polygon points='30,200 150,0 270,200' fill='blue'/>`,
          standardText.replace(`y='100`,`y='120`),
        ].join("")
      );
    });
  });

  describe("Circle testing", () => {

    const circle = new Circle("green", "Test Text");

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

    const square = new Square("yellow", "Test Text");

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
