import About from "./components/About";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import Service from "./components/Service";
function App() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <LogoSlider />
      <Service />
      <About />
      <Counter />
      {/* <Portfolio /> */}
      {/* <Reviews /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default App;
