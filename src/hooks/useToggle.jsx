import React from 'react'

export default function useToggle(initialValue) {
	const [on, setOn] = React.useState(initialValue)

	function toggle() {
		setOn((prevOn) => !prevOn)
	}

	return [on, toggle]
}
