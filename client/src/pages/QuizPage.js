import React, {useState, useEffect} from 'react'
import { fetchAllQuestions } from '../api/api';



const QuizPage = () => {

    const [questions, setQuestions] = useState(null);
    const [quizIndex, setQuizIndex] = useState(0);

    let answers = [{ind: 1, answer: "fuck"}];

    const fetchQuestions = ()=>{
        fetchAllQuestions().then((res)=>{
            setQuestions(res.data);
        })
    }

    const handlePrvious = ()=>{
        if(quizIndex > 0){
            setQuizIndex(quizIndex - 1);
        }
    }

    const handleNext = ()=>{
        if(quizIndex < questions.length-1){
            setQuizIndex(quizIndex + 1);
        }
    }


    const getAns = (questionIndex ,ans)=>{
        const ansObj = {
            ind: questionIndex,
            answer: ans
        }

        answers.push(ansObj);

    }


    const ansObj = {
        ind: 2,
        answer: "ans"
    }
    answers.push(ansObj)
    console.log(answers)
    useEffect(() => {
        fetchQuestions();
    }, []);
    
  return (
    <div className='text-white h-[90%] flex justify-center items-center'>
        <div className=' h-[50%] w-[80%] rounded-md text-black font-semibold'>
            <div className='h-full w-full bg-yellow-400 rounded-md'>
                <h2 className='bg-white p-5 rounded-t-md text-xl shadow-lg shadow-slate-500'>{questions && questions[quizIndex].question}</h2>
                {questions &&
                    <div className='mt-5 flex flex-col'>
                        <h2 className='p-2 bg-white text-left px-5 w-[75%] rounded-md ml-2 my-3 shadow-lg shadow-slate-600' onClick={()=>getAns(quizIndex, questions[0].option_A)}>
                             A. { questions[quizIndex].option_A}
                        </h2>
            
                        
                        <h2 className='p-2 bg-white text-left px-5 w-[75%] rounded-md ml-2 my-3 shadow-lg shadow-slate-600' onClick={()=>getAns(quizIndex, questions[0].option_B)}>
                             B. { questions[quizIndex].option_B}
                        </h2>
            
                        
                        <h2 className='p-2 bg-white text-left px-5 w-[75%] rounded-md ml-2 my-3 shadow-lg shadow-slate-600' onClick={()=>getAns(quizIndex, questions[0].option_C)}>
                             C. { questions[quizIndex].option_C}
                        </h2>
            
                        
                        <h2 className='p-2 bg-white text-left px-5 w-[75%] rounded-md ml-2 my-3 shadow-lg shadow-slate-600' onClick={()=>getAns(quizIndex, questions[0].option_D)}>
                             D. { questions[quizIndex].option_D}
                        </h2>
                    </div>
                }

            </div>
            <div className='flex justify-between mt-5'>
                <button className='bg-yellow-400 p-2 w-20 rounded-md transition-all duration-150 hover:scale-90' onClick={()=>handlePrvious()}>previous</button>
                <button className='bg-yellow-400 p-2 w-20 rounded-md transition-all duration-150 hover:scale-90' onClick={()=>handleNext()}>next</button>
            </div>
            <button className='bg-yellow-400 p-2 w-full mt-5 rounded-md transition-all duration-150 hover:scale-90'>SUBMIT</button>
        </div>
    </div>
  )
}

export default QuizPage