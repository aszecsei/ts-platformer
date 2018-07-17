import { game } from './core/game'
import init from './core/main'
import * as ResourceManager from './core/resource-manager'
import TitleScene from './platformer/scenes/title-scene'
/// <reference path="./typings/images.d.ts" />

import alicURL from './platformer/resources/images/alic_face.png'

// Load all resources
ResourceManager.loadImage('alic', alicURL as string)

init()
game.SetUpScreen(TitleScene)
