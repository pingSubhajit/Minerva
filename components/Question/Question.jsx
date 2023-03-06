import styles from './Question.module.scss'
import {Parser} from "html-to-react";
import {Button} from "@chakra-ui/react";
import {useEffect, useState} from "react";

const Question = ({question, isAnswered, setIsAnswered, stats, setStats}) => {
    const [buttonColors, setButtonColors] = useState({
        1: 'gray',
        2: 'gray',
        3: 'gray',
        4: 'gray'
    })

    const [buttonVariants, setButtonVariants] = useState({
        1: 'outline',
        2: 'outline',
        3: 'outline',
        4: 'outline'
    })

    const isCorrect = (option) => {
        setIsAnswered(true)
        const changedButtonColors = {...buttonColors}
        question?.correctOption !== option ? changedButtonColors[option] = 'red' : changedButtonColors[option] = 'gray'
        changedButtonColors[question?.correctOption] = 'whatsapp'

        const changedButtonVariants = {...buttonVariants}
        changedButtonVariants[option] = 'solid'
        changedButtonVariants[question?.correctOption] = 'solid'

        setButtonColors(changedButtonColors)
        setButtonVariants(changedButtonVariants)

        let changedStats = {...stats}

        if (question?.correctOption === option) {
            changedStats.correct = changedStats.correct + 1
        } else {
            changedStats.incorrect = changedStats.incorrect + 1
        }

        changedStats.total = changedStats.total + 1
        setStats(changedStats)
    }

    useEffect(() => {
        if (!isAnswered) {
            setButtonColors({
                1: 'gray',
                2: 'gray',
                3: 'gray',
                4: 'gray'
            })

            setButtonVariants({
                1: 'outline',
                2: 'outline',
                3: 'outline',
                4: 'outline'
            })
        }
    }, [isAnswered])
    
    return (
        <div className={styles.question}>
            <div className={styles.question__question_container}>
                {Parser().parse(question?.questionBody?.html)}
            </div>

            <div className={styles.question__options_container}>
                <Button
                    onClick={() => isCorrect(1)} isDisabled={isAnswered}
                    colorScheme={buttonColors[1]} size='lg'
                    variant={buttonVariants[1]}
                >
                    (a) {question?.option1}
                </Button>

                <Button
                    onClick={() => isCorrect(2)} isDisabled={isAnswered}
                    colorScheme={buttonColors[2]}
                    variant={buttonVariants[2]}
                >
                    (b) {question?.option2}
                </Button>

                <Button
                    onClick={() => isCorrect(3)} isDisabled={isAnswered}
                    colorScheme={buttonColors[3]}
                    variant={buttonVariants[3]}
                >
                    (c) {question?.option3}
                </Button>

                <Button
                    onClick={() => isCorrect(4)} isDisabled={isAnswered}
                    colorScheme={buttonColors[4]}
                    variant={buttonVariants[4]}
                >
                    (d) {question?.option4}
                </Button>
            </div>
        </div>
    )
}

export default Question
