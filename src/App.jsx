import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Hero } from "./pages/Hero";
import { Content } from "./pages/Content";
import { Footer } from "./pages/Footer";
import { Why } from "./pages/Why";
import { Major } from "./pages/Major";
import { Spotlight } from "./pages/Spotlight";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Content />
      <Why />
      <Major />
      <Spotlight />
      <Footer />
    </div>
  );
}

export default App;
