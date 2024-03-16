import React from 'react'
import '../../Styles/Modal.css'

const Modal = ({ active, setActive, info, children }) => {
	return (
		// при нажатии на карточку
		<div
			className={active ? 'modal active' : 'modal'}
			onClick={() => {
				console.log(info)
				setActive(false)
			}}
		>
			<div
				className={active ? 'modal__content active' : 'modal__content'}
				onClick={e => e.stopPropagation()}
			>
				{info.name}
			</div>
		</div>
	)
}

export default Modal
