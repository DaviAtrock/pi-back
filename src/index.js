import { server } from './server/index.js';

server.listen(process.env.SERVER_PORT, () => {
    console.log(`API RODANDO NA PORTA ${process.env.SERVER_PORT}`);
});