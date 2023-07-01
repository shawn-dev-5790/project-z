export interface IShapeVo {
  x: number
  y: number
  w: number
  h: number
  r: number
}

export default class ShapeVo implements IShapeVo {
  x: number
  y: number
  w: number
  h: number
  r: number

  constructor(d: IShapeVo) {
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
