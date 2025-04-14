import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './components/ui/optimized-animations.css'
import './components/ui/optimized-mobile-animations.css'
import './components/ui/optimized-skills.css'

createRoot(document.getElementById("root")!).render(<App />);
