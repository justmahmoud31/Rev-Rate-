import { Router } from 'express';
import { register, login } from '../Controllers/authcontroller.js';
const router = Router();
router.post('/register', register);
router.post('/login', login);
router.post('/addreview',)
export default router;
