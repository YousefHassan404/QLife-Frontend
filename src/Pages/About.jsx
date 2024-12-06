import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Vision from "../Components/Vision/Vision";
export default function About() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Vision></Vision>
        </section>
      </main>

      <Footer />
    </>
  );
}
