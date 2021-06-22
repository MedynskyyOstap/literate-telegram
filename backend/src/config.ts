import * as dotenv from 'dotenv';

dotenv.config();

const config = {
	app: process.env.NODE_ENV || 'development',
	appHost: process.env.HOST || 'localhost',
	appPort: process.env.SERVER_PORT || '8000',

	uiHost: process.env.UI_HOST || 'http://localhost:8080'
}

export default config