import P5 from 'p5';
import { sketch } from './Classes/index'
import { Frame } from './styles/App.styles';

export const game = new P5(sketch);



function App() {
  return (
    <Frame id="App" />
  )
}

export default App
