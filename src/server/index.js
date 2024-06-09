import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger/swagger.json' assert { type: 'json' };
import 'dotenv/config';

import { router } from '../routes/index.js';

const server = express();

server.use(express.json());
server.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(400).json({
            errors: {
                message: "The request body could not be decoded as JSON."
            }
        });
    }
    next();
});
server.use(router);

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { server };