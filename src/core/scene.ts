export interface IScene {
  name(): string
  update(deltaTime: number): void
  draw(ctx: CanvasRenderingContext2D, deltaTime: number): void
}

export interface ISceneConstructor {
  new (oldScreen?: IScene): IScene
}
