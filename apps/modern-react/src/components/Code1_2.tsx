"use client"

import React, { useEffect, useState, memo } from "react"

const Component: React.FC<{ count: number }> = memo(({ count }) => {
  useEffect(() => {
    console.log("Component redner!!")
  })
  return <p>{count}</p>
})

const DeepComponent: React.FC<{ count: { count: number } }> = ({ count }) => {
  useEffect(() => {
    console.log("=> DeepComponent redner!!")
  })
  return <p>{count.count}</p>
}

const Code1_2 = () => {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <p>current Count: {count}</p>
      <Component count={100} />
      <DeepComponent count={{ count: 100 }} />
      <button onClick={handleCount}>+</button>

      {/* <Button onClick={handleCount}>+</Button> */}
    </div>
  )
}

export default Code1_2
