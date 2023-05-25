import React, {useState} from 'react'
import { createNewQuestion } from '../api/api';

const AdminPage = () => {

    const [formData, setFormData] = useState(
        {
            question: '',
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
        }
    );

    const [correctAns, setCorrectAns] = useState('')


    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
    }



    const handleSubmit = ()=>{
        if(!formData.question || !formData.optionA || !formData.optionB || !formData.optionC  || !formData.optionD){
            alert("Fill the form correctly...")
        }else if(correctAns === 'select'){
            alert("Fill the form correctly...")
        }else{
            const questionData = {
                question: formData.question,
                option_A: formData.optionA,
                option_B: formData.optionB,
                option_C: formData.optionC,
                option_D: formData.optionD,
                correctANS: correctAns
            }

            createNewQuestion(questionData).then((res)=>{
                console.log(res)
            })

        }
    }



  return (
    <div className=' h-screen flex justify-center items-center'>
        <div className='bg-yellow-400 p-5 rounded-md w-[85%]'>
            <h2 className='text-xl font-bold my-5'>CREATE QUESTION</h2>
            <form className='text-left font-semibold flex flex-col gap-5'>
                <label>Question:
                    <input 
                    className='block mt-2 rounded-md outline-none w-full px-2 py-1'
                    type='text'
                    required
                    name='question'
                    value={formData.question}
                    onChange={handleChange} />
                </label>


                <label>Ans A:
                    <input 
                    className='block mt-2 rounded-md outline-none px-2 py-1'
                    type='text'
                    required
                    name='optionA'
                    value={formData.optionA}
                    onChange={handleChange} />
                </label>

                <label>Ans B:
                    <input 
                    className='block mt-2 rounded-md outline-none px-2 py-1'
                    type='text'
                    required
                    name='optionB'
                    value={formData.optionB}
                    onChange={handleChange} />
                </label>

                <label>Ans C:
                    <input 
                    className='block mt-2 rounded-md outline-none px-2 py-1'
                    type='text'
                    required
                    name='optionC'
                    value={formData.optionC}
                    onChange={handleChange} />
                </label>

                <label>Ans D:
                    <input 
                    className='block mt-2 rounded-md outline-none px-2 py-1'
                    type='text'
                    required
                    name='optionD'
                    value={formData.optionD}
                    onChange={handleChange} />
                </label>




                <label>Correct Ans:
                    <select 
                    value={correctAns} 
                    onChange={(e)=>setCorrectAns(e.target.value)}
                    className='outline-none block rounded-md py-2 px-14'>
                        <option value="">Select</option>
                        <option value={formData.optionA ? formData.optionA : "Select"}>{formData.optionA ? formData.optionA : "Select"}</option>
                        <option value={formData.optionB ? formData.optionB : "Select"}>{formData.optionB ? formData.optionB : "Select"}</option>
                        <option value={formData.optionC ? formData.optionC : "Select"}>{formData.optionC ? formData.optionC : "Select"}</option>
                        <option value={formData.optionD ? formData.optionD : "Select"}>{formData.optionD ? formData.optionD : "Select"}</option>
                    </select>
                </label>

                <button 
                onClick={handleSubmit}
                className='p-2 bg-white rounded-md transition-all duration-150 hover:scale-90'
                >SUBMIT
                </button>
            </form>
        </div>
    </div>
  )

}

export default AdminPage