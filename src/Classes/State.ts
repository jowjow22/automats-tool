import Circle from "./Circle";
import P5 from "p5";

export default class State extends Circle {
  stateName: string | number;
  isLastState: boolean;
  constructor(p5: P5, atPosition: P5.Vector, size: number, color: string, stateName: string | number, isLastState: boolean = false) {
    super(p5, atPosition, size, color);
    this.stateName = stateName;
    this.isLastState = isLastState;
  }
  drawLastState(): void {
    const p5 = this.p5;

    super.draw();
    this.setText();
    p5.smooth();
    p5.stroke(this.color);
    p5.noFill();
    p5.circle(0, 0, this.size / 1.5);


  }
  draw(): void {
    this.isLastState ? this.drawLastState() : super.draw();
    this.setText();
  }
  setText(): void {
    const p5 = this.p5;
    const center: any = p5.CENTER;
    p5.noStroke();
    p5.textAlign(center);
    p5.text(this.stateName, 0, 0 + this.size/11);
    p5.textSize(this.size/4);
  }
}