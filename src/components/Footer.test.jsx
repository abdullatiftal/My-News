import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'

describe('Footer Component', () => {
    it('renders copyright text with current year', () => {
        const { getByText } = render(<Footer />)

        const currentYear = new Date().getFullYear()
        const expectedText = `© Copyright ${currentYear}. Handcrafted by Abdul Latif`

        expect(getByText(expectedText)).toBeInTheDocument()
    })
})
