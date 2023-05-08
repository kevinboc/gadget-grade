import Header from "./layouts/Header.jsx"
import AppRoutes from "./routes/AppRoutes.jsx"
import Footer from "./layouts/Footer.jsx"

const App = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App