import { IScene, ISceneConstructor } from './scene'

class Game {
  public currentScreen?: IScene

  public SetUpScreen(sceneType: ISceneConstructor) {
    const mOldScreen = this.currentScreen
    const newScreen = new sceneType(mOldScreen)
    this.currentScreen = newScreen
  }
}

export const game: Game = new Game()
