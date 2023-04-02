import {} from 'react';
import * as C from './App.styles'
import { useEffect } from 'react';
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'



export const App = ()=>{
  const char = useCharacter('Rafael', {x:3, y:5});
  const char2 = useCharacter('RARIRAIRA', {x:4, y:7});
  

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
        
      </C.Map>
    </C.Container>

  )

}

export default App