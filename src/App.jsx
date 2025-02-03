import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import Contents from "./pages/Contents.jsx";
import MouseEffect from "./animation/MouseEffect.jsx";

export default function App() {
  return (
    <>
      <Header />
      <MouseEffect />
      <Contents />
      <Footer />
    </>
  );
}
