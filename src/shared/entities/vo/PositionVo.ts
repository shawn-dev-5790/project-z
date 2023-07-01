export interface IPositionVo {
  x: number
  y: number
  z: number // for 2D : layer-index | z-index
}

export default class PositionVo implements IPositionVo {
  x: number
  y: number
  z: number

  constructor(d: IPositionVo) {
    this.x = d.x
    this.y = d.y
    this.z = d.z
  }

  moveTo(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
