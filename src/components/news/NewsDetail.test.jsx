import React from 'react'
import { render } from '@testing-library/react'
import NewsDetail from './NewsDetail'

const scrollToMock = jest.fn()
Object.defineProperty(window, 'scrollTo', { value: scrollToMock })

describe('NewsDetail Component', () => {
    beforeEach(() => {
        scrollToMock.mockClear()
    })

    it('renders correctly with article data', () => {
        const mockArticle = {
            title: 'Mock Title',
            media: [
                {
                    'media-metadata': [
                        { url: 'mock_image_url' },
                        { url: 'mock_image_url' },
                        { url: 'mock_image_url' },
                    ],
                },
            ],
            abstract: 'Mock Abstract',
            source: 'Mock Source',
            url: 'mock_url',
        }

        const { getByText, getByAltText, getByTestId } = render(
            <NewsDetail article={mockArticle} />
        )

        expect(getByText('Mock Title')).toBeInTheDocument()
        expect(getByAltText('Mock Title')).toBeInTheDocument()
        expect(getByText('Mock Source')).toBeInTheDocument()
        expect(getByText('Mock Abstract')).toBeInTheDocument()

        const linkElement = getByTestId('view-article-link')
        expect(linkElement).toBeInTheDocument()
        expect(linkElement).toHaveAttribute('href', 'mock_url')
    })

    it('calls window.scrollTo on componentDidMount', () => {
        render(<NewsDetail article={{}} />)

        expect(scrollToMock).toHaveBeenCalledWith(0, 0)
    })
})
