import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Navigation from "./components/Navigation"
import AboutPage from "./pages/AboutPage"
import NewsPage from "./pages/NewsPage"
import ContactsPage from "./pages/ContactsPage"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
    <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/news" element={<NewsPage/>}></Route>
          <Route path="/contact" element={<ContactsPage/>}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App