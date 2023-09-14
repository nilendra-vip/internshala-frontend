'use client'
import { asyncEmployeeCreateJob } from '@/store/Actions/employeeActions';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
  const router = useRouter()
  const { employee, internships, jobs , errors } = useSelector(
    (state) => state.employeeReducer
  );
  const dispatch = useDispatch()
  const createJobHandler = () => {
    const newJob = {
      title: "DevOps Inc",
      skills: "Node JS , Express JS , MongoDB , React Js , Redux JS",
      jobType:'In Office',
      openings:'10',
      description :'This is a software developement job.',
      performances:'good',
      salary:"45000",
      pearks:'5 days',
      assesments:'Why should we hire you ?',
    };
    dispatch(asyncEmployeeCreateJob(newJob));
    if(errors.length === 0){
      router.push('/employee/auth')
    }
  };
  return (
    <div className='conatiner mt-5'>
      <h1>CREATE Job FORM</h1>
      <button onClick={createJobHandler} className="btn btn-success">create Job</button>
    </div>
  )
}

export default page