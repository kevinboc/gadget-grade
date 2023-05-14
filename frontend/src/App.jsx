import Header from "./layouts/Header.jsx"
import AppRoutes from "./routes/AppRoutes.jsx"
import Footer from "./layouts/Footer.jsx"
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <Router>
          <Header />
        </Router>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App