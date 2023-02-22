import  express from 'express';
import{postAnswer} from '../controllers/Answers.js'
debugger;
const router = express.Router();
router.post('/post/:id', postAnswer)

export default router

