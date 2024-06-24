import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import NewsHolder from './NewsHolder'

describe('NewsHolder Component', () => {
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
            id: 'mock_id',
        }

        const onSelectMock = jest.fn()

        const { getByText, getByAltText } = render(
            <Router>
                <NewsHolder article={mockArticle} onSelect={onSelectMock} />
            </Router>
        )

        expect(getByText('Mock Title')).toBeInTheDocument()
        expect(getByText('Mock Abstract')).toBeInTheDocument()
        expect(getByAltText('Mock Title')).toBeInTheDocument()

        fireEvent.click(getByText('Mock Title'))

        expect(onSelectMock).toHaveBeenCalledWith(mockArticle)
    })

    it('renders with default values when article prop is not provided', () => {
        const { getByText } = render(
            <Router>
                <NewsHolder />
            </Router>
        )

        expect(getByText('Title')).toBeInTheDocument()
        expect(getByText('Abstract')).toBeInTheDocument()
    })
})
