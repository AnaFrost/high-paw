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
			'@widgets': path.resolve(__dirname, 'src/widgets/'),
			'@icons': path.resolve(__dirname, 'src/shared/icons/'),
			'@images': path.resolve(__dirname, 'src/shared/images/'),
			'@common': path.resolve(__dirname, 'src/common/'),
		},
	},
});
