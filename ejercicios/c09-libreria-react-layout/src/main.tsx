import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importación de estilos obligatoria para Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css' 
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)