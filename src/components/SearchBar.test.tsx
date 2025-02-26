import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'
import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('SearchBar Component', () => {
  let pushMock: jest.Mock
  jest.useFakeTimers()

  beforeEach(() => {
    pushMock = jest.fn()
    ;(useRouter as jest.MockedFunction<typeof useRouter>).mockReturnValue({
      push: pushMock,
      back: function (): void {
        throw new Error('Function not implemented.')
      },
      forward: function (): void {
        throw new Error('Function not implemented.')
      },
      refresh: function (): void {
        throw new Error('Function not implemented.')
      },
      replace: function (): void {
        throw new Error('Function not implemented.')
      },
      prefetch: function (): void {
        throw new Error('Function not implemented.')
      },
    })
  })

  test('renders search input and logo', () => {
    render(<SearchBar />)

    const input = screen.getByPlaceholderText(
      'Buscar productos, marcas y más...',
    )
    expect(input).not.toBeNull()
    const meliLogo = screen.getByAltText('Mercado Libre')
    expect(meliLogo).not.toBeNull()
  })

  test('updates search query on input change', () => {
    render(<SearchBar />)
    const input: HTMLInputElement = screen.getByPlaceholderText(
      'Buscar productos, marcas y más...',
    )

    fireEvent.change(input, { target: { value: 'laptop' } })
    expect(input.value).toBe('laptop')
  })

  test('navigates to search results on Enter key press', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText(
      'Buscar productos, marcas y más...',
    )

    fireEvent.change(input, { target: { value: 'laptop' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(pushMock).toHaveBeenCalledWith('/items?search=laptop')
  })

  test('navigates to search results on search icon click', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText(
      'Buscar productos, marcas y más...',
    )
    const searchIcon = screen.getByAltText('Search Icon')

    fireEvent.change(input, { target: { value: 'laptop' } })
    fireEvent.click(searchIcon)

    expect(pushMock).toHaveBeenCalledWith('/items?search=laptop')
  })

  test('does not navigate on empty search', () => {
    render(<SearchBar />)
    const searchIcon = screen.getByAltText('Search Icon')

    fireEvent.click(searchIcon)

    expect(pushMock).not.toHaveBeenCalled()
  })

  test('navigates to home on logo click', () => {
    render(<SearchBar />)
    const logo = screen.getByAltText('Mercado Libre')

    fireEvent.click(logo)
    jest.runAllTimers()
    fireEvent.click(logo)

    expect(pushMock).toHaveBeenCalledWith('/')
  })
})
