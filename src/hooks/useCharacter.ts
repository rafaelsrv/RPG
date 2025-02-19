import { useEffect, useState } from "react"
import { CharacterSides } from '../types/CharacterSides'
import { mapSpots } from "../data/mapSpots";


type UseCharacterProps = { 
    propName: string
    coord: {
    x: number,
    y: number}
    } // Props novo dchar...!!dl326daskddSldg34gdfgl8rdsad1fod2413g90edgçocldw4

export const useCharacter = ( {propName, coord} : UseCharacterProps)=>{
    
    const[name, setName] = useState(propName)
    const[pos, setPos] = useState(coord);
    const[side, setSide] = useState(<CharacterSides>('down'))
    
    

    let {x, y} = coord
    
    
 
    
    const moveLeft = () =>{
        
        setPos(pos => ({
            x: canMove(pos.x -1, pos.y) ? pos.x -1 : pos.x,
            y: pos.y
            

        }));
        setSide('left');
    }
    const moveRight = () =>{
        setPos(pos => ({
            x: canMove(pos.x +1, pos.y) ? pos.x +1 : pos.x,
            y: pos.y 

        }));
        setSide('right')
    }
    const moveDown = () =>{
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y +1) ? pos.y +1 : pos.y

        }));
        setSide('down')
    }
    const moveUp = () =>{
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y -1) ? pos.y -1 : pos.y

        }));
        setSide('up')
    }

    const canMove =(x: number, y:number)=>{
        if(x<0 || y<0)
            return false;
        
        if(mapSpots[y] !== undefined && mapSpots[y][x]!== undefined)    
        if(mapSpots[y][x] === 1){
            return true;
        }
        
        return false;
    }

    return{
        name,
        x: pos.x,
        y: pos.y,
        side,
        moveLeft,
        moveRight,
        moveDown,
        moveUp
    }//Setando movimentos!!!!!kçdsadcçdas


}