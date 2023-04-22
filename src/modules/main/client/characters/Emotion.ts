import { Ease, Spritesheet, Timeline } from "@rpgjs/client";

export enum Emotions {
	POSITIVE = "positive",
	DOUBT = "doubt",
	NEGATIVE = "negative",
	ROCK = "rock",
	PAPER = "paper",
	SCISSORS = "scissors",
}

const animate = (frameX: number, frameY: number) => {
	return {
		animations: new Timeline()
			.add(
				30,
				({ scale }) => [
					{
						frameX,
						frameY,
						scale: [scale],
					},
				],
				{
					scale: {
						from: 0,
						to: 1,
						easing: Ease.easeOutBounce,
					},
				}
			)
			.add(100)
			.add(
				30,
				({ scale }) => [
					{
						frameX,
						frameY,
						scale: [scale],
					},
				],
				{
					scale: {
						from: 1,
						to: 0,
						easing: Ease.easeInBounce,
					},
				}
			)
			.create(),
	};
};
@Spritesheet({
	id: "hands",
	image: require("./assets/hands.png"),
	width: 96,
	height: 64,
	framesWidth: 3,
	framesHeight: 2,
	anchor: [0.5],
	y: -40,
	x: 10,
	textures: {
		[Emotions.NEGATIVE]: animate(0, 0),
		[Emotions.DOUBT]: animate(1, 0),
		[Emotions.POSITIVE]: animate(2, 0),
		[Emotions.PAPER]: animate(0, 1),
		[Emotions.SCISSORS]: animate(1, 1),
		[Emotions.ROCK]: animate(2, 1),
	},
})
export class Emotion {}
