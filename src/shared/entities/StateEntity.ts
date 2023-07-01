export interface IStateEntity {
  id: string
  name: string
  desc: string
  handler: <T>(d: T) => void
}

export default class StateEntity implements IStateEntity {
  id: string
  name: string
  desc: string
  handler: <T>(d: T) => void

  constructor(d: IStateEntity) {
    this.id = d.id
    this.name = d.name
    this.desc = d.desc
    this.handler = d.handler
  }
}
