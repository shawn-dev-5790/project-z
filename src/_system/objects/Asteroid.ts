import GameObjectEntity, {
  IGameObjectEntity,
} from '../entities/GameObjectEntity'
import GameObjectPoolEntity from '../entities/GameObjectPoolEntity'

export interface IAsteroid {
  obj: GameObjectEntity
}
export interface IAsteroidProps {
  obj: IGameObjectEntity
}
export default class Asteroid implements IAsteroid {
  game: any // ctx | looper | time
  obj: GameObjectEntity
  //   img: HTMLImageElement // movement or sprite entity

  constructor(d: IAsteroidProps) {
    this.obj = new GameObjectEntity(d.obj)
  }
}
