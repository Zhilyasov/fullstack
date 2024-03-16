import React, { useState } from 'react'
import '../../Styles/UserList.sass'
import UserCard from './UserCard'
import Modal from './Modal'

const UserList = props => {
	const [modalActive, setModalActive] = useState(false)
	const [cardInfo, setCardInfo] = useState([])
	return (
		<>
			<section className='user_list'>
				{props.list.map(element => {
					return (
						<UserCard
							name={element.name}
							phone={element.phone}
							email={element.email}
							address={element.address}
							position_name={element.position_name}
							department={element.department}
							hire_date={element.hire_date}
							key={element.name}
							setActive={setModalActive}
							setInfo={setCardInfo}
						/>
					)
				})}
			</section>
			<Modal active={modalActive} setActive={setModalActive} info={cardInfo} />
		</>
	)
}

export default UserList
