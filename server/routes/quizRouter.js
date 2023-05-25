const router = require('express').Router();
const quiz = require('../models/quiz.model');



// CREATE NEW QUIZ
router.post('/create', async(req, res)=>{

    const {question, option_A, option_B, option_C, option_D, correctANS} = req.body;

    const quizData = new quiz({
        question,
        option_A,
        option_B,
        option_C,
        option_D,
        correctANS,
    });

    try {
        const createdQuiz = await quizData.save();
        return res.status(200).send({success: true, data: createdQuiz});
    } catch (error) {
        return res.status(501).send({success: true, msg: "FAILED TO CREATE QUIZ"});
    }

});






//  FETCH ALL QUIZ
router.get('/fetch-question', async(req, res)=>{
    try {
        const questions = await quiz.find();
        return res.status(200).send({success: true, data: questions});
    } catch (error) {
        return res.status(501).send({success: false, msg: "FAILED TO FETCH QUIZ"});
    }
});



module.exports = router;