import { RpgPlayer, RpgPlayerHooks, Control, Components } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.name = ''
        player.speed = 2
        player.setGraphic('male012')
        player.setHitbox(16, 16)
        player.setComponentsTop(Components.text('{name}'))
        player.changeMap('simplemap')
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        await player.showText('Welcome!!!')
        return;
    }
}