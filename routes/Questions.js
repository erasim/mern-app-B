import express from 'express'
import {addPolicy, AskQuestion, getAllPolicies} from '../controllers/Questions.js'
import {getAllQuestions} from '../controllers/Questions.js'



const router = express.Router()
router.post('/Ask', AskQuestion)
router.post('/addpolicy', addPolicy)
router.get('/get', getAllQuestions)
router.get('/getpolicy', getAllPolicies)



export default router