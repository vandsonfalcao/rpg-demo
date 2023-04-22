import { EventData, RpgEvent, RpgPlayer } from "@rpgjs/server";
import { Jankenpon, JankenponOption, JankenponResult } from "./jankenpon";

@EventData({
	name: "EV-1",
	hitbox: {
		width: 32,
		height: 16,
	},
})
export class VillagerEvent extends RpgEvent {
	onInit() {
		this.setGraphic("female132");
	}
	async onAction(player: RpgPlayer) {
		const jankenpon = new Jankenpon();
		await player.showText("Se você me vencer, te darei 10 Moedas.", {
			talkWith: this,
		});
		let result = JankenponResult.DRAW;
		do {
			const computerOption = jankenpon.getRandomOption();
			const playerOption = await player.showChoices("Oque vai ser?", [
				{ text: "Pedra", value: JankenponOption.ROCK },
				{ text: "Papel", value: JankenponOption.PAPER },
				{ text: "Tesoura", value: JankenponOption.SCISSORS },
			]);
			player.showAnimation("hands", playerOption?.value);
			this.showAnimation("hands", computerOption);
			await player.showText("...");
			result = jankenpon.compareOptions(playerOption?.value, computerOption);
			await player.showText(result);
		} while (result === JankenponResult.DRAW);
		if (result === JankenponResult.LOSS) {
			await player.showText("Hahaha, você é patetico, suma daqui.", {
				talkWith: this,
			});
			return;
		}
		await player.showText("Até parece que você leu minha mente...", {
			talkWith: this,
		});
		await player.showText("Pegue suas 10 moedas e suma daqui...", {
			talkWith: this,
		});
		player.showNotification("Você ganhou 10 Moedas");
		player.gold += 10;
	}
}
