import express from 'express';
import { createUser, getAdminUsers, getUserByID, getUsers } from './user.controller';
const router = express.Router();

router.get('/', getUsers);
router.get('/admins', getAdminUsers);
router.get('/:id', getUserByID)
router.post('/create-user', createUser);


export default router;