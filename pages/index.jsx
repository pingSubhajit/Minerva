import styles from '/styles/pages/Home.module.scss'
import Head from "next/head"
import {useEffect, useState} from "react"
import {getAllQuestions} from "../helpers/content"
import Question from "../components/Question/Question"
import {Button, Alert, AlertIcon, AlertTitle, AlertDescription} from "@chakra-ui/react"

const Home = () => {
    const [allQuestions, setAllQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] = useState(false)

    const [stats, setStats] = useState({
        correct: 0,
        incorrect: 0,
        total: 0
    })

    useEffect(() => {
        getAllQuestions().then((response) => {
            setAllQuestions(response)
            const index = Math.floor(Math.random() * response.length)
            setCurrentQuestion(index)
        })
    }, [])

    const getNewQuestion = () => {
        const index = Math.floor(Math.random() * allQuestions.length)
        setCurrentQuestion(index)
        setIsCurrentQuestionAnswered(false)
    }

    return (
        <div className={styles.app}>
            <Head>
                <title>Project Minerva</title>
                <meta
                    name="description"
                    content="Figure it out yourself, no description provided"
                />
            </Head>


            <Question
                question={allQuestions[currentQuestion]} isAnswered={isCurrentQuestionAnswered}
                setIsAnswered={setIsCurrentQuestionAnswered} stats={stats} setStats={setStats}
            />

            <div className={styles.app__next_button}>
                {isCurrentQuestionAnswered && <Button onClick={getNewQuestion} size='lg' variant='outline' colorScheme='twitter'>Next Question</Button>}
            </div>

            <div className={styles.app__stats_container}>
                <Alert status='info' variant='subtle' colorScheme='twitter'>
                    Total: {stats.total} &nbsp; &nbsp; Correct: {stats.correct} &nbsp; &nbsp; {(Math.round(100 * stats.correct / stats.total * 10) / 10) || 0.0}%
                </Alert>
            </div>
        </div>
    )
}

export default Home
