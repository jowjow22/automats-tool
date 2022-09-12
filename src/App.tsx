import P5 from 'p5';
import { useLayoutEffect, useState } from 'react';
import { sketch } from './Classes/index'
import { Frame } from './styles/App.styles'

export let game: P5;



function App() {
  useLayoutEffect(()=>{
    game = new P5(sketch);
  }, [])

  return (
    <>
      <Frame id='AppFrame'>asdas</Frame>
    </>
  )
}

export default App
