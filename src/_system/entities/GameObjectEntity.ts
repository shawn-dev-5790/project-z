export interface IGameObjectEntity {
  f: boolean // for object_pools free
  x: number // x coordinate
  y: number // y coordinate
  w: number // width
  h: number // height
  r: number // radius
  a: number // angle
  v: number // velocity
  s: number // speed
}
export interface IGameObjectEntityProps {
  x?: number // x coordinate
  y?: number // y coordinate
  w?: number // width
  h?: number // height
  r?: number // radius
  a?: number // angle
  v?: number // velocity
  s?: number // speed
}
export default class GameObjectEntity implements IGameObjectEntity {
  f: boolean = true
  x: number
  y: number
  w: number
  h: number
  r: number
  a: number
  v: number
  s: number

  constructor(d: IGameObjectEntityProps) {
    this.x = d.x || 0
    this.y = d.y || 0
    this.w = d.w || 0
    this.h = d.h || 0
    this.r = d.r || 0
    this.a = d.a || 0
    this.v = d.v || 0
    this.s = d.s || 0
  }
}
