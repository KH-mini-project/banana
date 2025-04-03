import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppProvider from './app/providers/AppProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
)
