export const checkCollisionCircle = (
  target1: { x: number; y: number; r: number },
  target2: { x: number; y: number; r: number }
): boolean => {
  const x: number = target1.x - target2.x
  const y: number = target1.y - target2.y
  const radius: number = target1.r + target2.r / 2
  const distance: number = Math.hypot(x, y)
  const res: boolean = distance < radius
  return res
}
