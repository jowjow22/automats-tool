import P5 from 'p5';
import { useLayoutEffect, useState } from 'react';
import { sketch } from './Classes/index'
import { Frame } from './styles/App.styles'

export const game = new P5(sketch);



function App() {
  useLayoutEffect(()=>{
    let canvas = game.createCanvas(1000, 915);
    canvas.parent("AppFrame");
    game.background("black");
  }, [])

  return (
    <>
      <Frame id='AppFrame'>asdas</Frame>
    </>
  )
}

export default App
