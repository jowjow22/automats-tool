import GenericObject from "./Object";
import P5 from "p5";

export default class Circle extends GenericObject {
  constructor(p5: P5, atPosition: P5.Vector, size: number, color: string){
    super(p5, atPosition, size, color);
  }
  draw(): void {
    const p5 = this.p5;

    p5.translate(this.pos);
    p5.smooth();
    p5.stroke(this.color);
    p5.strokeWeight(this.size / 10 - 6);
    p5.noFill();
    p5.circle(0, 0, this.size);
    p5.fill(this.color);

  }
}