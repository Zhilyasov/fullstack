import { useEffect, useState } from 'react'
import PostService from './API/PostService'
import Search from './Screen/Components/UI/Search'
import UserList from './Screen/Components/UI/UserList'
import './Screen/Styles/App.sass'

function App() {
	// const [filter, setFilter] = useState({ sort: '', query: '' })
	const [list, setList] = useState([])
	const [isListLoading, setIsListLoading] = useState(false)
	const [title, setTitle] = useState('')

	useEffect(() => {
		fetchList()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	async function fetchList() {
		setIsListLoading(true)
		const response = await PostService.getAll()
		setList(response)
		setIsListLoading(false)
	}


	// console.log(list)
	return (
		<div className='container'>
			<div className='App'>
				<Search value={title} onChange={e => setTitle(e.target.value)}/>

				{isListLoading ? (
					<h1 style={{ textAlign: 'center' }}>Идёт загрузка...</h1>
				) : (
					<UserList list={list} />
				)}
			</div>
		</div>
	)
}

export default App
