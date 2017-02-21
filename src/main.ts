import { App } from './app/app';

const port = process.env.PORT as number;
const env = process.env.NODE_ENV as string;
const app = new App().appInstance;

app.listen(port);
