import { useState } from 'react'
import Lightswitch from './lightswitch';

function Room() {
    const [on, isON]= useState(true);

    const toggleON= ()=> {
        isON(!on)
    }

  return (
    <div className={`room ${on ? 'bright' : 'dark'}`}>
        <h1>{on?  "The room is bright":"The room is dark"}</h1>

        <Lightswitch on={on} toggleON={toggleON}/>
    </div>
  )
}

export default Room