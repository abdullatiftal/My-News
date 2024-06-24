import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Main from './Main'

jest.mock('./news/NewsHolder', () => ({ article, onSelect }) => (
    <div
        data-testid={`news-holder-${article.id}`}
        onClick={() => onSelect(article)}
    >
        NewsHolder Component - {article.title}
    </div>
))

describe('Main Component', () => {
    const mockNews = {
        results: [
            { id: 1, title: 'Article 1' },
            { id: 2, title: 'Article 2' },
            { id: 3, title: 'Article 3' },
        ],
    }

    it('renders loading state', () => {
        const { getByText } = render(<Main loading={true} />)

        expect(getByText('Loading...')).toBeInTheDocument()
    })

    it('renders error state', () => {
        const { getByText } = render(<Main error={true} />)

        expect(
            getByText('There was an error loading the data...')
        ).toBeInTheDocument()
    })

    it('renders news articles', () => {
        const { getByTestId } = render(<Main news={mockNews} />)

        mockNews.results.forEach((article) => {
            const articleElement = getByTestId(`news-holder-${article.id}`)
            expect(articleElement).toBeInTheDocument()
            expect(articleElement).toHaveTextContent(
                `NewsHolder Component - ${article.title}`
            )
        })
    })

    it('calls onSelect handler when article is selected', () => {
        const mockOnSelect = jest.fn()
        const { getByTestId } = render(
            <Main news={mockNews} onSelect={mockOnSelect} />
        )

        mockNews.results.forEach((article) => {
            fireEvent.click(getByTestId(`news-holder-${article.id}`))
            expect(mockOnSelect).toHaveBeenCalledWith(article)
        })
    })
})
