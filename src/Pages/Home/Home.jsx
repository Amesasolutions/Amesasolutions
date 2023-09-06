import React from "react";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Hero from "../../Components/HomeContents/Hero";
import Counters from "../../Components/HomeContents/Counters";
import Offer from "../../Components/HomeContents/Offer";
import Tech from "../../Components/HomeContents/Tech";
import Dvider from "../../Components/HomeContents/Dvider";
import OurWebsites from "../../Components/HomeContents/OurWebsites";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Counters/>
        <Offer/>
        <Tech/>
        <Dvider/>
        <OurWebsites/>
      </main>
      <Footer />
    </>
  );
}

export default Home;
