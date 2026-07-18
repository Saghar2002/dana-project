import Header from "./features/home/header/Header";
import Hero from "./features/home/hero/Hero";
import Services from "./features/home/services/Services";
import Timeline from "./features/home/timeline/Timeline";
import Blog from "./features/home/blog/Blog";
import Faq from "./features/home/faq/Faq";
import CatalogSection from "./features/home/catalogSection/CatalogSection";
import Footer from "./features/home/footer/Footer";


function App() {


  return (
    <>
      <Header />
      <Hero />
      <Services></Services>
      <Timeline />
      <Blog />
      <Faq />
      <CatalogSection></CatalogSection>
      <Footer />
      
    </>
  )
}

export default App
