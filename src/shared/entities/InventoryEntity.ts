export interface IInventoryEntity {
  max: number
  items: IInventoryItem[]
}

// TODO: what can be placed in inventory
interface IInventoryItem {
  id: string
  name: string
  cnt: number
}

export default class InventoryEntity implements IInventoryEntity {
  max: number
  items: IInventoryItem[]

  constructor(d: IInventoryEntity) {
    this.max = d.max
    this.items = d.items
  }

  add() {}
  remove() {}
  sort() {}
  filteredBy() {}
}
