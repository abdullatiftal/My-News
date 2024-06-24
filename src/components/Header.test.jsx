import React from 'react'
import { render, act } from '@testing-library/react'
import Header from './Header'

describe('Header Component', () => {
    it('renders correctly', () => {
        act(() => {
            render(<Header />)
        })

        const { getByText } = render(<Header />)
        expect(getByText('Menu')).toBeInTheDocument()
    })
})
