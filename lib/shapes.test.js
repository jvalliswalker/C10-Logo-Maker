const { Triangle, Circle, Square, Polygon } = require("./shapes");

describe("Shapes Testing", () => {
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
          `<text x='10' y='10' fill='white'>Test Text</text>`,
        ].join("")
      );
    });
  });

  describe("Triangle testing", () => {
    expect(true).toBe(true);
  });
});
