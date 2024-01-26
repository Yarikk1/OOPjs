//№1
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
  getPerimetr() {
    return this.width * 2 + this.height * 2
  }
  toString() {
    return console.log(
      `Прямоугольник с шириной ${this.width} и высотой ${
        this.height
      } имеет периметр ${this.getPerimetr()} и площадь ${this.getArea()}`
    )
  }
}
let rect = new Rectangle(1, 2).toString()

//№2
class Square extends Rectangle {
  constructor(side) {
    super(side, side)
    this.side = side
  }
  getExt() {
    return this.side
  }
  getArea() {
    super.getArea()
    return this.getExt()
  }
  getPerimetr() {
    super.getPerimetr()
    return this.getExt()
  }
}

let sq = new Square('(Переопределил класс)').toString()
