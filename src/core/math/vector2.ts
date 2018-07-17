import * as Mathf from './mathf'

export default class Vector2 {
  public static get down() {
    return new Vector2(0, -1)
  }
  public static get left() {
    return new Vector2(-1, 0)
  }
  public static get negativeInfinity() {
    return new Vector2(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY)
  }
  public static get one() {
    return new Vector2(1, 1)
  }
  public static get positiveInfinity() {
    return new Vector2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)
  }
  public static get right() {
    return new Vector2(1, 0)
  }
  public static get up() {
    return new Vector2(0, 1)
  }
  public static get zero() {
    return new Vector2(0, 0)
  }

  public static Angle(from: Vector2, to: Vector2) {
    const cosTheta = Vector2.Dot(from, to) / (from.magnitude * to.magnitude)
    return Math.acos(cosTheta)
  }

  public static ClampMagnitude(
    vector: Vector2,
    maxLength: number,
    dest?: Vector2
  ) {
    if (!dest) {
      dest = new Vector2()
    }
    const mag = vector.sqrMagnitude
    if (mag > maxLength ** 2) {
      dest.x = (vector.x * maxLength) / Math.sqrt(mag)
      dest.y = (vector.y * maxLength) / Math.sqrt(mag)
    } else {
      dest.xy = vector.xy
    }
    return dest
  }

  public static Distance(a: Vector2, b: Vector2) {
    const x = new Vector2(b.x - a.x, b.y - a.y)
    return x.magnitude
  }

  public static Dot(lhs: Vector2, rhs: Vector2) {
    return lhs.x * rhs.x + lhs.y * rhs.y
  }

  public static Lerp(a: Vector2, b: Vector2, t: number, dest?: Vector2) {
    if (!dest) {
      dest = new Vector2()
    }
    dest.x = Mathf.Lerp(a.x, b.x, t)
    dest.y = Mathf.Lerp(a.y, b.y, t)
    return dest
  }

  public static LerpUnclamped(
    a: Vector2,
    b: Vector2,
    t: number,
    dest?: Vector2
  ) {
    if (!dest) {
      dest = new Vector2()
    }
    dest.x = Mathf.LerpUnclamped(a.x, b.x, t)
    dest.y = Mathf.LerpUnclamped(a.y, b.y, t)
    return dest
  }

  public static Max(a: Vector2, b: Vector2, dest?: Vector2) {
    if (!dest) {
      dest = new Vector2()
    }
    dest.x = Mathf.Max(a.x, b.x)
    dest.y = Mathf.Max(a.y, b.y)
    return dest
  }

  public static Min(a: Vector2, b: Vector2, dest?: Vector2) {
    if (!dest) {
      dest = new Vector2()
    }
    dest.x = Mathf.Min(a.x, b.x)
    dest.y = Mathf.Min(a.y, b.y)
    return dest
  }

  public static Perpendicular(inDirection: Vector2) {
    // TODO
    throw new Error('Not implemented')
  }

  public static Reflect(inDirection: Vector2, inNormal: Vector2) {
    // TODO
    throw new Error('Not implemented')
  }

  public static SignedAngle(from: Vector2, to: Vector2) {
    // TODO
    throw new Error('Not implemented')
  }

  public static Sum(lhs: Vector2, rhs: Vector2, dest?: Vector2) {
    if (!dest) {
      dest = new Vector2()
    }
    dest.x = lhs.x + rhs.x
    dest.y = lhs.y + rhs.y
    return dest
  }

  public static Product(lhs: Vector2, rhs: Vector2, dest?: Vector2) {
    if (!dest) {
      dest = new Vector2()
    }
    dest.x = lhs.x * rhs.x
    dest.y = lhs.y * rhs.y
    return dest
  }

  public static Difference(lhs: Vector2, rhs: Vector2, dest?: Vector2) {
    if (!dest) {
      dest = new Vector2()
    }
    dest.x = lhs.x - rhs.x
    dest.y = lhs.y - rhs.y
    return dest
  }

  public static Quotient(lhs: Vector2, rhs: Vector2, dest?: Vector2) {
    if (!dest) {
      dest = new Vector2()
    }
    dest.x = lhs.x / rhs.x
    dest.y = lhs.y / rhs.y
    return dest
  }

  public x: number
  public y: number

  public get xy() {
    return [this.x, this.y]
  }
  public set xy(value: number[]) {
    this.x = value[0]
    this.y = value[1]
  }

  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  public get magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  public get normalized() {
    return new Vector2(this.x / this.magnitude, this.y / this.magnitude)
  }

  public get sqrMagnitude() {
    return this.x ** 2 + this.y ** 2
  }

  public Equals(other: Vector2) {
    return this.x === other.x && this.y === other.y
  }

  public Normalize() {
    const m = this.magnitude
    this.x /= m
    this.y /= m
  }

  public toString() {
    return `<Vector2 (${this.x}, ${this.y})>`
  }
}
