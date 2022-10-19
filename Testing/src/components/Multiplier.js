import { useState } from 'react'

export const Multiplier = () => {
    const [count, setCount] = useState(2)
    const [value, setValue] = useState(1)

    function nextMultiplyNumber() {
        setCount(count => count + 1)
        setValue(value => count * count)
    }

    return (
        <div>
        <p>{count - 1} x {count - 1}</p>
        <p>Value: {value}</p>
        <button onClick={nextMultiplyNumber}>Multiply!</button>
        </div>
  )
}

export default Multiplier;