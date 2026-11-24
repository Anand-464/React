import React,{ useState }  from 'react'

function Incre_decre() {
    const [num, setNum]= useState(0);
    const [lock, setLock]=useState(true);

    const increment= ()=> {
        if(lock){
            setNum(num + 1);
        }
    }
    const decrement= ()=> {
        if(lock){
            if (num>=1){
                setNum(num - 1);
            }
        }  
    }
    const reset=()=> {
        if(lock){
            setNum(0)
        }
    }
    const lockStatus=()=>{
        setLock(!lock)
    }

  return (
    <>
        <p>Count= {num}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={lockStatus}>{lock? "lock": "unlock"}</button>
    </>
  )
}

export default Incre_decre