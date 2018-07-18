import Transform from './transform'
import Vector2 from './math/vector2'

export enum LoopType {
  NONE,
  REPEAT,
  PINGPONG,
}
export default class Sprite {
  public transform: Transform

  private _inverseFPS: number
  private _currentFrame: number
  private _elapsedTime: number
  private _frameDirection: number = 1

  constructor(
    public sheet: HTMLImageElement,
    public width: number,
    public height: number,
    public anchor: Vector2 = Vector2.zero,
    public numFrames: number = 1,
    framesPerSecond: number = 12,
    public loopType: LoopType = LoopType.NONE
  ) {
    this._inverseFPS = 1000 / framesPerSecond
    this._currentFrame = 0
    this._elapsedTime = 0
    this.transform = new Transform()
  }

  public update(deltaTime: number) {
    this._elapsedTime += deltaTime
    if (this._elapsedTime >= this._inverseFPS) {
      this._currentFrame += this._frameDirection
      this._elapsedTime -= this._inverseFPS
    }
    if (this._currentFrame >= this.numFrames) {
      if (this.loopType === LoopType.NONE) {
        this._currentFrame = this.numFrames - 1
      } else if (this.loopType === LoopType.REPEAT) {
        this._currentFrame = 0
      } else if (this.loopType === LoopType.PINGPONG) {
        this._currentFrame = this.numFrames - 2
        this._frameDirection *= -1
      }
    }
    if (this._currentFrame < 0) {
      this._currentFrame = 1
      if (this.loopType === LoopType.PINGPONG) {
        this._frameDirection *= -1
      }
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    const mX = this.transform.position.x
    const mY = this.transform.position.y * -1

    ctx.translate(mX, mY)
    ctx.rotate(this.transform.rotation)
    ctx.drawImage(
      this.sheet,
      this._currentFrame * this.width,
      0,
      this.width,
      this.height,
      -this.anchor.x * this.transform.scale.x,
      -this.anchor.y * this.transform.scale.y,
      this.width * this.transform.scale.x,
      this.height * this.transform.scale.y
    )
    ctx.rotate(-this.transform.rotation)
    ctx.translate(-mX, -mY)
  }
}
