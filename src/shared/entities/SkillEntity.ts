export interface ISkillEntity {
  id: string
  name: string
  desc: string
  handler: <T>(d: T) => void
}

export default class SkillEntity implements ISkillEntity {
  id: string
  name: string
  desc: string
  handler: <T>(d: T) => void

  constructor(d: ISkillEntity) {
    this.id = d.id
    this.name = d.name
    this.desc = d.desc
    this.handler = d.handler
  }
}
