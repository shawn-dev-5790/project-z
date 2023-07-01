export interface IStatVo {
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

export default class StatVo implements IStatVo {
  hp: number
  mp: number
  mv: number
  str: number
  dex: number
  int: number

  constructor(d: IStatVo) {
    this.hp = d.hp
    this.mp = d.mp
    this.mv = d.mv
    this.str = d.str
    this.dex = d.dex
    this.int = d.int
  }
}
