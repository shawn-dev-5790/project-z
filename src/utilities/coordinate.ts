import { randomIdx } from './random'

export const coordinateDelta = (current: number, destination: number): number => {
  return destination - current
}
export const coordinateDistance = (deltaX: number, deltaY: number): number => {
  return Math.sqrt(deltaX ** 2 + deltaY ** 2)
}
export const coordinateIncrement = (delta: number, distance: number): number => {
  return delta / distance || 0
}
export const coordinateTick = (increment: number, speed: number): number => {
  return increment * speed
}
export const coordinateStraightTo = (
  x: number,
  y: number,
  dx: number,
  dy: number,
  speed: number
): { x: number; y: number } => {
  const delta_x = coordinateDelta(x, dx)
  const delta_y = coordinateDelta(y, dy)
  const distance = coordinateDistance(delta_x, delta_y)
  const increment_x = coordinateIncrement(delta_x, distance)
  const increment_y = coordinateIncrement(delta_y, distance)
  const tick_x = coordinateTick(increment_x, speed)
  const tick_y = coordinateTick(increment_y, speed)
  const next_x = tick_x > distance ? dx : x + tick_x
  const next_y = tick_y > distance ? dy : y + tick_y
  return { x: next_x, y: next_y }
}
export const coordinateRandomPoint = ({ x, y, r }: { x: number; y: number; r: number }): { x: number; y: number } => {
  const random_angle = randomIdx(361)
  const point_x = Math.cos(random_angle) * r + x
  const point_y = Math.sin(random_angle) * r + y
  return { x: point_x, y: point_y }
}
