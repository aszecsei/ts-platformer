import * as Mathf from './mathf'
import Vector2 from './vector2'

export default class Vector3 {
  public static get back() {
    return new Vector3(0, 0, -1)
  }
  public static get down() {
    return new Vector3(0, -1, 0)
  }
  public static get forward() {
    return new Vector3(0, 0, 1)
  }
  public static get left() {
    return new Vector3(-1, 0, 0)
  }
  public static get negativeInfinity() {
    return new Vector3(
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY
    )
  }
  public static get one() {
    return new Vector3(1, 1, 1)
  }
  public static get positiveInfinity() {
    return new Vector3(
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY
    )
  }
  public static get right() {
    return new Vector3(1, 0, 0)
  }
  public static get up() {
    return new Vector3(0, 1, 0)
  }
  public static get zero() {
    return new Vector3(0, 0, 0)
  }

  public static Angle(from: Vector3, to: Vector3) {
    const cosTheta = Vector3.Dot(from, to) / (from.magnitude * to.magnitude)
    return Math.acos(cosTheta)
  }

  public static ClampMagnitude(
    vector: Vector3,
    maxLength: number,
    dest?: Vector3
  ) {
    if (!dest) {
      dest = new Vector3()
    }
    const mag = vector.sqrMagnitude
    if (mag > maxLength ** 2) {
      const m = Math.sqrt(mag)
      dest.x = (vector.x * maxLength) / m
      dest.y = (vector.y * maxLength) / m
      dest.z = (vector.z * maxLength) / m
    } else {
      dest.xyz = vector.xyz
    }
    return dest
  }

  public static Cross(lhs: Vector3, rhs: Vector3, dest?: Vector3) {
    if (!dest) {
      dest = new Vector3()
    }
    dest.x = lhs.x * rhs.z - lhs.z * rhs.y
    dest.y = lhs.z * rhs.x - lhs.x * rhs.z
    dest.z = lhs.x * rhs.y - lhs.y * rhs.x
    return dest
  }

  public static Distance(a: Vector3, b: Vector3) {
    const x = new Vector3(b.x - a.x, b.y - a.y, a.z - b.z)
    return x.magnitude
  }

  public static Dot(lhs: Vector3, rhs: Vector3) {
    return lhs.x * rhs.x + lhs.y * rhs.y + lhs.z * rhs.z
  }

  public static Lerp(a: Vector3, b: Vector3, t: number, dest?: Vector3) {
    if (!dest) {
      dest = new Vector3()
    }
    dest.x = Mathf.Lerp(a.x, b.x, t)
    dest.y = Mathf.Lerp(a.y, b.y, t)
    dest.z = Mathf.Lerp(a.z, b.z, t)
    return dest
  }

  public static LerpUnclamped(
    a: Vector3,
    b: Vector3,
    t: number,
    dest?: Vector3
  ) {
    if (!dest) {
      dest = new Vector3()
    }
    dest.x = Mathf.LerpUnclamped(a.x, b.x, t)
    dest.y = Mathf.LerpUnclamped(a.y, b.y, t)
    dest.z = Mathf.LerpUnclamped(a.z, b.z, t)
    return dest
  }

  public static Max(a: Vector3, b: Vector3, dest?: Vector3) {
    if (!dest) {
      dest = new Vector3()
    }
    dest.x = Mathf.Max(a.x, b.x)
    dest.y = Mathf.Max(a.y, b.y)
    dest.z = Mathf.Max(a.z, b.z)
    return dest
  }

  public static Min(a: Vector3, b: Vector3, dest?: Vector3) {
    if (!dest) {
      dest = new Vector3()
    }
    dest.x = Mathf.Min(a.x, b.x)
    dest.y = Mathf.Min(a.y, b.y)
    dest.z = Mathf.Min(a.z, b.z)
    return dest
  }

  public static Project(vector: Vector3, onNormal: Vector3, dest?: Vector3) {
    if (!dest) {
      dest = new Vector3()
    }
    dest.xyz = onNormal.xyz
    const num = Vector3.Dot(onNormal, onNormal)
    if (num < Mathf.EPSILON) {
      return Vector3.zero
    }
    const scalar = Vector3.Dot(vector, onNormal) / num
    dest.x *= scalar
    dest.y *= scalar
    dest.z *= scalar
    return dest
  }

  public static ProjectOnPlane(vector: Vector3, planeNormal: Vector3) {
    return Vector3.Difference(vector, Vector3.Project(vector, planeNormal))
  }

  public static Reflect(inDirection: Vector3, inNormal: Vector3) {
    // TODO
    throw new Error('Not implemented')
  }

  public static SignedAngle(from: Vector3, to: Vector3) {
    // TODO
    throw new Error('Not implemented')
  }

  public static Slerp(a: Vector3, b: Vector3, t: number, dest?: Vector3) {
    // TODO
    throw new Error('Not implemented')
  }

  public static SlerpUnclamped(
    a: Vector3,
    b: Vector3,
    t: number,
    dest?: Vector3
  ) {
    // TODO
    throw new Error('Not implemented')
  }

  public static Sum(lhs: Vector3, rhs: Vector3, dest?: Vector3) {
    if (!dest) {
      dest = new Vector3()
    }
    dest.x = lhs.x + rhs.x
    dest.y = lhs.y + rhs.y
    dest.z = lhs.z + rhs.z
    return dest
  }

  public static Product(lhs: Vector3, rhs: Vector3, dest?: Vector3) {
    if (!dest) {
      dest = new Vector3()
    }
    dest.x = lhs.x * rhs.x
    dest.y = lhs.y * rhs.y
    dest.z = lhs.z * rhs.z
    return dest
  }

  public static Difference(lhs: Vector3, rhs: Vector3, dest?: Vector3) {
    if (!dest) {
      dest = new Vector3()
    }
    dest.x = lhs.x - rhs.x
    dest.y = lhs.y - rhs.y
    dest.z = lhs.z - rhs.z
    return dest
  }

  public static Quotient(lhs: Vector3, rhs: Vector3, dest?: Vector3) {
    if (!dest) {
      dest = new Vector3()
    }
    dest.x = lhs.x / rhs.x
    dest.y = lhs.y / rhs.y
    dest.z = lhs.z / rhs.z
    return dest
  }

  private x: number
  private y: number
  private z: number

  public get xy() {
    return [this.x, this.y]
  }
  public set xy(value: number[]) {
    this.x = value[0]
    this.y = value[1]
  }

  public get yz() {
    return [this.y, this.z]
  }
  public set yz(value: number[]) {
    this.y = value[0]
    this.z = value[1]
  }

  public get xyz() {
    return [this.x, this.y, this.z]
  }
  public set xyz(value: number[]) {
    this.x = value[0]
    this.y = value[1]
    this.z = value[2]
  }

  constructor(x = 0, y = 0, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  public get magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
  }

  public get normalized() {
    return new Vector3(
      this.x / this.magnitude,
      this.y / this.magnitude,
      this.z / this.magnitude
    )
  }

  public get sqrMagnitude() {
    return this.x ** 2 + this.y ** 2 + this.z ** 2
  }

  public Equals(other: Vector3) {
    return (
      Mathf.Approximately(this.x, other.x) &&
      Mathf.Approximately(this.y, other.y) &&
      Mathf.Approximately(this.z, other.z)
    )
  }

  public Normalize() {
    const m = this.magnitude
    this.x /= m
    this.y /= m
    this.z /= m
  }

  public toString() {
    return `<Vector3 (${this.x}, ${this.y}, ${this.z})>`
  }
}
