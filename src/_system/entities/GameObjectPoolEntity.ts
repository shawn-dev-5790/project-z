export interface IGameObjectPoolEntity<T> {
  max: number
  pools: T[]
}
export default class GameObjectPoolEntity<T> {
  max: number
  pools: T[]

  constructor(d: IGameObjectPoolEntity<T>) {
    this.max = d.max
    this.pools = d.pools
  }

  getFreeObj(): T | undefined {
    return this.pools.find((o: any) => o.obj.f)
  }
}
