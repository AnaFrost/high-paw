import { UserEl } from './User.styled';
import { UserAvatar } from './UserAvatar';
import { UserInfo } from './UserInfo';

import USER_AVATAR from '@images/haru.jpg';

export const User = () => {
	return (
		<UserEl>
			<UserAvatar avatar={USER_AVATAR} />
			<UserInfo userName="Jacques-Meow Coustou" userBio="Bed explorer" />
		</UserEl>
	);
};
