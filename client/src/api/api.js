import axios from "axios";

const serverURL = 'https://quizappbackend-id1o.onrender.com';

// FETCH ALL QUESTIONS----------------------------------------------------------------
export const fetchAllQuestions = async()=>{
    try {
        const res = await axios.get(`${serverURL}/api/quiz/fetch-question`)
        return res.data;
    } catch (error) {
        return null;
    }
}








//  CREATE NEW QUESTION---------------------------------------------------------------
export const createNewQuestion = async(data)=>{
    try {
        const res = await axios.post(`${serverURL}/api/quiz/create`, {...data});
        return res.data;
    } catch (error) {
        return null;
    }
}
