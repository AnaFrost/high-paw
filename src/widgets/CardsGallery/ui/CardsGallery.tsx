import galleryStore from '@store/index';
import { Gallery } from '@uikit/Gallery/ui/Gallery';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

export const CardGallery = observer(() => {
	useEffect(() => {
		galleryStore.fetchCards();
	}, []);
	return <Gallery data={galleryStore?.cards || []} />;
});
