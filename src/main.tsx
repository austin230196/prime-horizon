import React from 'react'
import {createRoot} from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme from './theme.ts'
import App from './App.tsx'
import './index.css'


const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
