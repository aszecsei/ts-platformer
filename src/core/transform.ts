import Vector2 from './math/vector2'
import Vector3 from './math/vector3'

export default class Transform {
  public position: Vector3
  public rotation: number
  public scale: Vector2

  constructor() {
    this.position = Vector3.zero
    this.rotation = 0
    this.scale = Vector2.one
  }
}