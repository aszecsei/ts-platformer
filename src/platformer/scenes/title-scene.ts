import Camera from  '../../core/camera'
import Vector3 from '../../core/math/vector3';
import { IScene } from '../../core/scene'
import Text from '../../core/text'

export default class TitleScene implements IScene {
  private titleText: Text
  private zoomLevel = 10
  private zoomDirection = 1
  private theta = 0

  private maxZoomLevel = 13
  private minZoomLevel = 10

  constructor() {
    this.titleText = new Text()
    this.titleText.text = 'Platformer'
    this.titleText.fontSize = '12pt'
  }

  public name() {
    return 'Title Screen'
  }

  public update(deltaTime: number) {
    this.zoomLevel += this.zoomDirection * deltaTime / 1000
    this.theta += deltaTime / 1000
    if (this.zoomLevel >= this.maxZoomLevel) {
      this.zoomDirection = -1
      this.zoomLevel = this.maxZoomLevel
    }
    if (this.zoomLevel <= this.minZoomLevel) {
      this.zoomDirection = 1
      this.zoomLevel = this.minZoomLevel
    }
    Camera.main.zoom = this.zoomLevel
    Camera.main.transform.position = new Vector3(Math.cos(this.theta) * 10, Math.sin(this.theta) * 10, 0)
  }

  public draw(ctx: CanvasRenderingContext2D, deltaTime: number) {
    this.titleText.draw(ctx, deltaTime)
  }
}
