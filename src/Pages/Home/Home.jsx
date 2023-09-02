import React from "react";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Hero from "../../Components/HomeContents/Hero";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default Home;
