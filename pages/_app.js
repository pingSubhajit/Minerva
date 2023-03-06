import '../styles/global/globals.scss'
import {ChakraProvider} from '@chakra-ui/react'
import Base from '../components/Base'
import {ApolloProvider} from "@apollo/client"
import client from "../apiClient"

function Minerva({ Component, pageProps }) {
    return (
        <main>
            <ApolloProvider client={client}>
                <ChakraProvider>
                    <Base>
                        <Component {...pageProps}/>
                    </Base>
                </ChakraProvider>
            </ApolloProvider>
        </main>
    )
}

export default Minerva
