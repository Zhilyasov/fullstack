import React from 'react'
import '../../Styles/Modal.css'

const Modal = ({ active, setActive, info, height, children }) => {
	const closeModal = e => {
		e.preventDefault()
		setActive(false)
	}

	return (
		// при нажатии на карточку
		<div
			className={active ? 'modal active' : 'modal'}
			onClick={() => {
				setActive(false)
			}}
		>
			<div
				className={active ? 'modal__content active' : 'modal__content'}
				onClick={e => e.stopPropagation()}
			>
				<div className='l1'>
					<h2>{info.name}</h2>
					<button className='close_btn' onClick={closeModal}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z'
								fill='black'
							/>
						</svg>
					</button>
				</div>
				<div className='l2'>
					<ul className='title'>
						<li className='title_item'>Телефон:</li>
						<li className='title_item'>Почта:</li>
						<li className='title_item'>Дата приема:</li>
						<li className='title_item position'>Должность:</li>
						<li className='title_item'>Подразделение:</li>
					</ul>
					<ul className='subtitle'>
						<li className='subtitle_item'>{info.phone}</li>
						<li className='subtitle_item'>{info.email}</li>
						<li className='subtitle_item'>{info.hire_date}</li>
						<li className='subtitle_item'>{info.position_name}</li>
						<li className='subtitle_item'>{info.department}</li>
					</ul>
				</div>
				<div className='l3'>
					<span>Дополнительная информация:</span>
					<p>
						Разработчики используют текст в качестве заполнителя макта страницы.
						Разработчики используют текст в качестве заполнителя макта страницы.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Modal
