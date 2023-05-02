import Header from "./layouts/Header.jsx"
import Navbar from "./layouts/Navbar.jsx"
import AppRoutes from "./routes/AppRoutes.jsx"

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App