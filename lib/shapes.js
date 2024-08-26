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
    this.textX = 135;
    this.textY = 100;
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
  constructor(shapeColor, text, textColor='white') {
    super(
      shapeColor, 
      [{x: 30,y: 200}, {x: 150,y: 0}, {x: 270,y: 200}], 
      text, 
      textColor
    );
    this.textX = 135;
    this.textY = 120;
  }
}

class Circle extends Polygon {
  constructor(shapeColor, text, textColor='white') {
    super(shapeColor, null, text, textColor);
  }

  renderShape(){
    return `<circle r="100" cx="150" cy="100" fill='${this.shapeColor}'/>`;
  }
}

class Square extends Polygon {
  constructor(shapeColor, text, textColor='white') {
    super(shapeColor, null, text, textColor);
  }

  renderShape(){
    return `<rect x='50' width='200' height='200' fill='${this.shapeColor}'/>`;
  }
}

module.exports = { Triangle, Circle, Square, Polygon };
