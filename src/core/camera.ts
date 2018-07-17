import Screen from './screen'
import Transform from './transform'


export default class Camera {
  private static _main = new Camera()

  public static get main() {
    return Camera._main
  }

  public static set main(newCamera: Camera) {
    Camera._main = newCamera
  }

  public transform: Transform
  public zoom: number

  constructor() {
    this.transform = new Transform()
    this.zoom = 1
  }

  public begin(ctx: CanvasRenderingContext2D) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.applyScreenTranslation(ctx)
    this.applyScale(ctx)
    this.applyTranslation(ctx)
  }

  public end(ctx: CanvasRenderingContext2D) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  private applyScale(ctx: CanvasRenderingContext2D) {
    ctx.scale(this.zoom, this.zoom)
  }

  private applyScreenTranslation(ctx: CanvasRenderingContext2D) {
    ctx.translate(Screen.width / 2, Screen.height / 2)
  }

  private applyTranslation(ctx: CanvasRenderingContext2D) {
    ctx.translate(-this.transform.position.x, -this.transform.position.y)
  }
}