import { randomIdx } from './random'

export class SpriteAnimator {
  img: HTMLImageElement
  fx: number = 0
  fy: number = 0
  mfx: number
  mfy: number
  duration: number
  sw: number
  sh: number
  elapsed: number = 0
  tick: number
  x: number = 0
  y: number = 0
  w: number = 0
  h: number = 0
  isPlaying: boolean = false

  constructor(img: HTMLImageElement, frameMatrix: string, sizeMatrix: string, duration: number) {
    this.img = img
    this.mfx = Number(frameMatrix.split('x')[0])
    this.mfy = Number(frameMatrix.split('x')[1])
    this.sw = this.img.width / this.mfx
    this.sh = this.img.height / this.mfy
    this.duration = duration
    this.tick = this.duration / this.mfx
    this.updateSize(Number(sizeMatrix.split('x')[0]), Number(sizeMatrix.split('x')[1]))
  }

  reset() {
    this.updatePos(0, 0)
    // this.updateSize(0, 0)
    this.updateFrame(0, 0)
    this.updateElapsed(0)
    this.pause()
  }
  start() {
    this.isPlaying = true
  }
  pause() {
    this.isPlaying = false
  }
  animate() {
    // if (this.fx > this.mfx) this.isPlaying = false
    if (this.fx >= this.mfx) {
      this.fx = 0
      this.reset()
    }
    if (this.elapsed >= this.tick) {
      this.fx += 1
      this.updateElapsed(0)
    }
  }
  updateElapsed(elapsed: number) {
    this.elapsed = elapsed
  }
  updatePos(x: number, y: number) {
    this.x = x
    this.y = y
  }
  updateSize(w: number, h: number) {
    this.w = w
    this.h = h
  }
  updateFrame(fx: number, fy: number) {
    this.fx = fx
    this.fy = fy
  }
  updateExplosionType() {
    this.fy = randomIdx(this.mfy)
  }
  updateDuration(duration: number) {
    this.duration = duration
    this.tick = this.duration / this.mfx
  }
  update(delta: number) {
    if (!this.isPlaying) return
    this.updateElapsed(this.elapsed + delta)
    this.animate()
  }
  render(ctx: CanvasRenderingContext2D) {
    if (!this.isPlaying) return
    ctx.save()
    ctx.translate(this.x, this.y)
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
