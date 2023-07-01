export interface IStatEntity {
  // base stat
  hp: number // hit point
  mp: number // mana point
  mv: number // movement value
  // main stat
  str: number
  dex: number
  int: number
  // sub stat
}

export default class StatEntity implements IStatEntity {
  hp: number
  mp: number
  mv: number
  str: number
  dex: number
  int: number

  constructor(d: IStatEntity) {
    this.hp = d.hp
    this.mp = d.mp
    this.mv = d.mv
    this.str = d.str
    this.dex = d.dex
    this.int = d.int
  }
}
