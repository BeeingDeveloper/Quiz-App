import React, {useState, useEffect, useRef} from 'react'
import { fetchAllQuestions } from '../api/api';
import Score from './Score';



const QuizPage = () => {

    const [questions, setQuestions] = useState(null);
    const [quizIndex, setQuizIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answeredCorrectly, setAnsweredCorrectly] = useState(Array(5).fill(false));
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [time, setTime] = useState(90);
    const intervalRef = useRef(null);
  
    const newQuestion = questions?.slice(0,9);



    
    // HANDELING COUNTDOWN
    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
  
      return () => {
        clearInterval(intervalRef.current);
      };
    }, []);
  
    useEffect(() => {
      if (time === 0) {
        clearInterval(intervalRef.current);
        setIsSubmitted(true);
        window.localStorage.setItem("score", score);

      }
    }, [time]);
  
    const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
  
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');
  
      return `${formattedMinutes}:${formattedSeconds}`;
    };



    //FETCH ALL QUESTION FROM DATABASE
    const fetchQuestions = ()=>{
        fetchAllQuestions().then((res)=>{
            setQuestions(res.data);
        })
    }

    // HANDLE NEXT QUIZ
    const handleNext = ()=>{
        if(quizIndex < questions.length-1){
            setQuizIndex(quizIndex + 1);
        }
    }


    // CHECK ANSWERS
    const checkAnswer = (questionInd, ans) => {
        const isCorrect = questions[quizIndex].correctANS === ans;
        const newAnsweredCorrectly = [...answeredCorrectly];
        newAnsweredCorrectly[quizIndex] = isCorrect;
        setAnsweredCorrectly(newAnsweredCorrectly);
    
        if (isCorrect) {
          if (!answeredCorrectly[quizIndex]) {
            setScore(score + 10);
          }
        } else {
          if (answeredCorrectly[quizIndex]) {
            setScore(score - 10);
          }
        }
      };
        

      const submitScore = ()=>{
        setIsSubmitted(true)
        window.localStorage.setItem("score", score);
      }
    useEffect(() => {
        fetchQuestions();
    }, []);


    
  return (
    <div className='text-white h-[90%] flex justify-center items-center'>
        <div className=' w-[80%] rounded-md text-black font-semibold'>
            {
                isSubmitted ? <Score score={score} /> : (
                    <>
                <div className=' h-10 mb-5'>
                    <p className='text-yellow-400 mt-[2rem] text-2xl'>{formatTime(time)}</p>

                </div>
                
                <div className='h-full w-full bg-yellow-400 rounded-md'>
                    <h2 className='bg-white p-5 rounded-t-md text-xl shadow-lg shadow-slate-500'>{questions && questions[quizIndex].question}</h2>
                    {newQuestion &&
                        <form className='mt-5 flex flex-col text-left ml-2'>
                            <label className='p-2 bg-white text-left px-5 w-[85%] rounded-md ml-2 my-3 shadow-lg shadow-slate-600'>
                                <input
                                    type='radio'
                                    name='answer'
                                    onChange={()=>checkAnswer(quizIndex, newQuestion[quizIndex].option_A)}
                                />
                                { newQuestion[quizIndex].option_A}
                            </label>

                            <label  className='p-2 bg-white text-left px-5 w-[85%] rounded-md ml-2 my-3 shadow-lg shadow-slate-600'>
                                <input
                                    type='radio'
                                    name='answer'
                                    onChange={()=>checkAnswer(quizIndex, newQuestion[quizIndex].option_B)}
                                />
                                { newQuestion[quizIndex].option_B}
                            </label>

                            <label  className='p-2 bg-white text-left px-5 w-[85%] rounded-md ml-2 my-3 shadow-lg shadow-slate-600'>
                                <input
                                    type='radio'
                                    name='answer'
                                    onChange={()=>checkAnswer(quizIndex, newQuestion[quizIndex].option_C)}
                                />
                                { newQuestion[quizIndex].option_C}
                            </label>

                            <label  className='p-2 bg-white text-left px-5 w-[85%] rounded-md ml-2 my-3 shadow-lg shadow-slate-600'>
                                <input
                                    type='radio'
                                    name='answer'
                                    onChange={()=>checkAnswer(quizIndex, newQuestion[quizIndex].option_D)}
                                />
                                { newQuestion[quizIndex].option_D}
                            </label>
                        </form>
                    }

                </div>
                <div className='flex justify-between mt-5 flex-row-reverse'>
                    <button className='bg-yellow-400 p-2 w-20 rounded-md transition-all duration-150 hover:scale-90 shadow-2xl shadow-yellow-300' onClick={()=>handleNext()}>next</button>
                </div>
                <button 
                    onClick={submitScore}
                className='bg-yellow-400 p-2 w-full mt-5 rounded-md transition-all duration-150 hover:scale-90 shadow-2xl shadow-yellow-300'>SUBMIT</button>
            </>
                )
            }
            
        </div>
    </div>
  )
}

export default QuizPage