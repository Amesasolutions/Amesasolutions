import React, {useEffect} from "react";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Contents from "../../Components/ContactContents/Contents";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Amesa Solutions"
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

export default Contact;
