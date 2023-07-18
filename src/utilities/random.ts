export const randomIdx = (max: number): number => {
  return Math.floor(Math.random() * max)
}
export const randomInt = (max: number): number => {
  return randomIdx(max) + 1
}
export const randomPick = (arr: any[]): number => {
  return arr[randomIdx(arr.length)]
}
export const randomSign = (): number => {
  return Math.random() > 0.5 ? 1 : -1
}
