'use client'
import { asyncEmployeeCreateInternship } from '@/store/Actions/employeeActions';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
  const router = useRouter()
  const { employee, internships, jobs , errors } = useSelector(
    (state) => state.employeeReducer
  );
  const dispatch = useDispatch()
  const createInternshipHandler = () => {
    const newInternship = {
      profile: "Backend Developer",
      skills: "Node JS , Express JS , MongoDB , React Js , Redux JS",
      internshipType:'In Office',
      openings:'10',
      from:"12-10-2023",
      to:"12-12-2023",
      duration: "2 months",
      responsibility :'Handle backend of MNC projects and write clean and readable code.',
      stipend:{
        status:"Fixed",
        amount:"20000",
      },
      pearks:'5 days',
      assesments:'Why should we hire you ?',
    };
    dispatch(asyncEmployeeCreateInternship(newInternship));
    if(errors.length === 0){
      router.push('/employee/auth')
    }
  };
  return (
    <div className='conatiner mt-5'>
      <h1>CREATE INTERNSHIP FORM</h1>
      <button onClick={createInternshipHandler} className="btn btn-success">create Internship</button>
    </div>
  )
}

export default page