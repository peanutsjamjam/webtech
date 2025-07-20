import { StrictMode } from 'react'
import { Provider } from '@/components/ui/provider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import { Page1 } from './Page1'
import { Page2 } from './Page2'
import { Page3 } from './Page3'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
