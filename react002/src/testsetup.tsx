import { vi } from 'vitest'
import { render } from '@testing-library/react'
import { Provider } from '@/components/ui/provider'
import { BrowserRouter } from 'react-router'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

export const myrender = (tag: any) => {
  render(<Provider><BrowserRouter>{ tag }</BrowserRouter></Provider>);
}
