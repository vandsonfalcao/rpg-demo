import defaultGui from '@rpgjs/default-gui'
import gamepad from '@rpgjs/gamepad'
import mobileGui from '@rpgjs/mobile-gui'
import emotionBubblesPlugin from '@rpgjs/plugin-emotion-bubbles'
import main from './main'

export default [
    main,
    defaultGui,
    mobileGui,
    gamepad,
    emotionBubblesPlugin,
]