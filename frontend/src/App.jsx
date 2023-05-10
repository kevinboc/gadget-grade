import Header from "./layouts/Header.jsx"
import AppRoutes from "./routes/AppRoutes.jsx"
import Footer from "./layouts/Footer.jsx"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <Header />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App