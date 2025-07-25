import Router from 'express'
import { create, deleteUser, getAllUsers, getUserById, update } from '../controller/userController.js'


const route=Router()
route.post('/user',create)
route.get('/users',getAllUsers)
route.get('/user/:id',getUserById)
route.put('/update/user/:id',update)
route.delete('/delete/user/:id',deleteUser)



export default route