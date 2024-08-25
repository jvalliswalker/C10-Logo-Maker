/*
<rect x="10" y="10" width="80%" height="80%"></rect>
<circle r="40" cx="50" cy="50"/>
<polygon points="0,0 100,0 50,100" />
<polygon points="100,100 50,0 0,100" />
*/

class Shape {
  constructor(color) {
    this.color = color;
  }

  render() {}
}

class Triangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }
}

module.exports = { Triangle, Circle, Square };
