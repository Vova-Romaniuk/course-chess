import React from "react"

export function ButtonPlay({ children, onClick }) {
	return (
		<button
			onClick={onClick}
			className="play-button"
		>
			{children}
		</button>
	)
}