import InventoryEntity from './InventoryEntity'
import SkillEntity from './SkillEntity'
import StateEntity from './StateEntity'
import PositionVo from './vo/PositionVo'
import ShapeVo from './vo/ShapeVo'
import StatVo from './vo/StatVo'
import SystemVo from './vo/SystemVo'

export interface IPlayerEntity {
  id: string
  system: SystemVo
  position: PositionVo
  shape: ShapeVo
  stat: StatVo
  inventory: InventoryEntity
  skills: SkillEntity[]
  states: StateEntity[]
}

export default class PlayerEntity implements IPlayerEntity {
  id: string
  system: SystemVo
  position: PositionVo
  shape: ShapeVo
  stat: StatVo
  inventory: InventoryEntity
  skills: SkillEntity[]
  states: StateEntity[]

  constructor(d: IPlayerEntity) {
    this.id = d.id
    this.system = new SystemVo(d.system)
    this.position = new PositionVo(d.position)
    this.shape = new ShapeVo(d.shape)
    this.stat = new StatVo(d.stat)
    this.inventory = new InventoryEntity(d.inventory)
    this.skills = d.skills.map((s) => new SkillEntity(s))
    this.states = d.states.map((s) => new StateEntity(s))
  }
}
