import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Developers from "./pages/Developers";
import Footer from "./pages/Footer";
import Join from "./pages/Join";
import Loading from "./pages/Header";
import Partners from "./pages/Partners";
import Properties from "./pages/Properties";
import Subscribe from "./pages/Subscribe";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import { MainProvider } from "./context/mainContext";

function App() {
  return (
    <>
      <MainProvider>
        <BrowserRouter>
          <AnimatedBackground count={50} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <NavBar />
            <Loading />
            <Partners />
            <Properties />
            <AboutUs />
            <Developers />
            <Join />
            <Subscribe />
            <Footer />
          </div>
        </BrowserRouter>
      </MainProvider>
    </>
  );
}

export default App;
