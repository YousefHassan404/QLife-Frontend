import React from 'react'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Signup from '../Components/SignUp/Signup';
export default function SignUp() {
  return (
    <>
    <Header />
      <main>
        <section>
            <Signup/>
        </section>
      </main>
      <Footer />
    </>
  )
}
