import * as config from '../config'
import Camera from './camera'
import { game } from './game'
import { INPUT_MANAGER } from './input'
import Screen from './screen'

export default function init() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')

  const resizeCanvas = () => {
    canvas.width = Screen.width
    canvas.height = Screen.height
  }

  resizeCanvas()

  ctx.imageSmoothingEnabled = false
  ctx.textBaseline = 'middle'

  let last = -1
  const fpsList = [0]

  window.addEventListener('keyup', event => INPUT_MANAGER.onKeyup(event))
  window.addEventListener('keydown', event => INPUT_MANAGER.onKeydown(event))

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
    }

    INPUT_MANAGER.flush()

    window.requestAnimationFrame(gameloop)
  }

  window.requestAnimationFrame(gameloop)
}
