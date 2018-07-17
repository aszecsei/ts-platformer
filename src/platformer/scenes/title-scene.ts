import Camera from '../../core/camera'
import Vector2 from '../../core/math/vector2'
import Vector3 from '../../core/math/vector3'
import { getImage } from '../../core/resource-manager'
import { IScene } from '../../core/scene'
import Sprite from '../../core/sprite'
import Text from '../../core/text'

export default class TitleScene implements IScene {
  private titleText: Text
  private zoomLevel = 10
  private zoomDirection = 1
  private theta = 0

  private maxZoomLevel = 13
  private minZoomLevel = 10

  private alicSprite: Sprite

  constructor() {
    this.titleText = new Text()
    this.titleText.text = 'Platformer'
    this.titleText.fontSize = '1pt'

    this.alicSprite = new Sprite(getImage('alic'), 1458, 1782)
    this.alicSprite.transform.scale = new Vector2(0.01, 0.01)
  }

  public name() {
    return 'Title Screen'
  }

  public update(deltaTime: number) {
    // TODO
    this.alicSprite.update(deltaTime)
  }

  public draw(ctx: CanvasRenderingContext2D, deltaTime: number) {
    ctx.fillStyle = 'green'
    ctx.fillRect(-100, -100, 200, 200)
    this.titleText.draw(ctx, deltaTime)
    this.alicSprite.draw(ctx)
  }
}
