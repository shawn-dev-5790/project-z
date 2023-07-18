export const collisionCircle = (
  circle1: { x: number; y: number; r: number },
  circle2: { x: number; y: number; r: number }
): boolean => {
  const x = circle1.x - circle2.x
  const y = circle1.y - circle2.y
  const radius = circle1.r + circle2.r
  const distance = Math.hypot(x, y)
  return distance < radius
}
