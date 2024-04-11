import { LikeActiveIcon, LikeIcon } from '@icons';
import { useState } from 'react';

import { LikeButtonEl } from './LikeButton.styled';

export const LikeButton = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return <LikeButtonEl onClick={handleClick}>{!isActive ? <LikeIcon /> : <LikeActiveIcon />}</LikeButtonEl>;
};
