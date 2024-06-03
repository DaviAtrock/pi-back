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
router.delete('/stores', Controllers.stores.RemoveStore);
router.put('/stores', Controllers.stores.UpdateStore);

router.post('/parts', Controllers.parts.CreateParts);
router.get('/parts', Controllers.parts.SelectParts);
router.delete('/parts', Controllers.parts.DeleteParts);

router.post('/cars', Controllers.cars.CreateCar);
router.get('/cars', Controllers.cars.SelectCars);
router.put('/cars', Controllers.cars.UpdateCars);
router.delete('/cars', Controllers.cars.RemoveCar);

export { router };