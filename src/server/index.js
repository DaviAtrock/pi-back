import express from 'express';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger/swagger.json' assert { type: 'json' };

import { router } from '../routes/index.js';

const server = express();

server.use(express.json());
server.use(router);

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { server };