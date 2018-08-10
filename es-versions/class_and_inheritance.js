// es6
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }

    move (x, y) {
        this.x = x
        this.y = y
    }
}

//es5
function Shape (id, x, y) {
    this.id = id;
    this.move(x, y);
};

Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

//es6
class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
    super(id, x, y)
    this.width = width
    this.height = height
  }
}

//es5
var Rectangle = function (id, x, y, width, height) {
  Shape.call(this, id, x, y);
  this.width = width;
  this.height = height;
};

Rectangle.prototype = Object.create(
  Shape.prototype
);

Rectangle.prototype.constructor = Rectangle;
