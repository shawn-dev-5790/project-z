export class TargetBoxCircle {
  constructor(
    public x: number = 0,
    public y: number = 0,
    public r: number = 0,
    public color: string = 'rgba(255,255,255,0.1)'
  ) {}

  render(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.beginPath()
    ctx.strokeStyle = this.color
    ctx.arc(0, 0, this.r, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
    return this
  }
  moveTo({ x, y }: { x: number; y: number }) {
    this.x = x
    this.y = y
    return this
  }
}

export class TargetBoxLine {
  constructor(
    public x: number = 0,
    public y: number = 0,
    public dx: number = 0,
    public dy: number = 0,
    public color: string = 'rgba(255,255,255,0.1)'
  ) {}

  render(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = this.color
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.dx, this.dy)
    ctx.stroke()
    ctx.restore()
    return this
  }
  moveTo({ x, y }: { x: number; y: number }) {
    this.x = x
    this.y = y
    return this
  }
  lineTo({ x, y }: { x: number; y: number }) {
    this.dx = x
    this.dy = y
    return this
  }
}
