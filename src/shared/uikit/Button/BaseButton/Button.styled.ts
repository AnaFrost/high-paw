import styled from 'styled-components';

export const Button = styled.button`
	cursor: pointer;
	border-radius: 4px;
	border: 1px solid var(--colors-text);
	background-color: var(--colors-btn-bg);
	transition: 0.3s opacity ease-in;
	color: var(--colors-text);

	&:hover {
		opacity: 0.6;
		transition: 0.3s opacity ease-in;
	}
`;
