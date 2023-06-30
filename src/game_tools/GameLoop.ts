import { CharacterObj } from './objects/CharacterObj'
import GameObjectPool from './GameObjectPool'

export default class GameLoop {
  character_pool: GameObjectPool<CharacterObj> = new GameObjectPool<CharacterObj>(10, [])
}
