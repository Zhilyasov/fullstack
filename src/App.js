import { useEffect, useMemo, useState } from 'react'
import PostService from './API/PostService'
import Search from './Screen/Components/UI/Search'
import UserList from './Screen/Components/UI/UserList'
import './Screen/Styles/App.sass'

function App() {
	const [list, setList] = useState([])
	const [isListLoading, setIsListLoading] = useState(false)
	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('') // input value

	// При изменении selectedSort или list начинает работать сортировка
	const sortedPosts = useMemo(() => {
		if (selectedSort) {
			return [...list].sort((a, b) =>
				a[selectedSort].localeCompare(b[selectedSort])
			)
		}
		return list
	}, [selectedSort, list])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post =>
			post.name.toLowerCase().includes(searchQuery.toLowerCase())
		)
	}, [searchQuery, list])

	useEffect(() => {
		fetchList()
	}, [])

	async function fetchList() {
		setIsListLoading(true)
		const response = await PostService.getAll()
		setList(response)
		setIsListLoading(false)
	}

	return (
		<div className='container'>
			<div className='App'>
				<Search
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>

				{isListLoading ? (
					<h1 style={{ textAlign: 'center' }}>Идёт загрузка...</h1>
				) : (
					<UserList list={sortedAndSearchedPosts} />
				)}
			</div>
		</div>
	)
}

export default App
