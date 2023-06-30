import CharacterEntity from '../../shared/entities/CharacterEntity'
import { GameObject } from '../GameObjectPool'

export class CharacterObj extends CharacterEntity {
  position: any = {}
  movement: any = {}
  game_object: GameObject = new GameObject()
}
