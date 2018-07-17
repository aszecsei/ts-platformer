import { IDrawable } from './rendering'
import Screen from './screen'
import Transform from './transform'

export enum Alignment {
  Left,
  Center,
  Right,
}

export enum TextAnchor {
  UpperLeft,
  UpperCenter,
  UpperRight,
  MiddleLeft,
  MiddleCenter,
  MiddleRight,
  LowerLeft,
  LowerCenter,
  LowerRight,
}

export default class Text implements IDrawable {
  public alignment: Alignment
  public anchor: TextAnchor
  public characterSize: number
  public color: string // TODO: Color class
  public font: string
  public fontSize: string
  public fontStyle: 'normal' | 'italic' | 'oblique'
  public fontVariant: 'normal' | 'small-caps'
  public fontWeight: 'normal' | 'bold' | 'bolder' | 'lighter'
  public lineSpacing?: string
  public text: string
  public transform: Transform

  constructor() {
    this.alignment = Alignment.Left
    this.anchor = TextAnchor.MiddleCenter
    this.characterSize = 1
    this.color = 'white'
    this.font = 'Arial'
    this.fontSize = '16pt'
    this.fontStyle = 'normal'
    this.fontVariant = 'normal'
    this.fontWeight = 'normal'
    this.lineSpacing = undefined
    this.text = ''
    this.transform = new Transform()
  }

  public draw(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    ctx.fillStyle = this.color
    const fontSizeAndSpacing = this.lineSpacing
      ? `${this.fontSize}/${this.lineSpacing}`
      : this.fontSize
    ctx.font = `${this.fontStyle} ${this.fontVariant} ${
      this.fontWeight
    } ${fontSizeAndSpacing} "${this.font}"`
    // TODO: Positioning based on alignment, anchor, character size
    ctx.fillText(
      this.text,
      this.transform.position.x - ctx.measureText(this.text).width / 2,
      this.transform.position.y + 2
    )
  }
}
