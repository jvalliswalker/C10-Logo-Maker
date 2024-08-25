class Shape {
  constructor(color){
    this.color = color;
  }

  render(){}
}

class Triangle extends Shape {

  constructor(width, height, color){
    super(color);
    this.width = width;
    this.height = height;
  }

}
