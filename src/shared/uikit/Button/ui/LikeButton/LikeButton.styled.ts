import { Button } from '@uikit/Button/BaseButton/Button.styled';
import styled from 'styled-components';

export const LikeButtonEl = styled(Button)`
	border: none;
	background-color: transparent;
	transition: 0.3s transform ease-in;
	padding: 0;

	&:hover {
		transform: scale(1.1);
		transition: 0.3s transform ease-in;
	}
`;
