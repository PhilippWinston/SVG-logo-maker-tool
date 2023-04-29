class shapes {
  constructor() {
    this.color = "";
  }
  setColor(cerrentColor) {
    this.color = cerrentColor;
  }
}

class Circle extends shapes {
  render() {
    return '<circle cx="150" cy="100" r="80" fill="${this.color}" stroke="black" stroke-width="1"/>';
  }
}

class Square extends shapes {
  render() {
    return '<rect x="75" y="50" width="160" height="160" fill="${this.color}" stroke="black" stroke-width="1"/>';
  }
}

class Star extends shapes {
  render() {
    return '<polygon points="150,30 175,75 225,75 185,110 205,155 150,125 95,155 115,110 75,75 125,75" fill="${this.color}" stroke="black" stroke-width="1" />';
  }
}

class Triangle extends shapes {
  render() {
    return '<polygon points="150, 18 244, 182 56, 182" fill="red" stroke="black" stroke-width="1" />';
  }
}

module.exports = { Circle, Square, Star, Triangle };
