import "./App.css";
import { Navbar } from "./page/Navbar.JSX";
import { Hero } from "./page/Hero.JSX";
import { Main } from "./page/Main.JSX";
import { Footer } from "./page/Footer.JSX";
import { Why } from "./page/Why.JSX";
import { Major } from "./page/Major.JSX";
import { Spotlight } from "./page/Spotlight";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Main />
      <Why />
      <Major />
      <Spotlight />
      <Footer />
    </div>
  );
}

export default App;
