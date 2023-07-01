export default class GameObjectPool<T> {
  constructor(public max: number = 1, public pool: T[] = []) {}

  add(obj: T) {
    this.pool.push(obj)
  }
  update(fn: (obj: T, i: number) => void) {
    this.pool.forEach((obj, i) => fn(obj, i))
  }
}
