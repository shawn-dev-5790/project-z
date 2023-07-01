export interface ISkill {
  id: string
  name: string
  desc: string
  handler: <T>(d: T) => void
}

export default class Skill implements ISkill {
  id: string
  name: string
  desc: string
  handler: <T>(d: T) => void

  constructor(d: ISkill) {
    this.id = d.id
    this.name = d.name
    this.desc = d.desc
    this.handler = d.handler
  }
}
