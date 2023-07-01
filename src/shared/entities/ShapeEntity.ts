export interface IShapeEntity {
  x: number
  y: number
  w: number
  h: number
  r: number
}

export default class ShapeEntity implements IShapeEntity {
  x: number
  y: number
  w: number
  h: number
  r: number

  constructor(d: IShapeEntity) {
    this.x = d.x
    this.y = d.y
    this.w = d.w
    this.h = d.h
    this.r = d.r
  }

  moveTo(x: number, y: number) {
    this.x = x
    this.y = y
  }
  centered() {
    this.x = this.x / 2
    this.y = this.y / 2
  }
}
