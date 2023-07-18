const DEFAULT_STROKE_STYLE = 'rgba(255,255,255,0.1)'

export const renderArc = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  color: string | undefined = DEFAULT_STROKE_STYLE
): void => {
  ctx.save()
  ctx.translate(x, y)
  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.arc(0, 0, r, 0, Math.PI * 2)
  ctx.stroke()
  ctx.restore()
}

export const renderLine = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  dx: number,
  dy: number,
  color: string | undefined = DEFAULT_STROKE_STYLE
): void => {
  ctx.save()
  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.moveTo(x, y)
  ctx.lineTo(dx, dy)
  ctx.stroke()
  ctx.restore()
}
