import React, {useEffect} from "react";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Contents from "../../Components/AboutContents/Contents";

function About() {
  useEffect(() => {
    document.title = "About us - Amesa Solutions"
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

export default About;
