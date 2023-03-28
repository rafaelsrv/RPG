import {} from 'react';
import * as C from './App.styles'
import { useEffect } from 'react';
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'

export const App = ()=>{
  const char = useCharacter('Rafael');
  const char2 = useCharacter('Marciano');

  useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown);
  }, [])
  
  const handleKeyDown =(e: KeyboardEvent) =>{
    switch(e.code){
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;

      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;

      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;

      case 'KeyS':
      case 'ArrowDown':
        char.moveDown(); //Movimento
      break;
    }
    
  }

  return(
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name}/>
        <Character x={char2.x} y={char2.y} side={char2.side} name={char2.name}/>
        <button onClick={()=>char2.moveLeft()}>Left</button>
        <button onClick={()=>char2.moveDown()}>Down</button>
        <button onClick={()=>char2.moveUp()}>Up</button>
        <button onClick={()=>char2.moveRight()}>Hight</button>
      </C.Map>
    </C.Container>

  )

}

export default App