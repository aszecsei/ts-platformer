import Transform from './transform'
import * as tc from 'tinycolor2'

export class Button {
  public transform: Transform

  private _isHovered: boolean

  constructor(public text: string) {
    this._isHovered = false
  }
}

export default Button
