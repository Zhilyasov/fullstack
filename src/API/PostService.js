import axios from 'axios'

export default class PostService {
	static async getAll() {
		try {
			const response = await axios.get('http://[::1]:3000/') // указанный в тз адрес другой, а по факту программа выдает адрес http://[::1]:3000/   
			// {..."hostname":"MacBook-Air.local","msg":"Server listening at http://[::1]:3000"}
			return response.data
		} catch (error) {
			console.log(error)
		}
	}
	static async getByName(name) {
		try {
			const response = await axios.get(`http://[::1]:3000/?term=${name}`)
			console.log(response.data)
			return response.data
		} catch (error) {
			console.log(error)
		}
	}
}
