import CatalogSection from "./features/home/catalogSection/CatalogSection";
import Faq from "./features/home/faq/Faq";
import Footer from "./features/home/footer/Footer";
import Header from "./features/home/header/Header";
import Hero from "./features/home/hero/Hero";
import Blog from "./features/home/blog/Blog";
import Services from "./features/home/services/Services";
import Timeline from "./features/home/timeline/Timeline";

const App = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <Timeline />
    <Blog />
    <Faq />
    <CatalogSection />
    <Footer />
  </>
);

export default App;
