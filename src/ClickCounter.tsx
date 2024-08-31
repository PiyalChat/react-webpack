import { useState } from 'react'

const ClickCounter = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Counter {count}
      </button>
    </div>
  )
}

export default ClickCounter
