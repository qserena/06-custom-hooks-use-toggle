# Custom Hooks Use Toggle

## Description
This is an exercise in using the Toggle component to handle the state and the context of the Menu component.

The logic in the Toggle component are used to show (and hide) the dropdown menu in the Menu component.

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

