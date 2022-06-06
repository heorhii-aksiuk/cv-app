import React from 'react'
import ReactDOM from 'react-dom/client'
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'
import './styles/index.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './constants'
import App from './components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
