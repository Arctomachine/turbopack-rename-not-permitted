'use client'

import { useState } from 'react'

export default function () {
	const [count, setCount] = useState(0)

	return (<>
		<div>Count: {count}</div>
		<button onClick={()=>setCount(x=>x+1)}>+++</button>
	</>)
}
