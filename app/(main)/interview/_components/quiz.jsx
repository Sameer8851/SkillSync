"use client"

import { generateQuiz } from '@/actions/interview';
import useFetch from '@/hooks/use-fetch';
import React, { useState } from 'react'


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setanswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const {
    loading: generateinQuiz,
    fn: generateQuizFn,
    data: quizData,
  } = useFetch(generateQuiz);

  if(!quizData){
    return (
      
    )
  }

  return (
    <div>Quiz</div>
  )
}

export default Quiz