import React from 'react'
import useToggle from '../../hooks/useToggle'

/**
 * Challenge:
 * 1. Remove all references to Toggle in the all 4 Menu
 *    components
 * 2. import and use `useToggle()` to create new state
 *    and toggle functions so we can use those in the Menu.
 *    Call the variables "open" and "toggleOpen".
 *  * 3. Create context (MenuContext). Make sure to export
 *    it so we can access it in the other Menu components!
 *    (Will be a named export, not default export).
 * 4. Wrap the div below with the context provider
 * 5. What do you think we should pass as the values
 *    to the provider? 🤔
 */

const MenuContext = React.createContext()

export default function Menu({ children, onOpen }) {
	const [open, toggleOpen] = useToggle({
		onToggle: onOpen,
	})
	return (
		<MenuContext.Provider value={{ open, toggleOpen }}>
			<div className="menu">{children}</div>
		</MenuContext.Provider>
	)
}

export { MenuContext }
