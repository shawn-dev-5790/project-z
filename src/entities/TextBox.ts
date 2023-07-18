export class TextBox {
  constructor(
    public x: number = 0,
    public y: number = 0,
    public value: string = '',
    public color: string = 'rgba(255,255,255,0.1)'
  ) {}

  render(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.beginPath()
    ctx.font = '20px roboto'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.strokeStyle = this.color
    ctx.strokeText(this.value, 0, 0)
    ctx.restore()
    return this
  }
  moveTo({ x, y }: { x: number; y: number }) {
    this.x = x
    this.y = y
    return this
  }
  updateValue(value: string) {
    this.value = value
    return this
  }
}
