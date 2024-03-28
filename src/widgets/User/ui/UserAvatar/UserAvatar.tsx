import { UserAvatarEl } from '../User.styled';

interface IUserAvatar {
	avatar: string;
}

export const UserAvatar = ({ avatar }: IUserAvatar) => {
	return <UserAvatarEl src={avatar} alt="avatar" />;
};
