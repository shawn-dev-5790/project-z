export default class GameLoop {
  lastTime: number = 0
  deltaTime: number = 0
  isRunning: boolean = false

  start(): void {
    this.isRunning = true
    this.animate(this.lastTime)
  }
  pause(): void {
    this.isRunning = false
    this.lastTime = 0
  }
  updateTime(timeStamp: number): void {
    this.deltaTime = timeStamp - this.lastTime
    this.lastTime = timeStamp
  }
  update(): void {
    // override
  }
  animate(timeStamp: number): void {
    if (!this.isRunning) return
    this.updateTime(timeStamp)
    this.update()
    requestAnimationFrame(this.animate.bind(this))
  }
}
