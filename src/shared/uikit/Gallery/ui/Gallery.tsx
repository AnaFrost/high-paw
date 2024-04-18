import { Card } from '@uikit/Card';
import { ICardData } from '@uikit/Card/ui/types';
import { GalleryEl } from './Gallery.styled';

interface IGalleryProps {
	data: Array<ICardData>;
}

export const Gallery = ({ data }: IGalleryProps) => {
	return (
		<GalleryEl>
			{data.map((item) => (
				<Card key={item.id} id={item.id} image={item.image} text={item.text} />
			))}
		</GalleryEl>
	);
};
