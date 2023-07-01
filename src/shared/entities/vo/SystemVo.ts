export interface ISystemVo {
  isIncludedPool: boolean
}

export default class SystemVo implements ISystemVo {
  isIncludedPool: boolean

  constructor(d: ISystemVo) {
    this.isIncludedPool = d.isIncludedPool
  }

  includedPool() {
    this.isIncludedPool = true
  }
  excludedPool() {
    this.isIncludedPool = false
  }
}
