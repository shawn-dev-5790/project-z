export const range = (start: number, end: number, step: number = 1): number[] => {
  if (step === 0) throw new Error('Step cannot be zero')
  if (start <= end && step < 0) throw new Error('Step must be positive for increasing range')
  if (start >= end && step > 0) throw new Error('Step must be negative for decreasing range')
  return Array.from({ length: Math.floor((end - start) / step) + 1 }, (_, index) => start + index * step)
}
