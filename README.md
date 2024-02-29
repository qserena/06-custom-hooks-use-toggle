# Custom Hooks Use Toggle

## Description
A custom hook **useToggle** is created to achieve the same behavior as the React component Toggle in repository [04-headless-toggle-component](https://github.com/qserena/04-headless-toggle-component)

**useToggle custom hook:**
```
import React from 'react'
import useEffectOnUpdate from './useEffectOnUpdate'

export default function useToggle({
	initialValue = false,
	onToggle = () => {},
}) {
	const [on, setOn] = React.useState(initialValue)

	function toggle() {
		setOn((prevOn) => !prevOn)
	}

	useEffectOnUpdate(onToggle, [on])

	return [on, toggle]
}
```
  
## Technologies
- React

## Live link
This implementation is not deployed anywhere. 

