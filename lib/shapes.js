/*
<rect x="10" y="10" width="80%" height="80%"></rect>
<circle r="40" cx="50" cy="50"/>
<polygon points="0,0 100,0 50,100" />
<polygon points="100,100 50,0 0,100" />

<polygon points="30,200 150,0 270,200" />
<text x="135" y="100" fill="white">Fine</text>
*/

class Polygon {
  constructor(
    shapeColor, 
    pointsArray, 
    text, 
    textColor='white'
  ){
    this.shapeColor = shapeColor;
    this.pointsArray = pointsArray;
    this.text = text;
    this.textColor = textColor;
    this.textX = 10;
    this.textY = 10;
  }

  renderShape(){
    const pointsStringArray = [];
    
    for(const obj of this.pointsArray){
      pointsStringArray.push(`${obj.x},${obj.y}`);
    }

    return [
      `<polygon points='${pointsStringArray.join(' ')}'`,
      `fill='${this.shapeColor}'/>`
    ].join(' ');
  }

  renderText(){
    return [
      `<text x='${this.textX}' y='${this.textY}'`,
      `fill='${this.textColor}'>${this.text}</text>`
    ].join(' ');
  }

  render() {
    return [this.renderShape(), this.renderText()].join('')
  }
}

class Triangle extends Polygon {
  constructor(shapeColor) {
    super(shapeColor);
  }
}

class Circle extends Polygon {
  constructor(shapeColor) {
    super(shapeColor);
  }
}

class Square extends Polygon {
  constructor(shapeColor) {
    super(shapeColor);
  }
}

module.exports = { Triangle, Circle, Square, Polygon };
