import Screen from './screen'
import Transform from './transform'



export interface IAspectRatio {
  height: number,
  width: number
}
export default class Camera {
  private static _main = new Camera()

  public static get main() {
    return Camera._main
  }

  public static set main(newCamera: Camera) {
    Camera._main = newCamera
  }

  /**
   * The camera location, rotation, and scale. The scale does not affect the camera.
   */
  public transform: Transform

  /**
   * The camera's vertical half-size. The horizontal size of the viewing volume depends on the aspect ratio.
   */
  public orthographicSize: number

  /**
   * The aspect ratio of the camera viewport
   */
  public aspectRatio: IAspectRatio

  private _width: number
  private _height: number
  private _scalingFactor: number

  constructor() {
    this.transform = new Transform()
    this.orthographicSize = 10
    this.aspectRatio = {
      height: 3,
      width: 4,
    }
  }

  public begin(ctx: CanvasRenderingContext2D) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.applyScreenTranslation(ctx)
    this.applyScreenScale(ctx)
    this.applyScale(ctx)
    this.applyRotation(ctx)
    this.applyTranslation(ctx)
  }

  public end(ctx: CanvasRenderingContext2D) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.drawLetterbox(ctx)
  }

  private applyScale(ctx: CanvasRenderingContext2D) {
    const zoomLevel = this._height / (2 * this.orthographicSize)
    ctx.scale(zoomLevel, zoomLevel)
  }

  private applyScreenTranslation(ctx: CanvasRenderingContext2D) {
    ctx.translate(Screen.width / 2, Screen.height / 2)
  }

  private applyScreenScale(ctx: CanvasRenderingContext2D) {
    const actualWidth = Screen.width
    const actualHeight = Screen.height
    const heightFromWidth = Screen.width * this.aspectRatio.height / this.aspectRatio.width
    const widthFromHeight = Screen.height * this.aspectRatio.width / this.aspectRatio.height
    this._width = actualWidth
    this._height = actualHeight
    this._scalingFactor = 1
    if (heightFromWidth > actualHeight) {
      this._scalingFactor = actualHeight / heightFromWidth
      this._height = heightFromWidth
    } else if (widthFromHeight > actualWidth) {
      this._scalingFactor = actualWidth / widthFromHeight
      this._width = widthFromHeight
    }
    ctx.scale(this._scalingFactor, this._scalingFactor)
  }

  private applyRotation(ctx: CanvasRenderingContext2D) {
    ctx.rotate(-this.transform.rotation)
  }

  private applyTranslation(ctx: CanvasRenderingContext2D) {
    ctx.translate(-this.transform.position.x, -this.transform.position.y)
  }

  private drawLetterbox(ctx: CanvasRenderingContext2D) {
    if (this._width > Screen.width) {
      // Vertical letterboxes
      const letterboxHeight = Screen.height - (this._height * this._scalingFactor)
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, Screen.width, letterboxHeight / 2)
      ctx.fillRect(0, Screen.height - letterboxHeight / 2, Screen.width, letterboxHeight / 2)
    } else if (this._height > Screen.height) {
      // Horizontal letterboxes
      const letterboxWidth = Screen.width - (this._width * this._scalingFactor)
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, letterboxWidth / 2, Screen.height)
      ctx.fillRect(Screen.width - letterboxWidth / 2, 0, letterboxWidth / 2, Screen.height)
    }
  }
}