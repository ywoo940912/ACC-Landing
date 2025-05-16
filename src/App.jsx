import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Hero } from "./pages/Hero";
import { Content } from "./pages/Content";
import { Footer } from "./pages/Footer";
import { Why } from "./pages/Why";
import { Major } from "./pages/Major";
import { Spotlight } from "./pages/Spotlight";
import { Dummy } from "./pages/dummy";

function App() {
  return (
    <div>
      <Navbar />
      <Dummy />
      <Content />
      <Why />
      <Major />
      <Spotlight />
      <Footer />
    </div>
  );
}

export default App;
