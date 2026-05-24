import {Router} from 'express';
import {loginUser,logoutuser,registerUser} from '../controllers/user.controller.js';

const router =Router();
router.route('/registers').post(registerUser);
router.route('/logins').post(loginUser);
router.route('/logouts').post(logoutuser);
export default router;