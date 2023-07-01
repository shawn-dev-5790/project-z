export interface IPositionEntity {
  x: number
  y: number
  z: number // for 2D : layer-index | z-index
}

export default class PositionEntity implements IPositionEntity {
  x: number
  y: number
  z: number

  constructor(d: IPositionEntity) {
    this.x = d.x
    this.y = d.y
    this.z = d.z
  }

  moveTo(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
