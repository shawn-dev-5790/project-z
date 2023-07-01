import InventoryEntity, { IInventoryEntity } from './InventoryEntity'
import SkillEntity, { ISkillEntity } from './SkillEntity'
import StateEntity, { IStateEntity } from './StateEntity'
import PositionVo, { IPositionVo } from './vo/PositionVo'
import ShapeVo, { IShapeVo } from './vo/ShapeVo'
import StatVo, { IStatVo } from './vo/StatVo'
import SystemVo, { ISystemVo } from './vo/SystemVo'

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
export interface IPlayerEntityInit {
  id: string
  system: ISystemVo
  position: IPositionVo
  shape: IShapeVo
  stat: IStatVo
  inventory: IInventoryEntity
  skills: ISkillEntity[]
  states: IStateEntity[]
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

  constructor(d: IPlayerEntityInit) {
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
