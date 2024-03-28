import { Footer } from '@widgets/Footer';
import { Header } from '@widgets/Header';
import { UserProfile } from '@widgets/UserProfile';
import { AppEl } from './App.styled';

export const App = () => {
	return (
		<AppEl>
			<Header />
			<UserProfile />
			<Footer />
		</AppEl>
	);
};
