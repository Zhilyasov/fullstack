import axios from 'axios'

export default class PostService {
	static async getAll() {
		try {
			const response = await axios.get('http://[::1]:3000/')
			return response.data
		} catch (error) {
			console.log(error)
		}
	}
	static async getByName(name) {
		try {
			const response = await axios.get(`http://[::1]:3000/?term=${name}`)
			return response.data
		} catch (error) {
			console.log(error)
		}
	}
}
