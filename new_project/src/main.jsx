import { render } from 'preact'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app.jsx'
import { BrowserRouter } from 'react-router-dom'

render(<App />, document.getElementById('app')).render(
    <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter> 
  </StrictMode>,
)
