import express from 'express'
import{
    addUser,allUsers,getUserById,getUserBySic
} from "../controllers/user.controllers.js"
const router=express.Router();
router.post("/", addUser)
router.get("/", allUsers)
router.get("/", getUserById)
router.get("/", getUserBySic)

export default router;