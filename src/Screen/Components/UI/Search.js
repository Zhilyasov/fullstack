import React from 'react'
import PostService from '../../../API/PostService'
import '../../Styles/Search.sass'

const Search = props => {
	
	const searchUser = e => {
		e.preventDefault()
		fetchListByName()
	}

	async function fetchListByName() {
		const response = await PostService.getByName(props.value)
	}

	return (
		<section className='search'>
			<form className='search__form' name='search_form'>
				<input type='search' name='search_input' {...props} />
				<button onClick={searchUser}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M15.8033 15.8033C12.8744 18.7322 8.12563 18.7322 5.1967 15.8033C2.26777 12.8744 2.26777 8.12563 5.1967 5.1967C8.12563 2.26777 12.8744 2.26777 15.8033 5.1967C18.7322 8.12563 18.7322 12.8744 15.8033 15.8033ZM16.1457 16.8545C12.8078 19.8256 7.69007 19.7109 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.7115 7.69065 19.8256 12.8097 16.8529 16.1475L21.4605 20.7551C21.6558 20.9504 21.6558 21.267 21.4605 21.4622C21.2653 21.6575 20.9487 21.6575 20.7534 21.4622L16.1457 16.8545Z'
							fill='#432EAB'
						/>
					</svg>
				</button>
			</form>
		</section>
	)
}

export default Search
