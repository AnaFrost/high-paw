import { Modal } from '@mui/material';
import { observer } from 'mobx-react';
import { ReactElement } from 'react';
import { ModalContainer } from './Modal.styled';

interface IModalProps {
	children: ReactElement;
	isOpen: boolean;
	onClose: () => void;
}

export const BasicModal = observer(({ children, isOpen, onClose }: IModalProps) => {
	return (
		<Modal open={isOpen} onClose={onClose}>
			<ModalContainer>{children}</ModalContainer>
		</Modal>
	);
});
