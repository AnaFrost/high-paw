import { CARDS_API_URL } from '@constants';
import { ICardData } from '@uikit/Card/ui/types';
import axios from 'axios';
import { action, makeObservable, observable } from 'mobx';

class GalleryStore {
	cards: ICardData[] = [];

	constructor() {
		makeObservable(this, {
			cards: observable,
			fetchCards: action,
		});
	}

	async fetchCards() {
		try {
			const response = await axios.get<ICardData[]>(CARDS_API_URL);
			this.cards = response.data;
			console.log(this.cards);
		} catch (error) {
			console.error('Error fetching cards:', error);
		}
	}
}

const galleryStore = new GalleryStore();

export default galleryStore;
