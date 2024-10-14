import { useState } from "react";
export default function Ludo(){
    let [Moves, setMoves] = useState({Blue:0,Green:0,Yellow:0,Red:0});

    let updateBlue = () => {
    setMoves((prevMoves) => {
        return{...prevMoves,Blue:prevMoves.Blue + 1};
    }); 
}
let updateGreen = () => {
    setMoves((prevMoves) => {
        return{...prevMoves,Green:prevMoves.Green + 1};
    }); 
}
let updateYellow = () => {
    setMoves((prevMoves) => {
        return{...prevMoves,Yellow:prevMoves.Yellow + 1};
    }); 
}
let updateRed = () => {
    setMoves((prevMoves) => {
        return{...prevMoves,Red:prevMoves.Red + 1};
    }); 
}

    return(
        <div>
            <p>Game begins!</p>
            <p className="Gamebegins"></p> 
            <p>Green Moves={Moves.Green} </p>
            <button style={{backgroundColor:"Green"}}onClick={updateGreen}>+1</button>
            <p>Blue Moves={Moves.Blue}</p>
            <button style={{backgroundColor:"Blue"}}onClick={updateBlue}>+1</button>
            <p>Yellow Moves={Moves.Yellow}</p>
            <button style={{backgroundColor:"Yellow"}}onClick={updateYellow}>+1</button>
            <p>Red Moves={Moves.Red}</p>
            <button style={{backgroundColor:"red"}}onClick={updateRed}>+1</button>
        </div>
    )
    
    }