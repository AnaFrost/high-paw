import { ReactElement } from 'react';
import { Button } from './Button.styled';

interface IProps {
	children?: ReactElement | string;
}

export const BaseButton = ({ children }: IProps) => {
	return <Button>{children}</Button>;
};
