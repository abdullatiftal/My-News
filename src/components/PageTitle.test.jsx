import React from 'react'
import { render } from '@testing-library/react'
import PageTitle from './PageTitle'

describe('PageTitle Component', () => {
    it('renders with default title when no title prop is provided', () => {
        const { getByText } = render(<PageTitle />)
        expect(getByText('No Title')).toBeInTheDocument()
    })

    it('renders with provided title', () => {
        const { getByText } = render(<PageTitle title="Custom Title" />)
        expect(getByText('Custom Title')).toBeInTheDocument()
    })
})
