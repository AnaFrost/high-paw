import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		react({
			tsDecorators: true,
		}),
	],
	build: {},
	resolve: {
		alias: {
			'@store': path.resolve(__dirname, 'src/app/store/'),
			'@widgets': path.resolve(__dirname, 'src/widgets/'),
			'@entities': path.resolve(__dirname, 'src/entities/'),
			'@features': path.resolve(__dirname, 'src/features/'),
			'@icons': path.resolve(__dirname, 'src/shared/icons/index.ts'),
			'@images': path.resolve(__dirname, 'src/shared/images/'),
			'@uikit': path.resolve(__dirname, 'src/shared/uikit/'),
		},
	},
});
