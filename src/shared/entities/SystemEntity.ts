export interface ISystemEntity {
  isIncludedPool: boolean
}

export default class SystemEntity implements ISystemEntity {
  isIncludedPool: boolean

  constructor(d: ISystemEntity) {
    this.isIncludedPool = d.isIncludedPool
  }

  includedPool() {
    this.isIncludedPool = true
  }
  excludedPool() {
    this.isIncludedPool = false
  }
}
