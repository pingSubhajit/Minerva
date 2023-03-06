import {gql} from "@apollo/client"
import client from "../apiClient"

export const getAllQuestions = async () => {
    const QUERY = gql`
        query Questions {
            questions {
                correctOption
                createdAt
                id
                option1
                option2
                option3
                option4
                subject
                questionBody {
                    html
                    text
                }
            }
        }
    `

    const { data } = await client.query({query: QUERY})
    return data.questions
}