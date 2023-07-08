import Particle, { IParticle } from './Particle'

export type TParticleName = 'asteroid'
export interface IParticleFactory {
  game: any
}
export default class ParticleFactory implements IParticleFactory {
  game: any

  constructor(game: any) {
    this.game = game
  }

  public create(name: TParticleName, length: number = 1): Particle[] {
    if (name === 'asteroid') {
      return Array.from({ length }, () => this._createAsteroid())
    }
    throw new Error('can not create Particle by this name')
  }

  private _createAsteroid(): Particle {
    const param: IParticle = {
      game: this.game,
      img: document.querySelector('#asteroid')!,
      free: true,
      x: 0,
      y: Math.random() * this.game.h,
      r: 40,
      a: Math.random() > 0.5 ? 1 : -1,
      v: Math.random() * 0.05 - 0.01,
      s: Math.random() ,
    }
    return new Particle(param)
  }
}
