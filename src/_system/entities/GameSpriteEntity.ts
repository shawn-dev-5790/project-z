export interface IGameSpriteEntity {
  img: HTMLImageElement
  infinite: boolean
  free: boolean
  x: number // x coordinate
  y: number // y coordinate
  w: number // width
  h: number // height
  sw: number // sprite width
  sh: number // sprite height
  fx: number // frame x
  fy: number // frame y
  fm: number // frame max
  at: number // animation timer
  ai: number // animation interval
  ad: number // animation duration
}
export default class GameSpriteEntity implements IGameSpriteEntity {
  img: HTMLImageElement
  infinite: boolean
  free: boolean
  s: number = 0
  x: number
  y: number
  w: number
  h: number
  sw: number
  sh: number
  fx: number
  fy: number
  fm: number
  at: number
  ai: number
  ad: number

  constructor(d: IGameSpriteEntity) {
    this.img = d.img
    this.infinite = d.infinite
    this.free = d.free
    this.x = d.x
    this.y = d.y
    this.w = d.w
    this.h = d.h
    this.sw = d.sw
    this.sh = d.sh
    this.fx = d.fx
    this.fy = d.fy
    this.fm = d.fm
    this.at = d.at
    this.ai = d.ai
    this.ad = d.ad
  }

  reset() {
    this.free = true
    this.fx = 0
    this.at = 0
    this.x = 0
    this.y = 0
  }
  start(x: number, y: number, ad: number) {
    this.free = false
    this.x = x
    this.y = y
    this.ad = ad
  }
  update(delta: number): void {
    if (this.free) return
    if (this.at > this.ai * this.ad) {
      this.fx += 1
      this.at = 0
    }
    if (this.fx > this.fm) this.reset()
    this.at += delta
  }
  render(ctx: CanvasRenderingContext2D, opts: boolean = false): void {
    if (this.free) return
    ctx.save()
    ctx.translate(this.x, this.y)
    opts && ctx.scale(-1, 1)
    ctx.drawImage(
      this.img,
      this.sw * this.fx,
      this.sh * this.fy,
      this.sw,
      this.sh,
      this.w * -0.5,
      this.h * -0.5,
      this.w,
      this.h
    )
    ctx.restore()
  }
}
