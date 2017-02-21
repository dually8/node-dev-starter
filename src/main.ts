import { App } from './app/app';

const port = process.env.PORT as number;
const env = process.env.NODE_ENV as string;
const app = new App().instance;

app.listen(port);
