import GameObjectPool from './GameObjectPool'
import PlayerEntity from '../shared/entities/PlayerEntity'

export default class GameLoop {
  players: GameObjectPool<PlayerEntity> = new GameObjectPool<PlayerEntity>(5, [])

  constructor() {
    this.players.add(
      new PlayerEntity({
        id: 'player-1',
        system: { isIncludedPool: true },
        position: { x: 0, y: 0, z: 0 },
        shape: { x: 0, y: 0, w: 0, h: 0, r: 0 },
        stat: { hp: 0, mp: 0, mv: 0, str: 0, dex: 0, int: 0 },
        inventory: { max: 10, items: [] },
        skills: [],
        states: [],
      })
    )
  }

  update() {
    this.players.update((p: PlayerEntity, pi: number) => {
      if (this.players.max > pi) p.system.excludedPool()
    })
  }
}

const loop = new GameLoop()

let cnt = 0
let l = setInterval(() => {
  if (cnt > 10) return clearTimeout(l)
  loop.players.add(
    new PlayerEntity({
      id: 'player-' + cnt++,
      system: { isIncludedPool: true },
      position: { x: 0, y: 0, z: 0 },
      shape: { x: 0, y: 0, w: 0, h: 0, r: 0 },
      stat: { hp: 0, mp: 0, mv: 0, str: 0, dex: 0, int: 0 },
      inventory: { max: 10, items: [] },
      skills: [],
      states: [],
    })
  )
  console.log(JSON.stringify(loop, null, 2))
  loop.update()
}, 1000)
