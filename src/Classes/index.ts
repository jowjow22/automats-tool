import P5 from "p5";
import State from "./State";

export const sketch = (p5: P5) => {
	let state: State;
	let states: Array<State> = [];

	p5.setup = () => {

		for(let i = 0; i < 10; i++) {
			let statePos: P5.Vector;
			statePos = p5.createVector(Math.random() * 100, Math.random() * 100);
			state = new State(p5, statePos, 100, "white", `q${i}`);
			if(i === 9) {
				state.isLastState = true;
			}
			states.push(state);
		}
		


		const canvas = p5.createCanvas(800, 800);
		canvas.parent("App");
		p5.background("black");
		console.log(states);
	};
	p5.draw = () => {
		states.forEach((state: State)=>{
			state.draw()
		});
	};
};
