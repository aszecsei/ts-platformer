import { IScene } from '../../core/scene'
import Screen from '../../core/screen'
import Text from '../../core/text'

export default class TitleScene implements IScene {
  private titleText: Text

  constructor() {
    this.titleText = new Text()
    this.titleText.text = 'Platformer'
    this.titleText.fontSize = '64pt'
    this.titleText.lineSpacing = '72pt'
  }

  public name() {
    return 'Title Screen'
  }

  public update() {
    // Do nothing
  }

  public draw(ctx: CanvasRenderingContext2D, deltaTime: number) {
    this.titleText.draw(ctx, deltaTime)
  }
}
