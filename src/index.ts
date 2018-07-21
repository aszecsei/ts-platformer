import { game } from './core/game'
import init from './core/main'
import * as ResourceManager from './core/resource-manager'
import TitleScene from './platformer/scenes/title-scene'
/// <reference path="./@types/images.d.ts" />

import cursorImage from './platformer/resources/images/arrow-cursor.png'

// Load all resources
ResourceManager.loadImage('cursor-arrow', cursorImage)

init()
game.SetUpScreen(TitleScene)
