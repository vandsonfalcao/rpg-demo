import { RpgClient, RpgModule } from '@rpgjs/client'
import { Emotion } from './characters/Emotion'
import { Characters } from './characters/characters'

@RpgModule<RpgClient>({ 
    spritesheets: [
        Characters,
        Emotion
    ],
})
export default class RpgClientModuleEngine {}