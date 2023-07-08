export interface IParticle {
  game: any // game instance
  img: HTMLImageElement // img id
  free?: boolean // for object pools
  x?: number // x coordinate
  y?: number // y coordinate
  r?: number // radius
  a?: number // angle
  v?: number // velocity
  s?: number // speed
  c?: boolean // crash
}

export default class Particle implements IParticle {
  game: any
  img: HTMLImageElement
  free: boolean
  x: number
  y: number
  r: number
  a: number
  v: number
  s: number
  c: boolean = false

  constructor(d: IParticle) {
    this.game = d.game
    this.img = d.img
    this.free = d.free || false
    this.x = d.x || 0
    this.y = d.y || 0
    this.r = d.r || 0
    this.a = d.a || 0
    this.v = d.v || 0
    this.s = d.s || 0
  }
  reset() {
    this.free = true
    this.x = 0
    // this.y = 0
  }
  start() {
    this.free = false
  }
  placeTo() {}
  moveTo() {
    // from x -> to x animate function durations life cycles
  }
  // updates
  updateAngle() {
    this.a += this.v
  }
  updateX() {
    if (this.x > this.game.w + this.r) this.reset()
    this.x += this.s
  }
  updateY() {
    if (this.y > this.game.h + this.r) this.reset()
    this.y += this.s
  }

  // renders
  renderImg(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.img, -this.r, -this.r, this.r * 2, this.r * 2)
  }
  renderTargetBox(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(0, 0, this.r, 0, Math.PI * 2)
    ctx.stroke()
  }
  renderFootPrint(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.moveTo(-this.r * 2, 0)
    ctx.lineTo(0, 0)
    ctx.stroke()
  }
  update() {
    if (this.free) return
    this.updateAngle()
    this.updateX()
    // this.updateY()
  }
  render(ctx: CanvasRenderingContext2D) {
    if (this.free) return
    ctx.save()
    ctx.translate(this.x, this.y)
    this.renderTargetBox(ctx)
    // ctx.rotate(this.a)
    // this.renderImg(ctx)
    // ctx.rotate(-this.a)
    // this.renderFootPrint(ctx)
    ctx.restore()
  }
}
