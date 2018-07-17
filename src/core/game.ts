import { IScene, ISceneConstructor } from './scene'

class Game {
  public currentScreen?: IScene

  public SetUpScreen(ScreenType: ISceneConstructor) {
    const mOldScreen = this.currentScreen
    const newScreen = new ScreenType(mOldScreen)
    this.currentScreen = newScreen
  }
}

export const game: Game = new Game()
