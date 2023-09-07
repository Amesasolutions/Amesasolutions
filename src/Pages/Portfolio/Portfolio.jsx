import React, {useEffect} from "react";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Contents from "../../Components/PortfolioContents/Contents";

function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio - Amesa Solutions"
  }, [])

  return (
    <>
      <Header />
      <main>
        <Contents/>
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
