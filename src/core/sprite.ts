import Transform from './transform'

export class Sprite {
  public transform: Transform

  private _inverseFPS: number
  private _currentFrame: number
  private _elapsedTime: number

  constructor(
    public sheet: HTMLImageElement,
    public width: number,
    public height: number,
    public numFrames: number = 1,
    framesPerSecond: number = 12
  ) {
    this._inverseFPS = 1000 / framesPerSecond
    this._currentFrame = 0
    this._elapsedTime = 0
  }

  public update(deltaTime: number) {
    this._elapsedTime += deltaTime
    if (this._elapsedTime >= this._inverseFPS) {
      this._currentFrame++
      this._elapsedTime -= this._inverseFPS
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
      -this.width / 2,
      -this.height / 2,
      this.width * this.transform.scale.x,
      this.height * this.transform.scale.y
    )
    ctx.rotate(-this.transform.rotation)
    ctx.translate(-mX, -mY)
  }
}
