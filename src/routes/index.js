import { Router } from 'express';
import { Controllers } from '../controllers/index.js';

const router = Router();

router.post('/users', Controllers.usersCreate);

export { router };