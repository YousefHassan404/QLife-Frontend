import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HowWork from '../Components/HowWork/HowWork'
export default function Work() {
  return (
    <>
      <Header />
      <main>
        <section>
          <HowWork/>
        </section>
      </main>

      <Footer />
    </>
  );
}
