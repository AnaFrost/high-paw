import { ContainerEl, ContainerInfoEl, UserBioEl, UserInfoEl, UserNameEl } from '../User.styled';

interface IUserInfo {
	userName: string;
	userBio: string;
}

export const UserInfo = ({ userName, userBio }: IUserInfo) => {
	return (
		<UserInfoEl>
			<ContainerEl>
				<ContainerInfoEl>
					<UserNameEl>{userName}</UserNameEl>
					<UserBioEl>{userBio}</UserBioEl>
				</ContainerInfoEl>
				{/* Edit profile modal */}
			</ContainerEl>
			{/* Add card modal */}
		</UserInfoEl>
	);
};
