import { range } from '../utilities/array'
import { collisionCircle } from '../utilities/collision'
import { coordinateRandomPoint, coordinateStraightTo } from '../utilities/coordinate'
import { randomPick } from '../utilities/random'
import { renderArc, renderLine } from '../utilities/render'
import { PooledObject } from './ObjectPool'

export class Mob extends PooledObject {
  x: number = 0
  y: number = 0
  r: number = randomPick([10, 15, 20, 25, 30])
  speed: number = randomPick([1, 2, 3, 4, 5, 6])
  target: any = null

  spawn(w: number, h: number) {
    const x = w * 0.5
    const y = h * 0.5
    const r = randomPick(range(Math.min(w, h), Math.max(w, h)))
    this.placeTo(coordinateRandomPoint({ x, y, r }))
  }

  placeTo({ x, y }: { x: number; y: number }): void {
    this.x = x
    this.y = y
  }
  traceTo(target: { x: number; y: number; r: number }) {
    this.target = target
  }
  onCollision(handler: () => void) {
    if (!this.target) return
    if (collisionCircle(this, this.target)) handler()
  }
  update(): void {
    if (this.free) return
    if (!this.target) return
    this.placeTo(coordinateStraightTo(this.x, this.y, this.target.x, this.target.y, this.speed))
  }
  render(ctx: CanvasRenderingContext2D): void {
    if (this.free) return
    if (!this.target) return
    // target circle
    renderArc(ctx, this.x, this.y, this.r, 'white')
    // guide line
    renderLine(ctx, this.x, this.y, this.target.x, this.target.y)
  }
}
