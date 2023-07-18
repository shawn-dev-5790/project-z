export class PooledObject {
  free: boolean = true
  work() {
    this.free = false
  }
  rest() {
    this.free = true
  }
}

export class ObjectPool<T extends PooledObject> {
  pool: T[] = []
  constructor(createObject: () => T, length: number = 100) {
    this.pool = Array.from({ length }, createObject)
  }
  set(obj: T): void {
    obj.rest()
  }
  get(): T | null {
    const obj: T | undefined = this.pool.find((obj) => obj.free)
    if (!obj) return null
    obj.work()
    return obj
  }
}
