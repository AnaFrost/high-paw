import axios from 'axios';

export async function getCardsList() {
	try {
		const data = await axios.get('../../../../server/db.json');

		return data;
	} catch (error) {
		console.error(error);
	}
}
