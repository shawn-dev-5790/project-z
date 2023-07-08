export const getRandomIdx = (length: number): number => {
  return Math.floor(Math.random() * length)
}
export const getRandomPositiveNegative = (): number => {
  return Math.random() > 0.5 ? 1 : -1
}
