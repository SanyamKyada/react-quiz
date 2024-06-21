import React, { useCallback, useState } from 'react'
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
    const [userAnswers, setAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });
    }, []); // here, the state updating function (setAnswers) is not an dependency caz it will not change

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (isQuizComplete) {
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id='quiz'>
            <Question
                key={activeQuestionIndex} // when this key changes, React will distroy old QuestionTimer component instance and create a new one. So it is unmount and remount basically
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}