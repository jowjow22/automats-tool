import P5 from 'p5';
import { sketch } from './Classes/index'
import './styles/global.css'

export let game = new P5(sketch);
function App() {
  const call = () => {
    game.fill(255);
    game.rect(100, 100, 100)
  }
  return (
    <button onClick={call}>test</button>
  )
}

export default App
