import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Main from './components/Main'
import NewsDetail from './components/news/NewsDetail'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    const [news, setNews] = useState(null)
    const [selectedNews, SetSelectedNews] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY
        const apiUrl = process.env.REACT_APP_API_URL
        const fetchItems = async () => {
            setIsError(null)
            setIsLoading(true)
            try {
                const result = await axios(`${apiUrl}/1.json?api-key=${apiKey}`)
                setNews(result.data)
            } catch (err) {
                setIsError(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchItems()
    }, [])

    return (
        <>
            <Header />
            <div className="main min-h-[100dvh] px-[15px] md:px-0">
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Main
                                    news={news}
                                    loading={isLoading}
                                    error={isError}
                                    onSelect={SetSelectedNews}
                                />
                            }
                        />
                        <Route
                            path="/detail"
                            element={<NewsDetail article={selectedNews} />}
                        />
                    </Routes>
                </Router>
            </div>
            <Footer />
        </>
    )
}

export default App
