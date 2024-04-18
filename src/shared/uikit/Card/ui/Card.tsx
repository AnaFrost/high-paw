import { CardActions, CardContent, CardMedia, Card as CardMui } from '@mui/material';
import { LikeButton } from '@uikit/Button/ui/LikeButton/LikeButton';
import { CardDiscription } from './Card.styled';
import { ICardData } from './types';

export const Card = ({ id, image, text }: ICardData) => {
	return (
		<CardMui key={id} sx={{ borderRadius: '10px', width: '282', height: '362' }}>
			<CardMedia
				component="img"
				image={image}
				alt="card"
				width="282"
				height="282"
				sx={{ objectFit: 'cover', objectPosition: 'center' }}
			/>
			<CardContent>
				<CardDiscription>{text}</CardDiscription>
			</CardContent>
			<CardActions sx={{ justifyContent: 'flex-end' }}>
				<LikeButton />
			</CardActions>
		</CardMui>
	);
};
