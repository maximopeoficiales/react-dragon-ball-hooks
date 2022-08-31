import ReactDOM from 'react-dom/client'
import App from './App'
import { DragonBallProvider } from './context/DragonBallContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <DragonBallProvider>
    <App />
  </DragonBallProvider>
  // </React.StrictMode>
)
