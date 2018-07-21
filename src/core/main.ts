import * as config from '../config'
import Camera from './camera'
import { game } from './game'
import { INPUT_MANAGER, MouseButton } from './input'
import Vector2 from './math/vector2'
import * as ResourceManager from './resource-manager'
import Screen from './screen'

export default function init() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')

  const resizeCanvas = () => {
    canvas.width = Screen.width
    canvas.height = Screen.height
  }

  resizeCanvas()

  ctx.imageSmoothingEnabled = true
  ctx.textBaseline = 'middle'

  let last = -1
  const fpsList = [0]

  window.addEventListener('keyup', event => INPUT_MANAGER.onKeyup(event))
  window.addEventListener('keydown', event => INPUT_MANAGER.onKeydown(event))
  window.addEventListener('mousedown', event =>
    INPUT_MANAGER.onMousedown(event)
  )
  window.addEventListener('mouseup', event => INPUT_MANAGER.onMouseup(event))
  window.addEventListener('mousemove', event =>
    INPUT_MANAGER.onMouseMove(event)
  )
  window.addEventListener('contextmenu', event => event.preventDefault())

  const gameloop = (timestamp: number) => {
    let inc = 0
    if (last) {
      inc = timestamp - last
    }
    last = timestamp

    Screen.UpdateScreen()
    resizeCanvas()

    ctx.clearRect(0, 0, Screen.width, Screen.height)

    game.currentScreen.update(inc)
    Camera.main.begin(ctx)
    game.currentScreen.draw(ctx, inc)
    Camera.main.end(ctx)

    if (config.DEBUG) {
      fpsList.push(inc)
      if (fpsList.length > config.FPS_LIST_SIZE) {
        fpsList.shift()
        ctx.fillStyle = 'white'
        ctx.font = '1em "Arial"'
        const avgFPS = fpsList.reduce((x, y) => x + y, 0) / config.FPS_LIST_SIZE
        ctx.fillText(`FPS: ${(1000 / avgFPS).toFixed(3)}`, 50, 50)
      }

      ctx.fillText(
        `Dimensions: ${Screen.width}x${Screen.height} @ ${Screen.dpr}`,
        50,
        100
      )
      const mp = INPUT_MANAGER.mousePosition
      ctx.fillText(`Mouse Pos (Screen): ${mp.x}, ${mp.y}`, 50, 150)
      const worldPos = Camera.main.ScreenToWorld(new Vector2(mp.x, mp.y))
      ctx.fillText(
        `Mouse Pos (World): ${worldPos.x.toFixed(3)}, ${worldPos.y.toFixed(3)}`,
        50,
        175
      )
      const mbStr = `${
        INPUT_MANAGER.isMouseButtonDown(MouseButton.LEFT) ? 'LEFT ' : ''
      }${INPUT_MANAGER.isMouseButtonDown(MouseButton.MIDDLE) ? 'MIDDLE ' : ''}${
        INPUT_MANAGER.isMouseButtonDown(MouseButton.RIGHT) ? 'RIGHT ' : ''
      }`
      ctx.fillText(`Mouse Buttons: ${mbStr}`, 50, 200)
    }

    if (config.cursor) {
      ctx.drawImage(
        ResourceManager.getImage(config.cursor),
        INPUT_MANAGER.mousePosition.x,
        INPUT_MANAGER.mousePosition.y
      )
    }

    INPUT_MANAGER.flush()

    window.requestAnimationFrame(gameloop)
  }

  window.requestAnimationFrame(gameloop)
}
