import { Router } from 'express';
import { Controllers } from '../controllers/index.js'

const router = Router();

router.post('/login', Controllers.login.Auth);

router.post('/users', Controllers.users.Create);
router.get('/users', Controllers.users.SearchUsers);
router.put('/users', Controllers.users.ChangeUserPass);
router.delete('/users', Controllers.users.RemoveUser);

router.post('/stores', Controllers.stores.CreateStore);
router.get('/stores', Controllers.stores.SearchStore);

router.post('/parts', Controllers.parts.CreateParts);

export { router };