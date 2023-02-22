import Question from '../models/Question.js'
import Policy from '../models/Policies.js'
import mongoose from 'mongoose'



export const AskQuestion = async (req, res) =>{

const postQuestionData = req.body;
const postQuestion =new Question({ ...postQuestionData, userId: req.userId

});
try {
    await postQuestion.save();
    res.status(200).json("Posted a question Successfully submit")
} catch (error) {
    console.log(error)
    res.status(409).json("Could not post your Question")
}


}
export const addPolicy = async (req, res) =>{

    const postpolicyData = req.body;
    const postpolicy =new Policy({ ...postpolicyData, userId: req.userId
    
    });
    try {
        await postpolicy.save();
        res.status(200).json("Posted a policy Successfully submit")
    } catch (error) {
        console.log(error)
        res.status(409).json("Could not post your policy")
    }
    
    
    }



export const getAllQuestions = async (req, res) =>{
    debugger;
try {
    const questionList = await Question.find();
    res.status(200).json(questionList)
} catch (error) {
    res.status(404).json({message:error.message});
    
}

}
export const getAllPolicies = async (req, res) =>{
    debugger;
try {
    const policyList = await Policy.find();
    res.status(200).json(policyList)
} catch (error) {
    res.status(404).json({message:error.message});
    
}

}