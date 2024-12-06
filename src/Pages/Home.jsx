import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import OurServices from "../Components/OurServices/OurServices";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Hero></Hero>
          <OurServices></OurServices>
        </section>
      </main>

      <Footer />
    </>
  );
}
