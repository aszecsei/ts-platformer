export interface IResolution {
  height: number
  width: number
}

export default class Screen {
  public static UpdateScreen() {
    Screen._height = document.documentElement.clientHeight
    Screen._width = document.documentElement.clientWidth
    Screen._dpr = window.devicePixelRatio
  }

  public static get height() {
    return Screen._height
  }

  public static get width() {
    return Screen._width
  }

  public static get dpr() {
    return Screen._dpr
  }

  public static get resolution(): IResolution {
    return {
      height: Screen._height,
      width: Screen._width,
    }
  }

  private static _dpr: number
  private static _height: number
  private static _width: number
}
