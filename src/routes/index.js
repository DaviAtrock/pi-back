import { Router } from 'express';
import { Controllers } from '../controllers/index.js'

const router = Router();

router.post('/login', Controllers.login.Auth);

router.post('/users', Controllers.users.Create);
router.get('/users', Controllers.users.SearchUsers);

router.post('/stores', Controllers.stores.CreateStore);

export { router };