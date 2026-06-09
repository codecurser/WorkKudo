import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')

const AppTree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// react-snap pre-renders HTML into the root — use hydrate so React
// attaches to existing markup instead of wiping and re-rendering.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, AppTree)
} else {
  createRoot(rootElement).render(AppTree)
}
