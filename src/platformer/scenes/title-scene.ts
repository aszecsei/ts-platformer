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
    this.titleText.fontSize = '1pt'
  }

  public name() {
    return 'Title Screen'
  }

  public update(deltaTime: number) {
    // TODO
  }

  public draw(ctx: CanvasRenderingContext2D, deltaTime: number) {
    ctx.fillStyle = 'green'
    const w = (4/3) * 10
    ctx.fillRect(-100, -100, 200, 200)
    this.titleText.draw(ctx, deltaTime)
  }
}
