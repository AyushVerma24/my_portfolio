import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './components/ui/animations.css'
import './components/ui/mobile-animations.css'

createRoot(document.getElementById("root")!).render(<App />);
