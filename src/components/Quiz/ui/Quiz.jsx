import React, { useState, useRef, useEffect } from 'react'
import styles from './style.module.css'

import { data } from '@assets/data'
import { Container } from '@components/Container'

const tickets = require('@assets/tickets.json').tickets

export const Quiz = () => {
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  let [ticket, setTicket] = useState(randomInt(0, tickets.length - 1))
  let [index, setIndex] = useState(0)
  let [question, setQuestion] = useState(tickets[ticket].questions[index])
  let [lock, setLock] = useState(false)
  let [score, setScore] = useState(0)
  let [result, setResult] = useState(false)
  
  let Option1 = useRef(null)
  let Option2 = useRef(null)
  let Option3 = useRef(null)
  let Option4 = useRef(null)

  let option_array = [Option1, Option2, Option3, Option4]

  const importImage = (path) => {
    try {
      return require(`@assets/images/${path}`)
    } catch (error) {
      console.error('Error importing IMG')
      return null
    }
  }

  const checkAnswer = (e, answer) => {
    if (lock) {
      return
    }
  
    if (question.answer === answer) {
      e.target.classList.add(styles.correct)
      setScore(prev => prev + 1)
    } else {
      e.target.classList.add(styles.wrong)
      option_array[question.answer - 1].current.classList.add(styles.correct)
    }
    setLock(true)
  }

  const next = () => {
    if (lock) {
      if (index === tickets[ticket]?.questions.length - 1) {
        setResult(true)
        return
      }

      setIndex(++index)
      setQuestion(tickets[ticket].questions[index])
      setLock(false)
      option_array.map((option) => {
        option.current.classList.remove(styles.wrong)
        option.current.classList.remove(styles.correct)
        return null
      })
    }
  }

  const reset = () => {
    setIndex(0)
    setTicket(randomInt(0, tickets.length - 1))
    setQuestion(tickets[ticket].questions[0])
    setScore(0)
    setLock(false)
    setResult(false)
  }
    
  return (
    <Container>
      <div className={styles.quizContainer}>
        <div className={styles.box}>
          {result ? <>
            <p>Результат: {score} из {tickets[ticket]?.questions.length}</p>
            <button onClick={reset}>Пройти заново</button>
          </>
          :
          <>
            <h5>{tickets[ticket].id}</h5>
            <h2>{index + 1}. {question.text}</h2>
            {question.image && <div className={styles.imgContainer}>
              <img src={question.image ? importImage(question.image.src) : ''} alt={question.image.alt} />
            </div>}
            <ul>
              {question.options.map((option, index) => (
                <li ref={option_array[index]} onClick={(e) => {checkAnswer(e, index + 1)}}>
                  {option}
                </li>
              ))}
            </ul>
            <button onClick={next}>Далее</button>
            <div className={styles.index}>{index + 1} из {tickets[ticket]?.questions.length || 0}</div>
          </>
          }
          {console.log(tickets[ticket].length)}
        </div>
      </div>
    </Container>
  )
}