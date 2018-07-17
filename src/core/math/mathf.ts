export const EPSILON = 0.00001
export const RANDOM = Math.random

const DEG2RAD = Math.PI / 180
const RAD2DEG = 180 / Math.PI

export function toRadian(a: number) {
  return a * DEG2RAD
}

export function Lerp(a: number, b: number, t: number) {
  return LerpUnclamped(a, b, Clamp01(t))
}

export function LerpUnclamped(a: number, b: number, t: number) {
  return (1 - t) * a + t * b
}

export function Approximately(a: number, b: number, tolerance = EPSILON) {
  return Math.abs(a - b) <= tolerance * Math.max(1.0, Math.abs(a), Math.abs(b))
}

export function Clamp(value: number, min: number, max: number) {
  return Math.max(Math.min(value, max), min)
}

export function Clamp01(value: number) {
  return Clamp(value, 0, 1)
}

export function Max(a: number, b: number) {
  return Math.max(a, b)
}

export function Min(a: number, b: number) {
  return Math.min(a, b)
}
