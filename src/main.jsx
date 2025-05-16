import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer} from 'react-toastify';
import App from './App.jsx'
import UserContext from './UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <UserContext>
    <App />
    <ToastContainer />
  </UserContext>,
)
