import { Avatar } from '@mui/material';
import { NewAvatarButton } from '@uikit/Button';
interface IUserAvatar {
	avatar: string;
}

export const UserAvatar = ({ avatar }: IUserAvatar) => {
	return (
		<>
			<Avatar
				src={avatar}
				alt="avatar"
				sx={{ width: '120px', height: '120px', border: '1px solid var(--colors-ui-base)' }}
			/>
			<NewAvatarButton />
		</>
	);
};
