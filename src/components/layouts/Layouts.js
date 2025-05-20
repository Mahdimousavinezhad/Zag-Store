import Footer from "./Footer";
import Header from "./Header";
import PromoBanner from "./PromoBanner";

function Layouts({ children }) {
  return (
    <>
      <PromoBanner />
      <Header />
      <main className="bg-background-low-gray min-h-svh py-10">{children}</main>
      <Footer />
    </>
  );
}

export default Layouts;
