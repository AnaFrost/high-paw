import { Button } from '@uikit/Button/BaseButton/Button.styled';
import styled from 'styled-components';

export const NewAvatar = styled(Button)`
	position: absolute;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	transition: 0.3s transform ease-in;

	&:hover {
		transform: scale(1.1);
		transition: 0.3s transform ease-in;
	}
`;
