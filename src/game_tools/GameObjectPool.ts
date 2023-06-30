import CharacterEntity from '../shared/entities/CharacterEntity'

export default class GameObjectPool<T> {
  constructor(public max: number = 1, public pool: T[] = []) {}

  update(fn: (obj: T) => void) {
    this.pool.forEach((obj) => fn(obj))
  }
}

export class GameObject {
  constructor(public is_in_loop: boolean = true) {}

  destroy() {
    this.is_in_loop = false
  }
}
