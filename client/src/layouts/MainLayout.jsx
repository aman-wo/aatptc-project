import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
      <>
            <Header />
                  <Navbar />

                        <main>
                                {children}
                                      </main>

                                            <Footer />
                                                </>
                                                  );
                                                  }

                                                  export default MainLayout;