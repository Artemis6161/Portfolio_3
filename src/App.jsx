import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SocialSidebar from './components/SocialSidebar'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'
import FadeInOnScroll from './components/animations/FadeInOnScroll';

function App() {
  

  return (
    <>
    <Navbar />
      <SocialSidebar />
      <main className="min-h-screen pt-[80px]">
        <Hero />
        <FadeInOnScroll><About /></FadeInOnScroll>
        <FadeInOnScroll><Projects /></FadeInOnScroll>
        <FadeInOnScroll><Skills /></FadeInOnScroll>
        <FadeInOnScroll><Contact /></FadeInOnScroll>
      </main>
      <Footer />
    </>
   
  )
}

export default App
