import P5 from "p5";

export default class GenericObject {
	p5: P5;
	pos: P5.Vector;
	size: number;
	color: string;

	constructor(p5: P5, atPosition: P5.Vector, size: number, color: string) {
		this.p5 = p5;
		this.pos = atPosition;
		this.size = size;
		this.color = color;
	}

	draw() {
		const p5 = this.p5;

		p5.translate(this.pos);
		p5.noStroke();
		p5.fill(this.color);
		p5.rect(0, 0, this.size, this.size);
	}
}
