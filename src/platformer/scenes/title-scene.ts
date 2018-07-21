import Camera from '../../core/camera'
import Vector2 from '../../core/math/vector2'
import Vector3 from '../../core/math/vector3'
import { getImage } from '../../core/resource-manager'
import { IScene } from '../../core/scene'
import Sprite from '../../core/sprite'
import Text from '../../core/text'
import { INPUT_MANAGER, MouseButton } from './../../core/input'

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

    Camera.main.orthographicSize = 10
    Camera.main.transform.position = new Vector3(4, 5, 0)
  }

  public name() {
    return 'Title Screen'
  }

  public update(deltaTime: number) {
    // TODO
    const mp = INPUT_MANAGER.mousePosition

    if (INPUT_MANAGER.isMouseButtonDown(MouseButton.LEFT)) {
      Camera.main.transform.rotation -= deltaTime / 1000
    }
    if (INPUT_MANAGER.isMouseButtonDown(MouseButton.RIGHT)) {
      Camera.main.transform.rotation += deltaTime / 1000
    }

    const v2 = Camera.main.ScreenToWorld(new Vector2(mp.x, mp.y))
  }

  public draw(ctx: CanvasRenderingContext2D, deltaTime: number) {
    ctx.fillStyle = 'green'
    ctx.fillRect(-100, -100, 200, 200)
    this.titleText.draw(ctx, deltaTime)
  }
}
