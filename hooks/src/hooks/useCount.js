import { useState } from 'react';

const useCount = (initialValue = 100) => {
    const [count, setCount] = useState(initialValue)

    const inc = _ => {
        setCount(count + 1)
    }

    const dec = _ => {
        setCount(count - 1)
    }

    return [count, inc, dec]
}

export default useCount;